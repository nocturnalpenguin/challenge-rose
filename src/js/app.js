'use strict'
import CanvasBase from './CanvasBase'

class Rose extends CanvasBase {
    constructor(...props) {
        super(...props)
        this.scale = 1
        this.n = 6
        this.d = 5
        this.k = null
        this.duration = 5 // seconds
        this.vertices = []
        this.minAngle = 0.002
        this.colorOffset = 173

        this.resizeCallbacks = [this.restartAnimation.bind(this)]
    }

    getVertices() {
        this.k = this.n / this.d
        this.vertices = []
        const maxAngle = Math.PI * 2 * this.d

        for (let angle = 0; angle < maxAngle; angle += this.minAngle) {
            const r = this.scale * Math.cos(this.k * angle)
            const vertex = this.toPolarCoordinates({
                x: r * Math.cos(angle),
                y: r * Math.sin(angle)
            })
            this.vertices.push(vertex)
        }
    }

    init() {
        this.attachControls()
        this.startAnimation()
    }

    startAnimation() {
        this.scale = Math.floor(this.canvas.width * 0.4666)
        this.getVertices()
        
        const iterationsPerFrame = Math.floor(this.vertices.length / (this.duration * 60))
        
        this.ctx.lineWidth = 2;
        
        let iteration = 1
        this.updateFrame(() => {
            if (iteration < this.vertices.length) {
                this.ctx.beginPath()
                this.ctx.moveTo(this.vertices[iteration -1].x, this.vertices[iteration -1].y)

                for (let i = 0; i < iterationsPerFrame; i++) {
                    const index = iteration + i
                    if (index < this.vertices.length) {
                        this.ctx.lineTo(this.vertices[index].x, this.vertices[index].y)
                        // color
                        const dx = Math.pow(((this.canvas.width / 2) - this.vertices[index].x), 2)
                        const dy = Math.pow(((this.canvas.height / 2) - this.vertices[index].y), 2)
                        const distanceFromCenter = Math.sqrt(dx + dy) + this.colorOffset
                        this.ctx.strokeStyle = `hsl(${360 - (distanceFromCenter % 361)}, 85%, 60%)`
                    }
                }

                this.ctx.stroke()

                iteration += iterationsPerFrame
            } else {
                this.stopFrameUpdate()
            }
        })
    }

    restartAnimation() {
        this.stopFrameUpdate()
        this.clearCanvas()
        this.startAnimation()
    }

    attachControls() {
        const numeratorInput = document.querySelector('#controls input[name="numerator"]')
        const denominatorInput = document.querySelector('#controls input[name="denominator"]')
        const colorOffsetInput = document.querySelector('#controls input[name="color_offset"]')
        const durationInput = document.querySelector('#controls input[name="duration"]')

        numeratorInput.addEventListener('input', this.updateInputValueLabel)
        denominatorInput.addEventListener('input', this.updateInputValueLabel)
        colorOffsetInput.addEventListener('input', this.updateInputValueLabel)
        durationInput.addEventListener('input', this.updateInputValueLabel)

        numeratorInput.addEventListener('change', (e) => this.controlListener(e, 'n'))
        denominatorInput.addEventListener('change', (e) => this.controlListener(e, 'd'))
        colorOffsetInput.addEventListener('change', (e) => this.controlListener(e, 'colorOffset'))
        durationInput.addEventListener('change', (e) => this.controlListener(e, 'duration'))
    }

    controlListener(e, property) {
        this[property] = Number(e.target.value)
        this.restartAnimation()
    }

    updateInputValueLabel(e) {
        e.target.parentElement.parentElement.querySelector('td small').innerText = e.target.value
    }
}

// initialize
const rose = new Rose()
rose.init()