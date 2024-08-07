<template>
    <div class="container my-4">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="mb-3">
                <input v-model="email" type="email" class="form-control" placeholder="Email" required />
            </div>
            <div class="mb-3">
                <input v-model="password" type="password" class="form-control" placeholder="Password" required />
            </div>
            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </form>
        <p v-if="error" class="text-danger">{{ error }}</p>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password: '',
            error: null,
        };
    },
    methods: {
        async login() {
            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(auth, this.email, this.password);
                this.$router.push('/');
            } catch (error) {
                this.error = error.message;
                console.error(error);
            }
        },
    },
};
</script>

<style scoped>
/* Estilos específicos de LoginView.vue */
.container {
    padding: 2rem 0;
}
</style>
