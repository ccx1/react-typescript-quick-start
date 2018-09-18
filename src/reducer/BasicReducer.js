// import * as actionTypes from '../action/action';
import * as actionTypes from '../conts/actionType';

export const pageInfo = (state = {
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
