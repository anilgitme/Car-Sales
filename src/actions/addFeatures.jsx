export const addFeature = feature => {  //action creator function
    return {                        //redux was design to call dispatch for these without specifying
        type: 'ADD_FEATURE',
        payload: feature
    }
}