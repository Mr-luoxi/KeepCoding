import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tag from '../src/tag.vue'

const AXIOM = 'Rem is the best girl'

describe('Tag.vue', () => {
  test('render text & class', () => {
    const wrapper = mount(Tag, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)

    const vm = wrapper.vm

    expect(vm.$el.classList.contains('el-tag')).toEqual(true)
    expect(vm.$el.classList.contains('el-tag__close')).toEqual(false)
    expect(vm.$el.classList.contains('is-hit')).toEqual(false)
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('type', () => {
    const wrapper = mount(Tag, {
      props: {
        type: 'success',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('el-tag--success')).toEqual(true)
  })

  test('hit', () => {
    const wrapper = mount(Tag, {
      props: {
        hit: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('is-hit')).toEqual(true)
  })

  test('closable', async () => {
    const wrapper = mount(Tag, {
      props: {
        closable: true,
      },
    })
    const closeBtn = wrapper.find('.el-tag .el-tag__close')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted().close).toBeTruthy()
  })

  test('closeTransition', () => {
    const wrapper = mount(Tag, {
      props: {
        closeTransition: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('color', () => {
    const wrapper = mount(Tag, {
      props: {
        color: 'rgb(0, 0, 0)',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.backgroundColor).toEqual('rgb(0, 0, 0)')
  })

  test('theme', () => {
    const wrapper = mount(Tag, {
      props: {
        effect: 'dark',
      },
    })
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.includes('el-tag--dark')).toEqual(true)
    expect(el.className.includes('el-tag--light')).toEqual(false)
    expect(el.className.includes('el-tag--plain')).toEqual(false)
  })

  // should also support large size
  test('size', () => {
    const wrapper = mount(Tag, {
      props: {
        size: 'large',
      },
    })
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.includes('el-tag--large')).toEqual(true)
    expect(el.className.includes('el-tag--default')).toEqual(false)
    expect(el.className.includes('el-tag--small')).toEqual(false)
  })
})
