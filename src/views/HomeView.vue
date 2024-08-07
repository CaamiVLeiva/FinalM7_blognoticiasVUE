<template>
    <div class="home">
        <HeroSection />
        <div class="container my-4">
            <div class="row">
                <div v-for="post in sortedPosts" :key="post.key" class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100 shadow-sm border-light">
                        <img class="card-img-top" src="https://via.placeholder.com/300x200" alt="Card image cap">
                        <div class="card-body">
                            <h5 class="card-title">
                                <router-link class="text-decoration-none text-dark" :to="`/post/${post.key}`">{{ post.title }}</router-link>
                            </h5>
                            <p class="card-text">{{ post.content.substring(0, 100) }}...</p>
                        </div>
                        <div class="card-footer bg-light border-top-0">
                            <small class="text-muted">Por {{ post.author }} el {{ formatDate(post.createdAt) }}</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import HeroSection from '../components/HeroSection.vue';
import { db } from '../firebase';
import { ref, onValue, query, orderByChild } from 'firebase/database';

export default {
    components: { HeroSection },
    data() {
        return {
            posts: [],
        };
    },
    computed: {
        sortedPosts() {
            return [...this.posts].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
    },
    created() {
        const postsRef = ref(db, 'posts');
        const postsQuery = query(postsRef, orderByChild('createdAt'));
        onValue(postsQuery, (snapshot) => {
            const postsData = snapshot.val();
            if (postsData) {
                this.posts = Object.keys(postsData).map(key => ({
                    key,
                    ...postsData[key]
                }));
            }
        });
    },
    methods: {
        formatDate(timestamp) {
            const date = new Date(timestamp);
            return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
        }
    }
};
</script>

<style scoped>
.home {
    padding: 2rem 0;
}

.card {
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
    height: 200px;
    object-fit: cover;
}

.card-title {
    font-size: 1.25rem;
    font-weight: 500;
}

.card-text {
    font-size: 0.9rem;
}

.card-footer {
    font-size: 0.8rem;
    color: #6c757d;
}
</style>
