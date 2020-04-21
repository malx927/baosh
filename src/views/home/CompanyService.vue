<template>
  <div>
    <group  title="物业服务标准及范围">
        <grid :show-lr-borders="false" :show-vertical-dividers="false">
          <grid-item link="/component/cell" label="保安">
            <span slot="icon" class="fa-stack" style="color:#f43530">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-lightbulb-o fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item :link="{ path: '/component/cell'}" label="保洁">
            <span slot="icon" class="fa-stack " style="color:#2C78C6">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-star fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="绿化">
            <span slot="icon" class="fa-stack icon-color" >
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-tree fa-stack-1x fa-inverse"></i>
            </span>
          </grid-item>
          <grid-item link="/component/cell" label="维修">
            <span slot="icon" class="fa-stack " style="color:#52108c">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="fa fa-phone fa-stack-1x fa-inverse"></i>
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