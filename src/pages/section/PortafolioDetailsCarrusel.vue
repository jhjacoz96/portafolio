<template>
    <div class="carrusel">
        <div class="carrusel-inner">
            <PortafolioDetailsCarruselItem
                v-for="(slide, index) in slides"
                :key="index"
                :slide="slide"
                :current-slide="currentSlide"
                :direction="direction"
                :index="index"
                @mouseenter="stopSlideTimer"
                @mouseout="stopSlideTimer"
            />
            <PortafolioDetailsCarruselControls
                v-if="controls"
                @prev="prev"
                @next="next"
            />
        </div>
        <PortafolioDetailsCarruselIndicator
            v-if="indicators"
            :total="slides.length"
            :current-slide="currentSlide"
            @switch="switchSlice($event)"
        />
    </div>
</template>

<script>
import PortafolioDetailsCarruselItem from './PortafolioDetailsCarruselItem.vue'
import PortafolioDetailsCarruselControls from './PortafolioDetailsCarruselControls.vue'
import PortafolioDetailsCarruselIndicator from './PortafolioDetailsCarruselIndicator.vue'
export default {
    name: 'PortafolioDetailsCarrusel',
    components: {
        PortafolioDetailsCarruselItem,
        PortafolioDetailsCarruselControls,
        PortafolioDetailsCarruselIndicator,
    },
    props: {
        slides: {
            type: Array,
            default: () => ([]),
        },
        controls: {
            type: Boolean,
            default: false,
        },
        indicators: {
            type: Boolean,
            default: false,
        },
        interval: {
            type: Number,
            default: 5000,
        },
    },
    data() {
        return {
            currentSlide: 0,
            slideInterval: null,
            direction: 'right',
        }
    },
    methods: {
        setCurrentSlide (index) {
            this.currentSlide = index
        },
        prev (step = -1) {
            const index  = this.currentSlide > 0 ? this.currentSlide + step : this.slides.length - 1
            this.setCurrentSlide(index)
            this.direction = 'left'
            this.startSlideTimer()
        },
        _next (step = 1) {
            const index  = this.currentSlide < this.slides.length - 1 ? this.currentSlide + step : 0
            this.setCurrentSlide(index)
            this.direction = 'right'
        },
        next (step = 1) {
            this._next(step)
            this.startSlideTimer()
        },
        startSlideTimer () {
            this.stopSlideTimer()
            this.slideInterval = setInterval(() => {
                this._next()
            }, this.interval)
        },
        stopSlideTimer () {
            clearInterval(this.slideInterval)
        },
        switchSlice (index) {
            const step = index - this.currentSlide
            if (step > 0) { this.next(step) }
            else { this.prev(step) }
        },
    },
    mounted() {
        this.startSlideTimer()
    },
    beforeUnmount() {
        this.stopSlideTimer()
    },
}
</script>

<style lang="scss" scoped>
    .carrusel{
        display: flex;
        justify-content: center;
        position: relative;
    }
    .carrusel-inner{
        position: relative;
        width: 100%;
        height: 40rem;
        overflow: hidden;
        background-color: #000;
    }

    @media screen and (max-width: 600px) {
        .carrusel{
            margin-top: 2rem;
        }
    }
</style>