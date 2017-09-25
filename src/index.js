import fs from 'fs'
import path from 'path'
import split from 'lodash/split'
import root from 'app-root-path'
let savedEnv
export default (options = {}) => {
  let rowEnv
  if(savedEnv){
    return savedEnv
  }
  savedEnv = {}
  try{
    const {name = '.env'} = options
    const envPath = options.path || root.path
    rowEnv = fs.readFileSync(path.resolve(envPath, name)).toString()
  }catch(error){
    console.warn(`[env] Warning it needs .env ${error}`)
    return savedEnv
  }

  if(!rowEnv){
    return savedEnv
  }
  split(rowEnv, '\n').forEach((RawDeclaration) => {
    const declaration = RawDeclaration.trim()
    if(declaration.length > 1 && declaration.indexOf('=') === -1){
      throw new Error(`[env] 'invalid declaration: ${declaration}`)
    }

    const [key, value] = declaration.split('=')
    if(key && value){
      Object.assign(savedEnv, {[key.trim()]: value.trim()})
    }
  })
  return savedEnv
}
