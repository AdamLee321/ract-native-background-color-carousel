import React, { Component } from 'react';

import BackgroundCarousel from 'react-native-background-color-carousel';
const bgs = [
  '#A5BBFF',
  '#A0E5A5',
  '#C56551',
  '#FF947E',
  '#C2CFB2',
  '#DDD1C7',
  '#A167A5',
  '#E75A7C',
  '#FFA686',
  '#77A0A9',
];

const DATA = [
  {
    id: '',
    photo:
      'https://images.unsplash.com/photo-1551316679-9c6ae9dec224?w=800&q=80',
    title: 'Mindfulness',
    subtitle: 'Growth of your mindset',
    avatar_url: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
  {
    id: '1',
    photo:
      'https://images.unsplash.com/photo-1562569633-622303bafef5?w=800&q=80',
    title: 'Your Identity',
    subtitle: 'Say goodbye to procastination',
    avatar_url: 'https://randomuser.me/api/portraits/women/30.jpg',
  },
  {
    id: '2',
    photo:
      'https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&q=80',
    title: 'Importance of Peace',
    subtitle: 'Habits and your brain',
    avatar_url: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: '3',
    photo:
      'https://images.unsplash.com/photo-1555096462-c1c5eb4e4d64?w=800&q=80',
    title: 'Finding Time',
    subtitle: 'Health and exercise',
    avatar_url: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
  {
    id: '4',
    photo:
      'https://images.unsplash.com/photo-1517957754642-2870518e16f8?w=800&q=80',
    title: 'Personal quote',
    subtitle: 'Food recipes',
    avatar_url: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: '5',
    photo:
      'https://images.unsplash.com/photo-1546484959-f9a381d1330d?w=800&q=80',
    title: 'Lorem Ipsum',
    subtitle: 'Mindful meditations',
    avatar_url: 'https://randomuser.me/api/portraits/women/16.jpg',
  },
  {
    id: '6',
    photo:
      'https://images.unsplash.com/photo-1548761208-b7896a6ff225?w=800&q=80',
    title: 'Your Environment',
    subtitle: 'Going beyond your willpower',
    avatar_url: 'https://randomuser.me/api/portraits/women/0.jpg',
  },
  {
    id: '7',
    photo:
      'https://images.unsplash.com/photo-1511208687438-2c5a5abb810c?w=800&q=80',
    title: 'Cravings',
    subtitle: 'Change things longterm',
    avatar_url: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
  {
    id: '8',
    photo:
      'https://images.unsplash.com/photo-1548614606-52b4451f994b?w=800&q=80',
    title: 'Small changes',
    subtitle: 'Work smart not hard',
    avatar_url: 'https://randomuser.me/api/portraits/women/34.jpg',
  },
  {
    id: '9',
    photo:
      'https://images.unsplash.com/photo-1548600916-dc8492f8e845?w=800&q=80',
    title: 'Habits',
    subtitle: 'Optimise your day-to-day',
    avatar_url: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
];
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DATA,
    };
  }

  render() {
    return <BackgroundCarousel data={this.state.data} backgroundColors={bgs} />;
  }
}
