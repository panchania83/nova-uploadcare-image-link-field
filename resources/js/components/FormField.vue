<template>
  <DefaultField :field="field" :errors="errors" :show-help-text="showHelpText">
    <template #field>
      <div v-if="value" class="mb-3">
        <a class="font-bold mr-3" :href="value" target="_blank">View File</a>

        <a class="text-red-500" href="" @click.prevent="clear">Clear</a>
      </div>
      <div class="shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900 cursor-pointer rounded text-sm font-bold focus:outline-none focus:ring ring-primary-200 dark:ring-gray-600 inline-flex items-center justify-center h-9 px-3 shadow relative bg-primary-500 hover:bg-primary-400 text-white dark:text-gray-900" @click.prevent="openUploadcare">
        <div v-if="value">Upload new file</div>
        <div v-if="!value">Upload file</div>
      </div>
    </template>
  </DefaultField>
</template>

<script>
import {FormField, HandlesValidationErrors} from 'laravel-nova'

const uploadcare = require('uploadcare-widget')

export default {
  mixins: [FormField, HandlesValidationErrors],

  props: ['resourceName', 'resourceId', 'field'],

  methods: {
    setInitialValue() {
      this.value = this.field.value || ''
    },

    openUploadcare() {
      uploadcare.openDialog(null, {
        publicKey: this.field.key,
        multiple: false,
        crop: false,
        tabs: 'file url camera dropbox gdrive box skydrive',
        previewStep: true,
        imageShrink: '2000 x 2000 85%'
      }).done((filePromise) => {
        filePromise.done((file) => {
          this.value = file.cdnUrl;
        })
        filePromise.fail((err) => {
          Nova.error(err)
        })
      }).fail((err) => {
        Nova.error(err)
      })
    },

    fill(formData) {
      formData.append(this.field.attribute, this.value || '')
    },

    clear() {
      this.value = null;
    }
  }
}
</script>

<style>
.uploadcare--button_primary {
  background-color: #157cfc !important;
  border-color: #157cfc !important;
}
</style>