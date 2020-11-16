const currency = {
  idr(number = 0) {
    return new Intl.NumberFormat('id-IN', { style: 'currency', currency: 'IDR' }).format(number)
  },
  idrObj(number = 0) {
    return new Intl.NumberFormat('id-IN', { style: 'currency', currency: 'IDR' }).formatToParts(number)
  },
  idrNoSymbol(number = 0) {
    return new Intl.NumberFormat('id-IN').format(number)
  }
}

const calc = {
  roundHalf(value = 0) {
    return Math.round(value*2+0.3)/2;
  }
}

export default ({store}, inject) => {
  inject('currency', currency);
  inject('calc', calc);

  inject('helperValidationState', ({ dirty, validated, valid = null }) => dirty || validated ? valid : null);
}