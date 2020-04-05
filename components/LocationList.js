import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import LocationItem from './LocationItem';

const LocationList = (props) => {
  return (
    <View style={styles.screen}>
      { props.locations.length ?
        <View>
          <Text style={{fontSize: 20, justifyContent: 'center' }}> My Locations </Text>
          <FlatList
          keyExtractor={(item) => item.id}
          data={props.locations}
          renderItem={ (itemData) =>
            <LocationItem
              id={itemData.item.id}
              onRemoveMarker={props.removeMarker}
              title={itemData.item.title}
            />}
          />
        </View> :
        <View style={styles.noLocation}>
          <Text style={{fontSize: 25}}> No Locations Entered </Text>
        </View>
      }
    </View>
  );
}

export default LocationList;

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    height: '100%'
  },
  noLocation: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});
