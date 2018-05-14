import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        height: 150,
        width: '100%',
        paddingTop: 10
    },
    image: {
        width: '25%',
        height: 80,
    },
    title: {
        width: '75%',
        marginLeft: 10,
        color: 'black',
        fontSize: 20

    },
    overview: {
        width: '75%',
        marginLeft: 10,

    }
});

const moviePosterApi = 'https://image.tmdb.org/t/p/w342';

const MovieCard = (props) => {
    const img = {
        uri: moviePosterApi + props.movie.poster_path
    };
    return (
        <TouchableHighlight onPress={props.loadDetails}>
            <View style={styles.container}>
                <Image
                  style={styles.image}
                  source={img}
                />
                <View>
                    <Text style={styles.title}> {props.movie.title} </Text>
                    <Text style={styles.overview}>  {props.movie.overview} </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        results: PropTypes.array,
        poster_path: PropTypes.string,
        title: PropTypes.string,
        overview: PropTypes.string,
    }),
    loadDetails: PropTypes.func,
};

export default MovieCard;
