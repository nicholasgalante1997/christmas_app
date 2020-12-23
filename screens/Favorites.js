import React, {useState} from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, Alert} from 'react-native'
import Colors from '../constants/Colors';
import Modal from 'react-native-modal'
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import {useDispatch, useSelector} from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as favoriteActions from '../store/favoriteActions'

const FavsScreen = (props) => {

    const [selectedImage, setSelectedImage] = useState({})
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    const favs = useSelector(state => state)

    const handleSelect = (photo) => {
        setSelectedImage(photo)
        setModal(true)
    }

    const handleRemoveFromFavorites = () => {
        dispatch(favoriteActions.removePhoto(selectedImage))
        Alert.alert("Aaaaand it's gone!", "Don't you worry though! It's just hiding in the gallery :)", [{text: "Ok Nick you Rock", onPress: ()=>{setTimeout(() => {setModal(false)}, 500)}}])
    }


    const testPress = () => {
        const getData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('@favorites')
              return jsonValue != null ? JSON.parse(jsonValue) : null;
            } catch(e) {
              console.log(e)
            }
          }

         getData()
         .then(r => console.log(r))
        
    }

    const renderItem = (itemData) => {
        return (
            <View style={{height: 140, width: 140, borderRadius: 10, backgroundColor: 'white', margin: 20, overflow: 'hidden'}}>
                <TouchableOpacity style={{height: '100%', width: '100%', overflow: 'hidden'}} onPress={() => handleSelect(itemData.item)}>
                    <Image source={itemData.item.image} style={{height: '100%', width: '100%', resizeMode: 'cover'}} />
                </TouchableOpacity>
            </View>
        )
    }

    const PhotoModal = (props) => {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{height: Dimensions.get('window').height * 0.6, width: Dimensions.get('window').width * 0.8, overflow: 'hidden'}}>
                    <Image source={selectedImage.image} style={{height: '100%', width: '100%', resizeMode: 'contain'}} />
                </View>
                <View style={{marginTop: 20, height: 50, width: Dimensions.get('window').width * 0.5, justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 8, borderRadius: 15}}>
                    <FontAwesome name="close" size={36} color={Colors.green.light} onPress={() => setModal(false)} />
                    <AntDesign name="hearto" size={36} color={Colors.red.light} onPress={handleRemoveFromFavorites} />
                </View>
            </View>
        )
    }

    return ( 
        <View style={styles.screen}>
            <Modal isVisible={modal}>
                <PhotoModal />
            </Modal>
            <View style={{marginTop: 40, justifyContent: 'center', alignItems: 'center', borderBottomWidth: 3, borderBottomColor: Colors.gold, width: '70%'}}>
                <Text style={{color: 'white', fontFamily: 'xmas-lite', fontSize: 24}}>
                    And now for the hall of fame!
                </Text>
            </View>
            <FlatList 
            data={favs}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            numColumns={2}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.green.dark,
        alignItems: 'center'
    }
})
 
export default FavsScreen;