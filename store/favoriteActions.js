export const addPhoto = photo => ({type: 'ADD', payload: {value: photo}})
export const removePhoto = photo => ({type: 'REMOVE', payload: {value: photo}})
export const setPhotos = photos => ({type: 'SET', payload: {value: photos}})