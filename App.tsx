/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Card from './src/components/Card';
import { useApi } from './src/hooks/useApi';

const App = () => {

  const {isLoading, onlyRicks} = useApi()

  if (isLoading) {
    return (
      <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
        <Text>Cargando...</Text>
      </View>
    );
  }
  

  return (
    <ScrollView >
      <View style={{flex:1, justifyContent:'center', alignItems: 'center', backgroundColor: '#232643'}}>
        <Text style={{textAlign:'center', fontSize: 28, fontWeight: 'bold', color:'white', margin:16}}>Only Ricks</Text>
        {
          onlyRicks?.map(rick=>(
            <Card character={rick} key={rick.id}/>
          ))
        }
      </View>
    </ScrollView>
  );
};

export default App;
