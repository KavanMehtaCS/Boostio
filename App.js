import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import { ApplicationProvider, Layout, Text, Button, IconRegistry, Icon, Card, Datepicker, EvaProp} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { default as theme } from './custom-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { AppNavigator } from './navigation.component.js';
import { useState } from 'react';

const deleteIcon = (props) => {
  return <Icon name='trash' {...props} />;
}

export default function App() {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme }}>
        <AppNavigator/>
      </ApplicationProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
