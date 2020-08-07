<template>
  <div>
    <h1>Dashboard page</h1>

    {{ user.fullname }}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: mapState('auth', ['user']),
}
</script>
