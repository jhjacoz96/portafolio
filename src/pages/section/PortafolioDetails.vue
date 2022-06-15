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
export default {
    name: 'PortafolioDetails',
    components: {
        PortafolioDetailsCarrusel,
    },
    data() {
        return {
            details: [
                {id: 2, img: ['https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750007/Portafolio/sigo-8_bddanv.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749781/Portafolio/sigo-1_idxxqd.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749780/Portafolio/sigo-2_nowa0e.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749781/Portafolio/sigo-3_eiawtx.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749778/Portafolio/sigo-4_mk0zh3.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749780/Portafolio/sigo-5_p7p1xi.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750004/Portafolio/sigo-6_ngev34.png'], title: 'SIGO', type: 'Aplicación web', process: '', url: '', description: 'Sigo es una aplicación web encargada gestionar pedidos, compras, seguimiento de ventas y control de inventario, además de esto, permite administrar usuarios, roles, productos y categorías. Los clientes pueden ingresar y ver el catálago disponible y realizar pedidos mediante un carrito de compra.', skill: ['Vuejs', 'Vuetify', 'Nodejs', 'Express', 'Mysql']},
                {id: 1, img: ['https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747426/Portafolio/khatani-1_jngaxp.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747424/Portafolio/ka-thani-4_emufx8.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747423/Portafolio/ka-thani-2_qjwsnh.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747423/Portafolio/ka-thani-3_tig2hu.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747419/Portafolio/ka-thani-7_xodueq.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747422/Portafolio/ka-thani-6_fdnnda.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747419/Portafolio/ka-thani-9_b8ed0a.png'], title: 'KA-THANI', type: 'Aplicación web', process: '', url: '', description: 'Kathani es una aplicación web dirigida al sector salud del Ecuador. Esta solución informatica permite getionar las fichas familiares, obstetrias y neonatologías de los pacientes afiliados a un centro de salud, donde los trabajadores de salud podrán realizar un control y seguimiento de los pacientes mediantes las fichas registradas. Además de esto,posee un módulo de datos basicos donde se podrás administrar estos. Posee modulos de reportes estadisticos y estructurdos en formatos pdf.', skill: ['Angular', 'Rxjs', 'Material Design', 'Laravel', 'Mysql']},
                {id: 3, img: ['https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750017/Portafolio/hca-1_dmecsh.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750011/Portafolio/hca-2_fc4suj.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654873347/Portafolio/hca-3_nw6bks.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654873348/Portafolio/hca-4_a9dpud.png'], title: 'PANEL HCA', type: 'Aplicación web', process: '', url: 'https://app.hcaguanare.net', description: 'Esta aplicación web permite al taller automotriz HCA la posibilidad de gestionar las ordenes de servicios, tener un control de estas y darle seguimiento. Además de esto, permite gestionar el inventario,  ventas de productos y nominas de los empleados. Ofrece un resumén estadístico de los distintos módulos que conforman la aplicación', skill: ['Quasar', 'Vuejs', 'Laravel', 'Mysql']},
            ],
            detail: {id: 0, img: [], title: '', process: '', url: '', description: '', skill: []},
        }
    },
    computed: {
        slides () {
            return this.detail ? this.detail.img.map(item => item) : []
        },
    },
    created () {
        this.getDetail()
    },
    methods: {
        getDetail () {
            this.detail = this.details.find(item => item.id == this.$route.params.id)
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