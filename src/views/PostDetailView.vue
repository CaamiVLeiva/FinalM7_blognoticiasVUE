<template>
    <div class="container">
        <div v-if="post">
            <h2>{{ post.title }}</h2>
            <p class="text-muted">Por {{ post.author }} el {{ formatDate(post.createdAt) }}</p>
            <p>{{ post.content }}</p>
            <CommentsComponent :postId="postId" />
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script>
import { db } from '../firebase';
import { ref, onValue } from 'firebase/database';
import CommentsComponent from '../components/CommentsComponent.vue';

export default {
    name: 'PostDetailView',
    components: {
        CommentsComponent
    },
    data() {
        return {
            post: null,
            postId: this.$route.params.id
        };
    },
    created() {
        this.fetchPost();
    },
    methods: {
        fetchPost() {
            const postRef = ref(db, `posts/${this.postId}`);
            onValue(postRef, (snapshot) => {
                const postData = snapshot.val();
                if (postData) {
                    this.post = postData;
                } else {
                    console.error('No se encontraron datos para este post');
                }
            });
        },
        formatDate(timestamp) {
            const date = new Date(timestamp);
            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        }
    }
};
</script>

<style scoped>
.container {
    padding: 2rem;
}
</style>
