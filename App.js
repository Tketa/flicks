
import React from 'react';
import { StyleSheet, Text } from 'react-native';

import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

import { StackNavigator } from 'react-navigation';

const Routes = StackNavigator({
  MovieList: {
    screen: MovieList,
    navigationOptions: ({ navigation }) => ({
      title: 'Welcome to Flicks'
    })
  },
  MovieDetails: {
    screen: MovieDetails,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
      loading: false,
      page: 1
    }

    this.fetchWithPage = this.fetchWithPage.bind(this);
    this.loadMore = this.loadMore.bind(this);

  }

  componentWillMount() {
    this.fetchWithPage(1)
  }

  async fetchWithPage(page) {
    this.setState({
      loading: true,
    });
    const apiUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
    const response = await fetch(`${apiUrl}&page=${page}`);
    const data = await response.json();
    console.log(data);
    await this.setState({
      movies: data.results,
      loading: false,
    });
  }



  async loadMore() {
    const newPage = this.state.page + 1;
    await this.fetchWithPage(newPage);
    this.setState({
      page: newPage
    });
  }

  render() {
    return (
      <Routes
        screenProps={{
          movies: this.state.movies,
          loadMore: this.loadMore,
          loading: this.state.loading
        }} />


    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

