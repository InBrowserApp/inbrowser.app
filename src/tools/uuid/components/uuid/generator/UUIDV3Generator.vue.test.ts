import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UUIDV3Generator from './UUIDV3Generator.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'
import { v3 as uuidv3 } from 'uuid'

describe('uuid UUIDv3 Generator', () => {
  it('renders properly', async () => {
    const namespace = crypto.randomUUID()
    const name = crypto.randomUUID()

    const wrapper = mount(NMessageProvider, {
      slots: {
        default: h(UUIDV3Generator, {
          config: {
            name,
            namespace
          }
        })
      }
    })

    const uuid = uuidv3(name, namespace)

    expect(wrapper.text()).toContain(uuid)
  })
})
