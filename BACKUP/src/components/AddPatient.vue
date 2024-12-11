<template>
    <h1 class="flex items-center justify-center text-center font-bold text-2xl">Add Patient</h1>
    <div class=" items-center justify-center p-12 " >
        <div class="mb-4">
            <label class="block text-lg font-semibold text-gray-700" for="number">Enter ID</label>
            <input class="mt-2 p-3 w-fit border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="number" v-model="id" id="number" placeholder="Enter id">
        </div> 
        <div class="mb-4">
            <label class="block text-lg font-semibold text-gray-700" for="name">Enter Patient Name</label>
            <input class="mt-2 p-3 w-fit border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" v-model="name" id="name" placeholder="Enter Patient Name">
        </div> 
        <div class="mb-4">
            <label class="block text-lg font-semibold text-gray-700" for="gender">Enter Gender</label>
            <input class="mt-2 p-3 w-fit border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" v-model="gender" id="gender" placeholder="Enter Gender">
        </div> 
        <div class="mb-4">
            <label class="block text-lg font-semibold text-gray-700" for="age">Enter Age</label>
            <input class="mt-2 p-3 w-fit border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="number" v-model="age" id="age" placeholder="Enter Age">
        </div> 
        <div class="mb-4">
            <label class="block text-lg font-semibold text-gray-700" for="consultant">Enter Consultant</label>
            <input class="mt-2 p-3 w-fit border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" v-model="consultant" id="consultant" placeholder="Enter Consultant">
        </div> 
        <div class="mb-4">
            <label class="block text-lg font-semibold text-gray-700" for="tag">Enter Tag</label>
            <input class="mt-2 p-3 w-fit border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" type="text" v-model="tag" id="tag" placeholder="Enter Tag">
        </div> 
        <router-link to="/list-patient">
        <button class="w-auto bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700" v-on:click="addPatient"> Submit </button>
        </router-link>   
    </div>

</template>
<script>
import axios from 'axios'
export default {
    name:'AddPatients',
    data(){
        return{
            id:'',
            name:'',
            gender:'',
            age:'',
            consultant:'',
            tag:'',
        }
    },
    methods:{
        async addPatient(){
            let result = await axios.post("http://localhost:3000/patients",
                {
                    id: this.id,
                    Patient: this.name,
                    Gender:this.gender,
                    Age:this.age,
                    Consultant:this.consultant,
                    Tag:this.tag,
                }
            );
            if(result.status==201){
                localStorage.setItem("patient-info", JSON.stringify(result.data))
                this.$router.push({name:'HomePage'})
            }
            
        }
    }
}
</script>