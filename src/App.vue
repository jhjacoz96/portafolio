<template>
  <LayoutDrawer v-model:activeDrawer="activeDrawer"/>
  <div
    class="layout"
  >
    <LayoutHeader v-model:activeDrawer="activeDrawer"/>
    <LayoutView />
    <LayoutFooter />
  </div>
  <div
    v-if="windowWidth > 600"
    class="cursor-1"
  />
  <div
    v-if="windowWidth > 600"
    class="cursor-2"
  />
</template>

<script>
  import LayoutDrawer from './pages/layout/LayoutDrawer.vue'
  import LayoutHeader from './pages/layout/LayoutHeader.vue'
  import LayoutFooter from './pages/layout/LayoutFooter.vue'
  import LayoutView from './pages/layout/LayoutView.vue'

export default {
  name: 'App',
  components: {
    LayoutDrawer,
    LayoutHeader,
    LayoutView,
    LayoutFooter,
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      activeDrawer: false,
    }
  },
  mounted() {
    let cursor1 = document.querySelector('.cursor-1')
    let cursor2 = document.querySelector('.cursor-2')
    window.onmousemove = (e) => {
      cursor1.style.top = e.pageY + 'px';
      cursor1.style.left = e.pageX + 'px';
      cursor2.style.top = e.pageY + 'px';
      cursor2.style.left = e.pageX + 'px';
    }
    let links = document.querySelectorAll('a')
    links.forEach(link => {
      link.onmouseenter = () => {
        cursor1.classList.add('active')
        cursor2.classList.add('active')
      }
      link.onmouseleave = () => {
        cursor1.classList.remove('active')
        cursor2.classList.remove('active')
      }
    })
  },
}
</script>

<style lang="scss" >
  @import url('https://fonts.googleapis.com/css2?family=Clicker:Script&family=Poppins:wght@200;300;400;500;600;700&display=swap');
  // @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');

  :root{
    // --main-color:#64FFDA;
    --main-color:#4db5ff;
    --secondary-color:#0CF2C8;
    // --bg-dark-900: #1F1B24;
    --bg-dark-900: #0A192F;
    // --bg-dark-100: #121212;
    --bg-dark-100: #122640;
    --bg-dark-50: #1F1B24;
    --bg-dark-variant: #2c2c6c;
    --text-dark-900: #ffffff;
    --text-dark-700: rgba( 255, 255, 255, 0.75);
    --text-dark-100: rgba( 255, 255, 255, 0.6);
    --text-dark-50: rgba( 255, 255, 255, 0.38);

    --container-with-lg: 90%;
    --container-with-md: 90%;
    --container-with-sm: 90%;

    --transition: all 400ms ease; 
  }
  
  * {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    text-decoration: none;
    transition: all .2s linear;
    line-height: 1.5;
  }

  html {
    font-size:  62.5%;
    scroll-behavior: smooth;
  }

  ::-webkit-scrollbar{
    // width: 3px;
    // height: 16px;
    display: none;
  }

  /*::-webkit-scrollbar-thumb {
    background: #cbd5e0;
    border-radius: 5px;
    border: 4px solid var(--main-color);
  }

  ::-webkit-scrollbar-track {
    border-radius: 100vh;
    background: #cbd5e0;
  }*/

  body {
    background: var(--bg-dark-900);
    padding-left: 25rem;
    color: var(text-dark-900);
  }
  
  .layout{
    min-height: 100vh;
    height: 100%;
    position: relative;
  }
  section{
    padding: 2rem 0 14rem;
    margin-top: 2rem;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  h1, h2, h3, h4, h5 {
    color: var(--text-dark-900); 
    font-weight: 500;
  }
  h1 {
    font-size: 2.5rem;
  }

  .container {
    width: var(--container-with-lg);
  }

  section > h2, section > h5 {
    color: var(--text-dark-700);
  }

  .text{
    color: var(--text-dark-900);
    font-size: 1.7rem;
  }
  .text-light{
    color: var(--text-dark-100);
    font-size: 1.7rem;
  }

  .text-light-small{
    color: var(--text-dark-50);
    font-size: 1.7rem;
  }

  .title{
      color: var(--text-dark-700);
      font-size: 2rem;
      font-weight: bold;
      margin-bottom: 2rem;
  }

  img{
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .cursor-1 {
    position: absolute;
    top: 0; left: 0;
    height: 1rem; width: 1rem;
    background: var(--main-color);
    pointer-events: none;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 10000;
  }

  .cursor-1.active {
    height: 7rem;
    width: 7rem;
    opacity: .3;
  }

  .cursor-2 {
    position: absolute;
    top: 0; left: 0;
    height: 4rem; width: 4rem;
    border: .1rem solid var(--main-color);
    pointer-events: none;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: 10000;
    transition: .3s linear;
  }

   .cursor-2.active {
    height: 7rem;
    width: 7rem;
    opacity: .3;
  }

  .btn {
    width: max-content;
    display: block;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid var(--main-color);
    color: var(--main-color);
    transition: var(--transition);
    background: transparent;
  }

  .btn:hover {
    background: var(--text-dark-900);
    color: var(--bg-dark-900);
    border-color: transparent;
  }

  .btn__primary {
    background-color: var(--main-color);
    color: var(--bg-dark-900);
  }

  /*.btn {
    position: relative;
    overflow: hidden;
    min-height: 60px;
    background-color: transparent;
    border: 2px solid var(--main-color);
    padding: 10px 25px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-color);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.8rem;
    .icon{
        margin-right: 6px;
    }
    transition: var(--default-transition-time) background-color;
    &:after{
        content: '';
        position: absolute;
        left: -200px;
        width: 80px;
        height: 100%;
        background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0), 100%);
        opacity: 0.4;
        transform: rotate(30deg);
        transition: var(--default-transition-time) all;
    }
    &:hover{
        background-color: var(--main-color);
        color: var(--bg-dark-900);
        transition:  var(--default-transition-time);
    }
    &:hover:after{
        left: calc(100% + 200px);
    }
  }*/




   /* Media queries medium */

    @media screen and (max-width: 1024px) {
        
      html {
        font-size:  55%;
      }

      body {
        padding: 0;
      }

      .container{
        width: var(--container-with-md);
        // margin-top: 3rem;
      }

    }

   /* Media queries small */

    @media screen and (max-width: 600px) {
        
      html {
        font-size:  50%;
      }

      header {
        width: 90%;
      }

      body {
        padding: 0;
      }

      .container{
        width: var(--container-with-sm);
        // margin-top: 2.5rem;
        //margin: auto;
      }

      section > h2{
        margin-bottom: 2rem;
      }

    }

    // @media screen and (max-width: 450px) {
        
    //   html {
    //     font-size:  50%;
    //   }

    //   header {
    //     width: 100%;
    //   }

    // }
    h1{
      color: var(--bg-dark-variant);
;    }

</style>
