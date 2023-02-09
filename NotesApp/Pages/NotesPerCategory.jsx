import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image,FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import { Button, Card, FAB, Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SharedArraysContext } from './Context';
import * as ImagePicker from 'expo-image-picker';

export default function NotesPerCategory(props) {

    const [title, setTitle] = useState("");
    const [discription, setDiscription] = useState("");
    const [display, setDisplay] = useState('none');
    const categoryId = props.route.params?.categoryId;
    const categoryName = props.route.params?.categoryName;
    const { notes, setNotes } = useContext(SharedArraysContext);
    const [image, setImage] = useState('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    const addNote = () => {
        setNotes(prevNotes => {
            let newNotes = { ...prevNotes };
            if (!newNotes[categoryId]) {
                newNotes[categoryId] = [];
                console.log(newNotes[categoryId]);
            }
            newNotes[categoryId].push({
                noteId: newNotes[categoryId].length,
                title: title,
                description: discription,
                dateAndTime: new Date().toLocaleString(),
                imageUrl: image
            });
            setTitle('');
            setDiscription('');
            setDisplay('none');
            setImage('');
            return newNotes;
        });
        console.log(notes);
    };

    const deleteNote=(id)=>{
        console.log(id);
        setNotes({
            ...notes,
            [categoryId]: notes[categoryId].filter(item => item.noteId !== id),
        });    }
    return (
        <SafeAreaView >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, position: 'absolute', top: 10, left: 19, right: 5, }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold', width: '70%' }}>{categoryName}</Text>
                <FAB
                    style={{ width: '30%' }}
                    visible={true}
                    icon={{ name: 'add', color: 'white' }}
                    color="rgba(199, 43, 98, 1)"
                    onPress={() => { setDisplay('flex') }}
                />
            </View>

            <View style={{
                display: display,
                marginTop: 50,
                padding: 20,
                borderWidth: 2,
                margin: 15,
                borderColor: 'rgba(199, 43, 98, 1)',
            }}>
                <View style={styles.titleContainer}>
                    <TextInput
                        style={styles.title}
                        placeholder="Enter title"
                        value={title}
                        onChangeText={text => setTitle(text)}
                    />
                </View>
                <View style={styles.descriptionContainer}>
                    <TextInput
                        style={styles.description}
                        placeholder="Enter description"
                        value={discription}
                        onChangeText={text => setDiscription(text)}
                        multiline
                    />
                </View>

                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100, marginTop: 30 }} />}

                <View style={{ alignSelf: 'flex-end', flexDirection: 'row', padding: 16, marginTop: 40 }}>
                    <Button title='save'
                        disabled={title === ''}
                        buttonStyle={{
                            marginRight: 20, backgroundColor: 'rgba(199, 43, 98, 1)'

                        }}
                        titleStyle={{ fontWeight: '700' }}
                        onPress={() => addNote()}>
                    </Button>
                    <Button title='cancel'
                        buttonStyle={{
                            marginRight: 20,
                            backgroundColor: 'lightgrey'
                        }}
                        titleStyle={{ fontWeight: '700' }}
                        onPress={() => setDisplay('none')}>
                    </Button>
                    <Button title="Choose Image" onPress={pickImage} />
                </View>

            </View>
            <FlatList
                style={{ marginTop: 40 }}
                data={notes[categoryId]}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <Card >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Card.Title style={{
                                fontSize: '15%',
                                fontWeight: 'bold', color: 'rgba(199, 43, 98, 1)', alignSelf: 'left', fontSize: 25
                                
                            }}>
                                {item.title}
                            </Card.Title>
                            <Icon
                            onPress={()=>{deleteNote(item.noteId)}}
        name='delete'
        color='black' />
        </View>
                            <Card.Title style={{
                                fontSize: '15%',
                                fontWeight: 'bold', color: 'rgba(199, 43, 98, 1)', alignSelf: 'left'
                            }}>
                                {item.dateAndTime} </Card.Title> 
                              
    
                            <Card.Divider />
                           
                            <Text style={{
                                borderRadius: '10%',
                                alignSelf: 'flex-start',
                                marginRight: 100
                            }}>
                                {item.description}
                            </Text>

                            {item.imageUrl && (
                                <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100, marginTop: 20 }} />
                            )}
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
    titleContainer: {
        marginBottom: 10
    },
    title: {
        fontSize: 18,
        fontWeight: "bold"
    },
    description: {
        fontSize: 16
    }
});
