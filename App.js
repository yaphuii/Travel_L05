import React from 'react';
import { SectionList, Text, View, Image, StyleSheet, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';  // Correct for FontAwesome5

const destinations = [
  {
    title: 'Beaches',
    icon: 'sun',
    bgcolor: 'palevioletred',
    data: [
      {
        id: '1',
        name: 'Bora Bora',
        image: require('./borabora.jpg'),
        description: 'Bora Bora is a small island in French Polynesia, known for its turquoise waters and luxury resorts.'
      },
      {
        id: '2',
        name: 'Maldives',
        image: require('./maldives.jpg'),
        description: 'The Maldives is a tropical paradise in the Indian Ocean, famous for its white sandy beaches and clear waters.'
      },
    ],
  },
  {
    title: 'Mountains',
    icon: 'mountain',
    bgcolor: 'royalblue',
    data: [
      {
        id: '1',
        name: 'Mount Everest',
        image: require('./everest.jpg'),
        description: 'Mount Everest is the tallest mountain in the world, located in the Himalayas on the border between Nepal and China.'
      },
      {
        id: '2',
        name: 'Rocky Mountains',
        image: require('./rockymountain.jpg'),
        description: 'The Rocky Mountains are a major mountain range in North America, known for their breathtaking landscapes and wildlife.'
      },
    ],
  },
];

const App = () => {
  const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Text style={styles.itemDescription}>{item.description}</Text>
          <Button
              title="More Info"
              onPress={() => alert(`More info about ${item.name}`)}
              color="olivedrab"
          />
        </View>
      </View>
  );

  const renderSectionHeader = ({ section }) => (
      <View style={[styles.sectionHeaderContainer, { backgroundColor: section.bgcolor }]}>
        <View style={styles.sectionHeaderContent}>
          <Icon name={section.icon} size={30} color="white" />
          <Text style={styles.sectionHeader}>{section.title}</Text>
        </View>
      </View>
  );

  return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <SectionList
            sections={destinations}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: 'seashell',
  },
  sectionHeaderContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 5,
  },
  sectionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionHeader: {
    fontSize: 21,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    fontFamily: 'georgia',
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'column',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 15,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default App;
