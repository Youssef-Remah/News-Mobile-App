import MainApp from './components/MainApp';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import NewsContextProvider from './contexts/NewsContextProvider';

export default function App() {
  return (

    <NewsContextProvider>

      <NavigationContainer>

        <PaperProvider>
          
          <MainApp/>

        </PaperProvider>

      </NavigationContainer>    

    </NewsContextProvider>


    


  );
}
