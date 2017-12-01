import Vue from 'vue';
import Router from 'vue-router';
import NewsList from '@/views/NewsList';
import NewsDetail from '@/views/NewsDetail';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'NewsList', component: NewsList },
    { path: '/news/:id', name: 'NewsDetail', component: NewsDetail }
  ]
});