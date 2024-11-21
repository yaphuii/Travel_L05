import React from 'react';
import {StatusBar, Button, SectionList, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import { destinations } from './Data.js';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
  opacityStyle: {
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    fontSize: 12,
    color: 'gray',
    margin: 10,
  },
    container:{
      flex:1,
        paddingBottom:20,
    },
});

const Home = ({ navigation }) => {
  const renderItem = ({ item, index, section }) => {
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() => {
              navigation.navigate('Edit', {
                index: index,
                type: section.title,
                name: item.name,
                description: item.description,
                image: item.image,
              });
            }}
        >
          <Image source={item.image} style={styles.image} />
          <Text style={styles.textStyle}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </TouchableOpacity>
    );
  };

  return (
      <View style={styles.container}>
        <StatusBar />
        <Button
            title="Add Destination"
            onPress={() => {
              navigation.navigate('Add');
            }}
            color="lightseagreen"
        />
        <SectionList
            sections={destinations}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            renderSectionHeader={({ section: { title, bgcolor } }) => (
                <Text style={[styles.headerText, { backgroundColor: bgcolor }]}>{title}</Text>
            )}
        />
      </View>
  );
};

export default Home;
