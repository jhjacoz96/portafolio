<template>
  <router-link :to="`/portafolio/${projectData.id}`">
      <div
        class="project-card bg-[var(--color-blue-dark)] w-[340px] h-[442px] rounded-[20px] shadow overflow-hidden shadow hover:shadow-xl cursor-pointer expand-from-bottom"
    >
        <div class="project-card__preview p-2 w-full h-[232px]">
          <div
            class="project-card__gradient rounded-[20px] w-full h-full flex items-center justify-center"
            :style="`background: radial-gradient(ellipse at top left, ${projectData?.colorCore} 0%, ${projectData?.colorCore} 70%, #ffffff 100%)`"
          >
            <div class="project-card__image-wrapper w-[290px] h-[150px]  shadow-xl relative bg-white">
                <span class="tag absolute -top-[14px] left-[10px] z-[100]">Fullstack</span>
                <!-- <img
                    class="w-full h-full  object-"
                    :src="projectData?.img?.[0]"
                    alt="Proyecto TheHoster"
                /> -->
                <div class="w-full h-full bg-contain  bg-center bg-no-repeat" :style="`background-image: url('${projectData?.img?.[0]}')`"></div>
            </div>
          </div>
        </div>
        <div class="proyect-card__content p-6">
            <h3 class="subtitle text-[var(--main-color)] mb-4">{{ projectData?.title }}</h3>
            <p class="text-light mb-4  truncate-3">{{ projectData?.description }}</p>
            <div class="flex gap-2 flex-wrap">
                <span
                    v-for="(skill, keySkill) in projectData.skill"
                    class="tag"
                    :key="keySkill"
                >
                    {{ skill }}
                </span>
            </div>
        </div>
    </div>
  </router-link>
</template>

<script>
export default {
    name: 'CardProyect',
    props: {
        projectData: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style scoped>
.project-card {
  /* estructura general del card */
}

.project-card__preview {
  /* preview container */
}

.project-card__gradient {
  /* background ya viene con Tailwind + style */
}

.project-card__image-wrapper img {
  /* border-radius: 12px; */
}
</style>
