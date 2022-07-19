import path from 'path'
import { AliasOptions } from 'vite' //从vite中导入alias的类型 下面就有提示

const alias = {
  '@': path.resolve(__dirname, '../src')
} as AliasOptions

export default alias
