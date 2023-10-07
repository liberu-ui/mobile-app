import React from 'react';
import { WebView } from 'react-native-webview';
import { BackHandler } from 'react-native';
import Constants from 'expo-constants';
import { AppState, AppStateStatus } from 'react-native';
import { Notifications } from 'expo';

/**
 * Props for the EnsoWebView component.
 */
interface EnsoWebViewProps {
  style: any; // replace 'any' with the correct type
}

/**
 * State for the EnsoWebView component.
 */
interface EnsoWebViewState {
  canGoBack: boolean;
  uri: string;
}

/**
 * EnsoWebView component.
 */
class EnsoWebView extends React.Component<EnsoWebViewProps, EnsoWebViewState> {
  private webView: WebView | null = null;

  constructor(props: EnsoWebViewProps) {
    super(props);
    this.state = {
      canGoBack: false,
      uri: Constants.manifest.extra.api_url,
    };
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  /**
   * Handles the hardware back button press event.
   * Navigates the WebView back to the previous page.
   * @returns True if the navigation is successful, else false.
   */
  private handleBackButton = (): boolean => {
    if (this.webView) {
      this.webView.goBack();
      return true;
    }
    return false;
  };

  /**
   * Handles the event received from WebView.
   * If the event type is 'notification' and AppState is not 'active', presents a local notification.
   * @param event - The event received from WebView.
   */
  private handleEvent(event: { type: string; title: string; body: string }): void {
    const { type, title, body } = event;
    if (type === 'notification' && (!title || !body)) {
      return;
    }

    if (AppState.currentState !== 'active') {
      Notifications.presentLocalNotificationAsync({
        title,
        body,
      });
    }
  }

  render() {
    return (
      <WebView
        source={{ uri: this.state.uri }}
        style={this.props.style}
        ref={webView => (this.webView = webView)}
        onMessage={event => {
          this.handleEvent(JSON.parse(event.nativeEvent.data));
        }}
        javaScriptEnabled={true}
      />
    );
  }
}

export default EnsoWebView;