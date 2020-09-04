class Decoration {
    constructor(ctx, img, posX, posY, w, h) {
        this.ctx = ctx
        this.decoPos = {
            x: posX,
            y: posY
        }
        this.decoImg = undefined
        this.decoSize = {
            w: w,
            h: h,
        }
        this.decoSpeed = this.ctx.speed
        this.retire = 0
        this.initSprite(img)
    }
    initSprite (img) {
        this.decoImg = new Image
        this.decoImg.src = img
    }
    draw() {
        this.ctx.drawImage(this.decoImg, this.decoPos.x, this.decoPos.y,  this.decoSize.w , this.decoSize.h)
        if (this.decoPos < -2 * canvasW)
            this.retire = 1
    }
    move(playerSpeedX) {
        this.decoPos.x -= playerSpeedX
    }
}
