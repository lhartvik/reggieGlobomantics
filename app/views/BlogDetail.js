import React from "react";
import {Image, ScrollView, View} from "react-native";
import HTML from 'react-native-render-html';

export const BlogDetail = (props) => {
    const [state, setState] = React.useState({
        postTitle: undefined,
        postImage: undefined,
        postContent: undefined,
        postID: undefined,
        postLoaded: false
    });

    React.useEffect(() => {
        async function downloadPost() {
            const blogId = props.route.params?.blogId;
            await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/larshartviksen.wordpress.com/posts/${blogId}`)
                .then((response) => response.json())
                .then((responseJson) => {
                        setState({
                            postLoaded: true,
                            postTitle: responseJson.title,
                            postImage: responseJson.featured_image,
                            postContent: responseJson.content,
                            postID: responseJson.ID
                        })
                    }
                )
                .catch((error) => console.error(error));
        }

        downloadPost();
    }, []);

    const goBack = () => {
        props.navigation.navigate('BlogRT');
    };

    const blogTagStyles = {
        img: {display: 'none'}
    };

    const blogClassStyles = {
        blTitle: {marginLeft: 'auto', marginRight: 'auto'},
        blContent: {marginLeft: 10, marginRight: 10},
        blBack: {marginLeft: 'auto', marginRight: 'auto', paddingBottom: 20}
    }

    const postDetails = `
        <div class="blTitle">
            <h1>${state.postTitle}</h1>
        </div>
        <div class="blContent">
            ${state.postContent}
        </div>
         <a href=${state.postID} class="blBack">
            <h2>GO BACK</h2>
        </a>    
    `;


    return (
        <View style={{paddingTop: 30}}>
            {state.postLoaded && (
                <ScrollView>
                    <Image
                        style={{width: '100%', height: 200}}
                        source={{uri: state.postImage}}
                    />
                    <HTML
                        onLinkPress={goBack}
                        html={postDetails}/>
                </ScrollView>
            )}
        </View>
    )
};