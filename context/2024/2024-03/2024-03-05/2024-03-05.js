document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["56326163.mp3",
"56326165.mp3",
"56326169.mp3",
"56326171.mp3",
"56326176.mp3",
"56326180.mp3",
"56326183.mp3",
"56326188.mp3",
"56326191.mp3",
"56326192.mp3",
"56326196.mp3",
"56326201.mp3",
"56326207.mp3",
"56326211.mp3",
"56326216.mp3",
"56326219.mp3",
"56326224.mp3",
"56326231.mp3",
"56326241.mp3",
"56326247.mp3",
"56326254.mp3",
"56326260.mp3",
"56326264.mp3",
"56326274.mp3",
"56326281.mp3",
"56326290.mp3",
"56326293.mp3",
"56326296.mp3",
"56326298.mp3",
"56326302.mp3",
"56326306.mp3",
"56326312.mp3",
"56326318.mp3",
"56326325.mp3",
"56326328.mp3",
"56326338.mp3",
"56326345.mp3",
"56326352.mp3",
"56326356.mp3",
"56326363.mp3",
"56326367.mp3",
"56326370.mp3",
"56326372.mp3",
"56326378.mp3",
"56326379.mp3",
"56326382.mp3",
"56326386.mp3",
"56326391.mp3",
"56326395.mp3",
"56326399.mp3",
"56326401.mp3",
"56326403.mp3",
"56326407.mp3",
"56326411.mp3",
"56326418.mp3",
"56326423.mp3",
"56326428.mp3",
"56326433.mp3",
"56326435.mp3",
"56326436.mp3",
"56326441.mp3",
"56326444.mp3",
"56326449.mp3",
"56326454.mp3",
"56326461.mp3",
"56326464.mp3",
"56326465.mp3",
"56326468.mp3",
"56326469.mp3",
"56326473.mp3",
"56326477.mp3",
"56326483.mp3",
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
