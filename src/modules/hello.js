export default {
  state: {
    count: 1,
  },
  getters:{
    sum(state){
      return `${state.count}sum`;
    }
  },
  mutations:{
    add(state, payload ){
      state.count += payload.count;
    }
  },
  actions:{
    addAction(context, payload){
      context.commit({
        type: 'add',
        count: payload.count
      })
    }
  }
}