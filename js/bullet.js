class Bullet extends Sprite {
    isBullet = 1
    dirBullet = 0
    fromEnemy = 0
    draw() {
        if (this.dirBullet > 0) {
            this.ctx.drawImage(this.spriteImg, this.spritePos.x, this.spritePos.y,  this.spriteSize.w , this.spriteSize.h)
        }
        else {
            this.ctx.drawImage(this.spriteImg, this.spritePos.x, this.spritePos.y,  this.spriteSize.w , this.spriteSize.h)
        }
    }
    moveBullet(playerSpeedX) {
        if(this.dirBullet === 1)
            this.spritePos.x += 6 - playerSpeedX
        else
            this.spritePos.x -= 6 + playerSpeedX
    }

}