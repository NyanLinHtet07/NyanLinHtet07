<template>
    <div class=" bg-gradient-to-t from-teal-400 to-zinc-400 w-full h-screen overflow-y-auto">
        <div class=" grid  grid-cols-2 gap-2  w-auto h-fit textB motion-safe:animate-pulse bg-white/60 shadow-sm shadow-slate-50 mt-10 mx-4 h-32 px-3 py-5">
            <div class="">
                <h1 class=" text-3xl p-5">
                    I'm just a software developer, who can use Laravel, Vue and Ionic. 
                </h1>
            </div>
            <div class="mt-10">
                <img src="/assets/avts.svg" alt="" srcset="" class=" mx-3  drop-shadow-lg w-64">
            </div>
        </div>

          
        
    </div>
</template>

<style scoped>
.textB{
    border-top-left-radius: 20px;
    border-top-right-radius: 480%;

    border-end-end-radius: 420px;
    border-end-start-radius: 40px;
    animation: textBox 10s infinite;
}

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
