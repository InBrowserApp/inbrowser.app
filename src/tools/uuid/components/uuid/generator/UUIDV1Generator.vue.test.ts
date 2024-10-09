import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UUIDV1Generator from './UUIDV1Generator.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid UUIDv1 Generator', () => {
  it('renders properly', async () => {
    const wrapper = mount(NMessageProvider, {
      slots: {
        default: h(UUIDV1Generator, {
          config: {
            macAddress: '41:1C:4E:16:27:23'
          }
        })
      }
    })

    expect(wrapper.text()).toContain('411c4e162723')

    const uuidv1Regex = /[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i

    const currentUUID = wrapper.text().match(uuidv1Regex)
    expect(currentUUID).toBeDefined()

    // generate new uuid
    const regenerateButton = wrapper
      .findAll('button')
      .find((node) => node.text()!.match(/Regenerate/))
    await regenerateButton!.trigger('click')

    expect(wrapper.text()).not.toContain(currentUUID)
  })
})
