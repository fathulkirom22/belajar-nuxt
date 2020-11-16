<template lang='pug'>
  div.body.text-center
    ValidationObserver(v-slot="{ handleSubmit }")
      b-form.form-signin(@submit.prevent="handleSubmit(singin)")
        img.mb-4(src="@/assets/img/logo-kirimin.png" alt="")
        h1.h3.mb-3.font-weight-normal Please login
        label.sr-only(for="inputEmail") E-mail
        ValidationProvider(rules="required|email" name='E-mail' v-slot="validationContext")
          b-form-input(
            v-model='email' 
            type="email" 
            placeholder="E-mail" 
            autofocus
            :state="$helperValidationState(validationContext)")
        label.sr-only(for="inputPassword") Password
        ValidationProvider(rules="required" name='Password' v-slot="validationContext")
          b-form-input(
            v-model='password' 
            type="password" 
            placeholder="Password" 
            :state="$helperValidationState(validationContext)")
        b-form-checkbox.mb-3(value="remember-me") Remember me
        b-button(variant='primary' size='lg' block type="submit") Login
        p.mt-5.mb-3.text-muted &copy; 2020
</template>

<script>
export default {
  data:()=>({
    email : null,
    password : null
  }),
  methods:{
    singin(){
      var param = {
        email: this.email,
        password: this.password,
        origin: "cms"
      }
      this.$nextTick(() => {
        this.$nuxt.$loading.start()
        this.$auth.loginWith('local', { data: param })
          .finally(()=>{
            this.$nuxt.$loading.finish()
          })
      })
    },
  }
}
</script>

<style scoped>

.body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
}

.form-signin {
  width: 100%;
  max-width: 400px;
  min-width: 360px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>