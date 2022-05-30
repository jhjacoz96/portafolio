<template>
    <div class="header">
        <h1 class="header__heading">{{ $route.params.name }}</h1>
        <div class="header__options">
            <button
                id="menu-bars"
                @click="active()"
            >
                <i
                    class="fa-solid"
                    :class="{ 'fa-times': this.activeDrawer, 'fa-bars': !this.activeDrawer }"
                />
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CoreHeader',
    props: {
        activeDrawer: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        activeDrawerComputed: {
            get () {
                return this.activeDrawer
            },
            set (value) {
                this.$emit('update:activeDrawer', value)
            },
        },
    },
    methods: {
        active () {
            this.activeDrawerComputed = !this.activeDrawerComputed
        },
    },
}
</script>
<style lang="scss" scoped>

    .header{
        padding: 1.5rem 2rem;
        display: flex;
        justify-content: space-between;
    }
    
    #menu-bars {
        z-index: 10000;
        background:  transparent;
        color: var(--main-color);
        border-radius: .5rem;
        font-size: 3rem;
        display: none;
    }

    .header__heading{
            font-size: 3rem;
            color: var(--text-dark-900);
            text-transform: uppercase;
            position: relative;
        &:before{
            content: '';
            position: absolute;
            background-color: var(--main-color);
            width: 50px;
            height: 4px;
            top:100%;
            left: 0;
        }
        &:after{
            content: '';
            position: absolute;
            background-color:var(--main-color);
            width: 25px;
            height: 4px;
            top:100%;
            left: 0;
            margin-top: 8px;
        }
    }

    /* Media queries */

    @media screen and (max-width: 1024px) {
        
      #menu-bars {
        display: initial;
      }

    }

</style>