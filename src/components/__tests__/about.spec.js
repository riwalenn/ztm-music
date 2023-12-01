import About from '@/views/About.vue'
import { shallowMount } from '@vue/test-utils'

describe('About.vue', () => {
  test('renders inner text', () => {
    const wrapper = shallowMount(About, {
      shallow: true
    })

    expect(wrapper.text()).toContain('about')
  })
})
