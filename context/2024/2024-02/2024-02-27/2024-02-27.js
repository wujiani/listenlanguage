document.addEventListener('DOMContentLoaded', function() {
    // 放置所有音频文件的路径
    var audioFiles =["56045082.mp3",
"56045095.mp3",
"pronunciation_ja_誕生日.mp3",
"56045128.mp3",
"pronunciation_ja_時計.mp3",
"pronunciation_ja_腕時計.mp3",
"pronunciation_ja_辞書.mp3",
"56045210.mp3",
"pronunciation_ja_としょかん.mp3",
"56045248.mp3",
"56045271.mp3",
"56045289.mp3",
"56045318.mp3",
"56045344.mp3",
"56045364.mp3",
"56045387.mp3",
"56045423.mp3",
"56045434.mp3",
"56045452.mp3",
"56045469.mp3",
"56045490.mp3",
"56045513.mp3",
"56045548.mp3",
"56045567.mp3",
"56045578.mp3",
"56045597.mp3",
"56045618.mp3",
"56045639.mp3",
"56045673.mp3",
"56045715.mp3",
"56045733.mp3",
"56045756.mp3",
"pronunciation_it_motorino.mp3",
"56045814.mp3",
"56045826.mp3",
"56045841.mp3",
"56045860.mp3",
"56045873.mp3",
"56045903.mp3",
"56045935.mp3",
"56045953.mp3",
"56045980.mp3",
"56045994.mp3",
"56046010.mp3",
"56046029.mp3",
"56046053.mp3",
"56046078.mp3",
"56046098.mp3",
"56046113.mp3",
"56046125.mp3",
"56046138.mp3",
"56046151.mp3",
"56046174.mp3",
"56046183.mp3",
"56046198.mp3",
"56046215.mp3",
"56046231.mp3",
"56046245.mp3",
"56046261.mp3",
"56046283.mp3",
"56046308.mp3",
"56046331.mp3",
"56046353.mp3",
"56046378.mp3",
"56046399.mp3",
"56046421.mp3",
"56046439.mp3",
"56046463.mp3",
"56046479.mp3",
"56046494.mp3",
"56046511.mp3",
"56046526.mp3",
"56046541.mp3",
"56046557.mp3",
"56046574.mp3",
"56046595.mp3",
"56046611.mp3",
"56046622.mp3",
"56046637.mp3",
"56046659.mp3",
"56046680.mp3",
"56046695.mp3",
"56046708.mp3",
"56046723.mp3",
"56046740.mp3",
"56046756.mp3",
"56046774.mp3",
"56046790.mp3",
"56046799.mp3",
"56046817.mp3",
"56046835.mp3",
"56046854.mp3",
"56046877.mp3",
"56046899.mp3",
"56046911.mp3",
"56046930.mp3",
"56046953.mp3",
"56046976.mp3",
"56046993.mp3",
"56047014.mp3",
"56047044.mp3",
"56047065.mp3",
"56047094.mp3",
"56047109.mp3",
"56047127.mp3",
"56047143.mp3",
"56047172.mp3",
"56047198.mp3",
"56047219.mp3",
"56047237.mp3",
"56047254.mp3",
"56047281.mp3",
"56047304.mp3",
"56047328.mp3",
"56047358.mp3",
"56047388.mp3",
"56047418.mp3",
"56047442.mp3",
"56047474.mp3",
"56047494.mp3",
"56047526.mp3",
"56047544.mp3",
"56047568.mp3",
"56047589.mp3",
"56047614.mp3",
"56047646.mp3",
"56047672.mp3",
"56048134.mp3",
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
