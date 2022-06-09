<template>
    <section class="portafolio-details">
        <div class="container">
            <div class="row">
                <div class="col__content">
                    <div class="card__header">
                        <h3 class="title">Acerda de {{ detail.title }}</h3>
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
                {id: 2, img: ['https://picsum.photos/id/1032/900/400', 'https://picsum.photos/id/1033/900/400', 'https://picsum.photos/id/1036/900/400'], title: 'Sigo', type: 'Pwa', process: '', url: '', description: 'Sigo es una aplicación web progresiva encargada gestionar pedidos, compras, seguimiento de ventas y control de inventario, además de esto, permite administrar usuarios, roles, productos y categorías. Los clientes pueden ingresar y ver el catálago disponible y realizar pedidos mediante un carrito de compra.', skill: ['Vuejs', 'Vuetify', 'Nodejs', 'Express', 'Mysql']},
                {id: 1, img: ['https://picsum.photos/id/1032/900/400', 'https://picsum.photos/id/1033/900/400', 'https://picsum.photos/id/1036/900/400'], title: 'Khatani', type: 'Aplicación web', process: '', url: '', description: 'Kathani es una aplicación web dirigida al sector salud del Ecuador. Esta solución informatica permite getionar las fichas familiares, obstetrias y neonatologías de los pacientes afiliados a un centro de salud, donde los trabajadores de salud podrán realizar un control y seguimiento de los pacientes mediantes las fichas registradas. Además de esto,posee un módulo de datos basicos donde se podrás administrar estos. Posee modulos de reportes estadisticos y estructurdos en formatos pdf.', skill: ['Angular', 'Rxjs', 'Material Design', 'Laravel', 'Mysql']},
                {id: 3, img: ['https://picsum.photos/id/1032/900/400', 'https://picsum.photos/id/1033/900/400', 'https://picsum.photos/id/1036/900/400'], title: 'Panel de administración hca', process: '', url: 'https://app.hcaguanare.com', description: 'Esta aplicación web progresiva permite al taller automotriz HCA la posibilidad de gestionar las ordenes de servicios, tener un control de estas y darle seguimiento. Además de esto, permite gestionar el inventario,  ventas de productos y nominas de los empleados. Ofrece un resumén estadístico de los distintos modulos que conforman la aplicación', skill: ['Quasar', 'Vuejs', 'Laravel', 'Mysql']},
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
        margin: 0 10px 10px 0;
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