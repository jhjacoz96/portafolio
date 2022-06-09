<template>
        <button class="carrusel-control left" @click="$emit('prev')"><span class="text fa-solid fa-arrow-left" /></button>
        <button class="carrusel-control right" @click="$emit('next')"><span class="text fa-solid fa-arrow-right" /></button>
</template>

<script>
export default {
    name: 'PortafolioDetailsCarruselControls',
    emits: ['prev', 'next'],
}
</script>

<style lang="scss" scoped>
    .carrusel-control{
        background-color: rgba($color: #0000, $alpha: 0.5);
        border: none;
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        top: calc(50% - 25px);
        color: #f3f3f3;
        cursor: pointer;
    }
    .left{
        left: 2rem;
    }
    .right{
        right: 2rem;
    }
</style>