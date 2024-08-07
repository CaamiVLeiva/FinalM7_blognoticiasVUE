<template>
    <div class="container my-5">
        <h2 class="mb-4 text-center">Crear Noticia</h2>
        <form @submit.prevent="createPost">
            <div class="mb-3">
                <input v-model="title" type="text" class="form-control" placeholder="Título" required />
            </div>
            <div class="mb-3">
                <textarea v-model="content" class="form-control" rows="5" placeholder="Contenido" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary w-100" :disabled="creatingPost">
                <span v-if="creatingPost" class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Publicar
            </button>
        </form>
        <p v-if="error" class="text-danger mt-3">{{ error }}</p>
    </div>
</template>

<script>
import { db, auth } from '../firebase';
import { ref, push } from 'firebase/database';

export default {
    name: 'CreatePostView',
    data() {
        return {
            title: '',
            content: '',
            error: null,
            creatingPost: false,
        };
    },
    methods: {
        async createPost() {
            if (!this.title || !this.content) {
                this.error = 'Por favor, completa todos los campos.';
                return;
            }

            this.creatingPost = true;

            try {
                const user = auth.currentUser;
                const postsRef = ref(db, 'posts'); // Referencia al nodo 'posts' en Realtime Database
                await push(postsRef, { // Agrega los datos usando la función push
                    title: this.title,
                    content: this.content,
                    createdAt: new Date().toISOString(), // Guarda la fecha en formato ISO string
                    author: user.email,
                    userId: user.uid,
                });
                this.$router.push('/');
            } catch (error) {
                this.error = error.message;
            } finally {
                this.creatingPost = false;
            }
        },
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 1rem;
}

h2 {
    font-size: 2rem;
    color: #333;
}

.form-control {
    border-radius: 0.25rem;
    box-shadow: none;
    border: 1px solid #ced4da;
}

textarea.form-control {
    resize: vertical;
}

.btn-primary {
    padding: 0.75rem;
    border-radius: 0.25rem;
    font-size: 1rem;
}

.spinner-border {
    border-width: 2px;
}

.text-danger {
    font-size: 0.875rem;
    color: #dc3545;
}
</style>
