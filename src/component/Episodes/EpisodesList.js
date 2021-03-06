import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions,TouchableOpacity } from 'react-native';
import { colors } from '../../constants';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window')

const SingleEpisodesCard = React.memo(({ item }) => { 
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.episodesCard} onPress={() => navigation.navigate('PlayEpisodes', {value:item})}>
            <View style={{ flexDirection: 'row' }}>
                 {/* episode number */}
                <Text style={styles.episodes}>{item.episode}</Text>
                <View style={styles.divider} />
                <View>
                     {/* episode name */}
                    <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
                     {/* episode description */}
                    <Text style={styles.decp} numberOfLines={2}>{item.description}</Text>
                </View>
            </View>    
         </TouchableOpacity>
    )
})

const EpisodesList = (props) => { 
    return (
        <FlatList
            data={props.data}
            keyExtractor={(item) => item.name}
            renderItem={({ item}) => <SingleEpisodesCard item={item}/>}
        />
    )
}

export default EpisodesList;

const styles = StyleSheet.create({
    episodesCard:{
        width: 320 / 375 * width,
        height: 65 / 675 * height,
        backgroundColor: colors.cardBgColor,
        marginBottom: 13 / 675 * height,
        borderRadius: 10,
        paddingHorizontal: 12 / 375 * width,
        justifyContent: "center",
    },
    episodes: {
        fontSize: 25,
        
        fontWeight: "bold",
        alignSelf:'center'
    },
    divider: {
        width: 3 / 375 * width,
        height: 40 / 675 * height,
        backgroundColor: "black",
        marginHorizontal: 7 / 375 * width,
        alignSelf:"center"
    },
    name: {
        fontWeight: "bold",
        width: 250 / 375 * width,
        fontSize:13
    },
    decp: {
        width: 250 / 375 * width,
        fontSize:13    
    }
})