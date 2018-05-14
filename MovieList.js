import React from 'react';
import { SearchBar } from 'react-native-elements';
import { ActivityIndicator, FlatList, View } from 'react-native';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.resetSearch = this.resetSearch.bind(this);
        this.filterMovie = this.filterMovie.bind(this);

        this.state = {
            movies: this.props.screenProps.movies
        };
    }

    resetSearch() {
        this.setState({
            movies: this.props.screenProps.movies
        });
    }

    filterMovie(searchString) {
        if (!searchString) {
            this.setState({
                movies: this.props.screenProps.movies
            });
        } else {
            const filteredMovies = this.props.screenProps.movies.filter(item => item.title.includes(searchString));

            this.setState({
                movies: filteredMovies
            });
        }
    }


    render() {
        const props = this.props.screenProps;
        const movies = this.state.movies.length > 0 ? this.state.movies : props.movies;

        return (
          <View>
            <SearchBar
              showLoading
              onChangeText={this.filterMovie}
              onClear={this.resetSearch}
              platform="ios"
              cancelButtonTitle="Cancel"
              placeholder="search..."
            />
            <FlatList
              refreshing={props.loading}
              onRefresh={props.loadMore}
              data={movies}
              keyExtractor={movie => movie.id}
              onEndReachedThreshold={0.05}
              onEndReached={props.loadMore}
              numColumns={1}
              horizontal={false}
              renderItem={movieItem => (
                <MovieCard
                  movie={movieItem.item}
                  loadDetails={() => this.props.navigation.navigate('MovieDetails', movieItem.item)}
                />)
              }
              ListFooterComponent={() => (
                <View>
                  <ActivityIndicator size="large" />
                </View>)
              }
            />
          </View>
        );
    }
}

MovieList.propTypes = {
    screenProps: PropTypes.shape({
        results: PropTypes.object,
        movies: PropTypes.array,
    }),
    navigation: PropTypes.shape({
        results: PropTypes.object,
        navigate: PropTypes.func,
    })
};

export default MovieList;
