/*:
 * @plugindesc 显示主角状态窗口，包括头像、名字、HP。
 * @author ailun
 *
 */

console.log('==================')

function Window_Status() {
  this.initialize.apply(this, arguments)
}

Window_Status.prototype = Object.create(Window_Base.prototype)
Window_Status.prototype.constructor = Window_Status
Window_Status.prototype.initialize = function () {
    this.gauge_width = 186;
    this.status_width = Window_Base._faceWidth+this.standardPadding()*3+this.gauge_width;
    this.status_height = Window_Base._faceHeight+this.standardPadding()*2;
  Window_Base.prototype.initialize.call(this, 0, 0, this.status_width, this.status_height);
  this.opacity = 160;
  this.contentsOpacity = 0;
  this._showCount = 0
  this.refresh()
}

Window_Status.prototype.update = function () {
  Window_Base.prototype.update.call(this)
  if (this._showCount > 0) {
    this.updateFadeIn()
    this._showCount--
  } else {
    this.updateFadeOut()
  }
}

// 淡入淡出
Window_Status.prototype.updateFadeIn = function () {
  this.contentsOpacity += 16
}
Window_Status.prototype.updateFadeOut = function () {
  this.contentsOpacity -= 16
}

// 显示窗口
Window_Status.prototype.open = function () {
  this.refresh()
  this._showCount = 150
}
// 关闭窗口
Window_Status.prototype.close = function () {
  this._showCount = 0
}

// 载入
Window_Status.prototype.refresh = function () {
  this.contents.clear()
  var width = this.contentsWidth()
  //this.drawBackground(0,0,this.width,this.height);
  this.drawActorName($gameParty.members()[0], Window_Base._faceWidth + this.standardPadding(), this.standardPadding())
  this.drawActorFace(
    $gameParty.members()[0],
    $gameParty.members()[0]._faceIndex,
    0,
    0,
    Window_Base._faceWidth,
    Window_Base._faceHeight
  )
  this.drawActorHp($gameParty.members()[0], Window_Base._faceWidth + this.standardPadding(),
  Window_Base._faceHeight/2,this.gauge_width);
}

Scene_Map.prototype.createAllWindows = function () {
  //创建消息窗口()
  this.createMessageWindow()
  //创建滚动文本窗口()
  this.createScrollTextWindow()

  this.createStatusWindow()
}

Scene_Map.prototype.createStatusWindow = function () {
  this._statusWindow = new Window_Status()
  this.addWindow(this._statusWindow)
}

Scene_Map.prototype.update = function () {
  this.showStatusWindow()
  //更新目的地()
  this.updateDestination()
  //更新主要增加()
  this.updateMainMultiply()
  //如果( 是场景改变确定())
  if (this.isSceneChangeOk()) {
    //更新场景()
    this.updateScene()
    //否则 如果( 场景管理器 是下一个场景(场景战斗))
  } else if (SceneManager.isNextScene(Scene_Battle)) {
    //更新遭遇效果()
    this.updateEncounterEffect()
  }
  //更新等待计数()
  this.updateWaitCount()
  //场景基础 更新 呼叫(this)
  Scene_Base.prototype.update.call(this)
}

Scene_Map.prototype.showStatusWindow = function () {
  if (true) {
    this._statusWindow.open()
  }
}

Window_Status.prototype.drawBackground = function(x, y, width, height) {
    var color1 = this.dimColor1();
    var color2 = this.dimColor2();
    this.contents.gradientFillRect(x, y, width / 2, height, color2, color1);
    this.contents.gradientFillRect(x + width / 2, y, width / 2, height, color1, color2);
};
