<template>
  <v-card class="w-100 rounded-xl" style="height: 400px">
    <div ref="chartRef" style="width: 100%; height: 100%"></div>
  </v-card>
</template>

<script setup name="BarChart">
import { ref, onMounted, watch, computed } from 'vue'
import { useChart } from '@/hooks/useChart'

import { useConfigureStore } from '@/store/configure';

const configureStore = useConfigureStore()

const chartRef = ref(null)
const options = computed(() => ({
  title: {
    text: 'Post Stat',
    padding: [20, 20, 20, 20],
    textStyle: {
      color: theme.value === 'lightTheme' ? '#111927' : '#EDF2F7'
    }
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    bottom: '16',
    textStyle: {
      color: theme.value === 'lightTheme' ? '#111927' : '#EDF2F7'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '16%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          type: 'dashed',
          color: theme.value === 'lightTheme' ? '#111927' : '#EDF2F7'
        }
      },
      data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 0, 0, 0.1)'
        }
      }
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'bar',
      stack: 'Ad',
      barWidth: 32,
      itemStyle: {
        color: 'rgba(41, 112, 255, 0.85)'
      },
      emphasis: {
        disabled: true
      },
      data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'bar',
      stack: 'Ad',
      barWidth: 32,
      emphasis: {
        disabled: true
      },
      itemStyle: {
        color: theme.value === 'lightTheme' ? 'rgba(235, 239, 255, 0.85)' : 'rgba(0, 53, 158, 0.85)',
        borderRadius: [10, 10, 0, 0]
      },
      backgroundStyle: {
        color: "white"
      },
      data: [220, 182, 191, 234, 290, 330, 310, 191, 234, 290, 330, 310]
    }
  ]
}))

const { setOption } = useChart({
  elRef: chartRef,
  autoChartSize: true,
  animation: true
})

const theme = computed(() => configureStore.theme)
watch(theme, () => {
  setOption(options.value)
})

onMounted(() => {
  setOption(options.value)
})
</script>

<style lang="scss" scoped>

</style>
