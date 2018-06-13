<template>
  <div class="posts">
    <h1>PROVA 1</h1>
    <p class="name t-left">Nome: </p>
    <button class="btn" @click="getPosts">Gerar perguntas</button>
    <ol type="number">
      <li v-for="(post, index) in posts.questions" :key="index">
        <em><span>{{ post.description }}</span></em>
        <ol type="a">
          <li v-for="(answer) in answers.answers" :key="answer.id" v-if="answer.question_id === post.id">
            <pre>{{answer.description}}</pre>
          </li>
        </ol>
      </li>
    </ol>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: [],
      answers: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
      this.getAnswers()
    },
    async getAnswers () {
      const response = await PostsService.fetchAnswers()
      this.answers = response.data
      this.answers.answers.sort(function (a, b) {
        return 0.5 - Math.random()
      })
      this.normalizeQuestios()
    },
    normalizeQuestios () {
      this.posts.questions.forEach(question => {
        this.answers.answers.forEach(answer => {
          if (answer.question_id === question.id) {
            if (question.answers) {
              question.answers.push(answer)
            } else {
              question.answers = []
              question.answers.push(answer)
            }
          }
        })
      })
    }
  }
}
</script>

<style type="text/css">
body {
  padding: 40px
}
.t-left {
  text-align: left;
}
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_post_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
ol {
  text-align: left;
  padding: 0;
}

ol ol {
  padding-left: 30px;
  margin-bottom: 1em;
}
ol ol li {
  margin-bottom: .5em
}
.bold {
  font-weight: bold;
}
pre {
  margin: 0;
  padding: 0;
}

@media print {
  .btn {
    display: none;
  }
}
</style>
