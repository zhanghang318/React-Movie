import {axPost} from '../api/api'
export const GET_HOT_MOVIE = 'GET_HOT_MOVIE'
export const CURRENT_MOVIE_ID='CURRENT_MOVIE_ID'
export const SLICE_ARRAY = 'SLICE_ARRAY'
export const TEST_TYPE='TEST_TYPE'
export function getMovieHot(itemArray){
    return{
        type:GET_HOT_MOVIE,
        itemArray
    }
}
// 没用 着
export function sliceArray(start,end){
    return {
        type:SLICE_ARRAY,
        start,
        end
    }
}
export function testTypeAction(typeItem){
    return {
        type:TEST_TYPE,
        typeItem
    }
}
export function getMovieHotApi(type,start,total,city,end){
    return async (dispatch,getState) =>{
        const response = await axPost(`/v2/movie/${type}`,{city,start,count:total})
        const {status} = response
        status ===-404?console.log("请求数据接口出错!"):(dispatch(getMovieHot(response.data.subjects)))
    }
}
