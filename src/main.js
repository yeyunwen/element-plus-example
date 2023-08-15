import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.min.mjs';
import 'element-plus/dist/index.css';

createApp(App).use(ElementPlus, { locale: zhCn }).use(router).mount('#app');
