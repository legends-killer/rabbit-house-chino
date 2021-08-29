import React from 'react'
import { ConfigProvider, Button } from 'zarm'
// import zhCN from 'zarm/lib/config-provider/locale/zh_CN'
import 'zarm/dist/zarm.css'

const App = () => {
  return (
    // <ConfigProvider locale={zhCN}>
    <div style={{ width: 400, margin: '100px auto' }}>
      <Button theme="primary">Hello World!</Button>
    </div>
    // </ConfigProvider>
  )
}
export default App
