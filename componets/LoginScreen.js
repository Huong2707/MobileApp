import React from "react";
import { StyleSheet,View,Text, TouchableOpacity,Image } from "react-native";
import { Component } from "react/cjs/react.development";
class LoginScreen extends Component
{
render(){
    return(
        <View>
            <View style={styles.hi}>
                <Image style={styles.img}
                        source={require("../assets/anh1.png")}/>
                <Text style={styles.textheader}>Pizza </Text> 
                <Text style={styles.textheader}>Paster </Text> 
                <Text style={styles.textheader} >Drink </Text> 
                <Text style={{marginLeft:-158,marginTop:130,fontSize:20,fontWeight:"bold"}}>PaPa's Piza</Text>
                <   Image style={styles.imgstart} 
                        source={require("../assets/start.png")}/> 

                <   Image style={styles.imgstart1} 
                        source={require("../assets/start.png")}/> 

                <   Image style={styles.imgstart1} 
                        source={require("../assets/start.png")}/> 

                <   Image style={styles.imgstart1} 
                        source={require("../assets/start.png")}/>

                <   Image style={styles.imgstart1} 
                        source={require("../assets/start.png")}/> 

                <Text style={{marginTop:162,marginLeft:10}}>358</Text>
            </View> 
            <View style={{flexDirection:'row'}}>
                <View style={styles.button}>
                <TouchableOpacity onPress={() => {}} >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={require('../assets/imgopen.png')}
                        style={{ width: 24, height: 24, marginLeft:15,marginTop:7 }} 
                    />
                    <Text style={{marginTop:5,marginLeft:10,color:'white',}}>Open</Text>
                </View>
                </TouchableOpacity>     
                </View>
                <View>
                    <TouchableOpacity onPress={()=>{}}>
                    <View style={styles.btclock}>
                        <Image style={styles.clock}
                         source={require("../assets/clock.png")}
                        />
                        <Text style={{color:'white',paddingTop:10,marginLeft:7,alignItems: 'center'}}>25 Mins</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.list}>
                <Text style={{paddingLeft:30,color:'#82C544'}} >Pizza</Text>
                <Text style={styles.food}>Pasta</Text>
                <Text style={styles.food}>Drinks</Text>
                <Text style={styles.food}>Burgers</Text>
                <Text style={styles.food}>Chicken</Text>
            </View>
            <View  style={{flexDirection:'row'}}>
                <View style={styles.thucdon}>
                    <Image style={{marginLeft:15,marginTop:5}}
                        source={require("../assets/pizza1.png")} />
                    <Text style={{textAlign:'center',marginTop:20}}>Kimci BBQ Chicken</Text>
                    <Text style={{color:'#82C544',textAlign:'center'}}>$19.99</Text>
                    <View >
                        <TouchableOpacity>
                            <Text style={styles.add}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.thucdon}>
                    <Image style={{marginLeft:15,marginTop:5}}
                        source={require("../assets/pizza1.png")} />
                    <Text style={{textAlign:'center',marginTop:20}}>Peri-Peri</Text>
                    <Text style={{color:'#82C544',textAlign:'center'}}>$19.99</Text>
                    <View >
                        <TouchableOpacity>
                            <Text style={styles.add}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View  style={{flexDirection:'row'}}>
                <View style={styles.thucdon2}>
                    <Image style={{marginLeft:15,marginTop:5}}
                        source={require("../assets/pizza1.png")} />
                    <Text style={{textAlign:'center',marginTop:20}}>Kimci BBQ Chicken</Text>
                    <Text style={{color:'#82C544',textAlign:'center'}}>$19.99</Text>
                    <View >
                        <TouchableOpacity>
                            <Text style={styles.add}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.thucdon2}>
                    <Image style={{marginLeft:15,marginTop:5}}
                        source={require("../assets/pizza1.png")} />
                    <Text style={{textAlign:'center',marginTop:20}}>Kimci BBQ Chicken</Text>
                    <Text style={{color:'#82C544',textAlign:'center'}}>$19.99</Text>
                    <View >
                        <TouchableOpacity>
                            <Text style={styles.add}>Add</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>

            
                   
            
        

    )
}

}
const styles=StyleSheet.create(
    {
        hi:{
           flexDirection:'row'
        },
      
        log:{
            paddingVertical:5,
            paddingTop:20,
            borderColor:"#ccc",
            borderBottomWidth:1,

        },
        img:{
            marginLeft:15,
            marginTop:100,
            

        },
        textheader:{
            marginTop:105,
            marginLeft:20,
        },
        imgstart:{
            marginTop:160,
            marginLeft:-105,
        },
        imgstart1:{
            marginTop:160,
        },
       button:{
            flexDirection:'row',
            width:110,
            height:40,
            backgroundColor:'#82C544',
            borderRadius:50,
            marginLeft:132,
            
           
        },
        clock:{
            width: 24, height: 24,
            marginLeft:15,marginTop:7
        },
        btclock:{
            flexDirection:'row',
            width:110,
            height:40,
            backgroundColor:'#888888',
            borderRadius:50,
            marginLeft:15
        },
        list:{
            flexDirection:'row',
            marginTop:30,
            
        },
        food:{
            paddingLeft:30
        },
        thucdon:{
            marginTop:25,
            marginLeft:25,
            borderWidth:2,
            borderRadius:8,
            borderColor:'#EFEFEF',
            width:160,
            height:220,
           
        },
        add:{
            textAlign:'center',
            color:'white',
            width:140,
            marginLeft:8,
            marginTop:5,
            height:35,
            backgroundColor:'#82C544',
            textAlign:'center',
            paddingTop:7,
            borderRadius:10,
        },
        thucdon2:{
            marginTop:20,
            marginLeft:25,
            borderWidth:2,
            borderRadius:8,
            borderColor:'#EFEFEF',
            width:160,
            height:220,
           
        },

    }
)






export default LoginScreen;