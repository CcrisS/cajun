<template>
    <article class="box">

        <el-card :body-style="{ padding: '0px' }">
            <div slot="header" class="clearfix" style="padding: 0">
                <h1 v-text="article.title"></h1>
                <router-link 
                    class="link" 
                    v-if="articleId !== null" 
                    :to="{ name: 'NewsDetail', params: { id: articleId }}"
                    ><i class="el-icon-d-arrow-right"></i></router-link>
            </div>
            <div>
                <img :src="article.urlToImage" :alt="article.title" class="image" />
                <div class="content">
                    <p class="description" v-text="article.description"></p>
                    <span class="time">{{ createdDate }}</span>
                </div>
            </div>
            <div class="footer">
                <span class="author" v-text="article.author"></span><br />
                <a class="link" :href="article.url" v-text="article.url.substring(0, 50) + '...'"></a>
            </div>
        </el-card>
    </article>
</template>

<script>
export default {
    props: {
        article: Object,
        articleId: { 
            type: Number,
            default: null
        }
    },
    computed:{
        createdDate(){
            return new Date(this.article.publishedAt).toString();
        }
    }
}
</script>

<style scoped>
    h1 { margin: 0; font-size: 18px; }
    .content { padding: 10px }
    .image { height: 100px; display: block; margin: 0 auto; }
    .box { margin-bottom: 20px; }
    .time { font-size: 13px; color: #999; }
    .description { height: 100px; color: #555 }
    .author { font-weight: bold }
    .footer { background: #eee; padding: 10px; font-size: 12px  }

    .clearfix:before, .clearfix:after { display: table; content: ""; }
    .clearfix:after {  clear: both }
</style>