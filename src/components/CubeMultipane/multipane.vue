<!--
 * @Author: shiliangL
 * @Date: 2020-06-05 17:09:43
 * @LastEditTime: 2020-06-06 15:29:47
 * @LastEditors: Do not edit
 * @Description:
 * @FilePath: /vue-screen/src/components/CubeMultipane/multipane.vue
-->
<template>
  <div
    :class="classnames"
    :style="{ cursor, userSelect }"
    @mousedown="onMouseDown"
  >
    <slot></slot>
  </div>
</template>

<script>

const LAYOUT_HORIZONTAL = 'horizontal'
const LAYOUT_VERTICAL = 'vertical'

export default {
  name: 'multipane',
  props: {
    layout: {
      type: String,
      default: LAYOUT_VERTICAL
    }
  },
  data () {
    return {
      isResizing: false
    }
  },
  computed: {
    classnames () {
      return [
        'multipane',
        'layout-' + this.layout.slice(0, 1),
        this.isResizing ? 'is-resizing' : ''
      ]
    },
    cursor () {
      return this.isResizing
        ? this.layout === LAYOUT_VERTICAL ? 'col-resize' : 'row-resize'
        : ''
    },
    userSelect () {
      return this.isResizing ? 'none' : ''
    }
  },

  methods: {
    onMouseDown ({ target: resizer, pageX: initialPageX, pageY: initialPageY }) {
      if (resizer.className && resizer.className.match('multipane-resizer')) {
        const self = this
        const { $el: container, layout } = self

        const pane = resizer.previousElementSibling
        const {
          offsetWidth: initialPaneWidth,
          offsetHeight: initialPaneHeight
        } = pane

        const usePercentage = !!(pane.style.width + '').match('%')

        const { addEventListener, removeEventListener } = window

        const resize = (initialSize, offset = 0) => {
          if (layout === LAYOUT_VERTICAL) {
            const containerWidth = container.clientWidth
            const paneWidth = initialSize + offset

            return (pane.style.width = usePercentage
              ? paneWidth / containerWidth * 100 + '%'
              : paneWidth + 'px')
          }

          if (layout === LAYOUT_HORIZONTAL) {
            const containerHeight = container.clientHeight
            const paneHeight = initialSize + offset

            return (pane.style.height = usePercentage
              ? paneHeight / containerHeight * 100 + '%'
              : paneHeight + 'px')
          }
        }

        // This adds is-resizing class to container
        self.isResizing = true

        // Resize once to get current computed size
        let size = resize()

        // Trigger paneResizeStart event
        self.$emit('paneResizeStart', pane, resizer, size)

        const onMouseMove = function ({ pageX, pageY }) {
          size =
            layout === LAYOUT_VERTICAL
              ? resize(initialPaneWidth, pageX - initialPageX)
              : resize(initialPaneHeight, pageY - initialPageY)

          self.$emit('paneResize', pane, resizer, size)
        }

        const onMouseUp = function () {
          // Run resize one more time to set computed width/height.
          size =
            layout === LAYOUT_VERTICAL
              ? resize(pane.clientWidth)
              : resize(pane.clientHeight)

          // This removes is-resizing class to container
          self.isResizing = false

          removeEventListener('mousemove', onMouseMove)
          removeEventListener('mouseup', onMouseUp)

          self.$emit('paneResizeStop', pane, resizer, size)
        }

        addEventListener('mousemove', onMouseMove)
        addEventListener('mouseup', onMouseUp)
      }
    }
  }
}
</script>

<style lang="scss">
.multipane {
  display: flex;
  &.layout-h {
    flex-direction: column;
  }
  &.layout-v {
    flex-direction: row;
  }
}
.multipane > div {
  position: relative;
  z-index: 1;
}
.multipane-resizer {
  display: block;
  position: relative;
  z-index: 2;
}
.layout-h > .multipane-resizer {
  width: 100%;
  height: 10px;
  margin-top: -10px;
  top: 5px;
  cursor: row-resize;
}
.layout-v > .multipane-resizer {
  width: 10px;
  height: 100%;
  margin-left: -10px;
  left: 5px;
  cursor: col-resize;
}
</style>
