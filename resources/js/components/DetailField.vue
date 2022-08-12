<template>
  <PanelItem :index="index" :field="field">
    <template #value>
      <a class="font-bold" :href="field.value" target="_blank">View File</a>
    </template>
  </PanelItem>
</template>

<script>
export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
}
</script>
