document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ['54702518.mp3',
'54702523.mp3',
'pronunciation_ja_すし.mp3',
'54702531.mp3',
'54702534.mp3',
'54702540.mp3',
'pronunciation_ja_てりやき.mp3',
'54702553.mp3',
'54702555.mp3',
'54702561.mp3',
'54702566.mp3',
'54702573.mp3',
'54702577.mp3',
'54702582.mp3',
'54702586.mp3',
'54702590.mp3',
'54702594.mp3',
'54529792.mp3',
'54529795.mp3',
'54529797.mp3',
'54529801.mp3',
'54529803.mp3',
'54529807.mp3',
'54529811.mp3',
'54529816.mp3',
'54529821.mp3',
'54529824.mp3',
'54529827.mp3',
'54529831.mp3',
'54529834.mp3',
'54529840.mp3',
'54529842.mp3',
'54529845.mp3',
'54529847.mp3',
'54529853.mp3',
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
