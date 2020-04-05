import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const LocationItem = props => {

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={ props.onRemoveMarker.bind(this, props.id) }>
      <View style={styles.listItem}>
        <Text> {props.title} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: '#000',
    borderWidth: 1,
  }
});

export default LocationItem;