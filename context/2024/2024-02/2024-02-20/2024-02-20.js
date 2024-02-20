document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["55440951.mp3",
"55441039.mp3",
"55441132.mp3",
"55441216.mp3",
"55441304.mp3",
"55441384.mp3",
"55441472.mp3",
"55441550.mp3",
"55441636.mp3",
"55441731.mp3",
"55441808.mp3",
"55441897.mp3",
"55441978.mp3",
"55442059.mp3",
"55442153.mp3",
"55442237.mp3",
"55442319.mp3",
"55442407.mp3",
"55442489.mp3",
"55442589.mp3",
"55442675.mp3",
"55442753.mp3",
"55442855.mp3",
"55442947.mp3",
"pronunciation_ja_東京タワー.mp3",
"pronunciation_ja_エッフェル塔.mp3",
"pronunciation_ja_かど.mp3",
"55443306.mp3",
"55443394.mp3",
"55443476.mp3",
"55443569.mp3",
"55443652.mp3",
"55443746.mp3",
"55443825.mp3",
"pronunciation_ja_ラン.mp3",
"55443985.mp3",
"55444059.mp3",
"pronunciation_ja_じしん.mp3",
"55444228.mp3",
"pronunciation_ja_ざせき_(座席).mp3",
"pronunciation_ja_目覚まし時計.mp3",
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
