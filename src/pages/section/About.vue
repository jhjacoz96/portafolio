<template>
    <section class="about">
        <div class="wrapper">
            <div class="content-about expand-from-bottom">
                <div class="content-img">
                    <!-- <div class="img"> -->
                        <!-- <img class="img-circular" src="https://res.cloudinary.com/ddxgl2pr9/image/upload/c_scale,h_400,w_300/v1654640717/Portafolio/IMG_20220607_181534_1_yvk1t1.jpg">
                        <div class="capa"></div> -->
                    <!-- </div> -->
                    <WordCloud3d />
                </div>
                <div class="content">
                    <h3 class="title mb-[20px]">Jhon Contreras</h3>
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
                    <p class="text-light">👋 ¡Hola! Soy Jhon Contreras, Ingeniero en Informática y desarrollador Full-Stack con más de 4 años de experiencia creando soluciones web robustas y escalables para startups y empresas.</p><br>
                    <!-- He trabajado en sectores como hotelería, salud y e-commerce, desarrollando plataformas desde cero y optimizando su rendimiento -->
                    <p class="text-light">🚀 Uno de mis mayores logros fue mi participación en TheHoster, donde implementé el 40% del sistema, reduje los tiempos de carga en un 30% y automatizé procesos clave que optimizaron la operación.</p><br>
                    <p class="text-light">🧠 Como ingeniero y autodidacta, disfruto aplicar buenas prácticas, aprender nuevas tecnologías y asumir desafíos que impulsen mi crecimiento profesional.</p><br>
                    <p class="text-light">¿Construimos algo juntos? 💻✨</p>
                    <div class="content-action">
                        <span class="icon fa-brands fas-graduation-cap"></span>
                        <a 
                            class="btn btn__primary"
                            type="button"
                            href="https://drive.google.com/uc?id=1cLJvghh9aOi0a5P9ykIQi7-TQtxeN-aH&export=download"
                            download
                        >
                            <span class="icon fa-solid fa-download"></span> Descargar CV
                        </a>
                    </div>
                </div>
            </div>
            <div class="">
                <h3 class="title mt-[70px] mb-[20px] slide-in-left">Habilidades</h3>
                <p class="text-light mb-[20px] expand-from-bottom">💡 A lo largo de mi carrera he desarrollado habilidades sólidas en el desarrollo web full-stack, destacando en la creación de interfaces modernas con Vue.js y Tailwind CSS, así como en la construcción de APIs robustas con Laravel y Node.js usando Express.js).</p>
            </div>
            <div class="content-experience">
                <div
                    v-for="stack in technologyStack"
                    :key="stack.label"
                    class="content-item-experience"
                    ref="cardExperienceRefs"
                >
                    <div class="card-experience relative group hover">
                        <!-- transition-opacity duration-400 group-hover:opacity-10 -->
                        <div class="card-experience__content">
                            <div class="card-experience__header">
                                <h6 class="card-experience__title">{{ stack.label }}</h6>
                            </div>
                            <div class="flex gap-[16px] flex-wrap justify-center">
                                <article
                                    v-for="technology in stack.technologies"
                                    :key="technology.label"
                                    class="flex justify-center w-[75px] h-[62px]"
                                >
                                    <div class="flex flex-col justify-between items-center">
                                        <div class="flex items-center flex-1">
                                            <template v-if="technology.origin === 'local'">
                                                <img
                                                    :src="`/portafolio/assets/icons/svg/${technology.icon}.svg`"
                                                    :alt="technology.icon"
                                                    class="w-[30px]"
                                                />
                                            </template>
                                            <template v-else>
                                                <span
                                                    :class="[technology.icon]"
                                                    class="text-[42px] text-[#27374D]"
                                                />
                                            </template>
                                        </div>
                                        <p class="text-[#27374D]">{{ technology.label }}</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <!-- absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 -->
                        <!-- <div class="card-experience__content z-[1000] absolute top-[0] opacity-0 group-hover:opacity-100 transition-opacity duration-400"> -->
                            <!-- <div class="card-experience__header">
                                <h6 class="card-experience__title">{{ stack.label }}</h6>
                            </div> -->
                            <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint mollitia ut doloribus neque, fugiat necessitatibus hic aliquid officia nulla.</p>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import WordCloud3d from '@/components/WordCloud3d'
