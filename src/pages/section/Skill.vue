<template>
    <section class="skill">
        <div class="container">
            <div class="row">
                <div class="col__experience">
                    <div class="card__experience">
                        <div class="card__header">
                            <h6 class="card__title">Front-end developer</h6>
                        </div>
                        <div class="card__experience__container">
                            <article
                                v-for="(item, i) in itemsFront"
                                :key="i"
                                class="items__container"
                            >
                                <span class="items__container__icon fa-solid fa-medal" />
                                <div class="items__container__item">
                                    <h4 class="text-light">{{ item.name }}</h4>
                                    <small class="text-light-small">{{ item.level }}</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="col__experience">
                    <div class="card__experience">
                        <div class="card__header">
                            <h6 class="card__title">Back-end developer</h6>
                        </div>
                        <div class="card__experience__container">
                            <article
                                v-for="(item, i) in itemsBackend"
                                :key="i"
                                class="items__container"
                            >
                                <span class="items__container__icon fa-solid fa-medal" />
                                <div class="items__container__item">
                                    <h4 class="text-light">{{ item.name }}</h4>
                                    <small class="text-light-small">{{ item.level }}</small>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionSkill',
    data() {
        return {
            itemsFront: [
                {name: 'Html', level: 'Experimentado'},
                {name: 'Css', level: 'Experimentado'},
                {name: 'Javascript', level: 'Experimentado'},
                {name: 'Vuejs', level: 'Experimentado'},
                {name: 'Angular', level: 'Intermedio'},
                {name: 'TypeScript', level: 'Intermedio'},
            ],
            itemsBackend: [
                {name: 'Nodejs', level: 'Intermedio'},
                {name: 'Express', level: 'Intermedio'},
                {name: 'Laravel', level: 'Experimentado'},
                {name: 'MySQL', level: 'Experimentado'},
                {name: 'MongoDB', level: 'Intermedio'},
            ],
        }
    },
}
</script>

<style lang="scss" scoped>
    .skill{
        .row{
            display: flex;
            flex-wrap: wrap;
            gap: 2.5rem;
            margin-top: 3rem;
            padding: 2rem;
            border-radius: 20px;
            justify-content: center;
        }
        .col__experience{
            flex: 1 1 40rem;
        }
        .card__experience{
            background-color: var(--bg-dark-variant);
            padding: 2.5rem 5rem;
            border-radius: 5%;
            border: 1px solid transparent;
            .card__header{
                text-align: center;
                margin-bottom: 2rem;
                .card__title{
                    color: var(--text-dark-900);
                    opacity: 75%;
                    font-size: 2rem;
                }
            }
            .card__experience__container{
                padding: 1rem;
                display: flex;
                flex-wrap: wrap;
                gap: 1.5rem;
                justify-content: space-around;
                .items__container{
                    flex: 1 1 40%;
                    display: flex;
                    gap: 1rem;
                    .items__container__icon{
                        color: var(--main-color);
                        display: inline-block;
                        font-size: 1.5rem;
                        margin-top: 5px;
                    }
                    .items__container__item{   
                    }
                }
            }
            &:hover{
                background-color: transparent;
                border: 1px solid var(--bg-dark-100);
            }
        }
    }

    @media screen and (max-width: 600px) {
        .col__experience{
          .card__experience{
            padding: 2rem 3rem; 
          }
        }
    }

</style>