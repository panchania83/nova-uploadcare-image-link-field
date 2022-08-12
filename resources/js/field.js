import IndexField from './components/IndexField'
import DetailField from './components/DetailField'
import FormField from './components/FormField'

Nova.booting((app, store) => {
  app.component('index-nova-uploadcare-field', IndexField)
  app.component('detail-nova-uploadcare-field', DetailField)
  app.component('form-nova-uploadcare-field', FormField)
})
