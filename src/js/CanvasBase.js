export default class CanvasBase {
    constructor() {
        this.animationRequest = null
        this.canvas = document.querySelector('#canvas')
        this.canvas.width = 600
        this.canvas.height = 600
        this.ctx = this.canvas.getContext('2d')
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
}