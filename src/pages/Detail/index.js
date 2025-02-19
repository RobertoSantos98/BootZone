import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {
  
  navigation.setOptions({
    headerTitle: 'Nike Downshifter 10'
  })
 
  return (
   <ScrollView style={styles.container} >
    <Image source={require('../../assets/detail.png')} style={styles.image} resizeMode='cover' />

    <View>
      <View>
        <Text style={[styles.title, { fontSize: 24 } ]} >R$ 280,00</Text>
      </View>
      <View opacity={0.4} >
        <Text style={[styles.title, { fontSize: 30 } ]} >Nike Downshifter 10</Text>
      </View>

      <View style={styles.dotContainer} >
        <Dot color={'red'} />
        <Dot color={'blue'} />
        <Dot color={'black'} />
        <Dot color={'white'} />
      </View>

      <View style={{flexDirection: 'row', width:'100%' }} >
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <SizeButton bgColor="#17181a" color="#FFF" >39</SizeButton>
            <SizeButton >40</SizeButton>
            <SizeButton >41</SizeButton>
            <SizeButton >42</SizeButton>
        </ScrollView>
      </View>

      <View style={styles.textContent} >
          <Text style={styles.textTitle}>
              Nike Downshifter 10
          </Text>
          <Text style={styles.textContent}>
            O Tênis nime masculino Downshift 10 traz amortecimento e suporte atualizado, para garantir uma corrida mais confortavél e sem desconforto.
          </Text>
          <Text style={styles.textList} >
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mash
          </Text>
      </View>

      <Button/>

      <View style={styles.line} />

      <Footer/>

    </View>

   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width:'100%',
    backgroundColor:'#FFF'
  },
  image:{
    width:'100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal:'2%'
  },
  dotContainer:{
    flexDirection:'row',
    marginVertical:'7%'
  },
  textContent:{
    fontSize:16,
    lineHeight:25,
    marginVertical: '2%',
    paddingHorizontal:'2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize:16,
    lineHeight:25,
  },
  line:{
    borderWidth:1,
    borderBottomColor:'#DDD',
    marginVertical: '2%'
  }
})