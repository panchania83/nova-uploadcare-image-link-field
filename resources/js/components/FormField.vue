<template>
    <default-field :field="field">
        <template slot="field">
            <div v-if="value" class="mb-3">
                <input type="text" class="w-full form-control form-input form-input-bordered" :value="value" style=" width: 100%; "/>
            </div>
            <uploadcare
                    class="btn btn-default btn-primary cursor-pointer"
                    :id="field.name"
                    :publicKey="field.key"
                    imageShrink="2000 x 2000 85%"
                    @success="onSuccess">
                <div v-if="value">Upload new file</div>
                <div v-if="!value">Upload file</div>
            </uploadcare>
            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </default-field>
</template>

<script>
    import {FormField, HandlesValidationErrors} from 'laravel-nova'
    import Uploadcare from 'uploadcare-vue'

    export default {
        mixins: [FormField, HandlesValidationErrors],

        props: ['resourceName', 'resourceId', 'field'],

        components: {Uploadcare},

        created() {
        },
        methods: {
            setInitialValue() {
                this.value = this.field.value || ''
            },

            fill(formData) {
                formData.append(this.field.attribute, this.value || '')
            },

            onSuccess(file) {
                console.log(file);
                this.value = file.cdnUrl;
            },

            clear() {
                this.value = null;
            }
        }
    }
</script>
