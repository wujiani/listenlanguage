document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ["57190057.mp3",
"57190077.mp3",
"57190099.mp3",
"57190128.mp3",
"57190148.mp3",
"pronunciation_ja_東京.mp3",
"57190188.mp3",
"57190222.mp3",
"57190251.mp3",
"57190276.mp3",
"57190296.mp3",
"57190322.mp3",
"57190348.mp3",
"57190376.mp3",
"57190409.mp3",
"57190427.mp3",
"57190453.mp3",
"pronunciation_ja_木村.mp3",
"57190510.mp3",
"57190540.mp3",
"57190568.mp3",
"pronunciation_ja_暖かい.mp3",
"57190631.mp3",
"57190665.mp3",
"pronunciation_ja_雨.mp3",
"57190715.mp3",
"57190738.mp3",
"57190758.mp3",
"57190789.mp3",
"57190812.mp3",
"57209864.mp3",
"57209868.mp3",
"57209869.mp3",
"57209873.mp3",
"57209875.mp3",
"57209878.mp3",
"57209884.mp3",
"57209886.mp3",
"57209894.mp3",
"57209899.mp3",
"57209903.mp3",
"57209907.mp3",
"57209914.mp3",
"57209918.mp3",
"57209921.mp3",
"57209925.mp3",
"57209930.mp3",
"57209937.mp3",
"57209942.mp3",
"57209947.mp3",
"57209952.mp3",
"57209960.mp3",
"57209969.mp3",
"57209971.mp3",
"57209974.mp3",
"57209984.mp3",
"57209988.mp3",
"57209991.mp3",
"57209997.mp3",
"57210002.mp3",
"57210007.mp3",
"57210015.mp3",
"57210021.mp3",
"57210025.mp3",
"57210031.mp3",
"57210044.mp3",
"57210053.mp3",
"57210059.mp3",
"57210063.mp3",
"57210067.mp3",
"57210073.mp3",
"57210080.mp3",
"57210086.mp3",
"57210090.mp3",
"57210097.mp3",
"57210102.mp3",
"57210106.mp3",
"57210112.mp3",
"57210119.mp3",
"57210123.mp3",
"57210132.mp3",
"57210140.mp3",
"57210144.mp3",
"57210149.mp3",
"57210161.mp3",
"57210168.mp3",
"57210178.mp3",
"57210182.mp3",
"57210188.mp3",
"57210200.mp3",
"57210211.mp3",
"57210225.mp3",
"57210235.mp3",
"57210246.mp3",
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
