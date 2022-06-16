/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, Text, View } from 'react-native'
import { Character } from '../interfaces/api'

interface Props {
    character:Character
}

const Card = ({character}:Props) => {
    return (
        <View style={{borderRadius:16, width:'90%', height: 280, justifyContent: 'center', alignItems:'center', marginVertical:16, backgroundColor: '#3F4579'}}>
            <Image source={{uri:character.image}} style={{width:200, height: 200, borderRadius:100}}/>
            <Text style={{fontSize: 18, fontWeight: 'bold', color:'#1C79F2', margin:8}}>{character.name}</Text>
        </View>
    )
}

export default Card