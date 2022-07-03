<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-bold text-xl text-gray-800 leading-tight pt-2">
                Tags
            </h2>
        </template>

        <div class="py-6">
            <div class=" flex justify-end items-end mr-12">
                <PlusIcon class="p-2 rounded-full bg-white opacity-60 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-300 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner
                                  transition ease-in-out duration-300 "/>
            </div>
        </div>

        
        <table class="table-auto rounded-lg border-collapse w-5/6 bg-white bg-opacity-40 backdrop-blur-md mx-auto drop-shadow-sm shadow-2xl shadow-sky-200">
            <thead class=" border-y border-gray-300/30">
                <tr>
                <th class=" py-2 font-thin">Song</th>
                <th class="py-2 font-thin">Artist</th>
                <th class=" py-2 font-thin">Year</th>
                <th class="py-2 font-thin">Edit</th>
                <th class=" py-2 font-thin">Delete</th>
                </tr>
            </thead>
            <tbody class=" bg-white bg-opacity-60 backdrop-blur-md ">
                <tr class=" border-y border-gray-200/50">
                <td class=" py-2 pl-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td class=" py-2 pl-3">Malcolm Lockyer</td>
                <td class=" py-2 pl-3">1961</td>
                 <td class=" py-2 text-center">
                     <button  class="p-2 rounded-full bg-emerald-700/60 opacity-80 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button  class="p-2 rounded-full bg-red-700/60 opacity-80 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner
                                  transition ease-in-out duration-300"> 
                                  <DeleteIcon/>
                    </button>
                    </td>
                </tr>
                <tr  class=" border-y border-gray-200/50">
                <td class=" py-2 pl-3">Witchy Woman</td>
                <td class=" py-2 pl-3">The Eagles</td>
                <td class=" py-2 pl-3">1972</td>
                 <td class=" py-2 text-center">
                     <button  class="p-2 rounded-full bg-emerald-700/60 opacity-80 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button  class="p-2 rounded-full bg-red-700/60 opacity-80 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner
                                  transition ease-in-out duration-300"> 
                                  <DeleteIcon/>
                    </button>
                    </td>
                </tr>
                <tr  class=" border-y border-gray-200/50">
                <td class=" py-2 pl-3">Shining Star</td>
                <td class=" py-2 pl-3">Earth, Wind, and Fire</td>
                <td class=" py-2 pl-3">1975</td>
                 <td class=" py-2 text-center">
                     <button  class="p-2 rounded-full bg-emerald-700/60 opacity-80 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button  class="p-2 rounded-full bg-red-700/60 opacity-80 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner
                                  transition ease-in-out duration-300"> 
                                  <DeleteIcon/>
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>

    </BreezeAuthenticatedLayout>
</template>

<script>
    import BreezeAuthenticatedLayout from '@/Layouts/AdminDash.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import PlusIcon from 'vue-material-design-icons/Plus.vue'
    import EditIcon from 'vue-material-design-icons/BookEdit.vue'
    import DeleteIcon from 'vue-material-design-icons/Delete.vue'

    export default { 
        components:{
            BreezeAuthenticatedLayout, Head , PlusIcon , EditIcon, DeleteIcon
        }
    }
</script>