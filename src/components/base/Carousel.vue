<script setup>
    import { provide, ref } from 'vue';
    const activeIndex = ref(0)

    function next() {
        activeIndex.value++;
    }
    function prev() {
        activeIndex.value--;
    }
    defineProps({
        DataLength: {
            type: Number,
        }
    })
    defineExpose({activeIndex})

</script>
<template>
    <div class="relative flex justify-center items-center overflow-hidden w-full">
        
        <button class="left-3 z-50" :disabled="activeIndex == 0" @click="prev"><</button>

        <div class="w-full">
            <div 
                :class="['flex transition-transform duration-500 ease-in-out']" 
                :style="{ transform: `translateX(calc(25% - ${activeIndex * 54}%))` }"
            >
                <slot ></slot>
            </div>
        </div>
        
        <button class="right-3 z-50" @click="next" :disabled="activeIndex == DataLength - 1">></button>
    </div>
</template>
