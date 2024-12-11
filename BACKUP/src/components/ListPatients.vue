<template>
    <NavigationBar/>
    <h1 class="flex items-center justify-center text-center font-bold text-2xl">List of Patients</h1>
    <main class="flex-1 bg-gray-100 p-6 overflow-y-auto">
    <table class="min-w-full table-auto border-collapse border border-gray-300">
        <thead class="px-4 py-2 text-left border-b">
        <tr>
           <th class="px-4 py-2 text-left border-b">ID</th>
           <th class="px-4 py-2 text-left border-b">PATIENT</th>
           <th class="px-4 py-2 text-left border-b">GENDER</th>
           <th class="px-4 py-2 text-left border-b">AGE</th>
           <th class="px-4 py-2 text-left border-b">CONSULTANT</th>
           <th class="px-4 py-2 text-left border-b">TAG</th>
           <th class="px-4 py-2 text-left border-b">Actions</th>
        </tr>

        </thead>
        
        <tr v-for="item in patients" v-bind:key="item.id" class="hover:bg-gray-50">
            <td class="px-4 py-2 border-b">{{item.id}}</td>
            <td class="px-4 py-2 border-b">{{item.Patient}}</td>
            <td class="px-4 py-2 border-b">{{item.Gender}}</td>
            <td class="px-4 py-2 border-b">{{item.Age}}</td>
            <td class="px-4 py-2 border-b">{{item.Consultant}}</td>
            <td class="px-4 py-2 border-b">{{item.Tag}}</td>
            
            <button class="w-auto bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700">Update</button>
            <button class="w-auto  bg-red-500 text-white p-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 active:bg-red-700">Delete</button>

        </tr>
        
    </table>
    <router-link to="/add-patient">
      <button class="w-auto bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 active:bg-blue-700">Add Patient</button>
    </router-link>
    </main>
</template>
<script>
import axios from 'axios'
import NavigationBar from './NavigationBar.vue'
export default {
    name:'ListPatient',
    data(){
        return{
            patients:[],
        }
    },
    components:{
        NavigationBar

    },
     async mounted(){
        let result = await axios.get('http://localhost:3000/patients');
        this.patients=result.data;
        
    }
    
}
</script>
