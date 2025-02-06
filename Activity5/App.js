import React, { useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const morning = [
  {
    id: 'todo1',
    title: '1. Gumising',
  },
  {
    id: 'todo2',
    title: '2. Konting unat ng katawan',
  },
  {
    id: 'todo3',
    title: '3. Magkape',
  },
  {
    id: 'todo4',
    title: '4. Mag almusal',
  },
  {
    id: 'todo5',
    title: '5. mag scroll sa soc med',
  },
  {
    id: 'todo6',
    title: '6. Konting pratice ng arnis',
  },
  {
    id: 'todo7',
    title: '7. mag review',
  },
];
const afternoon = [
  {
    id: 'todo8',
    title: '8. Maligo',
  },
  {
    id: 'todo9',
    title: '9. Pumasok sa GRC',
  },
  {
    id: 'todo10',
    title: '10. Mang bully ng klasmeyt',
  },
  {
    id: 'todo11',
    title: '11. mangopya',
  },
  {
    id: 'todo12',
    title: '12. i off monitor pc ng katabi',
  },
  {
    id: 'todo13',
    title: '13. manggulo sa project ng iba',
  },
  {
    id: 'todo14',
    title: '14. mag training ng arnis',
  },
  {
    id: 'todo15',
    title: '15. kumain',
  },
  {
    id: 'todo16',
    title: '16. mag scroll sa soc med',
  },
  {
    id: 'todo17',
    title: '17. umuwi sa bahay',
  },
  {
    id: 'todo18',
    title: '18. mag kape',
  },
  {
    id: 'todo19',
    title: '19. manuod sa tv',
  },
  {
    id: 'todo20',
    title: '20. makipag kwentuhan',
  },
];

const evening = [
  {
    id: 'todo21',
    title: '21. maligo',
  },
  {
    id: 'todo22',
    title: '22. tooth brush',
  },
  {
    id: 'todo23',
    title: '23. review',
  },
  {
    id: 'todo24',
    title: '24. manggulo sa GC',
  },
  {
    id: 'todo25',
    title: '25. matulog',
  },
];

const morningColors = ['#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6'];
const afternoonColors = [
  '#FFC300',
  '#FF5733',
  '#33FF57',
  '#DAF7A6',
  '#33FF57',
  '#C70039',
];
const eveningColors = ['#581845', '#900C3F', '#C70039', '#FF5733', '#FFBD33'];

const Item = ({ item, onPress, backgroundColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item, index, sectionColors }) => {
    const backgroundColor =
      item.id === selectedId
        ? 'blue'
        : sectionColors[index % sectionColors.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.todo}>TO DO LIST</Text>
          <Text style={styles.sectionHeader}>Morning</Text>
          <FlatList
            data={morning}
            renderItem={({ item, index }) =>
              renderItem({ item, index, sectionColors: morningColors })
            }
            keyExtractor={(item) => item.id}
          />

          <Text style={styles.sectionHeader}>Afternoon</Text>
          <FlatList
            data={afternoon}
            renderItem={({ item, index }) =>
              renderItem({ item, index, sectionColors: afternoonColors })
            }
            keyExtractor={(item) => item.id}
          />

          <Text style={styles.sectionHeader}>Evening</Text>
          <FlatList
            data={evening}
            renderItem={({ item, index }) =>
              renderItem({ item, index, sectionColors: eveningColors })
            }
            keyExtractor={(item) => item.id}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    textAlign: 'center',
    padding: 8,
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 6,
    fontStyle: 'italic',
  },
  item: {
    padding: 8,
    margin: 2,
  },
  title: {
    fontSize: 15,
    color: '#ffffff',
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
});

export default App;
