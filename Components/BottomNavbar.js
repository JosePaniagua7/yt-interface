import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements'

export default class BottomNavbar extends Component {
    render() {
        return (
            <View style={styles.generalContainer}>                
                <View style={styles.iconContainer}>
                    <Icon                        
                        name='home'
                        color='#ffffff' />
                    <Text style={styles.iconText}>Home</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon
                        name='cloud'
                        color='#747577' />
                    <Text style={styles.iconText}>Trading</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon
                        name='subscriptions'
                        color='#747577' />
                    <Text style={styles.iconText}>Subs</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon
                        name='message'
                        color='#747577' />
                    <Text style={styles.iconText}>Inbox</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon
                        name='folder'
                        color='#747577' />
                    <Text style={styles.iconText}>Library</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    generalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#333333',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderTopColor: '#747577',
        borderTopWidth: 2,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '20%',
        height: '100%',        
    },
    iconText:{
        color:'#747577'
    }
})
 
