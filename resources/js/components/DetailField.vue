<template>
    <div class="flex border-b border-40">
        <div class="w-1/4 py-4">
            <h4 class="font-normal text-80">
                {{ field.name }}
            </h4>
        </div>
        <div class="w-3/4 py-4">
            <div class="mt-2 w-full bg-white rounded-lg px-0" style="width: 400px; ">
                <img :src="field.value" class="img-fluid rounded mx-auto d-block" alt="" style="width:100%; margin: auto;">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['resource', 'resourceName', 'resourceId', 'field'],
    }
</script>
