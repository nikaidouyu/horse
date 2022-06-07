<template>
<div class="predict">
  <Header2 />

  
  <div class="predict1">
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
      </tr>
    </table>
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

.predict1 th, td {
  border:solid;
  padding:10px;
}

.th4,.th5,.th7,.th9,.th11 {
  width:17.2%;
}

.th5 {
  width:10%;
}

.th1,.th2,.th3,.th6,.th8,.th10,.th12 {
  width:2%;
}

.mark {
  width:35px;
  height:20px;
  border:0;
}
</style>