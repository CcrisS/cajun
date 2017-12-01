import { fetchNews } from '../api/newsService';

export const actions = {

  fetchNews({ commit }){
    fetchNews().then(newsList => {
      commit('setNews', { newsList: newsList.articles })
    });
  }
  
};