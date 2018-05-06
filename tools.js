// 使う関数とかをまとめて記述しておく

var FAIL = 0;   // 抽選におけるハズレくじ

// 配列の中身をシャッフルする関数
function shuffle(array){
    var n = array.length, t, i;

    while(n){
        i = Math.floor(Math.random() * n--);
        t = array[n];
        array[n] = array[i];
        array[i] = t;
    }

    return array;
}

// 抽選クジを作成する関数
// 引数: プレイヤー数, 1チームのメンバー数, チーム数
function make_lottery(player_num, member_num, team_num){
    var lottery = [];
    var i, t;

    // くじに順番に数値を入れる
    for (var i=0; i < player_num; i++){
        var team = Math.floor(i/member_num)+1;
        if ( team_num >= team) {
            lottery[i] = team;
        }else{
            lottery[i] = FAIL;
        }
    }

    var s_lottery = shuffle(lottery);

    return s_lottery;
}

// 通常の抽選
// arrayに対して変更を加えても引用元が変更されなかったので、arrayも返すことにした。
function cast_lots(array){
    var local_array = array;
    var num = local_array.pop();
    // console.log(num);
    // console.log(array);
    return [num, local_array];
}

// 絶対当たるボタン
function cast_win_lots(array){
    var your_num = 0;
    var local_array = array;
    for (var i=0; i < local_array.length; i++){
        if(local_array[i] != 0) {
            your_num = local_array[i];
            local_array.splice(i, 1);   // i番目から1つ要素を削除
            return [your_num, local_array];
        }
    }
    your_num = local_array.pop();

    return [your_num, local_array]  // 本来は呼ばれるはずがない。
}