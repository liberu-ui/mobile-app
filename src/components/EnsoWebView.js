import React from 'react';
import {WebView} from 'react-native-webview';
import {BackHandler} from 'react-native';
import Constants from "expo-constants";
import { AppState } from 'react-native';
import {Notifications} from "expo";

class EnsoWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            canGoBack: false,
            uri: Constants.manifest.extra.api_url,
        };
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.handleBackButton);
    }

    handleBackButton = () => {
        this.webView.goBack();
        return true;
    };

    onEvent(event) {
        switch (event.type) {
            case 'notification':
                if (! event.title || ! event.body) {
                    return;
                }

                if (AppState.currentState !== 'active') {
                    Notifications.presentLocalNotificationAsync({
                        title: event.title,
                        body: event.body
                    });
                }
        }
    }

    render() {
        return <WebView
            source={{uri: this.state.uri}}
            style={this.props.style}
            ref={(webView) => this.webView = webView}
            onMessage={event => {
                this.onEvent(JSON.parse(event.nativeEvent.data))
             }}
            javaScriptEnabled={true}
        />;
    }
}

export default EnsoWebView;
