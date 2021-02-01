//reducer takes a state and takes an action and it will return back any transtion that state based on what the action type is defined as
const initialState = {  //moved the state as initialstate here
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 0, name: 'Racing rims', price: 2000 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
}
    
export const reducer = (state = initialState, action) => { //passed in the current state as the state of the reducer function
    console.log(state)
    switch (action.type) {
        case 'ADD_FEATURE':
            return {
                ...state, additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car, features: [
                        ...state.car.features, action.payload
                    ]
                }

            }
            case 'REMOVE_FEATURE': 
              return {
                  ...state, additionalPrice: state.additionalPrice - action.payload.price,
                  car: {
                      ...state.car, 
                      features: [...state.car.features.filter(feature => feature.id !== action.payload.id)]
                  }
              }
              default: return state;
    }
}