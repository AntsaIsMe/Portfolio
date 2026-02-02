<script setup>
    import { onMounted } from 'vue';
import Container from './Container.vue';
    defineProps({
        titre : String,
        contenu: String,
        fozzy : {
            type : Boolean,
            default: false
        },
    })

    
</script>

<template>
    <div  class="fixed back animate-in flex items-center justify-center  w-full h-full z-[1000]"
          :class="fozzy ? 'bg-normal/90' : 'bg-normal/40'"
    >
        <div class="mx-5 mt-[-50px]">
            <div class="w-[30%] h-1 rounded-t-md bg-blue-200 border-t-2 border-lighter"></div>
            <div class="top-anim ">
                <div class="back-anim border-x-2 border-lighter">

                    <Container class="relative notif bg-darker/70 backdrop-blur-xl pb-8 pt-4" >
                        <div class="p-2 noto flex gap-2 justify-center items-center border-y-2 rounded-md border-2 border-blue-200 rounded-sm',
                        'ring-2 ring-lighter'">
                            <img class="ico drop-shadow-[-1px_0px_20px_#7493ff] w-6 h-6 object-cover" src="/info.png" alt="i">
                            <h1 class="text-lg titre">{{titre || "Notification"}}</h1>
                        </div>
                        <p class="mt-6 text-lg contenu text-justify">{{ contenu || "Le systeme vous souhaite la bienvenue" }}</p>
                    </Container>

                </div>
            </div>
            <div class="flex justify-end ">
                <div class="w-[30%] h-1 rounded-b-md bg-blue-200 "></div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    @keyframes systemOpen {
    0% { transform: scaleX(0.01) scaleY(0); opacity: 0; }
    50% { transform: scaleX(1) scaleY(0.01); opacity: 1; }
    100% { transform: scaleX(1) scaleY(1); opacity: 1; }
}

.animate-in {
    animation: systemOpen 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.back-anim{
    /* @apply border-y-8 border-indigo-300  ; */
    @apply bg-dark/90  p-6;
}

.top-anim{
    @apply border-y-[4px] border-blue-200 px-8 rounded-es-2xl rounded-se-2xl;
}

@media (max-width : 350px) {
    .contenu{
        font-size: medium;
        line-height: 20px;

    }
    .titre{
        @apply pr-3
    }

    .ico{
        @apply ml-3
    }
}

</style>