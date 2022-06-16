<template>
    <section class="portafolio-details">
        <div class="container">
            <div class="row">
                <div class="col__content">
                    <div class="card__header">
                        <div style="display:flex; align-items: center; gap:1rem; margin-bottom: .5rem;">
                            <h3 class="title" style="margin:0;padding:0;">Acerda de {{ detail.title }}</h3>
                            <a
                                v-if="detail.url"
                                class="btn"
                                :href="detail.url"
                            >
                                <span class="fa-solid fa-up-right-from-square"></span>
                            </a>
                        </div>
                        <span
                            v-for="(item, index) in detail.skill"
                            :key="index"
                            class="tag"
                        >{{ item }}</span>
                    </div>
                    <p class="text-light">{{ detail.description }}</p>
                </div>
                <div class="col__carrusel">
                    <div>
                        <PortafolioDetailsCarrusel
                            :slides="slides"
                            :interva="5000"
                            controls
                            indicators
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import PortafolioDetailsCarrusel from './PortafolioDetailsCarrusel'
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'PortafolioDetails',
    components: {
        PortafolioDetailsCarrusel,
    },
    data() {
        return {
            detail: {id: 0, img: [], title: '', process: '', url: '', description: '', skill: []},
        }
    },
    computed: {
        ...mapState(['proyects']),
        ...mapGetters(['filterProyect']),
        slides () {
            return this.detail ? this.detail.img.map(item => item) : []
        },
    },
    created () {
        this.getDetail()
    },
    methods: {
        getDetail () {
            this.detail = this.filterProyect(this.$route.params.id)
        },
    },
}
</script>

<style lang="scss" scoped>
    .row{
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem;
        margin-top: 3rem;
        padding: 2rem;
        justify-content: center;
    }
    .col__content{
        flex: 1 1 40%;
    }
    .col__carrusel{
        flex: 2 2 50%;
    }

    .card__header{
        margin-bottom: 2rem;
    }

    .title{
        margin-bottom: 1rem;
    }

   .tag {
        background: var(--main-color);
        border-radius: 50px;
        color: #999;
        display: inline-block;
        height: 26px;
        line-height: 26px;
        padding: 0 20px 0 23px;
        margin: 5px 10px 10px 0;
        text-decoration: none;
        color: var(--text-dark-900);
        font-size: 1.4rem;
    }

    @media screen and (max-width: 1024px) { 
        .col__content{
            flex: 1 1 100%;
        }
        .col__carrusel{
            flex: 1 1 100%;
        }
    }

    @media screen and (max-width: 600px) {
        .col__content{
            flex: 1 1 100%;
        }
        .col__carrusel{
            flex: 1 1 100%;
        }
    }

</style>