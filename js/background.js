
class Background {
    constructor(ctx, img) {
        this.ctx = ctx
        this.src = img
        this.bgPos = {
            x: -400,
            y: 0
        }
        this.bgImg = undefined
        this.bgSize = {
            w: 1490,
            h: 600,
        }
        this.initbg(img)
    }
    initbg(img){
        this.bgImg = new Image
        this.bgImg.src = img
    }
    draw(mapx) {
        this.bgPos.x = mapx % 1490
        this.ctx.drawImage(this.bgImg, -(this.bgPos.x), this.bgPos.y,  this.bgSize.w , this.bgSize.h)
        this.ctx.drawImage(this.bgImg, -(this.bgPos.x) + 1490, this.bgPos.y,  this.bgSize.w , this.bgSize.h)
    }
}