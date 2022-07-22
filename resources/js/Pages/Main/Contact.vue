<template>
    <MasterLayout>
   <div class=" px-3 py-4">
        <h1 class=" font-title text-3xl font-bold p-6 text-right"> Contact Me </h1>

        <div class=" grid grid-cols-1 md:grid-cols-2 gap-2">
             <img src="/assets/metting.png" class=" drop-shadow-lg" alt="" srcset="" />

             <div>
                <form>
                    <input type="text" class=" mx-2 w-3/4 px-2 py-1 rounded-full ring-1 ring-rose-600 my-3" placeholder="Name"/>

                     <input type="number" class=" mx-2 w-3/4 px-2 py-1 rounded-full ring-1 ring-rose-600 my-3" placeholder="Phone"/>
                
                     <input type="email" class=" mx-2 w-3/4 px-2 py-1 rounded-full ring-1 ring-rose-600 my-3" placeholder="email" />

                      <textarea   class=" mx-2 w-3/4 h-16 rounded-2xl ring-1 ring-rose-600 my-3"  placeholder="text"></textarea>
                </form>
             </div>
        </div>
       
    </div>
    </MasterLayout>
</template>

<script>
import MasterLayout from '@/Layouts/MasterLayout.vue';
export default {
    components:{
        MasterLayout
    }
    
}
</script>