<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import OneMenu from '../base/OneMenu.vue';

    const show = ref(false)
    const menuRef = ref(null)
    const textMenu = ref(false)
    const notifSound = new Audio('/notif.mp3')
    notifSound.preload = 'auto'
    notifSound.load()

    function change() { 
        show.value = !show.value
        textMenu.value = false
        notifSound.play()        
     }

    function textMenuChange(){
        textMenu.value = !textMenu.value
    }

     const close = (e)=>{
        if(show.value && menuRef.value && !menuRef.value.contains(e.target)){
            change()
        }
     }

     onMounted(()=>{
        window.addEventListener('click', close)
     })

</script>
<template>
    <div ref="menuRef" class="fixed top-3 left-5 z-[100]" :class="show? 'opacity-100' : 'opacity-[90%]' ">

        <transition-group tag="div" name="menu">
                <OneMenu v-if="show" img="../brain-circuit.png" desc="Compétences" style="--i: 0" lien="#competences" class="all" @clicked="change"/>
        </transition-group>

        <div class="grid grid-cols-[50px_1fr] gap-2 items-center">
            <div class="flex justify-center items-center bg-light transition-all p-1 rounded-full w-10 h-10 border-neon opacity-[70%]" :class="show ? 'w-12 h-12 flex items-center justify-center' : 'my-2'" @click="change">
                <img src="../icons/bars-staggered.png" alt="nah" class="w-6" >
            </div>
            <div v-if="textMenu" class="bg-dark/30 py-3">
                Menu
            </div>
            <transition-group name="menu" tag="div">
                    <OneMenu @clicked="change" v-if="show"  img="../degree.png" desc="Certificats" class="all" lien="#choco" style="--i: 1"/>
                    <OneMenu @clicked="change" v-if="show" img="../graduation-cap.png" desc="Education" class="ml-16 all" lien="#parcours" style="--i: 2"/>
                    <OneMenu @clicked="change" v-if="show" img="../presentation.png" desc="Projets" class="all" lien="#projets" style="--i: 3"/>
            </transition-group>
        </div>

        <transition-group tag="div" name="menu">
        
                <OneMenu @clicked="change" v-if="show" img="/phone-flip.png" desc="Contact" class="all" lien="#contact" style="--i: 4"/>
        </transition-group>
    </div>
</template>

<style scoped>
    .menu-enter-from, .menu-leave-to {
        opacity: 0;
        transform: scaleX(0); 
    }

    .menu-enter-active {
        transition: all 0.3s ease-out;
        transition-delay: calc(var(--i) * 0.1s);
        transform-origin: left; 
    }

    .menu-leave-active {
        transition: all 0.3s ease-out;
        transition-delay: calc(var(--i) * 0.1s);
        transform-origin: left;
    }

    .menu-enter-to, .menu-leave-from {
        opacity: 1;
        transform: scaleX(1);
    }
</style>