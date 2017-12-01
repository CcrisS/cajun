const url = 'https://newsapi.org/v2/top-headlines';
const apiKey = '48b6394c89f243d59b5cf77ab633c40b';

export function fetchNews(sources = 'bbc-news') {

    return fetch(url + '?sources=' + sources + '&apiKey=' + apiKey)
        .then(response => response.json())
        .then(newsList => {
            return newsList;
        })
        .catch(e => {
            console.warn(e);
        });

}
