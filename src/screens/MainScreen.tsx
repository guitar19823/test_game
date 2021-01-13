import React, { FC, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateNumber } from '../store/actions/numberActions';
import { addPalyer } from '../store/actions/hallOffFameActions';
import { theme } from '../theme';
import { countMatches, countGuessed, numbersToSymbols } from '../utils';
import {
  GameLayout,
  GameFooter,
  GameInput,
  GameImagePicker,
  GameTitle
} from '../components';

export const MainScreen: FC = () => {
  const { secretNumber } = useSelector((state: RootState) => state.number);
  const [ attempts, setAttempts ] = useState(0);
  const [ guessed, setGuessed ] = useState(0);
  const [ matches, setMatches ] = useState(0);
  const [ victory, setVictory ] = useState(false);
  const [ newGame, setNewGame ] = useState(1);
  const dispatch = useDispatch();

  const refreshGame = (): void => {
    dispatch(updateNumber());

    setAttempts(0);
    setGuessed(0);
    setMatches(0);
    setVictory(false);
    setNewGame(Date.now());
  };

  const delights = (number: number): string => {
    if (number === 1) return 'Редкое везение!';
    if (number > 1 && number < 4) return 'Гениально!';
    if (number > 3 && number < 11) return 'Отлично!';
    if (number > 10 && number < 21) return 'Хороший результат!';

    return 'Число угадано успешно!';
  };

  const numberСheck = (value: string): void => {
    setAttempts(state => state + 1);

    if (value !== secretNumber) {
      setMatches(countMatches(value, secretNumber));
      setGuessed(countGuessed(value, secretNumber));
    } else {
      setVictory(true);

      Alert.alert(delights(attempts + 1), `Угадано с${attempts + 1 === 2 ? 'о' : ''} ${attempts + 1} попытки.`);
    }
  }

  return (
    victory ? (
      <SaveResults
        attempts={attempts}
        refreshGame={refreshGame}
      />
    ) : (
      <GameLayout>
        <GameTitle title="Угадай число" />
        
        <Text style={styles.secretNumber}>{numbersToSymbols(secretNumber, '?')}</Text>
        
        <View style={styles.hints}>
          <Text style={styles.hint}>Угаданных цифр: {guessed}</Text>
          
          <Text style={styles.hint}>На своих позициях: {matches}</Text>
        </View>

        <GameInput
          placeholder="Введите число"
          maxLength={secretNumber.length}
          keyboardType="numeric"
          onEndEditing={numberСheck}
          reset={newGame}
        />

        <GameFooter>
          <Button
            title="Новая игра"
            onPress={refreshGame}
            color={theme.BLUE}
          />
        </GameFooter>
      </GameLayout>
    )
  );
};

interface PropsSaveResults {
  attempts: number,
  refreshGame: () => void,
}

const SaveResults: FC<PropsSaveResults> = ({ attempts, refreshGame }) => {
  const [ name, setName ] = useState('');
  const [ image, setImage ] = useState('');
  const dispatch = useDispatch();

  const handleSavePhoto = (): void => {
    if (name) {
      dispatch(addPalyer({
        name,
        image,
        attempts,
      }));
      refreshGame();
    } else {
      Alert.alert('Предупреждение!', 'Вы не ввели имя.');
    }
  };

  return (
    <GameLayout>
      <Text style={styles.attempts}>Число попыток: {attempts} </Text>

      <View style={styles.input}>
        <GameInput
          placeholder="Введите имя"
          onEndEditing={setName}
        />
      </View>

      <GameImagePicker
        image={image}
        setImage={setImage}
      />

      <GameFooter>
        <Button
          title="Новая игра"
          onPress={refreshGame}
          color={theme.BLUE}
        />

        <Button
          title="Сохранить результат"
          onPress={handleSavePhoto}
          color={theme.RED}
        />
      </GameFooter>
    </GameLayout>
  );
};

const styles = StyleSheet.create({
  secretNumber: {
    fontSize: 50,
    marginBottom: 20,
  },
  attempts: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  hints: {
    marginBottom: 20,
  },
  hint: {
    fontSize: 22,
    marginBottom: 5,
  },
});
