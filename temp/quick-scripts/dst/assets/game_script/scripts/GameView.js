
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game_script/scripts/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87d1fl4ZM9PSosgkzrgivNc', 'GameView');
// game_script/scripts/GameView.js

"use strict";

var o;

var $collider = require("./Collider");

var $assetsLoader = require("./AssetsLoader");

var $assetsMap = require("./AssetsMap");

var $resManager = require("./ResManager");

var $resUtil = require("./ResUtil");

var $eventManager = require("./EventManager");

var $componentProxy = require("./ComponentProxy");

var $popupManager = require("./PopupManager");

var $uIView = require("./UIView");

var $guide = require("./Guide");

var $audioPlayer = require("./AudioPlayer");

var $remoteAudio = require("./RemoteAudio");

var $gamePool = require("./GamePool");

var $seedUtil = require("./SeedUtil");

var $util = require("./Util");

var $configContext = require("./ConfigContext");

var $equipmentContext = require("./EquipmentContext");

var $globalParam = require("./GlobalParam");

var $localEventName = require("./LocalEventName");

var $taskContext = require("./TaskContext");

var $userDataContext = require("./UserDataContext");

var $gameContext = require("./GameContext");

var $gameGemInfo = require("./GameGemInfo");

var $baseEnemy = require("./BaseEnemy");

var $eggEnemy_1 = require("./EggEnemy_1");

