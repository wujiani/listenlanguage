document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["54782966.mp3",
"54782979.mp3",
"54782987.mp3",
"54782991.mp3",
"54782999.mp3",
"pronunciation_ja_ほん.mp3",
"54783025.mp3",
"54783042.mp3",
"54783055.mp3",
"54783068.mp3",
"54783085.mp3",
"54783103.mp3",
"54783118.mp3",
"54783135.mp3",
"pronunciation_it_che_ore_sono..mp3",
"pronunciation_it_che_ora_è..mp3",
"pronunciation_it_è_l-'una..mp3",
"pronunciation_it_è_mezzogiorno..mp3",
"pronunciation_it_è_mezzanotte..mp3",
"54790611.mp3",
"54790617.mp3",
"54790619.mp3",
"54790623.mp3",
"54790625.mp3",
"54790627.mp3",
"54790632.mp3",
"54790637.mp3",
"54788609.mp3",
"54788617.mp3",
"54788625.mp3",
"54788628.mp3",
"54788638.mp3",
"54788642.mp3",
"54788647.mp3",
"54788656.mp3",
"54788663.mp3",
"54788671.mp3",
"54788678.mp3",
"54788690.mp3",
"54788704.mp3",
"54788714.mp3",
"54788725.mp3",
"54788731.mp3",
"54788741.mp3",
"54788755.mp3",
"pronunciation_ko_보기.mp3",
"54788770.mp3",
"54788779.mp3",
"54788782.mp3",
"54788788.mp3",
"54788793.mp3",
"54788796.mp3",
"54788801.mp3",
"54788807.mp3",
"54788815.mp3",
"54788818.mp3",
"54788827.mp3",
"54788835.mp3",
"54788841.mp3",
"54788850.mp3",
"54788854.mp3",
"54788864.mp3",
"54788871.mp3",
"54788881.mp3",
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
