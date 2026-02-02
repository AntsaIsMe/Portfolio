<script setup>
    import Projet from './Projet.vue';
    import Carousel from '../base/Carousel.vue';
import { computed, onMounted, ref } from 'vue';
    const projets = ref([
        {id : 0, image : "/it.JPG"},
        {id : 1, image : "/agile.JPG"},
        {id : 2, image : "/infomada.JPG", locked: true},
       
    ])
    const carousel = ref(null)
    const emit = defineEmits(['error'])

    
    const active = computed(()=>{
        if(!carousel.value) return 0
        return carousel.value.activeIndex
    })

     function unlock(id){
       const projet = projets.value.find(proj => proj.id === id)
       projet.locked  = false
    }

    function notify(message) { 
        console.log("sd");
        
        emit('error', message)        
    }

    const title = ref(null)
    onMounted(() => {
        console.log("rds");
        const observer = new IntersectionObserver((elem)=>{
            elem.forEach(el => {
                if(el.isIntersecting){
                    
                    el.target.classList.add('kboom')
                    observer.unobserve(el.target)
                }
            });
        }, {})  

        if (title.value) {
            observer.observe(title.value)
        }
        
    })
</script>

<template>
    <div>

        <div class="mb-12 text-center">
            <h2 ref="title" class="text-3xl font-black italic tracking-tighter text-white uppercase">
                <span  class="text-lighter">QUEST:</span> CERTIFICATS
            </h2>
            <div class="h-1 w-24 bg-lighter mx-auto mt-2 shadow-[0_0_15px_#1b45d7]"></div>
        </div>
        <Carousel :DataLength="projets.length" ref="carousel">
            <Projet 
                v-for="(item, index) in projets" 
                :key="index" 
                class="w-[50%] flex-shrink-0 flex justify-center transition-all duration-500" 
                :item="item"
                :isActive="index === active"
                ImageOnly = true
                @success="unlock"
                @error="notify"
            />
        </Carousel>
    </div>
    
</template>

<style scoped>
    button {
        @apply p-4 rounded-full h-10;
        @apply flex align-middle items-center transition-all font-bold;
        @apply hover:rounded-full;
        @apply bg-normal/70 absolute z-50;
    }
    
    /* button:hover{
        @apply border-neon
    } */

    button:disabled {
        @apply bg-gray-500 opacity-50 hover:border-none hover:ring-gray-500;
    }

    .kboom{
        animation: boom 0.5s ease-in 0.1s;
    }
    @keyframes boom {
  from{
      transform: scale(3.5);
  }
  to{
    transform: scale(1);
  }
}

</style>