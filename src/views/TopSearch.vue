<template>
<div>
    <search
      @on-result-click="resultClick"
      @on-change="getResult"
      :results="results"
      v-model="value"
      position="absolute"
      @on-focus="onFocus"
      @on-cancel="onCancel"
      @on-submit="onSubmit"
      ref="search">
      <div slot="right">
        <a href="javascript:" class="btn_liuyan">留言</a>
        <a href="javascript:" class="btn_liuyan">我的留言</a>
         <!-- <x-button mini plain type="primary">primary</x-button> -->
         <!-- <x-button mini plain type="primary">primary</x-button> -->
      </div>
      </search>
  </div>
</template>

<script>
import { Search, Group, Cell, XButton } from 'vux'

export default {
  components: {
    Search,
    Group,
    Cell,
    XButton
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      console.log('on-change', this.value)
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
  return rs
}
</script>

<style>
  .btn_liuyan{
    margin-left: 10px;
    line-height: 28px;
    color: #09BB07;
    white-space: nowrap;
  }

</style>