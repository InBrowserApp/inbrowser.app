import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UUIDV5Generator from './UUIDV5Generator.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'
import { v5 as uuidv5 } from 'uuid'

describe('uuid UUIDv5 Generator', () => {
  it('renders properly', async () => {
    const namespace = crypto.randomUUID()
    const name = crypto.randomUUID()

    const wrapper = mount(NMessageProvider, {
      slots: {
        default: h(UUIDV5Generator, {
          config: {
            name,
            namespace
          }
        })
      }
    })

    const uuid = uuidv5(name, namespace)

    expect(wrapper.text()).toContain(uuid)
  })
})
