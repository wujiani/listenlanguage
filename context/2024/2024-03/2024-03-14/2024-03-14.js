document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["57355439.mp3",
"57355458.mp3",
"57355474.mp3",
"57355495.mp3",
"57355508.mp3",
"57355524.mp3",
"57355545.mp3",
"57355557.mp3",
"57355577.mp3",
"57355586.mp3",
"57355593.mp3",
"57355603.mp3",
"57355615.mp3",
"57355623.mp3",
"57355635.mp3",
"57355642.mp3",
"57355651.mp3",
"57355664.mp3",
"57355677.mp3",
"57355688.mp3",
"57355697.mp3",
"57355714.mp3",
"57355736.mp3",
"57355755.mp3",
"57355765.mp3",
"57355779.mp3",
"57355797.mp3",
"57355813.mp3",
"57355832.mp3",
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
