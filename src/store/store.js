import {createStore} from 'vuex';


const counterModule = {
    namespaced: true, // means that you need to use the name (the key in a modules (numbers)) of a module to get access to data of the module
    state() {
        return {
            counter: 0,
        }
    },
    mutations: {
        increaser(state) {
            state.counter += 2;
        },
        increment(state, payload) {
            state.counter += payload.value;
        },
    },
    actions: {
        increaser(context) {    // the name's up to you
            setTimeout(function () {
                context.commit('increaser') // mutations
            }, 2000)
        },
        increment(context, payload) {
            context.commit('increment', payload) // it's a good style, to use actions even in not an async code
        },
    },
    getters: {
        finalCounter(state) {
            return state.counter * 3;
        },
        normalizedCounter(state, getters) {
            const finalCounter = getters.finalCounter;
            if (finalCounter < 0) {
                return 0;
            }
            if (finalCounter > 100) {
                return 100;
            }
            return finalCounter;
        },
    }
}

const store = createStore({
    modules: {
        numbers: counterModule,
    },
    state() {
        return {
            isLoggedIn: false,
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isAuth;
        }
    },
    actions: {
        logIn(context) {
            context.commit('setAuth', {isAuth: true});
        },
        logOut(context) {
            context.commit('setAuth', {isAuth: false});
        }
    },
    getters: {
        userIsAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
})

export default store;