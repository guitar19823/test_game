import React, { FC, useEffect, useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

interface Props {
  placeholder?: string,
  maxLength?: number,
  reset?: number,
  keyboardType?: any,
  onEndEditing?: (text: string) => void,
}

export const GameInput: FC<Props> = props => {
  const {
    placeholder = 'Enter value',
    maxLength = 30,
    reset = 0,
    keyboardType = 'default',
    onEndEditing = () => void(0),
  } = props;

  const [value, setValue] = useState('');

  useEffect(() => {
    setValue('');
  }, [reset]);

  const handleOnEndEditing = (): void => {
    onEndEditing(value);
  };

  return (
    <TextInput
      style={styles.input}
      value={value}
      placeholder={placeholder}
      onChangeText={setValue}
      onEndEditing={handleOnEndEditing}
      maxLength={maxLength}
      keyboardType={keyboardType}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 18,
    paddingVertical: 5,
    width: 200,
    fontSize: 20,
    borderColor: 'gray',
    borderWidth: 1,
  },
});