<template>
    <default-field :field="field">
        <template slot="field">
            <uploadcare
                    :id="field.name"
                    class="ml-auto btn btn-default btn-primary mr-3"
                    :publicKey="field.key"
                    :imagesOnly="true"
                    imageShrink="500 x 500 85%"
                    tabs="file url gdrive"
                    @success="onSuccess"
                    @error="onError">
                <button style="color: #FFFFFF; text-shadow: 0 1px 2px rgba(0,0,0,.2); font-weight: 800; outline:none;">Upload File</button>
            </uploadcare>
            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
            <div v-if="showImage" class="mt-2 w-full bg-white rounded-lg px-0" style="width: 400px; ">
                <img :src="value" class="img-fluid rounded mx-auto d-block" alt="" style="width:100%; margin: auto;">
            </div>
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

        data() {
            return {
                showImage: 0,
            }
        },

        created() {
        },
        methods: {
            /*
             * Set the initial, internal value for the field.
             */
            setInitialValue() {
                this.value = this.field.value || ''
            },

            /**
             * Fill the given FormData object with the field's internal value.
             */
            fill(formData) {
                formData.append(this.field.attribute, this.value || '')
            },

            /**
             * Update the field's internal value.
             */
            handleChange(value) {
                this.value = value
            },

            onSuccess(image) {
                this.showImage = 1;
                this.handleChange(image.cdnUrl);
            }
        }
    }
</script>
