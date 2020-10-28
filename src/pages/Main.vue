<template>
  <div>
    {{x}}
    <Tabs @update="updatetTab">
      <template #tabkey1 name="hello world">
        <HelloWorld></HelloWorld>
      </template>
      <template #tabkey2 name="count">
        <Count></Count>
      </template>
    </Tabs>
  </div>
</template>
<script>
import HelloWorld from "../components/HelloWorld.vue";
import Count from "../pages/Count.vue";
import Tabs from "../components/Tabs.vue";
export default {
  data() {
    return {
      x: "inti"
    };
  },
  components: {
    HelloWorld,
    Count,
    Tabs
  },
  methods: {
    updatetTab(x) {
      this.x = x;
    }
  }
};
</script>