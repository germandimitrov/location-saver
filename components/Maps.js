import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import LocationInput from './LocationInput';

const Maps = (props) => {

  let [selectedCoordinate, setSelectedCoordinate] = useState({});
  let [currentRegion, setCurrentRegion] = useState({
    latitude: 42.700411478992336,
    longitude: 23.32109659910202,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  });

  const setNewRegionHandler = (region) => {
    setCurrentRegion(region)
  }

  const setCoordinateHandler = (coordinate) => {
    props.openModal(true);
    setSelectedCoordinate(coordinate);
  }

  return (
    <View>
      <LocationInput
        setMarker={props.setMarker}
        coordinate={selectedCoordinate}
        visible={props.isOpenModal}
        onCancel={props.cancelModal}
      />
      <MapView
        style={styles.mapStyle}
        initialRegion={currentRegion}
        onPress={(event) => setCoordinateHandler(event.nativeEvent.coordinate)}
        animateToRegion={(region) => setNewRegionHandler(region) }>
          {
            props.markers.map((marker, i) => {
              return <Marker title={marker.title} key={marker.id} coordinate={marker.coordinate} />
            })
          }
      </MapView>
    </View>
  );

}

export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});