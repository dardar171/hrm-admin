import VueRouter from 'vue-router'
import Vue from 'vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
//import EmployeeCreate from '@/views/employees/Create.vue'
import EmployeeEdit from '@/views/employees/Edit.vue'
import EmployeeList from '@/views/employees/List.vue'
import DefaultContainer from '@/containers/DefaultContainer.vue'
import Dashboard from '@/views/Dashboard.vue'
import store from '@/store'
//import EmployeeContainer from '@/containers/EmployeeContainer.vue'
//import Employee from '@/views/employees/Detail.vue'

Vue.use(VueRouter)

const routes=[
    {path:"",component:DefaultContainer,
    redirect:"/dashboard",
    beforeEnter(to,from,next){
        if(store.getters.accessToken){
            return next();
        }else{
            return next("/login")
        }
    },
    children:[
        {path:'/dashboard',name:"Dashboard",component:Dashboard},
        {name:'EmployeeList',path:'/employees',component:EmployeeList},
        {name:'CreateEmployee',path:'/employees/create',component:()=>import("@/views/employees/Create.vue")},
        {name:'EditEmployee',path:'/employees/:id/edit',component:EmployeeEdit},
        {name:'Employee',path:'/employees/:id',component:()=>import("@/views/employees/Detail.vue")}
    ]},
      
   
    {path:'/login',component:Login},
    {path:'/register',component:Register},
]
const router=new VueRouter({
   routes
})
export default router