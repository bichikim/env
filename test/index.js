import {expect} from 'chai'
import {describe, it} from 'mocha'
import env from '../src/index'
describe('evn', () => {
  {
    const result = env()
    it('can read an .env file', () => {
      expect(result).to.be.a('object')
      expect(result.APP_NAME).to.equal('testName')
      expect(result.APP_ENV).to.equal('development')
    })
  }
})
