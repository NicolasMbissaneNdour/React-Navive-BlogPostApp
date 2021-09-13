import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const ShowScreen = ({route,navigation}) => {
  const { data } = useContext(BlogContext);
  
  //console.log(data);
  
  const blogPost = data.find((item) => item.id == route.params.id);
  
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => { navigation.navigate('Edit',{id:blogPost.id}) }} >  
          <Feather name="edit" size={24} color="black" />
        </TouchableOpacity>
      )
    })
  },[navigation])

  return (
    <View style={styles.container} >
      <Text style={styles.title} >{blogPost.title}</Text>
      <Text style={styles.content} >{ blogPost.content }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderColor: "black",
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    textAlign: 'center'
  },
  content: {
    fontSize: 15,
    fontStyle: 'italic',
    textAlign: 'center'
  }
});

export default ShowScreen;