var O = cc._decorator;
var L = O.ccclass;
var E = O.property;
var M = (new cc.Vec3(), function (t) {
  function e() {
    var e = null !== t && t.apply(this, arguments) || this;
    e.floorLayer = null;
    e.enemyLayer = null;
    e.enemy2Layer = null;
    e.buttleLayer = null;
    e.lowBulletLayer = null;
    e.enemyDebuffLayer = null;
    e.atkLayer = null;
    e.door = null;
    e.btnPause = null;
    e.time = null;
    e.btnGameRatio = null;
    e.eggLayer = null;
    e.enemyBulletLayer = null;
    e.robotFlyLayer = null;
    e.currTime = 0;
    e.currIndex = 0;
    e.isCheckEnd = !1;
    e.checkTime = 0;
    e.guideStep = 0;
    e.isRepeat = !1;
    e.isEnd = !1;
    return e;
  }

  __extends(e, t);

  e.prototype.onLoad = function () {
    var t = this;
    $gameContext["default"].ins.clear();
    $globalParam["default"].isGamePuase = !0;
    $gameContext["default"].ins.atkLayer = this.atkLayer;
    $gameContext["default"].ins.enemyBulletLayer = this.enemyBulletLayer;
    $gameContext["default"].ins.lowBulletLayer = this.lowBulletLayer;
    $gameContext["default"].ins.robotFlyLayer = this.robotFlyLayer;
    $gameContext["default"].ins.init(this.enemyLayer, this.enemy2Layer, this.buttleLayer, this.floorLayer, this.enemyDebuffLayer);

    if (2 === $gameContext["default"].ins.currLevelInfoConfig.id && $userDataContext["default"].Ins.getEgg(1) < 1) {
      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Game, ["/prefabs/egg/prop_1"], cc.Prefab, null, function (e, i) {
        var o = i[0];

        if (sp && cc.isValid(o)) {
          var n = $resUtil.ResUtil.instantiate(o, t.node);
          n.parent = t.eggLayer;
          n.position = cc.v3(-225, 180);
        }
      });
    }

    if (6 === $gameContext["default"].ins.currLevelInfoConfig.id) {
      $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Game, ["/textures/bj2"], cc.SpriteFrame, null, function (e, i) {
        var o = i[0];

        if (o && cc.isValid(o)) {
          t.node.children[0].getComponent(cc.Sprite).spriteFrame = $resUtil.ResUtil.assignWith(o, t.node);
        }
      });
    }

    this.renderSpeedBtn();
  };

  e.prototype.clickGuid = function () {
    var t = this.node.getChildByName("guide");
    0 === this.guideStep ? (this.guideStep = 1, $guide["default"].self.startGuideMask(t, 1)) : (this.guideStep = 2, $guide["default"].self.stopGuide(), $globalParam["default"].isGamePuase = !1, t.destroy());
  };

  e.prototype.onResetView = function () {
    var t = this;
    var e = this.node.getChildByName("guide");

    if (e && !$userDataContext["default"].Ins.isEndGuide) {
      $guide["default"].self.startGuideMask(e, 0);
    }

    if (!$userDataContext["default"].Ins.isEndGuide) {
      $globalParam["default"].isGamePuase = !0;
    }

    this.scheduleOnce(function () {
      if ($userDataContext["default"].Ins.isEndGuide) {
        $globalParam["default"].isGamePuase = !1;
      }

      t.door.active = !0;
    });

    if ($gameGemInfo.GameGemInfo.ins.hasGem($gameGemInfo.GemType.StartChooseSKill)) {
      this.scheduleOnce(function () {
        var e = $gameContext["default"].ins.createNextSkills();

        if (e.length > 0) {
          $globalParam["default"].isGamePuase = !0;
          $remoteAudio["default"].instance.pauseAllEffectMusic();
          $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.ChooseSkillView, {
            ids: e,
            rootNode: t.node
          }, {
            closeCallback: function closeCallback() {
              $globalParam["default"].isGamePuase = !1;
              $remoteAudio["default"].instance.resumeAllEffectMusic();
            }
          });
        }
      }, 0.1);
    }
  };

  e.prototype.addEvent = function () {
    $eventManager["default"].on($localEventName["default"].ADD_EXP, this.addExp, this);
    $eventManager["default"].on($localEventName["default"].CHOOSE_SKILL, this.chooseSkill, this);
    $eventManager["default"].on($localEventName["default"].HURT_ANIM, this.atkAnim, this);
    $eventManager["default"].on($localEventName["default"].CREATE_ENEMY, this.createEnemyInfo, this);
    $eventManager["default"].on($localEventName["default"].ENEMY_DIE, this.enemyDie, this);
    $eventManager["default"].on($localEventName["default"].GAME_FAIL, this.fail, this);
    this.btnPause.on("click", this.clickPause, this);
    this.btnGameRatio.on("click", this.clickGameRatio, this);
    var t = this.node.getChildByName("guide");
    $userDataContext["default"].Ins.isEndGuide ? t.destroy() : t.on("click", this.clickGuid, this);
  };

  e.prototype.removeEvent = function () {
    $eventManager["default"].off($localEventName["default"].ADD_EXP, this.addExp, this);
    $eventManager["default"].off($localEventName["default"].CHOOSE_SKILL, this.chooseSkill, this);
    $eventManager["default"].off($localEventName["default"].HURT_ANIM, this.atkAnim, this);
    $eventManager["default"].off($localEventName["default"].CREATE_ENEMY, this.createEnemyInfo, this);
    $eventManager["default"].off($localEventName["default"].ENEMY_DIE, this.enemyDie, this);
    $eventManager["default"].off($localEventName["default"].GAME_FAIL, this.fail, this);
    this.btnPause.off("click", this.clickPause, this);
    this.btnGameRatio.off("click", this.clickGameRatio, this);
  };

  e.prototype.addToScreen = function () {
    $remoteAudio["default"].instance.playBGM(!1, "BGM2");
  };

  e.prototype.removeToScreen = function () {
    $remoteAudio["default"].instance.clearLoopEffect();
    $audioPlayer["default"].stopAllEffect();
    $taskContext["default"].Ins.setTaskRecord(1, $gameContext["default"].ins.killEnemyCount);
    $componentProxy["default"].Ins.clear();
    $gamePool["default"].instance.clearAll();
    $resManager.ResManager.instance.releaseBundle($assetsMap.BundleNames.Game);
    $resManager.ResManager.instance.releaseBundle($assetsMap.BundleNames.Enemy);
    $gameContext["default"].ins.clear();
    $equipmentContext["default"].Ins.refreshGameGem();
  };

  e.prototype.startCheckEnd = function (t) {
    if (void 0 === t) {
      t = !0;
    }

    t ? this.currIndex < $gameContext["default"].ins.currLevelConfig.length - 1 || 0 !== this.layerCount() || 0 !== this.enemy2Layer.children.length || (this.isCheckEnd = !0, this.checkTime = $gameContext["default"].ins.gameStartTime) : this.isCheckEnd = !1;
  };

  e.prototype.clickGameRatio = function () {
    var t = this;
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $globalParam["default"].isGamePuase = !0;
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.GameSpeedView, null, {
      closeCallback: function closeCallback() {
        $globalParam["default"].isGamePuase = !1;
        t.renderSpeedBtn();
      }
    });
  };

  e.prototype.enemyDie = function (t) {
    var e = this;
    var i = $gamePool["default"].instance.get($gamePool.PoolKey.DIE);
    i ? this.createDieAnim(i, t) : $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Game, ["/prefabs/debuff/Die"], cc.Prefab, null, function (o, n) {
      var s = n[0];

      if (sp && cc.isValid(s)) {
        i = $resUtil.ResUtil.instantiate(s, e.node);
        e.createDieAnim(i, t);
      }
    });
  };

  e.prototype.createDieAnim = function (t, e) {
    var i = this;
    $gameContext["default"].ins.killEnemyCount++;
    t.parent = this.floorLayer;
    t.position = e;
    var o = t.getComponent(cc.Animation);
    o.play("die");
    o.once(cc.Animation.EventType.FINISHED, function () {
      $gamePool["default"].instance.put($gamePool.PoolKey.DIE, t);
      i.startCheckEnd();
    }, this);
  };

  e.prototype.chooseSkill = function (t) {
    $gameContext["default"].ins.chooseSkill(t);
    $gameContext["default"].ins.chooseBuff();
  };

  e.prototype.addExp = function (t) {
    if ($gameContext["default"].ins.addExp(t)) {
      var e = $gameContext["default"].ins.createNextSkills();

      if (e.length > 0) {
        $remoteAudio["default"].instance.pauseAllEffectMusic();
        $globalParam["default"].isGamePuase = !0;
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.ChooseSkillView, {
          ids: e,
          rootNode: this.node
        }, {
          closeCallback: function closeCallback() {
            $remoteAudio["default"].instance.resumeAllEffectMusic();
            $globalParam["default"].isGamePuase = !1;
          }
        });
      }
    }
  };

  e.prototype.atkAnim = function (t, e, i, o) {
    var n = this;

    if (void 0 === i) {
      i = 0;
    }

    if (void 0 === o) {
      o = 0;
    }

    var s = $gamePool["default"].instance.get($gamePool.PoolKey.HURT);
    s ? this.createAtkAnim(s, t, e, i, o) : $assetsLoader["default"].instance.loadRes($assetsMap.BundleNames.Game, ["/prefabs/debuff/Hurt"], cc.Prefab, null, function (r, a) {
      var l = a[0];

      if (sp && cc.isValid(l)) {
        s = $resUtil.ResUtil.instantiate(l, n.node);
        n.createAtkAnim(s, t, e, i, o);
      }
    });
  };

  e.prototype.createAtkAnim = function (t, e, i, o, n) {
    if (void 0 === o) {
      o = 0;
    }

    if (void 0 === n) {
      n = 0;
    }

    var s = t.getComponent(cc.Label);
    s.string = -1 === i ? "免疫" : 0 === i ? "免伤" : 2 === o && i > 0 ? "+" + i : i.toString();
    s.fontSize = $gameContext["default"].ins.atkSize[n];
    t.color = $gameContext["default"].ins.atkColor[o];
    e.x += $seedUtil["default"].randomFrom(-30, 30);
    t.position = e.clone();
    t.scale = 1.2;
    t.parent = this.atkLayer;
    s.node.opacity = 1;
    s.node.opacity = 255;
    var r = e.add(cc.v3($seedUtil["default"].randomFrom(-50, 50), 50));
    cc.tween(t).to(0.15 / $gameContext["default"].ins.gameRatio, {
      scale: 1
    }).to(0.5 / $gameContext["default"].ins.gameRatio, {
      position: r
    }).call(function () {
      s.node.opacity = 0;
      $gamePool["default"].instance.put($gamePool.PoolKey.HURT, t);
    }).start();
  };

  e.prototype.update = function (t) {
    if (!$globalParam["default"].isGamePuase) {
      this.runGameLoop(t);
      1.5 === $gameContext["default"].ins.gameRatio ? this.isRepeat ? this.isRepeat = !1 : (this.runGameLoop(t), this.isRepeat = !0) : 2 === $gameContext["default"].ins.gameRatio ? this.runGameLoop(t) : 4 === $gameContext["default"].ins.gameRatio && (this.runGameLoop(t), this.runGameLoop(t), this.runGameLoop(t));
      this.bossTip();
    }
  };

  e.prototype.runGameLoop = function (t) {
    $componentProxy["default"].Ins.gameLoop(t);
    $collider.cCollider.inst.update(t);
    this.currTime += t;
    this.createEnemy();
    this.renderGameTime(t);

    if (!this.isEnd && this.isCheckEnd && $gameContext["default"].ins.gameStartTime - this.checkTime > 3 && 0 === this.layerCount() && 0 === this.enemy2Layer.children.length) {
      this.isEnd = !0;
      $globalParam["default"].isGamePuase = !0;
      $remoteAudio["default"].instance.stopAllEffectMusic();
      $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.SettleView, {
        isSuccess: !0
      });
    }
  };

  e.prototype.layerCount = function () {
    var t = this.enemyLayer.children.length;

    if (1 === t && "EggEnemy_1" === this.enemyLayer.children[0].name && this.enemyLayer.children[0].getComponent($eggEnemy_1["default"]).currType < 2) {
      t = 0;
    }

    return t;
  };

  e.prototype.bossTip = function () {
    for (var t = 0; t < $gameContext["default"].ins.warnTimes.length; t++) {
      if ($gameContext["default"].ins.warnIndex < t && $gameContext["default"].ins.gameStartTime >= $gameContext["default"].ins.warnTimes[t]) {
        $gameContext["default"].ins.warnIndex = t;
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.BossWarnView, {
          isBoss: $gameContext["default"].ins.isBoss[t]
        });
      }
    }
  };

  e.prototype.fail = function () {
    if (!this.isEnd) {
      this.isEnd = !0;
      $globalParam["default"].isGamePuase = !0;
      this.scheduleOnce(function () {
        $remoteAudio["default"].instance.stopAllEffectMusic();
        $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.SettleView, {
          isSuccess: !1
        });
      }, 3);
    }
  };

  e.prototype.renderGameTime = function (t) {
    var e = $gameContext["default"].ins.getGameTime(t);

    if ("" !== e) {
      this.time.string = e;
    }
  };

  e.prototype.createEnemy = function () {
    if (!(this.enemyLayer.children.length + this.enemy2Layer.children.length >= 150 || this.currIndex >= $gameContext["default"].ins.currLevelConfig.length)) {
      var t = $gameContext["default"].ins.currLevelConfig[this.currIndex];

      if (!(t.time > this.currTime)) {
        this.createEnemyInfo(t.id, cc.v3(t.posX, 720), t.Avoid_injury, t.lot);
        this.currIndex++;
        $gameContext["default"].ins.createEnemyProccess = this.currIndex / $gameContext["default"].ins.currLevelConfig.length;
      }
    }
  };

  e.prototype.createEnemyInfo = function (t, e, i, o) {
    var n = $gameContext["default"].ins.getEnemyPool(t);

    if (!n) {
      var s = $assetsLoader["default"].instance.getRes($assetsMap.BundleNames.Enemy, "/prefabs/Enemy_" + t);
      n = cc.instantiate(s).getComponent($baseEnemy["default"]);
    }

    this.startCheckEnd(!1);
    var r = $configContext["default"].instance.getEnemyConfig(t);

    if (3 === r.monster_type) {
      e.x = 0;
    }

    n.setPosition(e);
    n.initEnemy(r, i, o);
    $gameContext["default"].ins.addCurrEnemy(n);
    9 === t || 10 === t ? n.insert(this.enemy2Layer) : n.insert(this.enemyLayer);
  };

  e.prototype.clickPause = function () {
    $remoteAudio["default"].instance.playEffectMusic("Click");
    $globalParam["default"].isGamePuase = !0;
    $remoteAudio["default"].instance.pauseAllEffectMusic();
    $popupManager.PopupManager.instance.open($assetsMap.AssetsMap.PopUpBundles.prefabs.assetsList.PauseView, null, {
      closeCallback: function closeCallback() {
        $remoteAudio["default"].instance.resumeAllEffectMusic();
        $globalParam["default"].isGamePuase = !1;
      }
    });
  };

  e.prototype.renderSpeedBtn = function () {
    1 === $gameContext["default"].ins.gameRatio ? $util["default"].updateMaterialState(this.btnGameRatio, !0) : ($util["default"].updateMaterialState(this.btnGameRatio, !1), this.btnGameRatio.children[0].getComponent(cc.Label).string = "X" + $gameContext["default"].ins.gameRatio);
  };

  __decorate([E(cc.Node)], e.prototype, "floorLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "enemyLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "enemy2Layer", void 0);

  __decorate([E(cc.Node)], e.prototype, "buttleLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "lowBulletLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "enemyDebuffLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "atkLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "door", void 0);

  __decorate([E(cc.Node)], e.prototype, "btnPause", void 0);

  __decorate([E(cc.Label)], e.prototype, "time", void 0);

  __decorate([E(cc.Node)], e.prototype, "btnGameRatio", void 0);

  __decorate([E(cc.Node)], e.prototype, "eggLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "enemyBulletLayer", void 0);

  __decorate([E(cc.Node)], e.prototype, "robotFlyLayer", void 0);

  return __decorate([L], e);
}($uIView.UIView));
exports["default"] = M;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZV9zY3JpcHRcXHNjcmlwdHNcXEdhbWVWaWV3LmpzIl0sIm5hbWVzIjpbIm8iLCIkY29sbGlkZXIiLCJyZXF1aXJlIiwiJGFzc2V0c0xvYWRlciIsIiRhc3NldHNNYXAiLCIkcmVzTWFuYWdlciIsIiRyZXNVdGlsIiwiJGV2ZW50TWFuYWdlciIsIiRjb21wb25lbnRQcm94eSIsIiRwb3B1cE1hbmFnZXIiLCIkdUlWaWV3IiwiJGd1aWRlIiwiJGF1ZGlvUGxheWVyIiwiJHJlbW90ZUF1ZGlvIiwiJGdhbWVQb29sIiwiJHNlZWRVdGlsIiwiJHV0aWwiLCIkY29uZmlnQ29udGV4dCIsIiRlcXVpcG1lbnRDb250ZXh0IiwiJGdsb2JhbFBhcmFtIiwiJGxvY2FsRXZlbnROYW1lIiwiJHRhc2tDb250ZXh0IiwiJHVzZXJEYXRhQ29udGV4dCIsIiRnYW1lQ29udGV4dCIsIiRnYW1lR2VtSW5mbyIsIiRiYXNlRW5lbXkiLCIkZWdnRW5lbXlfMSIsIk8iLCJjYyIsIl9kZWNvcmF0b3IiLCJMIiwiY2NjbGFzcyIsIkUiLCJwcm9wZXJ0eSIsIk0iLCJWZWMzIiwidCIsImUiLCJhcHBseSIsImFyZ3VtZW50cyIsImZsb29yTGF5ZXIiLCJlbmVteUxheWVyIiwiZW5lbXkyTGF5ZXIiLCJidXR0bGVMYXllciIsImxvd0J1bGxldExheWVyIiwiZW5lbXlEZWJ1ZmZMYXllciIsImF0a0xheWVyIiwiZG9vciIsImJ0blBhdXNlIiwidGltZSIsImJ0bkdhbWVSYXRpbyIsImVnZ0xheWVyIiwiZW5lbXlCdWxsZXRMYXllciIsInJvYm90Rmx5TGF5ZXIiLCJjdXJyVGltZSIsImN1cnJJbmRleCIsImlzQ2hlY2tFbmQiLCJjaGVja1RpbWUiLCJndWlkZVN0ZXAiLCJpc1JlcGVhdCIsImlzRW5kIiwiX19leHRlbmRzIiwicHJvdG90eXBlIiwib25Mb2FkIiwiaW5zIiwiY2xlYXIiLCJpc0dhbWVQdWFzZSIsImluaXQiLCJjdXJyTGV2ZWxJbmZvQ29uZmlnIiwiaWQiLCJJbnMiLCJnZXRFZ2ciLCJpbnN0YW5jZSIsImxvYWRSZXMiLCJCdW5kbGVOYW1lcyIsIkdhbWUiLCJQcmVmYWIiLCJpIiwic3AiLCJpc1ZhbGlkIiwibiIsIlJlc1V0aWwiLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJwYXJlbnQiLCJwb3NpdGlvbiIsInYzIiwiU3ByaXRlRnJhbWUiLCJjaGlsZHJlbiIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiYXNzaWduV2l0aCIsInJlbmRlclNwZWVkQnRuIiwiY2xpY2tHdWlkIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzZWxmIiwic3RhcnRHdWlkZU1hc2siLCJzdG9wR3VpZGUiLCJkZXN0cm95Iiwib25SZXNldFZpZXciLCJpc0VuZEd1aWRlIiwic2NoZWR1bGVPbmNlIiwiYWN0aXZlIiwiR2FtZUdlbUluZm8iLCJoYXNHZW0iLCJHZW1UeXBlIiwiU3RhcnRDaG9vc2VTS2lsbCIsImNyZWF0ZU5leHRTa2lsbHMiLCJsZW5ndGgiLCJwYXVzZUFsbEVmZmVjdE11c2ljIiwiUG9wdXBNYW5hZ2VyIiwib3BlbiIsIkFzc2V0c01hcCIsIlBvcFVwQnVuZGxlcyIsInByZWZhYnMiLCJhc3NldHNMaXN0IiwiQ2hvb3NlU2tpbGxWaWV3IiwiaWRzIiwicm9vdE5vZGUiLCJjbG9zZUNhbGxiYWNrIiwicmVzdW1lQWxsRWZmZWN0TXVzaWMiLCJhZGRFdmVudCIsIm9uIiwiQUREX0VYUCIsImFkZEV4cCIsIkNIT09TRV9TS0lMTCIsImNob29zZVNraWxsIiwiSFVSVF9BTklNIiwiYXRrQW5pbSIsIkNSRUFURV9FTkVNWSIsImNyZWF0ZUVuZW15SW5mbyIsIkVORU1ZX0RJRSIsImVuZW15RGllIiwiR0FNRV9GQUlMIiwiZmFpbCIsImNsaWNrUGF1c2UiLCJjbGlja0dhbWVSYXRpbyIsInJlbW92ZUV2ZW50Iiwib2ZmIiwiYWRkVG9TY3JlZW4iLCJwbGF5QkdNIiwicmVtb3ZlVG9TY3JlZW4iLCJjbGVhckxvb3BFZmZlY3QiLCJzdG9wQWxsRWZmZWN0Iiwic2V0VGFza1JlY29yZCIsImtpbGxFbmVteUNvdW50IiwiY2xlYXJBbGwiLCJSZXNNYW5hZ2VyIiwicmVsZWFzZUJ1bmRsZSIsIkVuZW15IiwicmVmcmVzaEdhbWVHZW0iLCJzdGFydENoZWNrRW5kIiwiY3VyckxldmVsQ29uZmlnIiwibGF5ZXJDb3VudCIsImdhbWVTdGFydFRpbWUiLCJwbGF5RWZmZWN0TXVzaWMiLCJHYW1lU3BlZWRWaWV3IiwiZ2V0IiwiUG9vbEtleSIsIkRJRSIsImNyZWF0ZURpZUFuaW0iLCJzIiwiQW5pbWF0aW9uIiwicGxheSIsIm9uY2UiLCJFdmVudFR5cGUiLCJGSU5JU0hFRCIsInB1dCIsImNob29zZUJ1ZmYiLCJIVVJUIiwiY3JlYXRlQXRrQW5pbSIsInIiLCJhIiwibCIsIkxhYmVsIiwic3RyaW5nIiwidG9TdHJpbmciLCJmb250U2l6ZSIsImF0a1NpemUiLCJjb2xvciIsImF0a0NvbG9yIiwieCIsInJhbmRvbUZyb20iLCJjbG9uZSIsInNjYWxlIiwib3BhY2l0eSIsImFkZCIsInR3ZWVuIiwidG8iLCJnYW1lUmF0aW8iLCJjYWxsIiwic3RhcnQiLCJ1cGRhdGUiLCJydW5HYW1lTG9vcCIsImJvc3NUaXAiLCJnYW1lTG9vcCIsImNDb2xsaWRlciIsImluc3QiLCJjcmVhdGVFbmVteSIsInJlbmRlckdhbWVUaW1lIiwic3RvcEFsbEVmZmVjdE11c2ljIiwiU2V0dGxlVmlldyIsImlzU3VjY2VzcyIsIm5hbWUiLCJjdXJyVHlwZSIsIndhcm5UaW1lcyIsIndhcm5JbmRleCIsIkJvc3NXYXJuVmlldyIsImlzQm9zcyIsImdldEdhbWVUaW1lIiwicG9zWCIsIkF2b2lkX2luanVyeSIsImxvdCIsImNyZWF0ZUVuZW15UHJvY2Nlc3MiLCJnZXRFbmVteVBvb2wiLCJnZXRSZXMiLCJnZXRFbmVteUNvbmZpZyIsIm1vbnN0ZXJfdHlwZSIsInNldFBvc2l0aW9uIiwiaW5pdEVuZW15IiwiYWRkQ3VyckVuZW15IiwiaW5zZXJ0IiwiUGF1c2VWaWV3IiwidXBkYXRlTWF0ZXJpYWxT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QUFqQixFQUE0QixjQUE1QixFQUE0QyxLQUFLLENBQWpELENBQVY7O0VBQ0FtSyxVQUFVLENBQUMsQ0FBQ2pNLENBQUMsQ0FBQ0osRUFBRSxDQUFDc00sSUFBSixDQUFGLENBQUQsRUFBZTdMLENBQUMsQ0FBQ3lCLFNBQWpCLEVBQTRCLFVBQTVCLEVBQXdDLEtBQUssQ0FBN0MsQ0FBVjs7RUFDQW1LLFVBQVUsQ0FBQyxDQUFDak0sQ0FBQyxDQUFDSixFQUFFLENBQUNzTSxJQUFKLENBQUYsQ0FBRCxFQUFlN0wsQ0FBQyxDQUFDeUIsU0FBakIsRUFBNEIsa0JBQTVCLEVBQWdELEtBQUssQ0FBckQsQ0FBVjs7RUFDQW1LLFVBQVUsQ0FBQyxDQUFDak0sQ0FBQyxDQUFDSixFQUFFLENBQUNzTSxJQUFKLENBQUYsQ0FBRCxFQUFlN0wsQ0FBQyxDQUFDeUIsU0FBakIsRUFBNEIsZUFBNUIsRUFBNkMsS0FBSyxDQUFsRCxDQUFWOztFQUNBLE9BQU9tSyxVQUFVLENBQUMsQ0FBQ25NLENBQUQsQ0FBRCxFQUFNTyxDQUFOLENBQWpCO0FBQ0gsQ0ExY0QsQ0EwY0czQixPQUFPLENBQUN5TixNQTFjWCxDQUZDLENBQUw7QUE2Y0FDLE9BQU8sV0FBUCxHQUFrQmxNLENBQWxCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbztcclxudmFyICRjb2xsaWRlciA9IHJlcXVpcmUoXCIuL0NvbGxpZGVyXCIpO1xyXG52YXIgJGFzc2V0c0xvYWRlciA9IHJlcXVpcmUoXCIuL0Fzc2V0c0xvYWRlclwiKTtcclxudmFyICRhc3NldHNNYXAgPSByZXF1aXJlKFwiLi9Bc3NldHNNYXBcIik7XHJcbnZhciAkcmVzTWFuYWdlciA9IHJlcXVpcmUoXCIuL1Jlc01hbmFnZXJcIik7XHJcbnZhciAkcmVzVXRpbCA9IHJlcXVpcmUoXCIuL1Jlc1V0aWxcIik7XHJcbnZhciAkZXZlbnRNYW5hZ2VyID0gcmVxdWlyZShcIi4vRXZlbnRNYW5hZ2VyXCIpO1xyXG52YXIgJGNvbXBvbmVudFByb3h5ID0gcmVxdWlyZShcIi4vQ29tcG9uZW50UHJveHlcIik7XHJcbnZhciAkcG9wdXBNYW5hZ2VyID0gcmVxdWlyZShcIi4vUG9wdXBNYW5hZ2VyXCIpO1xyXG52YXIgJHVJVmlldyA9IHJlcXVpcmUoXCIuL1VJVmlld1wiKTtcclxudmFyICRndWlkZSA9IHJlcXVpcmUoXCIuL0d1aWRlXCIpO1xyXG52YXIgJGF1ZGlvUGxheWVyID0gcmVxdWlyZShcIi4vQXVkaW9QbGF5ZXJcIik7XHJcbnZhciAkcmVtb3RlQXVkaW8gPSByZXF1aXJlKFwiLi9SZW1vdGVBdWRpb1wiKTtcclxudmFyICRnYW1lUG9vbCA9IHJlcXVpcmUoXCIuL0dhbWVQb29sXCIpO1xyXG52YXIgJHNlZWRVdGlsID0gcmVxdWlyZShcIi4vU2VlZFV0aWxcIik7XHJcbnZhciAkdXRpbCA9IHJlcXVpcmUoXCIuL1V0aWxcIik7XHJcbnZhciAkY29uZmlnQ29udGV4dCA9IHJlcXVpcmUoXCIuL0NvbmZpZ0NvbnRleHRcIik7XHJcbnZhciAkZXF1aXBtZW50Q29udGV4dCA9IHJlcXVpcmUoXCIuL0VxdWlwbWVudENvbnRleHRcIik7XHJcbnZhciAkZ2xvYmFsUGFyYW0gPSByZXF1aXJlKFwiLi9HbG9iYWxQYXJhbVwiKTtcclxudmFyICRsb2NhbEV2ZW50TmFtZSA9IHJlcXVpcmUoXCIuL0xvY2FsRXZlbnROYW1lXCIpO1xyXG52YXIgJHRhc2tDb250ZXh0ID0gcmVxdWlyZShcIi4vVGFza0NvbnRleHRcIik7XHJcbnZhciAkdXNlckRhdGFDb250ZXh0ID0gcmVxdWlyZShcIi4vVXNlckRhdGFDb250ZXh0XCIpO1xyXG52YXIgJGdhbWVDb250ZXh0ID0gcmVxdWlyZShcIi4vR2FtZUNvbnRleHRcIik7XHJcbnZhciAkZ2FtZUdlbUluZm8gPSByZXF1aXJlKFwiLi9HYW1lR2VtSW5mb1wiKTtcclxudmFyICRiYXNlRW5lbXkgPSByZXF1aXJlKFwiLi9CYXNlRW5lbXlcIik7XHJcbnZhciAkZWdnRW5lbXlfMSA9IHJlcXVpcmUoXCIuL0VnZ0VuZW15XzFcIik7XHJcbnZhciBPID0gY2MuX2RlY29yYXRvcjtcclxudmFyIEwgPSBPLmNjY2xhc3M7XHJcbnZhciBFID0gTy5wcm9wZXJ0eTtcclxudmFyIE0gPVxyXG4gICAgKG5ldyBjYy5WZWMzKCksXHJcbiAgICAoZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICBmdW5jdGlvbiBlKCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IChudWxsICE9PSB0ICYmIHQuYXBwbHkodGhpcywgYXJndW1lbnRzKSkgfHwgdGhpcztcclxuICAgICAgICAgICAgZS5mbG9vckxheWVyID0gbnVsbDtcclxuICAgICAgICAgICAgZS5lbmVteUxheWVyID0gbnVsbDtcclxuICAgICAgICAgICAgZS5lbmVteTJMYXllciA9IG51bGw7XHJcbiAgICAgICAgICAgIGUuYnV0dGxlTGF5ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBlLmxvd0J1bGxldExheWVyID0gbnVsbDtcclxuICAgICAgICAgICAgZS5lbmVteURlYnVmZkxheWVyID0gbnVsbDtcclxuICAgICAgICAgICAgZS5hdGtMYXllciA9IG51bGw7XHJcbiAgICAgICAgICAgIGUuZG9vciA9IG51bGw7XHJcbiAgICAgICAgICAgIGUuYnRuUGF1c2UgPSBudWxsO1xyXG4gICAgICAgICAgICBlLnRpbWUgPSBudWxsO1xyXG4gICAgICAgICAgICBlLmJ0bkdhbWVSYXRpbyA9IG51bGw7XHJcbiAgICAgICAgICAgIGUuZWdnTGF5ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBlLmVuZW15QnVsbGV0TGF5ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBlLnJvYm90Rmx5TGF5ZXIgPSBudWxsO1xyXG4gICAgICAgICAgICBlLmN1cnJUaW1lID0gMDtcclxuICAgICAgICAgICAgZS5jdXJySW5kZXggPSAwO1xyXG4gICAgICAgICAgICBlLmlzQ2hlY2tFbmQgPSAhMTtcclxuICAgICAgICAgICAgZS5jaGVja1RpbWUgPSAwO1xyXG4gICAgICAgICAgICBlLmd1aWRlU3RlcCA9IDA7XHJcbiAgICAgICAgICAgIGUuaXNSZXBlYXQgPSAhMTtcclxuICAgICAgICAgICAgZS5pc0VuZCA9ICExO1xyXG4gICAgICAgICAgICByZXR1cm4gZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgX19leHRlbmRzKGUsIHQpO1xyXG4gICAgICAgIGUucHJvdG90eXBlLm9uTG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UgPSAhMDtcclxuICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmF0a0xheWVyID0gdGhpcy5hdGtMYXllcjtcclxuICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmVuZW15QnVsbGV0TGF5ZXIgPSB0aGlzLmVuZW15QnVsbGV0TGF5ZXI7XHJcbiAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5sb3dCdWxsZXRMYXllciA9IHRoaXMubG93QnVsbGV0TGF5ZXI7XHJcbiAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5yb2JvdEZseUxheWVyID0gdGhpcy5yb2JvdEZseUxheWVyO1xyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuaW5pdChcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlMYXllcixcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXkyTGF5ZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRsZUxheWVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5mbG9vckxheWVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmVteURlYnVmZkxheWVyXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmICgyID09PSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuY3VyckxldmVsSW5mb0NvbmZpZy5pZCAmJiAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLmdldEVnZygxKSA8IDEpIHtcclxuICAgICAgICAgICAgICAgICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5sb2FkUmVzKFxyXG4gICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQnVuZGxlTmFtZXMuR2FtZSxcclxuICAgICAgICAgICAgICAgICAgICBbXCIvcHJlZmFicy9lZ2cvcHJvcF8xXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLlByZWZhYixcclxuICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvID0gaVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwICYmIGNjLmlzVmFsaWQobykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuID0gJHJlc1V0aWwuUmVzVXRpbC5pbnN0YW50aWF0ZShvLCB0Lm5vZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5wYXJlbnQgPSB0LmVnZ0xheWVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5wb3NpdGlvbiA9IGNjLnYzKC0yMjUsIDE4MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICg2ID09PSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuY3VyckxldmVsSW5mb0NvbmZpZy5pZCkge1xyXG4gICAgICAgICAgICAgICAgJGFzc2V0c0xvYWRlci5kZWZhdWx0Lmluc3RhbmNlLmxvYWRSZXMoXHJcbiAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5CdW5kbGVOYW1lcy5HYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIFtcIi90ZXh0dXJlcy9iajJcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZSwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbyA9IGlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvICYmIGNjLmlzVmFsaWQobykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9ICRyZXNVdGlsLlJlc1V0aWwuYXNzaWduV2l0aChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQubm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJTcGVlZEJ0bigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tHdWlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXCIpO1xyXG4gICAgICAgICAgICAwID09PSB0aGlzLmd1aWRlU3RlcFxyXG4gICAgICAgICAgICAgICAgPyAoKHRoaXMuZ3VpZGVTdGVwID0gMSksICRndWlkZS5kZWZhdWx0LnNlbGYuc3RhcnRHdWlkZU1hc2sodCwgMSkpXHJcbiAgICAgICAgICAgICAgICA6ICgodGhpcy5ndWlkZVN0ZXAgPSAyKSxcclxuICAgICAgICAgICAgICAgICAgJGd1aWRlLmRlZmF1bHQuc2VsZi5zdG9wR3VpZGUoKSxcclxuICAgICAgICAgICAgICAgICAgKCRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlID0gITEpLFxyXG4gICAgICAgICAgICAgICAgICB0LmRlc3Ryb3koKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5vblJlc2V0VmlldyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXCIpO1xyXG4gICAgICAgICAgICBpZiAoZSAmJiAhJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5pc0VuZEd1aWRlKSB7XHJcbiAgICAgICAgICAgICAgICAkZ3VpZGUuZGVmYXVsdC5zZWxmLnN0YXJ0R3VpZGVNYXNrKGUsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghJHVzZXJEYXRhQ29udGV4dC5kZWZhdWx0Lklucy5pc0VuZEd1aWRlKSB7XHJcbiAgICAgICAgICAgICAgICAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5pc0dhbWVQdWFzZSA9ICEwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmICgkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLmlzRW5kR3VpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5pc0dhbWVQdWFzZSA9ICExO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdC5kb29yLmFjdGl2ZSA9ICEwO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKCRnYW1lR2VtSW5mby5HYW1lR2VtSW5mby5pbnMuaGFzR2VtKCRnYW1lR2VtSW5mby5HZW1UeXBlLlN0YXJ0Q2hvb3NlU0tpbGwpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuY3JlYXRlTmV4dFNraWxscygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGF1c2VBbGxFZmZlY3RNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5Bc3NldHNNYXAuUG9wVXBCdW5kbGVzLnByZWZhYnMuYXNzZXRzTGlzdC5DaG9vc2VTa2lsbFZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzOiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvb3ROb2RlOiB0Lm5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VDYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5pc0dhbWVQdWFzZSA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5yZXN1bWVBbGxFZmZlY3RNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAwLjEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5hZGRFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0Lm9uKCRsb2NhbEV2ZW50TmFtZS5kZWZhdWx0LkFERF9FWFAsIHRoaXMuYWRkRXhwLCB0aGlzKTtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0Lm9uKCRsb2NhbEV2ZW50TmFtZS5kZWZhdWx0LkNIT09TRV9TS0lMTCwgdGhpcy5jaG9vc2VTa2lsbCwgdGhpcyk7XHJcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vbigkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5IVVJUX0FOSU0sIHRoaXMuYXRrQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vbigkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5DUkVBVEVfRU5FTVksIHRoaXMuY3JlYXRlRW5lbXlJbmZvLCB0aGlzKTtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0Lm9uKCRsb2NhbEV2ZW50TmFtZS5kZWZhdWx0LkVORU1ZX0RJRSwgdGhpcy5lbmVteURpZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vbigkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5HQU1FX0ZBSUwsIHRoaXMuZmFpbCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuUGF1c2Uub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrUGF1c2UsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmJ0bkdhbWVSYXRpby5vbihcImNsaWNrXCIsIHRoaXMuY2xpY2tHYW1lUmF0aW8sIHRoaXMpO1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXCIpO1xyXG4gICAgICAgICAgICAkdXNlckRhdGFDb250ZXh0LmRlZmF1bHQuSW5zLmlzRW5kR3VpZGUgPyB0LmRlc3Ryb3koKSA6IHQub24oXCJjbGlja1wiLCB0aGlzLmNsaWNrR3VpZCwgdGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0Lm9mZigkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5BRERfRVhQLCB0aGlzLmFkZEV4cCwgdGhpcyk7XHJcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vZmYoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuQ0hPT1NFX1NLSUxMLCB0aGlzLmNob29zZVNraWxsLCB0aGlzKTtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0Lm9mZigkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5IVVJUX0FOSU0sIHRoaXMuYXRrQW5pbSwgdGhpcyk7XHJcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vZmYoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuQ1JFQVRFX0VORU1ZLCB0aGlzLmNyZWF0ZUVuZW15SW5mbywgdGhpcyk7XHJcbiAgICAgICAgICAgICRldmVudE1hbmFnZXIuZGVmYXVsdC5vZmYoJGxvY2FsRXZlbnROYW1lLmRlZmF1bHQuRU5FTVlfRElFLCB0aGlzLmVuZW15RGllLCB0aGlzKTtcclxuICAgICAgICAgICAgJGV2ZW50TWFuYWdlci5kZWZhdWx0Lm9mZigkbG9jYWxFdmVudE5hbWUuZGVmYXVsdC5HQU1FX0ZBSUwsIHRoaXMuZmFpbCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYnRuUGF1c2Uub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja1BhdXNlLCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5idG5HYW1lUmF0aW8ub2ZmKFwiY2xpY2tcIiwgdGhpcy5jbGlja0dhbWVSYXRpbywgdGhpcyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5hZGRUb1NjcmVlbiA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUJHTSghMSwgXCJCR00yXCIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUucmVtb3ZlVG9TY3JlZW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLmNsZWFyTG9vcEVmZmVjdCgpO1xyXG4gICAgICAgICAgICAkYXVkaW9QbGF5ZXIuZGVmYXVsdC5zdG9wQWxsRWZmZWN0KCk7XHJcbiAgICAgICAgICAgICR0YXNrQ29udGV4dC5kZWZhdWx0Lklucy5zZXRUYXNrUmVjb3JkKDEsICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5raWxsRW5lbXlDb3VudCk7XHJcbiAgICAgICAgICAgICRjb21wb25lbnRQcm94eS5kZWZhdWx0Lklucy5jbGVhcigpO1xyXG4gICAgICAgICAgICAkZ2FtZVBvb2wuZGVmYXVsdC5pbnN0YW5jZS5jbGVhckFsbCgpO1xyXG4gICAgICAgICAgICAkcmVzTWFuYWdlci5SZXNNYW5hZ2VyLmluc3RhbmNlLnJlbGVhc2VCdW5kbGUoJGFzc2V0c01hcC5CdW5kbGVOYW1lcy5HYW1lKTtcclxuICAgICAgICAgICAgJHJlc01hbmFnZXIuUmVzTWFuYWdlci5pbnN0YW5jZS5yZWxlYXNlQnVuZGxlKCRhc3NldHNNYXAuQnVuZGxlTmFtZXMuRW5lbXkpO1xyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuY2xlYXIoKTtcclxuICAgICAgICAgICAgJGVxdWlwbWVudENvbnRleHQuZGVmYXVsdC5JbnMucmVmcmVzaEdhbWVHZW0oKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLnN0YXJ0Q2hlY2tFbmQgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSB0KSB7XHJcbiAgICAgICAgICAgICAgICB0ID0gITA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLmN1cnJJbmRleCA8ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5jdXJyTGV2ZWxDb25maWcubGVuZ3RoIC0gMSB8fFxyXG4gICAgICAgICAgICAgICAgICAwICE9PSB0aGlzLmxheWVyQ291bnQoKSB8fFxyXG4gICAgICAgICAgICAgICAgICAwICE9PSB0aGlzLmVuZW15MkxheWVyLmNoaWxkcmVuLmxlbmd0aCB8fFxyXG4gICAgICAgICAgICAgICAgICAoKHRoaXMuaXNDaGVja0VuZCA9ICEwKSwgKHRoaXMuY2hlY2tUaW1lID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdhbWVTdGFydFRpbWUpKVxyXG4gICAgICAgICAgICAgICAgOiAodGhpcy5pc0NoZWNrRW5kID0gITEpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tHYW1lUmF0aW8gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ID0gdGhpcztcclxuICAgICAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljKFwiQ2xpY2tcIik7XHJcbiAgICAgICAgICAgICRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlID0gITA7XHJcbiAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oXHJcbiAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkdhbWVTcGVlZFZpZXcsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UgPSAhMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdC5yZW5kZXJTcGVlZEJ0bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLmVuZW15RGllID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgdmFyIGUgPSB0aGlzO1xyXG4gICAgICAgICAgICB2YXIgaSA9ICRnYW1lUG9vbC5kZWZhdWx0Lmluc3RhbmNlLmdldCgkZ2FtZVBvb2wuUG9vbEtleS5ESUUpO1xyXG4gICAgICAgICAgICBpXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuY3JlYXRlRGllQW5pbShpLCB0KVxyXG4gICAgICAgICAgICAgICAgOiAkYXNzZXRzTG9hZGVyLmRlZmF1bHQuaW5zdGFuY2UubG9hZFJlcyhcclxuICAgICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQnVuZGxlTmFtZXMuR2FtZSxcclxuICAgICAgICAgICAgICAgICAgICAgIFtcIi9wcmVmYWJzL2RlYnVmZi9EaWVcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKG8sIG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcyA9IG5bMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwICYmIGNjLmlzVmFsaWQocykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUocywgZS5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5jcmVhdGVEaWVBbmltKGksIHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLmNyZWF0ZURpZUFuaW0gPSBmdW5jdGlvbiAodCwgZSkge1xyXG4gICAgICAgICAgICB2YXIgaSA9IHRoaXM7XHJcbiAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5raWxsRW5lbXlDb3VudCsrO1xyXG4gICAgICAgICAgICB0LnBhcmVudCA9IHRoaXMuZmxvb3JMYXllcjtcclxuICAgICAgICAgICAgdC5wb3NpdGlvbiA9IGU7XHJcbiAgICAgICAgICAgIHZhciBvID0gdC5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcclxuICAgICAgICAgICAgby5wbGF5KFwiZGllXCIpO1xyXG4gICAgICAgICAgICBvLm9uY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5BbmltYXRpb24uRXZlbnRUeXBlLkZJTklTSEVELFxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICRnYW1lUG9vbC5kZWZhdWx0Lmluc3RhbmNlLnB1dCgkZ2FtZVBvb2wuUG9vbEtleS5ESUUsIHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGkuc3RhcnRDaGVja0VuZCgpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRoaXNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLmNob29zZVNraWxsID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmNob29zZVNraWxsKHQpO1xyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuY2hvb3NlQnVmZigpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuYWRkRXhwID0gZnVuY3Rpb24gKHQpIHtcclxuICAgICAgICAgICAgaWYgKCRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5hZGRFeHAodCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmNyZWF0ZU5leHRTa2lsbHMoKTtcclxuICAgICAgICAgICAgICAgIGlmIChlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5wYXVzZUFsbEVmZmVjdE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UgPSAhMDtcclxuICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LkNob29zZVNraWxsVmlldyxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWRzOiBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdE5vZGU6IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucmVzdW1lQWxsRWZmZWN0TXVzaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZ2xvYmFsUGFyYW0uZGVmYXVsdC5pc0dhbWVQdWFzZSA9ICExO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuYXRrQW5pbSA9IGZ1bmN0aW9uICh0LCBlLCBpLCBvKSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gaSkge1xyXG4gICAgICAgICAgICAgICAgaSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHZvaWQgMCA9PT0gbykge1xyXG4gICAgICAgICAgICAgICAgbyA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHMgPSAkZ2FtZVBvb2wuZGVmYXVsdC5pbnN0YW5jZS5nZXQoJGdhbWVQb29sLlBvb2xLZXkuSFVSVCk7XHJcbiAgICAgICAgICAgIHNcclxuICAgICAgICAgICAgICAgID8gdGhpcy5jcmVhdGVBdGtBbmltKHMsIHQsIGUsIGksIG8pXHJcbiAgICAgICAgICAgICAgICA6ICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5sb2FkUmVzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgJGFzc2V0c01hcC5CdW5kbGVOYW1lcy5HYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgW1wiL3ByZWZhYnMvZGVidWZmL0h1cnRcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBjYy5QcmVmYWIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKHIsIGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbCA9IGFbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwICYmIGNjLmlzVmFsaWQobCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcyA9ICRyZXNVdGlsLlJlc1V0aWwuaW5zdGFudGlhdGUobCwgbi5ub2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbi5jcmVhdGVBdGtBbmltKHMsIHQsIGUsIGksIG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLmNyZWF0ZUF0a0FuaW0gPSBmdW5jdGlvbiAodCwgZSwgaSwgbywgbikge1xyXG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBvKSB7XHJcbiAgICAgICAgICAgICAgICBvID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodm9pZCAwID09PSBuKSB7XHJcbiAgICAgICAgICAgICAgICBuID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgcyA9IHQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgcy5zdHJpbmcgPSAtMSA9PT0gaSA/IFwi5YWN55arXCIgOiAwID09PSBpID8gXCLlhY3kvKRcIiA6IDIgPT09IG8gJiYgaSA+IDAgPyBcIitcIiArIGkgOiBpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHMuZm9udFNpemUgPSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuYXRrU2l6ZVtuXTtcclxuICAgICAgICAgICAgdC5jb2xvciA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5hdGtDb2xvcltvXTtcclxuICAgICAgICAgICAgZS54ICs9ICRzZWVkVXRpbC5kZWZhdWx0LnJhbmRvbUZyb20oLTMwLCAzMCk7XHJcbiAgICAgICAgICAgIHQucG9zaXRpb24gPSBlLmNsb25lKCk7XHJcbiAgICAgICAgICAgIHQuc2NhbGUgPSAxLjI7XHJcbiAgICAgICAgICAgIHQucGFyZW50ID0gdGhpcy5hdGtMYXllcjtcclxuICAgICAgICAgICAgcy5ub2RlLm9wYWNpdHkgPSAxO1xyXG4gICAgICAgICAgICBzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICAgICAgdmFyIHIgPSBlLmFkZChjYy52Mygkc2VlZFV0aWwuZGVmYXVsdC5yYW5kb21Gcm9tKC01MCwgNTApLCA1MCkpO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0KVxyXG4gICAgICAgICAgICAgICAgLnRvKDAuMTUgLyAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NhbGU6IDFcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudG8oMC41IC8gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdhbWVSYXRpbywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHMubm9kZS5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAkZ2FtZVBvb2wuZGVmYXVsdC5pbnN0YW5jZS5wdXQoJGdhbWVQb29sLlBvb2xLZXkuSFVSVCwgdCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICBpZiAoISRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJ1bkdhbWVMb29wKHQpO1xyXG4gICAgICAgICAgICAgICAgMS41ID09PSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmlzUmVwZWF0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKHRoaXMuaXNSZXBlYXQgPSAhMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiAodGhpcy5ydW5HYW1lTG9vcCh0KSwgKHRoaXMuaXNSZXBlYXQgPSAhMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgOiAyID09PSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLnJ1bkdhbWVMb29wKHQpXHJcbiAgICAgICAgICAgICAgICAgICAgOiA0ID09PSAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAodGhpcy5ydW5HYW1lTG9vcCh0KSwgdGhpcy5ydW5HYW1lTG9vcCh0KSwgdGhpcy5ydW5HYW1lTG9vcCh0KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJvc3NUaXAoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUucnVuR2FtZUxvb3AgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICAkY29tcG9uZW50UHJveHkuZGVmYXVsdC5JbnMuZ2FtZUxvb3AodCk7XHJcbiAgICAgICAgICAgICRjb2xsaWRlci5jQ29sbGlkZXIuaW5zdC51cGRhdGUodCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyclRpbWUgKz0gdDtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFbmVteSgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckdhbWVUaW1lKHQpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAhdGhpcy5pc0VuZCAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NoZWNrRW5kICYmXHJcbiAgICAgICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVN0YXJ0VGltZSAtIHRoaXMuY2hlY2tUaW1lID4gMyAmJlxyXG4gICAgICAgICAgICAgICAgMCA9PT0gdGhpcy5sYXllckNvdW50KCkgJiZcclxuICAgICAgICAgICAgICAgIDAgPT09IHRoaXMuZW5lbXkyTGF5ZXIuY2hpbGRyZW4ubGVuZ3RoXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9ICEwO1xyXG4gICAgICAgICAgICAgICAgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UgPSAhMDtcclxuICAgICAgICAgICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnN0b3BBbGxFZmZlY3RNdXNpYygpO1xyXG4gICAgICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbihcclxuICAgICAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlNldHRsZVZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1N1Y2Nlc3M6ICEwXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUubGF5ZXJDb3VudCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLmVuZW15TGF5ZXIuY2hpbGRyZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAxID09PSB0ICYmXHJcbiAgICAgICAgICAgICAgICBcIkVnZ0VuZW15XzFcIiA9PT0gdGhpcy5lbmVteUxheWVyLmNoaWxkcmVuWzBdLm5hbWUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5lbXlMYXllci5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoJGVnZ0VuZW15XzEuZGVmYXVsdCkuY3VyclR5cGUgPCAyXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgdCA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5ib3NzVGlwID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy53YXJuVGltZXMubGVuZ3RoOyB0KyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMud2FybkluZGV4IDwgdCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nYW1lU3RhcnRUaW1lID49ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy53YXJuVGltZXNbdF1cclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy53YXJuSW5kZXggPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgICRwb3B1cE1hbmFnZXIuUG9wdXBNYW5hZ2VyLmluc3RhbmNlLm9wZW4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLlBvcFVwQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuQm9zc1dhcm5WaWV3LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Jvc3M6ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5pc0Jvc3NbdF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0VuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VuZCA9ICEwO1xyXG4gICAgICAgICAgICAgICAgJGdsb2JhbFBhcmFtLmRlZmF1bHQuaXNHYW1lUHVhc2UgPSAhMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkcmVtb3RlQXVkaW8uZGVmYXVsdC5pbnN0YW5jZS5zdG9wQWxsRWZmZWN0TXVzaWMoKTtcclxuICAgICAgICAgICAgICAgICAgICAkcG9wdXBNYW5hZ2VyLlBvcHVwTWFuYWdlci5pbnN0YW5jZS5vcGVuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkYXNzZXRzTWFwLkFzc2V0c01hcC5Qb3BVcEJ1bmRsZXMucHJlZmFicy5hc3NldHNMaXN0LlNldHRsZVZpZXcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VjY2VzczogITFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9LCAzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUucmVuZGVyR2FtZVRpbWUgPSBmdW5jdGlvbiAodCkge1xyXG4gICAgICAgICAgICB2YXIgZSA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nZXRHYW1lVGltZSh0KTtcclxuICAgICAgICAgICAgaWYgKFwiXCIgIT09IGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZS5zdHJpbmcgPSBlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBlLnByb3RvdHlwZS5jcmVhdGVFbmVteSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgIShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZW15TGF5ZXIuY2hpbGRyZW4ubGVuZ3RoICsgdGhpcy5lbmVteTJMYXllci5jaGlsZHJlbi5sZW5ndGggPj0gMTUwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJySW5kZXggPj0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmN1cnJMZXZlbENvbmZpZy5sZW5ndGhcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdCA9ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5jdXJyTGV2ZWxDb25maWdbdGhpcy5jdXJySW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEodC50aW1lID4gdGhpcy5jdXJyVGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUVuZW15SW5mbyh0LmlkLCBjYy52Myh0LnBvc1gsIDcyMCksIHQuQXZvaWRfaW5qdXJ5LCB0LmxvdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJySW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuY3JlYXRlRW5lbXlQcm9jY2VzcyA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyckluZGV4IC8gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmN1cnJMZXZlbENvbmZpZy5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGUucHJvdG90eXBlLmNyZWF0ZUVuZW15SW5mbyA9IGZ1bmN0aW9uICh0LCBlLCBpLCBvKSB7XHJcbiAgICAgICAgICAgIHZhciBuID0gJGdhbWVDb250ZXh0LmRlZmF1bHQuaW5zLmdldEVuZW15UG9vbCh0KTtcclxuICAgICAgICAgICAgaWYgKCFuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9ICRhc3NldHNMb2FkZXIuZGVmYXVsdC5pbnN0YW5jZS5nZXRSZXMoJGFzc2V0c01hcC5CdW5kbGVOYW1lcy5FbmVteSwgXCIvcHJlZmFicy9FbmVteV9cIiArIHQpO1xyXG4gICAgICAgICAgICAgICAgbiA9IGNjLmluc3RhbnRpYXRlKHMpLmdldENvbXBvbmVudCgkYmFzZUVuZW15LmRlZmF1bHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRDaGVja0VuZCghMSk7XHJcbiAgICAgICAgICAgIHZhciByID0gJGNvbmZpZ0NvbnRleHQuZGVmYXVsdC5pbnN0YW5jZS5nZXRFbmVteUNvbmZpZyh0KTtcclxuICAgICAgICAgICAgaWYgKDMgPT09IHIubW9uc3Rlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnggPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG4uc2V0UG9zaXRpb24oZSk7XHJcbiAgICAgICAgICAgIG4uaW5pdEVuZW15KHIsIGksIG8pO1xyXG4gICAgICAgICAgICAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuYWRkQ3VyckVuZW15KG4pO1xyXG4gICAgICAgICAgICA5ID09PSB0IHx8IDEwID09PSB0ID8gbi5pbnNlcnQodGhpcy5lbmVteTJMYXllcikgOiBuLmluc2VydCh0aGlzLmVuZW15TGF5ZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUuY2xpY2tQYXVzZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJHJlbW90ZUF1ZGlvLmRlZmF1bHQuaW5zdGFuY2UucGxheUVmZmVjdE11c2ljKFwiQ2xpY2tcIik7XHJcbiAgICAgICAgICAgICRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlID0gITA7XHJcbiAgICAgICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnBhdXNlQWxsRWZmZWN0TXVzaWMoKTtcclxuICAgICAgICAgICAgJHBvcHVwTWFuYWdlci5Qb3B1cE1hbmFnZXIuaW5zdGFuY2Uub3BlbihcclxuICAgICAgICAgICAgICAgICRhc3NldHNNYXAuQXNzZXRzTWFwLlBvcFVwQnVuZGxlcy5wcmVmYWJzLmFzc2V0c0xpc3QuUGF1c2VWaWV3LFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZUNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRyZW1vdGVBdWRpby5kZWZhdWx0Lmluc3RhbmNlLnJlc3VtZUFsbEVmZmVjdE11c2ljKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRnbG9iYWxQYXJhbS5kZWZhdWx0LmlzR2FtZVB1YXNlID0gITE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZS5wcm90b3R5cGUucmVuZGVyU3BlZWRCdG4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIDEgPT09ICRnYW1lQ29udGV4dC5kZWZhdWx0Lmlucy5nYW1lUmF0aW9cclxuICAgICAgICAgICAgICAgID8gJHV0aWwuZGVmYXVsdC51cGRhdGVNYXRlcmlhbFN0YXRlKHRoaXMuYnRuR2FtZVJhdGlvLCAhMClcclxuICAgICAgICAgICAgICAgIDogKCR1dGlsLmRlZmF1bHQudXBkYXRlTWF0ZXJpYWxTdGF0ZSh0aGlzLmJ0bkdhbWVSYXRpbywgITEpLFxyXG4gICAgICAgICAgICAgICAgICAodGhpcy5idG5HYW1lUmF0aW8uY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJYXCIgKyAkZ2FtZUNvbnRleHQuZGVmYXVsdC5pbnMuZ2FtZVJhdGlvKSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBfX2RlY29yYXRlKFtFKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiZmxvb3JMYXllclwiLCB2b2lkIDApO1xyXG4gICAgICAgIF9fZGVjb3JhdGUoW0UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJlbmVteUxheWVyXCIsIHZvaWQgMCk7XHJcbiAgICAgICAgX19kZWNvcmF0ZShbRShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImVuZW15MkxheWVyXCIsIHZvaWQgMCk7XHJcbiAgICAgICAgX19kZWNvcmF0ZShbRShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImJ1dHRsZUxheWVyXCIsIHZvaWQgMCk7XHJcbiAgICAgICAgX19kZWNvcmF0ZShbRShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImxvd0J1bGxldExheWVyXCIsIHZvaWQgMCk7XHJcbiAgICAgICAgX19kZWNvcmF0ZShbRShjYy5Ob2RlKV0sIGUucHJvdG90eXBlLCBcImVuZW15RGVidWZmTGF5ZXJcIiwgdm9pZCAwKTtcclxuICAgICAgICBfX2RlY29yYXRlKFtFKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiYXRrTGF5ZXJcIiwgdm9pZCAwKTtcclxuICAgICAgICBfX2RlY29yYXRlKFtFKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiZG9vclwiLCB2b2lkIDApO1xyXG4gICAgICAgIF9fZGVjb3JhdGUoW0UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJidG5QYXVzZVwiLCB2b2lkIDApO1xyXG4gICAgICAgIF9fZGVjb3JhdGUoW0UoY2MuTGFiZWwpXSwgZS5wcm90b3R5cGUsIFwidGltZVwiLCB2b2lkIDApO1xyXG4gICAgICAgIF9fZGVjb3JhdGUoW0UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJidG5HYW1lUmF0aW9cIiwgdm9pZCAwKTtcclxuICAgICAgICBfX2RlY29yYXRlKFtFKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiZWdnTGF5ZXJcIiwgdm9pZCAwKTtcclxuICAgICAgICBfX2RlY29yYXRlKFtFKGNjLk5vZGUpXSwgZS5wcm90b3R5cGUsIFwiZW5lbXlCdWxsZXRMYXllclwiLCB2b2lkIDApO1xyXG4gICAgICAgIF9fZGVjb3JhdGUoW0UoY2MuTm9kZSldLCBlLnByb3RvdHlwZSwgXCJyb2JvdEZseUxheWVyXCIsIHZvaWQgMCk7XHJcbiAgICAgICAgcmV0dXJuIF9fZGVjb3JhdGUoW0xdLCBlKTtcclxuICAgIH0pKCR1SVZpZXcuVUlWaWV3KSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IE07XHJcbiJdfQ==