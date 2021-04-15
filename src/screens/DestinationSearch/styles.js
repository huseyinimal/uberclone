import {StyleSheet} from 'react-native';

const styles= StyleSheet.create({
    container:{
        padding:10,
        height:'100%',
    },
    autocompletecontainer:{
        position: 'absolute',
        top:0,
        left:10,
        right:10,
      },
    textInput:{
        padding:10,
        backgroundColor: '#eee',
        marginVertical: 5,
        marginLeft:20
    },
    row:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    listView:{
        position: 'absolute',
        top: 160,
        
      },
    iconContainer:{
        backgroundColor: '#a2a2a2',
        padding: 5,
        borderRadius:50,
        marginRight:15,
    },
    locationText:{},
    separator:{
        backgroundColor: '#efefef',
        height:1,
      },
      circle:{
        width:6,
        height:5,
        backgroundColor:'black',
        position:'absolute',
        top:30,
        left:15,
        borderRadius:5,
      },
      line:{
        width:2,
        height:81,
        backgroundColor:'#c4c4c4',
        position:'absolute',
        top:37,
        left:17,
      },
      square:{
          width:6,
          height:5,
          backgroundColor:'black',
          position:'absolute',
          top:120,
          left:15,
      },

});

export default styles;