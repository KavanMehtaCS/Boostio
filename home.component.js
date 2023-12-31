import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Button, Layout, } from '@ui-kitten/components';
import axios from 'axios';
// const api_url ="https://zenquotes.io/api/today/";
// var quoteOfTheDay: String = "";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   quoteOfTheDay = await response.json();
//   quoteOfTheDay = '"' + quoteOfTheDay[0]['q'] + '" - ' + quoteOfTheDay[0]['a']; 
//   const quoteOfTheDayList = await response.json();
//   quoteOfTheDay = '"' + quoteOfTheDayList[0]['q'] + '" - ' + quoteOfTheDayList[0]['a']; 
//   console.log(quoteOfTheDay);
//   return quoteOfTheDay;
// }

// const result = getapi(api_url);

export const HomeScreen = ({ navigation }) => {
  const QUOTABLE_URL = 'https://api.quotable.io/quotes/random';
  const [Quote, setQuote] = useState([false]);
  const [clicked, setClicked] = useState(0);

  const navigateDetails = () => {
    navigation.navigate('Resources');
  };

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const res = (await axios.get('https://api.quotable.io/quotes/random')).data;
        console.log(res[0]);
        setQuote(res[0]);
      } catch (error) {
        console.error(error);
      }
    };

    getQuotes();
  }, [clicked]);

  const loadQuote = () => {
    console.log(Quote)
    return (
      <Text>{Quote.content}</Text>
    )
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={() => setClicked(!clicked)}>Want some Motivation? Get an Inspirational Quote!</Button>
        <Text>{Quote.content}</Text>
      </Layout>
    </SafeAreaView>
  );
};