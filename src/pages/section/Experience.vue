<template>
    <section class="experience">
        <div class="container">
            <div class="row">
                <div class="col__education">
                    <h3 class="title">Educación</h3>
                    <div class="card">
                        <div class="card__container">
                            <article class="item__container">
                                <span class="item__icon fa-solid fa-graduation-cap" />
                                <p class="text-light-small">Sept 2014 - Nov 2021</p>
                                <h6 class="card__title ">Universidad Centroccidental Lisandro Alvarado</h6>
                                <p class="text-light">Ingeneria en informática</p>
                            </article>
                        </div>
                    </div>
                </div>
                <div class="col__experience">
                    <h3 class="title">Experiencia</h3>
                    <div class="card">
                        <div class="card__container">
                            <article class="item__container">
                                <span class="item__icon fa-solid fa-briefcase" />
                                <p class="text-light-small">Mar 2021 - Ago 2021</p>
                                <h6 class="card__title">Full-stack developer</h6>
                                <p class="text-light">Puce</p>
                            </article>
                            <article class="item__container">
                                <span class="item__icon fa-solid fa-briefcase" />
                                <p class="text-light-small">Oct 2021 - Ene 2022</p>
                                <h6 class="card__title">Full-stack developer</h6>
                                <p class="text-light">Phl System</p>
                            </article>
                            <article class="item__container">
                                <span class="item__icon fa-solid fa-briefcase" />
                                <p class="text-light-small">Sep 2021 - Mar 2022</p>
                                <h6 class="card__title">Full-stack developer</h6>
                                <p class="text-light">Hospital Clinico Automotriz</p>
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
    name: 'SectionExperience',
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
    .row{
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem;
        margin-top: 3rem;
        padding: 2rem;
        border-radius: 20px;
        justify-content: center;
    }
    .col__education{
        flex: 1 1 40rem;
    }
    .col__experience{
        flex: 1 1 40rem;
    }
    .card{
        background-color: var(--bg-dark-variant);
        box-shadow: 2px 3px 12px -8px #122640;
        border-radius: 10px;
        padding: 2.5rem 5rem;
        border: 1px solid transparent;
        position: relative;
        &:hover{
            background-color: transparent;
            border: 1px solid var(--bg-dark-100);
        }
        
    }
    .card__title{
        color: var(--text-dark-900);
        opacity: 75%;
        font-size: 1.8rem;
        margin: .6rem 0 .6rem;
    }
    .card__container{
        padding: 1.9rem 2rem;
    }
    .item__container{
        padding-left: 2.8rem;
        padding-bottom: 1.9rem;
        position: relative;
        &:last-child{
            padding-bottom: 0;  
        }
        &:before{
            content: '';
            width: 1px;
            position: absolute;
            height: 100%;
            background-color: var(--main-color);
            left: 0.4rem;
            top: 0;
        }
    }
    .item__icon{
        position: absolute;
        left: -0.5rem;
        top: 0;
        font-size: 1.7rem;
        background-color: var(--bg-dark-variant);
        color: var(--main-color);
    }

    .mb{
        margin-bottom: 0rem;
    }

      @media screen and (max-width: 600px) {
        .card{
            padding: 2rem 3rem; 
        }
        .card__title{
            margin: 1rem 0 1rem;
        }
      }

</style>