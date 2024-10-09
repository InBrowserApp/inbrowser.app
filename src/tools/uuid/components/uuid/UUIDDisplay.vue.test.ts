import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UUIDDisplay from './UUIDDisplay.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid UUIDDisplay', () => {
  it('renders properly', () => {
    const uuid = crypto.randomUUID()
    const wrapper = mount(NMessageProvider, {
      slots: { default: h(UUIDDisplay, { uuid }) }
    })
    expect(wrapper.text()).toContain(uuid)
  })
})
