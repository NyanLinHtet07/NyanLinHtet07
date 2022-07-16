<template>
    <div class=" bg-gradient-to-t from-teal-300 to-zinc-200 w-full h-screen overflow-y-auto">
        <header>
            <Menu></Menu>
        </header>
        <div class=" grid  grid-cols-1 text-center mt-7">
            <div class="">
                <img src="/assets/me.png" alt="" srcset="" class=" drop-shadow-2xl w-64 animate-b duration-700 mx-auto block z-50">
            </div>
            
            <div class=" px-3 py-2 rounded-3xl w-fit mx-auto block">
                <h1 class=" text-2xl font-bold text-gray-900/90 ">
                    I'm just a software developer, who can use Laravel, Vue and Ionic. 
                </h1>
                <h4 class="text-slate-900/70 font-semibold mt-2"> If You  Want to Discuss with Me, Come On Guy</h4>

                <button class=" px-3 py-2 rounded-full bg-white/60 backdrop-blur-md mt-3 text-gray-900/90"> Talk With Me </button>
            </div>

            <div class=" flex justify-center mt-8">
              <PhoneIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-green-600/90 rounded-full hover:shadow-md hover:shadow-green-500 transition duration-150"/> 
              <MailIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-rose-600/90 rounded-full  hover:shadow-md hover:shadow-red-300 transition duration-150"/>  
              <FacebookIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-blue-600 rounded-full  hover:shadow-md hover:shadow-blue-500 transition duration-150"/> 
              <LinkedInIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-sky-600 rounded-full  hover:shadow-md hover:shadow-sky-500 transition duration-150"/> 
            </div>
            
        </div>

        <!-- <div class=" w-full h-screen mt-24 grid items-center text-center">
             <h1 class=" text-2xl font-bold text-gray-900/70 ">
                   Ah, If you Want to kown more about me, download My Resume
                </h1>

                <h3 class=" text-4xl font-sans font-bold text-gray-800">OR</h3>
            <img src="/assets/testqr.png" alt="" srcset="" class=" w-64 mx-auto drop-shadow-lg px-2 py-2 z-30 rounded-lg shadow-lg bg-white/30">
        </div> -->

        <div class=" w-full h-screen grid mt-20">
            <h3  class=" text-4xl font-bold text-gray-900/90 ml-3 mt-6 text-center isolate ">My Last Project</h3>

            <div class=" grid grid-cols-1 gap-2 md:grid-cols-2">
                <img src="/assets/me.png" alt="" srcset="" class=" mx-auto block  px-3 py-2 mt-5 w-36 md:w-64">

                <div class=" md:px-7 md:py-3 mx-6 my-3 h-fit  bg-white/30 rounded-lg backdrop-blur-lg backdrop-filter">
                    <h2 class=" my-4 font-bold text-2xl"> POS System for Market </h2>
                    <ul class=" mt-6 list-item px-6">
                        <li class=" my-2 text-sm font-medium list-disc"> Responsive Design</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Easy to Upload, Update Products </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Product Quantity and Stock In, Stock Out Control </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Manage Customer Debit </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Add Day by day Expensense with detail Infomation </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Auto Caculate daily, monthly profit base on income and expense</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Can easily create an account for infinity branches and easily manage </li>
                    </ul>
                    <p class=" mt-6 w-3/4 mx-auto text-justify  whitespace-normal">
                       {{ text.substring(0,400) +" ..."}}
                    </p>
                </div>
            </div>
            <div class=" text-right mr-5">
                    <button class=" px-2 py-1 rounded-full bg-white/40 backdrop-blur-md backdrop-filter">
                        View More Projects
                    </button>
            </div>
        </div>
        <div class=" w-full h-screen mt-32">
             <h3  class=" text-4xl font-bold text-gray-900/90 ml-3  text-center isolate mt-10 ">Blog</h3>
             <div class=" w-3/4 px-3 py-4 my-8 rounded-xl mx-auto bg-white/50 z-10 h-fit">
                <h1 class=" text-xl my-7 ml-4 font-semibold"> Story Of Me </h1>
                <div>
                    
                </div>
                <img src="/assets/me.png" alt="" srcset="" class="  px-3 py-2 mt-5 w-12"/>
                <p class=" mt-6 w-3/4 mx-auto mb-4 text-justify  whitespace-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti aspernatur, 
                        ut magni quidem laborum obcaecati id architecto possimus saepe at harum velit debitis 
                        facilis dignissimos ea dolore deleniti suscipit?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti aspernatur, 
                        ut magni quidem laborum obcaecati id architecto possimus saepe at harum velit debitis 
                        facilis dignissimos ea dolore deleniti suscipit?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti aspernatur, 
                        ut magni quidem laborum obcaecati id architecto possimus saepe at harum velit debitis 
                        facilis dignissimos ea dolore deleniti suscipit?
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia corrupti aspernatur, 
                        ut magni quidem laborum obcaecati id architecto possimus saepe at harum velit debitis 
                        facilis dignissimos ea dolore deleniti suscipit?
                </p>
                 
             </div>
                <div class=" text-right mr-5">
                    <button class=" px-2 py-1 rounded-full bg-white/40 backdrop-blur-md backdrop-filter">
                        View More Story
                    </button>
            </div>
        </div>

        <div class=" mx-6 h-screen grid items-center">
             <h2 class=" text-4xl font-bold text-gray-900/90 ml-3  text-center isolate mt-10 "> What Can I Serve for You </h2>
            <div class=" grid md:grid-cols-3 gap-4 grid-cols-1">
                <div class=" px-2 py-3 rounded-lg bg-white/40 backdrop-blur-md backdrop-filter">
                    <h3 class=" text-lg font-bold px-4  pt-3"> Ecormmaerce Service</h3>
                    <ul class="mt-6 list-item px-6">
                         <li class=" my-2 text-sm font-medium list-disc"> Responsive Design</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Easy to Upload, Update Products </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Product Quantity and Stock In, Stock Out Control </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Manage Customer Debit </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Add Day by day Expensense with detail Infomation </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Auto Caculate daily, monthly profit base on income and expense</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Can easily create an account for infinity branches and easily manage </li>
                    </ul>
                </div>
                <div class=" px-2 py-3 rounded-lg bg-white/40 backdrop-blur-md backdrop-filter">
                    <h3 class=" text-lg font-bold px-4  pt-3"> Custom Web Service</h3>
                    <ul class="mt-6 list-item px-6">
                         <li class=" my-2 text-sm font-medium list-disc"> Responsive Design</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Easy to Upload, Update Products </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Product Quantity and Stock In, Stock Out Control </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Manage Customer Debit </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Add Day by day Expensense with detail Infomation </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Auto Caculate daily, monthly profit base on income and expense</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Can easily create an account for infinity branches and easily manage </li>
                    </ul>
                </div>
               <div class=" px-2 py-3 rounded-lg bg-white/40 backdrop-blur-md backdrop-filter">
                    <h3 class=" text-lg font-bold px-4  pt-3"> POS System</h3>
                    <ul class="mt-6 list-item px-6">
                         <li class=" my-2 text-sm font-medium list-disc"> Responsive Design</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Easy to Upload, Update Products </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Product Quantity and Stock In, Stock Out Control </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Manage Customer Debit </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Add Day by day Expensense with detail Infomation </li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Auto Caculate daily, monthly profit base on income and expense</li>
                        <li  class=" my-2 text-sm font-medium list-disc"> Can easily create an account for infinity branches and easily manage </li>
                    </ul>
                </div>
            </div>
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
    data() {
        return {
            text: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam hic reprehenderit fugit atque cupiditate. Esse error ipsum deserunt Odio itaque minus voluptates nostrum doloribus voluptatem corporis? Minima at minus officiis',
        }
    },
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
