import React, { Component } from 'react';
import { Text, View,StyleSheet, ToastAndroid, TouchableOpacity } from 'react-native';

export default class App extends Component{
  constructor(props) {
    
    super(props);
    this.state = {
        angka:0
     
       
      };
  }
  _toast = () =>{
    ToastAndroid.show("Josssss gandosss kotosss", ToastAndroid.SHORT)
};
  _count = () =>{
    this.setState({ angka: this.state.angka + 1 })
    console.log(this.state.angka)
};
    render(){
        return(
            <View style={styles.container}>
               <Text style={{backgroundColor:'#16a085', padding:15, textAlign:'center', fontSize:15, color:'#fff'}}>Hello Toast</Text>
               <View style={{flex:2}}>
                  <TouchableOpacity onPress={this._toast} style={{padding:15, backgroundColor:'#16a085', width:'90%', alignSelf:'center', marginTop:'10%'}}><Text style={{textAlign:'center', fontSize:15, color:'#fff'}}>Toast</Text></TouchableOpacity>
                      <View style={{backgroundColor:'#2ecc71',width:'90%', alignSelf:'center', padding:'30%'}}>
                        <Text style={{textAlign:'center',fontSize:100, color:'#fff', fontWeight:"bold"}}>{this.state.angka}</Text>
                      </View>               
                  <TouchableOpacity onPress={this._count} style={{padding:15, backgroundColor:'#16a085', width:'90%', alignSelf:'center'}}><Text style={{textAlign:'center', fontSize:15, color:'#fff'}}>Count</Text></TouchableOpacity>
               </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
      margin:0,
      padding:0,
      flex:1,
      backgroundColor:'#FFFCFC'
  
  },
 
 

})