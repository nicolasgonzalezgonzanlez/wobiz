<template>
  <Container
    title="Comienza a vender online"
    subtitle="Crea tu cuenta y prueba Wobiz 14 días gratis."
    origin="signup"
    url="recovery.png"
    rigthText="¿Ya tienes una cuenta en Wobiz?"
    rigthButton="Ingresa"
    rigthNavegation="signin"
    :form="form"
    leftButton="Crear mi cuenta en Wobiz"
  />
</template>
<script>
export default {
  data: function () {
    return {
      form: [
        {
          namber: 'Nombre de tu marca',
          valueDefault: 'Ej: Mi tienda online',
          id: '0-signup',
          input: 'input-0',
          type: 'text',
        },
        {
          namber: 'email',
          valueDefault: 'Ej: usuario@mailsadasd.com',
          id: '1-signup',
          input: 'input-1',
          type: 'email',
        },
        {
          namber: 'Contraseña',
          valueDefault: 'Escribe su contraseña',
          id: '1-signup',
          input: 'input-2',
          type: 'password',
        },
      ],
    }
  },
}
</script>
