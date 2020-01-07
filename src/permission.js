import router from './router'
import getPageTitle from '@/utils/get-page-title'
import 'nprogress/nprogress.css' // progress bar style
import NProgress from 'nprogress' // progress bar

NProgress.configure({ showSpinner: false })

router.beforeEach((to, from, next) => {
  NProgress.start()
  document.title = getPageTitle(to.meta.title)
  next()
})

router.afterEach(_ => {
  NProgress.done()
})
