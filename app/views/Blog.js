import React from "react";
import {FlatList, Text, View} from "react-native";
import HTML from 'react-native-render-html';

export const Blog = (props) => {
    const [state, setState] = React.useState({blogLoaded: false, blogList: []});

    React.useEffect(() => {
        async function downloadPosts() {
            await fetch(`https://public-api.wordpress.com/rest/v1.1/sites/larshartviksen.wordpress.com/posts`)
                .then((response) => response.json())
                .then((responseJson) => {
                        setState({
                            blogLoaded: true,
                            blogList: Array.from(responseJson.posts)
                        })
                    }
                )
                .catch((error) => console.error(error));
        }

        downloadPosts();
    }, []);

    const chooseBlog = (blogID) => {
        props.navigation.navigate('BlogDetailRT', {blogId: blogID});
    };

    return (
        <View>
            {state.blogLoaded && (
                <View style={{paddingTop: 40}}>
                    <FlatList
                        data={state.blogList}
                        keyExtractor={(item, index) => item.ID.toString()}
                        renderItem={({item}) =>
                            <BlogItem
                                alt={item.slug}
                                id={item.ID}
                                title={item.title}
                                imageSrc={item.featured_image}
                                excerpt={item.excerpt}
                                choosePost={chooseBlog}
                            />}
                    />
                </View>
            )}
            {!state.blogLoaded && (
                <View style={{paddingTop: 30}}>
                    <Text> LOADING </Text>
                </View>
            )}
        </View>
    )
};

export const BlogItem = (props) => {
    const blogChoice = () => {
        props.choosePost(props.id)
    };

    let blogItems = `
        <a href=${props.id} style="text-decoration-line: none; color: #000000; text-align: center">
            <img src=${props.imageSrc}  alt=${props.alt}/>
            <h1>${props.title}</h1>
            ${props.excerpt}
        </a>`;

    return (
        <HTML
            onLinkPress={blogChoice}
            style={{height: 200, borderBottomWidth: 2, borderBottomColor: '#000000', borderStyle: 'solid'}}
            html={blogItems}/>
    )
};