import essay from './essay/index'
const coms = [essay]
const install=(Vue)=>{
    coms.forEach(com=>{
        Vue.component(com.name,com)
    })
}
export default install
