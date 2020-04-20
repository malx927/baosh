<template>
  <div>
    <group  title="物业服务" style='margin-bottom:56px;'>
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item link="/component/cell" label="测试1">
            <span slot="icon" class="fa-stack icon-color" >
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-flag fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item :link="{ path: '/component/cell'}" label="测试2">
            <span slot="icon" class="fa-stack icon-color" >
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-book fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="测试3">
            <span slot="icon" class="fa-stack icon-color" >
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-calculator fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="测试3">
            <span slot="icon" class="fa-stack icon-color" >
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-bell-o fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
        </grid>
    </group>
  </div>
</template>

<script>
import { Group, CellBox, Grid, GridItem } from "vux";
export default {
  name: "service",
  data() {
    return {};
  },
  components: {
    Grid,
    GridItem,
    Group,
    CellBox,

  },
  mounted() {},
  methods: {}
};
</script>

<style scoped>
.icon-color{
  color: #09bb07;
}
</style>