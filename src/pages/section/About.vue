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
                    <p class="text-light">Hola soy Jhon, ingeniero en informática con 2 años y medio de experiencia como desarrollador full-stack, dispuesto a los retos y a soluciones informáticas y optimización de algoritmos, aplicando principios de programación. Me caracterizo por ser una persona autodidacta, interesado en aprender nuevas tecnologías para el desarrollo de software, dispuesto a afrontar cualquier tipo de retos que me ayuden a crecer como profesional.</p>
                    <div class="content-action">
                        <span class="icon fa-brands fas-graduation-cap"></span>
                        <button
                            class="btn btn__primary"
                            type="button"
                        >
                            <span class="icon fa-solid fa-download"></span> Descargar CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'SectionAbout',
}
</script>

<style lang="scss" scoped>
    .about{
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
    }

</style>