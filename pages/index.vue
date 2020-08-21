<template>
  <div>
    <form
      class="form"
      @submit.prevent="submit"
      @keydown="errors.clear($event.target.name)"
    >
      <div class="group">
        <input
          type="text"
          name="firstname"
          class="input"
          v-model="form.firstname"
          placeholder="Firstname"
        >
        <strong v-if="errors.has('firstname')">{{ errors.get('firstname') }}</strong>
      </div>

      <div class="group">
        <input
          type="text"
          name="lastname"
          class="input"
          v-model="form.lastname"
          placeholder="Lastname"
        >
        <strong v-if="errors.has('lastname')">{{ errors.get('lastname') }}</strong>
      </div>

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
        <input
          type="password"
          name="password"
          class="input"
          v-model="form.password_confirmation"
          placeholder="Confirm Password"
        >
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
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        password_confirmation: null,
      },
      errors: new Error,
    }
  },

  methods: {
    async submit() {
      try {
        let response = await this.$axios.post('/register', this.form)
        let { token, user } = response.data

        await this.$store.dispatch('auth/save', { token, user })

        await this.$router.push('/dashboard')
      } catch (err) {
        if (err.response.data) {
          this.errors.save(err.response.data.errors)
        }
      }
    },
  }
}
</script>
