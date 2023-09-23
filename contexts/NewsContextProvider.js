import { createContext, useEffect, useState } from 'react';
import { Text, View } from "react-native";

export const newsContext = createContext();

//TODO: Hide the API Key!
const URL = 'https://newsapi.org/v2/everything?q=tesla&from=2023-08-23&sortBy=publishedAt&apiKey=970bca636b994d51ab09cca3cdade332';

function NewsContextProvider({ children }) {

    const [news, setNews] = useState(null);

    async function fetchData() {

        try {
            const response = await fetch(URL);

            if (!response.ok) {
                //throw new Error("Network response was not ok"); //TODO: Handle the response errors safely

                <View>
                    <Text>Network response was not ok</Text>
                </View>
            }

            const data = await response.json();

            return data;

        }

        catch (error) {
            //throw error; //TODO: Handle the response errors safely

            <View>
                <Text>Error Encountered while loading the data...</Text>
            </View>

        }
    };

    useEffect(() => {

        async function fetchNewsData() {

            try {
                const newsData = await fetchData();

                setNews(newsData);
            }
            catch (error) {
                //throw error; //TODO: Handle the response errors safely

                <View>
                    <Text>Error Encountered while loading the data...</Text>
                </View>
            }

        }

        fetchNewsData();
    }, []);


    return (

        <newsContext.Provider value={news}>

            {children}

        </newsContext.Provider>

    );
}

export default NewsContextProvider;