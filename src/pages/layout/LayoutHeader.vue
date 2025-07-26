<template>
    <div class="header">
        <h4
            class="header__heading"
            :class="{visibility: $route.name === 'Inicio'}"

        >
            <span
                class="sm:hidden fa-solid fa-arrow-left text-[20px] text-[var(--main-color)]"
                @click="$router.go(-1)"
            />
            {{ $route.name }}
        </h4>
        <div class="header__options">
            <button
                id="menu-bars"
                @click="active()"
            >
                <i
                    class="fa-solid"
                    :class="{ 'fa-times': this.modelValue, 'fa-bars': !this.modelValue }"
                />
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CoreHeader',
    emit:['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        active () {
            this.$emit('update:modelValue', !this.modelValue)
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
        cursor: pointer;
    }

    .header__heading{
            font-size: 2rem;
            color: var(--text-dark-900);
            text-transform: uppercase;
            position: relative;
            font-weight: bold;
            display: flex;
            // justify-items: center;
            align-items: center;
            gap: 10px;
        &:before{
            content: '';
            position: absolute;
            background-color: var(--main-color);
            width: 50px;
            height: 4px;
            top:100%;
            left: 0;
            margin-top: .5rem
        }
        &:after{
            content: '';
            position: absolute;
            background-color:var(--main-color);
            width: 25px;
            height: 4px;
            top:100%;
            left: 0;
            margin-top: 1.5rem;
        }
    }

    /* Media queries */

    .visibility{
        visibility: hidden;
    }

    @media screen and (max-width: 1024px) {
        #menu-bars {
            display: initial;
        }
    }

</style>