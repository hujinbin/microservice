import {
  createApp
} from 'vue'
import App from './vue/App.vue'
import './vue/index.css'

import {
  registerMicroApps,
  setDefaultMountApp,
  start
} from 'qiankun';

/**
 * 路由监听
 * @param {*} routerPrefix 前缀
 */
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

createApp(App).mount('#app')

registerMicroApps([{
    name: 'vue app',
    container: '#app',
    activeRule: genActiveRule('/'),
  },
  {
    name: 'react app', // app name registered
    entry: '//localhost:3001/',
    container: '#app',
    activeRule: genActiveRule('/react'),
  },
  {
    name: 'angular app', // app name registered
    entry: '//localhost:3032/',
    container: '#app',
    activeRule: genActiveRule('/angular'),
  },
], {
  beforeLoad: [
    app => {
      console.log("before load", app);
    }
  ], // 挂载前回调
  beforeMount: [
    app => {
      console.log("before mount", app);
    }
  ], // 挂载后回调
  afterUnmount: [
    app => {
      console.log("after unload", app);
    }
  ] // 卸载后回调
});

// 设置默认子应用
setDefaultMountApp("/");

start();