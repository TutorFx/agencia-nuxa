import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export class Scroller {
  static target: HTMLElement | null = null;
  static locomotive: LocomotiveScroll | null = null;
  init() {
    try {
      const scrollerEl = document?.getElementById('__nuxt');
      if (scrollerEl === null) return;
      if (Scroller.locomotive !== null) return;
      Scroller.locomotive = new LocomotiveScroll({
        el: scrollerEl,
        smooth: true,
      });
    } catch (e) {
      console.log(e)
    } finally {
      console.log('🚀 Nuxa - Scroller service has been initialized!');
    }
  }
  mount() {
    try {
      if (Scroller.locomotive instanceof LocomotiveScroll) return Scroller.locomotive.init();
    } catch (e) {
      console.log(e)
    } finally {
      console.log('✨ Nuxa - Scroller service has been mounted!');
    }
  }
  destroy() {
    try {
      if (Scroller.locomotive instanceof LocomotiveScroll){ 
        Scroller.locomotive.stop();
        Scroller.locomotive.destroy();
      }
    } catch (e) {
      console.log(e)
    } finally {
      console.log('🚀 Nuxa - Scroller service has been unmounted!');
    }
  }
}