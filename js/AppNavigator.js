import React, { Component } from 'react';
import { Navigator, View, Text, TouchableHighlight, StatusBar } from 'react-native';
import Home from './containers/home';
import Form from './containers/form';

export default class AppNavigator extends Component {
        constructor() {
            super();
        }
        componentWillMount()
         {
         console.log('AppNavigator componentWillMount');
         }
        /*componentWillMount()
        {
            console.log('AppNavigator componentWillMount');
        }
        componentDidMount()
        {
            console.log('AppNavigator componentDidMount');
        }
        componentWillReceiveProps(nextProps)
        {
            console.log('AppNavigator componentWillReceiveProps _and nextProps: ', nextProps);
        }
        /!*shouldComponentUpdate(nextProps, nextState)
        {
            console.log('shouldComponentUpdate _and nextProps: ', nextProps);
            console.log('shouldComponentUpdate _and nextState: ', nextState);
        }*!/
        componentWillUpdate(nextProps, nextState)
        {
            console.log('AppNavigator componentWillUpdate _and nextProps: ', nextProps);
            console.log('AppNavigator componentWillUpdate _and nextState: ', nextState);
        }
        componentDidUpdate(prevProps, prevState)
        {
            console.log('AppNavigator componentDidUpdate _and prevProps: ', prevProps);
            console.log('AppNavigator componentDidUpdate _and prevState: ', prevState);
        }
        componentWillUnmount()
        {
            console.log('AppNavigator componentWillUnmount');
        }*/
        _getBackgroundColor()
        {
            return({backgroundColor: this.colorActive});
        }
        renderNavigatorTitle(title)
        {
            if(title === undefined)
                this.navigatorTitle = 'Home'
            else this.navigatorTitle = title;
            return (<Text>{this.navigatorTitle}</Text>);
        }
        _renderScene(route, navigator) { // eslint-disable-line class-methods-use-this
            switch (route.name) {
                case 'home':
                    return <Home {...route} navigator={navigator} themeColor = {route.color} />;
                case 'form':
                    return <Form {...route} navigator={navigator} themeColor = {route.color} colorActive={route.color} />;
                default :
                    return <Home {...route} navigator={navigator} themeColor = {route.color} />;
            }
        }
        render() {
            //console.log('App Navigator render');
            return (
                <Navigator
                    initialRoute={{
                        name:'home'
                    }}
                    renderScene={this._renderScene.bind(this)}
                    navigationBar={
                     <Navigator.NavigationBar
                       routeMapper={{
                         LeftButton: (route, navigator, index, navState) =>
                          {
                            if (route.name === 'home')
                              return null;
                            else {
                              return (
                                <TouchableHighlight onPress={() => {navigator.pop();}}>
                                  <Text>Back</Text>
                                </TouchableHighlight>
                              );
                            }
                          },
                         RightButton: (route, navigator, index, navState) =>{ },
                         Title: (route, navigator, index, navState) => { return (this.renderNavigatorTitle(route.title)); },
                       }}
                     />
                    }
                    configureScene={(route, routeStack) =>
                    Navigator.SceneConfigs.HorizontalSwipeJump}
                    style={{position: 'relative'}}
                />
            );
        }
    }