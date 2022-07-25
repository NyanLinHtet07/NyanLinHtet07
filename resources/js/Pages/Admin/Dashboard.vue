<template>
    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-bold text-xl text-gray-800 leading-tight pt-2">
                Dashboard
            </h2>
        </template>
       <pieChart class=" w-3/6 h-3/6"/>
    </BreezeAuthenticatedLayout>
</template>

<script>
    import BreezeAuthenticatedLayout from '@/Layouts/AdminDash.vue';
    import pieChart from '@/Charts/PieChart.vue'
    import { Head } from '@inertiajs/inertia-vue3';

    export default { 
        components:{
            BreezeAuthenticatedLayout, Head, pieChart
        }
    }
</script>