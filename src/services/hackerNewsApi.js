import axios from 'axios';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const topStoriesURL = `${baseURL}topstories.json`;
export const storyURL = `${baseURL}item/`;

// Devuelve el json del id que le pasemos
export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyURL + storyId}.json`)
    .then(({ data }) => (data));
    
    return result;
};


// Devuelve los id de las top stories
export const getStoryIds = async () => {
  let result = await axios.get(topStoriesURL).then(({ data }) => data);
  var top = [];
  for (let i = 0; i < 10; i++) {
    top.push(result[i]);
  }

  console.log(top);
  return top;
};

// Devuelve los id de los comentarios
// export const getCommentIds = async () => {
//   let comments = await axios.get(storyURL).then(({data}) => data);
//   var com = [];
//   for (let i = 0; i < 10; i++) {
//     comment.push(comments.kids[i]);
//   }

//   console.log(comment);
//   return comment;
// };
