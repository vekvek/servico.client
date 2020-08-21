<template>
  <div>
    <div class="customer" v-if="user.type === 'customer'">
      <header class="app-header">
        <div class="container">
          <div class="search-bar">
            <div class="search-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15L10.3333 10.3333L15 15ZM11.8889 6.44444C11.8889 7.15942 11.7481 7.86739 11.4745 8.52794C11.2008 9.18849 10.7998 9.78868 10.2942 10.2942C9.78868 10.7998 9.18849 11.2008 8.52794 11.4745C7.86739 11.7481 7.15942 11.8889 6.44444 11.8889C5.72947 11.8889 5.0215 11.7481 4.36095 11.4745C3.7004 11.2008 3.1002 10.7998 2.59464 10.2942C2.08908 9.78868 1.68804 9.18849 1.41443 8.52794C1.14082 7.86739 1 7.15942 1 6.44444C1 5.00049 1.57361 3.61567 2.59464 2.59464C3.61567 1.57361 5.00049 1 6.44444 1C7.8884 1 9.27322 1.57361 10.2942 2.59464C11.3153 3.61567 11.8889 5.00049 11.8889 6.44444Z" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>

            <input
              type="text"
              placeholder="Search for people"
            >
          </div>

          <div class="right-side">
            <button>
              Post Job
            </button>

            <div class="current-logged-in-user">
              <img src="https://thumbs.dreamstime.com/b/default-avatar-photo-placeholder-profile-icon-eps-file-easy-to-edit-default-avatar-photo-placeholder-profile-icon-124557887.jpg" class="avatar-image" alt="Avatar">
              <span>{{ user.fullname }}</span>
              <div class="icon">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 1L7 7L1 1" stroke="#2B2B2B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section class="posted-jobs">
        <div class="container">
          <div class="table-wrapper">
            <div class="w">
              <h3>Submitted Jobs <span id="sm">23</span></h3>
              <span>3 jobs to find servicer</span>
            </div>

            <section class="jobs">
              <div class="job">
                <div class="wrap">
                  <p>Looking for servicer to fix major workings</p>
                  <div class="badge"></div>
                </div>
                <button class="button-list">View Project</button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>

    <div class="servicer" v-if="user.type === 'servicer'">
      <p>Servicer</p>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'auth',
  computed: mapState('auth', ['user']),
}
</script>
