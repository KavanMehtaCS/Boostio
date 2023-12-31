import { View, SafeAreaView, Image, StyleSheet, Linking, FlatList } from 'react-native';
import { Layout, Text, Card } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sentiment from 'sentiment';
import Article from './Article'

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'column',
//     flexWrap: 'wrap',
//   },
//   card: {
//     boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
//     backgroundColor: "#fafafa",
//     maxWidth: SafeAreaView.maxWidth,
//     height: 400
//   },
//   media: {
//     height: 200,
//     resizeMode: "contain",
//   },
// });

export const NewsScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=CzAzMkNNkxJThlSAYq78WbcA2ZdPYmN6`);
        console.log(res.data.results);
        const positiveArticles = [];
        var sentiment = new Sentiment();
        let counter = 0;
        for(let i = 0; i < res.data.results.length; i++) {
          if(sentiment.analyze(res.data.results[i].abstract).score > 3) {
            positiveArticles[counter] = res.data.results[i];
            counter++;
          }
        }
        setTopStories(positiveArticles);
        console.log(positiveArticles);
        // const date = new Date();
        // const res = await axios.get(`ttps://api.nytimes.com/svc/archive/v1/${date.getFullYear()}/${date.getMonth() + 1}.json?api-key=CzAzMkNNkxJThlSAYq78WbcA2ZdPYmN6`);
      } catch (error) {
        console.error(error);
        alert(error.message);
      }
      setLoading(false);
    }
    fetchArticles();

  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <Text category='h1'>NEWS</Text> */}
      {
        loading ? (
          <Text>Loading...</Text>
        ) : (
          <View>
          <FlatList
                  data={topStories}
                  renderItem = {({item}) => 
                    <Article
                      article={item}
                    />}
                  keyExtractor = {(item) => item.title}
                />
            {/* {topStories.map((topStory) => {
              return (
                
              );
            })} */}
          </View>)}
    </SafeAreaView>
  );
};