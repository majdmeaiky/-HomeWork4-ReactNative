import { View, Text, Modal, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Button, Icon, Input, Card } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';


export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    // const addCategory = () => {

    // }
    return (
        <View>
            <Text style={{ marginLeft: 30, fontSize: 30, fontWeight: 'bold' }}>MY NOTES</Text>
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
                    alignSelf: 'flex-end',
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
            />

            <View>
                <ScrollView style={{ marginTop: '10%' }}>
                    <Card>
                        <Card.Title style={{
                            fontSize: '15%',
                            fontWeight: 'bold', color: '#F96167', alignSelf: 'left'
                        }}>facebook account{'\n'}timeeeeee</Card.Title>


                        <Card.Divider />

                        <Text style={{

                            padding: '10%',
                            borderRadius: '10%',
                        }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>

                    </Card>
                    <Text></Text>

                    <Card>
                        <Card.Title style={{
                            fontSize: '20%',
                            fontWeight: 'bold', color: '#FF5733'
                        }}>facebook account</Card.Title>
                        <Card.Divider />

                        <Text style={{
                            backgroundColor: 'lightgray',
                            padding: '10%',
                            borderRadius: '10%',
                        }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>

                    </Card>
                    <Card>
                        <Card.Title style={{
                            fontSize: '20%',
                            fontWeight: 'bold', color: '#FF5733'
                        }}>facebook account</Card.Title>
                        <Card.Divider />

                        <Text style={{
                            backgroundColor: 'lightgray',
                            padding: '10%',
                            borderRadius: '10%',
                        }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>

                    </Card>

                    <Card>
                        <Card.Title style={{
                            fontSize: '20%',
                            fontWeight: 'bold', color: '#FF5733'
                        }}>facebook account</Card.Title>
                        <Card.Divider />

                        <Text style={{
                            backgroundColor: 'lightgray',
                            padding: '10%',
                            borderRadius: '10%',
                        }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>

                    </Card>

                    <Card>
                        <Card.Title style={{
                            fontSize: '20%',
                            fontWeight: 'bold', color: '#FF5733'
                        }}>facebook account</Card.Title>
                        <Card.Divider />

                        <Text style={{
                            backgroundColor: 'lightgray',
                            padding: '10%',
                            borderRadius: '10%',
                        }}>
                            The idea with React Native Elements is more about component
                            structure than actual design.
                        </Text>

                    </Card>
                </ScrollView>

            </View>
            </View>

    )
}