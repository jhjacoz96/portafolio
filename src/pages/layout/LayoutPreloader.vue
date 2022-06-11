<template>
    <div
        v-if="isLoaded"
        class="page-loader"
    >
        <div class="loader">
            <div class="ball"></div>
            <div class="ball"></div>
            <div class="ball"></div>
            <span class="loader__text">Cargando...</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LayoutPreloader',
    data() {
        return {
            isLoaded: true,
        }
    },
    mounted() {
        this.loader()
    },
    methods: {
        loader () {
            document.onreadystatechange = () => {
                if (document.readyState === 'complete') {
                    this.isLoaded = false
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .page-loader{
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        background: var(--bg-dark-900);
        z-index: 20000;
        width: 100vw;
        height: 100vh;
    }
    .loader {
        width: 120px;
        height: 75px;
        display: flex;
        flex-wrap: wrap;
        align-items: flex-end;
        justify-content: space-between;
        .ball{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background-color: var(--main-color);
            animation: bounce .5s alternate infinite;
            &:nth-child(2){
                animation-delay: .16s;
            }
            &:nth-child(3){
                animation-delay: .32s;
            }
        }
        &__text{
            color: var(--text-dark-900);
            font-size: 2rem;
            text-transform: uppercase;
            margin: auto;
        }
    }
    @keyframes bounce{
        from{
            transform: scaleX(1.25);
        }
        to{
            transform: translateY(-50px) scaleX(1);
        }
    }
</style>