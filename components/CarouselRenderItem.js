import React from 'react';
import {View, StyleSheet} from 'react-native'
import Icon from 'react-native-ico-christmas';

const CarouselRenderItem = (props) => {
   
        return (
            <View style={{...styles.carouselItem, ...props.style}}>
                <View style={styles.carouselIcon}>
                    <Icon name={props.name} height={60} width={60} background={{type: 'circle', color: 'white'}} />
                </View>
            </View>
        )
}

const styles = StyleSheet.create({
    carouselItem: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
 
export default CarouselRenderItem;