<template>
    <section class="home" id="home">
        <div class="container">
            <div class="row">
                <div class="col__info">
                    <h5 class="hello">Hola, soy</h5>
                    <h3>Jhon Contreras</h3>
                    <p class="profession" style="margin:0;">
                        <span class="typing">{{ typeValue }}</span>
                        <span
                            class="cursor"
                            :class="{'typing': typeStatus}"
                        >&nbsp;</span>
                    </p>
                    <p class="info">
                        {{ info }}
                    </p>
                </div>
                <div class="col__img">
                    <div class="me">
                        <img alt="me" :src="require('@/assets/profile.png')">
                    </div>
                </div>
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
            typeArray: ['Front-End Developer','Back-end Delevoper', 'Javascript Developer'],
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 1000,
            typeArrayIndex: 0,
            charIndex: 0,
            info: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, tempore quo nulla fugit fugiat recusandae sint eveniet quibusdam obcaecati optio alias iste doloribus. Sint neque consequatur atque dolore perferendis nemo!...',
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
        }
        else {
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
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
        
        .col__info{
            flex: 1 1 30rem;
            .hello {
                font-size: 2rem;
                color: var(--text-dark-900);
                margin-bottom: 1.5rem;
            }
            h3 {
                font-size: 3rem;
                color: var(--text-dark-900);
            }
        }

        .col__img{
            flex: 1 1 40rem;
            position: relative;
            .me{
                background: linear-gradient(var(--main-color), transparent);
                width: 70%;
                height: 40rem;
                position: absolute;
                left: calc(50% - 18rem);
                border-radius: 16rem 16rem 0 0;
                overflow: hidden;
                padding: 5rem 1rem 1rem 1.5rem;
            }
        }

    }

    .profession {
        font-size: 2.5rem;
        color: var(--text-dark-900);
        margin-bottom: 1.5rem;
    }

    .info{
        margin-top: 1.5rem;
        font-size: 1.7rem;
        color: var(--text-dark-100);
    }

    /* h3.hello{
        font-size: 28px;
        margin: 15px 0;
    }

    h3.hello span{
        font-family: 'Clicker Script', cursive;
        font-size: 30px;
        font-weight: 700;
        color: var(--main-color);
    } */

    .profession{
        font-size: 30px;
        margin: 15px 0;
    }

    .typing{
        color: var(--main-color);
        animation: none ;
    }

    .cursor {
        display: inline-block;
        margin-left: 3px;
        width: 4px;
        background-color: var(--main-color);
        animation: cursorBlink 1s infinite;
    }

    @keyframes cursorBlink {
        49% {
            background-color: var(--main-color);
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

    @media screen and (max-width: 1024px) {
        .col__info{
            flex: 1 1 100%;
            max-width: 100%;
            text-align: center;
        }
        .col__img {
            flex: 1 1 100%;
            max-width: 100%;
            text-align: center;
            margin-top: 5rem;
        }
    }

</style>
