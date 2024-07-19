import React from 'react';
import { View, StyleSheet,Text, ScrollView } from 'react-native';

import Shoes from '../Shoes'

export default function Footer() {
 return (
   <View style={styles.container} >
        <Text style={styles.title} >VOCÊ TAMBÉM PODE GOSTAR</Text>
        <View style={{flexDirection:'row'}} >
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={{marginHorizontal: 10 }} >
                    <Shoes img={require('../../assets/1.png')} cost="110,90"  >
                        Nike Air Max Dia
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10 }} >
                    <Shoes img={require('../../assets/4.png')} cost="200,99"  >
                        Nike Epic react Flyknit 2
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10 }} >
                    <Shoes img={require('../../assets/2.png')} cost="400,00"  >
                    Nike Downshifter 10
                    </Shoes>
                </View>
                <View style={{marginHorizontal: 10 }} >
                    <Shoes img={require('../../assets/5.png')} cost="250,00"  >
                        Nike Squidward tentacles
                    </Shoes>
                </View>

            </ScrollView>
        </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize:24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%'
    }
})