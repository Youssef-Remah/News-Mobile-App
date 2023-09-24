import { View, ActivityIndicator, FlatList } from "react-native";
import { useContext } from "react";
import { newsContext } from "../contexts/NewsContextProvider";
import uuid from 'react-native-uuid';
import NewsCard from "../components/NewsCard";


function HomeScreen({navigation}) {

    let news = useContext(newsContext);

    if(news == null || news == undefined)
    {

        return(
            <View>
                <ActivityIndicator size="large" />

            </View>
        )
    }
    else
    {
        
        news = news['articles'];

        news = news.filter(
            (article)=>{
                return article.source.name !== "[Removed]"
            }
        );

        news.forEach(
            (article) => {

                article.source.id = uuid.v4();
            }
        );


    }

    const renderItem =  ({item}) => {

        return(
            <View style={{margin:20}}>
                <NewsCard props={{articleName: item.source.name, articleTitle: item.title,
                    imageUrl:item.urlToImage,publishedDate: item.publishedAt}} navigation={navigation}/>

            </View>
        );

    };
    
    //console.warn(news);

    return (
        
        <View style={{ padding: 40 , backgroundColor:'linen'}}>

            <FlatList
                data={news}
                keyExtractor={(item) => item.source.id}
                renderItem={renderItem}
            />

        </View>

    );
}

export default HomeScreen;