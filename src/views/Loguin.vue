<template>
  <div class="loguin">
    <div class="loguin1">
      <Header />
      <div class="backimg">
        <div class="loguin2">
          <div class="loguin3">
            <input type="text" id="mail" placeholder="mail">
            <input type="text" id="password" placeholder="password">
          </div>
          <p>または</p>
          <div class="loguin4"> 
            <a class="button1"><router-link to="/top">ログイン</router-link></a>
            <a class="button2"><router-link to="/signup">新規登録</router-link></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  components:{
    Header,
  }
}
</script>

<style scoped>
.backimg {
  background-image: url(../assets/background.jpg);
  background-size:cover;
  width: 100%;
  height: 710px;
  opacity:0.9;
}

.loguin1 {
  position:relative;
  }

.loguin2 {
  /* margin-top:30px; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: wheat; */
  background-color: white;
  padding:30px 30px;  
  /* margin :0 auto; */
  text-align: center;
  line-height: 50px;
  border-radius: 5px;
  border:solid gray;
}

.loguin3 input {
  /* border-radius: 5px; */
  display: block;
  line-height: 40px;
  margin-top:20px;
  width: 350px;
  color: #e8f0fe;
}

.loguin4 {
  display:inline-flex;
  flex-direction: column;
  /* margin-top:40px; */
}

.loguin4 a {
  text-decoration: none;
  color: black;
  display:block;
}

.button1 {
  background-color: #1E61A9;
  border:none;
}

.button2 {
  background-color: #EEEEEE;
  border:none;
  margin-top:20px;
}

.button1 :hover {
  opacity:0.9;
  background-color:gray;
  color:white;
}

.button2 :hover {
  opacity:0.9;
  background-color:black;
  color:white;
}

.button1 :hover {
  opacity:0.5;
}

.loguin4 a {
  width: 350px;
}
</style>