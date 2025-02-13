<script setup lang="ts">
defineProps<{
  title: string
  position?: 'left' | 'right'
}>()
</script>

<template>
  <div class="section-header" :class="position === 'right' ? 'right-aligned' : 'left-aligned'">
    {{ title }}
  </div>
</template>

<style scoped>
.section-header {
  position: absolute;
  top: 1rem;
  font-size: 0.875rem;
  color: #94a3b8;
  font-weight: 500;
  opacity: 0.7;
  letter-spacing: 0.05em;
}

.left-aligned {
  left: 1rem;
}

.right-aligned {
  right: 1rem;
}
</style>