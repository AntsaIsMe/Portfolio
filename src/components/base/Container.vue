<script setup>
    defineProps({
        round: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <div :class="[
        'm-3', 
        'border-neon',
        round ? 'rounded-neon' : 'rounded-xl p-7']">
        <slot></slot>
    </div>
    
</template>