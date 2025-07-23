<template>
<div>
      <div ref="tagCloud" class="tagcloud-container"></div>
</div>
</template>

<script>
import TagCloud from 'TagCloud';
export default {
  name: 'TagCloud3D',
  data() {
    return {
      texts: [
        'ReactJS', 'Javascript', 'Typescript', 'Vuejs', 'Angular',
        'HTML5', 'CSS3', 'PHP', 'Laravel', 'Nodejs', 'Expressjs', 'MongoDB', 'MySQL', 'PostgreSQL'
      ],
      options: {
        radius: 150,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 135,
        keep: true,
      }
    };
  },
  mounted() {
    TagCloud(this.$refs.tagCloud, this.texts, this.options);
  }
}
</script>

<style scoped>
.tagcloud {
}
.tagcloud-container {
  color: white;
  font-size: 14px;
  font-family: sans-serif;
  /* filter: blur(1px); */
  /* opacity: 0.6; */
  transition: all 0.3s ease;
}

.tagcloud-container span:hover {
  filter: blur(0);
  opacity: 1;
}
/* .tagcloud {
    display: 'inline-block';
    top: 100px;
    left: 32%;
    font-weight: bold;
    letter-spacing: 1px;
    font-family: 'Bebas Neue', cursived;
    font-size: 20px;
}*/
.tagcloud--item:hover{
    color: #fff;
} 
</style>