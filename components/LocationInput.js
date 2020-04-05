import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet, Modal} from 'react-native';

const LocationInput = props => {

  let [locationTitle, setLocationTitle] = useState('');

  const addLocationTitle = (location) => {
    setLocationTitle(location);
  }

  const onSetMarker = () => {
    props.setMarker({
      coordinate: props.coordinate,
      title: locationTitle
    });
    setLocationTitle('');
  }

  return (
    <Modal visible={props.visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Location Title"
          style={styles.input}
          onChangeText={addLocationTitle}
          />
          <View style={styles.buttonContainer}>
              <View style={styles.btn}>
                <Button title="cancel" color="red" onPress={() =>(props.onCancel(false))} />
              </View>
              <View style={styles.btn}>
                <Button title="add" onPress={onSetMarker} />
              </View>
          </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  input: {
    width: '80%',
    alignSelf: 'center',
    borderWidth: 1,
    padding: 5,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 40,
    paddingRight: 60,
  },
  btn: {
    width: '50%',
    margin: 5
  }
})

export default LocationInput;
