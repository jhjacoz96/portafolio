<template>
    <Transition name="slide-fade">
    <div
        v-if="modelValue"
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
    emit:['update:modelValue'],
    props: {
        message: {
            type: String,
            default: 'Mensaje enviado con exito',
        },
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            alertIterval: null,
        }
    },
    watch: {
        modelValue (value) {
            if (value) {
                this.alertIterval = setTimeout(() => {
                    this.$emit('update:modelValue', false)
                }, 5000)
            }
        },
    },
    methods: {
        close () {
            this.$emit('update:modelValue', false)
            clearTimeout(this.alertIterval)
        },
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