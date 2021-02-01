<template>
  <Container
    title="Ingresa a tu cuenta"
    subtitle=""
    origin="signin"
    url="login.png"
    rigthText="¿No tienes una cuenta en Wobiz?"
    rigthButton="Crea tu cuenta"
    rigthNavegation="signup"
    :form="form"
    leftButton="Ingresar a mi cuenta"
  />
</template>
<script>
export default {
  data: function () {
    return {
      form: [
        {
          namber: 'Email',
          valueDefault: 'Ej: usuario@mailsadasd.com',
          id: '0-signin',
          input: 'input-0',
          type: 'email',
        },
        {
          namber: 'Contraseña',
          valueDefault: 'Escribe su contraseña',
          id: '1-signin',
          input: 'input-1',
          type: 'password',
        },
      ],
    }
  },
}
</script>
