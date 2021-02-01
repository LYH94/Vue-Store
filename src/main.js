import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import ImgInputer from 'vue-img-inputer'
import 'vue-img-inputer/dist/index.css'
import Photoswipe from 'vue-pswipe'
import VueGtag from 'vue-gtag'
import VueFormWizard from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/style.scss'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faShoppingCart, faUser, faCheck, faPen, faTimes, faUndo, faMapMarkerAlt, faPhone, faListAlt, faFireAlt, faPlus, faBars, faInfoCircle, faShoppingBag, faCog, faChevronUp, faTruck, faPlaneDeparture, faReceipt } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt, faUserCircle, faEdit, faCalendarCheck } from '@fortawesome/free-regular-svg-icons'
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import './registerServiceWorker'

library.add(faShoppingCart, faUser, faCheck, faPen, faTimes, faUndo, faTrashAlt, faFacebook, faMapMarkerAlt, faPhone, faInstagram, faGithub, faUserCircle, faEdit, faListAlt, faFireAlt, faPlus, faBars, faInfoCircle, faTruck, faShoppingBag, faCog, faChevronUp, faCalendarCheck, faPlaneDeparture, faReceipt)

// 傳送請求時一起傳送認證資訊
axios.defaults.withCredentials = true

AOS.init()
Vue.config.productionTip = false
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueAxios, axios)
Vue.use(VueSweetalert2)
Vue.use(Photoswipe)
Vue.use(VueFormWizard)
Vue.use(VueAwesomeSwiper)
Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GA
  }
})

Vue.component('ImgInputer', ImgInputer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
