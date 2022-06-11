<template>
    <footer>
        Create by <span>Jhon Contreras</span> | all rights reserved
    </footer>
</template>

<script>
export default {
    name: 'LayoutFooter',
}
</script>

<style lang="scss" scoped>
    footer{
        font-size: 1.7rem;
        padding: 2.5rem;
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: center;
        color: var(--text-dark-100);
        background-color: var(--bg-dark-900);
    }
</style>