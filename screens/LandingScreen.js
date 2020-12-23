import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux'
import * as actions from '../store/favoriteActions'
import Colors from '../constants/Colors'
import Icon from 'react-native-ico-christmas';
import demoArray from '../models/demoPhotoData'
import Demo2 from '../assets/demo_2.jpg'


const LandingScreen = (props) => {

    const dispatch = useDispatch();
    const favs = useSelector(state => state)

    console.log(favs)

    const [chosenImage, setChosenImage] = useState(Demo2)
    const [chosenImageId, setChosenImageId] = useState("")

    const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@favorites')
          return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch(e) {
          console.log(e)
        }
      }
    
      useEffect(() => {
        getData()
        .then(pastFavorites => {
          if (pastFavorites){
            dispatch(actions.setPhotos(pastFavorites))
          }
        })
      }, [])

    const randomNumberGenerator = () => {
        return Math.floor(Math.random() * demoArray.length)
    }

    const shufflePhoto = () => {
        const rand = randomNumberGenerator();
        if (chosenImageId === demoArray[rand].id){
            randomNumberGenerator();
            setChosenImageId(demoArray[rand].id)
            setChosenImage(demoArray[rand].image)
        } else {
            setChosenImageId(demoArray[rand].id)
            setChosenImage(demoArray[rand].image)
        }
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
                <Image source={chosenImage} style={{height: '100%', width: '100%', resizeMode: 'contain'}} />
            </View>
            <View>
                <View style={{height: 45, width: 100, borderRadius: 20, backgroundColor: Colors.gold, marginTop: 30, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems:'center'}} onPress={shufflePhoto}>
                        <Text style={{fontFamily: 'xmas-bold', color: 'white', fontSize: 28}}>
                            Shuffle
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{height: 45, width: 100, borderRadius: 20, backgroundColor: Colors.green.dark, marginTop: 30, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems:'center'}} onPress={() => {
                        props.navigation.navigate('Gallery')
                    }}>
                        <Text style={{fontFamily: 'xmas-bold', color: 'white', fontSize: 28}}>
                            Gallery
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View>
                <View style={{height: 45, width: 120, borderRadius: 20, backgroundColor: 'white', marginTop: 30, justifyContent: 'center', alignItems:'center'}}>
                    <TouchableOpacity style={{height: '100%', width: '100%', justifyContent: 'center', alignItems:'center'}} onPress={() => {
                        props.navigation.navigate('Favorites')
                    }}>
                        <Text style={{fontFamily: 'xmas-bold', color: Colors.red.dark, fontSize: 28}}>
                            Favorites
                        </Text>
                    </TouchableOpacity>
                </View>
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
        height: 320,
        width: 320,
        borderRadius: 15,
        overflow: 'hidden',
        marginTop: 50,
        shadowColor: 'black',
        shadowOpacity: 0.46,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
    }
})
 
export default LandingScreen;