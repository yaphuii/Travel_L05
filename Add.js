import React, { useState } from 'react';
import { View, Text, TextInput, Button, StatusBar } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { destinations } from './Data.js';

const Add = ({ navigation }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('Beaches'); // Default type
    const [imageUrl, setImageUrl] = useState(''); // State for the image URL

    return (
        <View>
            <StatusBar />
            <Text>Destination Name:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Text>Description:</Text>
            <TextInput
                style={{ borderWidth: 1, height: 100, textAlignVertical: 'top' }}
                multiline
                onChangeText={(text) => setDescription(text)}
                value={description}
            />
            <Text>Type:</Text>
            <RNPickerSelect
                onValueChange={(value) => setType(value)}
                items={[
                    { label: 'Beaches', value: 'Beaches' },
                    { label: 'Mountains', value: 'Mountains' },
                ]}
                value={type}
            />
            <Text>Image URL:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setImageUrl(text)} // Update image URL state
                value={imageUrl} // Bind the input to the state
            />
            <Button
                title="Submit"
                onPress={() => {
                    const index = type === 'Beaches' ? 0 : 1;
                    const newDestination = {
                        id: `${destinations[index].data.length + 1}`,
                        name,
                        description,
                        image: { uri: imageUrl || 'https://example.com/placeholder.jpg' }, // Use the entered URL or a default placeholder
                    };
                    destinations[index].data.push(newDestination);
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

export default Add;
