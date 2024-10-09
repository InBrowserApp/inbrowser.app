import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BulkUUIDV1Generator from './BulkUUIDV1Generator.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid BulkUUIDv1 Generator', () => {
  it('renders properly', async () => {
    const wrapper = mount(NMessageProvider, {
      slots: {
        default: h(BulkUUIDV1Generator, {
          size: 5,
          config: {
            macAddress: '41:1C:4E:16:27:23'
          }
        })
      }
    })

    expect(wrapper.text()).toContain('411c4e162723')

    const uuidv1Regex = /[0-9a-f]{8}-[0-9a-f]{4}-1[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i

    const uuids = wrapper.text().match(new RegExp(uuidv1Regex, 'g'))
    expect(uuids).toBeDefined()
    expect(uuids?.length).toBe(5)

    // generate new uuids
    const regenerateButton = wrapper
      .findAll('button')
      .find((node) => node.text()!.match(/Regenerate/))
    await regenerateButton!.trigger('click')

    const newUuids = wrapper.text().match(new RegExp(uuidv1Regex, 'g'))
    expect(newUuids).toBeDefined()
    expect(newUuids?.length).toBe(5)
    expect(newUuids).not.toEqual(uuids)
  })
})
