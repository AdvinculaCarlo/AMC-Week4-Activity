import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,ScrollView} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const MORNING = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'magligpit ng higaan',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'kumain ng almusal',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kape',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'body wash',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'check my schedule',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'check my vehicle',
  },
];

const AFTERNOON = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'kumain',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'hygene check',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'check ng gamit bago umuwi',
  },
];

const EVENING = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'kumain',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'body wash',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'kumain ulit',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'check for assignments',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'review',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'tulog',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <ScrollView>
    <Text style={styles.todo}>TO DO LIST</Text>
    <Text style={styles.umaga}>MORNING</Text>
      <FlatList
        data={MORNING}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

    <Text style={styles.hapon}>AFTERNOON</Text>
    <FlatList
        data={AFTERNOON}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

    <Text style={styles.gabi}>EVENING</Text>
    <FlatList
        data={EVENING}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'yellow',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 12,
  },
  todo: {
    marginTop: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 6,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  umaga: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  hapon: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  gabi: {
    marginTop: 16,
    paddingVertical: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;