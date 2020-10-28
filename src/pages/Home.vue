<template>
  <div>
    home/{{$route.params.id}}
    <el-row :gutter="10">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple">www</div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple-light">eeee</div>
      </el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
        <div class="grid-content bg-purple">rrrrr</div>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
        <div class="grid-content bg-purple-light">tttttt</div>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState /* , mapActions */ } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      count: state => state.hello.count
    })
  },
  methods: {
    // ...mapActions({
    //   add: satet
    // })
    addAction() {
      this.$store.dispatch({
        type: "hello/addAction"
      });
    }
  }
};
</script>