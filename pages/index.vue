<template lang='pug'>
  div
    h1 Hello world!
</template>

<script>
export default {
  middleware: 'auth',
  layout: 'dashboard'
}
</script>