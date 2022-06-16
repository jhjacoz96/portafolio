<template>
    <section class="experience">
        <div class="container">
            <div class="row">
                <div
                    v-for="(item, index) in proyects"
                    :key="index"
                    class="col"
                >
                    <router-link :to="`/portafolio/${item.id}`">
                        <div class="card">
                            <img :src="item.img[0]" :alt="item.title">
                            <h6 class="card__title">{{ item.type }}</h6>
                            <div class="card__hover">
                                <h4 class="title">{{ item.title }}</h4>
                                <p class="text-light">
                                    {{ spliceText(item.description) }}
                                </p>
                            </div>
                        </div>
                    </router-link> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'SectionPortafolio',
    computed: {
        ...mapState(['proyects']),
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