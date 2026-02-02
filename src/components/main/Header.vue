<script setup>
    import { ref } from 'vue';
    import Container from '../base/Container.vue';
    import { storeUse } from '@/composables/money'; 

    const money = ref(storeUse().getMoney())
</script>
<template>
    <Container class="mt-1 bg-normal/20 con">
        <div class="grid grid-cols-[1fr_50px]">
            <div>
                <h2 class="text-3xl font-black italic tracking-tighter text-white uppercase portfolio">
                    PORTFOLIO <span class="text-lighter">LEVELING</span>
                </h2>
            </div>
            <div class="flex gap-1 justify-center items-center">
                <img src="/coin.png" class="w-5 h-5 drop-shadow-[-1px_0px_1px_#7493ff]" alt="money">
                <p class="italic">{{ money }}</p>
            </div>
        </div>
        <p class="italic mt-5 mb-0 slogan"> "Coder avec élegance est une priorité, un peu de bleu et de néon pour l'intensité"</p>
    </Container>
</template>

<style scoped>
    @media (max-width:410px) {
        .portfolio{
            font-size: larger;
        }
        .slogan{
            font-size: small;
            margin-top: 1px;
        }
        .con{
            padding: 15px;
        }
    }
</style>