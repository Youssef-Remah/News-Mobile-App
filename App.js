import { Text, View } from 'react-native';
import MainApp from './components/MainApp';
import { PaperProvider } from 'react-native-paper';

export default function App() {
  return (

    <PaperProvider>
      
      <MainApp/>

    </PaperProvider>
    


  );
}
