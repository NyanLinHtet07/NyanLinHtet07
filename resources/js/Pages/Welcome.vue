<template>
    <div class=" bg-gradient-to-t from-teal-300 to-zinc-400 w-full h-screen overflow-y-auto">
        <header>
            <Menu></Menu>
        </header>
        <div class=" grid  grid-cols-1 text-center mt-7">
            <div class="">
                <img src="/assets/me.png" alt="" srcset="" class=" drop-shadow-2xl w-64 animate-b duration-700 mx-auto block z-50">
            </div>
            
            <div class=" px-3 py-2 rounded-3xl w-fit mx-auto block">
                <h1 class=" text-2xl font-bold text-gray-900/70 ">
                    I'm just a software developer, who can use Laravel, Vue and Ionic. 
                </h1>
                <h4 class="text-slate-900/70 font-semibold mt-2"> If You  Want to Discuss with Me, Come On Guy</h4>

                <button class=" px-3 py-2 rounded-full bg-white/60 backdrop-blur-md mt-3 text-gray-900/70"> Talk With Me </button>
            </div>

            <div class=" flex justify-center mt-8">
              <PhoneIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-green-600/90 rounded-full hover:shadow-md hover:shadow-green-500 transition duration-150"/> 
              <MailIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-rose-600/90 rounded-full  hover:shadow-md hover:shadow-red-300 transition duration-150"/>  
              <FacebookIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-blue-600 rounded-full  hover:shadow-md hover:shadow-blue-500 transition duration-150"/> 
              <LinkedInIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-sky-600 rounded-full  hover:shadow-md hover:shadow-sky-500 transition duration-150"/> 
            </div>
            
        </div>

        <div class=" w-full h-screen mt-24 grid items-center text-center">
             <h1 class=" text-2xl font-bold text-gray-900/70 ">
                   Ah, If you Want to kown more about me, download My Resume
                </h1>

                <!-- <button type="" class=" px-3 py-2 rounded-full border-none bg-white/50 my-8"> Download</button> -->

                <h3 class=" text-4xl font-sans font-bold text-gray-800">OR</h3>
            <img src="/assets/testqr.png" alt="" srcset="" class=" w-64 mx-auto drop-shadow-lg px-2 py-2 z-30 rounded-lg shadow-lg bg-white/30">
        </div>

        <div class=" w-full h-screen grid mt-10">
            <h3  class=" text-2xl font-bold text-gray-900/70 ml-3 "> This is My Last Freelance Project</h3>
        </div>

          
        
    </div>
</template>

<script>
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import LinkedInIcon from 'vue-material-design-icons/Linkedin.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import MailIcon from 'vue-material-design-icons/Mail.vue'

import Menu from '../Layouts/Menu.vue'
export default {
    components:{
        FacebookIcon, LinkedInIcon , PhoneIcon, MailIcon , Menu
    }
}
</script>

<style scoped>
/* .textB{
    border-top-left-radius: 20px;
    border-top-right-radius: 480%;

    border-end-end-radius: 420px;
    border-end-start-radius: 40px;
    animation: textBox 10s infinite;
} */

/* @keyframes textBox{
   0% {     
             border-top-left-radius: 220px;
            border-top-right-radius: 260px;

            border-end-end-radius: 220px;
            border-end-start-radius: 420px;
      }

    25% {     
             border-top-left-radius: 340px;
            border-top-right-radius: 440px;

            border-end-end-radius: 420px;
            border-end-start-radius: 130px;
      }

    50% {     
             border-top-left-radius: 560px;
            border-top-right-radius: 320px;

            border-end-end-radius: 260px;
            border-end-start-radius: 230px;
      }

    75% {     
             border-top-left-radius: 280px;
            border-top-right-radius: 330px;

            border-end-end-radius: 180px;
            border-end-start-radius: 320px;
      }

        1000% {     
             border-top-left-radius: 210px;
            border-top-right-radius: 260px;

            border-end-end-radius: 204px;
            border-end-start-radius: 240px;
      }
    
    } */


</style>
