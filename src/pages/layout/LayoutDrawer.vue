<template>
    <header
    class="shadow-xl shadow-drawer"
    :class="{active: modelValue}"
    >
        <a
            href="#"
            class="logo"
        >
            Jhon
            <span>Contreras</span>
        </a>
        <nav class="navbar">
            <router-link to="/" @click="closeDrawer()">Inicio</router-link> 
            <router-link to="/about" @click="closeDrawer()">Sobre mi</router-link> 
            <!-- <router-link to="/skill" @click="closeDrawer()">Tecnologías</router-link> -->
            <router-link to="/experience" @click="closeDrawer()">Resumen</router-link>
            <router-link :class="{ active: $route.path.startsWith('/portafolio') }" to="/portafolio" @click="closeDrawer()">Portafolio</router-link>
            <router-link to="/contact" @click="closeDrawer()">Contacto</router-link>
        </nav>
        <!-- <div class="follow">
            <a href="a" class="fa-brands fa-github"></a>
            <a href="a" class="fa-brands fa-linkedin"></a>
        </div> -->
    </header>
    <div
        v-if="modelValue"
        class="backdrawer"
        @click="closeDrawer()"
    />
</template>
<script>
export default {
    name: 'CoreDrawer',
    emit:['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
    },
    methods: {
        closeDrawer () {
            this.$emit('update:modelValue', false)
        }
    },
}
</script>
<style scoped>
.shadow-drawer {
  --mi-shadow-color: rgba(15, 23, 42, 0.4);
  box-shadow:
    0 10px 15px -3px var(--mi-shadow-color),
    0 4px 6px -4px var(--mi-shadow-color);
}
    .backdrawer{
        min-height: 100vh !important;
        height: 100% !important;
        width: 100% !important;
        background: var(--bg-dark-900) !important;
        opacity: .5!important;
        z-index: 500 !important;
        position: absolute !important;
        top: 0 !important;
        left: 0 !important;
        transition: all .5s ease !important;
    }
    header {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        background: #0f172a;
        display: flex;
        align-items: center;
        border-end-end-radius: 40px;
        border-start-end-radius: 40px;
        justify-content: flex-start;
        box-shadow: 3px 3px 15px rgb(#122640 / 41%);
        z-index: 1000;
        flex-flow: column;
        padding: 8rem 2rem;
        width: 25rem;
        text-align: center;
        transition: all .5s ease;
    }

    header .logo{
        text-transform: uppercase;
        color: var(--text-dark-900);
        font-size: 2rem;
        font-weight: bolder;
    }

    header .logo span {
        text-transform: uppercase;
        color: var(--main-color);
    }

    header .navbar {
        margin-top: 4rem;
        min-height: 280px;
        width: 100%;
    }
    header .navbar a{
        display: block;
        font-size: 1.7rem;
        color: var(--text-dark-900);
        margin: 2rem 0;
        cursor: pointer;
        width: 100%;
    }

    header .navbar a:hover {
        letter-spacing: .2rem;
        color: var(--main-color);
    }
    header .navbar .active, .exact-active {
        letter-spacing: .2rem;
        color: var(--main-color);
    }

    header .follow a {
        font-size: 2rem;
        color: #fff;
        margin: 0 .7rem; 
    }

    header .follow a:hover {
        color: var(--main-color); 
    }




    /* Media queries */

    @media screen and (max-width: 1024px) {
        
        header {
            left: -120%;
            width: 30rem;
        }

        .active {
            left: 0%;
        }

    }

</style>