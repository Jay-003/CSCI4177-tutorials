import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import RegistrationForm from './components/RegistrationForm.vue';
import Profile from './components/ProfilePage.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

const routes = [
  { path: '/', component: RegistrationForm },
  { path: '/profile', name: 'Profile', component: Profile, props: route => ( { firstName: route.query.firstName, lastName: route.query.lastName, email: route.query.email } ) }
];

const router = createRouter( {
  history: createWebHistory(),
  routes
} );

const app = createApp( App );

app.use( router );

app.mount( '#app' );
