<template>
  <div>
    <group style="margin-bottom:56px;">
      <cell class="bottom-text-size" :title="curr_year" value-align="right"></cell>
    </group>
  </div>
</template>

<script>
import { Group, CellBox, Cell } from "vux";
export default {
  components: {
    Group,
    CellBox,
    Cell
  },

  data() {
    return {
    };
  },
  computed: {
    curr_year(){
        let curr_date = new Date()
        let year = curr_date.getFullYear()
        return '©Copyright2018-' + year + '宝石花物业All Rights Reserved.'
    },
  },
  methods: {},
  created() {},
  mounted() {
    document.title = '首页'
  }
};
</script>

<style  scoped>
.bottom-text-size{
  font-size:15px;
}
</style>