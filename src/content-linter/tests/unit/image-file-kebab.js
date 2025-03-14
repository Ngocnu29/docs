import { jest } from '@jest/globals'
import markdownlint from 'markdownlint'

import { imageFileKebab } from '../../lib/linting-rules/image-file-kebab'
import { testOptions } from '../../lib/default-markdownlint-options.js'

const fixtureFile = 'src/content-linter/tests/fixtures/image-file-kebab.md'

describe('image alt text length rule', () => {
  jest.setTimeout(20 * 1000)
  const options = testOptions('MD115', imageFileKebab, fixtureFile)

  const result = markdownlint.sync(options)
  test('image file with lowercase kebab case', () => {
    const errors = result[fixtureFile]
    expect(Object.keys(result).length).toBe(1)
    expect(errors.length).toBe(4)
    expect(errors.map((error) => error.lineNumber)).toEqual([4, 5, 6, 7])
  })
})
