import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';
import PropTypes from 'prop-types';

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
                <View style={styles.overview}>
                    <HTMLView
                        value={props.overview} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        borderColor: 'blue',
        borderWidth: 1
    },
    overview: {
        margin: 15
    }
})

MovieDetails.propTypes = {
    navigation: PropTypes.shape({
        results: PropTypes.object,
    })
}


export default MovieDetails

