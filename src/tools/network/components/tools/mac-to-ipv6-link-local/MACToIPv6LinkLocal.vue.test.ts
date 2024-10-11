import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MACToIPv6LinkLocal from './MACToIPv6LinkLocal.vue'

describe('MAC to IPv6 Link-Local', () => {
  it('renders properly and converts MAC to IPv6 Link-Local correctly', async () => {
    const wrapper = mount(MACToIPv6LinkLocal)

    // Find the input component
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)

    // Test with a valid MAC address
    await input.setValue('00:11:22:33:44:55')
    await input.trigger('change')

    expect(wrapper.text()).toContain('fe80::211:22ff:fe33:4455')

    // Test with another valid MAC address
    await input.setValue('aa:bb:cc:dd:ee:ff')
    await input.trigger('change')

    expect(wrapper.text()).toContain('fe80::a8bb:ccff:fedd:eeff')

    // Test with an invalid MAC address
    await input.setValue('invalid-mac')
    await input.trigger('change')

    expect(wrapper.text()).not.toContain('fe80::')
  })
})
