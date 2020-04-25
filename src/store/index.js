import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const state = {
    scrollList: [],
}

const mutations = {
    setScroll(state, data) {
        for (let item of state.scrollList) {
            if (item.name == data.from.name) {
                item.scrollY = data.scrollTop;
                return;
            }
        }
        state.scrollList.push({
            name: data.from.name,
            scrollY: data.scrollTop
        })
    },
    getScroll(state, data) {
        for(let item of state.scrollList){
            if(item.name == data.name){
                document.body.scrollTop = item.scrollY;
                return;
            }
        }
        //判断页面是否已经渲染
        
        if(document.getElementById('app')){
            document.body.scrollTop = 0;
        }
        
    },
}

const store = new Vuex.Store({
    state,
    mutations,
})

export default store