import React from 'react';
import { View, FlatList, ListFooterComponent, ActivityIndicator } from 'react-native';
import MovieCard from './MovieCard';
import { SearchBar } from 'react-native-elements'
import PropTypes from 'prop-types';


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.resetSearch = this.resetSearch.bind(this);
        this.filterMovie = this.filterMovie.bind(this);
        console.log('this.props', this.props)
        this.state = {
            movies: this.props.screenProps.movies
        }

    }
    resetSearch() {

    }
    filterMovie(searchString) {
        if (!searchString) {
            this.setState({
                movies: this.props.screenProps.movies
            })
        } else {
            const movies = this.props.screenProps.movies.filter(item => {
                if (item.title.includes(searchString)) {
                    return item;
                }
            }
            );

            this.setState({
                movies: movies
            })
            console.log('movies', movies)
        }

    }

    componentWillReceiveProps(receivedProps) {
        console.log("receive", receivedProps);
        this.setState({
            movies: receivedProps.screenProps.movies
        });

    }


    render() {
        const props = this.props.screenProps;
        const movies = this.state.movies;

        console.log('props', movies)
        return (
            <View>
                <SearchBar
                    showLoading
                    onChangeText={this.filterMovie}
                    onClear={this.resetSearch}
                    platform="ios"
                    cancelButtonTitle="Cancel"
                    placeholder='search...' />
                <FlatList
                    refreshing={props.loading}
                    onRefresh={props.loadMore}
                    data={movies}
                    keyExtractor={(movie) => movie.id}
                    onEndReachedThreshold={0.05}
                    onEndReached={props.loadMore}
                    numColumns={1}
                    horizontal={false}
                    renderItem={(movieItem) => {
                        return (
                            <MovieCard movie={movieItem.item} loadDetails={() => {
                                this.props.navigation.navigate('MovieDetails', movieItem.item);
                            }
                            } />
                        )
                    }}
                    ListFooterComponent={() =>
                        <View>
                            <ActivityIndicator size="large" />
                        </View>
                    }

                />
            </View>
        );
    }
}

MovieList.propTypes = {
    screenProps: PropTypes.shape({
        results: PropTypes.object,
    }),
    navigation: PropTypes.shape({
        results: PropTypes.object,
    })
}

export default MovieList;
