import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import BlogContext from '../context/BlogContext';

const EditScreen = ({ route, navigation }) => {
  const { data,addBlogPost,deleteBlogPost,editBlogPost } = useContext(BlogContext);
  const blogPost = data.find((post) => post.id == route.params.id);
  const [ title, setTitle ] = useState(blogPost.title);
  const [ content, setContent ] = useState(blogPost.content);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Title</Text>
      <TextInput style={styles.input} placeholder="Enter the title" value={title} onChangeText={(text) => {setTitle(text)}} />
      <Text style={styles.text}>Content</Text>
      <TextInput style={styles.input} placeholder="Enter the content" value={content} onChangeText={(text) => {setContent(text)}} />
      <Button style={styles.button} title="Save" onPress={() => { editBlogPost({id:blogPost.id,title,content},() => {navigation.pop()})}} />
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

export default EditScreen;