import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DecodeResult from './DecodeResult.vue'

describe('uuid DecodeResult', () => {
  it('renders properly for v4 UUID', () => {
    const uuid = crypto.randomUUID()
    const wrapper = mount(DecodeResult, {
      props: {
        uuid
      }
    })
    expect(wrapper.text()).toContain(uuid)
    expect(wrapper.text()).toContain('4 (random)')
    expect(wrapper.text()).toContain('1 (RFC 4122/DCE 1.1 UUIDs)')
  })

  it('renders properly for v1 UUID', () => {
    const uuid = '6ba7b810-9dad-11d1-80b4-00c04fd430c8'
    const wrapper = mount(DecodeResult, {
      props: {
        uuid
      }
    })

    expect(wrapper.text()).toContain(uuid)
    expect(wrapper.text()).toContain('1 (date-time and MAC address)')
    expect(wrapper.text()).toContain('1 (RFC 4122/DCE 1.1 UUIDs)')
    expect(wrapper.text()).toContain('00:C0:4F:D4:30:C8') // MAC address
  })

  it('renders properly for v3 UUID', () => {
    const uuid = '4e39599b-da8e-3a31-baf0-21ace2987e31'
    const wrapper = mount(DecodeResult, {
      props: {
        uuid
      }
    })

    expect(wrapper.text()).toContain(uuid)
    expect(wrapper.text()).toContain('3 (namespace name-based, MD5 hash)')
    expect(wrapper.text()).toContain('1 (RFC 4122/DCE 1.1 UUIDs)')
    expect(wrapper.text()).toContain('MD5')
  })

  it('renders properly for v5 UUID', () => {
    const uuid = '95aec450-12fa-5b79-bf16-26d65bd76dc4'
    const wrapper = mount(DecodeResult, {
      props: {
        uuid
      }
    })

    expect(wrapper.text()).toContain(uuid)
    expect(wrapper.text()).toContain('5 (namespace name-based, SHA1 hash)')
    expect(wrapper.text()).toContain('1 (RFC 4122/DCE 1.1 UUIDs)')
    expect(wrapper.text()).toContain('SHA1')
  })

  it('renders properly for Nil UUID', () => {
    const uuid = '00000000-0000-0000-0000-000000000000'
    const wrapper = mount(DecodeResult, {
      props: {
        uuid
      }
    })

    expect(wrapper.text()).toContain(uuid)
    expect(wrapper.text()).toContain('0 (Nil UUID)')
    expect(wrapper.text()).toContain('0 (backwards compatibility with NCS)')
  })
})
