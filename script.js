document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = [
        '298146653747890.mp3',  // 替换成第一个音频文件的路径
        '298146653750642.mp3',  // 替换成第二个音频文件的路径
        '298146653750733.mp3'   // 替换成第三个音频文件的路径
    ];

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
