// import * as actionTypes from '../action/action';
import * as actionTypes from '../conts/actionType';

export interface IPageInfo {
    ad_url: string,
    error_url: string,
    sign_key: string,
    collapsed: boolean
}


export const pageInfo = (state: IPageInfo = {
    ad_url: "",
    error_url: "",
    sign_key: "",
    collapsed: false
}, action) => {
    switch (action.type) {
        case actionTypes.INIT:
            return {
                ...state,
                ad_url: action.initConfig.ad_url,
                error_url: action.initConfig.error_url,
                sign_key: action.initConfig.sign_key
            };
        case actionTypes.CHANGE_COLLAPSED:
            return {
                ...state,
                collapsed: action.collapsed
            };
        default:
            return state;
    }
};
