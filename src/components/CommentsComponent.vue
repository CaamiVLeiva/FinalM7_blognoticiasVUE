<template>
    <div class="comments">
        <h3>Comentarios</h3>
        <div v-for="comment in comments" :key="comment.id" class="comment">
            <strong>{{ comment.author }}</strong> dijo:
            <p>{{ comment.text }}</p>
        </div>
        <div v-if="user">
            <h4>Deja un comentario</h4>
            <form @submit.prevent="addComment">
                <div class="mb-3">
                    <textarea v-model="newComment" class="form-control" placeholder="Escribe tu comentario aquí" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar</button>
            </form>
        </div>
        <p v-if="error" class="text-danger">{{ error }}</p>
    </div>
</template>

<script>
import { db, auth } from '../firebase';
import { ref, push, onValue } from 'firebase/database';

export default {
    name: 'CommentsComponent',
    props: {
        postId: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            comments: [],
            newComment: '',
            error: null,
            user: auth.currentUser
        };
    },
    created() {
        this.fetchComments();
        auth.onAuthStateChanged((user) => {
            this.user = user;
        });
    },
    methods: {
        fetchComments() {
            const commentsRef = ref(db, `posts/${this.postId}/comments`);
            onValue(commentsRef, (snapshot) => {
                const commentsData = snapshot.val();
                if (commentsData) {
                    this.comments = Object.keys(commentsData).map(key => ({
                        id: key,
                        ...commentsData[key]
                    }));
                } else {
                    this.comments = [];
                }
            });
        },
        async addComment() {
            if (!this.user) {
                this.error = 'Debes estar autenticado para añadir un comentario.';
                return;
            }

            if (!this.newComment) {
                this.error = 'El comentario no puede estar vacío.';
                return;
            }

            try {
                const commentsRef = ref(db, `posts/${this.postId}/comments`);
                await push(commentsRef, {
                    text: this.newComment,
                    author: this.user.email,
                    createdAt: new Date().toISOString(),
                    userId: this.user.uid
                });
                this.newComment = '';
                this.error = null;
            } catch (error) {
                console.error("Error adding comment: ", error);
                this.error = 'No se pudo añadir el comentario. Intenta de nuevo más tarde.';
            }
        }
    }
};
</script>

<style scoped>
.comments {
    margin-top: 2rem;
}
.comment {
    margin-bottom: 1rem;
}
</style>
