document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["54945827.mp3",
"54945833.mp3",
"54945841.mp3",
"54945846.mp3",
"54945849.mp3",
"54945852.mp3",
"54945857.mp3",
"54945861.mp3",
"54945865.mp3",
"54945868.mp3",
"54945872.mp3",
"54945874.mp3",
"54945875.mp3",
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
