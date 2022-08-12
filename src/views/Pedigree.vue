<template>
<div class="pedigree">
  <Header2 />
  <h1 class="brock">国別タイプの分類</h1>
  <div class="country">
    <div class="japan">
      <h1>日本型</h1>
      <li>直線のトップスピード</li>
    </div>

    <div class="america">
      <h1>米国型</h1>
      <li>ダッシュ力と持続力</li>
      <li>体力の完成が早い</li>
      <li>若駒戦のダート短距離に強い</li>
      <li>小回りの淀みない流れへの対応と最後までスピードを持続することが問われる競馬</li>
      <li>クラシック型:使い込まれて良化</li>
      <li>クラシック型種牡馬:エンパイアメーカー、マジェスティックウォリアー、カジノドライブ、シスターミニスターなど</li>
      <li>ダッシュ型:仕上がりの早さ、スピードを武器にするタイプ</li>
      <li>ダッシュ型種牡馬:ヘニーヒューズ,パイロ,クロフネなど</li>
    </div>
    
    <div class="eu">
      <h1>欧州型</h1>
      <li>原則要素の多い路盤に強い</li>
      <li>使い込まれて</li>
      <li>イギリス型:直線の短いコース、坂のあるコースで上がりのかかった場合にスタミナと馬力を発揮する</li>
      <li>イギリス型種牡馬:サドラーズウェルズ、ロベルト、ニジンスキーなど</li>
      <li>※エピファネイアはロベルト系だがシーザリオの特徴を強く引き継いでるので日本よりのフランス型と理解すること</li>
      <li>フランス型:欧州型の中では直線が長いコース、広いコースが得意な馬も出やすい</li>
      <li>フランス型種牡馬:グレイソヴリン、キングマンボ、リファール、ディクタスなど</li>
    </div>
  </div>
  <div class="pt">
    <h1>各種牡馬の買い消しパターン</h1>
    <table>
      <tr>
        <th class="th1">種牡馬</th>
        <th class="th2">国</th>
        <th class="th3">大系統</th>
        <th class="th4">小系統</th>
        <th class="th5">買い</th>
        <th class="th5">消し</th>
        <th class="th6">ポイント</th>
        <th class="th7"></th>
      </tr>

      <tr class="mrpro" v-for="(todo,index) in todos" :key="index">
      
  
        <td v-if="todo.isActive"><input type="text" v-model="todo.stallion"></td>
        <td v-else>{{todo.stallion}}</td>

        <td v-if="todo.isActive" class="td2"><input type="text"  clsaa="country" v-model="todo.country"></td>
        <td v-else>{{todo.country}}</td>

        <td v-if="todo.isActive"><input type="text" v-model="todo.largesystem"></td>
        <td v-else>{{todo.largesystem}}</td>
        
        <td v-if="todo.isActive"><input type="text" v-model="todo.smallsystem"></td>
        <td v-else>{{todo.smallsystem}}</td>
        
        <td v-if="todo.isActive"><textarea v-model="todo.buy"></textarea></td>
        <td v-else>{{todo.buy}}</td>
        
        <td v-if="todo.isActive"><textarea v-model="todo.erase"></textarea></td>
        <td v-else>{{todo.erase}}</td>
        
        <td v-if="todo.isActive"><textarea v-model="todo.point"></textarea></td>
        <td v-else>{{todo.point}}</td>
        
        <td class="bt" v-if="todo.isActive"><button @click="updateDone(index)">完了</button><button @click="updateCansel(index)">戻る</button></td>
        <td class="bt" v-else><button @click="updateEdit(index)">編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <!-- <tr class="mrpro">
        <td>アイルハヴアナザー</td>
        <td>米</td>
        <td>ミスプロ系</td>
        <td>ファーティーナイナー系</td>
        <td>・芝1800,2200 近走先行経験のある馬</td>
        <td>・芝1200<br>・ダート1400以下,母父欧州型</td>
        <td>馬力に優れた産駒が多い、芝の非根幹距離での持続力勝負に強い、スピードが問われる条件は苦手</td>
        <td class="bt"><button @click="updateItem(index)">編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr> -->

      <!-- <tr class="northen">
        <td>アジアエクスプレス</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ストームバード系</td>
        <td>・2,3歳限定戦の芝1200以下,母父サンデー系以外</td>
        <td>・1600以上</td>
        <td>父ヘニーヒューズよりも持続力より、体力の完成が早くキャリアの浅いうちが狙い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>アドマイヤムーン</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>フォーティーナイナー系</td>
        <td>・芝1200以下で買いだった</td>
        <td>・ダートで母父米国型</td>
        <td>2014年の産駒以降は成績が落ちている、芝指向が強く母父米国型以外はダート適正が低い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>アメリカンペイトリオット</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ダンチヒ系</td>
        <td>・芝1400以下で母父サンデー以外<br>・芝1500以上の2歳戦、母父サンデー系、キングマンボ系<br>・ダーレー生産馬</td>
        <td>・ダート1400以下で母父米国型以外</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>イスラボニータ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・芝1400〜1600の直線の長いコースで差しが決まる軽い馬場</td>
        <td>・ダート1400以下で母父米国型以外</td>
        <td>スピードや携さに関しては申し分ない血統、本質的には古馬になってから上昇する</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>エイシンヒカリ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td>・芝で母父米国型の牝馬<br>・2,3歳限定戦でダート1400</td>
        <td>・牡馬で1400以下</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>エイシンフラッシュ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・古馬混合戦の芝1800以上で母父サンデー系牡馬,社台生産馬<br>・芝1800以上良馬場以外</td>
        <td>・芝1200以下で2,3歳限定戦の牝馬<br>・ダート1200以下</td>
        <td>本質は気性の激しい欧州血糖、藤原英昭厩舎あってのエイシンフラッシュ</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>エスケンデレヤ</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ストームバード系</td>
        <td>・ダート1700以上かつ近走先行経験馬か距離短縮の馬</td>
        <td>・ダート1400以下の母父米国型以後</td>
        <td>日本での産駒はスタミナ型に出る傾向、前向きさを出すレース経験が必要、ダート中距離向きで使い込んで良さが出る</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>エスポワールシチー</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Dサンデー系</td>
        <td>・ダート1600以上の母父米国型</td>
        <td>・ダート1400以下の母父米国型以後</td>
        <td>母系もNARの名血が揃うたたき良化型</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="turntoe">
        <td>エピファネイア</td>
        <td>欧</td>
        <td>ターントゥー系</td>
        <td>ロベルト系</td>
        <td>・牝馬は直線の長い芝1600以上で外枠か前走から距離延長<br>・牡馬は芝1800以上で外枠か前走から距離延長<br>・芝1600以上の新馬戦</td>
        <td>・芝1200以下<br>・ダート母父米国型以外</td>
        <td>シーザリをの影響が強い、王道コースで早い上がりを見せる、距離延長が得意</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>エンパイアメーカー</td>
        <td>米</td>
        <td>ミスプロ系</td>
        <td>ミスプロ系</td>
        <td>・ダート母父米国型で外枠<br>・ダートの良馬場以外</td>
        <td></td>
        <td>米国で最も需要の高い主流血糖、母父米国型になるとダートでは強力、気分やで気性の激しい馬も多く外枠が理想</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>オルフェーヴル</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Tサンデー系</td>
        <td>・古馬混合戦で直線が長い芝1800以上<br>・2,3歳限定戦,ダート1800以上で母父米国型の牡馬</td>
        <td>・2,3歳限定戦の芝1400以上の牡馬</td>
        <td>多彩な晩成型種牡馬、ステイゴードの中では王道条件に強い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="nasrullah">
        <td>カジノドライブ</td>
        <td>米</td>
        <td>ナスルーラー系</td>
        <td>エーピーインディー系</td>
        <td>・ダート母父米国型<br>・ダート1400で近走先行経験馬か前走からの距離短縮</td>
        <td>・ダート1200以下で母父米国型以外</td>
        <td>ダート種牡馬としてのポテンシャルは最上級、高齢になっても走れるたたき良化型、スピードの持続力はあるがスプリント色が薄い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>カレンブラックヒル</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・ダート1300以下で母父欧州型以外<br>・芝1400以下で母父欧州型,特に牝馬<br>・芝1600以上で凡走からのダート1300以下替わり</td>
        <td>・芝1600以上,母父米国型</td>
        <td>グラインドストーンの影響が強い、芝ダート共に末脚のスピードが削がれる馬場が得意</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>キズナ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td>・芝の非根幹距離で前走芝の根幹距離を使っている馬<br>・ダート1800以上で大型馬か母父米国型<br>・芝の非根幹距離のオープンか重賞</td>
        <td>・牡馬で芝の直線の長いコースで近走先行経験なし<br>・ダート1400以下で母父欧州型と日本型</td>
        <td>父ディープとは特徴が異なる、上がりのかかるレースに強い、牝馬と牡馬の違いに注意</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>キタサンブラック</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Tサンデー系</td>
        <td></td>
        <td></td>
        <td>スピードやキレをどのように引き出すか、種牡馬としてはシンボリクリスエスに近いイメージ、牡馬ならダートを走る馬も出しそう</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>キングカメハメハ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・芝1800以上で直線が長く坂のあるコースで母父サンデー系の牡馬<br>・ダート1600以上で牡馬、セン馬の母父欧州型以外<br>・芝1600以上で未勝利,1勝クラス重賞でノーザンファーム生産場の好調な牡馬</td>
        <td>・ダート1200以下で母父米国型以外<br>・芝1200以下で母父サンデー系</td>
        <td>引き出し型種牡馬、母の血統や育成でタイプが変わる</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>キングズベスト</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・4歳以上の芝1800,2200<br>・4歳以上の芝1400以下で母父サンデー系以外</td>
        <td>・2,3歳の柴1600以上で母父サンデー系以外<br>・ダート1600以下</td>
        <td>欧州の良血、芝の反主流のバテるレースで注目、体力が完成する古馬を練狙う</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>キンシャサノキセキ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・芝の1600以上で母父欧州型の牡馬<br>・ダート1900以上で母父が米国型かミスプロ系（大系統）</td>
        <td>・芝1200以下で先行している人気馬</td>
        <td>イメージとのギャップが美味しい種牡馬、実は貯めて直線でスピードを発揮するタイプ、芝中距離やダート中距離に妙味がある</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>
      
      <tr class="nasrullah">
        <td>グランプリボス</td>
        <td>日</td>
        <td>ナスルーラー系</td>
        <td>プリンスリーギフト系</td>
        <td>・芝からダート替わりの牡馬<br>・ダート1400以上で母父米国型の近走先行経験馬</td>
        <td>・芝1200以下</td>
        <td>サクラバクシンオーのイメージは危険、母父の影響が強くダートでこその種牡馬</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>クロフネ</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ヴァイスリージェント系</td>
        <td>・母父クロフネで父サンデー以外の芝1200と1400<br>・東京ダート1400<br>・2,3歳限定線のダート1200以下で母父サンデー系以外</td>
        <td>・ダート1900以上の牝馬</td>
        <td>芝よりのフィリーサイアー、サンデー系以外との配合場は短距離向きになる、兼用馬にマッチする東京ダート1400に強い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ゴールドアリュール</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Dサンデー系</td>
        <td>・牡馬でダート1600以上の上級条件（2勝より上）で直線が長いか坂のあるコース<br>・ダート新馬戦<br>・牝馬で母父米国型のダート1200以下</td>
        <td>・ダート1300以下で5歳以上の牡馬</td>
        <td>JRAの砂中距離のチャンピオン種牡馬、母父と性別によって傾向が変わる</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>サウスヴィグラス</td>
        <td>米</td>
        <td>ミスプロ系</td>
        <td>フォーティーナイナー系</td>
        <td>・ダート1200以下で母父欧州型以外で前走内枠から今回外枠<br>・ゲートスタートで直線に坂があるコース（特に阪神）<br>・母父米国型のダート未勝利戦で芝1400以下</td>
        <td>・ダート1600以下の牝馬</td>
        <td>日本の砂短距離の名血、気分屋の馬が多く好走凡走の差が激しい、叩けば叩くほど上昇する馬が多い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>サトノアラジン</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・芝1400以下の特に牝馬</td>
        <td></td>
        <td>現時点では複勝ベタ買いでも儲かる</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>ザファクター</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ダンチヒ系</td>
        <td>・ダート1200以下で母父サンデー系</td>
        <td>・芝で母父サンデー系以外<br>・ダート1600以上の母父日本型以外</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="nasrullah">
        <td>シスターミニスター</td>
        <td>米</td>
        <td>ナスルーラー系</td>
        <td>エーピーインディー系</td>
        <td>・ダート1700以上で母父がサンデー系以外<br>・ダート1400で近走先行経験馬</td>
        <td>・ダート1300以下で母父サンデー系</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ジャスタウェイ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・芝の古馬混合戦で母父欧州型の牡馬<br>・芝1400以下で古馬混合戦</td>
        <td>・ダート1400以下</td>
        <td>古馬になって強さを発揮する、マイル以下の適正が高い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="nasrullah">
        <td>ジャングルポケット</td>
        <td>欧</td>
        <td>ナスルーラー系</td>
        <td>グレイソブリン系</td>
        <td>・直線が長いか平坦の芝2200以上で母父日本型か米国型<br>・母父ジャングルポケットの芝1400</td>
        <td></td>
        <td>直線でスピードを持続する能力が高く底力勝負に強い、得意パターンと苦手パターンの振り幅が大きい</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>シルバーステート</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td></td>
        <td></td>
        <td>タフな芝中長距離向き、ディープブリランテに似た種牡馬タイプ、本質的にはダート適正は低い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>スウェプトオーヴァーボード</td>
        <td>米</td>
        <td>ミスプロ系</td>
        <td>フォーティーナイナー系</td>
        <td></td>
        <td>・ダート1600以上の牝馬<br>・芝1600以上</td>
        <td>引き出し型米国スプリント血統</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>
      
      <tr class="turntoe">
        <td>スクリーンヒーロー</td>
        <td>欧</td>
        <td>ターントゥー系</td>
        <td>ロベルト系</td>
        <td>・直線の短いコースの芝1600以上の牡馬、セン馬<br>・牡馬、セン馬で2,3歳戦線のダート1700以上の前走芝からダート変わり<br>・牝馬の母父米国型で芝1500以下</td>
        <td></td>
        <td>スタミナ馬力型のコルトサイアー、モーリスよりもゴールドアクターのイメージ</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ステイゴールド</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Tサンデー系</td>
        <td>・直線の長い芝1600の上級条件（2勝クラス以上）</td>
        <td>・ダート短距離<br>・母父ステイゴールドのダート</td>
        <td>社大系と非社大系で傾向が異なる、得意条件や得意レースでは何度でも走る、母父ステイゴールドは補う配合よりも伸ばす配合</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>スマートファルコン</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Dサンデー系</td>
        <td>・母父米国型でダート1600〜1800</td>
        <td>・ダート1400以下</td>
        <td>日本の砂中距離血統、JRAでは米国的なスピードを補う必要がある</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>タートルボウル</td>
        <td>欧</td>
        <td>ノーザンダンサー系</td>
        <td>ノーザンダンサー系</td>
        <td>・ダート1600以上の牡馬かセン馬で母父欧州型以外</td>
        <td>・芝1200以下の母父米国型以外</td>
        <td>マイナーな欧州血糖、アサティスやミルジョージに近いイメージ</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ダイワメジャー</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・直線が長い芝1600〜2000の特に下級条件<br>・2,3歳限定線の芝1200<br>・母父大系統ノーザンダンサー系で芝2200の下級条件</td>
        <td>・ダートで母父米国型以外の内枠の馬</td>
        <td>本質は中距離よりのマイラー、少しタメを利かせてゴール前に負荷がある競馬が得意</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ダノンシャンティ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・直線が長い芝1600以上と芝の長距離（当初は買いだった）<br>・芝2200以上のノーザンダンサー系の牡馬</td>
        <td>・ダート1800以上<br>・ダート1400以下の牝馬</td>
        <td>本質的にスピードと素軽さが武器、今は買うより消すべき種牡馬、ダートでは信用できない</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>ダンカーク</td>
        <td>米</td>
        <td>ミスプロ系</td>
        <td>ミスプロ系</td>
        <td>・牡馬の母父サンデー系以外で古馬混合線のダート1400以上、直線に坂のあるコース<br>・牡馬で母父サンデー系が欧州型、古馬混合線の下級条件</td>
        <td>・牝馬でダート</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ディープインパクト</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td>・キャリア2線<br>・芝重賞で前走条件線<br>・軽斤量（54以下）で芝2200以上</td>
        <td>・芝1400以下の前走同距離で2,3着</td>
        <td>日本の軽い芝における主流血糖、フレッシュさと勢いが大事、母父が米国型と欧州型でタイプが違う</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ディープブリランテ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td>・芝2200以上の近走先行経験馬に注目</td>
        <td>・ダート1400以下の母父米国型</td>
        <td>先行持久力に秀でたタイプのサンデー系、人気薄で走るツボは欧州型に近い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>トゥザグローリー</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・ダート1600以上の牡馬かセン馬で近走先行経験あり</td>
        <td>・牝馬のダート1700</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>トゥザワールド</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・ダート1700以上で母父米国型<br>・牝馬の芝1400以下で母父がサンデー系以外</td>
        <td>・ダート1400以下の母父米国型以外</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>ドゥラメンテ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・芝中距離の根幹距離で好調馬<br>・芝1800以上の新馬戦<br>・牡馬のダート1600以上で母父米国型</td>
        <td>・芝1400以下の牝馬で距離短縮馬<br>・ダート母父米国型</td>
        <td>コルトサイアー、ディープインパクトに近い性質をもつ、ダート適正はルーラーシップに近い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="nasrullah">
        <td>トーセンジョーダン</td>
        <td>欧</td>
        <td>ナスルーラー系</td>
        <td>グレイソブリン系</td>
        <td>・ダート1800以上の古馬混合線で近走先行経験馬か今回距離短縮馬</td>
        <td>・芝の人気馬</td>
        <td>サンデーの地を持たない為スピードに欠ける、晩成の馬力血糖</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>トーセンラー</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td>・母父米国型で古馬混合線の芝1800以下</td>
        <td>・ダート母父米国型</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="minar">
        <td>トランセンド</td>
        <td>米</td>
        <td>マイナー系</td>
        <td>ニアーティック系</td>
        <td>・ダート1600以上で母父サンデー系以外の近走先行経験馬</td>
        <td>・古馬混合線ダート1200以下</td>
        <td>どの国でも特殊条件のスペシャリストである、マイペースで無類の強さを発揮する</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>ドレフォン</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ストームバード系</td>
        <td>・ダートだけではなく芝のスピード勝負にも強い<br>・早い時期の芝重賞</td>
        <td></td>
        <td>芝ダートどちらのスピード勝負にも適応する血統、クロフネとヘニーヒューズを足したような血統、育成と母系次第では芝のマイラーや中距離馬も出る</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ネオユニヴァース</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Dサンデー系</td>
        <td>・ダート1700以上で前走芝</td>
        <td>・芝1400以下</td>
        <td>サンデー系種牡馬の中では異質なタイプ、バテてから頑張るイギリス寄りの血糖</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="minar">
        <td>ノヴェリスト</td>
        <td>欧</td>
        <td>マイナー系</td>
        <td>スターリング系</td>
        <td>・芝1800,2200の下級条件（2勝以下）</td>
        <td>・ダート牝馬</td>
        <td>ドイツ血糖の塊で日本では反主流、下級条件の非根幹距離でこそ</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ハーツクライ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Tサンデー系</td>
        <td>・芝2200以上で300以上の距離延長<br>・良馬場以外の重賞<br>・牡馬かセン馬のダート170以上の未勝利線で前走芝、近走先行経験馬か距離延長馬</td>
        <td>・前走からのペースアップ</td>
        <td>距離延長が得意、重たい馬場を苦にしない、古馬になりもう一段階上昇する</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>ハービンジャー</td>
        <td>欧</td>
        <td>ノーザンダンサー系</td>
        <td>ダンチヒ系</td>
        <td>・重い馬場の芝1600以上</td>
        <td>・ダート1400以下<br>・ダート1800以上の牝馬<br>・ダートの内枠</td>
        <td>イギリス2400のG1血糖、反主流の競馬でまとめて走る</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>
      
      <tr class="nasrullah">
        <td>パイロ</td>
        <td>米</td>
        <td>ナスルーラー系</td>
        <td>エーピーインディー系</td>
        <td>・ダート1600〜1800<br>・ダート1400新馬戦</td>
        <td>・ダート1200以下<br>・1,2勝クラスの5歳以上の人気馬</td>
        <td>最大の長所は仕上がりの早さと前向きな性格</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>バトルプラン</td>
        <td>米</td>
        <td>ミスプロ系</td>
        <td>ミスプロ系</td>
        <td>・ダート古馬混合線の母父米国型<br>・ダート1400以下で古馬混合線の今回距離延長以外<br>・芝1400以下で古馬混合線の母父米国型</td>
        <td>・ダート1600以上の母父欧州型</td>
        <td>遅咲きの米国血糖、短縮よりも延長向き、母系に主張の強い芝血糖があれば芝で注目</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>フェノーメノ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Lサンデー系</td>
        <td>・牝馬で芝1800以上,特にタフな馬場<br>・牡馬のダート1800以上の坂のあるコース</td>
        <td>・芝1600以下で母父米国型以外</td>
        <td>ステイゴールドの馬力型、母父ディンヒルだけに芝ではフィリーサイアー</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ブラックタイド</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Lサンデー系</td>
        <td></td>
        <td>・芝1800以上の直線が長く坂のあるコース</td>
        <td>本質は中距離の馬力型、勝ち星はダート1800以上で稼ぐ、芝の瞬発力勝負は苦手</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="turntoe">
        <td>フリオーソ</td>
        <td>欧</td>
        <td>ダーントゥー系</td>
        <td>ロベルト系</td>
        <td>・ダート1700以上で古馬混合線の母父米国型</td>
        <td>・ダート1200以下の2~3歳限定線で母父米国型以外</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>へニーヒューズ</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ストームバード系</td>
        <td>・2,3歳限定線でダートの母父米国型</td>
        <td>・ダート1400以下の古馬混合線で母父サンデー</td>
        <td>メドウレイクのダッシュ力を引き継いだ米国血統、反動と巻き返し、フレッシュさも重要</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>ホッコータルマエ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・母父米国型か日本型のダート1700以上</td>
        <td>・ダート1200以下で母父米国型以外</td>
        <td>NARの名血、使い込んで良化</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>
      
      <tr class="mrpro">
        <td>マクフィ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>ミスプロ系</td>
        <td>・芝1200以下<br>・キャリア5戦以上<br>・ダート母父米国型</td>
        <td>・キャリア4戦以内</td>
        <td>日本で成功を収めるジャックマロワ賞勝ちの良血、キャリアを重ねて上昇する、サンデーが苦手とする芝1200以下に強い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

     <tr class="nasrullah">
        <td>マジェスティックウォリアー</td>
        <td>米</td>
        <td>ナスルーラー系</td>
        <td>エーピーインディー系</td>
        <td>・ダート1700以上で前走4着以下<br>・ダート1600以上でスピードの出る馬場<br>・キャリア5戦以上</td>
        <td>・ダート1200以下</td>
        <td>ダート1600以上で特にスピードの出る馬場に強い、キャリアを重ねて良化する馬が多い、1200以下の適正は低い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>マツリダゴッホ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・芝非根幹距離<br>・芝1400で距離延長<br>・芝1200〜1400の2,3歳限定戦で近走先行経験馬</td>
        <td>・前回芝からダートの母父米国型</td>
        <td>非根幹距離を得意とする血糖、芝1400への距離延長がベスト</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>マンハッタンカフェ</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Tサンデー系</td>
        <td>・芝1800,2200,2500の重賞<br>・母父マンハッタンカフェの芝1800,2200</td>
        <td>・ダート</td>
        <td>非根幹距離の重賞に強い、母父としても非根幹距離に強い</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ミッキーアイル</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>Pサンデー系</td>
        <td>・牝馬の芝1600以下<br>・牡馬で母父米国型の2,3歳限定戦のダート1400以下<br>・距離延長ローテ</td>
        <td></td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="turntoe">
        <td>モーリス</td>
        <td>欧</td>
        <td>ターントゥー系</td>
        <td>ロベルト系</td>
        <td>・芝2000以上の直線が長いコースで近走先行経験馬<br>・牡馬のダート1400以下で下級条件（〜1勝）の母父欧州型</td>
        <td>・ダート1600以上で母父米国型以外</td>
        <td>ロベルトとサドラーズウェルズの影響を受けた種牡馬、反主流馬場で注目</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>
      
      <tr class="mrpro">
        <td>モンテロッソ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>ミスプロ系</td>
        <td>・芝の古馬混合戦</td>
        <td>・2,3歳限定戦の母父米国型以外の牝馬</td>
        <td>欧州指向の強い血統、古馬混合の芝で注目</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>ヨハネスブルグ</td>
        <td>米</td>
        <td>ノーザンダンサー系</td>
        <td>ストームバード系</td>
        <td>・ダート1600以上の2,3歳限定戦<br>・ダート母父米国型の2,3歳限定戦</td>
        <td>・古馬混合戦のダートスタートの1400以下<br>・古馬混合戦のダートで中3週以内の前走構想馬</td>
        <td></td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>リアルインパクト</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td>・東京,中京,阪神（外回り）の芝1600以上</td>
        <td>・芝1400以下で母父欧州型</td>
        <td>本質はマイルのスペシャリスト、坂と直線の長いコースを好む</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>リオンディーズ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・芝1800以上の直線が長く坂のあるコースで外枠<br>・芝1600以上で母父サンデー<br>・2,3歳限定戦で芝1500以下の母父欧州型以外</td>
        <td>・ダート1400以下の母父欧州型</td>
        <td>お得な明種牡馬、エピファネイアよりさらに過小評価</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>ルーラーシップ</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・芝G1の複勝率がいい<br>・牡馬で芝2200以上の母父米国型以外で近走先行経験馬か距離短縮馬<br>・母父非サンデーで芝1800,2200,2500</td>
        <td>・母父非サンデーのダート1600以上で今回距離延長</td>
        <td>勝ち切れないが厳しいレースで強みを発揮する、引き出し型種牡馬、ゆったりと追走する競馬が得意</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>ローエングリン</td>
        <td>欧</td>
        <td>ノーザンダンサー系</td>
        <td>サドラーズウェルズ系</td>
        <td>・前走から距離短縮の芝1400以下</td>
        <td>・ダート1400以下の母父米国型以外</td>
        <td>日本の芝適正も高い一流の血統、馬券的には実は芝短距離が狙い目</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>ロードカナロア</td>
        <td>欧</td>
        <td>ミスプロ系</td>
        <td>キングマンボ系</td>
        <td>・芝で直線が長く坂のある根幹距離で前走4着以下は回収率がいい<br>・東京,中京,京都,小倉のダート1400以下<br>・芝1200以下で母父欧州型以外、生産はノーザンファーム以外</td>
        <td>・小回りの芝1800以下の牝馬</td>
        <td>広いコース,根幹距離,軽い馬場に強い、上位種牡馬の中ではダート適正が高い、引き出し型種牡馬</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>ロゴタイプ</td>
        <td>欧</td>
        <td>ノーザンダンサー系</td>
        <td>サドラーズウェルズ系</td>
        <td>・芝1400以下で母父サンデーかヘイロー系</td>
        <td>・ダート</td>
        <td>元祖ヘイロー系と派生したサンデー系</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="sunday">
        <td>ワールドエース</td>
        <td>日</td>
        <td>サンデー系</td>
        <td>ディープ系</td>
        <td>・芝根幹距離の牡馬</td>
        <td>・ダートの牝馬</td>
        <td>欧州型ディープの不遇な良血、神経質なコルトサイアー</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="mrpro">
        <td>American Pharoah</td>
        <td>米</td>
        <td>ミスプロ系</td>
        <td>ミスプロ系</td>
        <td>・ダート1800以上の距離延長か近走先行経験馬</td>
        <td>・ダート1400以下<br>・芝</td>
        <td>若駒限定線に強い、ダート中距離も芝指向の強いダートの馬場がベスト、芝の瞬発力勝負は苦手</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr>

      <tr class="northen">
        <td>Frankel</td>
        <td>欧</td>
        <td>ノーザンダンサー系</td>
        <td>サドラーズウェルズ系</td>
        <td>・直線の長く坂のあるコースで軽い芝</td>
        <td>・中3週以内で前走2〜9着<br>・ダート1400以下</td>
        <td>ダンチヒの個性を強く引き継いだ欧州型種牡馬、フレッシュさと勢いが大事、日本の高速マイルの流れでもG1級</td>
        <td><button>編集</button><button @click="deleteTask(index)">削除</button></td>
      </tr> -->
    </table>

    <div class="push">
      <p>種牡馬</p>
      <input type="text" v-model="task">
      <p>国タイプ</p>
      <input type="text" v-model="task2">
      <p>大系統</p>
      <input type="text" v-model="task3">
      <p>小系統</p>
      <input type="text" v-model="task4">
      <p>買いパターン</p>
      <textarea v-model="task5"></textarea>
      <p>消しパターン</p>
      <textarea v-model="task6"></textarea>
      <p>ポイント</p>
      <textarea v-model="task7"></textarea>
      <button @click="addTask">追加</button>
    </div>
  </div>
