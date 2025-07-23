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
                                    :src="`/assets/icons/svg/${item.iconDefault}`"
                                    :alt="element.icon"
                                    class="w-[50px]"
                                />
                                <img
                                    v-else
                                    :src="`/assets/img/${item.icon}`"
                                    alt="item"
                                >
                            </div>
                            <div class="timeline-line flex-1"></div>
                        </div>
                        <div class="card-resume__content bg-[var()]">
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
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam nam quaerat quae illum, in non quas dolores cupiditate est, hic suscipit vel. Repudiandae eos illum, rem id nemo repellendus?'
                        },
                        {
                            icon: 'hicitty.svg',
                            time: '2022-2023',
                            occupation: 'Developer Fullstack',
                            company: 'Hicitty',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam nam quaerat quae illum, in non quas dolores cupiditate est, hic suscipit vel. Repudiandae eos illum, rem id nemo repellendus?'
                        },
                        {
                            time: '2021-2022',
                            iconDefault: 'item-timeline-experience.svg',
                            occupation: 'Developer Fullstack',
                            company: 'Freelances',
                            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A veniam nam quaerat quae illum, in non quas dolores cupiditate est, hic suscipit vel. Repudiandae eos illum, rem id nemo repellendus?'
                        },
                    ],
                },
                {
                    title: 'Educación',
                    icon: 'item-timeline-education',
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.timeline-line {
    border-right: 1px solid var(--color-blue-medium);
    width: 50%;
}
.tag {
    display: inline-block;
    padding: 0.4rem;
    background: var(--color-blue-medium);
    color: var(--secondary-color);
    border-radius: 20px;
    font-size: 1.6rem;
    font-weight: 500;
}



</style>