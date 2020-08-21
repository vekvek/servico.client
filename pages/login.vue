<template>
    <div>
      <div class="wrapper">
        <div class="login">
          <h1>Sign In into Servico</h1>

          <form
            class="form"
            @submit.prevent="submit"
            @keydown="errors.clear($event.target.name)"
          >
            <div class="group">
              <label for="email" class="label">Email Address</label>
              <input
                type="email"
                name="email"
                class="input"
                v-model="form.email"
                placeholder="Email Address"
              >
              <strong v-if="errors.has('email')">{{ errors.get('email') }}</strong>
            </div>

            <div class="group">
              <label for="password" class="label">Password</label>
              <input
                type="password"
                name="password"
                class="input"
                v-model="form.password"
                placeholder="Password"
              >
              <strong v-if="errors.has('password')">{{ errors.get('password') }}</strong>
            </div>

            <div class="group" id="button_section">
              <button
                type="submit"
                class="button is-wide"
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div class="image" :style="{ backgroundImage: `url(${rightImage})` }">
          <div class="introduction">
            <h3>Welcome back to Servico</h3>
            <p>We are here to bring you best service for finding PC servicer in every city in the globe. Our service is ready to sign you in.</p>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import rightImage from '@/static/test.png'
import Error from '@/utils/error'

export default {
  data() {
    return {
      rightImage,
      form: {
        email: null,
        password: null,
      },
      errors: new Error,
    }
  },
  methods: {
    async submit() {
      try {
        let response = await this.$axios.post('/login', this.form)
        let { token, user } = response.data

        await this.$store.dispatch('auth/save', { token, user })

        await this.$router.push('/dashboard')
      } catch (err) {
        if (err.response.data) {
          this.errors.save(err.response.data.errors)
        }
      }
    }
  }
}
</script>
