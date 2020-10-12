import React, {useEffect, useState } from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';
import { colors } from '../../constants';
import SingleChannelCard from './SingleChannelCard';
import { useSelector } from 'react-redux'
import Explore from './Explore';
import Following from './Following'
const { width, height } = Dimensions.get('window');

const Home = (props) => {
    const home = useSelector(state => state.home)
    const [topTabs, setTopTabs] = useState(0)
    return (
        <View style={styles.parent}>
            <View style={{flexDirection:'row',marginTop:"10%"}}>
                <Text onPress={() => setTopTabs(0)} style={[styles.topText, topTabs == 0 && {color: colors.lightPink}]}>Explore</Text>
                <Text onPress={()=>setTopTabs(1)} style={[styles.topText, topTabs == 1 && {color: colors.lightPink}]}>Following</Text>
            </View>
            {/* 0 := Eplore/ 1 := following list*/}
            {
                topTabs == 0 ?
                    
                    <Explore /> : 
                    <Following/>
            }
             
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
        marginTop: "6%",
        marginLeft: "5%",
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.textColor,
        width: 100 / 375 * width,
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