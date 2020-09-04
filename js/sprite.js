class Sprite {
    constructor(ctx, img, posX, posY, w, h) {
        this.ctx = ctx
        this.spritePos = {
            x: posX,
            y: posY
        }
        this.spriteImg = undefined
        this.spriteSize = {
            w: w,
            h: h,
        }
        this.spriteSpeed = this.ctx.speed
        this.retire = 0
        this.initSprite(img)
    }
    initSprite (img) {
        this.spriteImg = new Image
        this.spriteImg.src = img
    }
    draw() {
        this.ctx.drawImage(this.spriteImg, this.spritePos.x, this.spritePos.y,  this.spriteSize.w , this.spriteSize.h)
    }
    move(playerSpeedX) {
        this.spritePos.x -= playerSpeedX
    }
}