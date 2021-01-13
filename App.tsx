import React, { FC, useState } from 'react';
import { Provider } from 'react-redux';
import { AppNavigation } from './src/navigation/AppNavigation';
import AppLoading from 'expo-app-loading';
import { store } from './src/store';
import { bootstrapp } from './src/bootstrapp';

const App: FC = () => {
  const [ loading, setLoading ] = useState(true);

  if (loading) {
    return (
      <AppLoading
        startAsync={bootstrapp}
        onFinish={(): void => setLoading(false)}
        onError={(error: any): void => console.log(error)}
      />
    );
  }

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
