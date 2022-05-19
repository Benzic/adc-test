/*
 * @Author: benzic 690018019@qq.com
 * @Date: 2022-05-17 11:19:41
 * @LastEditors: benzic 690018019@qq.com
 * @LastEditTime: 2022-05-18 09:44:58
 * @FilePath: \adc-components\src\components\test\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { useMount } from 'ahooks'
import { Button } from 'antd'
import { useImmer } from 'use-immer'
import './index.less'
interface stateTypes {
  number: number
}
const TestComponent: React.FC<{ testState: boolean }> = ({ testState }) => {
  const [state, setState] = useImmer<stateTypes>({
    number: 1
  })
  useMount(() => {
    console.log('组建加载', testState)
  })
  return (
    <div className="bigText">
      这是一个测试得组件
      <Button
        type="link"
        onClick={() => {
          setState((state: stateTypes) => {
            state.number = state.number + 1
          })
        }}
      >
        测试按钮
      </Button>
      数字：{state.number}
    </div>
  )
}

export default TestComponent
