<template>
    <MasterLayout>
    <div class=" px-3 py-4">
        <h1 class=" font-title text-gray-900/90 text-3xl font-bold p-6 text-right mt-8"> Projects </h1>
        <div class=" grid grid-cols-1 gap-2 md:grid-cols-l lg:grid-cols-2" v-for="project in projects.data" :key="project.id">
                <div>
                     <!-- <img :src="`/upload/project/`+JSON.parse(project.image)[2]" alt="" srcset="" class=" mx-2 mt-20 block  px-3 py-4  w-auto  rounded-lg bg-white"/> -->
                      <img :src="`/upload/project/`+JSON.parse(project.image)[0]" alt="" srcset="" class=" mx-auto mt-10 block  px-3 py-4  w-auto h-2/3  rounded-lg bg-white"/>
                </div>
               

                <div class=" md:px-7 md:py-3 mx-6 my-3 h-fit  bg-white/10 hover:bg-rose-100/30 px-2 transition delay-200 rounded-lg backdrop-blur-lg backdrop-filter">
                    <div class="py-2 pl-3 text-thin text-center flex justify-end mt-3">
          
                    <div v-for="(t_id, index) in JSON.parse(project.tag_id)" :key="index">
                        <div v-for=" tag in tags" :key="tag.id">
                            <div v-if=" tag.id == t_id">
                                 <img :src="'/upload/tag/'+tag.icon" alt="" srcset="" class="  px-3 py-2 mt-5 w-12"/>
                            </div>
                        </div>
                    </div>
                    </div>
                   
                    <h2 class=" my-4 font-bold text-2xl"> {{project.title}} </h2>
                    <ul class=" mt-6 list-item px-6">
                        <li class=" my-2 text-sm font-medium list-disc" v-for="(l , index) in JSON.parse(project.list)" :key="index"> {{ l.name }} </li>
                    </ul>
                    <p class=" mt-6 w-3/4 mx-auto text-justify  whitespace-normal md:block hidden mb-5">
                       {{ project.description.substring(0,200) +" ..."}}
                    </p>

                    <div v-if="project.url == 'null'">
                        
                    </div>
                    <div v-else class=" flex">
                       <p class=" font-semibold mx-3"> Url -</p> <a :href="project.url" class=" text-gray-800 underline hover:text-rose-600">{{project.url}}</a>
                    </div>

                    

                    <div class=" text-right">
                        <Link :href="`/project/detail/`+project.id"  class="px-3 py-2 my-5 font-title font-bold  rounded-full bg-white/60 backdrop-blur-md  text-gray-900/90 shadow-lg hover:shadow-xl hover:bg-white/70 hover:text-rose-600 transition duration-300">
                         Detail </Link>
                    </div>
                </div>
            </div>
             <div class="mt-6 flex justify-center">
                <pagination   :links="projects.links" />
            </div>
    </div>
    </MasterLayout>
</template>

<script>
import MasterLayout from '@/Layouts/MasterLayout.vue';
import {Link} from '@inertiajs/inertia-vue3'
export default {
    props:['projects', 'tags'],
    components:{
        MasterLayout, Link
    }
}
</script>