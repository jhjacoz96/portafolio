<template>
    <section class="experience">
        <div class="container">
            <div class="row">
                <div
                    v-for="(item, index) in experiences"
                    :key="index"
                    class="col"
                >
                    <router-link :to="`/portafolio/${item.id}`">
                        <div class="card">
                            <img :src="item.img" :alt="item.title">
                            <h6 class="card__title">{{ item.type }}</h6>
                            <div class="card__hover">
                                <h4 class="title">{{ item.title }}</h4>
                                <p class="text-light">
                                    {{ spliceText(item.description) }}
                                </p>
                            </div>
                        </div>
                    </router-link> 
                    <!-- <div class="card">
                        <div class="card__container">
                            <div class="card__container-image">
                                <img :src="item.img" :alt="item.title">
                            </div>
                            <h6 class="card__title">{{ item.title }}</h6>
                            <div class="card__action">
                                <button
                                    v-if="item.url"
                                    class="btn"
                                    item
                                    :href="item.url"
                                >Live</button>
                                <button
                                    class="btn btn__primary"
                                    @click="$router.push(`/portafolio/${item.id}`)"
                                >Detalle</button>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionPortafolio',
    data() {
        return {
            experiences: [
                {id: 2, img: 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750007/Portafolio/sigo-8_bddanv.png', title: 'SIGO', type: 'Apliación web progresiva', process: '', url: '', description: 'Sigo es una aplicación web progresiva encargada gestionar pedidos, compras, seguimiento de ventas y control de inventario, además de esto, permite administrar usuarios, roles, productos y categorías. Los clientes pueden ingresar y ver el catálago disponible y realizar pedidos mediante un carrito de compra.', skill: ['Vuejs', 'Vuetify', 'Nodejs', 'Express', 'Mysql']},
                {id: 1, img: 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747426/Portafolio/khatani-1_jngaxp.png', title: 'KA-THANI', type: 'Aplicación web', process: '', url: '', description: 'Kathani es una aplicación web dirigida al sector salud del Ecuador. Esta solución informatica permite getionar las fichas familiares, obstetrias y neonatologías de los pacientes afiliados a un centro de salud, donde los trabajadores de salud podrán realizar un control y seguimiento de los pacientes mediantes las fichas registradas. Además de esto,posee un módulo de datos basicos donde se podrás administrar estos. Posee modulos de reportes estadisticos y estructurdos en formatos pdf.', skill: ['Angular', 'Rxjs', 'Material Design', 'Laravel', 'Mysql']},
                {id: 3, img: 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750017/Portafolio/hca-1_dmecsh.png', title: 'PANEL HCA', type: 'Apliación web progresiva', process: '', url: 'https://app.hcaguanare.com', description: 'Esta aplicación web progresiva permite al taller automotriz HCA la posibilidad de gestionar las ordenes de servicios, tener un control de estas y darle seguimiento. Además de esto, permite gestionar el inventario,  ventas de productos y nominas de los empleados. Ofrece un resumén estadístico de los distintos modulos que conforman la aplicación', skill: ['Quasar', 'Vuejs', 'Laravel', 'Mysql']},
            ],
        }
    },
    methods: {
        spliceText (value) {
            let text = value.length > 100 ? `${value.slice(0, 100)}...` : value
            return text
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
        border-radius: 20px;
        justify-content: center;
    }
    .col{
        flex: 1 1 30%;
        max-width: 30%;
    }
    .card {
        background-color: var(--bg-dark-variant);
        box-shadow: 2px 3px 12px -8px #122640;
        border-radius: 10px;
        border: 1px solid transparent;
        padding: 1.5rem;
        text-align: center;
        cursor: pointer;
        position: relative;
        &:hover{
            .card__hover{
                opacity: 1;
                visibility: visible;
            }
        }
        img{
             border-radius: 10px;
        }
    }
    .card__hover{
        padding: 1.5rem;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba($color: #2c2c6c, $alpha: 0.9);
        border-radius: 10px;
        opacity: 0;
        top: 0;
        left: 0;
        visibility: hidden;
        transition: all 500ms ease-out;
    }
    /*.card{
        background-color: var(--bg-dark-variant);
        box-shadow: 2px 3px 12px -8px #122640;
        border-radius: 10px;
        border: 1px solid transparent;
        position: relative;
        &:hover{
            background-color: transparent;
            border: 1px solid var(--bg-dark-100);
        }
        
    }*/
    // .tag{
    //     background-color: blue;
    //     padding: 0 0.75rem;
    //     border-radius: 9999px;
    //     color: #5443c3;
    //     background-color: #ddd9f7;
    //     box-shadow: 2px 2px 4px rgb(47 46 139 / 43%);
    // }
    .card__container{
        padding: 1.9rem 2rem;
    }
    .card__container-image{
        border-radius: 10px;
        overflow: hidden;
    }
    .card__title{
        color: var(--text-dark-900);
        opacity: 75%;
        font-size: 1.8rem;
        margin: 1.2rem 0 2rem;
    }
    .card__action{
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
    }

     @media screen and (max-width: 1024px) {
        .col{
            flex: 0 0 45%;
            max-width: 45%;
             gap: 1.2rem;
        }
     }

     @media screen and (max-width: 600px) {
         .col{
            flex: 0 0 100%;
             max-width: 100%;
            gap: 1rem;
        }
     }

</style>