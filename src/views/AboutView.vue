<template>
    <div class="about">
        <div class="about-content">
            <h1 class="title">Sobre Nosotros</h1>
            <p class="description">
                Bienvenido a nuestra página. Aquí encontrarás información sobre nuestra misión, visión y los valores que nos impulsan.
            </p>
            <p class="description">
                Nuestro equipo está dedicado a proporcionar el mejor servicio posible y a cumplir con nuestras promesas a nuestros clientes.
            </p>
            <p class="description">
                Si tienes alguna pregunta o quieres saber más sobre nosotros, no dudes en <a href="/contact" class="contact-link">contactarnos</a>.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutView',
};
</script>

<style scoped>
/* Estilos específicos para AboutView.vue */
.about {
    padding: 3rem 1.5rem;
    background-color: #f8f9fa;
    color: #333;
    text-align: center;
}

.about-content {
    max-width: 800px;
    margin: 0 auto;
}

.title {
    font-size: 2.5rem;
    font-weight: bold;
    color: #343a40;
    margin-bottom: 1.5rem;
}

.description {
    font-size: 1.125rem;
    line-height: 1.6;
    color: #495057;
    margin-bottom: 1rem;
}

.contact-link {
    color: #007bff;
    text-decoration: none;
}

.contact-link:hover {
    text-decoration: underline;
}
</style>
