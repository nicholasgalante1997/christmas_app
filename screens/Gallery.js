import React, {useState} from 'react'
import {Text, View, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, Alert} from 'react-native'
import Colors from '../constants/Colors';
import demoArray from '../models/demoPhotoData'
import Modal from 'react-native-modal'
import { FontAwesome, AntDesign } from '@expo/vector-icons'; 
import {useDispatch, useSelector} from 'react-redux'
import * as favoriteActions from '../store/favoriteActions'

const GalleryScreen = (props) => {

    const [selectedImage, setSelectedImage] = useState({})
    const [modal, setModal] = useState(false)
    const dispatch = useDispatch();
    const favs = useSelector(state => state)

    const handleSelect = (photo) => {
        setSelectedImage(photo)
        setModal(true)
    }

    const handleAddToFavorites = () => {
        dispatch(favoriteActions.addPhoto(selectedImage))
        Alert.alert("Very Nice", "It's in the favorites! Go check it out! :)", [{text: "Ok Nick you Rock", onPress: ()=>{setTimeout(() => {setModal(false)}, 500)}}])
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
                    <AntDesign name="heart" size={36} color={Colors.red.light} onPress={handleAddToFavorites} />
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
                    Take a stroll down memory lane!
                </Text>
            </View>
            <FlatList 
            data={demoArray} 
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
 
export default GalleryScreen;