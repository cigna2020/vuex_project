export default {
    increaser(state) {
        state.counter += 2;
    },
    increment(state, payload) {
        state.counter += payload.value;
    },
};