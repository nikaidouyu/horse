<template>
  <div class="header">
    <div class="headerimg">
      <router-link to="/top"><img src="../assets/logo.png" /></router-link>
      <div class="logout">
        <p><router-link to="/"><a>ログアウト</a></router-link></p>
      </div>
    </div>
    <div class="header1">
      <p><router-link to="/top"><a>トップ</a></router-link></p>
      <p><router-link to="/course"><a>コース</a></router-link></p>
      <p><router-link to="/system"><a>系統図</a></router-link></p>
      <p><router-link to="/pedigree"><a>血統について</a></router-link></p>
      <p><router-link to="/predict"><a>予想</a></router-link></p>
      <p><router-link to="/textbook"><a>教科書</a></router-link></p>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>

.header1 {
  display:flex;
  justify-content:flex-start;
  background-color: green;
  padding:20px 0;
  justify-content: space-around;
}

.header2 {
  display: flex;
  /* font-size:20px; */
}

.header1 a {
  text-decoration: none;
  color: inherit;
  padding:5px 2px 5px 2px;
  border-radius: 5px;
}

.header1 p{
  /* padding-left:20px; */
  /* width:10%; */
  color:white;
}

.header1 p a:hover {
  background-color: white;
  color: black;
  /* opacity:0.8; */
}

.headerimg{
 display: flex;
 padding:15px 10px 10px 30px;
 justify-content: space-between;
}

.headerimg img {
  width:250px;
}

.headerimg p {
  padding:15px 10px 10px 30px;
  margin-right: 50px;
}

.logout a {
  text-decoration: none;
  color: inherit;
}

.logout a:hover {
  color: black;
  opacity:0.8;
  border-bottom: solid;
}

</style>