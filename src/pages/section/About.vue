<template>
    <section class="about">
        <div class="container">
            <div class="row-1">
                <div class="content-img">
                    <div class="img">
                        <img class="img-circular" src="https://res.cloudinary.com/ianahernandez/image/upload/v1616860528/profile_removebg_preview_6b1896c48a.jpg">
                        <div class="capa"></div>
                    </div>
                </div>
                <div class="content">
                    <h3 class="title">Jhon Contreras</h3>
                    <div class="box-container">
                        <div class="box">
                            <span class="icon fa-solid fa-graduation-cap" /> <span class="text"> Ingenería en informática</span>
                        </div>
                        <div class="box">
                            <span class="icon fa-solid fa-briefcase" /> <span class="text"> Full-stack developer</span>
                        </div>
                        <div class="box">
                            <span class="icon fa-solid fa-location-dot" /> <span class="text"> Barquisimeto, Venezuela</span>
                        </div>
                    </div>
                    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet non dolorem illum. Rem qui ratione nostrum quod nesciunt, natus adipisci veniam laborum atque odio neque amet autem aspernatur delectus at.</p>
                    <div class="content-action">
                        <span class="icon fa-brands fas-graduation-cap"></span>
                        <button
                            class="btn"
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
                .img{
                    background: #ffffff;
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
                    margin-top: 2rem;
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
                .title{
                    color: var(--text-dark-900);
                    opacity: 87%;
                    font-size: 2.5rem;
                }
                .text{
                    color: var(--text-dark-900);
                    opacity: 60%;
                    font-size: 1.7rem;
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

</style>