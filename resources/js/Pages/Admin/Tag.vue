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
                
                <PlusIcon @click="openUpload" class="p-2 rounded-full bg-white opacity-60 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-300 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner
                                  transition ease-in-out duration-300 "/>
            </div>
        </div>

        
        <table class="table-auto border-collapse:separate rounded-xl border-0 border-accent w-5/6 bg-white bg-opacity-40 backdrop-blur-md mx-auto drop-shadow-sm shadow-2xl shadow-sky-200">
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
                <tr class=" border-y border-gray-200/50 text-sm">
                <td class=" py-2 pl-3">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td class=" py-2 pl-3">Malcolm Lockyer</td>
                <td class=" py-2 pl-3">1961</td>
                 <td class=" py-2 text-center">
                     <button  @click="openModal()" class="p-2 text-sm rounded-full bg-emerald-700/90  drop-shadow-lg shadow-md shadow-emerald-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-80 hover:shadow-inner
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button @click="openModal()"  class="p-2 rounded-full bg-red-700/90 drop-shadow-lg shadow-md shadow-red-200 decoration-slate-200 text-sm text-white 
                                  hover:drop-shadow-sm hover:opacity-80 hover:shadow-inner
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
                     <button  @click="openModal()"  class="p-2 rounded-full bg-emerald-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button  class="p-2 rounded-full bg-red-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
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
                     <button  class="p-2 rounded-full bg-emerald-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button  @click="openModal()"  class="p-2 rounded-full bg-red-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
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
                     <button  @click="openModal()"  class="p-2 rounded-full bg-emerald-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button  class="p-2 rounded-full bg-red-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
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
                     <button  @click="openModal()"  class="p-2 rounded-full bg-emerald-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button   class="p-2 rounded-full bg-red-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
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
                     <button  @click="openModal()"  class="p-2 rounded-full bg-emerald-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner text-xs
                                  transition ease-in-out duration-300"> 
                                  <EditIcon/> 
                    </button> 
                    </td>
                  <td class=" py-2 text-center"> 
                      <button  class="p-2 rounded-full bg-red-700/90 drop-shadow-lg shadow-md shadow-sky-200 decoration-slate-200 text-sm text-white 
                                  hover:drop-shadow-sm hover:opacity-70 hover:shadow-inner
                                  transition ease-in-out duration-300"> 
                                  <DeleteIcon/>
                    </button>
                    </td>
                </tr>
            </tbody>
        </table>

        <div class=" mt-14 text-center">
                <Paginate />
        </div>


        <!-------------------- modal ----------------------->
        <div class=" fixed z-10 inset-0 overflow-y-auto ease-out duration-500" v-if="modalOpen">
            <div class=" flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
               <div class=" fixed inset-0 transition-opacity">
                     <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
               </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                          <form>
                          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="">
                                  <div class="mb-4">
                                      <label for="exampleFormControlInput1" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                                      <input type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleFormControlInput1" placeholder="Enter Title">
                                   
                                  </div>
                            </div>
                          </div>
                          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                           
                            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                              <button  type="submit" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-teal-800/70 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-800/50 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5" >
                                Update
                              </button>
                            </span>
                            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                              
                              <button @click="closeModal()" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Cancel
                              </button>
                            </span>
                          </div>
                          </form>
                          
                        </div>
            </div>
        </div>

         <div class=" fixed z-10 inset-0 overflow-y-auto ease-out duration-500" v-if="uploadOpen">
            <div class=" flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
               <div class=" fixed inset-0 transition-opacity">
                     <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
               </div>

                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>​
                        <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                          <form @submit.prevent = "submit">
                          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div class="">
                                  <div class="mb-4">
                                      <label for="exampleFormControlInput1" class="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                                      <input type="text" v-model="form.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleFormControlInput1" placeholder="Enter Title">
                                   
                                  </div>

                                   <div class="mb-4">
                                      <label for="exampleFormControlInput1" class="block text-gray-700 text-sm font-bold mb-2">File</label>
                                      <input type="file" ref="'icon" @change = "onChangeFileUpload()" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="exampleFormControlInput1">
                                   
                                  </div>
                            </div>
                          </div>
                          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                           
                            <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                              <button  type="submit" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-teal-800/70 text-base leading-6 font-medium text-white shadow-sm hover:bg-teal-800/50 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition ease-in-out duration-150 sm:text-sm sm:leading-5" >
                                Upload
                              </button>
                            </span>
                            <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                              
                              <button @click="closeUpload()" type="button" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Cancel
                              </button>
                            </span>
                          </div>
                          </form>
                          
                        </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>

<script>
    import BreezeAuthenticatedLayout from '@/Layouts/AdminDash.vue';
    import { Head } from '@inertiajs/inertia-vue3';
    import PlusIcon from 'vue-material-design-icons/Plus.vue'
    import EditIcon from 'vue-material-design-icons/BookEdit.vue'
    import DeleteIcon from 'vue-material-design-icons/Delete.vue'
    import Paginate from '../../Components/Pagination.vue'

    import axios from 'axios'

    export default {

        setup() {

            //return {form, submit}
        },

        data() {
            return {
                modalOpen: false,
                uploadOpen: false,

            form : {
                name: null,
                icon: null,
            }
            }
        }, 

        methods: {
            onChangeFileUpload(){
                this.form.icon = this.$refs.icon.files[0];
            },

            async submit(){

                var data = new FormData() ;
                data.append('name', this.form.name);
                data.append('icon', this.form.icon)

                await axios.post('/api/tag',data, {
                    header: {
                        'content-type': 'multipart/form-data',
                        //'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
                    },
                }).then( res =>{
                    this.closeUpload();
                    window.alert('Successfully Uploaded');
                    console.log(res);
                });
               
            },

            openModal(){
                this.modalOpen= true;
            },

            closeModal(){
                this.modalOpen = false;
            },
            openUpload(){
                this.uploadOpen = true;
            },

            closeUpload(){
                this.uploadOpen = false;
            }
        },
        components:{
            BreezeAuthenticatedLayout, Head , PlusIcon , EditIcon, DeleteIcon , Paginate
        },

    }
</script>