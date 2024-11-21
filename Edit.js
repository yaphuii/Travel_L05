import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { destinations } from './Data.js';

const Edit = ({ navigation, route }) => {
    const { index, type } = route.params;
    const indexNum = type === 'Beaches' ? 0 : 1;
    const destination = destinations[indexNum].data[index];

    const [name, setName] = useState(destination.name);
    const [description, setDescription] = useState(destination.description);

    return (
        <View>
            <Text>Destination Name:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <Text>Description:</Text>
            <TextInput
                style={{ borderWidth: 1, height: 100, textAlignVertical: 'top' }}
                multiline
                value={description}
                onChangeText={(text) => setDescription(text)}
            />
            <View style={{ flexDirection: 'row' }}>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title="Save"
                        onPress={() => {
                            destinations[indexNum].data[index].name = name;
                            destinations[indexNum].data[index].description = description;
                            navigation.navigate('Home');
                        }}
                    />
                </View>
                <View style={{ margin: 10, flex: 1 }}>
                    <Button
                        title="Delete"
                        onPress={() =>
                            Alert.alert('Are you sure?', '', [
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        destinations[indexNum].data.splice(index, 1);
                                        navigation.navigate('Home');
                                    },
                                },
                                { text: 'No' },
                            ])
                        }
                    />
                </View>
            </View>
        </View>
    );
};

export default Edit;
