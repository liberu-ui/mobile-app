import React from 'react';
import EnsoWebView from './src/components/EnsoWebView';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

/**
 * The main component of the application.
 */
class App extends React.Component {
    /**
     * Constructor for the App component.
     * @param props The properties passed to the component.
     */
    constructor(props: any) {
        super(props);
    }

    /**
     * Render method of the App component.
     * @returns The rendered JSX elements.
     */
    render(): JSX.Element {
        return (
            <View style={styles.container}>
                <EnsoWebView />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    /**
     * Styles for the container View.
     */
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
    },
});

export default App;