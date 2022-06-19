<template>
    <div class="home-layout">
        <slot />
    </div>
</template>

<script setup>

const count = 1;
</script>

<style scoped>
.home-layout {
    width: 100%;
    max-width: 640px;
    margin: 0 auto;
}
</style>