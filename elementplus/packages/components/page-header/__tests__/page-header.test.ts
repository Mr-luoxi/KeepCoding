import { markRaw } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ArrowLeft } from '@element-plus/icons-vue'
import PageHeader from '../src/page-header.vue'

const AXIOM = 'Rem is the best girl'

describe('PageHeader.vue', () => {
  test('render test', () => {
    const wrapper = mount(PageHeader, {
      props: { content: AXIOM },
    })
    expect(wrapper.find('.el-page-header__content').text()).toEqual(AXIOM)
  })

  test('should render icon props', () => {
    const icon = markRaw(ArrowLeft)
    const wrapper = mount(PageHeader, {
      props: { icon },
    })
    expect(wrapper.findComponent(icon).exists()).toBe(true)
  })

  test('should render icon slots', () => {
    const wrapper = mount(PageHeader, {
      slots: { icon: AXIOM },
    })
    expect(wrapper.find('.el-page-header__icon').text()).toEqual(AXIOM)
  })

  test('slot content', () => {
    const wrapper = mount(PageHeader, {
      slots: { content: AXIOM },
    })
    expect(wrapper.find('.el-page-header__content').text()).toEqual(AXIOM)
  })

  test('prop title', () => {
    const wrapper = mount(PageHeader, {
      props: { title: AXIOM },
    })
    expect(wrapper.find('.el-page-header__title').text()).toEqual(AXIOM)
  })

  test('slot prop', () => {
    const wrapper = mount(PageHeader, {
      slots: { title: AXIOM },
    })
    expect(wrapper.find('.el-page-header__title').text()).toEqual(AXIOM)
  })

  test('event back', async () => {
    const wrapper = mount(PageHeader, {
      props: { content: AXIOM },
    })

    await wrapper.find('.el-icon').trigger('click')
    expect(wrapper.emitted('back')).toBeDefined()
  })
})
