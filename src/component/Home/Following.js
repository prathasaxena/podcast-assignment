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
            { home.following.length < 1 ?
                <View style={styles.noDataList}>
                    <Text style={styles.warningStyle}>No Channels found</Text>
            </View>:        
            <View style={styles.flatListParent}>
                <FlatList
                    contentContainerStyle={{ paddingBottom: 100 }}
                    kekeyExtractor={(item) => item.channelName}
                    numColumns={2}
                    data={home.following}
                    renderItem={({item})=><SingleChannelCard item={item}/>}
                />
            </View>}
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
    },
    noDataList: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },
    warningStyle: {
        fontSize: 16,
        fontWeight: 'bold',
        color:colors.textColor 
    }
})