import React, { Component } from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements'

export default class VideoContainer extends Component {
    constructor() {
        super(props);
    }
    render() {
        return (
            <View style={[styles.container, styles.generalContainer]}>
                <View style={[styles.container, styles.videoContainer]}>
                    <Image
                        source={require("../assets/video" + this.props.id + ".jpg")}
                        style={styles.logo}
                    />
                </View>
                <View style={[styles.container, styles.bottonContainer]}>
                    <View style={styles.channelContainer}>
                        <Icon
                            name='logo-reddit'
                            color='#ffffff' />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text>place for description</Text>
                    </View>
                    <View style={styles.settingsContainer}>
                        <Icon
                            name='setting'
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
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '50%',
    },
    container: {
        width: '100%',
    },
    videoContainer: {
        height: '70%',
        backgroundColor: 'green',
    },
    bottonContainer: {
        height: '30%',
        backgroundColor: 'grey',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    channelContainer: {
        width: '15%',
        height: '90%',
        backgroundColor: 'red',
    },
    descriptionContainer: {
        width: '70%',
        height: '90%',
        backgroundColor: 'blue',
    },
    settingsContainer: {
        width: '15%',
        height: '90%',
        backgroundColor: 'yellow',
    }
})
