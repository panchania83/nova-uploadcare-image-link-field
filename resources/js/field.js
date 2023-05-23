Nova.booting((Vue, router) => {
    Vue.component('index-uploadcare-image-link', require('./components/IndexField'));
    Vue.component('detail-uploadcare-image-link', require('./components/DetailField'));
    Vue.component('form-uploadcare-image-link', require('./components/FormField'));
})
