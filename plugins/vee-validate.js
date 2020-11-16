import Vue from 'vue'
import { 
  ValidationProvider, 
  ValidationObserver, 
  extend, 
  localize
} from 'vee-validate';
import { 
  required, 
  required_if,
  min, 
  numeric, 
  confirmed,
  email 
} from "vee-validate/dist/rules";
import id from 'vee-validate/dist/locale/id.json';

Vue.component('ValidationProvider', ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

extend("required", required);
extend("required_if", required_if);
extend("min", min);
extend("numeric", numeric);
extend("confirmed", confirmed);
extend("email", email);
extend("greater-than-zero", value => {
  return value > 0 ? true : '{_field_} harus lebih besar dari nol';
});
extend('object_required', value => {
  return !_.isEmpty(value) ? true : '{_field_} dibutuhkan';
})

localize('id', id);