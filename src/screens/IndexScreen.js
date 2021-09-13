import React, { useContext, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import BlogContext from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';
import deleteAlert from '../components/DeleteAlert';

const IndexScreen = ({navigation}) => {
  const { data, addBlogPost, deleteBlogPost } = useContext(BlogContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={()=> {navigation.navigate('Create') }}>
          <Feather name="plus" size={24} color="black" />
        </TouchableOpacity>
      )
    })
  },[navigation])

  if (!data.length) {
    return (<Text>0 blog found!</Text>)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={ (blogPost) => { return blogPost.id.toString() } }
        renderItem={ ({ item }) => {
          return (
            <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id: item.id})}}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={()=>{ deleteAlert(()=>{deleteBlogPost(item.id)})}} >
                  <Feather style={styles.icon} name="trash" size={30} color="black" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = () => {
  return <Feather name="plus" size={24} color="black" />;
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginTop: 5,
    paddingHorizontal: 5,
  },
  icon: {
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    overflow: 'hidden'
  }
});

export default IndexScreen;