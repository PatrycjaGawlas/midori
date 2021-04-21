<template>
  <b-navbar toggleable="md"  type="dark" class="navbar" :class="[currentPath !== '/' && currentPath !== '/kontakt' ? 'navbar--light' : '']">
    <b-navbar-brand @click="redirectToHome" class="navbar__logo">
      <template v-if="currentPath === '/' || currentPath === '/kontakt'">
        <img class="navbar__logo--img d-none d-md-inline" src="../assets/logo.png" />
        <img class="navbar__logo--img d-inline d-md-none" src="../assets/logo-green.png" />
      </template>
      <img v-else class="navbar__logo--img" src="../assets/logo-green.png" />
      MIDORI
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-navbar-nav>
          <b-nav-item @click="redirectToAbout">O nas</b-nav-item>
          <b-nav-item @click="redirectToOffers">Oferta</b-nav-item>
          <b-nav-item @click="redirectToRealizations">Realizacje</b-nav-item>
          <b-nav-item class="d-inline d-md-none">Kontakt</b-nav-item>
          <button type="button" @click="redirectToContact" class="d-none d-md-inline navbar__contact-button btn btn-success">KONTAKT</button>
        </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "Navbar",
  computed: {
    currentPath() {
      return this.$route.path
    }
  },
  methods: {
    redirectToHome() {
      this.$router.push('/')
    },
    redirectToContact() {
      this.$router.push('/kontakt')
    },
    redirectToAbout() {
      this.$router.push('/o-nas')
    },
    redirectToOffers() {
      this.$router.push('/oferta')
    },
    redirectToRealizations() {
      this.$router.push('/realizacje')
    }
  }
};
</script>

<style lang="scss" scoped>

.navbar {
  font-family: 'Montserrat';
  position: absolute;
  padding: 0.4rem 1rem;
  top: 0;
  left: 0;
  z-index: 90;
  width: 100%;
  border-bottom: 1px solid rgba($color: white, $alpha: 0.2);
  background: white;

  @media (min-width: 576px) {
    padding: 0.7rem 2.5rem;
  }
  @media (min-width: 768px) {
    padding: 0.7rem 4rem;
    background: transparent;
  }

  &__logo {
    font-weight: bold;
    letter-spacing: 4px;
    font-size: 16px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
    &--img {
      margin-right: 0.4rem;
      height: 50px;
      width: 50px;
      @media (min-width: 768px) {
        margin-right: 0.8rem;
        height: 75px;
        width: 75px;
      }
    }
  }

  &__contact-button {
    margin-left: 2rem;
    padding: 0.8rem 2rem;
    border-radius: 2rem;
    background-color: #2a7d2e;
    border: none;
    font-weight: 600;
    letter-spacing: 1px;
  }

  .navbar-brand {
    color:  #2a7d2e;
    @media (min-width: 768px) {
      color: white;
    }
  }
  .navbar-toggler {
    color: #2a7d2e; 
  }
  .navbar-nav {
    align-items: center;
    .nav-link {
      color: black;
      @media (min-width: 768px) {
        color: white;
      }
    }
  }

  &--light {
    @media (min-width: 768px) {
      background: white;
    }

    .navbar-brand {
      color: #124A2F;
      &:hover {
        color: #124A2F;
      }
    }

    .navbar-nav {
      .nav-link {
        color: black !important;
        &:hover {
          color: black
        }
      }
    }
  }
}

a {
  &:hover {
      text-decoration: none;
  }
}
</style>