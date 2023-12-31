import React from "react";
import {View, StyleSheet, Text, Pressable, Image, Linking} from "react-native";

const dayjs = require('dayjs')

const Article = ({ article }) => {
    const dt = dayjs(article.published_date);
    return(
        <View>
        {article && (
            <Pressable style={styles.container} onPress={() => Linking.openURL(article.url)}>
            <Image style={styles.image}  
                source={{uri: article.multimedia?.[0]?.url ?
                  `${article.multimedia[0].url}` : 
                  'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
                 }} alt="news-img" />
            <View style={{padding: 20}}>
        {/*    title */}
            <Text style={styles.title}>{article.title}</Text>
        {/*    description */}
            <Text style={styles.description} numberOfLines={3}>
                {article.abstract}
            </Text>
            <View style={styles.data}>
                <Text style={styles.author}>{article.byline}</Text>
                <Text style={styles.date}>{dt.format("DD/MM/YYYY")}</Text>
            </View>
            </View>
        </Pressable>
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginTop: 20
    },
    image:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    }
})


// const Article = ({ article }) => {
//   return  (
//     <View>
//       {article && (
//         <Card style={styles.card}>
//             <Image style={styles.media}  
//             source={{uri: article.multimedia?.[0]?.url ?
//                 `${article.multimedia[0].url}` : 
//                 'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
//             }} alt="news-img" />
//             <Text category="h6" onPress={() => Linking.openURL(article.url)}>>
//                 {article.title}
//             </Text>
//             <Text category="s2">
//               {article.byline}
//             </Text>
//             <Text category="p2">
//               {article.abstract}
//             </Text>
//         </Card>
//       )}
//     </View>
//   )
// }

export default Article;