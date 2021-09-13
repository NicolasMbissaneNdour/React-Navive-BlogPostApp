import React from "react";
import { Alert,ToastAndroid } from 'react-native';

const deleteAlert = (callback) => {
  Alert.alert(
    'Delete Blog',
    'Do you want to delete this blog ?',
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          callback();
          ToastAndroid.show('Blog deleted!',ToastAndroid.LONG); 
        }
      }
    ]
  )
}

export default deleteAlert;