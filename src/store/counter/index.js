import counterMutations from './mutations';
import counterActions from './actions';
import counterGetters from './getters';

const counterModule = {
    namespaced: true, // means that you need to use the name (the key in a modules (numbers)) of a module to get access to data of the module
    state() {
        return {
            counter: 0,
        }
    },
    mutations: counterMutations,
    actions: counterActions,
    getters: counterGetters,
}

export default counterModule;