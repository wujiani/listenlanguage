document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["pronunciation_ja_第一課_だいいっか.mp3",
"55039018.mp3",
"pronunciation_ja_先生.mp3",
"pronunciation_ja_学生.mp3",
"pronunciation_ja_生徒.mp3",
"pronunciation_ja_りゅうがくせい.mp3",
"pronunciation_ja_がっこう.mp3",
"pronunciation_ja_かいしゃいん.mp3",
"pronunciation_ja_しゃいん.mp3",
"55039047.mp3",
"55039049.mp3",
"55039052.mp3",
"55039058.mp3",
"55039059.mp3",
"pronunciation_ja_違います.mp3",
"55039066.mp3",
"pronunciation_ja_よろしくおねがいします.mp3",
"55039074.mp3",
"pronunciation_ja_わかりましたか.mp3",
"pronunciation_ja_もういちどおねがいします.mp3",
"55039085.mp3",
"pronunciation_ja_おつかれさまでした.mp3",
"pronunciation_ja_お疲れ様です.mp3",
"pronunciation_ja_がいこく.mp3",
"pronunciation_ja_中国.mp3",
"pronunciation_ja_日本.mp3",
"pronunciation_ja_韓国.mp3",
"55039117.mp3",
"55039121.mp3",
"55039124.mp3",
"55039131.mp3",
"55039132.mp3",
"55039134.mp3",
"55039136.mp3",
"55039138.mp3",
"55039139.mp3",
"pronunciation_ja_えいご.mp3",
"55039143.mp3",
]
;

    // 创建音频对象数组
    var audioElements = audioFiles.map(function(file) {
        return new Audio(file);
    });

    // 获取所有按钮
    var audioButtons = document.querySelectorAll('.audioButton');

    // 为每个按钮添加点击事件监听器
    audioButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var audio = audioElements[index];

            if (audio.paused) {
                audio.play();
                // button.innerText = '내일 나가서 놀자';
            } else {
                audio.pause();
                audio.currentTime = 0;
                // button.innerText = '내일 나가서 놀자';
            }
        });
    });
});
