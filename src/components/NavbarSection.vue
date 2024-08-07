<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div class="container">
            <router-link class="navbar-brand" to="/">MyBlog</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Inicio</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Sobre Nosotros</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/register">Registrarse</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/create-post">Crear Post</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavbarSection'
};
</script>

<style scoped>
/* Puedes añadir estilos personalizados aquí */
</style>