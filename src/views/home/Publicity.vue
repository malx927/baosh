<template>
  <div>
    <group  title="小区宣传栏">
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item link="/component/cell" label="公司概况">
            <span slot="icon" class="fa-stack" style="color:#f43530">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-th-list fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item :link="{ path: '/component/cell'}" label="管家服务">
            <span slot="icon" class="fa-stack " style="color:#2C78C6">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-users fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="宠物管理">
            <span slot="icon" class="fa-stack " style="color:#ec30dd">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-paw fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="绿化须知">
            <span slot="icon" class="fa-stack ">
              <i class="fa fa-circle fa-stack-2x icon-color"></i>
              <i class="fa fa-tree fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
        </grid>
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item link="/component/cell" label="卫生须知">
            <span slot="icon" class="fa-stack" style="color:#14c3ad">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-lightbulb-o fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item :link="{ path: '/component/cell'}" label="文明公约">
            <span slot="icon" class="fa-stack " style="color:#0041ff">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-star fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="业主公约">
            <span slot="icon" class="fa-stack icon-color" >
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-user fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="车辆管理">
            <span slot="icon" class="fa-stack " style="color:#ca2824">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-car fa-stack-1x fa-inverse"></i>
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