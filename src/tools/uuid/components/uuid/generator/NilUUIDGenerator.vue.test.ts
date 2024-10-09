import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NilUUIDGenerator from './NilUUIDGenerator.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid Nil UUID Generator', () => {
  it('renders properly', async () => {
    const wrapper = mount(NMessageProvider, {
      slots: {
        default: h(NilUUIDGenerator)
      }
    })

    expect(wrapper.text()).toContain('00000000-0000-0000-0000-000000000000')
  })
})
