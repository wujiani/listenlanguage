document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["56320524.mp3",
"56320532.mp3",
"56320540.mp3",
"56320557.mp3",
"56320575.mp3",
"56320579.mp3",
"pronunciation_ja_天気.mp3",
"pronunciation_ja_会社.mp3",
"56320598.mp3",
"56320602.mp3",
"pronunciation_ja_サークル.mp3",
"56320616.mp3",
"pronunciation_ja_背が高い.mp3",
"pronunciation_ja_背が低い.mp3",
"pronunciation_ja_明日.mp3",
"56320658.mp3",
"56320664.mp3",
"56320672.mp3",
"56320678.mp3",
"56320685.mp3",
"56320695.mp3",
"56320708.mp3",
"56320726.mp3",
"56320749.mp3",
"56320773.mp3",
"56320790.mp3",
"56320809.mp3",
"56320823.mp3",
"56320839.mp3",
"pronunciation_ja_食べ物.mp3",
"56320869.mp3",
"56320877.mp3",
"56320883.mp3",
"56320891.mp3",
"56320893.mp3",
"56320896.mp3",
"56320901.mp3",
"56320909.mp3",
"56320921.mp3",
"56320933.mp3",
"56320943.mp3",
"56320969.mp3",
"56320987.mp3",
"56320992.mp3",
"56320998.mp3",
"56321007.mp3",
"56321041.mp3",
"56321051.mp3",
"56321055.mp3",
"56321059.mp3",
"56321065.mp3",
"56321087.mp3",
"56321105.mp3",
"56321110.mp3",
"56321114.mp3",
"56321118.mp3",
"56321124.mp3",
"56321151.mp3",
"56321161.mp3",
"56321164.mp3",
"56321167.mp3",
"56321175.mp3",
"56321182.mp3",
"56321190.mp3",
"56321201.mp3",
"56321220.mp3",
"56321243.mp3",
"56321255.mp3",
"56321260.mp3",
"56321263.mp3",
"56321265.mp3",
"56321272.mp3",
"56321277.mp3",
"56321288.mp3",
"56321312.mp3",
"56321328.mp3",
"56321336.mp3",
"56321340.mp3",
"56321344.mp3",
"56321350.mp3",
"56321359.mp3",
"56321368.mp3",
"56321386.mp3",
"56321415.mp3",
"56321426.mp3",
"56321433.mp3",
"56321442.mp3",
"56321453.mp3",
"56321461.mp3",
"56321482.mp3",
"56321486.mp3",
"56321488.mp3",
"56321493.mp3",
"56321494.mp3",
"56321498.mp3",
"56321500.mp3",
"56321505.mp3",
"56321512.mp3",
"56321519.mp3",
"56321525.mp3",
"56321531.mp3",
"56321538.mp3",
"56321542.mp3",
"56321553.mp3",
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
