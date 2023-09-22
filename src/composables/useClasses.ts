import type { RouteLocationNormalizedLoaded } from '#vue-router'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import type { Gtag } from 'nuxt-gtag/dist/runtime/types'

export class ServiceQueryContent {
  static title: string
  static description: string
  static body: ParsedContent | undefined
  static updatedAt: Number | undefined

  constructor (title?: string, description?: string, body?: ParsedContent) {
    if (!title) { throw new Error('title cannot be null', { cause: 'it did\'nt got an title' }) }
    if (!description) { throw new Error('description cannot be null', { cause: 'it did\'nt got an description' }) }
    ServiceQueryContent.title = title
    ServiceQueryContent.description = description
    ServiceQueryContent.body = body
  }
}

export class ServiceQueryPost extends ServiceQueryContent {
  static image: string
  constructor (title?: string, description?: string, body?: ParsedContent, image?: string) {
    super(title, description, body)
    if (!image) { throw new Error('image cannot be null', { cause: 'it did\'nt got an image' }) }
    ServiceQueryPost.image = image
  }
}

export class Analytics {
  static route: RouteLocationNormalizedLoaded;
  static project: string = 'Agência Nuxa';
  static gtag: Gtag;
  constructor(){
    const { gtag } = useGtag()

    Analytics.gtag = gtag
    Analytics.route = useRoute();
  };

  viewPage(){
    Analytics.gtag('event', 'screen_view', {
      app_name: Analytics.project,
      screen_name: Analytics.route.name
    })
  }

  convert(){
    Analytics.gtag('event', 'generate_lead', {
      event_category: 'engagement',
      app_name: Analytics.project,
      page_location: Analytics.route.path
    })
  }

  convertError(e: string){
    Analytics.gtag('event', e, {
      event_category: 'error',
      app_name: Analytics.project,
      page_location: Analytics.route.path
    })
  }
}