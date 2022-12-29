import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import InputNumber from '../src/input-number.vue'

const mouseup = new Event('mouseup')
const _mount = (options) =>
  mount({
    components: {
      'el-input-number': InputNumber,
    },
    ...options,
  })
describe('InputNumber.vue', () => {
  test('create', async () => {
    const wrapper = _mount({
      template: `
        <el-input-number
          label="描述文字"
          v-model="num">
        </el-input-number>
      `,
      setup() {
        const num = ref(1)
        return {
          num,
        }
      },
    })
    expect(wrapper.find('input').exists()).toBe(true)
  })
  test('modelValue', () => {
    const wrapper = _mount({
      template: '<el-input-number :model-value="inputText" />',
      setup() {
        const inputText = ref(1)
        return {
          inputText,
        }
      },
    })
    expect(wrapper.find('input').element.value).toEqual('1')
  })
  test('set modelValue undefined to form validate', async () => {
    const wrapper = _mount({
      template:
        '<el-input-number :model-value="num" placeholder="input number"/><p>{{num}}</p>',
      setup() {
        const num = ref(undefined)
        return {
          num,
        }
      },
    })
    await nextTick()
    expect(wrapper.find('p').element.innerText).toBeUndefined()
  })
  test('set modelValue undefined to display placeholder', async () => {
    const wrapper = _mount({
      template:
        '<el-input-number :model-value="inputText" placeholder="input number"/>',
      setup() {
        const inputText = ref(1)
        return {
          inputText,
        }
      },
    })
    expect(wrapper.find('input').element.value).toEqual('1')
    wrapper.vm.inputText = undefined
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('')
    expect(wrapper.find('input').element.getAttribute('aria-valuenow')).toEqual(
      'NaN'
    )
  })
  test('min', async () => {
    const wrapper = _mount({
      template: '<el-input-number :min="3" v-model="num" />',
      setup() {
        const num = ref(1)
        return {
          num,
        }
      },
    })
    expect(wrapper.find('input').element.value).toEqual('3')
    wrapper.find('.el-input-number__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
  })
  test('max', async () => {
    const wrapper = _mount({
      template: '<el-input-number :max="3" v-model="num" />',
      setup() {
        const num = ref(5)
        return {
          num,
        }
      },
    })
    expect(wrapper.find('input').element.value).toEqual('3')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('3')
  })
  test('step, increase and decrease', async () => {
    document.body.innerHTML = '<div id="app"></div>'
    const wrapper = _mount({
      template: '<el-input-number v-model="num" :step="2"/>',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    wrapper.find('.el-input-number__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('-2')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('2')
  })
  test('step-strictly', async () => {
    const wrapper = _mount({
      template:
        '<el-input-number :step-strictly="true" :step="2" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').setValue(3)
    expect(wrapper.find('input').element.value).toEqual('4')
  })
  test('precision', async () => {
    const wrapper = _mount({
      template: '<el-input-number :precision="2" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').setValue(1.1111111111)
    expect(wrapper.find('input').element.value).toEqual('1.11')
  })
  test('precision accuracy', async () => {
    const wrapper = _mount({
      template: '<el-input-number :precision="2" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').setValue(17.275)
    expect(wrapper.find('input').element.value).toEqual('17.28')
  })
  test('disabled', async () => {
    const wrapper = _mount({
      template: '<el-input-number :disabled="true" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    wrapper.find('.el-input-number__decrease').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.find('input').element.value).toEqual('0')
  })
  test('controls', async () => {
    const wrapper = _mount({
      template: '<el-input-number :controls="false" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    expect(wrapper.find('.el-input-number__increase').exists()).toBe(false)
    expect(wrapper.find('.el-input-number__decrease').exists()).toBe(false)
  })
  test('controls-position', async () => {
    const wrapper = _mount({
      template: '<el-input-number controls-position="right" v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    expect(wrapper.findComponent(ArrowDown).exists()).toBe(true)
    expect(wrapper.findComponent(ArrowUp).exists()).toBe(true)
  })
  test('change-event', async () => {
    const wrapper = _mount({
      template: '<el-input-number v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(1)
    expect(wrapper.getComponent(InputNumber).emitted().change[0]).toEqual([
      1, 0,
    ])
    expect(wrapper.getComponent(InputNumber).emitted('input')).toHaveLength(1)
    expect(
      wrapper.getComponent(InputNumber).emitted('update:modelValue')
    ).toHaveLength(1)
    wrapper.find('.el-input-number__increase').trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.getComponent(InputNumber).emitted('change')).toHaveLength(2)
    expect(wrapper.getComponent(InputNumber).emitted().change[1]).toEqual([
      2, 1,
    ])
    expect(wrapper.getComponent(InputNumber).emitted('input')).toHaveLength(2)
    expect(
      wrapper.getComponent(InputNumber).emitted('update:modelValue')
    ).toHaveLength(2)
  })
  test('blur-event', async () => {
    const wrapper = _mount({
      template: '<el-input-number v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').trigger('blur')
    expect(wrapper.getComponent(InputNumber).emitted('blur')).toHaveLength(1)
  })
  test('focus-event', async () => {
    const wrapper = _mount({
      template: '<el-input-number v-model="num" />',
      setup() {
        const num = ref(0)
        return {
          num,
        }
      },
    })
    await wrapper.find('input').trigger('focus')
    expect(wrapper.getComponent(InputNumber).emitted('focus')).toHaveLength(1)
  })

  test('clear', async () => {
    const wrapper = _mount({
      template: '<el-input-number v-model="num" :min="1"/>',
      setup() {
        const num = ref(2)
        return {
          num,
        }
      },
    })
    const elInput = wrapper.findComponent({ name: 'ElInputNumber' }).vm
    elInput.handleInputChange('')
    await nextTick()
    expect(wrapper.vm.num).toBe(1)
    elInput.increase()
    await nextTick()
    expect(wrapper.vm.num).toBe(2)
    elInput.handleInputChange('')
    await nextTick()
    expect(wrapper.vm.num).toBe(1)
    elInput.decrease()
    await nextTick()
    expect(wrapper.vm.num).toBe(1)
  })

  test('check increase and decrease button when modelValue not in [min, max]', async () => {
    const wrapper = _mount({
      template: `
      <el-input-number
        ref="inputNumber1"
        v-model="num1"
        :min="1"
        :max="10"
      />
      <el-input-number
        ref="inputNumber2"
        v-model="num2"
        :min="1"
        :max="10"
      />`,
      setup() {
        const num1 = ref(-5)
        const num2 = ref(15)
        const inputNumber1 = ref(null)
        const inputNumber2 = ref(null)
        return {
          num1,
          num2,
          inputNumber1,
          inputNumber2,
        }
      },
    })
    const elInputNumber1 = wrapper.vm.inputNumber1
    const elInputNumber2 = wrapper.vm.inputNumber2
    expect(wrapper.vm.num1).toBe(1)
    expect(wrapper.vm.num2).toBe(10)

    elInputNumber1.decrease()
    await nextTick()
    expect(wrapper.vm.num1).toBe(1)
    elInputNumber1.increase()
    await nextTick()
    expect(wrapper.vm.num1).toBe(2)
    elInputNumber1.increase()
    await nextTick()
    expect(wrapper.vm.num1).toBe(3)

    elInputNumber2.increase()
    await nextTick()
    expect(wrapper.vm.num2).toBe(10)
    elInputNumber2.decrease()
    await nextTick()
    expect(wrapper.vm.num2).toBe(9)
    elInputNumber2.decrease()
    await nextTick()
    expect(wrapper.vm.num2).toBe(8)
  })
})
