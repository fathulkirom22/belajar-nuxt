import Vue from 'vue';
export default function ({ $axios }) {
  $axios.onError(error => {
    
    var title = 'Error'
    var msg = 'An error occurred while retrieving data'

    try {
      if(error.response.data.errors){
        var arr_error_msg = Object.values(error.response.data.errors)
        title = error.response.data.message
        msg = arr_error_msg[0][0] 
      } else if (error.response.data.error){
        msg = error.response.data.message
      } else {
        msg = error.response.data.message
      }
    } catch(e) {
      console.error('Error handle axios :',e)
    }

    try{
      $nuxt.$loading.finish()
      $nuxt.$bvToast.toast(msg, {
        title: title,
        variant: "danger"
      })
    } catch(e) {
      const vm = new Vue({})
      vm.$bvToast.toast(msg, {
        title: title,
        variant: "danger"
      })
    }

  })
}