<template>
    <div>
        <header
        :class="{active: activeDrawerComputed}"
        >
            <a
                href="#"
                class="logo"
            >
                Jhon
                <span>Contreras</span>
            </a>
            <nav class="navbar">
                <router-link to="/">Inicio</router-link> 
                <router-link to="/about">Sobre mi</router-link> 
                <router-link to="/skill">Experiencia</router-link>
                <router-link to="/portafolio">Portafolio</router-link>
                <router-link to="/contact">Contacto</router-link>
            </nav>
            <div class="follow">
                <a href="a" class="fa-brands fa-github"></a>
                <a href="a" class="fa-brands fa-linkedin"></a>
            </div>
        </header>
    </div>
</template>
<script>
export default {
    name: 'CoreDrawer',
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
}
</script>
<style>
    header {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        background: var(--bg-dark-100);
        display: flex;
        align-items: center;
        border-end-end-radius: 40px;
        border-start-end-radius: 40px;
        justify-content: space-between;
        box-shadow: 3px 3px 15px rgb(#122640 / 41%);
        z-index: 1000;
        flex-flow: column;
        padding: 8rem 2rem;
        width: 30rem;
        text-align: center;
    }

    header .logo{
        text-transform: uppercase;
        color: var(--text-dark-900);
        font-size: 2.5rem;
        font-weight: bolder;
    }

    header .logo span {
        text-transform: uppercase;
        color: var(--main-color);
    }

    header .navbar a{
        display: block;
        font-size: 2rem;
        color: var(--text-dark-900);
        margin: 2rem 0;
        cursor: pointer;
    }

    header .navbar a:hover {
        letter-spacing: .2rem;
        color: var(--main-color);
    }

    header .follow a {
        font-size: 2.5rem;
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
        }

        .active {
            left: 0%;
        }

    }

</style>