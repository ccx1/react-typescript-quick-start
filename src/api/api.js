/**
 * @file 接口请求
 */
import {GLOBAL_CONFIG} from '../conts/conf';
import common from '../utils/common';


/**
 * 生成jobCode
 *
 * @return {string} jobCode '0-时间戳-随机数'
 */
function generateJobCode() {
    return `t0_${new Date().valueOf()}`;
}

/**
 * 生产program的jobCode
 *
 * @param {string} programId programId
 * @return {string} jobCode '0-programId-随机数'
 */
function generateProgramJobCode(programId) {
    return `p${programId}_${new Date().valueOf()}`;
}

export const getProjects = () => (
    common.requestInPromise({
        url: GLOBAL_CONFIG.requestUrl.getProject
    })
);


export const getJobInfo = params => {
    return common.requestInPromise({
        url: GLOBAL_CONFIG.requestUrl.getJobInfo,
        type: 'POST',
        data: params
    });
};

