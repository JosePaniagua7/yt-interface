import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export class Navbar extends Component {
    render() {
        return (
            <View style={[styles.generalContainer, styles.container]}>
                <View style={[styles.container, styles.navChild, styles.logoContainer]}>
                    <Image 
                        source={require("../assets/logo.jpg")}
                        style={styles.logo}
                    />
                </View>
                <View style={[styles.container, styles.navChild, styles.icons]}>
                    <Icon
                        name='airplay'
                        color='#ffffff' />
                    <Icon
                        name='videocam'
                        color='#ffffff' />                    
                    <Icon
                        name='search'
                        color='#ffffff' />
                    <Icon
                        name='face'
                        color='#ffffff' />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    generalContainer: {        
        width: '100%',
        height: '10%',
    },
    container: {
        backgroundColor: 'black',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    navChild: {
        width: '45%',
        height: '90%',
    },    
    logo:{
        resizeMode:'center',
        width:'90%',
        height:'90%',
    }
})
export default Navbar;
