//  app/router.js

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('user', { path: 'profile' });
    this.route('blog');
    this.route('story')
  };

export default Router;



//  Routes decide
//	1. which templates to render
//  2. what data to load, and
//  3. how to set up the overall application state.
//  The router-file (router.js) is responsible for matching /
//  up the website's URLs with the app's routes.