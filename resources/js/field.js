Nova.booting((Vue, router) => {
    Vue.component('index-uploadcare', require('./components/IndexField'));
    Vue.component('detail-uploadcare', require('./components/DetailField'));
    Vue.component('form-uploadcare', require('./components/FormField'));
})
