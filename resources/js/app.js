import { createApp, h } from 'vue'
import { App, plugin } from '@inertiajs/inertia-vue3'
import '../css/app.css'

const el = document.getElementById('app')

createApp({
  render: () => h(App, {
    initialPage: JSON.parse(el.dataset.page),
    resolveComponent: name => require(`./Pages/${name}`).default,
  })
}).use(plugin).mount(el)