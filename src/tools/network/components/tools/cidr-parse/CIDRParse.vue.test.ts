import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CIDRParse from './CIDRParse.vue'

describe('CIDR Parse', () => {
  it('renders properly and parses CIDR correctly', async () => {
    const wrapper = mount(CIDRParse)

    // Find the input component
    const input = wrapper.find('input')
    expect(input.exists()).toBe(true)

    // Simulate user input for IPv4 CIDR
    await input.setValue('192.168.0.0/24')
    await input.trigger('change')

    // Check if the result is displayed correctly
    expect(wrapper.text()).toContain('IPv4')
    expect(wrapper.text()).toContain('192.168.0.0')
    expect(wrapper.text()).toContain('192.168.0.255')
    expect(wrapper.text()).toContain('256')
    expect(wrapper.text()).toContain('255.255.255.0')

    // Test with an IPv6 CIDR
    await input.setValue('2001:db8::/32')
    await input.trigger('change')

    expect(wrapper.text()).toContain('IPv6')
    expect(wrapper.text()).toContain('2001:db8::')
    expect(wrapper.text()).toContain('2001:db8:ffff:ffff:ffff:ffff:ffff:ffff')

    // Test with an invalid CIDR
    await input.setValue('invalid-cidr')
    await input.trigger('change')

    expect(wrapper.text()).not.toContain('Start IP')
    expect(wrapper.text()).not.toContain('End IP')
  })
})
