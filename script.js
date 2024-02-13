document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ['54517594.mp3',
'54517618.mp3',
'54517640.mp3',
'54517663.mp3',
'54517679.mp3',
'54517695.mp3',
'54517709.mp3',
'54517717.mp3',
'54517741.mp3',
'54517757.mp3',
'54517773.mp3',
'54517789.mp3',
'54517804.mp3',
'54517822.mp3',
'54517841.mp3',
'54517862.mp3',
'54517875.mp3',
'54517895.mp3',
'54517915.mp3',
'54517935.mp3',
'54517955.mp3',
'54517971.mp3',
'54517991.mp3',
'54518007.mp3',
'54518027.mp3',
'54518044.mp3',
'54518053.mp3',
'54518072.mp3',
'54518088.mp3',
'54518101.mp3',
'54518117.mp3',
'54518126.mp3',
'54518140.mp3',
'54518151.mp3',
'54518171.mp3',
'54518194.mp3',
'54518205.mp3',
'54518221.mp3',
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
