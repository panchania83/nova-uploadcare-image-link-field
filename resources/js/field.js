import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
    app.component('index-uploadcare', IndexField)
    app.component('detail-uploadcare', DetailField)
    app.component('form-uploadcare', FormField)
})
