<script setup>
    defineProps({
        desc :String,
        img : String,
        lien: String,
    })

    const emit = defineEmits(['clicked'])
    function send() {
        emit('clicked')
    }
</script>

<template>
    <div class="my-2">
        <a :href="lien" @click="send">
            <div class="flex p-2  bg-normal/85 items-center hover:border-neon hover:rounded-lg rounded-lg transition-all w-[150px]">
                <div class=" p-1 bg-light/70 rounded-full w-10 flex items-center justify-center">
                    <img :src="img" alt="nah" class="w-7 shadow-neon">
                </div>
                <p class=" p-2">{{ desc }}</p>
            </div>
        </a>
    </div>
</template>
