import { Text, View } from "react-native";
import { useContext } from "react";
import { newsContext } from "../contexts/NewsContextProvider";

function HomeScreen() {

    let news = useContext(newsContext);

    news = news['articles'];

    //console.warn(news);

    return (
        
        <View style={{ padding: 40 }}>
            <Text>Hello From Home Screen</Text>

        </View>

    );
}

export default HomeScreen;