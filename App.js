/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import Sprite from './src/components/Sprite';
import SpriteMapper from './src/components/SpriteMapper';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SpriteMapper
          src="/images/t-rex-sprite.png"
          cuts={[{ x, y, width, height }, { x, y, width, height }]}
          sequences={{
            flyingEnemy: [3, 4]
          }}
          fps={24}
        >
          <Sprite
            play={}
            sequence=''
            y={}
            x={}
            onHit={() => console.log('colidiu')}
          />
        </SpriteMapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
