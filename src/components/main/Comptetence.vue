<script setup>


    defineProps({
        image: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: 'Skill'
        },
        progress: {
            type: String,
            default: '50%' 
        }
    });
</script>

<template>
        <div class="grid grid-cols-[25px_70px_1fr] items-center gap-2">
            <img :src="image" alt="o" class="shadow-neon object-cover w-6">
            <p>{{label}}</p>
            <div class="border-neon rounded-neon w-28 h-4 flex justify-start">
                <div 
                    class="border-neon rounded bg-blue-200 h-2"
                    :style="{width: progress}"
                ></div>
            </div>
        </div>
</template>