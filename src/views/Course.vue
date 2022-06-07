<template>
<div class="course">
  <div class="course1">
  <Header2 />
    <div class="course2">
      <a class="tokyo"><router-link to="tokyo">東京</router-link></a>
      <a class="hanshin"><router-link to="hanshin">阪神</router-link></a>
      <a class="kyoto"><router-link to="kyoto">京都</router-link></a>
      <a class="nakayama"><router-link to="nakayama">中山</router-link></a>
      <a class="chukyo"><router-link to="chukyo">中京</router-link></a>
      <a class="nigata"><router-link to="nigata">新潟</router-link></a>
      <a class="fukushima"><router-link to="fukushima">福島</router-link></a>
      <a class="sapporo"><router-link to="sapporo">札幌</router-link></a>
      <a class="hakodate"><router-link to="hakodate">函館</router-link></a>
      <a class="kokura"><router-link to="kokura">小倉</router-link></a>
    </div>
  </div>
</div>
</template>

<script>
import Header2 from "../components/Header2";

export default {
  components:{
    Header2,
  }
}
</script>

<style scoped>

.course2 {
  margin-top:50px;
  font-size:30px;
  display:inline-flex; 
  flex-wrap:wrap;
  justify-content: space-around;
  align-content:space-around;
  text-align: center;
}

.course2 a {
  padding:5px 0px ;
  text-decoration: none;
  color: black;
  display: block;
}

.course2 :hover {
  opacity: 0.9;
  background-color: gray;
  color: white;
  /* width: 100px; */
}

.tokyo,
.hanshin,
.kyoto,
.nakayama,
.chukyo,
.nigata,
.fukushima,
.sapporo,
.hakodate,
.kokura {
  background-color: #EEEEEE;
  border-radius: 5px;
  border-style:solid;
  width: 150px;
  display:block;
  margin:50px 50px;
}


</style>