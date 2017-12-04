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
import { actionTypes } from './../store/actions'

export default {
    data(){
        return {
            loading: true
        }
    },
    components: { News },
    created(){
        this.$store.dispatch(actionTypes.FETCH_NEWS).then(() => this.loading = false);
    }
}
</script>