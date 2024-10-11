import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PunycodeTool from './PunycodeTool.vue'

describe('Punycode Tool', () => {
  it('renders properly and converts domain names correctly', async () => {
    const wrapper = mount(PunycodeTool)

    // Find the input components
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(2)

    const asciiInput = inputs[0]
    const unicodeInput = inputs[1]

    // Test ASCII to Punycode conversion
    await asciiInput.setValue('example.com')
    await asciiInput.trigger('change')

    expect(unicodeInput.element.value).toBe('example.com')

    // Test IDN to Punycode conversion
    await unicodeInput.setValue('例子.测试')
    await unicodeInput.trigger('change')

    expect(asciiInput.element.value).toBe('xn--fsqu00a.xn--0zwm56d')

    // Test Punycode to IDN conversion
    await asciiInput.setValue('xn--fsqu00a.xn--0zwm56d')
    await asciiInput.trigger('change')

    expect(unicodeInput.element.value).toBe('例子.测试')
  })
})
