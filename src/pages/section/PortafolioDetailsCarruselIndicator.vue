<template>
    <div class="carrusel-indicators">
        <button
            v-for="(item, index) in total"
            :key="index"
            class="carrusel-indicator-item"
            :class="{active: currentSlide === index}"
            @click="$emit('switch', index)"
        ></button>
    </div>
</template>

<script>
export default {
    name: 'PortafolioDetailsCarruselIndicator',
    emits: ['switch'],
    props: {
        total: {
            type: Number,
            default: 0,
        },
        currentSlide: {
            type: Number,
            default: 0,
        },
    },
}
</script>

<style lang="scss" scoped>
    .carrusel-indicators{
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
        bottom: -3.5rem;
        background: transparent;
        z-index: 2;
    }
    .carrusel-indicator-item{
        width: 15px;
        height: 15px;
        border: none;
        background: #fff;
        margin: 0.5rem;
        opacity: 0.5;
        border-radius: 50%;
        cursor: pointer;
    }
    .active{
        opacity: 1;

    }

    @media screen and (max-width: 600px) {
        .carrusel-indicators{
            text-align: center;
            width: 100%;
            bottom: -4rem;
        }
    }
</style>