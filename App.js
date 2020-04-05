import React, { useState } from 'react';
import { StyleSheet, Text,  View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import Maps from './components/Maps';
import Menu from './components/Menu';
import LocationList from './components/LocationList';

export const MenuItems = Object.freeze(
  {"locations":1, "maps":2 }
);

export default function App() {

  console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed'];
  console.disableYellowBox = true;

  let [selectedMenuItem, setSelectedMenuItem] = useState(MenuItems.maps);
  let [markers, setMarker] = useState([]);
  let [isOpenModal, setIsOpenModal] = useState(false);

  const selectMenuItem = (menuItem) => {
    setSelectedMenuItem(menuItem);
  }

  const setMarkerHandler = (marker) => {
    setMarker((currentMarkers) => [...currentMarkers, {
      id: Math.random().toString(),
      coordinate: marker.coordinate,
      title: marker.title
    }])
    setIsOpenModal(false);
  };

  const removeMarker = (markerId) => {
    setMarker(currentMarker => {
      return currentMarker.filter(marker => marker.id !== markerId);
    })
  }

  const openModal = () => {
    setIsOpenModal(true);
  }

  const cancelModal = () => {
    setIsOpenModal(false);
  }

  return (
    <View>
       {{
        [MenuItems.locations]: (
          <LocationList
            locations={markers}
            removeMarker={removeMarker}
          />
        ),
        [MenuItems.maps]: (
          <Maps
            markers={markers}
            setMarker={setMarkerHandler}
            isOpenModal={isOpenModal}
            openModal={openModal}
            cancelModal={cancelModal}
          />
        ),
        default: (
          <LocationList
            locations={markers}
            removeMarker={removeMarker}
           />
        )
        }[selectedMenuItem]}
      <Menu onSelect={selectMenuItem} />
    </View>
  );

}
