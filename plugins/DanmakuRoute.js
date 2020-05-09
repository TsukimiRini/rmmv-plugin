/*:
 * @plugindesc 定义弹幕路线、伤害等。
 * @author ailun
 *
 */
Game_Character.prototype.setMoveRoute = function (moveRoute) {
  //移动路线 = 移动路线
  this._moveRoute = moveRoute
  //移动路线索引 = 0
  this._moveRouteIndex = 0
  //强制移动路线 = false
  this._moveRouteForcing = false
  ;(this._originX = this.x), (this._originY = this.y)
  console.log(this._originX, this._originY)
}

Game_Character.prototype.reset = function () {
  this.locate(this._originX, this._originY)
}

// 延迟发射
Game_Character.prototype.deferredIf = function (value) {
  if ($gameVariables.value(2) < value) {
    this._waitCount = value*$gameVariables.value(3);
  }else{
      this._waitCount = 0;
  }
}

// 伤害判定
Game_Interpreter.prototype.damageCheck = function (damage) {
  var chara = this.character(this._params[0])
  if (chara.x == $gamePlayer.x && chara.y == $gamePlayer.y) {
    $gameParty.members()[0].gainHp(-damage)
    var audio = {
      name: 'Blow3',
      pitch: 100,
      volume: 90,
      pan: 0,
    }
    AudioManager.playSe(audio)
    if ($gameParty.members()[0].hp > 0) {
      // 硬直
      this.wait(60)
    }
  }
}
