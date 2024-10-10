import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CIDRMergeExclude from './CIDRMergeExclude.vue'

describe('CIDR Merge and Exclude', () => {
  it('renders properly and performs IPv4CIDR operations correctly', async () => {
    const wrapper = mount(CIDRMergeExclude)

    // Find create button
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)

    // click first button
    await buttons[0].trigger('click')

    // find input
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(1)

    // set value
    await inputs[0].setValue('192.168.0.0/22')
    await inputs[0].trigger('change')

    // click second button
    await buttons[1].trigger('click')

    // find inputs
    const inputs2 = wrapper.findAll('input')
    expect(inputs2.length).toBe(2)

    // set value
    await inputs2[0].setValue('192.168.0.0/22')
    await inputs2[0].trigger('change')
    await inputs2[1].setValue('192.168.1.0/24')
    await inputs2[1].trigger('change')

    expect(wrapper.text()).toContain('192.168.0.0/24')
    expect(wrapper.text()).toContain('192.168.2.0/23')
  })

  it('renders properly and performs IPv6CIDR operations correctly', async () => {
    const wrapper = mount(CIDRMergeExclude)

    // Find create button
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)

    // click first button
    await buttons[0].trigger('click')

    // find input
    const inputs = wrapper.findAll('input')
    expect(inputs.length).toBe(1)

    // set value
    await inputs[0].setValue('2001:db8::/32')
    await inputs[0].trigger('change')

    // click second button
    await buttons[1].trigger('click')

    // find inputs
    const inputs2 = wrapper.findAll('input')
    expect(inputs2.length).toBe(2)

    // set values
    await inputs2[0].setValue('2001:db8::/32')
    await inputs2[0].trigger('change')
    await inputs2[1].setValue('2001:db8:1::/34')
    await inputs2[1].trigger('change')

    // Check the results
    expect(wrapper.text()).toContain('2001:db8:8000::/33')
    expect(wrapper.text()).toContain('2001:db8:4000::/34')
  })
})
