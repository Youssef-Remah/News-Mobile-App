import { PaperProvider } from 'react-native-paper';
import NewsContextProvider from './contexts/NewsContextProvider';
import HomeScreen from "./screens/HomeScreen";
import DisplayArticleScreen from "./screens/DisplayArticleScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NewsContextProvider>

      <PaperProvider>

        <NavigationContainer>

          <Stack.Navigator initialRouteName="Home">

            <Stack.Screen name="Home" component={HomeScreen} />

            <Stack.Screen name="Details" component={DisplayArticleScreen} options={{title:'Article Details'}}/>

          </Stack.Navigator>

        </NavigationContainer>

      </PaperProvider>

    </NewsContextProvider>





  );
}
