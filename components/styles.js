import {StyleSheet,StatusBar} from 'react-native' 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor:'black',
    
  },
  sty: {
    backgroundColor: 'grey',
    marginVertical: 5,
    marginHorizontal: 6,
    height:87,
    width:87,
    borderRadius:100/2,
    justifyContent : 'center',
    alignItems : 'center',
  
  },
  title: {
    fontSize: 30,
  },
  textAll : {
    color: 'white',
    fontSize : 60,
  
  },
  paragraph: {
    height: 320,
    marginRight:20,
    alignItems:'flex-end',
    justifyContent:'flex-end', 
  },
});
export default styles; 