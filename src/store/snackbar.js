import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    content: '',
    color: '',
    visible: false,
    showClose: true,
    timeout: 2500
  }),
  actions: {
    async open(options) {
      // open
      this.visible = true
      this.content = options.content
      this.color = options.color

      // close
      await this.close(true)
    },
    close(isDelay) {
      // 打开后延迟自动关闭
      if (isDelay) {
        return new Promise((resolve) => {
          setTimeout(() => {
            this.visible = false
            resolve()
          }, this.timeout)
        })
      } else {
        // 手动关闭
        this.visible = false
      }
    },
    setShowClose(isShow) {
      this.showClose = isShow
    },
    setTimeout(timeout) {
      this.timeout = timeout
    }
  }
})
