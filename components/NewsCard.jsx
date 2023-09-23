import { Card, Text } from 'react-native-paper';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


function NewsCard({ props, navigation }) {

    const { articleName, articleTitle, imageUrl, publishedDate } = props;

    const noImageUrl = "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png";

    return (

        <Pressable onPress={()=>navigation.navigate('Details')}>

            <Card style={{ padding: 20, backgroundColor: 'whitesmoke' }}>

                <Card.Cover source={{ uri: (imageUrl != null) ? imageUrl : noImageUrl }} />

                <Card.Content style={{ padding: 10 }}>

                    <Text variant="titleLarge">{articleName}</Text>

                    <Text variant="bodyMedium" style={{ marginTop: 10 }}>{articleTitle}</Text>

                    <Text variant="bodySmall" style={{ marginTop: 10 }}>{publishedDate}</Text>

                </Card.Content>

            </Card>

        </Pressable>


    );
}

export default NewsCard;