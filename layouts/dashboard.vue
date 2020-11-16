<template>
  <div class="c-app">
    <TheSidebar/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <nuxt></nuxt>
            </transition>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from '@/components/TheSidebar'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

import { freeSet } from '@coreui/icons'

export default {
  name: 'TheContainer',
  icons: { freeSet },
  components: {
    TheSidebar,
    TheHeader,
    TheFooter
  }
}
</script>

<style lang='scss'>
@import '@/assets/scss/style.scss';
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
