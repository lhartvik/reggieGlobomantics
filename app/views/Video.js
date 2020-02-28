import React from 'react';
import {View, FlatList, StyleSheet, Text, TextInput, TouchableHighlight, Alert} from "react-native";
import {TubeItem} from "../components/TubeItem";
import youtubekey from './youtubekey';

export const Video = ({navigation}) => {
    const [listLoaded, setListLoaded] = React.useState(false);
    const [infotext, setInfoText] = React.useState("LOADING...");
    const [errortext, setErrorText] = React.useState('');
    const [videoList, setVideoList] = React.useState([]);

    // About the useEffect - async - pattern
    // https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret
    // As noted by Dan Abramov:
    // Longer term we'll discourage this pattern because it encourages race conditions.
    // Such as — anything could happen between your call starts and ends, and you could have gotten new props.
    // Instead, we'll recommend Suspense for data fetching which will look more like
    //
    // const response = MyAPIResource.read();
    //
    // WARNING TO SELF:
    // Be sure not remove the empty array as second parameter on useEffect or the daily youtube quota will be spent in seconds!
    // The url sent will make a search for a certain amount of videos.
    //
    // https://developers.google.com/youtube/v3/determine_quota_cost
    //
    // One search "costs" 100 units and list content adds another 100, so you'll only be able to visit this app page about 50 times in a day.
    // It is a good idea to set a lower quota than the maximum 10000 per day, so you'll have some spare if you make a coding error.
    // I set mine to 1000 and I'm increasing as needed
    React.useEffect(() => {
        async function downloadVideos() {
            await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=pluralsight&type=video&key=${youtubekey}`)
                .then((response) => response.json())
                .then((responseJson) => {
                        if (responseJson.error) {
                            setErrorText(responseJson.error.message);
                        } else {
                            setListLoaded(true);
                            setVideoList(Array.from(responseJson.items));
                        }
                    }
                )
                .catch((error) => console.error(error));
        }

        downloadVideos();
    }, []);

    React.useEffect(() => {
        if (errortext !== '') setInfoText(`Error: ${errortext}`);
    }, [errortext]);

    return (
        <View>
            {listLoaded && videoList.length > 0 &&
            <View style={{paddingTop: 30}}>
                <FlatList
                    data={videoList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) =>
                        <TubeItem
                            navigation={navigation}
                            id={item.id.videoId}
                            title={item.snippet.title}
                            imageSrc={item.snippet.thumbnails.high.url}/>
                    }
                />
            </View>}
            {!listLoaded &&
            <View style={{paddingTop: 30}}>
                <Text> {infotext} </Text>
            </View>}
        </View>
    )
}