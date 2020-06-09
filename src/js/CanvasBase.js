import debounce from 'lodash.debounce'

export default class CanvasBase {
    constructor(width = 600, height = 600) {
        this.width = width
        this.height = height
        this.animationRequest = null
        this.canvas = document.querySelector('#canvas')
        this.canvas.width = width
        this.canvas.height = height
        this.ctx = this.canvas.getContext('2d')

        this.resizeCallbacks = []
        this.attachListeners()
        this.watchPageResize()
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }

    updateFrame(callback) {
        callback()
        this.animationRequest = requestAnimationFrame(() => (this.updateFrame(callback)))
    }

    stopFrameUpdate() {
        if (this.animationRequest) {
            cancelAnimationFrame(this.animationRequest)
        }
    }

    toPolarCoordinates({ x, y }) {
        return {
            x: x + (this.canvas.width / 2),
            y: y + (this.canvas.height / 2)
        }
    }

    watchPageResize() {
        if (window.innerWidth >= 991) {
            this.canvas.width = this.width
            this.canvas.height = this.height
        } else {
            const size = Math.min(window.innerWidth, window.innerHeight) - 60
            this.canvas.width = size
            this.canvas.height = size
        }
        if (this.resizeCallbacks.length > 0) {
            this.resizeCallbacks.forEach(callback => callback())
        }
    }

    attachListeners() {
        window.addEventListener('resize', debounce(this.watchPageResize.bind(this), 160))
    }
}