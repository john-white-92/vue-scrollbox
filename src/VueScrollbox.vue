<script>
export default {
  name: 'vue-scrollbox',
  render (h) {
    const canvas = h('div', {
      class: 'scroll-box__canvas',
      style: {
        width: this.width != null ? `${this.width}px` : null,
        height: this.height != null ? `${this.height}px` : null
      }
    }, this.$slots.default)
    const viewport = h('div', {
      class: 'scroll-box__viewport',
      on: {
        scroll: this.onScroll
      }
    }, [ canvas ])
    return h('div', { class: 'scroll-box' }, [ viewport ])
  },
  props: {
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  data () {
    return {
      viewport: {
        width: 0,
        height: 0
      },
      canvas: {
        left: 0,
        top: 0,
        width: 0,
        height: 0
      },
      clock: { // тактовый генератор
        timer: null,
        DELAY: 200
      },
      events: {
        SCROLL: 'scroll',
        RESIZE: 'resize'
      }
    }
  },
  mounted () {
    this.onTick()
  },
  beforeDestroy () {
    this.clearTimer()
  },
  methods: {
    // -----------------------------------------------------------------------------
    // Генерация событий
    // Скролл
    scroll () {
      const offset = {
        left: this.canvas.left,
        top: this.canvas.top
      }
      this.$emit(this.events.SCROLL, offset)
    },
    // Изменение размеров
    resize () {
      const viewport = {
        width: this.viewport.width,
        height: this.viewport.height
      }
      const canvas = {
        width: this.canvas.width,
        height: this.canvas.height
      }
      this.$emit(this.events.RESIZE, viewport, canvas)
    },

    // -----------------------------------------------------------------------------
    // Обработчики
    // Стандартный скролл
    onScroll (event) {
      const left = this.canvas.left
      const top = this.canvas.top
      this.canvas.left = this.$el.children[0].scrollLeft
      this.canvas.top = this.$el.children[0].scrollTop
      const hasChanged = this.canvas.left !== left || this.canvas.top !== top
      if (hasChanged) {
        this.scroll()
      }
    },
    // Такт
    onTick () {
      this.updateSize()
      this.clearTimer()
      this.clock.timer = setTimeout(_ => { this.onTick() }, this.clock.DELAY)
    },
    // Очистка таймера
    clearTimer () {
      clearTimeout(this.clock.timer)
    },

    // -----------------------------------------------------------------------------
    // Функции
    // Обновление размеров viewport/canvas
    updateSize () {
      const hasViewportChanged = this.updateViewport()
      const hasCanvasChanged = this.updateCanvas()
      if (hasViewportChanged || hasCanvasChanged) {
        this.resize()
      }
    },
    // Обновление размеров viewport
    updateViewport () {
      const el = this.$el.children[0]
      const width = el.offsetWidth
      const height = el.offsetHeight
      const hasChanged = this.viewport.width !== width || this.viewport.height !== height
      this.viewport.width = width
      this.viewport.height = height
      return hasChanged
    },
    // Обновление размеров canvas
    updateCanvas () {
      const el = this.$el.children[0].children[0]
      const width = el.offsetWidth
      const height = el.offsetHeight
      const hasChanged = this.canvas.width !== width || this.canvas.height !== height
      this.canvas.width = width
      this.canvas.height = height
      return hasChanged
    }
  }
}
</script>

<style lang="scss" scoped>
%fix {
  box-sizing: border-box;
  min-width: 0;
  min-height: 0;
  margin: 0;
  padding: 0;
}
.scroll-box {
  @extend %fix;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0px;
}
.scroll-box__viewport {
  @extend %fix;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0px;
  overflow-x: hidden;
  overflow-y: auto;
}
.scroll-box__canvas {
  @extend %fix;
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 auto;
}
.scroll-box[mode="horizontal"] {
  & > .scroll-box__viewport {
    flex-flow: row nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    & > .scroll-box__canvas {
      flex-flow: row nowrap;
    }
  }
}
.scroll-box[mode="vertical"] {
  & > .scroll-box__viewport {
    overflow-x: hidden;
    overflow-y: auto;
    & > .scroll-box__canvas {
      flex-flow: column nowrap;
    }
  }
}
.scroll-box[mode="auto"] {
  & > .scroll-box__viewport {
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: auto;
    & > .scroll-box__canvas {
      flex-flow: column nowrap;
    }
  }
}
</style>
