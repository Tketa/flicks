import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    image: {
        height: 300,
        borderColor: 'blue',
        borderWidth: 1
    },
    overview: {
        margin: 15
    }
});

const MovieDetails = (props) => {
    const moviePosterApi = 'https://image.tmdb.org/t/p/w500';
    const navigationParams = props.navigation.state.params;
    const img = {
        uri: moviePosterApi + navigationParams.poster_path
    };
    return (
        <View>
            <Image
              style={styles.image}
              source={img}
            />
            <View style={styles.overview}>
                <HTMLView value={navigationParams.overview} />
            </View>
        </View>
    );
};

MovieDetails.propTypes = {
    navigation: PropTypes.shape({
        state: PropTypes.shape({
            params: PropTypes.shape({
                poster_path: PropTypes.string,
                overview: PropTypes.string,
            })
        }),
    })
};

export default MovieDetails;

