<template>
    <section class="experience">
        <div class="container">
            <div class="row">
                <div
                    v-for="(item, index) in experiences"
                    :key="index"
                    class="col"
                >
                    <div class="card">
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
                    </div>
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
                {id: 1, img: 'https://picsum.photos/id/1032/900/400', title: 'Aplicación web', url: 'https://app.hcaguanare.com', details: ''},
                {id: 2, img: 'https://picsum.photos/id/1033/900/400', title: 'Aplicación web', url: '', details: ''},
                {id: 3, img: 'https://picsum.photos/id/1036/900/400', title: 'Pwa', url: '', details: 'https://app.hcaguanare.com'},
            ],
        }
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
        border-radius: 20px;
        justify-content: center;
    }
    .col{
        flex: 1 1 30rem;
    }
    .card{
        background-color: var(--bg-dark-variant);
        box-shadow: 2px 3px 12px -8px #122640;
        border-radius: 10px;
        border: 1px solid transparent;
        position: relative;
        &:hover{
            background-color: transparent;
            border: 1px solid var(--bg-dark-100);
        }
        
    }
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
            gap: 1.2rem;
        }
     }

     @media screen and (max-width: 600px) {
         .col{
            flex: 1 1 100%;
            gap: 1rem;
        }
     }

</style>