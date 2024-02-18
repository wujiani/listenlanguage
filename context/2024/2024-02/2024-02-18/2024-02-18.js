document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["54946276.mp3",
"54946280.mp3",
"54946283.mp3",
"54946287.mp3",
"54946292.mp3",
"54946295.mp3",
"54946297.mp3",
"54946303.mp3",
"54946306.mp3",
"54946309.mp3",
"54946311.mp3",
"54946319.mp3",
"54946326.mp3",
"54946331.mp3",
"54946334.mp3",
"54946339.mp3",
"54946341.mp3",
"54946346.mp3",
"54946355.mp3",
"54946359.mp3",
"54946365.mp3",
"54946368.mp3",
"54946374.mp3",
"54946383.mp3",
"54946391.mp3",
"54946399.mp3",
"54946408.mp3",
"54946416.mp3",
"54946424.mp3",
"54946434.mp3",
"54946443.mp3",
"54946448.mp3",
"54946451.mp3",
"54946463.mp3",
"54946482.mp3",
"54946492.mp3",
"54946498.mp3",
"54946505.mp3",
"54946511.mp3",
"54946517.mp3",
"54946526.mp3",
"54946545.mp3",
"54946577.mp3",
"54946585.mp3",
"54946594.mp3",
"54946599.mp3",
"54946609.mp3",
"54946615.mp3",
"54946624.mp3",
"54946632.mp3",
"54946639.mp3",
"54946643.mp3",
"54946650.mp3",
"54946660.mp3",
"54946668.mp3",
"54946684.mp3",
"54946696.mp3",
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
