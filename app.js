const quiz = [
  {
    question: 'ゲーム史上、最も売れたゲーム機はどれ？',
    answers: [ 'スーパーファミコン', 'PlayStation 2', 'ニンテンドーDS', 'Xbox 360'],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば？',
    answers: [ 'MOTHER2', 'スーパーマリオブラザーズ3', 'スーパードンキーコング', '星のカービィ'],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [ 'フリオニール', 'クラウド', 'ティーダ', 'セシル'],
    correct: 'セシル'
  }, {
    question: '最も競技人口の多いスポーツは？',
    answers: [ '野球', 'サッカー', 'バスケ', '卓球'],
    correct: 'バスケ'
    }
];

const $window = window;
const $doc = document;
// questionを挿入する場所を設定
const $question = $doc.getElementById('js-question');
// 指定する要素に当てはまるものを全て取得
const $buttons = $doc.querySelectorAll('.btn');
// quizの配列数を取得。quizの問題数を取得
const quizLen = quiz.length;

let quizCount = 0;
let score = 0;

// 問題を起動する関数
const init = () => {
  // quizの0番目の配列にある問題を変数に代入して表示
  $question.textContent = quiz[quizCount].question;
  // $buttonsの配列数を変数に取得
  const buttonLen = $buttons.length;

  let btnIndex = 0;

  // buttonの数ぶん、answerを代入していく
  // buttonの配列数より指定の変数が少ないなら繰り返す。
  while(btnIndex < buttonLen){
    // 何番目かの問題の複数ある回答項目を変数に代入して表示
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    // btnの番号をプラス 
    btnIndex++;
  }
};

// 次の問題へ進むための関数
const goToNext = () => {
  quizCount++;
  // もしquizの配列数よりquizcount小さいなら
  if(quizCount < quizLen){
    // 再び問題を出す関数を実行
    init(quizCount);
  } else {
    // 終了を表す関数を実行
    showEnd();
  }
};

// 正解と不正解を選別する関数
const judge = (elm) => {
  // もし選択した回答のtextContentとquizの正解が同じなら
  if(elm.textContent === quiz[quizCount].correct){
    // 正解と表示
    $window.alert('正解!');
    // 点数を1足す
    score++;
  } else {
    // 不正解と表示
    $window.alert('不正解!');
  }
  // 次の問題へ進む関数を実行
  goToNext();
};

// 最終結果を表示するための関数
const showEnd = () => {
  // 問題の数 、scoreは何点かを表示し、変数に代入
  $question.textContent = '終了！あなたのスコアは' + score + '/' + quizLen + 'です';
  // buttonを出していたところの要素を取得
  const $items = $doc.getElementById('js-items');
  // 要素のスタイル属性のプロパティでhiddenを取得。
  $items.style.visibility = 'hidden';
};

// 関数を実行
init();

let answersIndex = 0;
// quizの何番目かの回答の配列を代入
let answersLen = quiz[quizCount].answers.length;

// 回答できる数より指定の変数が少ない場合、
while(answersIndex < answersLen){
  // それぞれのbuttonにクリックしたら、起動する関数を付与。
  $buttons[answersIndex].addEventListener('click', (e) => {
    // 正解、不正解を出力する関数を実行
    judge(e.target);
  });
  answersIndex++;
}
