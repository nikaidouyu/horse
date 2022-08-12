<template>
  <div id="overlay">
    <div id="content">
      <p>種牡馬名：<input type="text" v-model="task"></p>
      <!-- <p>国タイプ：<input></p>
      <p>大系統：<input></p>
      <p>小系統：<input></p>
      <p>買い要素：<textarea></textarea></p>
      <p>消し要素：<textarea></textarea></p>
      <p>ポイント：<textarea></textarea></p> -->
      <button @click="$emit('close')">キャンセル</button>
      <button @click="push">ボタン</button>
      <p>{{todo}}55</p>
    </div>
  </div>
</template>

<script>


export default {
  props:['val'],
  data() {
    return {
      inputText: "",
      task:'',
      todo:''
    }
  },
  methods: {
    onClickButton() {
      this.$emit('parentFunc', this.inputText);
    },
    addTask:function(){
      this.todo=this.task;
      this.task='';
    },
  },
}

</script>

<style>
  #overlay{
  z-index:1;
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

#content{
  z-index:2;
  width:30%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
  background-color: whitesmoke;
  line-height: 170%;
}

#content input,
textarea {
  width: 90%;
  padding-top:1%;;
  padding-bottom:1%;;
}

#content button {
  margin-right: 20px;
}
</style>