<template>
  <div class="container">
    <h2 class="mt-5">Registration Form</h2>
    <form class="mt-4" @submit.prevent="register">
      <div class="row mb-3">
        <div class="col-md-6">
          <label for="firstName" class="form-label">First Name:</label>
          <input
            type="text"
            id="firstName"
            class="form-control"
            v-model="firstName"
            @input="validateFirstName"
          />
          <div v-if="errors.firstName" class="text-danger">
            {{ errors.firstName }}
          </div>
        </div>
        <div class="col-md-6">
          <label for="lastName" class="form-label">Last Name:</label>
          <input
            type="text"
            id="lastName"
            class="form-control"
            v-model="lastName"
            @input="validateLastName"
          />
          <div v-if="errors.lastName" class="text-danger">
            {{ errors.lastName }}
          </div>
        </div>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email:</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="email"
          @input="validateEmail"
        />
        <div v-if="errors.email" class="text-danger">{{ errors.email }}</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password:</label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="password"
          @input="validatePassword"
        />
        <div v-if="errors.password" class="text-danger">
          {{ errors.password }}
        </div>
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label"
          >Confirm Password:</label
        >
        <input
          type="password"
          id="confirmPassword"
          class="form-control"
          v-model="confirmPassword"
          @input="validateConfirmPassword"
        />
        <div v-if="errors.confirmPassword" class="text-danger">
          {{ errors.confirmPassword }}
        </div>
      </div>
      <button type="submit" class="btn btn-primary">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      errors: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        confirmPassword: null,
      },
    }
  },
  methods: {
    validateFirstName() {
      this.errors.firstName = /^[A-Za-z]+$/.test(this.firstName)
        ? null
        : "First name can only contain letters."
    },
    validateLastName() {
      this.errors.lastName = /^[A-Za-z]+$/.test(this.lastName)
        ? null
        : "Last name can only contain letters."
    },
    validateEmail() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      this.errors.email = emailPattern.test(this.email)
        ? null
        : "Please enter a valid email address."
    },
    validatePassword() {
      this.errors.password =
        this.password.length >= 8
          ? null
          : "Password must be at least 8 characters long."
    },
    validateConfirmPassword() {
      this.errors.confirmPassword =
        this.password === this.confirmPassword
          ? null
          : "Passwords do not match."
    },
    register() {
      this.validateFirstName()
      this.validateLastName()
      this.validateEmail()
      this.validatePassword()
      this.validateConfirmPassword()

      if (
        !this.errors.firstName &&
        !this.errors.lastName &&
        !this.errors.email &&
        !this.errors.password &&
        !this.errors.confirmPassword
      ) {
        this.$router.push({
          name: "Profile",
          query: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
          },
        })
      }
    },
  },
}
</script>
