<!--  -->
<template>
  <div>
    <group :title="title">
      <cell-box>
      <flexbox>
        <flexbox-item>
          <x-button mini plain type="primary" style="border-radius:5px;" link="/keepers">管家介绍</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button mini plain type="primary" style="border-radius:5px;">管家事迹</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button mini plain type="primary" style="border-radius:5px;">员工风貌</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button mini plain type="primary" style="border-radius:5px;">常用电话</x-button>
        </flexbox-item>
      </flexbox>
      </cell-box>
    </group>
  </div>
</template>

<script>
import { Group, GroupTitle, Flexbox, FlexboxItem ,XButton, Cell, CellBox } from "vux";
export default {
  data() {
    return {
      title: "管家专栏"
    };
  },

  components: {
    Group,
    GroupTitle,
    Flexbox, 
    FlexboxItem,
    XButton,
    Cell,
    CellBox,
  },

  computed: {},

  methods: {}
};
</script>
<style  scoped>
  .box-item{
    margin: 0;
  }
  .weui-btn_mini{
    padding:0 0.8rem;
  }
</style>