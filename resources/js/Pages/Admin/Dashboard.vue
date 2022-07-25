<template>
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-bold text-xl text-gray-800 leading-tight pt-2">
                Dashboard
            </h2>
        </template>
        <div class=" grid grid-cols-1 md:grid-cols-2 gap-3 h-2/4 mx-2">
            <div class=" rounded px-2 py-3 bg-white/60 backdrop-blur-md">
                <BarChart/>
            </div>
             <div class=" rounded px-2 py-3 bg-white/60 backdrop-blur-md">
                <PieChart/>
            </div>
        </div>
       
    </BreezeAuthenticatedLayout>
</template>

<script>
    import BreezeAuthenticatedLayout from '@/Layouts/AdminDash.vue';
    import PieChart from '@/Charts/PieChart.vue';
    import BarChart from '@/Charts/BarChart.vue';
    import { Head } from '@inertiajs/inertia-vue3';

    export default { 
        components:{
            BreezeAuthenticatedLayout, Head, BarChart, PieChart
        }
    }
</script>