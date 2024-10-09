import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NamespaceInput from './NamespaceInput.vue'
import { NMessageProvider } from 'naive-ui'
import { h } from 'vue'

describe('uuid NamespaceInput', () => {
  it('renders properly', async () => {
    const namespace = crypto.randomUUID()
    const wrapper = mount(NamespaceInput, {
      props: {
        namespace
      }
    })

    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)
    expect(input.element.value).toBe(namespace)
  })

  it('clicks on predefined namespace', async () => {
    const wrapper = mount(NamespaceInput, {
      props: {
        namespace: crypto.randomUUID()
      }
    })

    const nsDNS = wrapper.findAll('span').find((span) => span.text() === 'ns:DNS')
    expect(nsDNS).toBeDefined()
    await nsDNS!.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('update:namespace')
    expect(wrapper.emitted()['update:namespace']).toHaveLength(1)
    expect(wrapper.emitted()['update:namespace'][0]).toEqual([
      '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
    ])
    expect(wrapper.find('input').element.value).toBe('6ba7b810-9dad-11d1-80b4-00c04fd430c8')

    const nsURL = wrapper.findAll('span').find((span) => span.text() === 'ns:URL')
    expect(nsURL).toBeDefined()
    await nsURL!.trigger('click')

    expect(wrapper.emitted()['update:namespace']).toHaveLength(2)
    expect(wrapper.emitted()['update:namespace'][1]).toEqual([
      '6ba7b811-9dad-11d1-80b4-00c04fd430c8'
    ])
    expect(wrapper.find('input').element.value).toBe('6ba7b811-9dad-11d1-80b4-00c04fd430c8')

    const nsOID = wrapper.findAll('span').find((span) => span.text() === 'ns:OID')
    expect(nsOID).toBeDefined()
    await nsOID!.trigger('click')

    expect(wrapper.emitted()['update:namespace']).toHaveLength(3)
    expect(wrapper.emitted()['update:namespace'][2]).toEqual([
      '6ba7b812-9dad-11d1-80b4-00c04fd430c8'
    ])
    expect(wrapper.find('input').element.value).toBe('6ba7b812-9dad-11d1-80b4-00c04fd430c8')

    const nsX500 = wrapper.findAll('span').find((span) => span.text() === 'ns:X.500 DN')
    expect(nsX500).toBeDefined()
    await nsX500!.trigger('click')

    expect(wrapper.emitted()['update:namespace']).toHaveLength(4)
    expect(wrapper.emitted()['update:namespace'][3]).toEqual([
      '6ba7b814-9dad-11d1-80b4-00c04fd430c8'
    ])
    expect(wrapper.find('input').element.value).toBe('6ba7b814-9dad-11d1-80b4-00c04fd430c8')
  })
})
