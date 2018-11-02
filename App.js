import React from "react";
import { View, TouchableHighlight, Text } from "react-native";
import LottieView from "lottie-react-native";
import { Animated, Easing } from "react-native";


export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0)
    };
  }

  runAnimation() {
    //this.animation.play();
    // Or set a specific startFrame and endFrame with:
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1200,
      easing: Easing.linear
    }).start();

    //this.setState({progress: new Animated.Value(0)});
  }

  render() {
    return (
      <View style={{flex:1, backgroundColor: '#f1f1f1'}}>
      <View style={{ flex: 3, flexDirection: "row" }}>      
        <View style={{ flex: 2 }}>
          <LottieView
            resizeMode={'cover'}
            key={1}
            source={require("./assets/lottie-files/TwitterHeart.json")}
            progress={this.state.progress}
          />        
        </View>
        <View style={{ flex: 2 }}>
          <LottieView
            source={require("./assets/lottie-files/LineAnimation.json")}
            autoPlay
            loop
          />
        </View>    
      
      </View>
      <View style={{flex: 2}}>
      <View style={{ alignItems:'center' }}>
          <TouchableHighlight 
          onPress={() => this.runAnimation()}
          style={{backgroundColor: "#181888", padding: 10, borderRadius: 3  }}
          >
            <Text style={{color: '#ffffff', fontSize: 20}}>Me gusta</Text>
          </TouchableHighlight>
        </View>


      </View>

       <View style={{flex: 2, alignItems: 'center'}}>
       <Text style={{color: '#f22323'}}>@yoandypv</Text>
       </View>
      </View>
    );
  }
}
