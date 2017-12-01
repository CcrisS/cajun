<template>
    <article>
        <news v-if="article" :article="article"></news>
    </article>
</template>

<script>
import News from '@/components/News';

export default {
    data(){
        return {
            article: null
        }
    },
    components: { News },
    created(){
        this.article = this.$store.state.newsList[this.$route.params.id];
    }
}
</script>

<style>

</style>
