import React from 'react';
import { connect } from 'react-redux' //connect is a function used to connect react components to the redux store.. can be used in any javascript application
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {removeFeature} from './actions/removeFeatures';
import {addFeature} from './actions/addFeatures'

const App = (props) => { //passing props in place of state here
  // const state = {
  //   additionalPrice: 0,
  //   car: {
  //     price: 26395,
  //     name: '2019 Ford Mustang',
  //     image:
  //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
  //     features: []
  //   },
  //   additionalFeatures: [
  //     { id: 1, name: 'V-6 engine', price: 1500 },
  //     { id: 2, name: 'Racing detail package', price: 1500 },
  //     { id: 3, name: 'Premium sound system', price: 500 },
  //     { id: 4, name: 'Rear spoiler', price: 250 }
  //   ]
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} /> 
        <AddedFeatures car={props.car} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} addFeature={props.addFeature} /> 
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    additionalFeatures: state.additionalFeatures,   //these props im intrested in
    car: state.car,
  }
}

export default connect(mapStateToProps,{ addFeature, removeFeature })(App);  //mapstatetoprops higher order component actions being passed  as the second property (objects)