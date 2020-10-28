<script>
export default {
  data() {
    return {
      current: ""
    };
  },
  mounted() {
    this.current = Object.keys(this.$slots)[0] || "";
  },
  methods: {
    switchTab(key) {
      this.current = key;
      this.$emit('update', key)
    }
  },
  render(createElement) {
    const tabsHeaders = [];
    const tabsContent = [];
    for (const i in this.$slots) {
      tabsHeaders.push(
        createElement(
          "span",
          {
            on: { click: ()=>{ this.switchTab(i)} },
            style:{
              borderBottom: this.current === i ? '1px solid blue' : '',
              marginRight: '10px',
            }
          },
          i
        )
      );
      if (this.current === i) {
        tabsContent.push(
          createElement(
            "div",
            {
              attrs: {}
            },
            this.$slots[i]
          )
        );
      }
    }
    const header = createElement("div", tabsHeaders);
    const content = createElement("div", tabsContent);
    return createElement("div", [header, content]);
  }
};
</script>