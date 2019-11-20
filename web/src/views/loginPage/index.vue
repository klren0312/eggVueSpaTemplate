<template>
  <section class="login-content">
    <div class="bg"></div>
    <div class="login-form">
      <div class="title">
        EGG Template
      </div>
      <div class="form-container">
        <div class="header">账号登录</div>
        <el-form class="the-form" :model="loginForm" :rules="rules" ref="loginForm" :inline="false">
          <el-form-item class="form-item" prop="username">
            <el-input
              placeholder="用户名"
              v-model="loginForm.username">
              <i slot="prefix" class="login-icon iconfont icon-personchoosed-copy"></i>
            </el-input>
          </el-form-item>
          <el-form-item class="form-item" prop="password">
            <el-input
              type="password"
              placeholder="密码"
              @keyup.enter.native="login()"
              v-model="loginForm.password">
              <i slot="prefix" class="login-icon iconfont icon-mima"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script>
import { login } from '@/apis/user.api'
export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      redirect: undefined
    }
  },
  methods: {
    login () {
      this.$refs['loginForm'].validate((valid) => {
        if (valid) {
          this.loginForm.username = this.loginForm.username.trim()
          login(this.loginForm).then(res => {
            if (res) {
              this.$message.success('登录成功')
              let user = {
                username: this.loginForm.username,
                token: res.token
              }
              this.$store.dispatch('SET_USER', user)
              // console.log(res)
              this.$store.dispatch('SET_TOKEN', res.token)
              this.$storage.set('admin_user', user, 24 * 60 * 60)
              // console.log(this.$router)
              // this.$router.push(this.redirect || '/')
              this.$router.push('/')
            }
          }).catch(() => {
          })
        } else {
          return false
        }
      })
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  }
}
</script>
<style lang="scss" scoped>
.login-content {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f1;
  background-size: cover;
  .login-form {
    width: 500px;
    height: 600px;
    .title {
      color: #333;
      font-size: 32px;
      font-weight: bold;
      width: 454px;
      line-height: 70px;
      text-align: center;
    }
    .form-container {
      width: 452px;
      height: 436px;
      background: #fff;
      margin-top: 20px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0 0 8px rgba(0,0,0,.1);
      .header {
        color: #333;
        font-size: 18px;
        text-align: center;
        padding: 60px 0;
      }
      .the-form {
        padding: 0 46px;
        .login-btn {
          width: 100%;
        }
        .form-item {
          margin-bottom: 20px;
        }
      }
      .el-input--prefix {
        margin: 0 auto;
        width: 360px;
        height: 40px;
        display: block;
        .el-input__prefix {
          line-height: 40px;
          margin-left: 5px;
        }
        .el-input__inner {
          padding-left: 40px;
        }
      }
    }
  }
}
</style>
