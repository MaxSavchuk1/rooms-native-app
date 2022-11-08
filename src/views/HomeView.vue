<script setup></script>

<template>
  <div class="container">
    <div class="common-layout">
      <el-container>
        <el-header><span>Welcome!</span></el-header>
        <el-main class="home">
          <p class="info">
            Now you can log in with your
            <router-link to="/login"> email </router-link>
            or your
            <a href="#">Google account</a>
          </p>
          <p class="info">
            Or you can
            <router-link to="/registration">register</router-link> new account
            with your email
          </p>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 95%;
  max-width: 600px;
  border-radius: 10px;
  overflow: hidden;
}
.info {
  text-align: center;
  line-height: 1.5;
  &:first-child {
    margin-bottom: 10px;
  }
}
.home {
  height: 400px;
  max-height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
