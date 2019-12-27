//CSS（背景）に設定色に反映する関数
function changeBackColor(){
  //画面値（背景）の取得
  let r = document.getElementById("bgColorR").value;
  let g = document.getElementById("bgColorG").value;
  let b = document.getElementById("bgColorB").value;

  //CSS（背景）を変更
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  document.documentElement.style.setProperty('--main-bg-color', rgb);
}

//設定色（背景）を初期状態にリセットする関数
function resetBackColor(){
  document.getElementById("bgColorR").value = parseInt("ff", 16);
  document.getElementById("bgColorG").value = parseInt("57", 16);
  document.getElementById("bgColorB").value = parseInt("22", 16);
  changeBackColor();
}

//CSS（文字）に設定色に反映する関数
function changeFontColor(){
  //画面値（文字）の取得
  let r = document.getElementById("fontColorR").value;
  let g = document.getElementById("fontColorG").value;
  let b = document.getElementById("fontColorB").value;

  //CSS（文字）を変更
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  document.documentElement.style.setProperty('--main-font-color', rgb);
}

//設定色（文字）を初期状態にリセットする関数
function resetFontColor(){
  document.getElementById("fontColorR").value = parseInt("25", 16);
  document.getElementById("fontColorG").value = parseInt("25", 16);
  document.getElementById("fontColorB").value = parseInt("112", 16);
  changeFontColor();
}
