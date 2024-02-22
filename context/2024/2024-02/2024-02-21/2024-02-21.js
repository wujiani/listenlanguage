document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["55641064.mp3",
"55641073.mp3",
"pronunciation_it_marciapiede.mp3",
"55641086.mp3",
"55641092.mp3",
"55641100.mp3",
"pronunciation_it_portici.mp3",
"55641115.mp3",
"pronunciation_it_giardino.mp3",
"55641137.mp3",
"55641148.mp3",
"55641156.mp3",
"55641167.mp3",
"55641176.mp3",
"55641184.mp3",
"55641195.mp3",
"55641203.mp3",
"55641210.mp3",
"55641216.mp3",
"55641224.mp3",
"55641233.mp3",
"55641244.mp3",
"55641250.mp3",
"55641258.mp3",
"55641265.mp3",
"55641275.mp3",
"305595355641864.mp3",
"55641295.mp3",
"55641308.mp3",
"55641316.mp3",
"55639178.mp3",
"55639195.mp3",
"55639211.mp3",
"55639222.mp3",
"55639232.mp3",
"55639242.mp3",
"55639255.mp3",
"55639269.mp3",
"55639283.mp3",
"55639295.mp3",
"55639309.mp3",
"55639330.mp3",
"55639347.mp3",
"55639368.mp3",
"55639385.mp3",
"55639399.mp3",
"55639418.mp3",
"55639434.mp3",
"55639457.mp3",
"55639474.mp3",
"55639492.mp3",
"55639506.mp3",
"55639515.mp3",
"55639530.mp3",
"55639545.mp3",
"55639556.mp3",
"55639575.mp3",
"55639591.mp3",
"55639605.mp3",
"55639621.mp3",
"55639631.mp3",
"55639648.mp3",
"55639656.mp3",
"55639663.mp3",
"55639680.mp3",
"55639701.mp3",
"55639716.mp3",
"55639730.mp3",
"55639742.mp3",
"55639762.mp3",
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
