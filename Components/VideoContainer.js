import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class VideoContainer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let url=""
        return (
            <View style={[styles.container, styles.generalContainer]}>
                <View style={[styles.container, styles.videoContainer,styles.childContainer]}>
                    <Image
                        source={require("../assets/video1.jpg")}
                        style={styles.logo}
                    />
                </View>
                <View style={[styles.container, styles.bottonContainer]}>
                    <View style={[styles.channelContainer,styles.childContainer]}>
                        <Icon
                            name='mood'
                            color='#ffffff' />
                    </View>
                    <View style={[styles.descriptionContainer,styles.childContainer]}>
                        <Text style={styles.description}>place for description</Text>
                    </View>
                    <View style={[styles.settingsContainer,styles.childContainer]}>
                        <Icon
                            name='menu'
                            color='#ffffff' />
                    </View>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '33%',
        backgroundColor:'black',
        borderTopColor: '#333333',
        borderTopWidth: 2,
    },
    container: {
        width: '100%',        
    },
    childContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    videoContainer: {
        height: '75%',             
    },
    bottonContainer: {
        height: '20%',        
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor:'#333333',
    },
    channelContainer: {
        width: '10%',
        height: '90%',        
    },
    descriptionContainer: {        
        width: '80%',
        height: '90%',        
    },
    settingsContainer: {
        width: '10%',
        height: '90%',        
    },
    logo:{
        width:'99%',
        height:'99%',
        resizeMode:'center',
    },
    description:{
        color:'white',
    }
})
