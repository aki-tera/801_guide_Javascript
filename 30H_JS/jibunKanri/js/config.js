//CSS（背景）に設定色に反映する関数
function changeBackColor(){
  //画面値（背景）の取得
  let r = document.getElementById("bgColorR").value;
  let g = document.getElementById("bgColorG").value;
  let b = document.getElementById("bgColorB").value;

  //ローカルストレージへの登録
  localStorage.setItem("main-bg-color_R", r);
  localStorage.setItem("main-bg-color_G", g);
  localStorage.setItem("main-bg-color_B", b);

  //CSS（背景）を変更
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  document.documentElement.style.setProperty('--main-bg-color', rgb);
}

//設定色（背景）を初期状態にリセットする関数
function resetBackColor(){
  //ローカルストレージのリセット
  localStorage.removeItem("main-bg-color_R");
  localStorage.removeItem("main-bg-color_G");
  localStorage.removeItem("main-bg-color_B");

  //画面値（背景）を初期値に
  document.getElementById("bgColorR").value = parseInt("ff", 16);
  document.getElementById("bgColorG").value = parseInt("57", 16);
  document.getElementById("bgColorB").value = parseInt("22", 16);

  changeBackColor();
}

//ローカルストレージの設定色を画面に反映する関数
function setBackColor(){
  //ローカルストレージ内のデータ有無確認
  if ( localStorage.getItem("main-bg-color_B") == null){

    resetBackColor();

  }else{
    //ローカルストレージデータの取得
    let r = localStorage.getItem("main-bg-color_R");
    let g = localStorage.getItem("main-bg-color_G");
    let b = localStorage.getItem("main-bg-color_B");
    //画面値（背景）に反映
    document.getElementById("bgColorR").value = r;
    document.getElementById("bgColorG").value = g;
    document.getElementById("bgColorB").value = b;

    changeBackColor();
  }
}




//CSS（文字）に設定色に反映する関数
function changeFontColor(){
  //画面値（文字）の取得
  let r = document.getElementById("fontColorR").value;
  let g = document.getElementById("fontColorG").value;
  let b = document.getElementById("fontColorB").value;

  //ローカルストレージへの登録
  localStorage.setItem("main-font-color_R", r);
  localStorage.setItem("main-font-color_G", g);
  localStorage.setItem("main-font-color_B", b);

  //CSS（文字）を変更
  let rgb = "rgb(" + r + "," + g + "," + b + ")";
  document.documentElement.style.setProperty('--main-font-color', rgb);
}

//設定色（文字）を初期状態にリセットする関数
function resetFontColor(){
  //ローカルストレージのリセット
  localStorage.removeItem("main-font-color_R");
  localStorage.removeItem("main-font-color_G");
  localStorage.removeItem("main-font-color_B");

  //画面値（文字）を初期値に
  document.getElementById("fontColorR").value = parseInt("25", 16);
  document.getElementById("fontColorG").value = parseInt("25", 16);
  document.getElementById("fontColorB").value = parseInt("112", 16);

  changeFontColor();
}

//ローカルストレージの設定色を画面に反映する関数
function setFontColor(){
  //ローカルストレージ内のデータ有無確認
  if ( localStorage.getItem("main-font-color_B") == null){

    resetFontColor();

  }else{
    //ローカルストレージデータの取得
    let r = localStorage.getItem("main-font-color_R");
    let g = localStorage.getItem("main-font-color_G");
    let b = localStorage.getItem("main-font-color_B");
    //画面値（背景）に反映
    document.getElementById("fontColorR").value = r;
    document.getElementById("fontColorG").value = g;
    document.getElementById("fontColorB").value = b;

    changeFontColor();
  }
}
