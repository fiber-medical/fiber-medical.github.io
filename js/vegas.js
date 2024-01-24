$(function() {
    $('#mainimg').vegas({
        slides: [
            { src: './images/1.png' },	//1枚目の写真指定
            { src: './images/2.png' },	//2枚目の写真指定
            { src: './images/3.png' },	//3枚目の写真指定
        ],
		transition: 'blur',			//https://vegas.jaysalvat.com/documentation/transitions/から好みのtransitionを選んで置き換えられます。
		animation: 'kenburns',		//https://vegas.jaysalvat.com/documentation/transitions/から好みのanimationを選んで置き換えられます。
		delay: 6000,				//次の画像を表示するまでの時間
		animationDuration: 10000,	//アニメーション間の引き継ぎタイミング。
    });
});
