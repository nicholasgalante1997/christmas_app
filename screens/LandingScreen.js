import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native'
import Colors from '../constants/Colors'
import Icon from 'react-native-ico-christmas';
import demoArray from '../models/demoPhotoData'
import Demo from '../assets/demo.jpg'
import Demo1 from '../assets/demo_1.jpg'
import Demo2 from '../assets/demo_2.jpg'
import Demo3 from '../assets/demo_3.jpg'
import Demo4 from '../assets/demo_4.jpg'
import Carousel from '../components/Carousel'
import XmasIconNames from '../constants/ChristmasIcons'

const LandingScreen = (props) => {

    const [chosenImage, setChosenImage] = useState(Demo2)
    const [chosenImageId, setChosenImageId] = useState(1)

    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * 5)
    }


    

    return ( 
        <View style={styles.screen}>
            <View style={styles.banner}>
                <View style={styles.iconHolder}>
                    <Icon name="santa-claus" height={60} width={60} background={{type: 'circle', color: 'white'}}/>
                </View>
                <View style={styles.textHolderMiddle}>
                    <Text style={styles.text}>
                        Merry Christmas
                    </Text>
                    <Text style={styles.text}>
                        Galante Family!
                    </Text>
                </View>
                <View style={styles.iconHolder}>
                    <Icon name="mrs-claus" height={60} width={60} background={{type: 'circle', color: 'white'}}/>
                </View>
            </View>
            <View style={styles.imageHolder}>
                <Image source={chosenImage} style={{height: '100%', width: '100%', resizeMode: 'cover'}} />
            </View>
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.red.dark,
        alignItems: 'center',
        // justifyContent: 'center'
    },
    text: {
        fontFamily: 'xmas-bold',
        fontSize: 18,
        color: 'white'
    },
    banner: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.1,
        justifyContent: 'space-evenly',
        alignItems:'center',
        backgroundColor: Colors.green.dark,
        flexDirection: 'row',
        marginTop: Dimensions.get('window').height / 10,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOpacity: 0.36,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    },
    textHolderMiddle: {
        justifyContent: 'center',
        alignItems:'center'
    },
    imageHolder: {
        height: 300,
        width: 300,
        borderRadius: 150,
        overflow: 'hidden',
        marginTop: 50
    }
})
 
export default LandingScreen;