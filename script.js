document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ['54370935.mp3',
'54370938.mp3',
'54370940.mp3',
'54370944.mp3',
'54370951.mp3',
'54370956.mp3',
'54370961.mp3',
'54370966.mp3',
'54370973.mp3',
'54370976.mp3',
'54370982.mp3',
'54370985.mp3',
'54370987.mp3',
'54370990.mp3',
'54304043.mp3',
'54304044.mp3',
'54304050.mp3',
'54304056.mp3',
'54304061.mp3',
'54304068.mp3',
'54304070.mp3',
'54304071.mp3',
'54304073.mp3',
'54304079.mp3',
'54304084.mp3',
'54304086.mp3',
'54304091.mp3',
'54304096.mp3',
'54304101.mp3',
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
