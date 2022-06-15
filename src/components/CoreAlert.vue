<template>
    <Transition name="slide-fade">
    <div
        v-if="open"
        class="alert"
    >
        <div class="alert__content">
            <span class="alert__text text">{{ message }}</span>
            <button
                class="btn btn__text"
                @click.prevent="close()"
            >Cerrar</button>
        </div>
    </div>
    </Transition>
</template>

<script>
export default {
    name:   'CoreAlert',
    data() {
        return {
            alertIterval: null,
            message: '',
            open: false,
        }
    },
    computed: {
    },
    watch: {
    },
    methods: {
        close () {
            this.open = false
            clearTimeout(this.alertIterval)
        },
        openAlert (value) {
            this.close()
            this.message = value.message
            this.open = true
            this.alertIterval = setTimeout(() => {
                this.close()
            }, 3000)
        },
        
    },
    mounted () {
        this.emitter.on('openAlert', this.openAlert)
    },
}
</script>

<style lang="scss" scoped>
    .alert{
        position: fixed;
        bottom: 7rem;
        background: var(--bg-dark-100);
        width: 40rem;
        height: 5rem;
        left: calc(50vw - 20rem);
        z-index: 3000;
        border-radius: 3px;
        padding: 1rem 1.5rem;
        &__content{
            display: flex;
            justify-content: space-between;
        }
        &__text{
            margin-top: .5rem;
            padding: 0;
            display: inline-block;
        }
    }

    .slide-fade-enter-active,
    .slide-fade-leave-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
    }

</style>