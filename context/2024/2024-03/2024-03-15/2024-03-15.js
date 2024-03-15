document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["57439601.mp3",
"57439620.mp3",
"57439638.mp3",
"57439662.mp3",
"57439683.mp3",
"57439707.mp3",
"57439730.mp3",
"57439749.mp3",
"57439772.mp3",
"57439789.mp3",
"57439810.mp3",
"57439829.mp3",
"57439844.mp3",
"57439861.mp3",
"57439882.mp3",
"57439893.mp3",
"57439907.mp3",
"57439924.mp3",
"57439941.mp3",
"57439963.mp3",
"57439982.mp3",
"57460438.mp3",
"57460446.mp3",
"57460458.mp3",
"57460472.mp3",
"57460482.mp3",
"57460493.mp3",
"57460502.mp3",
"57460506.mp3",
"57460512.mp3",
"57460518.mp3",
"57460520.mp3",
"57460529.mp3",
"57460538.mp3",
"57460543.mp3",
"57460546.mp3",
"57460556.mp3",
"57460564.mp3",
"57460574.mp3",
"57460582.mp3",
"57460587.mp3",
"57460592.mp3",
"57460599.mp3",
"57460612.mp3",
"57460622.mp3",
"57460627.mp3",
"57460633.mp3",
"57460637.mp3",
"57460639.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"57460848.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"None.mp3",
"XXXX.mp3",
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
