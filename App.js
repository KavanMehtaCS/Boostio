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
          {/* 
          <Layout style={styles.container}>  
          <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
          <Text status="success">Open up App.js to start working on your app!</Text>
          <Button 
            accessoryLeft={deleteIcon} 
            onPress={() => console.log("Pressed")}> 
            Press me 
          </Button>
          <Card status="success">
            <Text>Hellow world!</Text>
          </Card>
          <StatusBar style="light" /> 
          <Text style={{ color: eva.custom-theme['color-primary-default'] }} category='h4'>Open up App.js to start working on your app!</Text> 
          </Layout>
          */}
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
