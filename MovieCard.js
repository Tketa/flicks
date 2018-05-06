import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400,
        borderColor: 'red',
        borderWidth: 1
    },
    image: {
        width: 300,
        height: 300,
        borderColor: 'red',
        borderWidth: 1
    }
})
const moviePosterApi = 'https://image.tmdb.org/t/p/w342';

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const props = this.props.movie;
        const img = {
            uri: moviePosterApi + props.poster_path
        };
        return (
            <TouchableHighlight onPress={this.props.loadDetails}>
                <View style={styles.container}>
                    <Text> {props.title} </Text>
                    <Image
                        style={styles.image}
                        source={img}
                    />
                    <Text> {props.ovewview} </Text>

                </View>
            </TouchableHighlight>
        )
    }
}
export default MovieCard;
