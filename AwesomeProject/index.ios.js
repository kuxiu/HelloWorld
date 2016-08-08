/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React,{Component} from 'react';
// import {AppRegistry,Text} from 'react-native';
//
// class AwesomeProject extends Component {
//   render(){
//     return (<Text> Hello World!</Text>);
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>AwesomeProject);
//

// import React ,{Component} from 'react';
// import {AppRegistry,Text} from 'react-native';
//
// class AwesomeProject extends Component  {
//   render() {
//     return (<Text> Hello World! </Text>);
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() => AwesomeProject);

// import React,{Component} from 'react';
// import {AppRegistry,Text} from 'react-native';
//
// class HelloWorld extends Component {
//   render () {
//     return (<Text>你好!</Text>);
//   }
// }
// // 第一个参数是项目名称，箭头后面是自定义组件类型
// AppRegistry.registerComponent('AwesomeProject',() => HelloWorld);


// import React, {Component} from 'react';
// import {AppRegistry,Image} from 'react-native'
//
// class Bananas extends Component {
//   render () {
//     let pic = {uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
//     return (<Image source={pic} style={{width:193,height:110}} />);
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>Bananas);

// props(属性) :source，style ；‘｛｝’表示是JS变量或者表达式
// import React,{Component} from 'react';
// import {AppRegistry,Image} from 'react-native';
//
// class Bananas extends Component {
//   render () {
//     let pic = {uri:'http://localhost/download/images/1.jpg'};
//
//     return (<Image source={pic} style={{width:350,height:478}} />);
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() => Bananas);

// import React,{Component} from 'react';
// import {AppRegistry,Text,View } from 'react-native';
//
// class Greeting extends Component {
//   render () {
//     return (
//       <Text>Hello {this.props.name}!</Text>
//     );
//   }
// }
//
// class LotsOfGreeting extends Component {
//   render () {
//     return (
//       <View style={{alignItems:'center'}}>
//       <Greeting name='Rexxar' />
//       <Greeting name='Jaina' />
//       <Greeting name='Valeera' />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() => LotsOfGreeting);

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
//
// class AwesomeProject extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>
//           Welcome to React Native!
//         </Text>
//         <Text style={styles.instructions}>
//           To get started, edit index.ios.js
//         </Text>
//         <Text style={styles.instructions}>
//           Press Cmd+R to reload,{'\n'}
//           Cmd+D or shake for dev menu
//         </Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

// import React,{Component} from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   View,
//   Text,
//   Image
// } from 'react-native';
//
// class AwesomeProject extends Component {
//   render () {
//
//     let pic = {uri:'http://localhost/download/images/1.jpg'};
//     return (
//       <View style={styles.container}>
//       <Image source={pic}  style={styles.image}/>
//       <Text style={styles.welcome}>美女呃！</Text>
//     </View>
//   );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome:{
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   image:{
//     width:200,
//     height:200,
//   }
// });
//
// AppRegistry.registerComponent('AwesomeProject',() =>AwesomeProject);

// import React ,{Component} from 'react';
// import {AppRegistry,Text,View } from 'react-native';
//
// class Blink extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {showText :true};
//
//     // 定时器、
//     setInterval(() => {
//       this.setState({showText: !this.state.showText});
//     },1000);
//   }
//
//   render (){
//     let display = this.state.showText ? this.props.text :'';
//
//     return (
//       <Text>{display}</Text>
//     );
//   }
//
//  //  render() {
//  //   // 根据当前showText的值决定是否显示text内容
//  //   let display = this.state.showText ? this.props.text : ' ';
//  //   return (
//  //     <Text>{display}</Text>
//  //   );
//  // }
// }
//
// class BlinkApp extends Component{
//   render() {
//     return (
//       <View>
//         <Blink text= 'I love to blink' />
//         <Blink text='Yes blinking is so great' />
//         <Blink text='Why did they ever take this out of HTML' />
//         <Blink text='Look at me look at me look at me' />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>BlinkApp);

// import React,{Component} from 'react';
// import {AppRegistry,View,Text} from 'react-native';
//
// class FixedDimensionsBasics extends Component {
//    render (){
//      return (
//        <View>
//         <View style={{width:50,height:50,backgroundColor:'powderblue'}}></View>
//        </View>
//      );
//    }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>FixedDimensionsBasics);
//
// import React,{Component} from 'react';
// import {AppRegistry,View} from 'react-native';
// class FlexDimensionsBasics extends Component {
//   render(){
//     return (
//       // 如果父容器既没有固定的width和height，也没有设定flex，则父容器的尺寸为零。其子组件如果使用了flex，也是无法显示的。
//       <View style={{flex:1}}>
//         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
//         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
//         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() => FlexDimensionsBasics);
//
// import React,{Component} from 'react';
// import {AppRegistry,View} from 'react-native';
//
// class FlexDirectionBasics extends Component {
//
//   render (){
//     return (
//       <View style={{flex:1,flexDirection:'column'}}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>FlexDirectionBasics);


// import React,{Component} from 'react';
// import {AppRegistry,View} from 'react-native';
// class JustifyContentBasics extends Component {
//   render (){
//     return (
//       <View style={{
//         flex:1,
//         flexDirection :'column',
//         // flex-start、center、flex-end、space-around以及space-between。
//         justifyContent:'center'
//       }}>
//         <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>JustifyContentBasics);


// import React ,{Component} from 'react';
// import {AppRegistry,View} from 'react-native';

// class AlignItemsBasics extends Component{
//   render(){
//     return (
//     // 次轴（与主轴垂直的轴，比如若主轴方向为row，则次轴方向为column）的排列方式
//     // flex-start、center、flex-end以及stretch。
//       <View style={{
//         flex:1,
//         flexDirection : 'column',
//         justifyContent:'center',
//         alignItems:'stretch'
//       }}>
//         <View style={{ height: 50, backgroundColor: 'powderblue'}} />
//         <View style={{ height: 50, backgroundColor: 'skyblue'}} />
//         <View style={{ height: 50, backgroundColor: 'steelblue'}} />
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>AlignItemsBasics);
//
// import React,{Component} from 'react';
// import { AppRegistry,View,Text,TextInput} from 'react-native';
//
// class  PizzaTranslator extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text:''};
//   }
//
//   render (){
//     return (
//       <View style={{padding:10}}>
//         <TextInput
//         style={{height:40}}
//         placeholder='Type here to translate!'
//         onChangeText={(text) =>this.setState({text})} />
//         <Text style={{padding:10,fontSize:42}}>
//           {this.state.text.split('').map((word) => word && '奈落').join('')}
//         </Text>
//       </View>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() => PizzaTranslator);

