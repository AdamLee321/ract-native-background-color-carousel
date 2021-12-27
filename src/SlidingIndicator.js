import React, { Component } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Dimensions,
  ViewPropTypes,
} from 'react-native';
const { width } = Dimensions.get('screen');
import PropTypes from 'prop-types';

export default class SlidingIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollX: props.scrollX,
      data: props.data,
      dotSize: props.dotSize,
      indicatorSpacing: props.indicatorSpacing,
      inActiveDotColor: props.inActiveDotColor,
      inActiveDotOpacity: props.inActiveDotOpacity,
      activeDotOpacity: props.activeDotOpacity,
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    return nextProps;
  }

  _renderIndicators() {
    let { dotSize, indicatorSpacing, data, scrollX } = this.state;
    const inputRange = [-width, 0, width];
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: [
        -dotSize + indicatorSpacing * 2,
        0,
        dotSize + indicatorSpacing * 2,
      ],
    });

    return (
      <View style={[{ height: dotSize }, styles.mainContainer]}>
        <Animated.View
          style={[
            {
              width: dotSize,
              height: dotSize,
              borderRadius: dotSize / 2,
            },
            styles.slidingIndicatorStyle,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              position: 'absolute',
              marginHorizontal: indicatorSpacing,
              transform: [{ translateX }],
            },
            this.props.slidingIndicatorStyle,
            {
              backgroundColor: this.props.activeDotColor,
              opacity: this.props.activeDotOpacity,
            },
          ]}
        />
        {data.map((_item, index) => {
          return (
            <View
              key={index}
              style={[
                {
                  width: this.props.dotSize,
                  height: this.props.dotSize,
                  marginHorizontal: indicatorSpacing,
                  borderRadius: this.props.dotSize / 2,
                },
                styles.dotStyle,
                this.props.dotStyle,
                {
                  backgroundColor: this.props.inActiveDotColor,
                  opacity: this.props.inActiveDotOpacity,
                },
              ]}
            />
          );
        })}
      </View>
    );
  }

  render() {
    let { data } = this.state;
    if (!data) {
      return null;
    }
    return (
      <View style={[styles.containerStyle, this.props.containerStyle]}>
        {this._renderIndicators()}
      </View>
    );
  }
}

SlidingIndicator.propTypes = {
  /**
   * The horizontal position of the scrollView/FlatList currently being animated.
   */
  scrollX: PropTypes.object.isRequired,

  /**
   * Used to render the number of dot indicators and to animate the scrolling.
   */
  data: PropTypes.array.isRequired,

  /**
   * The color of the inactive indicator dots.
   */
  inActiveDotColor: PropTypes.string,

  /**
   * The size of the dot indicators. Default size is 12.
   */
  dotSize: PropTypes.number,

  /**
   * The spacing between the dot indicators. Default size is 10.
   */
  indicatorSpacing: PropTypes.number,

  /**
   * The color of the active indicator dot.
   */
  activeDotColor: PropTypes.string,

  /**
   * The opacity of the inactive indicator dots. Default value is 1.
   */
  inActiveDotOpacity: PropTypes.number,

  /**
   * The style of the main view container.
   */
  containerStyle: ViewPropTypes.style,

  /**
   * The style of the dot indicators
   */
  dotStyle: ViewPropTypes.style,
};

SlidingIndicator.defaultProps = {
  dotSize: 12,
  indicatorSpacing: 10,
  inActiveDotOpacity: 0.5,
  activeDotOpacity: 1,
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  containerStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    paddingBottom: 50,
  },
  dotStyle: {
    backgroundColor: 'lightgrey',
  },
  slidingIndicatorStyle: {
    backgroundColor: '#fff',
    zIndex: 99,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
