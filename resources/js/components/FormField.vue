<template>
    <default-field :field="field">
        <template slot="field">
            <div v-if="field.value" class="mt-2 w-full bg-white rounded-lg px-0" style="width: 400px; ">
                <a style="color: #FFFFFF; text-shadow: 0 1px 2px rgba(0,0,0,.2); font-weight: 800; outline:none;" :href="field.value" target="_blank">View File</a>
            </div>
            <uploadcare
                    :id="field.name"
                    class="ml-auto btn btn-default btn-primary mr-3"
                    :publicKey="field.key"
                    :imagesOnly="true"
                    imageShrink="500 x 500 85%"
                    tabs="file url gdrive"
                    @success="onSuccess"
                    @error="onError">
                <button style="color: #FFFFFF; text-shadow: 0 1px 2px rgba(0,0,0,.2); font-weight: 800; outline:none;">Upload new file</button>
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

            onSuccess(image) {
                this.value = image.cdnUrl;
            }
        }
    }
</script>
