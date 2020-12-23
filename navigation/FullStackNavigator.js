import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'

import LandingScreen from '../screens/LandingScreen'
import GalleryScreen from '../screens/Gallery'
import FavsScreen from '../screens/Favorites'
import Colors from '../constants/Colors'

const FullStackNavigator = createStackNavigator({
    LandingScreen: {
        screen: LandingScreen,
        navigationOptions: {
            headerShown: false
        }
    },
    Gallery: {
        screen: GalleryScreen,
        navigationOptions: {
            headerTitle: 'The Galante Gallery',
            headerTitleStyle: {
                fontFamily: 'xmas-bold',
                color: Colors.red.dark
            },
            headerBackTitleVisible: false
        }
    },
    Favorites: {
        screen: FavsScreen,
        navigationOptions: {
            headerTitle: 'The Christmas Highlights',
            headerTitleStyle: {
                fontFamily: 'xmas-bold',
                color: Colors.red.dark
            },
            headerBackTitleVisible: false
        }
    }
})

export default createAppContainer(FullStackNavigator)