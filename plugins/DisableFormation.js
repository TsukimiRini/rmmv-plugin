/*:
 * @plugindesc 屏蔽整队功能。
 * @author ailun
 *
 */

Game_System.prototype.initialize = function() {
    //保存启用 = true
    this._saveEnabled = true;
    //菜单启用 = true
    this._menuEnabled = true;
    //遭遇启用 = true
    this._encounterEnabled = false;
    //编队启用 = true
    this._formationEnabled = false;
    //战斗计数 = 0 
    this._battleCount = 0;
    //胜利计数 = 0
    this._winCount = 0;
    //逃跑计数 = 0
    this._escapeCount = 0;
    //保存计数 = 0
    this._saveCount = 0;
    //版本id = 0 
    this._versionId = 0;
    //帧数当保存 = 0
    this._framesOnSave = 0;
    //bgm当保存 = null
    this._bgmOnSave = null;
    //bgs当保存 = null
    this._bgsOnSave = null;
    //窗口色调 = null
    this._windowTone = null;
    //战斗bgm = null
    this._battleBgm = null;
    //胜利me = null
    this._victoryMe = null;
    //失败me = null
    this._defeatMe = null;
    //保存bgm = null
    this._savedBgm = null;
    //行走bgm = null
    this._walkingBgm = null;
};
