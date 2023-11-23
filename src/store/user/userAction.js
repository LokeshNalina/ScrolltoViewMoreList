import { userAction } from '../constants/actionType';
import {store} from '../index';
import { cloneDeep } from 'lodash';



export const getState = ()=>{
    return store.getState()?.user;
}

export const setUserState = (obj) => async dispatch => {
    dispatch({ type: userAction?.FETCH_USERS, payload: obj });
};

export const fetchUserLists = (page)=> async dispatch => {
    page = page?page:1
    dispatch({
        type: userAction?.FETCH_USERS,
        payload: {isLodingData:true },
    })
    let nodes = page?cloneDeep(getState()?.userList):[];
    try{
        const response = await fetch('http://localhost:8080/cors/'+page, { mode: 'cors' });
        const data = await response.json();
        nodes = [...nodes,...data.nodes];
        dispatch({
            type: userAction?.FETCH_USERS,
            payload: { userList: nodes,isLodingData:false },
        });
    }
    catch(err){
        console.log("error",err)
        dispatch({
            type: userAction?.FETCH_USERS,
            payload: { userList: [],isLodingData:false },
        });
    }

}