</div>
</template>

<script>
import Header2 from "../components/Header2";
export default {
  components:{
    Header2,
  },
  data () {
      return {
        task:"",
        task2:"",
        task3:"",
        task4:"",
        task5:"",
        task6:"",
        task7:"",
        todos:[],
        stallion:"",
      }
    },
  methods: {
    addTask:function(){
      // task4までは入力必須
      if(this.task == '' ) return;
      if(this.task2 == '' ) return;
      if(this.task3 == '' ) return;
      if(this.task4 == '' ) return;
      // 追加
      this.todos.push({stallion:this.task,
      country:this.task2,largesystem:this.task3,smallsystem:this.task4,buy:this.task5,erase:this.task6,point:this.task7
      });
      this.task="";this.task2="";this.task3="";this.task4="";this.task5="";this.task6="";this.task7="";
      console.log('追加');
    },
    // アラート
    deleteTask: function(index){
      if(confirm('削除しますか？')){
      this.todos.splice(index,1);
    }
  },
  // 編集の動き
    updateEdit:function(index){
      // this.todos[index].stallion = this.stallion=window.prompt('以下内容で更新します。');
      this.todos[index].isActive = true;
      this.todos.push()
      
      // this.todos[index].stallion = this.stallion;
      // this.todos[index].stallion = this.stallion;
      // this.todos[index].country = this.country;
      // this.todos[index].largesystem = this.largesystem;
      // this.todos[index].smallsystem = this.smallsystem;
      // this.todos[index].buy = this.buy;
      // this.todos[index].erase = this.erase;
      // this.todos[index].point = this.point;
      console.log("push");
  },

    // 完了
    updateDone:function(index){
      // this.updateDone[index] = index;
      this.todos[index].isActive = false;
      // this.todos.push();
      var res = confirm("編集しますか？");
      if(res == true){
        this.todos.push()
      }
      else {
        // alert("キャンセルしました")
        
      }
      console.log("puru");
  },

  

  // キャンセル
  // updateCansel:function(index){
  //   this.todos[index].isActive = false;
  //   // this.todos[index].isActive = true;
  //   // this.todos[index] = this.todos
  //   // this.todos[index] = false
  //   this.todos.clear()
  //   console.log("戻る")
  // }
 }
}
</script>

