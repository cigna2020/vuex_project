import {createApp} from 'vue';
import {createStore} from 'vuex';

import App from './App.vue';

const app = createApp(App);

const store = createStore({
    state() {
        return {
            counter: 0
        };
    },
    mutations: {
        increaser(state) {
            state.counter += 2;
        },
        increment(state, payload) {
            state.counter += payload.value;
        }
    },
    actions: {
        increaser(context) {    // the name's up to you
            setTimeout(function () {
                context.commit('increaser') // mutations
            }, 2000)
        },
        increment(context, payload) {
            context.commit('increment', payload) // it's a good style, to use actions even in not an async code
        }
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
        }
    }
})

app.use(store);

app.mount('#app');
