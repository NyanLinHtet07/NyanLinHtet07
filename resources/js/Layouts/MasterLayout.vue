<template>
    <div class=" flex w-screen h-screen relative  bg-gradient-to-t from-emerald-700 to-sky-200">

        <!-- <div class=" absolute w-screen">
        <div class=" absolute top-20 left-28 mix-blend-multiply animate-blob animation-delay-2000 filter blur-xl rounded-full bg-slate-300 w-96 h-96"></div>
        <div class=" absolute top-20 right-28 mix-blend-multiply animate-blob animation-delay-4000 filter blur-xl rounded-full bg-slate-300 w-96 h-96"></div>
        
    
        </div> -->
          <nav class=" w-44">
            <div class="justify-end mt-3 mr-8 sticky top-4 z-20">
                    <!-- <MenuIcon class=" font-bold absolute  p-2 rounded-full text-rose-500 bg-white/50 drop-shadow-lg backdrop-blur-sm 
                                        hover:shadow-sm hover:shadow-red-200 transition duration-700 "></MenuIcon> -->
                    <!-- <div class="absolute justify-between  p-2 rounded-full text-rose-500 bg-white/50 drop-shadow-lg backdrop-blur-sm 
                                        hover:shadow-sm hover:shadow-red-200 transition duration-700 animate-pulse">
                        <h3 class=" font-serif text-clip text-xl font-bold text-gray-700">M</h3> <MenuIcon />
                    </div> -->
                <button class=" mx-2 mt-2 px-2 py-1 rounded-full shadow-md bg-white/80 text-zinc-800/70 font-semibold
                                hover:shadow-lg transition delay-300 " id="home">Home</button>
                <button class=" mx-2 mt-2 px-2 py-1 rounded-full shadow-md bg-white/80 text-zinc-800/70 font-semibold
                                hover:shadow-lg transition delay-300 " id="blog"> Blogs </button>
                <button class=" mx-2 mt-2 px-2 py-1 rounded-full shadow-md bg-white/80 text-zinc-800/70 font-semibold
                                hover:shadow-lg transition delay-300 " id="project"> Projects </button>
                    <button class=" mx-2 mt-2 px-2 py-1 rounded-full shadow-md bg-white/80 text-zinc-800/70 font-semibold
                                hover:shadow-lg transition delay-300 " id="contact"> About Me </button>
                    <button class=" mx-2 mt-2 px-2 py-1 rounded-full shadow-md bg-white/80 text-zinc-800/70 font-semibold
                                hover:shadow-lg transition delay-300 " id="contact"> Contacts </button>
            </div> 
            </nav>
            <div class=" flex-1 overflow-y-auto">
                <main class=" bg-white/50 mt-28 main-border z-20 border-none">
                    <slot/>
                </main>
            </div>
    </div>
    
  
</template>
<script>

//import MenuIcon from 'vue-material-design-icons/MenuDownOutline.vue'
export default {
    components:{
        //MenuIcon
    }
}
</script>

<style>
    .main-border{
        border-top-left-radius: 180px;
    }
</style>