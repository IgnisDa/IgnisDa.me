import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faMoon,
  faLightbulb,
  faChevronRight,
  faChevronLeft,
  faSkull,
  faRadiation,
  faBars,
  faTimes,
  faHome,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(
  faLightbulb,
  faMoon,
  faChevronRight,
  faChevronLeft,
  faSkull,
  faRadiation,
  faBars,
  faTimes,
  faHome,
  faPencilAlt
)

// Register the component globally
Vue.component('FontAwesomeIcon', FontAwesomeIcon)
