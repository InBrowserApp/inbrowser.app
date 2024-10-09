import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BulkUUIDV4Generator from './BulkUUIDV4Generator.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid Bulk UUIDv4 Generator', () => {
  it('renders properly', async () => {
    const wrapper = mount(NMessageProvider, {
      slots: {
        default: h(BulkUUIDV4Generator, {
          size: 5
        })
      }
    })

    const uuidv4Regex = /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i

    // Check if 5 UUIDs are generated
    const uuids = wrapper.text().match(new RegExp(uuidv4Regex, 'g'))
    expect(uuids).toHaveLength(5)

    // All UUIDs should be unique
    const uniqueUUIDs = new Set(uuids)
    expect(uniqueUUIDs.size).toBe(5)

    // Generate new UUIDs
    const regenerateButton = wrapper
      .findAll('button')
      .find((node) => node.text()!.match(/Regenerate/))
    await regenerateButton!.trigger('click')

    const newUUIDs = wrapper.text().match(new RegExp(uuidv4Regex, 'g'))
    expect(newUUIDs).toHaveLength(5)

    // New UUIDs should be different from the original ones
  })
})
