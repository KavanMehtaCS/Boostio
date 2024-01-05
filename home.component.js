import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { Button, Layout, } from '@ui-kitten/components';
import TextAnimator from './TextAnimator'
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8
  },
  containerStyle: {},
  textStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Menlo',
    marginBottom: 14
  },
  bottomView: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
});

export const HomeScreen = ({ navigation }) => {
  const QUOTABLE_URL = 'https://api.quotable.io/quotes/random';
  // const [Quote, setQuote] = useState([]);
  const [Quote, setQuote] = useState("Loading...");
  const [clicked, setClicked] = useState(0);

  function quoteAnimation() {
    var message = 
      `${Quote.content} ~ ${Quote.author}`
    return (
      <View style={styles.container}>
        <TextAnimator 
          content={message} 
          textStyle={styles.textStyle} 
          style={styles.containerStyle} 
        />
      </View>
    );
  };

  // @refresh reset
  useEffect(() => {
    const getQuotes = async () => {
      try {
        const res = (await axios.get('https://api.quotable.io/quotes/random')).data;
        //setQuote(res[0]);
        setQuote(`${res[0].content} ~ ${res[0].author}`);
        console.log(Quote);
      } catch (error) {
        console.error(error);
      }
    };

    getQuotes();
  }, [clicked]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <TextAnimator 
            content={Quote} 
            textStyle={styles.textStyle} 
            style={styles.containerStyle} 
            clicked={clicked}
          />
        </View>
        </ScrollView>
        <Button style={styles.bottomView} onPress={() => setClicked(clicked + 1) && setSwitch3(!switch2)}>Want some Motivation? Get an Inspirational Quote!</Button>
      </Layout>
    </SafeAreaView>
  );
};