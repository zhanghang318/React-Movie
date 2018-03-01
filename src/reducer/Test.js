import {GET_HOT_MOVIE,CURRENT_MOVIE_ID,SLICE_ARRAY,TEST_TYPE} from '../action/testAction'
 export function hotMovieList(state=[],action){
    switch (action.type){
        case GET_HOT_MOVIE:
            return action.itemArray
        default:
            return state
    }
}
export function testType(state=null,action){
     switch (action.type){
         case TEST_TYPE:
             return action.typeItem
         default:
             return state
     }
}
// export function sliceMovieList(state=[],action){
//      switch (action.type){
//          case SLICE_ARRAY:
//              return
//          default:
//              return state
//      }
// }
