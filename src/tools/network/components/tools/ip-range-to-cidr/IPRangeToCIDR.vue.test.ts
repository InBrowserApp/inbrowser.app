import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import IPRangeToCIDR from './IPRangeToCIDR.vue'

describe('IP Range to CIDR', () => {
  it('renders properly and converts IP range to CIDR correctly', async () => {
    const wrapper = mount(IPRangeToCIDR)

    // Find the input components
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(2)

    // Test with IPv4 range
    await inputs[0].setValue('192.168.0.1')
    await inputs[1].setValue('192.168.0.10')
    await inputs[0].trigger('change')
    await inputs[1].trigger('change')

    // Check if the result is displayed correctly
    expect(wrapper.text()).toContain('192.168.0.1/32')
    expect(wrapper.text()).toContain('192.168.0.2/31')
    expect(wrapper.text()).toContain('192.168.0.4/30')
    expect(wrapper.text()).toContain('192.168.0.8/31')
    expect(wrapper.text()).toContain('192.168.0.10/32')

    // Test with IPv6 range
    await inputs[0].setValue('2001:db8::1')
    await inputs[1].setValue('2001:db8::10')
    await inputs[0].trigger('change')
    await inputs[1].trigger('change')

    expect(wrapper.text()).toContain('2001:db8::1/128')
    expect(wrapper.text()).toContain('2001:db8::2/127')
    expect(wrapper.text()).toContain('2001:db8::4/126')
    expect(wrapper.text()).toContain('2001:db8::8/125')
    expect(wrapper.text()).toContain('2001:db8::10/128')

    // Test with invalid input
    await inputs[0].setValue('invalid-ip')
    await inputs[1].setValue('192.168.0.10')
    await inputs[0].trigger('change')
    await inputs[1].trigger('change')

    expect(wrapper.text()).not.toContain('CIDR Result')
  })
})
