<template>
  <section class="about">
    <div class="wrapper">
      <div class="space-y-2 mb-6">
        <h1 class="title">Proyectos</h1>
        <!-- <p class="text-light">Mis proyectos más importantes</p> -->
        <div class="content-project flex flex-wrap gap-[24px]">
            <CardProject
                v-for="(project, keyProject) in proyects"
                :key="keyProject"
                :project-data="project"
            />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import CardProject from '@/components/CardProject.vue';
export default {
    /* eslint-disable */
    name: 'Portafolio',
    components: {
        CardProject
    },
    computed: {
        ...mapState(['proyects']),
    },
};
</script>

