import * as types from '../conts/actionType';

/**
 * 初始化页面
 *
 * @return {Object} redux action of INIT_PAGE
 */
export const renderPageData = (initConfig) => {
    return {
        type: types.INIT,
        initConfig
    };
};

export const changeCollapsed = (collapsed) => {
    return {
        type: types.CHANGE_COLLAPSED,
        collapsed
    };
};