<style scoped>

.brock {
  padding:50px 0px 0px 50px;
  font-size:30px;
}

.japan,
.america,
.eu {
  margin-top:20px;
  margin-left:20px;
}

.japan li,
.america li,
.eu li {
  margin-top:20px;
  margin-left:20px;
}

.pt h1 {
  margin-top:20px;
  margin-left:20px;
  margin-bottom:20px;
  font-size:30px;
}

.pt th, td {
  border:solid;
  padding:5px;
}

.pt td{
  font-size:12px;
}

.pt table {
  width: 100%;
}

.th1 {
  width:7%;
}

.th2 {
  width:2%;
}

.th3 {
  width:10%;
}

.th4 {
  width:10%;
}

.th5 {
  width:15%;
}

.th6 {
  width:15%;
}

.th7 {
  width:4%;
}

.pt td {
  height:80px;
}

.mrpro {
  background-color: #FCE4B5;
}

.northen {
  background-color: #53FFFE;
}

.sunday {
  background-color: #66FF65;
}

.turntoe {
  background-color: #3DCD32;
}

.nasrullah {
  background-color: #F51494;
}

.minar {
  background-color: #CCCCCC;
}



.mrpro button {
  margin:5px 15px;
  /* font-size:20% */
}

.northen button {
  margin:auto 15px;
}

.sunday button {
  margin:auto 15px;
}

.turntoe button {
  margin:auto 15px;
}

.nasrullah button {
  margin:auto 15px;
}

.minar button {
  margin:auto 15px;
}

.t1 input {
  width: 100px;
}

.t2 input {
  width: 15px;
}

.t3 textarea {
  width: 200px;
}

.t1 input,
.t2 input,
.t3 input,
.t4 textarea,
.t5 textarea {
  margin:0;
}

.push {
  text-align: center;
  padding: 1% ;
  background-color: #CCCCCC;
  margin:100px 35%;
  line-height: 30px;
  justify-content: center;
  border-radius: 10px;
}

.push input {
  width: 60%;
  line-height: 20px;
}
.push textarea {
  width: 60%;
  line-height: 40px;
}

.push button {
  display: block;
  margin:1% auto;
  padding:5px 20px;
}

.mrpro input {
  width: 90%;
  height: 30px;
}

.mrpro textarea {
  width: 90%;
  height: 80px;
}

.mrpro td {
  vertical-align: top;
  text-align: left;
  padding-top:10px;
}

.td2 {
  padding-right: 10px;
}
</style>
