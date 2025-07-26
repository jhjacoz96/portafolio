<template>
<div class="border-b border-gray-200 dark:border-gray-700 mb-6">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        <li
            v-for="(tab, keyTab) in tabs"
            class="me-2"
            :key="keyTab"
        >
            <button
                class="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg group space-x-2"
                :class="tabValue === tab.value ? 'text-blue-600 border-blue-600' : 'hover:text-gray-600 hover:border-gray-300 border-transparent'"
                @click="tabValue = tab.value"
            >
                <span class="ico text-[14px]" :class="tab.icon"></span>
                <span class="text-light" :class="tabValue === tab.value ? 'text-blue-600' : ''">{{ tab.label }}</span>
            </button>
        </li>
    </ul>
</div>

<Transition name="tab-fade" mode="out-in">
  <div :key="tabValue">
    <template v-if="tabValue === 'DESCRIPTION'">
      <slot name="description"></slot>
    </template>
    <template v-else-if="tabValue === 'CONTRIBUTION'">
      <slot name="contribution"></slot>
    </template>
  </div>
</Transition>

</template>

<script>
export default {
    name: 'BaseTab',
    data () {
        return {
            tabs: [
                {
                    label: 'Descripción',
                    icon: 'fa-solid fa-file-lines',
                    value: 'DESCRIPTION',
                },
                {
                    label: 'Contribución',
                    icon: 'fa-solid fa-wrench ',
                    value: 'CONTRIBUTION',
                },
            ],
            tabValue: 'DESCRIPTION'
        }
    },
}
</script>

<style lang="scss" scoped>
.tab-fade-enter-active, .tab-fade-leave-active {
  transition: all 0.3s ease;
}
.tab-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.tab-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>