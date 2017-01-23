import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight

} from 'react-native';
import themes from '../../themes/base-theme.js';

export default class Home extends Component {
    constructor() {
        super();
    }
    _getBackgroundColor()
    {
        return({backgroundColor: this.props.color});
    }
    render() {
        let bgColor = this._getBackgroundColor(),
            pushObj = {name: this.props.navigatorKey, color: this.props.color, title: this.props.navigatorTitle};
        return (
            <TouchableHighlight onPress={()=>{
                    this.props.changeTheme();
                    this.props._navigator.push(pushObj);
                }}
                underlayColor='transparent'>
                <View style={[styles.circle, bgColor]} />
            </TouchableHighlight>
        );
    }
}

const styles = StyleSheet.create({
    circle:{
        width: 100,
        height: 100,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        borderRadius:50
    }
});