import React from 'react';
import {Provider as PaperProvider, DefaultTheme} from 'react-native-paper';

import Routes from './src/navigations/Routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#f0852e'
  }
}

const App = () => {
  return (
    <Routes/>
  )
}

export default function() {
  return (
    <PaperProvider theme={theme}>
      <App/>
    </PaperProvider>
  )
}