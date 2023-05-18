import { nextTick, onMounted, onUnmounted, unref } from 'vue'
import { CanvasRenderer } from 'echarts/renderers'

import echarts from '@/plugins/echarts'

export function useChart({ elRef, autoChartSize = false, animation = false }) {
  // set render mode
  echarts.use(CanvasRenderer)

  // echarts instance
  let chartInstance = null

  // init chart
  const initChart = () => {
    const el = unref(elRef)
    if (!el || !unref(el)) return

    chartInstance = echarts.init(el)
  }

  const setOption = (option) => {
    nextTick(() => {
      if (!chartInstance) {
        initChart()
        if (!chartInstance) return
      }

      chartInstance.setOption(option)
      hideLoading()
    })
  }

  // get echarts instance
  function getInstance() {
    if (!chartInstance) initChart()

    return chartInstance
  }

  function resize() {
    chartInstance?.resize()
  }

  // watch el size
  function watchEl() {
    if (animation) {
      elRef.value.style.transition = 'width 1s, height 1s'
    }
    const resizeObserver = new ResizeObserver(() => resize())
    resizeObserver.observe(elRef.value)
  }

  // show loading
  function showLoading() {
    if (!chartInstance) {
      initChart()
    }
    chartInstance?.showLoading()
  }

  // hide loading
  function hideLoading() {
    if (!chartInstance) {
      initChart()
    }
    chartInstance?.hideLoading()
  }

  onMounted(() => {
    window.addEventListener('resize', resize)
    if (autoChartSize) watchEl()
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resize)
  })

  return {
    setOption,
    getInstance,
    showLoading,
    hideLoading
  }
}
