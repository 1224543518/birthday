// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "To SUESLFRESY",
        "愿你贪吃不胖",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "愿你懒惰不丑",  // 同上...
        "愿你永远健康美好依旧",
        "愿你从旧衣服找到零钱",
        "愿你做过的美梦全都实现",
        "愿你永远都有好运气",
        "愿这岁月悠长",
        "即使我们不见亦能不散",
        "若这一切太难",
        "我只愿你一生简单",
        "平安喜乐",
        "顺遂无忧",
        "哦吼",
        "happy birthday!",
        
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "To SUESLFRESY": "./imgs/sueslfresy2.png",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
