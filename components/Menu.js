import React from 'react';
import {View, Button} from 'react-native';
import { MenuItems } from "../App";

const Menu = (props) => {
  return (
  <View style={ {
      flexDirection: 'row',
      justifyContent: "space-between",
      position: 'absolute',
      bottom: 0,
      left: 20,
      marginBottom: 1
    } }>
    <View style={{ width: '45%' }}>
      <Button title="locations" onPress={ () =>  props.onSelect(MenuItems.locations)  } />
    </View>
    <View style={{ width: '45%' }}>
      <Button title="map" onPress={ () => { props.onSelect(MenuItems.maps) }  } />
    </View>
  </View>);
}



export default Menu;