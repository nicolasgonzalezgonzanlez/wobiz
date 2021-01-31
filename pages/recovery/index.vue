<template>
  <Container
    title="¿Olvidaste tu contraseña?"
    subtitle="No te preocupes. Escribe tu email y te enviaremos las instrucciones para recuperarla."
    origin="recovery"
    url="recovery.png"
    rigthText="¿Ya tienes una cuenta en Wobiz?"
    rigthButton="Ingresar"
    rigthNavegation="signin"
    :form="form"
    leftButton="Recuperar contraseña"
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
        },
      ],
    }
  },
}
</script>
