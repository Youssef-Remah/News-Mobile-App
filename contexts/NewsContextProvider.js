import { createContext, useEffect, useState } from 'react';
import { Text, View } from "react-native";

export const newsContext = createContext();

//TODO: Hide the API Key!
const URL = 'https://newsapi.org/v2/everything?q=tesla&from=2023-08-24&sortBy=publishedAt&apiKey=970bca636b994d51ab09cca3cdade332';

function NewsContextProvider({ children }) {

    const [news, setNews] = useState(null);

    const[isRequestFailed, setIsRequestFailed] = useState(false);

    async function fetchData() {

        try {
            const response = await fetch(URL);

            if (!response.ok) {
                //throw new Error("Network request failed"); //TODO: Handle the response errors safely
                setIsRequestFailed(true);
            }

            const data = await response.json();

            return data;

        }

        catch (error) {
            //throw error; //TODO: Handle the response errors safely

            //throw new Error("Unable to fetch data. Please try again later.");

            setIsRequestFailed(true);

        }
    };

    useEffect(() => {

        async function fetchNewsData() {

            try {
                const newsData = await fetchData();
                setNews(newsData);
            }
            
            catch (error) {
                // Handle the error here, e.g., set an error state
                // console.error("Error loading data:", error);

                // throw new Error("Unable to fetch data. Please try again later.");

                setIsRequestFailed(true);
            }

        }

        fetchNewsData();
    }, []);


    return (

        <newsContext.Provider value={news}>

            {
                isRequestFailed? (
                    <View>
                        <Text>Unable to fetch data. Please try again later.</Text>
                    </View>
                ):(
                    children
                )
            }

        </newsContext.Provider>

    );
}

export default NewsContextProvider;