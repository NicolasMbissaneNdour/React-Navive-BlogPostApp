import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const reducer = (state,action) => {
  switch (action.type) {
    case 'add_blog_post':
      return [
        ...state,
        { 
          title: action.payload.title,
          content: action.payload.content,
          id: Math.floor(Math.random()*999)
        }
      ];
    case 'delete_blog_post':
      return state.filter((blogPost) => blogPost.id != action.payload);
    case 'edit_blog_post':
      const index = state.findIndex( (item) => item.id == action.payload.id);
      console.log(state[index]);
      //console.log(action.payload);
      console.log(state.splice(index,1,action.payload));
      console.log('---------');
      console.log(state);
      return [...state];
    default:
      return state
  }
}

export const BlogProvider = ({ children }) => {
  const [ blogPosts, dispatch] = useReducer(reducer,[]);

  const addBlogPost = (blogPost,callback) => {
    dispatch({type: 'add_blog_post', payload: blogPost});
    callback();
  }

  const deleteBlogPost = (id) => {
    dispatch({type: 'delete_blog_post', payload: id });
  }

  const editBlogPost = (blogPost,callback) => {
    dispatch({type: 'edit_blog_post',payload: blogPost});
    callback();
  }

  return (
    <BlogContext.Provider value={{data: blogPosts,addBlogPost,deleteBlogPost,editBlogPost}} >
      { children }
    </BlogContext.Provider>
  )
};

export default BlogContext;