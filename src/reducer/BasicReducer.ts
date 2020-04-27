// import * as actionTypes from '../action/action';
import * as actionTypes from '../conts/actionType';

export interface IPageInfo{
    ad_url:string,
    error_url:string,
    sign_key:string
}


export const pageInfo = (state:IPageInfo = {
    ad_url: "",
    error_url: "",
    sign_key: ""
}, action) => {
    switch (action.type) {
        case actionTypes.INIT:
            return {
                ...state,
                ad_url: action.initConfig.ad_url,
                error_url: action.initConfig.error_url,
                sign_key: action.initConfig.sign_key
            };
        default:
            return state;
    }
};
