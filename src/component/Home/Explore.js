import React, {useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../../constants';
import SingleChannelCard from './SingleChannelCard';
import { useSelector } from 'react-redux'

const Explore = (props) => {
    const home = useSelector(state => state.home)

    return (
        <View style={{flex:1}}>
              {/* top picks list */ }
            <Text style={styles.topText}>Top Picks for you</Text>
            <View style={styles.horizotalFlatListParent}>
                 {/* data from data.json file */ }
                <FlatList
                    data={home.podcastList}
                    keyExtractor={(item) => item.channelName}
                    horizontal={true}
                    renderItem={({ item }) => <SingleChannelCard item={item}/>}
                />
            </View>
              {/* trending list */ }
            <Text style={styles.bottomText}>Trending</Text>
            <View style={styles.flatListParent}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 100 }}
                    kekeyExtractor={(item) => item.channelName}
                    numColumns={2}
                    data={home.podcastList}
                    renderItem={({item})=><SingleChannelCard item={item}/>}
                />
            </View>
        </View>
    )

}


export default Explore;

const styles = StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },
    topText: {
        marginTop: "6%",
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