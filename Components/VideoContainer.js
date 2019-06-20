import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'
import images from './../assets/images';

export default class VideoContainer extends Component {
    constructor(props) {
        super(props);
        this.state={
            currentIndex:0
        }
        
    }
    render() {        
        return (
            <View style={[styles.container, styles.generalContainer]}>
                <View style={[styles.container, styles.videoContainer, styles.childContainer]}>
                    <TouchableOpacity style={styles.videoButton} onPress={this.onVideoPress}>
                        <Image
                            source={require('./../assets/video1.jpg')}
                            style={styles.video}                            
                        />
                    </TouchableOpacity>
                </View>
                <View style={[styles.container, styles.bottonContainer]}>
                    <View style={[styles.channelContainer, styles.childsBottomContainer,styles.childContainer]}>
                        <Icon
                            name='mood'
                            color='#ffffff' />
                    </View>
                    <View style={[styles.descriptionContainer, styles.childsBottomContainer, styles.childContainer]}>

                        <Text style={styles.description}>Sax House PlayList from Dr. Dre</Text>

                    </View>
                    <View style={[styles.settingsContainer , styles.childsBottomContainer, styles.childContainer]}>
                        <Icon
                            name='settings'
                            color='#ffffff' />
                    </View>
                </View>
            </View>
        )
    }

    onVideoPress = () => {
        console.log("Oh yes, vamos si tiene acceso: ",this.state.currentIndex);
        setTimeout(()=>{ console.log("Y acá: ",this.state.currentIndex); }, 1000);
    }
}


const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: '33%',
        backgroundColor: 'black',
        borderTopColor: '#747577',
        borderTopWidth: 2,
    },
    container: {
        width: '100%',
    },
    childContainer: {
        justifyContent: 'center',
        alignItems: 'center',
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
        backgroundColor: '#333333',
    },
    childsBottomContainer:{
        height:'90%'
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
    video: {
        width: '99%',
        height: '99%',
        resizeMode: 'center',
    },
    description: {
        color: 'white',
    },
    videoButton:{
        width:'100%',
        height:'100%'
    }
})
