<template>
    <transition :name="transitionEffect">
        <div
            v-show="currentSlide === index"
            @mouseenter="$emit('mouseenter')"
            @mouseout="$emit('mouseout')"
            class="carrusel-item"
        >
            <div style="width: 100%; height: 100%;">

                <img class="carrusel-item__img" :src="slide" alt="">
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'PortafolioDetailsCarruselItem',
    emits: ['mouseenter', 'mouseout'],
    props: {
        slide: {
            type: String,
            default: '',
        },
        currentSlide: {
            type: Number,
            default: 0,
        },
        index: {
            type: Number,
            default: 0,
        },
        direction: {
            type: String,
            default: '',
        },
    },
    computed: {
        transitionEffect () {
            return this.direction === 'right' ? 'slide-out' : 'slide-in'
        },
    }
}
</script>

<style lang="scss" scoped>
    .carrusel-item{
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
                // width: 100%;
        &__img{
                object-fit: contain;
                // width:100px;
                height: 40rem;
        }
    }
    .slide-in-enter-active,
    .slide-in-leave-active,
    .slide-out-enter-active,
    .slide-out-leave-active
    {
        transition: all 1s ease-in-out;
    }

    .slide-in-enter-from {
        transform: translateX(-100%);
    }
    .slide-in-leave-to {
        transform: translateX(100%);
    }

    .slide-out-enter-from {
        transform: translateX(100%);
    }
    .slide-out-leave-to {
        transform: translateX(-100%);
    }

</style>