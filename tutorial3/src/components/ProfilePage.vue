<template>
  <div class="container">
    <h2 class="mt-5">Profile</h2>
    <div class="mt-4">
      <p><strong>First Name:</strong> {{ firstName }}</p>
      <p><strong>Last Name:</strong> {{ lastName }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    firstName() {
      return this.$route.query.firstName
    },
    lastName() {
      return this.$route.query.lastName
    },
    email() {
      return this.$route.query.email
    },
  },
  created() {
    console.log(
      "Received Query Params:",
      this.firstName,
      this.lastName,
      this.email
    )
  },
}
</script>
