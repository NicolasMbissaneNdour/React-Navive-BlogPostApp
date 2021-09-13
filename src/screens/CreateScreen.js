import React, { useState, useEffect,useContext } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import BlogContext from '../context/BlogContext';

const CreateScreen = ({navigation}) => {
  const [ title, setTitle ] = useState('');
  const [ content, setContent ] = useState('');
  const { data, addBlogPost } = useContext(BlogContext);



  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput style={styles.input} placeholder="Enter the title" value={title} onChangeText={(text) => {setTitle(text)}} />
      <Text style={styles.text}>Content</Text>
      <TextInput style={styles.input} placeholder="Enter the content" value={content} onChangeText={(text) => {setContent(text)}} />
      <Button style={styles.button} title="Create" onPress={()=>{addBlogPost({title,content},() => { navigation.goBack() })}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    marginHorizontal: 5,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 15
  },
  button: {
  }
});

export default CreateScreen;