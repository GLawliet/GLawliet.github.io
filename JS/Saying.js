// sayings.js - 福尔摩斯名言自动切换逻辑（含中英双语）
(function() {
    // 1. 重构名言列表：每个元素包含英文+中文翻译
    const sayingsList = [
        {
            en: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
            cn: "排除所有不可能的，剩下的即使再不可能，那也是真相。"
        },
        {
            en: "The world is full of obvious things which nobody by any chance ever observes.",
            cn: "世界上到处都是看不出来的明显事，只是没人碰巧观察到而已。"
        },
        {
            en: "I never make exceptions. An exception disproves the rule.",
            cn: "我从不破例，例外会推翻规则。"
        },
        {
            en: "What one man can invent another can discover.",
            cn: "有人能发明的东西，就有人能识破。"
        },
        {
            en: "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
            cn: "学习永无止境，华生。这是一系列的课程，最伟大的一课总是最后才来。"
        },
        {
            en: "Tears can't stop bullets, otherwise, what a gentle world it should be.",
            cn: "眼泪是挡不住子弹的，否则那该是个多么温柔的世界啊。"
        },
        {
            en: "The problem of your past is your business, the problem of your future is my privilege.",
            cn: "你的过去我来不及参与，你的未来我奉陪到底。"
        },
        {
            en: "All lives end,all hearts are broken.Caring is not an advantage! ",
            cn: "生命终有尽头，人心终要破碎，太在意可不是什么优点！"
        },
        {
            en: "Sentimentality is a physical defect of the loser.",
            cn: "感情用事是失败者的生理缺陷。"
        },
        {
            en: "A lie that's preferable to the truth.",
            cn: "一个比真相更受欢迎的谎言。"
        },
        {
            en:"Most people... blunder round this city, and all they see are streets and shops and cars.When you walk with Sherlock Holmes, you see the battlefield. ",
            cn:"这城市大多人都庸庸碌碌,眼中只有繁华街肆 车来人往.与夏洛克•福尔摩斯同行 你却能看到战场"
        },
        {
            en:"Don't make people into heroes, John. Heroes don't exist, and if they did, I wouldn't be one of them. ",
            cn:"别把人变成英雄，约翰。英雄并不存在，就算存在，我也不在其列。"
        },      
    ];

    // 2. 初始化函数：页面加载完成后执行
    function initSayings() {
        // 获取名言容器
        const sayingContainer = document.getElementById('sayingContainer');
        if (!sayingContainer) return; // 防止容器不存在报错

        // 当前显示的名言索引
        let currentIndex = 0;

        // 3. 创建所有名言DOM元素（含中英双语）
        sayingsList.forEach((saying, index) => {
            // 外层容器：包裹英文+中文
            const sayingItem = document.createElement('div');
            sayingItem.className = `saying-item ${index === 0 ? 'active' : ''}`;
            
            // 英文部分
            const enText = document.createElement('div');
            enText.className = 'saying-en';
            enText.textContent = saying.en;
            
            // 中文部分
            const cnText = document.createElement('div');
            cnText.className = 'saying-cn';
            cnText.textContent = saying.cn;
            
            // 组装：英文+中文放入外层容器
            sayingItem.appendChild(enText);
            sayingItem.appendChild(cnText);
            sayingContainer.appendChild(sayingItem);
        });

        // 4. 切换名言的核心函数
        function switchSaying() {
            const allItems = document.querySelectorAll('.saying-item');
            allItems[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % sayingsList.length; // 循环切换
            allItems[currentIndex].classList.add('active');
        }

        // 5. 启动定时切换（10秒=10000毫秒）
        setInterval(switchSaying, 10000);
    }

    // 页面加载完成后初始化（避免DOM未加载完成报错）
    if (document.readyState === 'complete') {
        initSayings();
    } else {
        document.addEventListener('DOMContentLoaded', initSayings);
    }
})();