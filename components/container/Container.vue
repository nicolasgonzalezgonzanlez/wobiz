<template>
  <b-row>
    <b-col class="box">
      <div class="container-left">
        <img src="logo.png" class="logo" />
        <div>
          <h3 class="title">
            {{ title || 'title' }}
          </h3>
          <p class="subtitle">
            {{ subtitle || '' }}
          </p>
        </div>
        <div v-if="Object.keys(modelInput).length > 0">
          <b-form @submit="onSubmit">
            <b-form-group
              v-for="{ namber, id, valueDefault, input, type } in form"
              :key="id"
              :label="namber"
              label-for="input-1"
            >
              <b-form-input
                :id="input"
                v-model="modelInput[namber]"
                :type="type"
                :namber="namber"
                :placeholder="valueDefault"
                required
              ></b-form-input>
              <div v-html="errorInput[namber]"></div>
            </b-form-group>
          </b-form>
          <div v-if="origin === 'signin'">
            <NuxtLink to="/recovery">
              <span class="left-password">¿Olvidaste tu contraseña?</span>
            </NuxtLink>
          </div>
          <b-button @click="onSubmit" class="left-button-action">{{
            leftButton
          }}</b-button>
          <div class="left-button-back" v-if="origin === 'recovery'">
            <NuxtLink to="/signin">
              <b-button variant="outline">Volver</b-button>
            </NuxtLink>
          </div>
        </div>
        <div v-if="origin === 'signup'">
          <p class="signup-text">
            Al registrarme declaro que acepto los<a
              href="https://www.wobiz.com/privacy"
              target="_blank"
            >
              términos y condiciones</a
            >
            y las
            <a href="https://www.wobiz.com/termsandconditions" target="_blacnk"
              >políticas de privacidad</a
            >
            de Wobiz.
          </p>
        </div>
      </div>
    </b-col>
    <b-col cols="8" class="show">
      <div class="flot">
        <span class="span-state"> {{ rigthText || 'text-rigth' }} </span>
        <NuxtLink :to="rigthNavegation">
          <b-button variant="outline" class="button-navegation">{{
            rigthButton || 'button'
          }}</b-button>
        </NuxtLink>
      </div>
      <img :src="url" class="image" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: [
    'title',
    'subtitle',
    'url',
    'rigthText',
    'link',
    'origin',
    'rigthButton',
    'rigthNavegation',
    'form',
    'leftButton',
  ],
  data: function () {
    return {
      show: false,
      modelInput: {},
      errorInput: {},
    }
  },
  /* eslint-disable */
  created() {
    this.form.map((value) => {
      let namber = value.namber
      this.modelInput[namber] = ''
      this.errorInput[namber] = ''
    })
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      //captura data
      console.log(this.modelInput)
      if (this.origin === 'signin') {
        if (this.modelInput.Email.length < 6)
          this.errorInput.Email = 'aca vendria el texto'
        if (this.modelInput.Contraseña.length < 6)
          this.errorInput.Contraseña = 'aca vendria el texto'
      }
      console.log(this.errorInput)
    },
  },
  /* eslint-enable */
}
</script>

<style scooped>
.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  -o-object-position: right;
  object-position: right;
}
.box {
  box-shadow: 0 0 6px 0 rgb(0 0 0 / 15%);
}
.show {
  padding-left: 0;
  padding-right: 0;
}
.flot {
  position: absolute;
  top: 4vh;
  right: 10vh;
}
.span-state {
  margin-right: 10px;
  font-size: 13px;
}
.button-navegation {
  border: 1px solid #163a49;
}
.button-navegation:hover {
  color: #fff;
  text-decoration: none;
  background: #163a49;
}
.container-left {
  padding: 30px;
}
.logo {
  width: 130px;
}
.title {
  color: #163a49;
  margin: 20px 0px 20px 0px;
  font-weight: 700;
}
.subtitle {
  color: #969696;
  margin: 20px 0px 20px 0px;
}
.signup-text {
  color: #969696;
  text-align: center;
  margin-top: 20px;
}
a {
  color: #000;
}
a:hover {
  text-decoration: none;
  color: black;
}
.left-button-action {
  width: 100%;
  margin: 10px 0px 10px 0px;
  background: #1bb8e3;
  border: none;
  padding: 14px 0px 14px 0px;
  font-size: 14px;
}
.left-button-back {
  display: flex;
  justify-content: center;
}
.left-password {
  text-decoration: underline !important;
}
/*
  property management (show with CSS)
*/
@media (max-width: 660px) {
  .show {
    display: none;
  }
}
@media (orientation: landscape) and (max-width: 767px) {
  .show {
    display: none;
  }
}
</style>
