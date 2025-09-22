"use strict";
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