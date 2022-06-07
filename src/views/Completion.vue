<template>
  <div class="loguin">
    <div class="loguin1">
      <Header />
      <div class="backimg">
        <div class="loguin2">
          <p>ようこそnikakeibaへ!</p>
          <div class="loguin4"> 
            <a class="button1"><router-link to="/">ログインへ</router-link></a>
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
  color:blue;
}

.loguin2 p {
  font-size:30px;
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
   background-color:gray;
   color:white;
}

.button1 :hover {
  opacity:0.5;
  background-color:whitesmoke;
  color:black;
}

.loguin4 a {
  width: 350px;
}
</style>