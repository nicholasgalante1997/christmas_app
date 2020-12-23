import AsyncStorage from '@react-native-async-storage/async-storage';

export default (state=[], action) => {

    const storeData = async (value) => {
        try { 
         const res = await AsyncStorage.setItem('@favorites', value)
         return
        } catch (e) {
          console.log(e)
        }
    }

    switch(action.type){
        case 'SET':
            state = action.payload.value;
            return state;
        case 'ADD': 
            if (state.includes(action.payload.value)){
                return state;
            } else {
                const photoPackage = JSON.stringify([...state, action.payload.value])
                storeData(photoPackage)
                return [...state, action.payload.value]
            }
        case 'REMOVE': 
            const target = action.payload.value;
            const returnArr = [...state.filter(photo => photo.id !== target.id)];
            const JSONArr = JSON.stringify(returnArr)
            storeData(JSONArr)
            return returnArr;
        default:
            return state;
    }
}