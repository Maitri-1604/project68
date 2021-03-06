import React from 'react';
import {  View, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class Searchscreen extends React.Component {
  render() {
    return (
      <View >
        <View>
          {' '}
          <AppHeader />{' '}
        </View>
        <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
       
          <Image
            style={{
              width: 200,
              height: 200,
              borderRadius: 20,
              marginTop: 'center',
            }}
            source={{
              uri:
                'http://bgnasledstvo.com/images/facebook-icon.png',
            }}
          />
        </View>
      </View>
    );
  }
}
