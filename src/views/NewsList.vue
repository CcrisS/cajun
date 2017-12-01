<template>
    <article>

        <el-row :gutter="10">
            <el-col :span="8" v-for="(article, index) in $store.state.newsList" :key="index">
                <news :article="article" :articleId="index"></news>
            </el-col>
        </el-row>

        <span v-show="loading"><i class="el-icon-loading"></i></span>
    </article>
</template>

<script>
import News from '@/components/News';

export default {
    data(){
        return {
            loading: true
        }
    },
    components: { News },
    created(){
        this.$store.dispatch('fetchNews').then(() => this.loading = false);
    }
}
</script>