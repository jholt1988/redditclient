import { TestScheduler } from 'jest'
import postcss from 'postcss';
import reducer,{initialState,setPost,
    startLoadPosts,
    completeLoadPosts,
    errorLoadPosts,
    startLoadComments,
    loadingComments,
    completeLoadComments,
    failedLoadComments,
    setSearchTerm,
    setSelectedSubReddit,
    selectPosts} from '../../app/redditSlice';
import { selectSubreddits } from '../../app/subredditSlice';
    


    describe('redditSlice', () => {
      describe('reducers, actions, selectors', () => {
        it('should return an initial state on first run', () => {
         
          const nextState = initialState;

          const result = reducer(undefined, {});
          
          expect(result).toEqual(nextState)
       });
       it ('should set state when a new selected subreddit is chosen', () => {
         const subreddits = {
           televison:{
           subreddit: "r/television",
           posts: {
              tvpost1:{
                id:"tv123",
                link:"www.reddit.com/tv1",
                data:"data",
                subreddit:"r/television"
              },
              tvpost2:{
                id:"tv1234",
                link:"www.reddit.com/tv1",
                data:"data",
                subreddit:"r/television",
              },
              tvpost3:{
                id:"tv12345",
                link:"www.reddit.com/tv1",
                data:"data",
                subreddit:"r/television"
              }
            }
           },
           food: {
             subreddit:'r/food',
             posts:{
              foodpost1:{
                id:"food12345",
                link:"www.reddit.com/food",
                data:"data",
                subreddit:"r/food"
              },
              foodpost2:{
                id:"food123456",
                link:"www.reddit.com/food",
                data:"data",
                subreddit:"r/food"
              },
              foodpost3:{
                id:"food123456",
                link:"www.reddit.com/food",
                data:"data",
                subreddit:"r/food"
              }

             }
           }
         };
         const nextState = reducer(initialState, setSelectedSubReddit("r/food"),);

         const rootstate = {reddit:nextState};

         expect(selectPosts(rootstate)).toEqual(subreddits.subreddit);
         expect(setSelectedSubReddit(rootstate)).toEqual('r/food')
         expect(setPost(rootstate)).toEqual(subreddits.subreddit)
         
       })

      })
    })
    