<template>
    <div class=" bg-gradient-to-t from-teal-400 to-zinc-400 w-full h-screen overflow-y-auto">
        <div class=" grid  grid-cols-1 text-center mt-20">
            
            <div class="mt-10">
                <img src="/assets/avts.svg" alt="" srcset="" class=" drop-shadow-lg w-64 animate-b duration-700 mx-auto block">
            </div>
            
            <div class=" px-3 py-2 rounded-3xl w-fit bg-white/60 mx-auto block">
                <h1 class=" text-3xl p-5">
                    I'm just a software developer, who can use Laravel, Vue and Ionic. 
                </h1>
                <h4> If You  Want To Know more Detail About Me, download Resume</h4>

                <button class=" px-2 py-1 rounded-full bg-white/90"> Resume </button>
            </div>

            <div class=" flex justify-center mt-8">
              <PhoneIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-green-600/90 rounded-full hover:shadow-md hover:shadow-green-500 transition duration-150"/> 
              <MailIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-rose-600/90 rounded-full  hover:shadow-md hover:shadow-red-300 transition duration-150"/>  
              <FacebookIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-blue-600/90 rounded-full  hover:shadow-md hover:shadow-blue-500 transition duration-150"/> 
              <LinkedInIcon class=" p-3 mx-2 bg-white/50 backdrop-blur-sm drop-shadow-lg text-sky-600/90 rounded-full  hover:shadow-md hover:shadow-sky-500 transition duration-150"/> 
            </div>
            
        </div>

          
        
    </div>
</template>

<script>
import FacebookIcon from 'vue-material-design-icons/Facebook.vue'
import LinkedInIcon from 'vue-material-design-icons/Linkedin.vue'
import PhoneIcon from 'vue-material-design-icons/Phone.vue'
import MailIcon from 'vue-material-design-icons/Mail.vue'
export default {
    components:{
        FacebookIcon, LinkedInIcon , PhoneIcon, MailIcon
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
