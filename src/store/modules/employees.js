import axios from 'axios'
import store from '@/store'

const state={
    employees:null,
    employee:null
}
const mutations={
    storeEmployee(state,data){
        if(state.employees){
        state.employees.push=data;
    }
    },
    setEmployees(state,employees){
        state.employees=employees;
    },
    
    setEmployee(state,employee){
        state.employee=employee;
    },
    setEmployeeDetail(state,employeeDetail){
        state.employee.employee_detail=employeeDetail;
    },
    updateEmployee(state,employee){
        var index=state.employees.findIndex(e=>e==employee.id);
        state.employees[index]=employee;
    },
    removeEmployee(state,id){
        var index=state.employees.findIndex(e=>e.id==id);
        state.employees.splice(index,1);
    }
}
// const actions={
//     getEmployees({commit}){
//         axios.get("http://localhost:8000/api/employees").then((res)=>{
//         commit("setEmployees",res.data);
//       })
//     },
//     createEmployee({commit},data){
//         axios.post("http://localhost:8000/api/employees",data).then((res)=>{

//         commit("storeEmployee",res.data);
//     })
//     },
//     getEmployee({commit},id){
       
//         axios.get("http://localhost:8000/api/employees/"+id).then((res)=>{
  
//             commit("setEmployee",res.data);
//         })
//     },
//     updateEmployee({commit},employee){
//         axios.put("http://localhost:8000/api/employees/"+employee.id,employee).then((res)=>{
//             commit("updateEmployee",res.data)
//         })
//     }
// }
const actions={
    async resetEmployee({commit},data){
        commit("setEmployee",data);
    },
    async getEmployees({commit}){
        const res=await axios.get("/api/employees",{headers:{"Authorization":"Bearer "+store.getters.accessToken}});
        commit("setEmployees",res.data);
  
    },
    async createEmployee({commit},data){
        const res=await axios.post("/api/employees",data,{headers:{"Authorization":"Bearer "+store.getters.accessToken}});

        commit("storeEmployee",res.data);
    },
    async getEmployee({commit},id){
       
        const res=await axios.get("/api/employees/"+id,{headers:{"Authorization":"Bearer "+store.getters.accessToken}});
  
            commit("setEmployee",res.data);
     
    },
    async updateEmployee({commit},employee){
        const res=await axios.put("/api/employees/"+employee.id,employee,{headers:{"Authorization":"Bearer "+store.getters.accessToken}});
            commit("setEmployee",res.data)

    },
    async updateEmployeeDetail({commit},formData){
        const res=await axios.put("/api/employeeDetails/"+formData.id,formData,{headers:{"Authorization":"Bearer "+store.getters.accessToken}});
            commit("setEmployeeDetail",res.data)

    },
    async deleteEmployee({commit},id){
        await axios.delete("/api/employees/"+id);
        commit("removeEmployee",id)
    }
}
const getters={
    employees(state){
        return state.employees;
    },
    employee(state){
        return state.employee;
    },
}
var employees={
    state,
    mutations,
    actions,
    getters
}
export default employees