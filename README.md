# lottie-react-native-basics

Basic example of how use the awesome lottie from React Native.


To run the project, first `git clone`, and after `react-native run-android` .In the folder assets/lottie-files are the two lottie files used in the project.

The important file is: [App.js](https://github.com/yoandypv/lottie-react-native-basics/blob/master/App.js).

###### First section: Import LottieView and Animated API for rendering JSON lottie file and animate the heart when button is pressed.

```javascript
import LottieView from "lottie-react-native";
import { Animated, Easing } from "react-native";
```
###### Second section: The method that start the animation when button is pressed, in this method we show the lottie animation following a linear progression from frame 1 to 1500
```javascript
runAnimation() {
    //this.animation.play(); // Uncomment and use this call only for undefined and looped animation
    // Or set a specific startFrame and endFrame with:
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 1200,
      easing: Easing.linear
    }).start();
  }
  ```
  
  ###### Three section: This JSX code load and represent the lottie file according to `progress` var. In the second part we load the lottie file at start and show always in a loop. 
  ```javascript
   <LottieView
            resizeMode={'cover'}
            key={1}
            source={require("./assets/lottie-files/TwitterHeart.json")}
            progress={this.state.progress}
          /> 
  ```
  ```javascript
  <LottieView
            source={require("./assets/lottie-files/LineAnimation.json")}
            autoPlay
            loop
          />
  ```        
 
 If you like this example, give me an start !
 
  
