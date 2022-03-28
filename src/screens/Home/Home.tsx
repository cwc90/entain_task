import React, {useState, useMemo} from 'react';
import {SafeAreaView, FlatList, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import styles from './Home.styles';
import {StackParamList} from '_types';
import useGetRaces from './hooks/useGetRaces';
import {LoadingView} from '_components';
import RaceView from './components/RaceView';
import {RACING_CATEGORIES, NUMBER_OF_RACES} from '_constants';
import RaceListHeader from './components/RaceListHeader';

export type HomeProps = NativeStackScreenProps<StackParamList, 'Home'>;

const Racing: React.FC = () => {
  const {isLoading, races, removeRace} = useGetRaces();
  const [selectedCategory, setSelectedCategory] = useState<string[]>(
    Object.keys(RACING_CATEGORIES),
  );

  // filter the races using category and slice for five.
  const filteredRaces = useMemo(
    () =>
      races
        .filter(race => selectedCategory.includes(race.category_id))
        .slice(0, NUMBER_OF_RACES),
    [races, selectedCategory],
  );

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <LoadingView />
      ) : (
        <FlatList
          data={filteredRaces}
          renderItem={({item}) => (
            <RaceView summary={item} removeRace={removeRace} />
          )}
          keyExtractor={item => item.race_id}
          ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
          ListHeaderComponent={
            <RaceListHeader
              selectedCategoryIds={selectedCategory}
              setSelectedCategoryIds={setSelectedCategory}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Racing;
