import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight

} from 'react-native';
//import styles from '../styles';
import ColorCircle from '../../components/ColorCircle';
var themeColor;
export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            colorActive: 'red'
        };
    }
    componentWillMount()
     {
         //themeColor = this.props.themeColor;
         console.log('Home componentWillMount');
     }
    /*componentWillMount()
    {
        console.log('Home componentWillMount');
    }
    componentDidMount()
    {
        console.log('Home componentDidMount');
    }
    componentWillReceiveProps(nextProps)
    {
        console.log('Home componentWillReceiveProps _and nextProps: ', nextProps);
    }
    /!*shouldComponentUpdate(nextProps, nextState)
     {
     console.log('shouldComponentUpdate _and nextProps: ', nextProps);
     console.log('shouldComponentUpdate _and nextState: ', nextState);
     }*!/
    componentWillUpdate(nextProps, nextState)
    {
        console.log('Home componentWillUpdate _and nextProps: ', nextProps);
        console.log('Home componentWillUpdate _and nextState: ', nextState);
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log('Home componentDidUpdate _and prevProps: ', prevProps);
        console.log('Home componentDidUpdate _and prevState: ', prevState);
    }
    componentWillUnmount()
    {
        console.log('Home componentWillUnmount');
    }*/
    _setThemeColor(color)
    {
        this.setState({colorActive: color});
        //themeColor = color;
    }
    _getBackgroundColor()
    {
        return({backgroundColor: this.state.colorActive});
    }
    render() {
        console.log(this.props.themeColor);
        let bgColor = this._getBackgroundColor();
        return (
            <View style={[styles.container, bgColor]}>
                <View style={styles.circleContainer}>
                    <View style={styles.circleRow}>
                        <ColorCircle
                            color="gray"
                            navigatorKey="form"
                            navigatorTitle="Red"
                            _navigator={this.props.navigator}
                            changeTheme={this._setThemeColor.bind(this, "gray")}
                        />
                        <ColorCircle
                            color="yellow"
                            navigatorKey="form"
                            navigatorTitle="Yellow"
                            _navigator={this.props.navigator}
                            changeTheme={this._setThemeColor.bind(this, "yellow")}
                        />
                        <ColorCircle
                            color="green"
                            navigatorKey="form"
                            navigatorTitle="Green"
                            _navigator={this.props.navigator}
                            changeTheme={this._setThemeColor.bind(this, "green")}
                        />
                    </View>
                    <View style={styles.circleRow}>
                        <ColorCircle
                            color="blue"
                            navigatorKey="form"
                            navigatorTitle="Blue"
                            _navigator={this.props.navigator}
                            changeTheme={this._setThemeColor.bind(this, "blue")}
                        />
                        <ColorCircle
                            color="black"
                            navigatorKey="form"
                            navigatorTitle="Black"
                            _navigator={this.props.navigator}
                            changeTheme={this._setThemeColor.bind(this, "black")}
                        />
                        <ColorCircle
                            color="purple"
                            navigatorKey="form"
                            navigatorTitle="Purple"
                            _navigator={this.props.navigator}
                            changeTheme={this._setThemeColor.bind(this, "purple")}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    circleRow:{
        flexDirection:'row',
    }
});