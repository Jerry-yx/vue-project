<template>
  <div>
    <div @click="add">count-数据: {{count}}</div>
    <div @click="addAction">addAction-count-数据: {{count2}}</div>
    <div>sum-count-数据: {{sum}}</div>
  </div>
</template>
<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      init: 1
    };
  },
  computed: {
    ...mapState({
      count: state => state.hello.count,
      count2(state){return state.hello.count + this.init}
    }),
    ...mapGetters(['sum'])
  },
  methods: {
    add() {
      this.$store.dispatch({
        type: "addAction",
        count: 1
      });
    },
    ...mapActions(["addAction"])
  }
};
</script>