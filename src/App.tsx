/*
 * @Author: benzic 690018019@qq.com
 * @Date: 2022-05-17 10:33:36
 * @LastEditors: benzic 690018019@qq.com
 * @LastEditTime: 2022-05-18 18:07:13
 * @FilePath: \adc-components\src\App.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import './App.less'
import 'antd/dist/antd.css'
import { TestConponent, TestChart } from '@/components/index'
function App() {
  return (
    <div className="App">
      <TestConponent testState={true}></TestConponent>
      <TestChart></TestChart>
    </div>
  )
}

export default App
