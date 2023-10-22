import React from "react";
import { StyleSheet,Text,View,Image } from "react-native";
import { Component } from "react/cjs/react.development";
class CatelogyScreen extends Component{
    render(){
return(
    <View>
        <View>
            <Image style={styles.banner}
                source={require("../assets/nhung-quan-pizza-ngon-nhat-Ha-Noi-9.jpg")} />
            <Image style={styles.x}
                source={require("../assets/9113737_times_solid_icon.png")}
            />
            <Text style={styles.td}>Italian Supreme</Text>
            <Text style={styles.menu}>Pizza Sauce, Tomato,Green Pepper,Black Olives, Beef Pepperoni, Parsley, Sun Dried Tomato, Mozzarella Cheese</Text>
        </View>
        <View>
            <Text style={styles.select}>Select Size</Text>
        </View>
        <View>
            <View style={styles.row}>
                <View style={styles.chosse}></View>
                <Text style={styles.chitiet}>Large 13,5"</Text>
                <Text style={styles.so}>$19.99</Text>
            </View>
        </View>
        <View>
            <View style={styles.row}>
                <View style={styles.chosse1}></View>
                <Text style={styles.chitiet1}>Small 9.5"</Text>
                <Text style={styles.so1}>$10.99</Text>
            </View>
        </View>
        <View>
            <View style={styles.row}>
                <View style={styles.chosse1}></View>
                <Text style={styles.chitiet1}>Medium 11.5"</Text>
                <Text style={styles.so2}>$15.99</Text>
            </View>
        </View>
        <View>
            <Text style={styles.select}>Choose add one</Text>
            <View>
            <View style={styles.chon}>
                <View style={styles.tick}></View>
                <Text style={styles.chitiet}>Extra Cheese</Text>
                <Text style={styles.so}>$1.00</Text>
            </View>
        </View>
        <View>
            <View style={styles.chon2}>
                <View style={styles.tick2}></View>
                <Text style={styles.chitiet1}>Chicken</Text>
                <Text style={styles.sotick}>$1.00</Text>
            </View>
        </View>
        </View>
    </View>



)
}
}
const styles=StyleSheet.create({
    banner:{
        height:300
    },
    x:{
        marginTop:-270,
        
    },
    td:{
        marginTop:230,
        marginBottom:10,
        fontWeight:"bold",
        marginLeft:8,
        fontSize:18
    },
    menu:{
        fontSize:16,
        marginLeft:8,

    },
    select:{
        fontSize:16,
        paddingLeft:8,
        paddingTop:3,
        marginTop:10,
        height:30,
        width:500,
        backgroundColor:"#EEEEEE",
        justifyContent: 'space-around',
        fontWeight:"bold"

    },
    chosse:{
        
        width:30,
        height:30,
        backgroundColor:"#82C544",
        borderRadius:20,
    },
    chitiet:{
        fontSize:16,
        fontWeight:"bold",
        marginLeft:20,
        marginTop:6,
    },
    so:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:6,
        color:"#82C544",
        paddingLeft:195,

    },
    row:
    {flexDirection:"row",
    borderBottomColor: '#EEEEEE',
    borderBottomWidth: 1,
    padding:10, 
    },
    chosse1:{
        
        width:30,
        height:30,
        borderRadius:20,
        borderWidth:2,
        borderColor:'#EEEEEE'
    },
    chitiet1:{
        fontSize:16,
        fontWeight:"bold",
        marginLeft:20,
        marginTop:6,
    },
    so1:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:6,
        color:"#82C544",
        marginLeft:203,

    },
    so2:{
        fontSize:16,
        fontWeight:"bold",
        marginTop:6,
        color:"#82C544",
        marginLeft:175,

    },
    tick:{
        
        width:28,
        height:28,
        marginTop:5,
        backgroundColor:"#82C544",
        borderRadius:5,
    },
    chon:{
        flexDirection:'row',
        marginLeft:10,
    },
    tick2:{
        
        width:28,
        height:28,
        marginTop:5,
        backgroundColor:"#82C544",
        borderRadius:5,
    },
    chon2:{
        flexDirection:'row',
        marginLeft:10,
    },
    sotick:{
        marginLeft:250,
        color:"green",
    },
    
})



export default CatelogyScreen;