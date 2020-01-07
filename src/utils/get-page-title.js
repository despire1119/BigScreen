import settings from '@/settings'

const title = settings.title

export default function getPageTitle(pageTitle) {
  return pageTitle ? `${pageTitle} - ${title}` : `${title}`
}
