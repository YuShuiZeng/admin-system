/*
 * @Author: ysz
 * @describe: 用户store
 * @Date: 2019-06-04 10:27:02
 * @Last Modified by: ysz
 * @Last Modified time: 2019-06-05 16:59:50
 */
// import sessionSave from 'utils/session-storage';

const USER_INFO = 'USER_INFO';

const initState = {
    // userInfo: sessionSave.getItem(USER_INFO, true),
    userInfo: {},
};

const actions = {
    userInfo({ commit }, data) {
        commit(USER_INFO, data);
    },
};

const mutations = {
    [USER_INFO](state, data) {
        state.userInfo = data;
        // sessionSave.setItem(USER_INFO, data);
    },
};

export default {
    namespaced: true,
    state: Object.assign({}, initState),
    actions,
    mutations,
};