export default {
    components: {
        WordCloud3d
    },
    name: 'SectionAbout',
    data() {
        return {
            cards: [1, 2, 3, 4],
            technologyStack: [
                {
                    label: 'Front-end',
                    technologies: [
                        {
                            label: "HTML",
                            icon: 'icon fa-brands fa-html5',
                            origin: 'fontawesome'
                        },
                        {
                            label: "CSS",
                            icon: 'icon fa-brands fa-css3',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Tailwind",
                            icon: 'tailwindcss',
                            origin: 'local'
                        },
                        {
                            label: "JavaScript",
                            icon: 'icon fa-brands fa-js',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Typescript",
                            icon: 'typescript',
                            origin: 'local'
                        },
                        {
                            label: "Vue.js",
                            icon: 'icon fa-brands fa-vuejs',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Angular",
                            icon: 'icon fa-brands fa-angular',
                            origin: 'fontawesome'
                        },
                    ]
                },
                {
                    label: 'Back-end',
                    technologies: [
                        {
                            label: "PHP",
                            icon: 'icon fa-brands fa-php',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Laravel",
                            icon: 'icon fa-brands fa-laravel',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Node.js",
                            icon: 'icon fa-brands fa-node-js',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Express.js",
                            icon: 'express',
                            origin: 'local'
                        },
                        {
                            label: "Typescript",
                            icon: 'typescript',
                            origin: 'local'
                        },
                        {
                            label: "MySQL",
                            icon: 'express',
                            origin: 'local'
                        },
                        {
                            label: "PostgreSQL",
                            icon: 'postgresql',
                            origin: 'local'
                        },
                        {
                            label: "MongoDB",
                            icon: 'mongodb',
                            origin: 'local'
                        },
                    ]
                },
                {
                    label: 'Aprendiendo y explorando',
                    technologies: [
                        {
                            label: "React",
                            icon: 'icon fa-brands fa-react',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Nestjs",
                            icon: 'nestjs',
                            origin: 'local'
                        },
                        {
                            label: "Docker",
                            icon: 'icon fa-brands fa-docker',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Aws",
                            icon: 'icon fa-brands fa-aws',
                            origin: 'fontawesome'
                        },
                    ]
                },
                {
                    label: 'Entorno de desarrollo',
                    technologies: [
                        {
                            label: "Git",
                            icon: 'icon fa-brands fa-git',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Github",
                            icon: 'icon fa-brands fa-github',
                            origin: 'fontawesome'
                        },
                        {
                            label: "Postman",
                            icon: 'postman',
                            origin: 'local'
                        },
                    ]
                },
            ]
        }
    },
  mounted() {
        this.$nextTick(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove('animate-out-view');
            el.classList.add('animate-in-view');
          } else {
            el.classList.remove('animate-in-view');
            el.classList.add('animate-out-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    this.$refs.cardExperienceRefs.forEach((el) => observer.observe(el));
  });
  },
}
</script>

<style lang="scss" scoped>

    .about{
    }
    // .content-img{
    //     background: #000;
    // }
    .content-about{
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        padding: 2.4rem;
        
        border-radius: 20px;
        background: var(--color-blue-dark);
        
        .content-img{
            display: block !important;
            // flex: 1 1 25rem;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // position: relative;
            // .img{
            //     border-radius: 10%;
            //     width: 200px;
            //     height: 200px;
            //     aspect-ratio: 1/1;
            //     background: linear-gradient(45deg, transparent, var(--main-color), transparent);
            // }
        }
        .content{
            flex: 1 1 50rem;
            .box-container{
                display: flex;
                justify-items: left;
                flex-wrap: wrap;
                gap:1.6rem;
                padding: 0.3rem 0;
                margin-bottom: 2rem;
                .box{
                    // flex: 1 1 20rem;
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
    .content-experience{
        display: flex;
        flex-wrap: wrap;
        gap: 2.5rem;
        border-radius: 20px;
        justify-content: center;
    }

    .content-item-experience{
        flex: 0 1 47rem;
        opacity: 0;
        transform: translateX(100px);
    }
    .card-experience{
        background-color: var(--secondary-color);
        border-radius: 20px;
        border: 1px solid transparent;
        max-height: 234px;
        .card-experience__header{
            text-align: center;
            margin-bottom: 2rem;
            .card-experience__title{
                color: var(--bg-dark-900);
                // opacity: 75%;
                font-size: 2rem;
                font-size: bold;
                // margin-bottom: 32px;
            }
        }
        .card-experience__content {
            padding: 2.5rem 5rem;
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
        .content-about{
            flex-flow: column;
            .content-img {
                display: none !important;
            }
            .content {
                .box-container{
                    .box{
                        flex: 1 1 100%;
                    }
                }
            }
        }
        .title{
            margin: 2rem auto;
            text-align: center;
        }

        .content-item-experience{
          .card-experience{
            padding: 2rem 3rem; 
          }
        }
    }

</style>