// import React,{Component} from 'react';
// import {AppRegistry,ScrollView,View,Text,Image} from 'react-native';
//
// class IScrollViewDownAndWhatHappenedNextShockedMe extends Component {
//   render(){
//     return (
//       <ScrollView>
//           <Text style={{fontSize:96}}>Scroll me plz</Text>
//           <Image source={{uri:'search.png'}} style={{width: 40, height: 40}} />
//           <Image source={{uri:'search.png'}} style={{width: 40, height: 40}} />
//           <Image source={{uri:'search.png'}} style={{width: 40, height: 40}} />
//           <Image source={{uri:'search.png'}} style={{width: 40, height: 40}} />
//           <Image source={{uri:'search.png'}} style={{width: 40, height: 40}} />
//           <Text style={{fontSize:96}}>If you like</Text>
//
//           <Text style={{fontSize:96}}>Scrolling down</Text>
//
//           <Text style={{fontSize:96}}>What is the best</Text>
//
//           <Text style={{fontSize:96}}>Framework around</Text>
//           <Text style={{fontSize:80}}>React Native</Text>
//         </ScrollView>
//     );
//   }
// }
//
// AppRegistry.registerComponent('AwesomeProject',() =>IScrollViewDownAndWhatHappenedNextShockedMe);

// import React, { Component } from 'react';
// import { AppRegistry, ListView, Text, View } from 'react-native';
//
// class ListViewBasics extends Component {
//   // 初始化伪数据
//   constructor(props) {
//     super(props);
//     // requires two props: dataSource and renderRow
//     const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//     this.state = {
//       dataSource: ds.cloneWithRows([
//         'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//       ])
//     };
//   }
//   render() {
//     return (
//       <View style={{paddingTop: 22}}>
//         <ListView
//           dataSource={this.state.dataSource}
//           renderRow={(rowData) => <Text>{rowData}</Text>}
//         />
//       </View>
//     );
//   }
// }
//
// // 注册应用
// AppRegistry.registerComponent('AwesomeProject', () => ListViewBasics);

import React,{Component} from 'react';
import {
  AppRegistry,
  View,
  Navigator,
  Text,
  StyleSheet
} from 'react-native';


var FeedView = React.createClass({
    goBack(){
      this.props.navigator.push({name:"default"});
    },

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.goBack} >
                   I am Feed View! Tab to  default  view!
                </Text>
            </View>
        )
    }
});


var WelcomeView = React.createClass({
    onPressFeed() {
        this.props.navigator.push({name: 'feed'});
    },


    render() {
       console.log("welcome view loaded...")
        return (
            <View style={styles.container}>
                <Text style={styles.welcome} onPress={this.onPressFeed} >
                    This is welcome view.Tap to go to feed view.
                </Text>
            </View>
        );
    }

});

var DefaultView = React.createClass({

    render(){
      return (
          <View style={styles.container}>
              <Text style={styles.welcome}>Default view</Text>
          </View>
      )
    }
});


var SampleApp = React.createClass({

    configureScene(route){
      return Navigator.SceneConfigs.FloatFromRight;
    },

    renderScene(router, navigator){
      var Component = router.component;
      this._navigator = navigator;
      switch(router.name){
        case "welcome":
          Component = WelcomeView;
          break;
        case "feed":
          Component = FeedView;
          break;
        default: //default view
          Component = DefaultView;
      }

      return <Component navigator={navigator} />
    },

    render() {
        return (
            <Navigator
                initialRoute={{name: 'welcome'}}
                configureScene={this.configureScene}
                renderScene={this.renderScene} />
        );
    }

});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});



AppRegistry.registerComponent('AwesomeProject', () => SampleApp);
