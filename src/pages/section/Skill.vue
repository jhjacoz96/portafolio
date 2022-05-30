<template>
    <section class="skill">
        <h1 class="heading">Experiencia</h1>
        <div class="containerr">
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
                                    <h4>{{ item.name }}</h4>
                                    <small class="text-light">{{ item.level }}</small>
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
                                    <h4>{{ item.name }}</h4>
                                    <small class="text-light">{{ item.level }}</small>
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
        .heading{
            font-size: 3rem;
            color: var(--text-dark-900);
            text-transform: uppercase;
            position: relative;
        }
        .heading::before{
            content: '';
            position: absolute;
            background-color: var(--main-color);
            width: 50px;
            height: 4px;
            top:100%;
            left: 0;
        }
        .heading::after{
            content: '';
            position: absolute;
            background-color:var(--main-color);
            width: 25px;
            height: 4px;
            top:100%;
            left: 0;
            margin-top: 8px;
        }
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
                        color: var(--text-dark-900);
                        font-size: 1.7rem;
                        opacity: 60%;    
                        .text-light{
                            opacity: 38%;
                        }                   
                    }
                }
            }
            &:hover{
                background-color: transparent;
                border: 1px solid var(--bg-dark-100);
            }
        }
    }

</style>