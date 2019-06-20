import React, { Component } from 'react'
import {Text,View,StyleSheet} from 'react-native';
import Navbar from './Navbar';
import VideoContainer from './VideoContainer';
import BottomNavbar from './BottomNavbar'; 



export default class LandingView extends Component { 
    constructor(props){
        super(props);
    }  
    render() {
        return (
            <View style={styles.generalContainer}>                
                <View style={[styles.container,styles.topNavBar]}>
                    <Navbar />
                </View>
                <View style={[styles.container,styles.videoList]}>
                    <VideoContainer />
                    <VideoContainer />
                    <VideoContainer />
                </View>
                <View style={[styles.container,styles.bottomNavbar]}>
                    <BottomNavbar />
                </View>
            </View>
        )
    }
}


const styles=StyleSheet.create({
    generalContainer:{
        flex:1,
        flexDirection:'column',        
        justifyContent: 'space-around',        
        height:'100%',
        width:'100%',         
        paddingTop:'2%', 
    },
    container:{        
        width:'100%',  
        alignItems: 'center',
        justifyContent: 'center',                
    },
    topNavBar:{
        height: '10%',        
        backgroundColor:'black',
    },
    videoList:{
        height:'80%',        
        backgroundColor:'blue',
    },
    bottomNavbar:{
        height: '10%',        
        backgroundColor:'yellow',
    }
})


