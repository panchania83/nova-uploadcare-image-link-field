<template>
<p class=""><img :src="field.value" class="rounded-sm w-9 h-9" style="object-fit: cover;"></p>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
}
</script>
