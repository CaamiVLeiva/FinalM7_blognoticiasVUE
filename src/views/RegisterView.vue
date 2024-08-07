<template>
    <div class="container mt-5">
        <h2 class="mb-4">Registro</h2>
        <form @submit.prevent="register" class="form-group">
            <div class="mb-3">
                <input v-model="email" type="email" class="form-control" placeholder="Email" required />
            </div>
            <div class="mb-3">
                <input v-model="password" type="password" class="form-control" placeholder="Password" required />
            </div>
            <button type="submit" class="btn btn-primary">Registrarse</button>
        </form>
    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        async register() {
            try {
                const auth = getAuth(); // Inicializa auth
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                console.log('Usuario registrado:', userCredential.user);
                this.$router.push('/'); // Redirige a la página principal o ajusta según tu configuración
            } catch (error) {
                console.error('Error al registrar usuario:', error.message);
            }
        }
    }
};
</script>

<style scoped>
.container {
    max-width: 500px;
    margin: 0 auto;
}

h2 {
    text-align: center;
}

.form-control {
    border-radius: 0.25rem;
    box-shadow: none;
}

.btn-primary {
    width: 100%;
    padding: 0.75rem;
    border-radius: 0.25rem;
}
</style>
