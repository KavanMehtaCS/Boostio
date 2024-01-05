import * as React from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

export default class TextAnimator extends React.Component {
  animatedValues = [];

  constructor(props) {
    super(props);

    const textArr = props.content.trim().split(' ');
    textArr.forEach((_, i) => {
      this.animatedValues[i] = new Animated.Value(0);
    });
    this.textArr = textArr;
  }

  componentDidMount() {
    this.animated();
  }

  componentDidUpdate(prevProps) {
    if(this.props.clicked != prevProps.clicked) // Check if it's a new quote
    {
      this.animated(0);
      animatedValues = [];
      const textArr = this.props.content.trim().split(' ');
      textArr.forEach((_, i) => {
        this.animatedValues[i] = new Animated.Value(0);
      });
      this.textArr = textArr;
      this.animated(1);
    }
  } 

  animated = (toValue = 1) => {
    const animations = this.textArr.map((_, i) => {
      return Animated.timing(this.animatedValues[i], {
        toValue: toValue,
        duration: 1000,
        useNativeDriver: true
      });
    });
    Animated.stagger(100, toValue === 0 ? animations.reverse() : animations).start();
  };

  render() {
    return (
      <View style={[this.props.style, styles.textWrapper]}>
        {this.textArr.map((word, index) => {
          return (
            <Animated.Text
              key={`${word}-${index}`}
              style={[
                this.props.textStyle,
                {
                  opacity: this.animatedValues[index],
                  transform: [
                    {
                      translateY: Animated.multiply(
                        this.animatedValues[index],
                        new Animated.Value(-5)
                      )
                    }
                  ]
                }
              ]}
            >
              {word}
              {`${index < this.textArr.length ? ' ' : ''}`}
            </Animated.Text>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  }
});