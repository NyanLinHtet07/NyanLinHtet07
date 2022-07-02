<script setup>
import { ref } from 'vue';
import BreezeApplicationLogo from '@/Components/ApplicationLogo.vue';
import BreezeDropdown from '@/Components/Dropdown.vue';
import BreezeDropdownLink from '@/Components/DropdownLink.vue';
import BreezeNavLink from '@/Components/NavLink.vue';
import BreezeResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link } from '@inertiajs/inertia-vue3';

const showingNavigationDropdown = ref(false);
</script>

<template>
   
        <div class=" relative h-screen flex bg-gradient-to-t from-slate-400/70 to-white">

                 <nav v-show="showSidebar" class=" w-64 h-screen bg-white bg-opacity-60 backdrop-blur-lg border-b border-gray-100 px-3 py-2 rounded-r-3xl  space-y-6
                                             absolute inset-0 left-0 transform -translate-x-full transition duration-200 ease-in-out
                                             md:relative md:-translate-x-0"
                                    :class="{'relative -translate-x-0  transition duration-200 ease-in-out': showSidebar}">

                            <!-- Logo -->
                            <div class=" text-center items-center mt-4 text-2xl font-bold text-gray-700">
                                <Link :href="route('dashboard')">
                                    MyWeb
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="pt-2 mx-2 pb-3 space-y-1">
                                 {{ $page.props.auth.user.name }}
                                  <div class="font-medium text-sm text-gray-500">{{ $page.props.auth.user.email }}</div>
                               
                            </div>
                       
              
                    <div class="pt-2 pb-3 space-y-1">
                        <BreezeResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
                            Dashboard
                        </BreezeResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="mt-3 space-y-1">
                            <BreezeResponsiveNavLink :href="route('logout')" method="post" as="button">
                                Log Out
                            </BreezeResponsiveNavLink>
                        </div>
                    
                </div>
            </nav>

         
           
           


           <div class=" px-3 flex-1">
                 <!-- Page Heading -->
            <header class="bg-white shadow" v-if="$slots.header">
                <div class=" flex justify-between max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                        <button  @click="showSidebar ? closeMenu() : openMenu()" class=" hover:bg-slate-200/10 hover:rounded-full hover:drop-shadow-lg hover:transition hover:delay-200 p-2">  <MenuIcon/> </button>
                          <!-- <button  @click=" showSidebar = !showSidebar" class=" hover:bg-slate-200/10 hover:rounded-full hover:drop-shadow-lg hover:transition hover:delay-200 p-2">  <MenuIcon/> </button> -->
                    <slot name="header" />
                </div>
            </header>

            <!-- Page Content -->
            <main>
                <!-- <div>Name: {{ myVar == 1 ? 'Hardik' : 'ItSolutionStuff.com' }}</div> -->
                <slot />
            </main>
           </div>

           
        </div>
    
</template>

<script>
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import CloseIcon from 'vue-material-design-icons/CloseOutline.vue'
export default {
    data(){
        return{
              showSidebar:false
        }
    },

    // setup(){
    //     const showSidebar = ref(false);

    //     return { showSidebar, }
    // },

    components:{
        MenuIcon, CloseIcon
    },

    methods:{
        openMenu(){
            this.showSidebar = true;
        },

        closeMenu(){
            this.showSidebar = false ;
        },
    }
    
}
</script>
