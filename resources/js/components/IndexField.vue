<template>
<p class="">
    <a v-if="field.value" class="btn btn-link dim cursor-pointer text-80" :href="field.value" target="_blank">View File</a>
</p>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
