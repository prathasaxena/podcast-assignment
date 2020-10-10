import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../constants';
import SingleChannelCard from './SingleChannelCard';
import data from '../../data/data'

const Home = (props) => {
    return (
        <View style={styles.parent}>
              {/* top picks list */ }
            <Text style={styles.topText}>Top Picks for you</Text>
            <View style={styles.horizotalFlatListParent}>
                 {/* data from data.json file */ }
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    keyExtractor={({item},index)=> index}
                    horizontal={true}
                    renderItem={({ item }) => <SingleChannelCard item={item}/>}
                />
            </View>
              {/* trending list */ }
            <Text style={styles.bottomText}>Trending</Text>
            <View style={styles.flatListParent}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 100 }}
                    kekeyExtractor={(item) => item.id}
                    numColumns={2}
                    data={data}
                    renderItem={({item})=><SingleChannelCard item={item}/>}
                />
            </View>
        </View>
    )

}
 
export default Home;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    topText: {
        marginTop: "15%",
        marginLeft: "5%",
        fontSize: 20,
        fontWeight: 'bold',
        color:colors.textColor 
    },
    horizotalFlatListParent: {
        marginTop: "5%",
        marginLeft: "5%",  
    },
    flatListParent: {
        flex:1,
        marginTop: "5%",
        marginLeft: "5%",  
    },
    bottomText: {
        marginTop: "5%",
        marginLeft: "5%",
        fontSize: 20,
        fontWeight: 'bold',
        color:colors.textColor 
    }
})