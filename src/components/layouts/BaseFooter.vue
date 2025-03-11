<template>
    <div class="parent-container">
        <!-- 居中 上下来咧 -->
        <div class="footer-container">
            <div class="footer-top">
                <a href="https://beian.miit.gov.cn/" target="_blank">备案号：粤B2-20090059</a>
            </div>
            <div class="footer-bottom">
                Copyright © 1998-2025 ToPhone All Rights Reserved.
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 父容器，设置为flex布局并让内容水平居中 */
.parent-container {
    display: flex;
    justify-content: center;
    align-items: center; /* 垂直居中，如果需要的话 */
    font-size: 12px;
    
}

/* 页脚容器，设置宽度并让内容水平居中 */
.footer-container {
    width: 100%; /* 可根据需要调整宽度 */
    display: flex;
    flex-direction: column;
    align-items: center; /* 让子元素水平居中 */
}

/* 页脚顶部 */
.footer-top {
    text-align: center; /* 确保内部文本或链接水平居中 */
}

/* 页脚底部 */
.footer-bottom {
    text-align: center; /* 确保内部文本水平居中 */
}
a{
    color: #666;
    text-decoration: none;
}
</style>