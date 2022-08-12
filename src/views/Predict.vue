<template>
<div class="predict">
  <Header2 />
  <div class="predict1">
    <input v-model="date">
    <button @click="submit">送信</button>
    <table>
      <tr>
        <th class="th1">印</th>
        <th class="th2">合計</th>
        <th class="th3">補正</th>
        <th class="th4">馬名</th>
        <th class="th5">父</th>
        <th class="th6">国</th>
        <th class="th7">母父</th>
        <th class="th8">国</th>
        <th class="th9">父母父</th>
        <th class="th10">国</th>
        <th class="th11">母母父</th>
        <th class="th12">国</th>
      </tr>

      <tr class="mrpro">
        <td><select name="mark" size="1" class="mark">
	<option value=""></option>
	<option value="◎">◎</option>
	<option value="●">●</option>
	<option value="▲">▲</option>
	<option value="☆">☆</option>
	<option value="△">△</option>
	<option value="✖️">✖️</option>
	<option value="消">消</option>
        </select></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <!-- <td>{{keiba.name}}</td>
        <td>{{keiba.father}}</td>
        <td></td>
        <td>{{keiba.groundfather}}</td>
        <td></td>
        <td>{{keiba.biggroundfather}}</td>
        <td></td>
        <td>{{keiba.biggroundfather2}}</td>
        <td></td> -->
      </tr>
    </table>
  </div>
</div>
</template>

<script>
import Header2 from "../components/Header2";
// eslint-disable-next-line no-unused-vars
// import axios from 'axios';
export default {
  components:{
    Header2,
  },
  // data: function() {
  //       return {
  //           name: '',
  //           father: '',
  //           groundfather: '',
  //           biggroundfather: '',
  //           biggroundfather2: '',
  //       }
  //   },
  //  methods: {
  //       submit: async function(){
  //           const result = await this.send();
  //           this.result = result;
  //       },
  //       send: async function(){
  //           const url = 'http://localhost/api/contact/send.php';
  //           const params = {
  //               'name': this.name,
  //               'father': this.father,
  //               'groundfather': this.groundfather,
  //               'ebiggroundfather': this.biggroundfather,
  //               'ebiggroundfather2': this.biggroundfather2
  //           }  
  //          }
  //        }
       }
</script>

<style scoped>

.predict1 th, td {
  border:solid;
  padding:10px;
}

.th4,.th5,.th7,.th9,.th11 {
  width:17.2%;
}

.th4 {
  width:10%;
}

.th1,.th2,.th3,.th6,.th8,.th10,.th12 {
  width:1%;
}

.mark {
  width:35px;
  height:20px;
  border:0;
}
</style>