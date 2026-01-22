// avatar-tooltip.js - 仅适配你的头像提示跟随功能
window.onload = function() {
    // 1. 获取你页面里的头像元素（用你自己的.headphoto类名）
    const avatar = document.querySelector('.headphoto');
    // 容错：如果没找到头像元素，直接退出，避免报错
    if (!avatar) {
        console.log("未找到头像元素，请检查.headphoto类名是否正确");
        return;
    }

    // 2. 创建自定义提示框（样式在HTML的CSS里定义）
    const tooltip = document.createElement('div');
    tooltip.className = 'custom-tooltip';
    document.body.appendChild(tooltip);

    // 3. 监听鼠标在头像上移动的事件：让提示跟随鼠标
    avatar.addEventListener('mousemove', function(e) {
        // 读取你设置的提示文字（对应img里的data-title）
        const tipText = avatar.getAttribute('data-title');
        if (!tipText) return; // 无提示文字则不显示

        // 设置提示文字内容
        tooltip.textContent = tipText;
        // 调整提示框位置（偏移10px，避免遮挡鼠标指针）
        tooltip.style.left = (e.pageX + 15) + 'px';
        tooltip.style.top = (e.pageY + 15) + 'px';
        // 显示提示框
        tooltip.style.display = 'block';
    });

    // 4. 监听鼠标离开头像的事件：隐藏提示框
    avatar.addEventListener('mouseleave', function() {
        tooltip.style.display = 'none';
    });
};