import React from 'react';
import EnsoWebView from './src/components/EnsoWebView.js';
import { View } from "react-native";
import { StyleSheet} from 'react-native';
import Constants from "expo-constants";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <View style={styles.container}>
            <EnsoWebView/>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop: Constants.statusBarHeight,
    },
});

export default App;
