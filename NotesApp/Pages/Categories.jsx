import { View, Text, FlatList, SafeAreaView, StyleSheet, TouchableOpacity, Modal, } from 'react-native'
import React, { useContext, useState } from 'react';
import { Button, Card, Input } from 'react-native-elements';
import { SharedArraysContext } from './Context';

export default function Categories(props) {

  const { categories, setCategories, notes, setNotes } = useContext(SharedArraysContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const addNote = (id) => {
    setNotes(prevNotes => {
      let newNotes = { ...prevNotes };
      if (!newNotes[id]) {
        newNotes[id] = [];
      }
      return newNotes;
    });
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 }}>
        <Text style={{ marginLeft: 0, fontSize: 30, fontWeight: 'bold' }}>MY NOTES</Text>
        <Button
          title="Add Category"
          onPress={() => setModalVisible(true)}
          icon={{
            name: 'plus',
            type: 'font-awesome',
            size: 15,
            color: 'white',
          }}
          iconRight
          iconContainerStyle={{ marginLeft: 10 }}
          titleStyle={{ fontWeight: '700' }}
          buttonStyle={{
            backgroundColor: 'rgba(199, 43, 98, 1)',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,

          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,

          }}
        />

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Add A New Category</Text>
              <Input
                placeholder='CATEGORY NAME'
                onChangeText={text => setInputValue(text)}
                value={inputValue}
              />

              <View style={{ alignSelf: 'center', flexDirection: 'row', padding: 16, marginTop: 40 }}>
                <Button title='Add'
                  disabled={inputValue === ''}  
                  buttonStyle={{
                    marginRight:20,backgroundColor: 'rgba(199, 43, 98, 1)'
                  }}
                  titleStyle={{ fontWeight: '700' }}
                  onPress={() => {
                    addNote(categories.length);
                    console.log(categories);
                    setCategories(prevCategories => [...prevCategories, { name: inputValue, id: categories.length }]);
                    console.log(categories);
                    setInputValue('');
                    setModalVisible(!modalVisible);
                  }}>
                </Button>

                <Button title='cancel'
                  buttonStyle={{
                    backgroundColor: 'lightgrey'
                  }}
                  titleStyle={{ fontWeight: '700' }}
                  onPress={() => setModalVisible('false')}>
                </Button>
              </View>
            </View>
          </View>
        </Modal>

      </View>
      <FlatList
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => props.navigation.navigate('Notes', { categoryId: item.id, categoryName: item.name })}>
            <Card>
              <Card.Title style={{
                fontSize: '20%',
                fontWeight: 'bold', color: 'rgba(199, 43, 98, 1)', flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Text style={{ textAlign: 'left' }}>( {notes[item.id].length} ) </Text>   <Text style={{ textAlign: 'right', width: '50%' }}> {item.name} </Text>
              </Card.Title>
            </Card>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
