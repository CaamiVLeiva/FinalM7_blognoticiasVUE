<template>
  <div id="app">
    <Navbar />
    <main class="main-content">
      <router-view/>
    </main>
    <Footer />
  </div>
</template>

<script>
// Importa los componentes Navbar y Footer
import Navbar from './components/NavbarSection.vue';
import Footer from './components/FooterSection.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
};
</script>

<style>
/* Estilos globales */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Asegura que el contenido cubra toda la altura de la ventana */
}

.main-content {
  flex: 1; /* Permite que el contenido principal tome el espacio restante */
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1030; /* Asegura que el navbar se superponga sobre otros elementos */
}

.footer {
  background-color: #f8f9fa;
  padding: 1rem;
  text-align: center;
  border-top: 1px solid #e9ecef;
}

body {
  padding-top: 56px; /* Ajusta el padding para compensar el navbar fijo */

}
</style>
