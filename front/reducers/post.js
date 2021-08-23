export const initialState = {
  // mainpost에는 포스트id, user, content, image, coment
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '유진',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f989.svg'
    }, {
      src: 'https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f438.svg'
    }, {
      src: 'https://notion-emojis.s3-us-west-2.amazonaws.com/v0/svg-twitter/1f469-1f3fb-200d-1f4bb.svg'
    }],
    Comments: [{
      User: {
        nickname: 'nero',
      },
      content: '우와 개정판이 나왔군요~',
    }, {
      User: {
        nickname: 'jaeston',
      },
      content: '히히'
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id:2,
  content: '더미데이터입니다',
  User: {
    id: 1, 
    nickname: 'yujin'
  },
  Images: [],
  Comments: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;