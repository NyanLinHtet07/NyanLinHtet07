<template>
    <nav class="relative">
       <div class=" flex justify-end mt-3 mr-8 sticky top-4">
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
</template>
<script>

//import MenuIcon from 'vue-material-design-icons/MenuDownOutline.vue'
export default {
    components:{
        //MenuIcon
    }
}
</script>