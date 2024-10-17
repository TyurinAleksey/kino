import React, { Component } from "react";
import { Movies } from "../component/Movies";
import { Search } from "../component/Search";
import { Preloader } from "../component/Preloader";

const API_KEY = process.env.RAECT_APP_API_KEY

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?i=tt4853102&apikey=${API_KEY}&s=spider man`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false}));
  }

  searchMovies = (str, type = 'all') => {
    fetch(`https://www.omdbapi.com/?i=tt4853102&apikey=${API_KEY}&s=${str}${
    type !== 'all' ? `&type=${type}` : ""}`)
      .then((res) => res.json())
      .then((data) => this.setState({ movies: data.Search, loading: false}));
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="content">
        <Search searchMovies={this.searchMovies} />
        {loading.length ? <Preloader /> : <Movies movies={movies} /> }
      </main>
    );
  }
}

export { Main };
