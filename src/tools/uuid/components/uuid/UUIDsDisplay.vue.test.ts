import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UUIDsDisplay from './UUIDsDisplay.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid UUIDsDisplay', () => {
  it('renders properly', () => {
    const uuids = [crypto.randomUUID(), crypto.randomUUID(), crypto.randomUUID()]

    const wrapper = mount(NMessageProvider, {
      slots: { default: h(UUIDsDisplay, { uuids: uuids }) }
    })
    expect(wrapper.text()).toContain(uuids[0])
    expect(wrapper.text()).toContain(uuids[1])
    expect(wrapper.text()).toContain(uuids[2])
  })
})
