document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles =["56145246.mp3",
"56145251.mp3",
"56145257.mp3",
"56145262.mp3",
"56145271.mp3",
"56145274.mp3",
"56145279.mp3",
"56145283.mp3",
"56145288.mp3",
"56145295.mp3",
"56145303.mp3",
"56145316.mp3",
"56145320.mp3",
"56145325.mp3",
"56145334.mp3",
"56145338.mp3",
"56145343.mp3",
"56145349.mp3",
"56145352.mp3",
"56145357.mp3",
"56145362.mp3",
"56145364.mp3",
"56145369.mp3",
"56145373.mp3",
"56145376.mp3",
"56145382.mp3",
"56145388.mp3",
"56145393.mp3",
"56145395.mp3",
"56145399.mp3",
"56145402.mp3",
"56145404.mp3",
"56145408.mp3",
"56145413.mp3",
"56145417.mp3",
"56145420.mp3",
"56145423.mp3",
"56145428.mp3",
"56145430.mp3",
"56145434.mp3",
"56145440.mp3",
"56145444.mp3",
"56145452.mp3",
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
