import React, { FC, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getPalyers } from '../store/actions/hallOffFameActions';
import { GameLayout, GamePlayer } from '../components';

export const HallOffFameScreen: FC = () => {
  const data = useSelector((state: RootState) => state.hall);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPalyers());
  }, [dispatch]);

  return (
    <GameLayout>
      {
        data.length ? (
          <FlatList
            style={styles.flatList}
            data={data}
            keyExtractor={user => user.id.toString()}
            renderItem={({ item }) => (
              <GamePlayer
                id={item.id}
                name={item.name}
                image={item.image}
                attempts={item.attempts}
              />
            )}
          />
        ) : (
          <View>
            <Text>Список игроков пуст</Text>
          </View>
        )
      }
    </GameLayout>
  );
};

const styles = StyleSheet.create({
  flatList: {
    width: '100%',
  },
});
