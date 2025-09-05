(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Hex Pattern Decreasing Size 80 Percent Light Blue_atlas_1", frames: [[0,0,426,114]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["Hex Pattern Decreasing Size 80 Percent Light Blue_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(img.CachedBmp_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,4802,738);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Hex = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ah3DRIh4jRIB4jQIDvAAIB4DQIh4DRg");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(2,1,1).p("AjHFcIjIlcIDIlbIGPAAIDIFbIjIFcg");
	this.shape_1.setTransform(0,1.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#00FF00").ss(2,1,1).p("Ah3DRIh4jRIB4jQIDvAAIB4DQIh4DRg");
	this.shape_2.setTransform(0,-0.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,255,255,0.298)").s().p("AjHFcIjIlcIDIlbIGPAAIDIFbIjIFcgAjvgKIB4DQIDvAAIB4jQIh4jQIjvAAg");
	this.shape_3.setTransform(0,1.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	// Layer_2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AmPK4ImQq4IGQq3IMfAAIGQK3ImQK4g");
	this.shape_4.setTransform(0,0.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,1,1).p("Ah3DRIh4jRIB4jQIDvAAIB4DQIh4DRgAjHFnIjIlcIDIlcIGPAAIDIFcIjIFcgAmPK5ImQq4IGQq3IMfAAIGQK3ImQK4gAnzNmIn0tmIH0tlIPnAAIH0NlIn0Nmg");

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,255,255,0.298)").s().p("AnzNmIn0tmIH0tlIPnAAIH0NlIn0NmgAsfABIGQK4IMfAAIGQq4ImQq3IsfAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Hex, new cjs.Rectangle(-101,-88,202,176), null);


// stage content:
(lib.HexPatternDecreasingSize80PercentLightBlue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_3
	this.instance = new lib.Hex();
	this.instance.setTransform(2310.05,0,0.25,0.2494,0,0,0,0.2,0);

	this.instance_1 = new lib.Hex();
	this.instance_1.setTransform(2310.05,367,0.25,0.2494,0,0,0,0.2,0.4);

	this.instance_2 = new lib.Hex();
	this.instance_2.setTransform(2310.05,193.05,0.25,0.2494,0,0,0,0.2,0.4);

	this.instance_3 = new lib.Hex();
	this.instance_3.setTransform(2140.1,290.9,0.25,0.2494,0,0,0,0.4,0.4);

	this.instance_4 = new lib.Hex();
	this.instance_4.setTransform(2140.1,96.95,0.25,0.2494,0,0,0,0.4,0.4);

	this.instance_5 = new lib.Hex();
	this.instance_5.setTransform(1971.05,0,0.32,0.3195,0,0,0,0.1,0);

	this.instance_6 = new lib.Hex();
	this.instance_6.setTransform(1971.05,367.05,0.32,0.3195,0,0,0,0.1,0.3);

	this.instance_7 = new lib.Hex();
	this.instance_7.setTransform(1971.05,193.05,0.32,0.3195,0,0,0,0.1,0.1);

	this.instance_8 = new lib.Hex();
	this.instance_8.setTransform(1801.05,290.95,0.32,0.3195,0,0,0,0.1,0.3);

	this.instance_9 = new lib.Hex();
	this.instance_9.setTransform(1801.05,97,0.32,0.3195,0,0,0,0.1,0.3);

	this.instance_10 = new lib.Hex();
	this.instance_10.setTransform(1631.05,0,0.41,0.4098,0,0,0,0.1,0);

	this.instance_11 = new lib.Hex();
	this.instance_11.setTransform(1631.05,367.05,0.41,0.4098,0,0,0,0.1,0.1);

	this.instance_12 = new lib.Hex();
	this.instance_12.setTransform(1631.05,193.05,0.41,0.4098,0,0,0,0.1,0.1);

	this.instance_13 = new lib.Hex();
	this.instance_13.setTransform(1461,291,0.41,0.4098,0,0,0,0.1,0.2);

	this.instance_14 = new lib.Hex();
	this.instance_14.setTransform(1461,97,0.41,0.4098,0,0,0,0.1,0.2);

	this.instance_15 = new lib.Hex();
	this.instance_15.setTransform(1290,0,0.51,0.5098,0,0,0,0.1,0);

	this.instance_16 = new lib.Hex();
	this.instance_16.setTransform(1290,367.05,0.51,0.5098,0,0,0,0.1,0);

	this.instance_17 = new lib.Hex();
	this.instance_17.setTransform(1290,193.05,0.51,0.5098,0,0,0,0.1,0);

	this.instance_18 = new lib.Hex();
	this.instance_18.setTransform(1120,291,0.51,0.5098,0,0,0,0.1,0.1);

	this.instance_19 = new lib.Hex();
	this.instance_19.setTransform(1120,97,0.51,0.5098,0,0,0,0.1,0.1);

	this.instance_20 = new lib.Hex();
	this.instance_20.setTransform(950,-0.05,0.64,0.6399,0,0,0,0.1,0);

	this.instance_21 = new lib.Hex();
	this.instance_21.setTransform(950,367.05,0.64,0.6399,0,0,0,0.1,0.1);

	this.instance_22 = new lib.Hex();
	this.instance_22.setTransform(950,193.05,0.64,0.6399,0,0,0,0.1,0.1);

	this.instance_23 = new lib.Hex();
	this.instance_23.setTransform(780,290.95,0.64,0.6399,0,0,0,0.1,0);

	this.instance_24 = new lib.Hex();
	this.instance_24.setTransform(780,96.95,0.64,0.6399,0,0,0,0.1,0);

	this.instance_25 = new lib.Hex();
	this.instance_25.setTransform(610,0,0.8,0.8);

	this.instance_26 = new lib.Hex();
	this.instance_26.setTransform(610,367,0.8,0.8);

	this.instance_27 = new lib.Hex();
	this.instance_27.setTransform(610,193,0.8,0.8);

	this.instance_28 = new lib.Hex();
	this.instance_28.setTransform(440,291,0.8,0.8);

	this.instance_29 = new lib.Hex();
	this.instance_29.setTransform(440,97,0.8,0.8);

	this.instance_30 = new lib.Hex();
	this.instance_30.setTransform(270,0);

	this.instance_31 = new lib.Hex();
	this.instance_31.setTransform(270,367.05);

	this.instance_32 = new lib.Hex();
	this.instance_32.setTransform(270,193.05);

	this.instance_33 = new lib.Hex();
	this.instance_33.setTransform(100,291);

	this.instance_34 = new lib.Hex();
	this.instance_34.setTransform(100,97);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Back
	this.instance_35 = new lib.CachedBmp_2();
	this.instance_35.setTransform(-213,0,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_1();
	this.instance_36.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_36},{t:this.instance_35}]}).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1).p("Ah3DQIh4jQIB4jQIDvAAIB4DQIh4DQgAjHFmIjIlcIDIlbIGPAAIDIFbIjIFcgAnzNmIn0tmIH0tlIPnAAIH0NlIn0NmgAmPK5ImQq4IGQq3IMfAAIGQK3ImQK4g");
	this.shape.setTransform(100,87);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(987,9,1413.5,446.1);
// library properties:
lib.properties = {
	id: '549BD1C215B3404DA25CAFAB6456788E',
	width: 2400,
	height: 194,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_1.png?1730063926696", id:"CachedBmp_1"},
		{src:"images/Hex Pattern Decreasing Size 80 Percent Light Blue_atlas_1.png?1730063926663", id:"Hex Pattern Decreasing Size 80 Percent Light Blue_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['549BD1C215B3404DA25CAFAB6456788E'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;