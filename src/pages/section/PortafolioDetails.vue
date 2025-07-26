<template>
    <section class="portafolio-details">
        <div class="wrapper">
            <div class="row">
                <div class="col__content order-2 sm:order-1">
                    <div class="card__header">
                        <div style="display:flex; align-items: center; gap:1rem; margin-bottom: .5rem;">
                            <h3 class="title" style="margin:0;padding:0;">Acerda de {{ detail.title }}</h3>
                            <a
                                v-if="detail.url"
                                class="btn"
                                :href="detail.url"
                                target="_blank"
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


                    <BaseTab>
                        <template v-slot:description>
                            <p class="text-light">{{ detail.description }}</p>
                        </template>
                        <template v-slot:contribution>
                            <ul>
                                <li
                                    v-for="(contribution, keyContribution) in detail.contributionsList"
                                    :key="keyContribution"
                                    class="text-light decoration list-disc ml-6"
                                >
                                    {{contribution}}
                                </li>
                            </ul>
                        </template>
                    </BaseTab>


                </div>
                <div class="col__carrusel order-1 sm:order-2 mb-[30px]">
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
import BaseTab from '@/components/BaseTab'
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'PortafolioDetails',
    components: {
        PortafolioDetailsCarrusel,
        BaseTab,
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
        justify-items: center;
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