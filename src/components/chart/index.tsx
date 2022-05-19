/*
 * @Author: benzic 690018019@qq.com
 * @Date: 2022-05-18 11:28:16
 * @LastEditors: benzic 690018019@qq.com
 * @LastEditTime: 2022-05-18 17:34:17
 * @FilePath: \adc-components\src\components\chart\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useRef } from 'react'
import { useMount } from 'ahooks'
import './index.less'
import * as echarts from 'echarts'
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface propsType {}
const TestChart: React.FC<propsType> = () => {
  useMount(() => {
    const chartDom = document.getElementById('main')
    if (chartDom) {
      const echart = echarts.init(chartDom)
      echart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      })
    }
  })

  return (
    <div className="bigText">
      这是一个测试得图表组件
      <div id="main" style={{ width: '500px', height: '500px' }}></div>
    </div>
  )
}

export default TestChart
