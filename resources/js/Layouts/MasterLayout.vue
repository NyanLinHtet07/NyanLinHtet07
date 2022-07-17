<template>
    <div class=" flex w-screen h-screen relative  bg-gradient-to-t from-emerald-700 to-sky-400">

<!--        
        <div class=" absolute bottom-0 left-8 mix-blend-multiply animate-blob animation-delay-2000 filter blur-xl rounded-full bg-slate-300 w-96 h-96"></div>
        <div class=" absolute top-20 right-28 mix-blend-multiply animate-blob animation-delay-4000 filter blur-xl rounded-full bg-rose-300 w-96 h-96"></div>
          <div class=" absolute top-0 right-8 mix-blend-multiply animate-blob animation-delay-2000 filter blur-xl rounded-full bg-slate-300 w-96 h-96"></div>     -->
    
       
          <nav class=" w-44 mt-20 hidden md:block">
            <div class=" mt-24 ml-4 z-20">
                    <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                        <HomeIcon/>  <button class="">Home</button>
                    </div>

                     <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                        <BookIcon />  <button class="">Blogs</button>
                    </div>

                     <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                        <ProjectIcon />  <button class="">Projects</button>
                    </div>

                     <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                        <AboutIcon />  <button class="">About</button>
                    </div>

                     <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                        <CommentIcon />  <button class="">Contact</button>
                    </div>
            </div> 
            </nav>
            <div class=" md:hidden block w-10">
                <button @click=" showSidebar = !showSidebar" v-if="! showSidebar" class=" bg-white/20 ml-5 mt-6 mb-4 px-2 py-1 rounded-lg text-gray-700 hover:text-rose-600 delay-200"> <MenuIcon /> </button>
                 <div class=" block md:hidden h-screen w-48 max-h-full bg-white bg-opacity-90 backdrop-blur-lg border-b border-gray-100 px-3 py-2 rounded-r-3xl  space-y-6
                                             absolute inset-0 left-0 transform -translate-x-full transition duration-400 ease-in-out z-40"
                                    :class="{' relative -translate-x-0 transition duration-500': showSidebar}">
                    <div class=" text-right">
                        <button class=" mr-2 mt-3 text-red-700 hover:p-2 hover:bg-white/60" @click="showSidebar = !showSidebar"> <CancelIcon/> </button>
                    </div>
                     <div class=" mt-24 ml-4 z-20">
                        <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                            <HomeIcon/>  <button class="">Home</button>
                        </div>

                        <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                            <BookIcon />  <button class="">Blogs</button>
                        </div>

                        <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                            <ProjectIcon />  <button class="">Projects</button>
                        </div>

                        <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                            <AboutIcon />  <button class="">About</button>
                        </div>

                        <div class=" bg-white/20 rounded-xl font-black text-gray-700 hover:text-rose-600 active:text-rose-700 flex px-4 hover:px-3 transition delay-75 w-32 my-5 py-3 justify-between border-spacing-1 border-gray-200/30 border-b-2">
                            <CommentIcon />  <button class="">Contact</button>
                        </div>
                    </div> 
                </div>
            </div>
            
            
            
            <div class=" flex-1 overflow-y-auto">
                <main class=" bg-white/50 mt-20 mb-6 main-border z-20 border-none mr-3">
                    <slot/>
                </main>
            </div>
    </div>
    
  
</template>
<script>

import MenuIcon from 'vue-material-design-icons/Menu.vue'
import HomeIcon from 'vue-material-design-icons/HomeOutline.vue'
import BookIcon from 'vue-material-design-icons//BookOpenOutline.vue'
import ProjectIcon from 'vue-material-design-icons/CodeNotEqualVariant.vue'
import AboutIcon from 'vue-material-design-icons/AccountOutline.vue'
import CommentIcon from 'vue-material-design-icons/CommentTextMultipleOutline.vue'
import CancelIcon from 'vue-material-design-icons/WindowClose.vue'
import {ref} from 'vue'
export default {
    components:{
        MenuIcon,
        HomeIcon , BookIcon , ProjectIcon, AboutIcon, CommentIcon , CancelIcon
    },

    setup() {
      const showSidebar = ref(false);
      
      return {showSidebar,}
    }
}
</script>

<style>
    .main-border{
        border-top-left-radius: 180px;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
</style>