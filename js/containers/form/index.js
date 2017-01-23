import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    TextInput,
    ScrollView
} from 'react-native';
//import styles from './styles';
//import theme from './js/themes/base-theme.js';
var themeColor;

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            colorActive: ''
        };

    }
    componentWillMount()
    {
        console.log('Form componentWillMount');
        this.setState({colorActive: this.props.colorActive});
    }
    componentWillReceiveProps(nextProps)
    {
        themeColor = this.props.themeColor;
    }
   /* componentDidMount()
    {
        console.log('Form componentDidMount');
    }
    componentWillReceiveProps(nextProps)
    {
        console.log('Form componentWillReceiveProps _and nextProps: ', nextProps);
    }
    /!*shouldComponentUpdate(nextProps, nextState)
     {
     console.log('shouldComponentUpdate _and nextProps: ', nextProps);
     console.log('shouldComponentUpdate _and nextState: ', nextState);
     }*!/
    componentWillUpdate(nextProps, nextState)
    {
        console.log('Form componentWillUpdate _and nextProps: ', nextProps);
        console.log('Form componentWillUpdate _and nextState: ', nextState);
    }
    componentDidUpdate(prevProps, prevState)
    {
        console.log('Form componentDidUpdate _and prevProps: ', prevProps);
        console.log('Form componentDidUpdate _and prevState: ', prevState);
    }
    componentWillUnmount()
    {
        console.log('Form componentWillUnmount');
    }*/
    _getBorderColor()
    {
        return({borderColor: this.state.colorActive});
    }
    _getBackgroundColor()
    {
        return({backgroundColor: this.state.colorActive});
    }
    render() {
        console.log(this.props.themeColor);
        let borderColor = this._getBorderColor(),
            bgColor = this._getBackgroundColor();
        return (
            <View style={[styles.container, bgColor]}>
                <View style={styles.formContainer}>
                    <ScrollView style={styles.scrollView}>
                        <TextInput
                            placeholder='Name'
                            style={[styles.textInput, borderColor]}
                            returnKeyType="next"
                        />
                        <TextInput
                            placeholder='Name'
                            style={[styles.textInput, borderColor]}
                            returnKeyType="next"
                        />
                        <TextInput
                            placeholder='Name'
                            style={[styles.textInput, borderColor]}
                            returnKeyType="next"
                        />

                        <TouchableHighlight onPress={()=>{}} underlayColor='transparent' style={[styles.bt, bgColor]}>
                            <Text style={styles.btText}>Send</Text>
                        </TouchableHighlight>

                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop: 40,
        padding: 20
    },
    formContainer:{
        backgroundColor: '#FFFFFF',
        padding: 20
    },
    scrollView:{

    },
    textInput:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 20
    },
    placeHolder:{
        position:'relative',
        left:10,
    },
    bt:{
        flexDirection:'column',
        justifyContent: 'center',
        height: 40,
    },
    btText:{
        color:'#FFFFFF',
        textAlign:'center',
        fontSize: 18
    }
});