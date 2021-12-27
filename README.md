# react-native-background-color-carousel

Advanced React Native background color flatlist.

![Preview](https://user-images.githubusercontent.com/22890658/147510544-808b60bb-9120-4fe2-952b-be5b38034112.gif)

## Installation

```sh
npm install react-native-background-color-carousel@https://github.com/AdamLee321/ract-native-background-color-carousel

or

yarn add react-native-background-color-carousel@https://github.com/AdamLee321/ract-native-background-color-carousel
```

## Usage

```js
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
]

import { BackgroundCarousel } from 'react-native-background-color-carousel';

render() {
    return (
      <BackgroundCarousel
        data={this.state.data}
        backgroundColors={bgs}
        renderRightIcons={() => {
          return (
            <>
              <Icon
                name="grid"
                type="material-community"
                color={'black'}
                size={30}
                containerStyle={{ marginLeft: 20 }}
              />
              <Icon
                name="cog"
                type="material-community"
                color={'black'}
                size={30}
                containerStyle={{ marginLeft: 20 }}
              />
            </>
          );
        }}
      />
    );
  }
```

## Props Available

| Prop                | Type        | Description                                                                                                          |
| ------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| `data`              | `array`     | Array of objects. Object structure {id: string, photo: string, title: string, subtitle: string, avatar_url: string}. |
| `backgroundColors?` | `array`     | Array of colors. Should be the same length as the data prop.                                                         |
| `renderRightIcons?` | `Component` | A component prop to render right icon buttons.                                                                       |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
