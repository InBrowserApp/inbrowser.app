import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IPCIDRNormalize from './IPCIDRNormalize.vue'

describe('IP/CIDR Normalize', () => {
  it('renders properly and normalizes IP/CIDR correctly', async () => {
    const wrapper = mount(IPCIDRNormalize)

    // Find the input component
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)

    // Test with IPv4 address
    await input.setValue('192.168.0.1')
    await input.trigger('change')

    expect(wrapper.text()).toContain('192.168.0.1')

    // Test with IPv4 CIDR
    await input.setValue('192.168.0.0/24')
    await input.trigger('change')

    expect(wrapper.text()).toContain('192.168.0.0')
    expect(wrapper.text()).toContain('192.168.0.0/24')

    // Test with IPv6 address
    await input.setValue('2001:db8::1')
    await input.trigger('change')

    expect(wrapper.text()).toContain('2001:db8::1')

    // Test with IPv6 CIDR
    await input.setValue('2001:db8::/32')
    await input.trigger('change')

    expect(wrapper.text()).toContain('2001:db8::')
    expect(wrapper.text()).toContain('2001:db8::/32')

    // Test with invalid input
    await input.setValue('invalid-input')
    await input.trigger('change')

    expect(wrapper.text()).not.toContain('Normalized IP')
    expect(wrapper.text()).not.toContain('Normalized CIDR')
  })
})
