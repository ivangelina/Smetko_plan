import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/login';
import Navigation from '../components/navigation/Navigation';
import Trending from '../components/trending/Trending';
import Movies from '../components/movies/Movies';
import Series from '../components/series/Series';
import Favorite from '../components/favorite/Favorite';
import MovieDetails from '../components/moviedetails/MovieDetails';
import DiscoverMovies from '../components/discover/DiscoverMovies';
import Footer from '../components/footer/Footer';
import Peoples from "../components/peoples/Peoples"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      components: {
        default: Login,
      },
    },
    {
      path: '/discover',
      name: 'DiscoverMovies',
      components: {
        navigation: Navigation,
        default: DiscoverMovies,
        footer: Footer,
      },
    },
    {
      path: '/trending',
      name: 'Trending',
      components: {
        navigation: Navigation,
        default: Trending,
        footer: Footer,
      },
    },
    {
      path: '/movies',
      name: 'Movies',
      components: {
        navigation: Navigation,
        default: Movies,
        footer: Footer,
      },
    },
    {
      path: '/series',
      name: 'Series',
      components: {
        navigation: Navigation,
        default: Series,
        footer: Footer,
      },
    },
    {
      path: '/favorite',
      name: 'Favorite',
      components: {
        navigation: Navigation,
        default: Favorite,
        footer: Footer,
      },
    },
    {
      path: '/movie/:id',
      name: 'Movie',
      components: {
        navigation: Navigation,
        default: MovieDetails,
        footer: Footer,
      }
    },
    
    {
      path: '/peoples',
      name: 'Peoples',
      components: {
        navigation: Navigation,
        default: Peoples,
        footer: Footer,
      },

    },
  ],
});
