let db;
const DB_NAME   = "jibunDB";
const DB_STORE  = "jibunSTORE";

//DBの初期処理を行う関数
function initDB(){

  //DBオープン
  let openRequest = indexedDB.open(DB_NAME);

  //DBが存在しない（DB新規作成／更新）
  openRequest.onupgradeneeded = function(event){
    db = event.target.result;
    //作成：オプジェクトストアー
    let store = db.createObjectStore(DB_STORE, {keyPath:"yyymmddhhmm"});
    //作成：インデックス
    store.createIndex("yyymmdd", "yyyymmdd", {unique:false});
    console.log("IndexedDBの準備（新規作成／バージョン更新）が完了しました。");
  }

  //成功：DBオープン
  openRequest.onsuccess = function(event){
    console.log("IndexedDBのオープンに成功しました。");
    db = event.target.result;
  }
  //失敗：DBオープン
  openRequest.onerror = function(event){
    console.log("IndexedDBのオープンに失敗しました");
  };
}
