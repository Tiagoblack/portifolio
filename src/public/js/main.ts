//import '../css/style.css
import './nav'
import './effectanima'
import './animatedStacks'
import './linkInterno'
import './modalStack'

import { scrollIndexLink } from './srcollLink'

import { scrollListener as scrollTop } from './animeScroll'
import { scrollListener } from './scrollHeader'
import { debounce } from './debouce'
import { scrollSkills } from './scollSkills'

window.addEventListener(
    'scroll',
    debounce(() => {
        scrollIndexLink()
        scrollTop()
        scrollListener()
        scrollSkills()
    }, 100)
)
