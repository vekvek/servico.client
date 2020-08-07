<template>
  <div>
    <h1>Login</h1>

    <form
      class="form"
      @submit.prevent="submit"
      @keydown="errors.clear($event.target.name)"
    >
      <div class="group">
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
        <input
          type="password"
          name="password"
          class="input"
          v-model="form.password"
          placeholder="Password"
        >
        <strong v-if="errors.has('password')">{{ errors.get('password') }}</strong>
      </div>

      <div class="group">
        <button
          type="submit"
          class="button"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import Error from '@/utils/error'

export default {
  data() {
    return {
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
