//import '../css/style.css
import './nav'
import './effectanima'
import './animatedStacks'
import './linkInterno'

import { scrollListener as scrollTop } from './animeScroll'
import { scrollListener } from './scrollHeader'
import { debounce } from './debouce'
import { scrollSkills } from './scollSkills'

window.addEventListener(
    'scroll',
    debounce(() => {
        scrollTop()
        scrollListener()
        scrollSkills()
    }, 100)
)
