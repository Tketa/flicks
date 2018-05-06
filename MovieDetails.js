import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';

class MovieDetails extends React.Component {
    render() {
        console.log('this.props', this.props);
        const moviePosterApi = 'https://image.tmdb.org/t/p/w45';
        const props = this.props.navigation.state.params;
        const img = {
            uri: moviePosterApi + props.poster_path
        };

        return (
            <View>
                <Image
                    style={styles.image}
                    source={img}
                />
                <View>
                    <HTMLView
                        value={props.overview} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400
    },
    image: {
        width: 300,
        height: 400,
        borderColor: 'red',
        borderWidth: 1
    }
})

export default MovieDetails

