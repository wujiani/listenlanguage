document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles = ['54694950.mp3',
'54694958.mp3',
'54694980.mp3',
'54694985.mp3',
'pronunciation_ja_ただいま.mp3',
'54694995.mp3',
'54695002.mp3',
'54695010.mp3',
'54695017.mp3',
'54695022.mp3',
'54695026.mp3',
'54695036.mp3',
'pronunciation_ko_제1과.mp3',
'54698303.mp3',
'54698306.mp3',
'54698309.mp3',
'pronunciation_ko_어휘.mp3',
'54698315.mp3',
'54698322.mp3',
'54698327.mp3',
'54698336.mp3',
'pronunciation_ko_성씨.mp3',
'54698349.mp3',
'54698354.mp3',
'54698360.mp3',
'54698368.mp3',
'54698376.mp3',
'54698384.mp3',
'54698389.mp3',
'54698396.mp3',
'54698402.mp3',
'54698406.mp3',
'54698412.mp3',
'54698417.mp3',
'54698421.mp3',
'54698427.mp3',
'54698431.mp3',
'54698435.mp3',
'pronunciation_ko_인도.mp3',
'54698440.mp3',
'54698446.mp3',
'54698449.mp3',
'54698456.mp3',
'54698466.mp3',
'54698470.mp3',
'54698475.mp3',
'54698480.mp3',
'54698489.mp3',
'54698496.mp3',
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
