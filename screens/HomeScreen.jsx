import { Text, View, ActivityIndicator, FlatList } from "react-native";
import { useContext } from "react";
import { newsContext } from "../contexts/NewsContextProvider";
import uuid from 'react-native-uuid';

function HomeScreen() {

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

        news.forEach(
            (article) => {

                article.source.id = uuid.v4();
            }
        );
    }

    const renderItem =  ({item}) => {

        return(
            <View>
                <Text>{item.source.name}</Text>
            </View>
        );

    };
    
    //console.warn(news);

    return (
        
        <View style={{ padding: 40 }}>

            <FlatList
                data={news}
                keyExtractor={(item) => item.source.id}
                renderItem={renderItem}
            />

        </View>

    );
}

export default HomeScreen;