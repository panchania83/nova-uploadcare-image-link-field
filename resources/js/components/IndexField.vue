<template>
  <a v-if="field.value" class="font-bold" :href="field.value" target="_blank">View File</a>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
