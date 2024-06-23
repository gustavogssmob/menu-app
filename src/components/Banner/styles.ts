import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
   width: '100%',
   height: 250,     
  },
  gradient:{
    flex: 1,
    padding: 24,
    justifyContent: 'flex-end'
  },
  category:{
    backgroundColor: '#48a73b',
    width: 32,
    height: 32,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginBottom: 5,
    borderRadius: 5,

  },
  name:{
    color: 'white',
    fontSize: 22,
    fontWeight: '500',
  },
  
  type:{
    color: 'white',
    fontSize: 16,
   
  },
  time:{
    color: '#EEE',
    fontSize: 16, 
    marginTop: 16   
  }
  
});