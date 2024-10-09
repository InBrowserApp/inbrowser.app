import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UUIDV4Generator from './UUIDV4Generator.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid UUIDv4 Generator', () => {
  it('renders properly', async () => {
    const wrapper = mount(NMessageProvider, {
      slots: { default: h(UUIDV4Generator) }
    })

    const uuidv4Regex = /[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/i

    // matches uuidv4 regex
    expect(wrapper.text()).toMatch(uuidv4Regex)

    const currentUUID = wrapper.text().match(uuidv4Regex)
    expect(currentUUID).toBeDefined()

    // generate new uuid
    const regenerateButton = wrapper
      .findAll('button')
      .find((node) => node.text()!.match(/Regenerate/))
    await regenerateButton!.trigger('click')

    expect(wrapper.text()).not.toContain(currentUUID)

    const newUUID = wrapper.text().match(uuidv4Regex)
    expect(newUUID).toBeDefined()
    expect(newUUID).not.toEqual(currentUUID)
  })
})
