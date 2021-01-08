export default {
    increaser(context) {    // the name's up to you
        setTimeout(function () {
            context.commit('increaser') // mutations
        }, 2000)
    },
    increment(context, payload) {
        context.commit('increment', payload) // it's a good style, to use actions even in not an async code
    },
};