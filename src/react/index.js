export async function bootstrap() {
    console.log('react app bootstraped');
  }
  
  /**
   * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
   */
  export async function mount(props) {
    ReactDOM.render(<App />, props.container ? props.container.querySelector('#root') : document.getElementById('root'));
  }
  
  /**
   * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
   */
  export async function unmount(props) {
    ReactDOM.unmountComponentAtNode(
      props.container ? props.container.querySelector('#root') : document.getElementById('root'),
    );
  }
  
  /**
   * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
   */
  export async function update(props) {
    console.log('update props', props);
  }