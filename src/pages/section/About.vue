<template>
    <section class="about">
        <div class="container">
            <div class="row-1">
                <div class="content-img">
                    <div class="img">
                        <img class="img-circular" src="https://res.cloudinary.com/ddxgl2pr9/image/upload/c_scale,h_400,w_300/v1654640717/Portafolio/IMG_20220607_181534_1_yvk1t1.jpg">
                        <div class="capa"></div>
                    </div>
                </div>
                <div class="content">
                    <h3 class="title">Jhon Contreras</h3>
                    <div class="box-container">
                        <div class="box">
                            <span class="icon fa-solid fa-graduation-cap" /> <span class="text-light"> Ingenería en informática</span>
                        </div>
                        <div class="box">
                            <span class="icon fa-solid fa-briefcase" /> <span class="text-light">Software developer</span>
                        </div>
                        <div class="box">
                            <span class="icon fa-solid fa-location-dot" /> <span class="text-light"> Barquisimeto, Venezuela</span>
                        </div>
                    </div>
                    <p class="text-light">Hola soy Jhon, ingeniero en informática con 2 años de experiencia como desarrollador web full-stack, donde he diseñado y desarrollado aplicaciones robustas y escalables siguiendo siempre todas las etadas del ciclo de vida de software. Me caracterizo por ser autodidacta, interesado en aprender nuevas tecnologías y dispuesto a afrontar cualquier tipo de retos que me ayuden a crecer como profesional.</p>
                    <div class="content-action">
                        <span class="icon fa-brands fas-graduation-cap"></span>
                        <a
                            class="btn btn__primary"
                            type="button"
                            href="/files/CV_JHON_CONTRERAS.pdf"
                            download
                        >
                            <span class="icon fa-solid fa-download"></span> Descargar CV
                        </a>
                    </div>
                </div>
            </div>
            <h3 class="title">Habilidades</h3>
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
    name: 'SectionAbout',
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
    .about{
    }
    .row-1{
        display: flex;
        flex-wrap: wrap;
        gap: 1.5rem;
        border-radius: 20px;
        .content-img{
            flex: 1 1 25rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            .img{
                border-radius: 10%;
                width: 200px;
                height: 200px;
                aspect-ratio: 1/1;
                background: linear-gradient(45deg, transparent, var(--main-color), transparent);
            }
        }
        .content{
            flex: 1 1 50rem;
            .box-container{
                display: flex;
                flex-wrap: wrap;
                gap:1.5rem;
                padding: 0.3rem 0;
                margin-bottom: 2rem;
                .box{
                    flex: 1 1 20rem;
                    display: flex;
                    span{
                        display: inline-block;
                    }
                    .icon{
                        color: var(--main-color);
                        margin-right: 10px;
                        margin-top: 3px;
                        font-size: 1.5rem;
                    }
                }
            }
            .content-action {
                margin-top: 2rem;
                border: 1px;
            }
        }
    }

    .title{
        margin: 5rem 0 2rem;
    }

    .row{
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem;
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

    .img-circular{
        border-radius: 10%;
        width: 200px;
        height: 200px;
        overflow: hidden;
        transform: rotate(10deg);
        &:hover{
            transform: rotate(0);
        }
    }

    @media screen and (max-width: 600px) {
        .container{
            .row-1{
                .content{
                    .box-container{
                        .box{
                            flex: 1 1 100%;
                        }
                    }
                }
            }
        }
        .title{
            margin: 2rem auto;
            text-align: center;
        }

        .col__experience{
          .card__experience{
            padding: 2rem 3rem; 
          }
        }
    }

</style>