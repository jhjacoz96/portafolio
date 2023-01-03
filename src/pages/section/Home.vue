<template>
    <section class="home" id="home">
        <div class="container">
            <div class="row">
                <div class="col__info">
                    <h5>Hola, mi nombre es</h5>
                    <h1>Jhon Contreras.</h1>
                    <div class="profession" style="margin:0;">
                        <h1 class="typing">{{ typeValue }}</h1>
                        <h1
                            class="cursor"
                            :class="{'typing': typeStatus}"
                        >&nbsp;</h1>
                    </div>
                    <div class="info">
                        <p>{{ info }}</p>
                    </div>
                    <div class="actions">
                        <a
                            class="btn"
                            href="/files/CV_JHON_CONTRERAS.pdf"
                            download
                        >Desargar cv</a>
                        <button
                            class="btn btn__primary"
                            @click="$router.push('/about')"
                        >Sobre mi</button>
                    </div>
                </div>
                <!-- <div class="col__img">
                    <div class="me">
                        <img alt="me" :src="require('@/assets/profile.png')">
                    </div>
                </div> -->
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name:'SectionHome',
    data() {
        return {
            
            typeValue: '',
            typeStatus: false,
            typeArray: ['Software Engineer','Full-Stack Developer', 'Web Developer'],
            typingSpeed: 100,
            erasingSpeed: 100,
            newTextDelay: 1000,
            typeArrayIndex: 0,
            charIndex: 0,
            info: 'Diseñar y crear softaware es mi pasión',
        }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        } else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>

<style lang="scss" scoped>
    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 2rem;
        height: 100%;
        align-items: center;
        align-content: center;
        .col__info{
            flex: 1 1 30rem;
            text-align: center;
            // h3 {
            //     font-size: 3rem;
            //     color: var(--text-dark-900);
            // }
        }

        .col__img{
            flex: 1 1 50rem;
            position: relative;
        }

    }

    .me{
        background: linear-gradient(var(--main-color), transparent);
        width: 22rem;
        height: 30rem;
        position: absolute;
        left: calc(50% - 11rem);
        border-radius: 16rem 16rem 0 0;
        overflow: hidden;
        padding: 5rem 1rem 1rem 1.5rem;
    }

    h5{
        font-size: 1.7rem;
        color: var(--main-color);
    }

    h1{
        font-family: 'Poppins', sans-serif;
        font-size: 5.5rem;
        font-weight: bold;
        color: var(--text-dark-700);
    }

    .profession {
        margin-bottom: 1.5rem;
    }

    .info{
        text-align: center;
        margin-top: 1.5rem;
        font-size: 1.7rem;
        color: var(--text-dark-100);
        padding: 0 15rem;
    }

    .profession{
        font-size: 30px;
        margin: 15px 0;
    }

    .typing{
        color: var(--text-dark-100);
        display: inline-block;
        animation: none ;
    }

    .cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: var(--text-dark-100);
        animation: cursorBlink 1s infinite;
    }

    .actions{
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 1.5rem;
    }

    @keyframes cursorBlink {
        49% {
            background-color: var(--text-dark-100);
        }
        50% {
            background-color: transparent;
        }
        99% {
            background-color: transparent;
        }
    }

    /* .home .content .row .home-info .typing {
        width: 18ch;
        animation: typing 5s steps(18), blink .5s infinite step-end alternate;
        overflow: hidden;
    } */

    /*.home .content .name {
        width: 13ch;
        animation: typing 3.5s steps(13), blink .5s infinite step-end alternate, vee .2s infinite;
        overflow: hidden;
        animation-delay: 4s;
    }

    .home .content .dev {
        width: 19ch;
        animation: typing 5s steps(19), blink .5s infinite step-end alternate, vee .2s infinite;
        overflow: hidden;
        animation-delay: 8.4s;
    }*/

    /* @keyframes typing {
        from { width: 0; }
    } */

    /* @keyframes vee {
        to { visibility: visible; }
    } */

    /* @keyframes blink {
        50% { border-color: transparent; }
    } */

    @media screen and (max-width: 600px) {
        .col__info{
            text-align: center;
        }
        // .col__img {
        //     flex: 1 1 100%;
        //     max-width: 100%;
        //     text-align: center;
        //     margin-top: 5rem;
        // }

        h1{
            font-size: 4rem;
        }
        .info{
            padding: 0 2rem;
        }
    }
    @media screen and (max-width: 1024px) {
        .col__info{
            text-align: center;
        }
    }

</style>
