<template>
    <section class="experience">
        <div class="container">
            <div class="row">
                <div class="col__contact">
                    <div class="card">
                        <div class="card__container">
                            <span class="text fa-brands fa-whatsapp" />
                            <p class="text">Whatsapp</p>
                            <p class="text-light">(+58)414-9568372</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__container">
                            <span class="text fa-solid fa-envelope" />
                            <p class="text">Correo</p>
                            <p class="text-light">jhjacoz96@gmail.com</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__container">
                            <span class="text fa-brands fa-linkedin" />
                            <p class="text">Linkedin</p>
                            <p class="text-light">/jhoncontreras14</p>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card__container">
                            <span class="text fa-brands fa-github" />
                            <p class="text">Github</p>
                            <p class="text-light">/jhjacoz96</p>
                        </div>
                    </div>
                </div>
                <div class="col__form">
                    <h3 class="title">Contactame</h3>
                    <p class="text-light">Si deseas contactarme puedes dejar un mensaje y te responderé lo antes posible.</p>
                    <form action="">
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre y apellido *"
                            required
                        >
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico *"
                            required
                        >
                        <input
                            type="textarea"
                            name="message"
                            placeholder="Mensaje *"
                            row="7"
                            required
                        >
                        <button
                            type="submit"
                            class="btn btn__primary"
                        >
                            Enviar mensaje
                        </button>
                    </form>
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
    .experiene{
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
    .col__contact{
        flex: 1 1 38%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
    .col__form{
        flex: 1 1 50%;
    }
    .card{
        width: 30rem;
        background-color: var(--bg-dark-variant);
        box-shadow: 2px 3px 12px -8px #122640;
        border-radius: 10px;
        border: 1px solid transparent;
        padding: 1.2rem;
        text-align: center;
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
        text-align: center;
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

    form {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin-top: 2rem;
    }

    input, textarea{
        width: 100%;
        padding: 1.5rem;
        border-radius: 0.5rem;
        background-color: transparent;
        border: 2px solid var(--bg-dark-variant);
        resize: none;
        color: var(--text-dark-100);
    }

     @media screen and (max-width: 1024px) {
         .row{
             gap:2rem;
         }
         .card{
             width: 100%;
         }
         .col__contact{
            flex: 1 1 100%;
        }
        .col__form{
            flex: 1 1 100%;
        }
        form {
             gap: 2rem;
        }
     }

     @media screen and (max-width: 600px) {
        .row{
            gap:2.5rem;
        }
        .card{
             width: 100%;
         }
        .col__contact{
            flex: 1 1 100%;
        }
        .col__form{
            flex: 1 1 100%;
        }
        form {
            gap: 2rem;
        }
     }

</style>