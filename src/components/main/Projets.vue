<script setup>
    import Projet from './Projet.vue';
    import Carousel from '../base/Carousel.vue';
import { computed, onMounted, ref } from 'vue';
    const projets = ref([
  {
    id: 0, 
    title: "Gestion de Bibliothèque", 
    image: "/biblio.jpg", 
    description: "Facilite la gestion de bibliotheque (projet academique)",
    stack: ["Qt", "C++", "MySQL"],
  },
  {
    id: 4, 
    title: "E-skoto", 
    image: "/Digitalisation.png", 
    description: "Numérisation de fiches papier pour l'archivage numérique des renseignements.",
    stack: ["HTML", "CSS", "PHP", "MySQL"],
  },
  {
    id: 1, 
    title: "Mini RPG", 
    image: "/game.png", 
    description: "Jeu RPG en 2D visible dans le navigateur(Gestion des maps via Tiled)",
    stack: ["JS", "JSON"],
  },
  {
    id: 3, 
    title: "Toolgam Desktop", 
    image: "/toolgam.png", 
    description: "Suite d'outils de productivité (chrono, calcul) encapsulée dans une application Electron.",
    stack: ["Electron", "JS"],
  },
  {
    id: 5, 
    locked: true, 
    title: "Portfolio", 
    image: "/vue.png", 
    description: "Interface inspiré d'un certain jeu avec des animations fluides.",
    stack: ["VueJS", "Tailwind CSS"],
  },
  {
    id: 2, 
    locked: true, 
    title: "Cube 3D Interactif", 
    image: "/cube.png", 
    description: "Creation d'un cube 3D rotatif en html et css pur",
    stack: ["HTML", "CSS"],
  },
]);
    const carousel = ref(null)
    const emit = defineEmits(['error'])
    
    const active = computed(()=>{
        if(!carousel.value) return 0
        return carousel.value.activeIndex
    })

    const title = ref(null)
    onMounted(() => {
        const observer = new IntersectionObserver((elem)=>{
            elem.forEach(el => {
                if(el.isIntersecting){
                    el.target.classList.add('kaboom')
                    observer.unobserve(el.target)
                }
            });
        }, {})  

        if (title.value) {
            observer.observe(title.value)
        }
        
    })

    function unlock(id){
       const projet = projets.value.find(proj => proj.id === id)
       projet.locked  = false
    }

    function notify(message) { 
        emit('error', message)        
    }
</script>

<template>
    <div>

        <div class="mb-12 text-center">
            <h2 ref="title" class="text-3xl font-black italic tracking-tighter text-white uppercase">
                <span class="text-lighter">QUEST:</span> PROJETS
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
                @success="unlock"
                @error="notify"
            />
        </Carousel>
    </div>
    
</template>

<style>
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

    .kaboom{
            animation: boom 0.5s ease-in 0.3s;
        }
</style>