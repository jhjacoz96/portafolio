<template>
    <section class="experience">
        <div class="wrapper">
            <div class="flex flex-col sm:flex-row xs:space-x-[24px] gap-[30px]">
                <div
                    v-for="(element, keyElement) in elements"
                    :key="keyElement"
                    class="content-resume flex flex-col space-y-[16px] w-full xs:w-1/2"
                >
                    <h3 class="title mb-[8px]">{{ element.title }}</h3>
                    <div
                        v-for="(item, keyItem) in element.items"
                        class="card-resume flex space-x-[16px]"
                        :key="keyItem"
                    >
                        <div class="card-resume__timeline flex flex-col">
                            <div class="size-[50px] rounded-full overflow-hidden shodow-xl">
                                <img
                                    v-if="item?.iconDefault"
                                    :src="`/portafolio/assets/icons/svg/${item.iconDefault}`"
                                    :alt="element.icon"
                                    class="w-[50px]"
                                />
                                <img
                                    v-else
                                    :src="`/portafolio/assets/img/${item.icon}`"
                                    alt="item"
                                >
                            </div>
                            <div class="timeline-line flex-1"></div>
                        </div>
                        <div
                            class="card-resume__content bg-[var(--color-blue-dark)] rounded-[10px] p-4 shadow-xl"
                            ref="cardResumeRef"
                        >
                            <div class="mb-[16px]">
                                <span class="tag">
                                    {{ item.time }}
                                </span>
                            </div>
                            <h4 class="subtitle text-white mb-[4px]">{{ item.occupation }}</h4>
                            <p class="text-light mb-[8px]">{{ item.company }}</p>
                            <p
                                v-if="item.description"
                                class="text-light"
                            >
                                {{ item.description }}
                            </p>
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
            elements: [
                {
                    title: 'Experiencias',
                    icon: 'item-timeline-experience',
                    items: [
                        {
                            icon: 'thehoster.jpg',
                            time: '2023-2025',
                            occupation: 'Developer Fullstack',
                            company: 'TheHoster',
                            description: 'Desarrollé más del 40 % del sistema de un SaaS para hoteles, incluyendo APIs, módulos frontend/backend e integración de IA y scrapers con Apify. Consolidé estándares técnicos que escalaron el producto y automatizaron procesos clave.'
                        },
                        {
                            icon: 'hicitty.svg',
                            time: '2022-2023',
                            occupation: 'Developer Fullstack',
                            company: 'Hicitty',
                            description: 'Co-creé el 50 % de una plataforma hotelera con integración de motores de reserva. Mejoré un 30 % el rendimiento en servicios críticos y desarrollé interfaces modernas basadas en Figma.'
                        },
                        {
                            time: '2021-2022',
                            iconDefault: 'item-timeline-experience.svg',
                            occupation: 'Developer Fullstack',
                            company: 'Freelances',
                            description: 'Lideré el desarrollo de 3 plataformas completas para salud, sector automotriz y e-commerce, adaptadas a cada cliente desde el modelado de negocio hasta la entrega final.'
                        },
                    ],
                },
                {
                    title: 'Educación',
                    iconDefault: 'item-timeline-education.svg',
                    items: [
                        {
                            time: '2014-2021',
                            iconDefault: 'item-timeline-education.svg',
                            occupation: 'Universidad Centroccidental Lisandro Alvarado (UCLA)',
                            company: 'Ingeniería en informática',
                            description: null
                        },
                    ],
                },
            ],
            cards: [1, 2, 3, 4],
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
            this.$refs.cardResumeRef.forEach((el) => observer.observe(el));
        });
    }
}
</script>

<style lang="scss" scoped>
.card-resume__content  {
    opacity: 0;
    transform: translateX(100px);
}
.timeline-line {
    border-right: 1px solid var(--color-blue-medium);
    width: 50%;
}
</style>