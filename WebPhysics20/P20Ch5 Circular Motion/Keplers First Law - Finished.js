(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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
// helper functions:

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


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#00FF00").ss(1,1,1,3,true).p("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");
	this.shape.setTransform(717.35,103.2286);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhUUARMQB2iNKggJQCWhlCCBRQDwAhD6hdQE/AGDbAfQDcAeAfAMQAgAMAdAnQgDBhhXANgEBFVARHQB2iNKggJQCWhlCCBRQDwAhD6hdQE/AGDbAfQDcAeAfAMQAgAMAdAnQgDBhhXANgAoURHQB2iNKfgJQCWhlCCBRQDwAhD6hdQE/AGDbAfQDcAeAfAMQAgAMAdAnQgDBhhXANgEhjrAROQAOglgYgXQgKgUA0ABQCbAUCbAFQAtgEgthFIAogjQAKAVAYAFQAziABIACQg5BjAkCjgEhq+AROQBggGBXgkQB/ADBQAngEA1+ARJQAOglgYgXQgKgUA0ABQCbAUCbAFQAtgEgthFIAogjQAKAVAYAFQAziABIACQg5BjAkCjgEAurARJQBggGBXgkQB/ADBQAngA3rRJQAOglgYgXQgKgUA0ABQCbAUCbAFQAtgEgthFIAogjQAKAVAYAFQAziABIACQg5BjAkCjgA++RJQBggGBXgkQB/ADBQAngEhbWgL1QgcifhdgXQgzAUgqgUQgUgSAUgTQBAg1BWgXQA6AZA3gyQBWgnCGATQAsgFAYAjQAdAyAxgYQBFgSgvAtQg6ALgDAxQATAqgTASQhPBkhZgVQhYBqg5AAQgnAAgYgwgAwPr3QgcifhdgXQgzAUgqgUQgUgSAUgTQBAg1BWgXQA6AZA3gyQBWgnCGATQAsgFAYAjQAdAyAxgYQBFgSgvAtQg6ALgDAxQATAqgTASQhPBkhZgVQhYBqg5AAQgnAAgYgwgEA7BgL6QgbifhegXQgzAUgpgUQgVgSAVgTQA/g1BXgXQA6AZA2gyQBWgnCGATQAsgFAZAjQAdAyAwgYQBFgSguAtQg6ALgDAxQATAqgTASQhQBkhYgVQhYBqg6AAQgmAAgZgwg");
	this.shape_1.setTransform(746.375,110.9388);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("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");
	this.shape_2.setTransform(717.35,103.2286);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1,0,1436.7,221.9), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(1,1,1).p("AkIJRQBdgUA4hUIAeAFQBJBLgMBSQBSg3AUhnIAhgBQBgApAUBRQA5hSgVhnIAXgWQBoAFAvBFQAXhhg3hYIASggQBggmBIArQgThihXg6IAKglQBKhKBSAMQg3hShogTIgLgeQAsheBRgSQhRg6hnATIgWgdQAAhoBDgyQhigUhWA8IgegRQgrhfAnhJQhhAXg1BaIgYgKQhJhLAMhSQhSA3gUBnIgeAGQhegsgRhRQg6BQARBnIgcAXQhogCgyhCQgUBhA7BXIgOAVQhhAmhHgtQARBjBXA7IgCAVQhLBJhSgMQA3BSBnAUIgCAwQgpBghRAUQBSA5BngVIAWAXQgFBohFAvQBhAXBYg3IAgASQABACABADQAiBbgmBEQgCACgBACQAEgBADgBg");
	this.shape.setTransform(65.125,65.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9933").s().p("AhVHuIgegGQg4BVhdAUIgEgCQAmhEgihbIgCgGIgggSQhYA4hhgXQBFgwAFhoIgWgXQhnAVhSg4QBRgUAphgIACgxQhngTg3hSQBSALBLhJIACgUQhXg8gRhiQBHAsBhglIAOgVQg7hXAUhiQAyBDBoACIAcgXQgRhnA6hQQARBSBeArIAegGQAUhnBSg3QgMBTBJBKIAYAKQA1haBhgYQgnBKArBeIAeASQBWg8BiAUQhDAyAABoIAWAdQBngTBRA6QhRASgsBeIALAeQBoASA3BTQhSgMhKBJIgKAlQBXA6ATBjQhIgshgAnIgSAgQA3BYgXBhQgvhFhogFIgXAVQAVBng5BTQgUhRhggpIghABQgUBnhSA3QAMhShJhLg");
	this.shape_1.setTransform(65.125,65.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1,-1,132.3,132.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC00").ss(2,1,1).p("AB+ngQA+APA4AfQALAGALAGQClALCHiVQACDFiMBmQAVAgAPAjQAJAUAHAVQAGAVAFAWQBwB7DJgJQiLCNitgcQgPBEghA8QgHAMgHALQgJCmCUCIQjGABhmiOQhEAshOATQh1BsAJDDQiHiGAVimQgrgIgmgQQgpgQglgYQingKiHCVQgBjGCNhlQgIgNgHgNQggg5gPhBQh3h9jKAIQCMiNCzAdQAGgYAHgXQAGgVAJgUQAOgfARgdQABitiViIQDIgBBsCTQAOgJAPgIQAbgPAdgLQAmgPApgJQB8htgJjJQCOCMgeCug");
	this.shape.setTransform(80.35,79.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhjHvQgqgIgogQQgogQgmgYQimgKiHCVQgCjGCNhlIgOgaQghg5gOhBQh3h9jKAIQCMiNCzAdQAGgYAHgXQAGgVAJgUQAOgfARgdQABitiUiIQDHgBBsCTQAOgJAPgIQAbgPAcgLQAmgPAqgJQB7htgIjJQCNCMgdCuQA+APA4AfIAWAMQClALCHiVQACDFiMBmQAVAgAPAjQAIAUAIAVQAGAVAFAWQBwB7DJgJQiMCNisgcQgPBEghA8IgOAXQgKCmCVCIQjGABhmiOQhEAshOATQh1BsAJDDQiIiGAWimg");
	this.shape_1.setTransform(80.35,79.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-1,-1,162.7,161.1), null);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AsvAAIAABOIhOhOIBOhNIAABNIhOAAAsvAAIatAA");
	this.shape.setTransform(-89.375,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmAAIBNAAIAABNgAgmAAIBNhMIAABMgAgmAAg");
	this.shape_1.setTransform(-174.875,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-179.7,-8.7,180.7,17.5);


(lib.Sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Centre
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFCC33").ss(1,1,1).p("AA+nwQASACARAEQBNAOBDAlQArAYAnAhQAOAMANANQACACACACIAAAAQAHAIAIAHQA7BAAhBLQAIAVAHAUQAXBIABBPQAAAEAAADQAACFg8BsQggA6gyAzQgBABgBABQgBAAgBABIgBAAQiMCNjEAGQgEAAgDAAQgFAAgFAAQhjAAhVghQhdglhMhMQAAgBAAAAQgCgBgCgCQgMgNgMgOQgigngYgrQgmhDgOhNQgEgXgCgXQgCgZAAgaQAAgDAAgEQABhPAXhIQAHgUAIgVQAhhLA8hBQAHgHAHgHQABgBABgBQABgBABgBQAzgyA6ggQAbgPAdgLQBVgiBjAAQAFAAAFAAQADAAAEAAQAXABAWACg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("AAKH0IgKAAQhiAAhWgiQhdgkhMhMIAAgBIgDgDIgZgbQgigngYgsQgmhDgNhMQgEgXgDgYQgCgZAAgZIAAgGQABhRAXhGQAHgVAIgVQAihLA7hAIAOgPIACgCIACgBQAzgzA7ggQAagPAdgLQBWgiBiAAIAKAAIAGAAQAXABAXACIAjAGQBMAOBDAlQAsAYAmAhIAcAaIAEADIAAAAIAOAQQA8BAAhBKQAIAVAHAVQAXBHABBQIAAAGQAACFg8BrQghA7gyAzIgBACIgCABIgBAAQiMCNjFAGIgGAAg");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFCC33").ss(1,1,1).p("AAKnzQADAAAEAAQAXABAWACQASACARAEQBNAOBDAlQArAYAnAhQAOAMANANQACACACACIAAAAQAHAIAIAHQA7BAAhBLQAIAVAHAUQAXBIABBPQAAAEAAADQAACFg8BsQggA6gyAzQgBABgBABQgBAAgBABIgBAAQiMCNjEAGQgEAAgDAAQgFAAgFAAQhjAAhVghQhdglhMhMQAAgBAAAAQgCgBgCgCQgMgNgMgOQgigngYgrQgmhDgOhNQgEgXgCgXQgCgZAAgaQAAgDAAgEQABhPAXhIQAHgUAIgVQAhhLA8hBQAHgHAHgHQABgBABgBQABgBABgBQAzgyA6ggQAbgPAdgLQBVgiBjAAQAFAAAFAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_2}]},240).wait(1));

	// Flames Big
	this.instance = new lib.Symbol1();
	this.instance.setTransform(-0.3,-0.5,1,1,0,0,0,80.4,79.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFCC00").ss(2,1,1).p("AD0myQALAGAKAGQCmALCHiVQABDFiLBmQAVAgAPAjQAJAUAHAVQAGAVAFAWQBwB7DJgJQiLCNitgcQgPBEghA8QgHAMgHALQgJCmCUCIQjGABhmiOIAAAAQhEAshOATQh1BsAJDDQiIiGAWimQgqgIgogQQgogQgmgYQimgKiHCVQgBjGCMhlQgHgNgIgNQggg5gPhBQh3h9jJAIQCMiNCzAdQAFgYAIgXQAGgVAJgUQAOgfARgdQABitiViIQDIgBBsCTQAOgJAPgIQAbgPAcgLQAngPApgJQB8htgJjJQCOCMgeCuQA+APA4Afg");
	this.shape_3.setTransform(-0.35,-0.475);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("AhjHvQgqgIgogQQgogQgmgYQimgKiHCVQgBjGCNhlIgQgaQggg5gOhBQh4h9jJAIQCNiNCyAdQAFgYAIgXQAGgVAJgUQAOgfARgdQABitiUiIQDHgBBsCTIAdgRQAbgPAcgLQAngPApgJQB8htgKjJQCPCMgeCuQA+APA4AfIAVAMQCmALCHiVQABDFiLBmQAVAgAPAjQAJAUAHAVQAGAVAFAWQBvB7DKgJQiLCNitgcQgPBEghA8IgOAXQgKCmCVCIQjGABhmiOIAAAAQhEAshPASQh0BtAIDDQiHiGAWimg");
	this.shape_4.setTransform(-0.35,-0.475);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:80.3,rotation:-1.5063,x:-0.4},0).wait(1).to({rotation:-3.0126,x:-0.35,y:-0.45},0).wait(1).to({rotation:-4.5188,x:-0.4,y:-0.5},0).wait(1).to({rotation:-6.0251},0).wait(1).to({rotation:-7.5314,y:-0.45},0).wait(1).to({rotation:-9.0377,x:-0.35},0).wait(1).to({rotation:-10.5439,y:-0.5},0).wait(1).to({rotation:-12.0502,y:-0.45},0).wait(1).to({rotation:-13.5565},0).wait(1).to({rotation:-15.0628},0).wait(1).to({rotation:-16.569,x:-0.4},0).wait(1).to({rotation:-18.0753,y:-0.4},0).wait(1).to({rotation:-19.5816,x:-0.35,y:-0.45},0).wait(1).to({rotation:-21.0879,x:-0.4},0).wait(1).to({rotation:-22.5941,x:-0.35},0).wait(1).to({rotation:-24.1004,x:-0.4,y:-0.5},0).wait(1).to({rotation:-25.6067,y:-0.45},0).wait(1).to({rotation:-27.113,x:-0.35},0).wait(1).to({rotation:-28.6192},0).wait(1).to({rotation:-30.1255},0).wait(1).to({rotation:-31.6318,x:-0.4,y:-0.4},0).wait(1).to({rotation:-33.1381,x:-0.35,y:-0.45},0).wait(1).to({rotation:-34.6444},0).wait(1).to({rotation:-36.1506,y:-0.4},0).wait(1).to({rotation:-37.6569,x:-0.4,y:-0.45},0).wait(1).to({rotation:-39.1632,y:-0.4},0).wait(1).to({rotation:-40.6695,y:-0.45},0).wait(1).to({rotation:-42.1757,x:-0.35},0).wait(1).to({rotation:-43.682,x:-0.4,y:-0.4},0).wait(1).to({rotation:-45.1883,x:-0.35,y:-0.45},0).wait(1).to({rotation:-46.6946,y:-0.5},0).wait(1).to({rotation:-48.2008,x:-0.4,y:-0.45},0).wait(1).to({rotation:-49.7071,x:-0.35,y:-0.5},0).wait(1).to({rotation:-51.2134,x:-0.4},0).wait(1).to({rotation:-52.7197,x:-0.35},0).wait(1).to({rotation:-54.2259},0).wait(1).to({rotation:-55.7322},0).wait(1).to({rotation:-57.2385,y:-0.55},0).wait(1).to({rotation:-58.7448,x:-0.4,y:-0.5},0).wait(1).to({rotation:-60.251,x:-0.35,y:-0.45},0).wait(1).to({rotation:-61.7573,y:-0.5},0).wait(1).to({rotation:-63.2636},0).wait(1).to({rotation:-64.7699},0).wait(1).to({rotation:-66.2762,y:-0.45},0).wait(1).to({rotation:-67.7824,y:-0.5},0).wait(1).to({rotation:-69.2887},0).wait(1).to({rotation:-70.795,x:-0.4},0).wait(1).to({rotation:-72.3013,x:-0.35},0).wait(1).to({rotation:-73.8075},0).wait(1).to({rotation:-75.3138},0).wait(1).to({rotation:-76.8201,y:-0.45},0).wait(1).to({rotation:-78.3264},0).wait(1).to({rotation:-79.8326},0).wait(1).to({rotation:-81.3389,x:-0.3,y:-0.5},0).wait(1).to({rotation:-82.8452,y:-0.45},0).wait(1).to({rotation:-84.3515,x:-0.35,y:-0.5},0).wait(1).to({rotation:-85.8577,x:-0.3},0).wait(1).to({rotation:-87.364,x:-0.35,y:-0.45},0).wait(1).to({rotation:-88.8703,x:-0.3,y:-0.5},0).wait(1).to({rotation:-90.3766,x:-0.35,y:-0.45},0).wait(1).to({rotation:-91.8828},0).wait(1).to({rotation:-93.3891},0).wait(1).to({rotation:-94.8954,y:-0.5},0).wait(1).to({rotation:-96.4017,x:-0.3,y:-0.45},0).wait(1).to({rotation:-97.9079,y:-0.5},0).wait(1).to({rotation:-99.4142,y:-0.45},0).wait(1).to({rotation:-100.9205},0).wait(1).to({rotation:-102.4268},0).wait(1).to({rotation:-103.9331,x:-0.35,y:-0.5},0).wait(1).to({rotation:-105.4393,x:-0.3,y:-0.45},0).wait(1).to({rotation:-106.9456},0).wait(1).to({rotation:-108.4519},0).wait(1).to({rotation:-109.9582,x:-0.25,y:-0.5},0).wait(1).to({rotation:-111.4644,x:-0.3},0).wait(1).to({rotation:-112.9707},0).wait(1).to({rotation:-114.477},0).wait(1).to({rotation:-115.9833,x:-0.35},0).wait(1).to({rotation:-117.4895,x:-0.3},0).wait(1).to({rotation:-118.9958,x:-0.25},0).wait(1).to({rotation:-120.5021,x:-0.3},0).wait(1).to({rotation:-122.0084},0).wait(1).to({rotation:-123.5146},0).wait(1).to({rotation:-125.0209,y:-0.45},0).wait(1).to({rotation:-126.5272,y:-0.5},0).wait(1).to({rotation:-128.0335},0).wait(1).to({rotation:-129.5397},0).wait(1).to({rotation:-131.046,y:-0.45},0).wait(1).to({rotation:-132.5523},0).wait(1).to({rotation:-134.0586,y:-0.5},0).wait(1).to({rotation:-135.5649,x:-0.35,y:-0.45},0).wait(1).to({rotation:-137.0711,y:-0.5},0).wait(1).to({rotation:-138.5774,x:-0.3},0).wait(1).to({rotation:-140.0837,x:-0.35},0).wait(1).to({rotation:-141.59,x:-0.3},0).wait(1).to({rotation:-143.0962,y:-0.45},0).wait(1).to({rotation:-144.6025,x:-0.35,y:-0.5},0).wait(1).to({rotation:-146.1088,x:-0.3,y:-0.55},0).wait(1).to({rotation:-147.6151,y:-0.5},0).wait(1).to({rotation:-149.1213},0).wait(1).to({rotation:-150.6276,x:-0.35,y:-0.55},0).wait(1).to({rotation:-152.1339},0).wait(1).to({rotation:-153.6402,y:-0.5},0).wait(1).to({rotation:-155.1464},0).wait(1).to({rotation:-156.6527,x:-0.3},0).wait(1).to({rotation:-158.159},0).wait(1).to({rotation:-159.6653},0).wait(1).to({rotation:-161.1715,x:-0.35},0).wait(1).to({rotation:-162.6778},0).wait(1).to({rotation:-164.1841,y:-0.55},0).wait(1).to({rotation:-165.6904,x:-0.3},0).wait(1).to({rotation:-167.1967,x:-0.35,y:-0.5},0).wait(1).to({rotation:-168.7029,y:-0.55},0).wait(1).to({rotation:-170.2092,y:-0.5},0).wait(1).to({rotation:-171.7155,x:-0.3},0).wait(1).to({rotation:-173.2218,y:-0.55},0).wait(1).to({rotation:-174.728},0).wait(1).to({rotation:-176.2343,x:-0.35,y:-0.5},0).wait(1).to({rotation:-177.7406,x:-0.3},0).wait(1).to({rotation:-179.2469,x:-0.35,y:-0.55},0).wait(1).to({rotation:-180.7531},0).wait(1).to({rotation:-182.2594},0).wait(1).to({rotation:-183.7657},0).wait(1).to({rotation:-185.272,x:-0.3,y:-0.5},0).wait(1).to({rotation:-186.7782,x:-0.35},0).wait(1).to({rotation:-188.2845,x:-0.3,y:-0.55},0).wait(1).to({rotation:-189.7908,x:-0.35},0).wait(1).to({rotation:-191.2971,x:-0.3,y:-0.5},0).wait(1).to({rotation:-192.8033},0).wait(1).to({rotation:-194.3096,y:-0.55},0).wait(1).to({rotation:-195.8159},0).wait(1).to({rotation:-197.3222},0).wait(1).to({rotation:-198.8285},0).wait(1).to({rotation:-200.3347,x:-0.35},0).wait(1).to({rotation:-201.841},0).wait(1).to({rotation:-203.3473,x:-0.3,y:-0.6},0).wait(1).to({rotation:-204.8536,y:-0.55},0).wait(1).to({rotation:-206.3598,x:-0.35},0).wait(1).to({rotation:-207.8661},0).wait(1).to({rotation:-209.3724},0).wait(1).to({rotation:-210.8787,x:-0.3,y:-0.6},0).wait(1).to({rotation:-212.3849,x:-0.35},0).wait(1).to({rotation:-213.8912,y:-0.55},0).wait(1).to({rotation:-215.3975},0).wait(1).to({rotation:-216.9038},0).wait(1).to({rotation:-218.41,x:-0.3},0).wait(1).to({rotation:-219.9163,x:-0.35,y:-0.5},0).wait(1).to({rotation:-221.4226},0).wait(1).to({rotation:-222.9289,y:-0.55},0).wait(1).to({rotation:-224.4351},0).wait(1).to({rotation:-225.9414},0).wait(1).to({rotation:-227.4477,x:-0.3,y:-0.5},0).wait(1).to({rotation:-228.954,x:-0.35},0).wait(1).to({rotation:-230.4603,x:-0.3},0).wait(1).to({rotation:-231.9665,y:-0.55},0).wait(1).to({rotation:-233.4728,x:-0.35,y:-0.45},0).wait(1).to({rotation:-234.9791,y:-0.5},0).wait(1).to({rotation:-236.4854,x:-0.4},0).wait(1).to({rotation:-237.9916,x:-0.3},0).wait(1).to({rotation:-239.4979,x:-0.35},0).wait(1).to({rotation:-241.0042},0).wait(1).to({rotation:-242.5105,x:-0.3},0).wait(1).to({rotation:-244.0167,x:-0.35},0).wait(1).to({rotation:-245.523},0).wait(1).to({rotation:-247.0293,y:-0.55},0).wait(1).to({rotation:-248.5356,x:-0.4,y:-0.5},0).wait(1).to({rotation:-250.0418,x:-0.35},0).wait(1).to({rotation:-251.5481,y:-0.55},0).wait(1).to({rotation:-253.0544,y:-0.5},0).wait(1).to({rotation:-254.5607,x:-0.4},0).wait(1).to({rotation:-256.0669,x:-0.35},0).wait(1).to({rotation:-257.5732,x:-0.4,y:-0.55},0).wait(1).to({rotation:-259.0795,x:-0.35,y:-0.5},0).wait(1).to({rotation:-260.5858,x:-0.4,y:-0.55},0).wait(1).to({rotation:-262.0921,y:-0.5},0).wait(1).to({rotation:-263.5983,x:-0.35},0).wait(1).to({rotation:-265.1046,y:-0.55},0).wait(1).to({rotation:-266.6109},0).wait(1).to({rotation:-268.1172,x:-0.4,y:-0.5},0).wait(1).to({rotation:-269.6234},0).wait(1).to({rotation:-271.1297,x:-0.35,y:-0.55},0).wait(1).to({rotation:-272.636},0).wait(1).to({rotation:-274.1423,x:-0.4,y:-0.5},0).wait(1).to({rotation:-275.6485,x:-0.35,y:-0.55},0).wait(1).to({rotation:-277.1548,x:-0.4},0).wait(1).to({rotation:-278.6611},0).wait(1).to({rotation:-280.1674,y:-0.5},0).wait(1).to({rotation:-281.6736},0).wait(1).to({rotation:-283.1799},0).wait(1).to({rotation:-284.6862},0).wait(1).to({rotation:-286.1925,y:-0.55},0).wait(1).to({rotation:-287.6987},0).wait(1).to({rotation:-289.205,y:-0.5},0).wait(1).to({rotation:-290.7113,y:-0.55},0).wait(1).to({rotation:-292.2176,y:-0.5},0).wait(1).to({rotation:-293.7238},0).wait(1).to({rotation:-295.2301,x:-0.35},0).wait(1).to({rotation:-296.7364,x:-0.4,y:-0.55},0).wait(1).to({rotation:-298.2427},0).wait(1).to({rotation:-299.749,x:-0.35},0).wait(1).to({rotation:-301.2552,x:-0.4,y:-0.5},0).wait(1).to({rotation:-302.7615},0).wait(1).to({rotation:-304.2678,y:-0.55},0).wait(1).to({rotation:-305.7741},0).wait(1).to({rotation:-307.2803,y:-0.5},0).wait(1).to({rotation:-308.7866},0).wait(1).to({rotation:-310.2929},0).wait(1).to({rotation:-311.7992},0).wait(1).to({rotation:-313.3054,y:-0.45},0).wait(1).to({rotation:-314.8117,x:-0.35,y:-0.5},0).wait(1).to({rotation:-316.318,x:-0.4},0).wait(1).to({rotation:-317.8243,y:-0.55},0).wait(1).to({rotation:-319.3305,x:-0.35,y:-0.5},0).wait(1).to({rotation:-320.8368},0).wait(1).to({rotation:-322.3431},0).wait(1).to({rotation:-323.8494},0).wait(1).to({rotation:-325.3556,x:-0.4},0).wait(1).to({rotation:-326.8619,x:-0.35},0).wait(1).to({rotation:-328.3682,x:-0.4},0).wait(1).to({rotation:-329.8745,x:-0.35},0).wait(1).to({rotation:-331.3808,x:-0.4},0).wait(1).to({rotation:-332.887,x:-0.35},0).wait(1).to({rotation:-334.3933},0).wait(1).to({rotation:-335.8996},0).wait(1).to({rotation:-337.4059},0).wait(1).to({rotation:-338.9121,x:-0.4,y:-0.45},0).wait(1).to({rotation:-340.4184,y:-0.5},0).wait(1).to({rotation:-341.9247,x:-0.35},0).wait(1).to({rotation:-343.431},0).wait(1).to({rotation:-344.9372},0).wait(1).to({rotation:-346.4435,x:-0.4},0).wait(1).to({rotation:-347.9498,x:-0.35},0).wait(1).to({rotation:-349.4561},0).wait(1).to({rotation:-350.9623,x:-0.4},0).wait(1).to({rotation:-352.4686,x:-0.35},0).wait(1).to({rotation:-353.9749,x:-0.4,y:-0.45},0).wait(1).to({rotation:-355.4812,x:-0.35},0).wait(1).to({rotation:-356.9874,x:-0.4,y:-0.5},0).wait(1).to({rotation:-358.4937},0).wait(1).to({rotation:-360},0).to({_off:true},1).wait(1));

	// Flames Small
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(0.35,-0.05,1,1,0,0,0,65.1,65.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FF0000").ss(1,1,1).p("AkIJRQBdgUA4hUIAeAFQBJBLgMBSQBSg3AUhnIAhgBQBgApAUBRQA5hSgVhnIAXgWQBoAFAvBFQAXhhg3hYIASggQBggmBIArQgThihXg6IAKglQBKhKBSAMQg3hShogTIgLgeQAsheBRgSQhRg6hnATIgWgdQAAhoBDgyQhigUhWA8IgegRQgrhfAnhJQhhAXg1BaIgYgKQhJhLAMhSQhSA3gUBnIgeAGQhegsgRhRQg6BQARBnIgcAWQhogBgyhCQgUBhA7BXIgOAVQhhAmhHgtQARBjBXA7IgCAVQhLBJhSgMQA3BSBnAUIgCAwQgpBghRAUQBSA5BngVIAWAXQgFBohFAvQBhAXBYg3IAgASQABACABADQAiBagnBFQgBACgBACQAEgBADgBg");
	this.shape_5.setTransform(0.375,-0.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF9933").s().p("AhVHuIgegGQg4BVhdAUIgFgCQAnhFgihaIgCgGIgggSQhYA4hhgXQBFgwAFhoIgWgWQhnAUhSg4QBRgUAphgIACgxQhngTg3hSQBSAMBLhKIACgUQhXg7gRhjQBHAtBhgmIAOgVQg7hXAUhiQAyBDBoACIAcgXQgRhnA6hQQARBRBeAsIAegGQAUhnBSg3QgMBSBJBLIAYAKQA1haBhgXQgnBJArBeIAeASQBWg8BiAUQhDAyAABoIAWAcQBngSBRA6QhRASgsBeIALAdQBoAUA3BSQhSgMhKBJIgKAlQBXA7ATBiQhIgrhgAmIgSAgQA3BYgXBhQgvhFhogFIgXAWQAVBmg5BTQgUhRhggpIghABQgUBnhSA3QAMhShJhLg");
	this.shape_6.setTransform(0.375,-0.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:1.5063,x:0.4,y:0},0).wait(1).to({rotation:3.0126,y:-0.05},0).wait(1).to({rotation:4.5188,x:0.35,y:0},0).wait(1).to({rotation:6.0251},0).wait(1).to({rotation:7.5314},0).wait(1).to({rotation:9.0377},0).wait(1).to({rotation:10.5439,x:0.4,y:-0.05},0).wait(1).to({rotation:12.0502,x:0.35},0).wait(1).to({rotation:13.5565,x:0.4,y:0},0).wait(1).to({rotation:15.0628,y:-0.05},0).wait(1).to({rotation:16.569},0).wait(1).to({rotation:18.0753,y:0},0).wait(1).to({rotation:19.5816,y:-0.05},0).wait(1).to({rotation:21.0879},0).wait(1).to({rotation:22.5941},0).wait(1).to({rotation:24.1004,y:0},0).wait(1).to({rotation:25.6067,x:0.35},0).wait(1).to({rotation:27.113,x:0.4,y:-0.05},0).wait(1).to({rotation:28.6192,x:0.35,y:0},0).wait(1).to({rotation:30.1255,x:0.4,y:-0.05},0).wait(1).to({rotation:31.6318,y:0},0).wait(1).to({rotation:33.1381,x:0.35},0).wait(1).to({rotation:34.6444,x:0.4,y:-0.05},0).wait(1).to({rotation:36.1506,x:0.35},0).wait(1).to({rotation:37.6569,x:0.4},0).wait(1).to({rotation:39.1632,x:0.35},0).wait(1).to({rotation:40.6695,x:0.4},0).wait(1).to({rotation:42.1757},0).wait(1).to({rotation:43.682,y:0},0).wait(1).to({rotation:45.1883,x:0.35},0).wait(1).to({rotation:46.6946,y:-0.05},0).wait(1).to({rotation:48.2008,x:0.3,y:0},0).wait(1).to({rotation:49.7071,x:0.35,y:-0.05},0).wait(1).to({rotation:51.2134,y:0},0).wait(1).to({rotation:52.7197},0).wait(1).to({rotation:54.2259,y:-0.05},0).wait(1).to({rotation:55.7322,x:0.3},0).wait(1).to({rotation:57.2385,x:0.35,y:0},0).wait(1).to({rotation:58.7448},0).wait(1).to({rotation:60.251,y:-0.05},0).wait(1).to({rotation:61.7573,x:0.3},0).wait(1).to({rotation:63.2636,x:0.35,y:0},0).wait(1).to({rotation:64.7699,x:0.3},0).wait(1).to({rotation:66.2762,x:0.35},0).wait(1).to({rotation:67.7824,y:-0.05},0).wait(1).to({rotation:69.2887,x:0.3},0).wait(1).to({rotation:70.795,y:0},0).wait(1).to({rotation:72.3013,x:0.35,y:-0.05},0).wait(1).to({rotation:73.8075},0).wait(1).to({rotation:75.3138},0).wait(1).to({rotation:76.8201,x:0.3,y:0},0).wait(1).to({rotation:78.3264,y:-0.05},0).wait(1).to({rotation:79.8326,y:0},0).wait(1).to({rotation:81.3389,x:0.35,y:-0.05},0).wait(1).to({rotation:82.8452,x:0.3},0).wait(1).to({rotation:84.3515,y:0},0).wait(1).to({rotation:85.8577},0).wait(1).to({rotation:87.364},0).wait(1).to({rotation:88.8703,x:0.35},0).wait(1).to({rotation:90.3766,x:0.3,y:-0.05},0).wait(1).to({rotation:91.8828,x:0.35},0).wait(1).to({rotation:93.3891,x:0.3,y:0},0).wait(1).to({rotation:94.8954,x:0.35,y:-0.05},0).wait(1).to({rotation:96.4017,y:0},0).wait(1).to({rotation:97.9079,x:0.3},0).wait(1).to({rotation:99.4142,x:0.35,y:-0.05},0).wait(1).to({rotation:100.9205},0).wait(1).to({rotation:102.4268},0).wait(1).to({rotation:103.9331,x:0.3},0).wait(1).to({rotation:105.4393},0).wait(1).to({rotation:106.9456,x:0.35,y:0},0).wait(1).to({rotation:108.4519},0).wait(1).to({rotation:109.9582},0).wait(1).to({rotation:111.4644},0).wait(1).to({rotation:112.9707,x:0.3},0).wait(1).to({rotation:114.477,x:0.35},0).wait(1).to({rotation:115.9833},0).wait(1).to({rotation:117.4895,x:0.3,y:-0.05},0).wait(1).to({rotation:118.9958,y:0},0).wait(1).to({rotation:120.5021},0).wait(1).to({rotation:122.0084,x:0.35},0).wait(1).to({rotation:123.5146,x:0.3},0).wait(1).to({rotation:125.0209,x:0.35,y:-0.05},0).wait(1).to({rotation:126.5272},0).wait(1).to({rotation:128.0335,x:0.3,y:0},0).wait(1).to({rotation:129.5397,y:-0.05},0).wait(1).to({rotation:131.046,y:0},0).wait(1).to({rotation:132.5523,x:0.35},0).wait(1).to({rotation:134.0586},0).wait(1).to({rotation:135.5649,x:0.3,y:-0.05},0).wait(1).to({rotation:137.0711,x:0.35},0).wait(1).to({rotation:138.5774,y:-0.1},0).wait(1).to({rotation:140.0837},0).wait(1).to({rotation:141.59,y:-0.05},0).wait(1).to({rotation:143.0962,x:0.3},0).wait(1).to({rotation:144.6025,x:0.35},0).wait(1).to({rotation:146.1088,x:0.3,y:-0.1},0).wait(1).to({rotation:147.6151,x:0.35,y:-0.05},0).wait(1).to({rotation:149.1213},0).wait(1).to({rotation:150.6276,x:0.3},0).wait(1).to({rotation:152.1339},0).wait(1).to({rotation:153.6402,y:-0.1},0).wait(1).to({rotation:155.1464,x:0.35,y:-0.05},0).wait(1).to({rotation:156.6527},0).wait(1).to({rotation:158.159,x:0.3,y:-0.1},0).wait(1).to({rotation:159.6653,x:0.35},0).wait(1).to({rotation:161.1715,y:-0.05},0).wait(1).to({rotation:162.6778,x:0.3},0).wait(1).to({rotation:164.1841,y:-0.1},0).wait(1).to({rotation:165.6904},0).wait(1).to({rotation:167.1967,y:-0.05},0).wait(1).to({rotation:168.7029,y:-0.1},0).wait(1).to({rotation:170.2092,x:0.35},0).wait(1).to({rotation:171.7155,y:-0.05},0).wait(1).to({rotation:173.2218,x:0.3},0).wait(1).to({rotation:174.728,x:0.35},0).wait(1).to({rotation:176.2343,x:0.3},0).wait(1).to({rotation:177.7406,x:0.35,y:-0.1},0).wait(1).to({rotation:179.2469},0).wait(1).to({rotation:180.7531,x:0.3,y:-0.05},0).wait(1).to({rotation:182.2594},0).wait(1).to({rotation:183.7657,x:0.35,y:-0.1},0).wait(1).to({rotation:185.272,y:-0.05},0).wait(1).to({rotation:186.7782,y:-0.1},0).wait(1).to({rotation:188.2845,y:-0.05},0).wait(1).to({rotation:189.7908,x:0.3},0).wait(1).to({rotation:191.2971,y:-0.1},0).wait(1).to({rotation:192.8033,x:0.35},0).wait(1).to({rotation:194.3096,x:0.3},0).wait(1).to({rotation:195.8159},0).wait(1).to({rotation:197.3222,x:0.35},0).wait(1).to({rotation:198.8285,y:-0.05},0).wait(1).to({rotation:200.3347,x:0.3},0).wait(1).to({rotation:201.841,y:-0.1},0).wait(1).to({rotation:203.3473,x:0.35,y:-0.05},0).wait(1).to({rotation:204.8536},0).wait(1).to({rotation:206.3598,x:0.3,y:-0.1},0).wait(1).to({rotation:207.8661,x:0.35},0).wait(1).to({rotation:209.3724},0).wait(1).to({rotation:210.8787,y:-0.05},0).wait(1).to({rotation:212.3849},0).wait(1).to({rotation:213.8912,x:0.3,y:-0.1},0).wait(1).to({rotation:215.3975,x:0.35,y:-0.05},0).wait(1).to({rotation:216.9038,y:-0.1},0).wait(1).to({rotation:218.41,y:-0.05},0).wait(1).to({rotation:219.9163,x:0.3},0).wait(1).to({rotation:221.4226},0).wait(1).to({rotation:222.9289,x:0.35},0).wait(1).to({rotation:224.4351,y:-0.1},0).wait(1).to({rotation:225.9414,x:0.4,y:-0.05},0).wait(1).to({rotation:227.4477},0).wait(1).to({rotation:228.954,y:-0.1},0).wait(1).to({rotation:230.4603,x:0.35},0).wait(1).to({rotation:231.9665,x:0.4},0).wait(1).to({rotation:233.4728,x:0.35,y:-0.05},0).wait(1).to({rotation:234.9791},0).wait(1).to({rotation:236.4854,x:0.4,y:-0.1},0).wait(1).to({rotation:237.9916,y:-0.05},0).wait(1).to({rotation:239.4979,y:-0.1},0).wait(1).to({rotation:241.0042},0).wait(1).to({rotation:242.5105,x:0.35},0).wait(1).to({rotation:244.0167,x:0.4,y:-0.05},0).wait(1).to({rotation:245.523},0).wait(1).to({rotation:247.0293,y:-0.1},0).wait(1).to({rotation:248.5356,y:-0.05},0).wait(1).to({rotation:250.0418},0).wait(1).to({rotation:251.5481},0).wait(1).to({rotation:253.0544},0).wait(1).to({rotation:254.5607,x:0.35,y:-0.1},0).wait(1).to({rotation:256.0669},0).wait(1).to({rotation:257.5732,y:-0.05},0).wait(1).to({rotation:259.0795},0).wait(1).to({rotation:260.5858},0).wait(1).to({rotation:262.0921,x:0.4,y:-0.1},0).wait(1).to({rotation:263.5983,y:-0.05},0).wait(1).to({rotation:265.1046,x:0.35},0).wait(1).to({rotation:266.6109,x:0.4,y:-0.1},0).wait(1).to({rotation:268.1172,x:0.35,y:-0.05},0).wait(1).to({rotation:269.6234,y:-0.1},0).wait(1).to({rotation:271.1297,x:0.4,y:-0.05},0).wait(1).to({rotation:272.636,y:-0.1},0).wait(1).to({rotation:274.1423},0).wait(1).to({rotation:275.6485},0).wait(1).to({rotation:277.1548,x:0.35},0).wait(1).to({rotation:278.6611,y:-0.05},0).wait(1).to({rotation:280.1674,x:0.4,y:-0.1},0).wait(1).to({rotation:281.6736,x:0.35},0).wait(1).to({rotation:283.1799,x:0.4},0).wait(1).to({rotation:284.6862,x:0.35,y:-0.05},0).wait(1).to({rotation:286.1925},0).wait(1).to({rotation:287.6987},0).wait(1).to({rotation:289.205,x:0.4,y:-0.1},0).wait(1).to({rotation:290.7113,x:0.35},0).wait(1).to({rotation:292.2176,y:-0.05},0).wait(1).to({rotation:293.7238,x:0.4},0).wait(1).to({rotation:295.2301,y:-0.1},0).wait(1).to({rotation:296.7364,y:-0.05},0).wait(1).to({rotation:298.2427,x:0.35,y:-0.1},0).wait(1).to({rotation:299.749,y:-0.05},0).wait(1).to({rotation:301.2552,x:0.4},0).wait(1).to({rotation:302.7615},0).wait(1).to({rotation:304.2678,x:0.35,y:-0.1},0).wait(1).to({rotation:305.7741,y:-0.05},0).wait(1).to({rotation:307.2803,x:0.4},0).wait(1).to({rotation:308.7866},0).wait(1).to({rotation:310.2929,x:0.35},0).wait(1).to({rotation:311.7992,x:0.4,y:-0.1},0).wait(1).to({rotation:313.3054,x:0.35,y:-0.05},0).wait(1).to({rotation:314.8117,x:0.4},0).wait(1).to({rotation:316.318,y:0},0).wait(1).to({rotation:317.8243,x:0.35},0).wait(1).to({rotation:319.3305},0).wait(1).to({rotation:320.8368,y:-0.05},0).wait(1).to({rotation:322.3431,y:0},0).wait(1).to({rotation:323.8494,y:-0.05},0).wait(1).to({rotation:325.3556,y:0},0).wait(1).to({rotation:326.8619,x:0.4,y:-0.05},0).wait(1).to({rotation:328.3682,y:0},0).wait(1).to({rotation:329.8745,x:0.35},0).wait(1).to({rotation:331.3808,x:0.4,y:-0.05},0).wait(1).to({rotation:332.887,x:0.35,y:0},0).wait(1).to({rotation:334.3933,x:0.4,y:-0.05},0).wait(1).to({rotation:335.8996,y:0},0).wait(1).to({rotation:337.4059,x:0.35},0).wait(1).to({rotation:338.9121},0).wait(1).to({rotation:340.4184},0).wait(1).to({rotation:341.9247,x:0.4},0).wait(1).to({rotation:343.431,x:0.35},0).wait(1).to({rotation:344.9372},0).wait(1).to({rotation:346.4435,x:0.4},0).wait(1).to({rotation:347.9498,x:0.35,y:-0.05},0).wait(1).to({rotation:349.4561,y:0},0).wait(1).to({rotation:350.9623,x:0.4,y:-0.05},0).wait(1).to({rotation:352.4686},0).wait(1).to({rotation:353.9749},0).wait(1).to({rotation:355.4812},0).wait(1).to({rotation:356.9874,x:0.35,y:0},0).wait(1).to({rotation:358.4937,x:0.4},0).wait(1).to({rotation:360,x:0.35,y:-0.05},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81.9,-82,163.2,163.1);


(lib.Earth = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_29 = function() {
		/* gotoAndPlay(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AuYOZQl+l9ABocQgBobF+l9QF9l+IbABQIcgBF9F+QF+F9gBIbQABIcl+F9Ql9F+ocgBQobABl9l+g");

	// Land
	this.instance = new lib.Symbol3();
	this.instance.setTransform(2.85,15.6,1,1,0,0,0,717.4,111);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:110.9,x:-14.25,y:15.5},0).wait(1).to({x:-31.4},0).wait(1).to({x:-48.55},0).wait(1).to({x:-65.7},0).wait(1).to({x:-82.85},0).wait(1).to({x:-100},0).wait(1).to({x:-117.15},0).wait(1).to({x:-134.3},0).wait(1).to({x:-151.45},0).wait(1).to({x:-168.6},0).wait(1).to({x:-185.75},0).wait(1).to({x:-202.9},0).wait(1).to({x:-220.05},0).wait(1).to({x:-237.2},0).wait(1).to({x:-254.35},0).wait(1).to({x:-271.5},0).wait(1).to({x:-288.65},0).wait(1).to({x:-305.8},0).wait(1).to({x:-322.95},0).wait(1).to({x:-340.1},0).wait(1).to({x:-357.25},0).wait(1).to({x:-374.4},0).wait(1).to({x:-391.55},0).wait(1).to({x:-408.7},0).wait(1).to({x:-425.85},0).wait(1).to({x:-443},0).wait(1).to({x:-460.15},0).wait(1).to({x:-477.3},0).wait(2));

	// Water
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("EhyIAU3MAAAgptMDkRAAAMAAAAptg");
	this.shape.setTransform(4.45,-8.525);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(30));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.2,-130.2,260.5,256.7);


(lib.OrbitK1noareas = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_359 = function() {
		/* gotoAndPlay(1);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(359).call(this.frame_359).wait(1));

	// Earth animation
	this.instance = new lib.Earth();
	this.instance.setTransform(0,0,0.1896,0.1896,0,0,0,3.7,-5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:0,regY:-1.9,scaleX:0.1897,scaleY:0.1897,x:-1.7,y:-10.85},0).wait(1).to({x:-4.05,y:-22.15},0).wait(1).to({x:-7.7,y:-33.05},0).wait(1).to({x:-12.55,y:-43.55},0).wait(1).to({x:-18.5,y:-53.45},0).wait(1).to({x:-25.3,y:-62.7},0).wait(1).to({x:-32.85,y:-71.4},0).wait(1).to({x:-41.05,y:-79.55},0).wait(1).to({x:-49.75,y:-87.1},0).wait(1).to({x:-58.9,y:-94.2},0).wait(1).to({x:-68.3,y:-100.8},0).wait(1).to({x:-78.05,y:-107},0).wait(1).to({x:-88,y:-112.85},0).wait(1).to({x:-98.15,y:-118.35},0).wait(1).to({x:-108.45,y:-123.5},0).wait(1).to({x:-118.9,y:-128.4},0).wait(1).to({x:-129.45,y:-133.05},0).wait(1).to({x:-140.1,y:-137.45},0).wait(1).to({x:-150.85,y:-141.65},0).wait(1).to({x:-161.7,y:-145.65},0).wait(1).to({x:-172.55,y:-149.45},0).wait(1).to({x:-183.5,y:-153.1},0).wait(1).to({x:-194.5,y:-156.55},0).wait(1).to({x:-205.55,y:-159.85},0).wait(1).to({x:-216.65,y:-163.05},0).wait(1).to({x:-227.75,y:-166.1},0).wait(1).to({x:-238.9,y:-169.05},0).wait(1).to({x:-250.1,y:-171.85},0).wait(1).to({x:-261.35,y:-174.55},0).wait(1).to({x:-270.05,y:-176.35},0).wait(1).to({x:-278.8,y:-178.1},0).wait(1).to({x:-287.3,y:-177},0).wait(1).to({x:-295.85,y:-179.2},0).wait(1).to({x:-304.6,y:-180.65},0).wait(1).to({x:-313.5,y:-181.25},0).wait(1).to({x:-322.35,y:-182.2},0).wait(1).to({x:-331.2,y:-183.4},0).wait(1).to({x:-339.95,y:-184.75},0).wait(1).to({x:-348.75,y:-186.25},0).wait(1).to({x:-357.5,y:-187.95},0).wait(1).to({x:-366.2,y:-189.7},0).wait(1).to({x:-375.05,y:-191},0).wait(1).to({x:-383.85,y:-192.05},0).wait(1).to({x:-392.75,y:-192.9},0).wait(1).to({x:-401.6,y:-193.6},0).wait(1).to({x:-410.5,y:-194.2},0).wait(1).to({x:-419.4,y:-194.7},0).wait(1).to({x:-428.3,y:-195.1},0).wait(1).to({x:-437.2,y:-195.4},0).wait(1).to({x:-446.1,y:-195.7},0).wait(1).to({x:-455,y:-195.9},0).wait(1).to({x:-463.9,y:-196.05},0).wait(1).to({x:-472.8,y:-196.15},0).wait(1).to({x:-481.7,y:-196.2},0).wait(1).to({x:-490.6},0).wait(1).to({x:-499.5,y:-196.1},0).wait(1).to({x:-508.4,y:-195.95},0).wait(1).to({x:-517.35,y:-195.75},0).wait(1).to({x:-526.25,y:-195.35},0).wait(1).to({x:-532.85,y:-195.1},0).wait(1).to({x:-539.85,y:-194.7},0).wait(1).to({x:-546.65,y:-194.25},0).wait(1).to({x:-553.45,y:-193.65},0).wait(1).to({x:-560.25,y:-193},0).wait(1).to({x:-566.85,y:-192.3},0).wait(1).to({x:-573.8,y:-191.6},0).wait(1).to({x:-580.6,y:-191.05},0).wait(1).to({x:-587.4,y:-190.5},0).wait(1).to({x:-594.2,y:-189.95},0).wait(1).to({x:-601,y:-189.5},0).wait(1).to({x:-607.8,y:-189.15},0).wait(1).to({x:-614.65,y:-188.85},0).wait(1).to({x:-621.15,y:-188.3},0).wait(1).to({x:-628.15,y:-187.25},0).wait(1).to({x:-634.9,y:-186.3},0).wait(1).to({x:-641.65,y:-185.45},0).wait(1).to({x:-648.45,y:-184.7},0).wait(1).to({x:-655.75,y:-183.95},0).wait(1).to({x:-662,y:-183.1},0).wait(1).to({x:-668.7,y:-181.9},0).wait(1).to({x:-675.35,y:-180.45},0).wait(1).to({x:-682,y:-179.15},0).wait(1).to({x:-688.75,y:-178.55},0).wait(1).to({x:-695.45,y:-177},0).wait(1).to({x:-702.1,y:-175.8},0).wait(1).to({x:-708.7,y:-174.1},0).wait(1).to({x:-715.4,y:-172.65},0).wait(1).to({x:-722,y:-171.1},0).wait(1).to({x:-728.7,y:-169.55},0).wait(1).to({x:-734.2,y:-168.1},0).wait(1).to({x:-739.75,y:-166.65},0).wait(1).to({x:-745.3,y:-165.15},0).wait(1).to({x:-750.85,y:-163.6},0).wait(1).to({x:-756.4,y:-162.05},0).wait(1).to({x:-761.9,y:-160.45},0).wait(1).to({x:-767.4,y:-158.85},0).wait(1).to({x:-772.9,y:-157.25},0).wait(1).to({x:-778.4,y:-155.55},0).wait(1).to({x:-783.85,y:-153.85},0).wait(1).to({x:-789.35,y:-152.15},0).wait(1).to({x:-794.8,y:-150.35},0).wait(1).to({x:-800.25,y:-148.55},0).wait(1).to({x:-805.65,y:-146.7},0).wait(1).to({x:-811.1,y:-144.8},0).wait(1).to({x:-816.5,y:-142.9},0).wait(1).to({x:-821.85,y:-140.9},0).wait(1).to({x:-827.25,y:-138.85},0).wait(1).to({x:-832.6,y:-136.8},0).wait(1).to({x:-837.9,y:-134.65},0).wait(1).to({x:-843.2,y:-132.4},0).wait(1).to({x:-848.45,y:-130.15},0).wait(1).to({x:-853.7,y:-127.8},0).wait(1).to({x:-858.85,y:-125.4},0).wait(1).to({x:-864.05,y:-122.85},0).wait(1).to({x:-869.15,y:-120.25},0).wait(1).to({x:-874.2,y:-117.5},0).wait(1).to({x:-879.2,y:-114.65},0).wait(1).to({x:-884.05,y:-111.7},0).wait(1).to({x:-888.95,y:-108.55},0).wait(1).to({x:-891.1,y:-107.15},0).wait(1).to({x:-893.3,y:-105.5},0).wait(1).to({x:-895.45,y:-103.8},0).wait(1).to({x:-897.65,y:-101.9},0).wait(1).to({x:-899.5,y:-100.3},0).wait(1).to({x:-901.65,y:-98.6},0).wait(1).to({x:-903.9,y:-97},0).wait(1).to({x:-906.15,y:-95.45},0).wait(1).to({x:-908.5,y:-94.05},0).wait(1).to({x:-910.95,y:-92.9},0).wait(1).to({x:-912.9,y:-91.2},0).wait(1).to({x:-915,y:-89.45},0).wait(1).to({x:-917.1,y:-87.75},0).wait(1).to({x:-919.25,y:-86.05},0).wait(1).to({x:-921.55,y:-84.35},0).wait(1).to({x:-923.45,y:-82.6},0).wait(1).to({x:-925.3,y:-80.65},0).wait(1).to({x:-927.35,y:-78.85},0).wait(1).to({x:-929.6,y:-77.25},0).wait(1).to({x:-931.1,y:-75.1},0).wait(1).to({x:-933.15,y:-73.35},0).wait(1).to({x:-935.1,y:-71.75},0).wait(1).to({x:-937.55,y:-69.95},0).wait(1).to({x:-938.9,y:-67.75},0).wait(1).to({x:-940.8,y:-65.8},0).wait(1).to({x:-942.65,y:-63.65},0).wait(1).to({x:-944.3,y:-61.6},0).wait(1).to({x:-945.9,y:-59.35},0).wait(1).to({x:-947.7,y:-57.15},0).wait(1).to({x:-949.45,y:-55.3},0).wait(1).to({x:-950.6,y:-53.75},0).wait(1).to({x:-951.65,y:-52.1},0).wait(1).to({x:-952.65,y:-50.4},0).wait(1).to({x:-953.65,y:-48.7},0).wait(1).to({x:-954.6,y:-46.95},0).wait(1).to({x:-955.55,y:-45.2},0).wait(1).to({x:-956.45,y:-43.45},0).wait(1).to({x:-957.35,y:-41.7},0).wait(1).to({x:-958.2,y:-39.95},0).wait(1).to({x:-959,y:-38.15},0).wait(1).to({x:-959.85,y:-36.35},0).wait(1).to({x:-960.6,y:-34.5},0).wait(1).to({x:-961.35,y:-32.7},0).wait(1).to({x:-962.1,y:-30.85},0).wait(1).to({x:-962.8,y:-29},0).wait(1).to({x:-963.45,y:-27.15},0).wait(1).to({x:-964.1,y:-25.3},0).wait(1).to({x:-964.7,y:-23.4},0).wait(1).to({x:-965.25,y:-21.5},0).wait(1).to({x:-965.75,y:-19.6},0).wait(1).to({x:-966.25,y:-17.7},0).wait(1).to({x:-966.7,y:-15.75},0).wait(1).to({x:-967.1,y:-13.85},0).wait(1).to({x:-967.45,y:-11.9},0).wait(1).to({x:-967.75,y:-9.95},0).wait(1).to({x:-968,y:-8},0).wait(1).to({x:-968.2,y:-6},0).wait(1).to({x:-968.35,y:-4.05},0).wait(1).to({y:-2.1},0).wait(1).to({x:-968.2,y:-0.15},0).wait(1).to({x:-968.15,y:1.8},0).wait(1).to({x:-967.95,y:3.8},0).wait(1).to({x:-967.75,y:5.75},0).wait(1).to({x:-967.45,y:7.75},0).wait(1).to({x:-967.15,y:9.7},0).wait(1).to({x:-966.8,y:11.7},0).wait(1).to({x:-966.4,y:13.65},0).wait(1).to({x:-966,y:15.6},0).wait(1).to({x:-965.55,y:17.55},0).wait(1).to({x:-965.1,y:19.5},0).wait(1).to({x:-964.6,y:21.45},0).wait(1).to({x:-964.1,y:23.35},0).wait(1).to({x:-963.55,y:25.25},0).wait(1).to({x:-963,y:27.2},0).wait(1).to({x:-962.4,y:29.1},0).wait(1).to({x:-961.75,y:31},0).wait(1).to({x:-961.1,y:32.85},0).wait(1).to({x:-960.4,y:34.75},0).wait(1).to({x:-959.7,y:36.6},0).wait(1).to({x:-959,y:38.5},0).wait(1).to({x:-958.25,y:40.35},0).wait(1).to({x:-957.45,y:42.15},0).wait(1).to({x:-956.7,y:44},0).wait(1).to({x:-955.85,y:45.8},0).wait(1).to({x:-955,y:47.6},0).wait(1).to({x:-954.15,y:49.4},0).wait(1).to({x:-953.25,y:51.2},0).wait(1).to({x:-952.3,y:52.95},0).wait(1).to({x:-951.3,y:54.65},0).wait(1).to({x:-950.2,y:56.35},0).wait(1).to({x:-948.85,y:58.7},0).wait(1).to({x:-947.15,y:60.85},0).wait(1).to({x:-945.3,y:62.95},0).wait(1).to({x:-943.45,y:65},0).wait(1).to({x:-941.5,y:67.05},0).wait(1).to({x:-939.55,y:69},0).wait(1).to({x:-937.55,y:70.9},0).wait(1).to({x:-935.55,y:72.85},0).wait(1).to({x:-933.5,y:74.75},0).wait(1).to({x:-931.2,y:76.8},0).wait(1).to({x:-929.3,y:78.45},0).wait(1).to({x:-927.2,y:80.25},0).wait(1).to({x:-925.1,y:82.05},0).wait(1).to({x:-922.95,y:83.85},0).wait(1).to({x:-920.8,y:85.6},0).wait(1).to({x:-918.65,y:87.35},0).wait(1).to({x:-916.45,y:89.05},0).wait(1).to({x:-914.25,y:90.8},0).wait(1).to({x:-912.1,y:92.5},0).wait(1).to({x:-909.9,y:94.2},0).wait(1).to({x:-907.7,y:95.9},0).wait(1).to({x:-905.45,y:97.6},0).wait(1).to({x:-903.25,y:99.25},0).wait(1).to({x:-901,y:100.9},0).wait(1).to({x:-898.75,y:102.55},0).wait(1).to({x:-896.5,y:104.2},0).wait(1).to({x:-894.25,y:105.8},0).wait(1).to({x:-892,y:107.45},0).wait(1).to({x:-889.7,y:109.05},0).wait(1).to({x:-887.45,y:110.6},0).wait(1).to({x:-882.5,y:113.25},0).wait(1).to({x:-877.4,y:115.85},0).wait(1).to({x:-872.25,y:118.4},0).wait(1).to({x:-867.15,y:120.9},0).wait(1).to({x:-862,y:123.35},0).wait(1).to({x:-856.85,y:125.75},0).wait(1).to({x:-851.65,y:128.15},0).wait(1).to({x:-846.5,y:130.5},0).wait(1).to({x:-841.3,y:132.8},0).wait(1).to({x:-836.1,y:135.1},0).wait(1).to({x:-830.85,y:137.4},0).wait(1).to({x:-825.6,y:139.6},0).wait(1).to({x:-820.35,y:141.8},0).wait(1).to({x:-815.1,y:144},0).wait(1).to({x:-809.8,y:146.1},0).wait(1).to({x:-804.5,y:148.15},0).wait(1).to({x:-799.15,y:150.1},0).wait(1).to({x:-793.8,y:152},0).wait(1).to({x:-788.4,y:153.85},0).wait(1).to({x:-783,y:155.65},0).wait(1).to({x:-777.6,y:157.4},0).wait(1).to({x:-772.15,y:159.05},0).wait(1).to({x:-766.7,y:160.7},0).wait(1).to({x:-761.2,y:162.25},0).wait(1).to({x:-755.7,y:163.75},0).wait(1).to({x:-750.15,y:165.2},0).wait(1).to({x:-744.65,y:166.55},0).wait(1).to({x:-739.1,y:167.8},0).wait(1).to({x:-733.5,y:168.95},0).wait(1).to({x:-727.95,y:169.85},0).wait(1).to({x:-721.35,y:171.6},0).wait(1).to({x:-714.75,y:173.3},0).wait(1).to({x:-708.15,y:174.95},0).wait(1).to({x:-701.5,y:176.5},0).wait(1).to({x:-694.85,y:178},0).wait(1).to({x:-688.2,y:179.4},0).wait(1).to({x:-681.55,y:180.8},0).wait(1).to({x:-674.85,y:182.05},0).wait(1).to({x:-668.15,y:183.3},0).wait(1).to({x:-661.45,y:184.45},0).wait(1).to({x:-654.75,y:185.6},0).wait(1).to({x:-648,y:186.65},0).wait(1).to({x:-641.25,y:187.6},0).wait(1).to({x:-634.55,y:188.55},0).wait(1).to({x:-627.75,y:189.45},0).wait(1).to({x:-621,y:190.25},0).wait(1).to({x:-614.25,y:191.05},0).wait(1).to({x:-607.45,y:191.8},0).wait(1).to({x:-600.7,y:192.45},0).wait(1).to({x:-593.9,y:193.1},0).wait(1).to({x:-587.1,y:193.7},0).wait(1).to({x:-580.35,y:194.25},0).wait(1).to({x:-573.55,y:194.75},0).wait(1).to({x:-566.75,y:195.2},0).wait(1).to({x:-559.95,y:195.6},0).wait(1).to({x:-553.15,y:196},0).wait(1).to({x:-546.35,y:196.3},0).wait(1).to({x:-539.55,y:196.6},0).wait(1).to({x:-532.85,y:196.85},0).wait(1).to({x:-525.95,y:197.1},0).wait(1).to({x:-517.05,y:197.2},0).wait(1).to({x:-508.2,y:197.25},0).wait(1).to({x:-499.35,y:197.2},0).wait(1).to({x:-490.5},0).wait(1).to({x:-481.6,y:197.15},0).wait(1).to({x:-472.75,y:197.05},0).wait(1).to({x:-463.9,y:196.95},0).wait(1).to({x:-455,y:196.8},0).wait(1).to({x:-446.15,y:196.65},0).wait(1).to({x:-437.3,y:196.45},0).wait(1).to({x:-428.45,y:196.25},0).wait(1).to({x:-419.6,y:195.85},0).wait(1).to({x:-410.75,y:195.3},0).wait(1).to({x:-401.9,y:194.6},0).wait(1).to({x:-393.05,y:193.85},0).wait(1).to({x:-384.25,y:192.95},0).wait(1).to({x:-375.45,y:192.05},0).wait(1).to({x:-366.6,y:191.05},0).wait(1).to({x:-357.8,y:189.95},0).wait(1).to({x:-349.05,y:188.85},0).wait(1).to({x:-340.25,y:187.7},0).wait(1).to({x:-331.45,y:186.5},0).wait(1).to({x:-322.65,y:185.25},0).wait(1).to({x:-313.9,y:184},0).wait(1).to({x:-305.15,y:182.65},0).wait(1).to({x:-296.35,y:181.3},0).wait(1).to({x:-287.65,y:179.9},0).wait(1).to({x:-278.9,y:178.45},0).wait(1).to({x:-270.15,y:176.9},0).wait(1).to({x:-261.45,y:175.35},0).wait(1).to({x:-250.35,y:173.9},0).wait(1).to({x:-239.4,y:171.75},0).wait(1).to({x:-228.55,y:169.2},0).wait(1).to({x:-217.7,y:166.45},0).wait(1).to({x:-206.95,y:163.45},0).wait(1).to({x:-196.25,y:160.3},0).wait(1).to({x:-185.6,y:156.95},0).wait(1).to({x:-175,y:153.4},0).wait(1).to({x:-164.5,y:149.65},0).wait(1).to({x:-154.05,y:145.75},0).wait(1).to({x:-143.65,y:141.6},0).wait(1).to({x:-133.35,y:137.3},0).wait(1).to({x:-123.2,y:132.7},0).wait(1).to({x:-113.1,y:127.9},0).wait(1).to({x:-103.15,y:122.8},0).wait(1).to({x:-93.35,y:117.5},0).wait(1).to({x:-83.8,y:111.7},0).wait(1).to({x:-74.4,y:105.75},0).wait(1).to({x:-65.1,y:99.5},0).wait(1).to({x:-56,y:93.05},0).wait(1).to({x:-47.1,y:86.3},0).wait(1).to({x:-38.6,y:79.05},0).wait(1).to({x:-30.9,y:71},0).wait(1).to({x:-24.1,y:62.15},0).wait(1).to({x:-17.75,y:53},0).wait(1).to({x:-11.9,y:43.45},0).wait(1).to({x:-7.05,y:33.4},0).wait(1).to({x:-4.25,y:22.6},0).wait(1).to({x:-2.25,y:11.6},0).wait(1).to({x:-0.7,y:0.6},0).wait(1));

	// Sun
	this.instance_1 = new lib.Sun();
	this.instance_1.setTransform(-219.05,-1,1,1,0,0,0,-0.4,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(360));

	// Obrit
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(5,1,1).p("EA1agVuQWJJAAAMuQAAMv2JJAQ2IJA/SAAQ/RAA2JpAQ2IpAAAsvQAAsuWIpAQWJpAfRAAQfSAAWIJAg");
	this.shape.setTransform(-483.475,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(360));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-993,-220.5,1131.7,538.3);


// stage content:
(lib.KeplersFirstLawFinished = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Title
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAlBtIgliLIglCLIg3AAIhFjZIA4AAIAoCOIAmiOIA2AAIAlCOIApiOIA5AAIhGDZg");
	this.shape.setTransform(803.775,29.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhSBfQgTgSAAgcQAAgSAJgPQAIgOAQgHQAQgHAegGQAngIAQgGIAAgGQAAgRgIgHQgIgHgWAAQgPAAgJAGQgJAGgFAPIg0gJQAIggAWgPQAWgPAqAAQAmAAASAJQATAJAIAOQAIAOAAAmIgBBCQAAAdADAOQADANAHAQIg5AAIgFgRIgCgHQgPAOgRAHQgQAIgTAAQgiAAgTgTgAgBANQgYAFgHAFQgMAIAAAMQAAAMAJAJQAJAJAOAAQAPAAAOgKQALgIADgLQACgIAAgUIAAgMIgiAJg");
	this.shape_1.setTransform(775.725,29.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhpCVIAAkpIA9AAIAAD2ICWAAIAAAzg");
	this.shape_2.setTransform(752.15,25.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgICRQgNgGgFgIQgHgIgCgPQgBgKAAgeIAAheIgbAAIAAguIAbAAIAAgrIA4giIAABNIAnAAIAAAuIgnAAIAABXQAAAaABAFQABAEAFADQAEADAFAAQAIAAAPgGIAFAtQgUAJgZAAQgQAAgLgFg");
	this.shape_3.setTransform(719.75,25.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhDBgQgagSgIgfIA6gJQAEARALAIQALAJATAAQAXAAALgIQAIgGAAgKQAAgGgEgEQgFgFgPgDQhEgPgTgNQgagRAAgfQAAgcAWgUQAXgTAvAAQArAAAWAPQAWAOAIAdIg2AKQgEgNgJgHQgKgHgRAAQgXAAgKAHQgGAEAAAIQAAAGAFAEQAIAGAtAKQAuALASAPQATAOAAAcQAAAegZAVQgaAWgxAAQgrAAgagSg");
	this.shape_4.setTransform(700.525,29.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhGBvIAAjZIA2AAIAAAfQAOgWAKgGQALgHAOAAQATAAATAKIgSAzQgPgKgMAAQgMAAgJAHQgHAHgFARQgFARAAA3IAABDg");
	this.shape_5.setTransform(682.825,28.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcCWIAAjZIA5AAIAADZgAgchgIAAg1IA5AAIAAA1g");
	this.shape_6.setTransform(667.25,24.975);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhmCWIAAkrIDNAAIAAAyIiRAAIAABIIB9AAIAAAxIh9AAIAACAg");
	this.shape_7.setTransform(649.1,24.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhDBgQgagSgIgfIA6gJQAEARALAIQALAJATAAQAXAAALgIQAIgGAAgKQAAgGgEgEQgFgFgPgDQhEgPgTgNQgagRAAgfQAAgcAWgUQAXgTAvAAQArAAAWAPQAWAOAIAdIg2AKQgEgNgJgHQgKgHgRAAQgXAAgKAHQgGAEAAAIQAAAGAFAEQAIAGAtAKQAuALASAPQATAOAAAcQAAAegZAVQgaAWgxAAQgrAAgagSg");
	this.shape_8.setTransform(611.875,29.125);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgUA1IgKg3IAAgyIA9AAIAAAyIgJA3g");
	this.shape_9.setTransform(595.725,15.275);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhGBvIAAjZIA2AAIAAAfQAOgWAKgGQALgHAOAAQATAAATAKIgSAzQgPgKgMAAQgMAAgJAHQgHAHgFARQgFARAAA3IAABDg");
	this.shape_10.setTransform(584.175,28.875);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhPBNQgWgeAAguQAAg1AcgeQAdgfArAAQAwAAAcAgQAcAggBBBIiQAAQABAaANAOQANAPATAAQAOAAAJgIQAJgHAFgRIA5AKQgLAggXAQQgYARgkAAQg4AAgbglgAgdg3QgMAOAAAXIBVAAQAAgZgNgNQgMgNgSAAQgRAAgNAOg");
	this.shape_11.setTransform(562.5267,29.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcCWIAAkrIA5AAIAAErg");
	this.shape_12.setTransform(545.25,24.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhpCZIAAksIA1AAIAAAgQALgQASgLQASgKAUAAQAmAAAbAeQAaAeAAA1QAAA1gaAfQgbAegmAAQgRAAgPgIQgOgHgRgRIAABugAgihaQgOAQAAAgQAAAlAOARQAPARAUAAQAUAAANgQQAOgPAAglQAAgigOgRQgOgQgUAAQgUAAgOAQg");
	this.shape_13.setTransform(527.175,33.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhPBNQgWgeAAguQAAg1AcgeQAdgfArAAQAwAAAcAgQAcAggBBBIiQAAQABAaANAOQANAPATAAQAOAAAJgIQAJgHAFgRIA5AKQgLAggXAQQgYARgkAAQg4AAgbglgAgdg3QgMAOAAAXIBVAAQAAgZgNgNQgMgNgSAAQgRAAgNAOg");
	this.shape_14.setTransform(501.8767,29.125);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AA5CWIhSiNIgxAyIAABbIg9AAIAAkrIA9AAIAACFIB5iFIBTAAIhyB1IB3C2g");
	this.shape_15.setTransform(476.7,24.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Title Background
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#333333").ss(3,1,1).p("Ehj/gESMDH/AAAIAAIlMjH/AAAg");
	this.shape_16.setTransform(640,27.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#333333").s().p("Ehj/AETIAAolMDH/AAAIAAIlg");
	this.shape_17.setTransform(640,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16}]}).wait(1));

	// Orbit and Sun
	this.instance = new lib.OrbitK1noareas();
	this.instance.setTransform(687,479.7,1,1,0,0,0,-415.5,59.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Focal Points
	this.instance_1 = new lib.Arrow();
	this.instance_1.setTransform(694.2,478.2,0.9954,0.9954,160.9479);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Arrow();
	this.instance_2.setTransform(538.05,479.35,0.998,0.998,16.3123);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.text = new cjs.Text("focal points", "bold 26px 'Arial'", "#CCCCCC");
	this.text.lineHeight = 31;
	this.text.lineWidth = 152;
	this.text.parent = this;
	this.text.setTransform(541.05,464.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(3,1,1).p("EgrHAAAQAAgiAZgZQAZgZAjAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgjAAgZgZQgZgZAAgjMggWAAAEgodAAAMBz7AAA");
	this.shape_18.setTransform(622.025,420.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_19.setTransform(354.55,420.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.text},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Credit
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#33CCFF").s().p("AgjBAQgQgUAAgsQAAgbAHgRQAFgRAMgJQALgJAQAAQAMAAAKAFQAKAFAGAJQAGAKAEAOQAEAOAAAWQgBAcgFARQgGARgMAJQgKAJgSAAQgWAAgNgQgAgVg0QgJAOgBAmQABAnAIANQAJANANAAQAOAAAIgNQAJgNAAgnQAAgmgJgNQgIgMgOAAQgNAAgIALg");
	this.shape_20.setTransform(1254.9,699.425);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#33CCFF").s().p("AAJBPIAAh6QgGAHgLAGQgLAHgJADIAAgTQAQgHAMgLQAMgLAEgKIANAAIAACdg");
	this.shape_21.setTransform(1241.9,699.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#33CCFF").s().p("AgjBAQgPgUAAgsQAAgbAFgRQAGgRALgJQAMgJAQAAQANAAAJAFQAKAFAGAJQAGAKAEAOQAEAOgBAWQAAAcgFARQgGARgLAJQgMAJgRAAQgWAAgNgQgAgVg0QgKAOAAAmQAAAnAJANQAKANAMAAQANAAAJgNQAKgNgBgnQABgmgKgNQgJgMgNAAQgMAAgJALg");
	this.shape_22.setTransform(1230.4,699.425);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#33CCFF").s().p("AgzBPQAAgHACgGQAEgLAJgLQAJgJAQgOQAZgVAJgMQAJgMAAgLQAAgMgIgHQgJgIgNAAQgNAAgIAIQgIAJgBAOIgTgBQACgXANgMQANgLAWAAQAWAAAOAMQANANAAATQAAAJgEAJQgEAKgJAJQgJAKgVARQgQAOgFAGQgFAFgDAFIBMAAIAAATg");
	this.shape_23.setTransform(1217.975,699.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#33CCFF").s().p("AgpBOIgCgSIALABQAGAAAEgCIAGgGIAGgOIACgFIgrhxIAVAAIAXBCIAIAZQADgMAFgNIAYhCIATAAIgrBzIgKAaQgFAJgHAFQgGAEgKAAQgFAAgHgCg");
	this.shape_24.setTransform(1200.575,703.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#33CCFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgHAAgEADQgFAEgCAHQgDAKAAANIAAA6g");
	this.shape_25.setTransform(1192.2,701.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#33CCFF").s().p("AglAsQgPgPABgcQgBgcAPgQQAPgQAXAAQAWAAAPAQQAOAQAAAbIAAAFIhUAAQABASAKALQAJAJAOABQALgBAHgFQAHgGAFgMIAUACQgEASgNAKQgNAKgUAAQgYgBgPgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_26.setTransform(1181.45,701.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#33CCFF").s().p("AA6A6IAAhHQAAgLgCgFQgCgFgFgEQgFgDgGAAQgMAAgIAIQgIAIAAASIAABBIgSAAIAAhJQAAgNgFgGQgFgHgLAAQgIAAgHAFQgHAEgDAIQgDAIAAAQIAAA6IgTAAIAAhxIARAAIAAAQQAFgIAJgFQAJgFAMAAQAMAAAIAFQAIAFADAKQANgUAWAAQARAAAJAJQAJAJAAAUIAABNg");
	this.shape_27.setTransform(1166.225,701.375);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#33CCFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_28.setTransform(1150.875,701.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#33CCFF").s().p("AghBIQgNgJABgTIATADQABAJAFAEQAHAGANAAQAMAAAHgGQAIgFACgKQACgGAAgTQgNAPgSAAQgXAAgNgRQgNgRAAgWQAAgRAGgOQAGgOALgHQALgIAPAAQATAAAOAQIAAgNIARAAIAABiQAAAagFAMQgFALgMAGQgMAHgQgBQgVABgMgKgAgUg2QgJALAAAUQAAAXAJAIQAJALAMAAQANAAAJgKQAJgKAAgVQAAgVgJgLQgJgLgNAAQgMAAgJALg");
	this.shape_29.setTransform(1138.275,703.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#33CCFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_30.setTransform(1129.625,699.575);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#33CCFF").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_31.setTransform(1120.275,701.375);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#33CCFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_32.setTransform(1108.025,701.5);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#33CCFF").s().p("AA3BPIAAiDIguCDIgSAAIgtiFIAACFIgUAAIAAidIAfAAIAlBvIAHAXIAIgZIAmhtIAcAAIAACdg");
	this.shape_33.setTransform(1092.75,699.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#33CCFF").s().p("AgeBLQgPgGgIgMQgIgNgBgQIAUgCQABAMAFAIQAFAHALAFQALAFANAAQALAAAJgEQAJgDAGgGQADgHAAgHQAAgHgDgGQgFgFgKgEQgGgDgVgFQgWgFgIgEQgLgGgGgIQgFgJgBgLQAAgMAHgKQAHgLANgFQANgFAQAAQAQAAAOAFQANAGAHALQAIALAAAOIgUABQgBgPgKgHQgJgIgSAAQgSAAgJAHQgJAHAAAKQABAIAFAGQAHAFAYAGQAZAGAKAEQAOAFAGAKQAHAKgBAMQAAANgGALQgIALgNAGQgOAGgRAAQgUAAgOgGg");
	this.shape_34.setTransform(1070.1,699.325);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#33CCFF").s().p("AgKA5IAAgWIAVAAIAAAWgAgKgiIAAgWIAVAAIAAAWg");
	this.shape_35.setTransform(1053.75,701.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#33CCFF").s().p("AgpBOIgCgSIALABQAGAAAEgCIAGgGIAGgOIACgFIgrhxIAVAAIAXBCIAIAZQADgMAFgNIAYhCIATAAIgrBzIgKAaQgFAJgHAFQgGAEgKAAQgFAAgHgCg");
	this.shape_36.setTransform(1045.225,703.825);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#33CCFF").s().p("Ag6BPIAAidIA6AAQASAAAKAFQALAFAHAKQAGAKAAALQAAAKgGAJQgFAIgLAGQAOAEAIAJQAHAKABAOQgBALgEAKQgFAJgHAFQgHAFgKADQgLADgPAAgAgmA8IAmAAIAPgBQAHgBAFgDQAEgDAEgGQADgFAAgIQAAgJgEgGQgFgHgIgCQgIgDgOAAIglAAgAgmgMIAjAAQAMAAAGgBQAJgDADgFQAFgGAAgIQAAgIgFgGQgDgGgHgCQgHgCgQAAIggAAg");
	this.shape_37.setTransform(1032.55,699.325);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]}).wait(1));

	// Text
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgOA5IAAgeIAdAAIAAAegAgOgaIAAgeIAdAAIAAAeg");
	this.shape_38.setTransform(133.625,674);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgpAoQgLgPAAgYQAAgbAPgQQAOgRAXABQAZAAAOAQQAPARgBAhIhKAAQAAAOAHAIQAHAHAJAAQAHAAAFgEQAFgEADgIIAeAEQgGARgNAJQgMAIgTABQgdAAgOgUgAgOgdQgHAIAAAMIAsAAQAAgNgGgHQgHgGgJgBQgJABgGAGg");
	this.shape_39.setTransform(123.7258,674);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgEBMQgHgDgDgEQgDgEgBgIIgBgWIAAgwIgOAAIAAgYIAOAAIAAgWIAegSIAAAoIAUAAIAAAYIgUAAIAAAtIAAARQAAAAAAAAQABABAAAAQAAABABAAQAAABABAAQACABADAAQAEAAAIgCIACAXQgKAEgNABQgJgBgFgCg");
	this.shape_40.setTransform(114.05,672.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgdA0QgOgGgIgOQgHgOAAgTQAAgPAHgOQAIgOAOgHQANgHAQAAQAaAAAQAQQARARAAAZQAAAagRAQQgRARgZABQgPAAgOgIgAgTgZQgIAJAAAQQAAARAIAJQAIAJALAAQAMAAAIgJQAIgJAAgRQAAgQgIgJQgIgJgMAAQgLAAgIAJg");
	this.shape_41.setTransform(103.675,674);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AAfBPIg/hmIAABmIgeAAIAAidIAgAAIA/BoIAAhoIAdAAIAACdg");
	this.shape_42.setTransform(88.9,671.825);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_43.setTransform(873.5,706.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_44.setTransform(864.225,701.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_45.setTransform(851.975,701.5);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_46.setTransform(843.425,699.325);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_47.setTransform(838.075,699.575);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_48.setTransform(828.725,701.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AA6A6IAAhHQAAgLgCgFQgCgFgFgEQgFgDgGAAQgMAAgIAIQgIAIAAASIAABBIgSAAIAAhJQAAgNgFgGQgFgHgLAAQgIAAgHAFQgHAEgDAIQgDAIAAAQIAAA6IgTAAIAAhxIARAAIAAAQQAFgIAJgFQAJgFAMAAQAMAAAIAFQAIAFADAKQANgUAWAAQARAAAJAJQAJAJAAAUIAABNg");
	this.shape_49.setTransform(813.475,701.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAJAAALAGIgHASQgHgEgHAAQgHAAgEADQgFAEgCAHQgDAKAAANIAAA6g");
	this.shape_50.setTransform(795.4,701.375);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgqAzQgKgKAAgOQAAgIAEgIQAEgGAHgFQAFgCAIgDIARgDQAXgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgGAEQgHAFgEAMIgSgDQADgMAFgHQAGgIALgDQALgFAOAAQAPAAAJAEQAJADAEAGQAEAEADAIIAAASIAAAZQABAbAAAIQACAGAEAHIgVAAQgDgGAAgIQgMAJgJAEQgJAEgMAAQgSgBgLgIgAgEAHQgLACgGACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAIgEAEgJQAEgGAAgNIAAgHQgLAEgUADg");
	this.shape_51.setTransform(784.65,701.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_52.setTransform(776.075,699.325);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_53.setTransform(767.475,701.625);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_54.setTransform(756.275,701.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgGAAgEADQgGAEgBAHQgEAKAAANIAAA6g");
	this.shape_55.setTransform(747.65,701.375);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_56.setTransform(740.625,699.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_57.setTransform(733.025,701.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AgkAsQgPgPgBgcQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAJAJAOABQAKgBAIgFQAIgGAEgMIAUACQgEASgNAKQgNAKgUAAQgYgBgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_58.setTransform(714.9,701.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABALAIAGQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgGgJgDQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAGAIADQAIADAFAGQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_59.setTransform(703.275,701.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_60.setTransform(691.625,701.625);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABALAIAGQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgGgJgDQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAGAIADQAIADAFAGQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_61.setTransform(673.925,701.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AglAsQgOgPAAgcQAAgcAOgQQAPgQAXAAQAXAAAOAQQAOAQAAAbIAAAFIhTAAQABASAJALQAJAJAOABQALgBAHgFQAIgGAEgMIAUACQgFASgNAKQgMAKgUAAQgYgBgPgPgAgVgiQgJAJAAAPIA+AAQgBgOgGgIQgJgLgPAAQgMAAgKAJg");
	this.shape_62.setTransform(662.3,701.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABALAIAGQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgGgJgDQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAGAIADQAIADAFAGQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_63.setTransform(650.675,701.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_64.setTransform(639.075,701.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgxBQIAAidIASAAIAAAPQAGgIAIgFQAIgEAKAAQAPAAALAIQALAHAGANQAGAOgBAQQAAASgFANQgHAOgMAHQgMAIgNAAQgJAAgHgEQgIgEgFgHIAAA4gAgWg0QgJALAAAWQAAAVAJAKQAJALANAAQALAAAJgLQAKgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgKAMg");
	this.shape_65.setTransform(627.15,703.55);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgGAAgFADQgEAEgCAHQgEAKAAANIAAA6g");
	this.shape_66.setTransform(617.95,701.375);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_67.setTransform(607.175,701.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgxBQIAAidIASAAIAAAPQAGgIAIgFQAIgEAKAAQAPAAALAIQALAHAGANQAGAOgBAQQAAASgFANQgHAOgMAHQgMAIgNAAQgJAAgIgEQgHgEgFgHIAAA4gAgWg0QgJALAAAWQAAAVAJAKQAJALANAAQAMAAAIgLQAKgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgKAMg");
	this.shape_68.setTransform(595.3,703.55);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_69.setTransform(576.625,701.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_70.setTransform(564.375,701.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_71.setTransform(555.825,699.325);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_72.setTransform(550.475,699.575);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgqAzQgKgKABgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgIALgDQALgFAOAAQAPAAAJAEQAJADAEAGQAEAEADAIIABASIAAAZQAAAbAAAIQACAGAEAHIgVAAQgDgGAAgIQgLAJgKAEQgJAEgMAAQgSgBgLgIgAgEAHQgLACgGACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgLAEgUADg");
	this.shape_73.setTransform(541.1,701.5);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_74.setTransform(532.525,699.325);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgZA2QgJgDgEgGQgEgGgCgJQgBgFAAgNIAAhFIATAAIAAA+QAAAPABAFQACAIAGAEQAGAFAJAAQAHAAAIgFQAIgEADgIQADgIAAgOIAAg8IATAAIAABxIgRAAIAAgRQgNATgWAAQgKAAgJgEg");
	this.shape_75.setTransform(523.925,701.625);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_76.setTransform(512.725,701.5);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_77.setTransform(504.375,699.325);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AgpAzQgKgKAAgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAGgHQAFgIAMgDQALgFANAAQAPAAAJAEQAJADAFAGQADAEACAIIACASIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgMAJgJAEQgJAEgLAAQgUgBgJgIgAgDAHQgNACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgLAEgTADg");
	this.shape_78.setTransform(495.8,701.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_79.setTransform(484.575,701.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgHAAgDADQgFAEgDAHQgDAKAAANIAAA6g");
	this.shape_80.setTransform(469.85,701.375);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_81.setTransform(459.125,701.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("Ag0BPIAAidIBpAAIAAATIhUAAIAAAxIBJAAIAAARIhJAAIAABIg");
	this.shape_82.setTransform(446.725,699.325);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_83.setTransform(424.4,706.1);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgkAsQgQgPABgcQgBgcAQgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAJAJAOABQALgBAHgFQAHgGAFgMIAUACQgFASgMAKQgNAKgUAAQgYgBgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_84.setTransform(415.1,701.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_85.setTransform(406.525,699.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_86.setTransform(398.975,701.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgGAAgEADQgGAEgBAHQgEAKAAANIAAA6g");
	this.shape_87.setTransform(390.35,701.375);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_88.setTransform(383.325,699.325);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_89.setTransform(375.725,701.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgqAzQgKgKABgOQgBgIAEgIQAEgGAHgFQAFgCAIgDIASgDQAWgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgGAEQgHAFgEAMIgSgDQADgMAFgHQAGgIALgDQALgFAOAAQAPAAAJAEQAJADAEAGQAEAEADAIIAAASIAAAZQAAAbABAIQACAGAEAHIgVAAQgDgGgBgIQgLAJgJAEQgJAEgMAAQgSgBgLgIgAgEAHQgMACgFACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAIgEAEgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_90.setTransform(357.6,701.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_91.setTransform(339.275,701.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_92.setTransform(330.275,699.575);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgHAAgDADQgFAEgDAHQgDAKAAANIAAA6g");
	this.shape_93.setTransform(318.2,701.375);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AglAsQgPgPABgcQgBgcAPgQQAPgQAXAAQAWAAAPAQQAOAQAAAbIAAAFIhUAAQABASAKALQAJAJAOABQALgBAHgFQAHgGAFgMIAUACQgEASgOAKQgMAKgUAAQgYgBgPgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_94.setTransform(307.45,701.5);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABALAIAGQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgGgJgDQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAGAIADQAIADAFAGQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_95.setTransform(295.825,701.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgLgOAAQgNAAgKALg");
	this.shape_96.setTransform(284.225,701.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_97.setTransform(275.625,699.325);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_98.setTransform(268.075,701.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABALAIAGQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgGgJgDQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAGAIADQAIADAFAGQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_99.setTransform(250.575,701.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_100.setTransform(242.675,699.325);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_101.setTransform(231.225,699.575);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_102.setTransform(225.05,699.325);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AgKALIAAgVIAVAAIAAAVg");
	this.shape_103.setTransform(206.75,706.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgpBOIgCgSIALABQAGAAAEgCIAGgGIAGgOIACgFIgrhxIAVAAIAXBCIAIAZQADgMAFgNIAYhCIATAAIgrBzIgKAaQgFAJgHAFQgGAEgKAAQgFAAgHgCg");
	this.shape_104.setTransform(199.875,703.825);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_105.setTransform(191.375,699.575);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_106.setTransform(185.725,699.325);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_107.setTransform(180.775,699.325);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgqAzQgKgKAAgOQAAgIAEgIQAEgGAHgFQAFgCAIgDIARgDQAXgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgGAEQgHAFgEAMIgSgDQADgMAFgHQAGgIALgDQALgFAOAAQAPAAAJAEQAJADAEAGQAFAEACAIIAAASIAAAZQAAAbABAIQACAGAEAHIgVAAQgDgGAAgIQgMAJgJAEQgJAEgMAAQgSgBgLgIgAgEAHQgLACgGACQgFACgCAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAIgEAEgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_108.setTransform(172.2,701.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgkAsQgQgPABgcQgBgcAQgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAJAJAOABQALgBAHgFQAHgGAFgMIAUACQgEASgNAKQgNAKgUAAQgYgBgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_109.setTransform(159.95,701.5);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgGAAgFADQgEAEgDAHQgDAKAAANIAAA6g");
	this.shape_110.setTransform(151.1,701.375);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_111.setTransform(1001.725,674.825);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgpAzQgKgKAAgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgEAMIgSgDQACgMAHgHQAFgIAMgDQALgFANAAQAPAAAJAEQAJADAFAGQADAFACAHIACASIAAAZQAAAbABAIQABAGADAHIgTAAQgDgGgBgIQgMAJgJAEQgJAEgLAAQgUgBgJgIgAgDAHQgNACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgLAEgTADg");
	this.shape_112.setTransform(989.45,674.95);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AAbBPIAAhJQAAgNgGgHQgHgGgLAAQgIAAgHAEQgIAFgDAHQgDAHAAANIAAA/IgTAAIAAidIATAAIAAA5QAOgQATAAQAMAAAKAFQAJAFAFAJQADAJAAAPIAABJg");
	this.shape_113.setTransform(977.25,672.775);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_114.setTransform(968.225,673.025);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_115.setTransform(956.425,672.775);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgqAzQgJgKgBgOQAAgIAFgIQADgGAHgFQAFgCAIgDIARgDQAXgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgGAEQgHAFgDAMIgTgDQACgMAHgHQAFgIAMgDQAKgFAOAAQAPAAAJAEQAJADAFAGQADAFACAHIABASIAAAZQAAAbABAIQACAGADAHIgTAAQgEgGgBgIQgKAJgKAEQgJAEgLAAQgUgBgKgIgAgDAHQgNACgEACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAIgEAFgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_116.setTransform(947.85,674.95);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_117.setTransform(936.625,674.95);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_118.setTransform(928.325,672.775);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_119.setTransform(922.975,673.025);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgxBQIAAidIASAAIAAAPQAGgIAIgFQAIgEAKAAQAPAAALAIQALAHAGANQAFAOAAAQQABASgHANQgGAOgMAHQgMAIgNAAQgJAAgHgEQgIgEgFgHIAAA4gAgVg0QgKALAAAWQAAAVAJAKQAJALAMAAQAMAAAKgLQAJgLAAgWQAAgVgJgLQgJgLgMAAQgMAAgJAMg");
	this.shape_120.setTransform(913.95,677);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_121.setTransform(905.075,672.775);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_122.setTransform(900.125,672.775);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_123.setTransform(895.225,672.775);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgQAXAAQAWAAAPAQQAOAQAAAbIAAAFIhTAAQAAASAKALQAKAJANABQAKgBAIgFQAHgGAFgMIAUACQgEASgOAKQgMAKgUAAQgYgBgPgPgAgUgiQgKAJAAAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_124.setTransform(886.65,674.95);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgQAXAAQAXAAAOAQQAOAQAAAbIAAAFIhTAAQABASAJALQAKAJANABQAKgBAIgFQAIgGAEgMIAUACQgFASgNAKQgMAKgUAAQgYgBgPgPgAgUgiQgKAJAAAPIA/AAQgCgOgGgIQgJgLgPAAQgMAAgJAJg");
	this.shape_125.setTransform(868.3,674.95);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgHAAgDADQgGAEgCAHQgDAKAAANIAAA6g");
	this.shape_126.setTransform(859.45,674.825);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_127.setTransform(848.725,674.95);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AA6A6IAAhHQAAgLgCgFQgCgFgFgEQgFgDgGAAQgMAAgIAIQgIAIAAASIAABBIgSAAIAAhJQAAgNgFgGQgFgHgLAAQgIAAgHAFQgHAEgDAIQgDAIAAAQIAAA6IgTAAIAAhxIARAAIAAAQQAFgIAJgFQAJgFAMAAQAMAAAIAFQAIAFADAKQANgUAWAAQARAAAJAJQAJAJAAAUIAABNg");
	this.shape_128.setTransform(833.475,674.825);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgGAAgFADQgEAEgCAHQgEAKAAANIAAA6g");
	this.shape_129.setTransform(815.4,674.825);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgqAzQgJgKgBgOQAAgIAFgIQADgGAHgFQAFgCAIgDIARgDQAXgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgGAEQgHAFgDAMIgTgDQACgMAHgHQAFgIALgDQAMgFANAAQAPAAAJAEQAJADAEAGQAFAFABAHIABASIAAAZQAAAbABAIQACAGAEAHIgUAAQgEgGgBgIQgLAJgJAEQgJAEgLAAQgUgBgKgIgAgDAHQgMACgFACQgFACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAIgEAFgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_130.setTransform(804.65,674.95);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgPBQIAAhiIgRAAIAAgPIARAAIAAgMQAAgLACgHQACgHAHgFQAGgEANAAQAIAAAKACIgCARIgMgCQgJABgEAEQgDADAAAKIAAALIAWAAIAAAPIgWAAIAABig");
	this.shape_131.setTransform(796.05,672.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABAMAIAFQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgFgJgEQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_132.setTransform(780.825,674.95);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_133.setTransform(772.925,672.775);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_134.setTransform(761.475,673.025);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_135.setTransform(755.825,672.775);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgfA/IAAAPIgSAAIAAidIATAAIAAA4QANgPASAAQALAAAJAEQAJAFAHAHQAFAIAEALQADAJAAAMQAAAegOAQQgOAQgVAAQgTAAgMgRgAgWgLQgJALAAATQAAAVAGAJQAJAPAPAAQAMAAAKgLQAJgLAAgWQAAgVgJgKQgJgLgMAAQgMgBgKAMg");
	this.shape_136.setTransform(747.55,672.9);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAFgEQAFgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgGAAgFADQgEAEgDAHQgDAKAAANIAAA6g");
	this.shape_137.setTransform(738.35,674.825);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_138.setTransform(727.625,674.95);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgkAsQgPgPgBgcQABgcAPgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAKAJANABQALgBAHgFQAHgGAFgMIAUACQgEASgNAKQgNAKgUAAQgYgBgOgPgAgUgiQgJAJgBAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_139.setTransform(709.25,674.95);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAbBPIAAhJQAAgNgGgHQgGgGgMAAQgHAAgIAEQgHAFgEAHQgDAHAAANIAAA/IgUAAIAAidIAUAAIAAA5QANgQAUAAQAMAAAKAFQAKAFADAJQAEAJABAPIAABJg");
	this.shape_140.setTransform(697.05,672.775);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_141.setTransform(688.025,673.025);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgYBIQgMgHgGgNQgGgOAAgSQAAgRAFgNQAGgOALgGQAMgIAOAAQAJAAAIAEQAIAEAFAIIAAg5IAUAAIAACdIgSAAIAAgPQgLARgVAAQgNAAgLgIgAgUgLQgJAKAAAVQAAAWAJALQAKALAMAAQAMAAAJgKQAJgKAAgWQAAgWgJgLQgJgLgOAAQgMAAgIALg");
	this.shape_142.setTransform(672.2,672.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_143.setTransform(660.325,674.825);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgqAzQgJgKgBgOQAAgIAFgIQADgGAHgFQAFgCAIgDIARgDQAXgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgGAEQgHAFgDAMIgTgDQACgMAHgHQAFgIALgDQAMgFANAAQAPAAAJAEQAJADAEAGQAFAFABAHIABASIAAAZQAAAbABAIQACAGAEAHIgUAAQgEgGgBgIQgLAJgJAEQgJAEgLAAQgUgBgKgIgAgDAHQgMACgFACQgGACgCAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAIgEAFgJQADgGAAgNIAAgHQgLAEgTADg");
	this.shape_144.setTransform(648.05,674.95);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgLASQAHgCACgGQACgFABgIIgLAAIAAgXIAWAAIAAAXQAAALgFAHQgEAIgIADg");
	this.shape_145.setTransform(632.8,681.1);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AglAsQgOgPAAgcQAAgcAOgQQAPgQAXAAQAXAAAOAQQAOAQAAAbIAAAFIhTAAQABASAJALQAKAJANABQALgBAHgFQAIgGAEgMIAUACQgFASgNAKQgMAKgUAAQgYgBgPgPgAgUgiQgKAJAAAPIA+AAQgBgOgGgIQgJgLgPAAQgMAAgJAJg");
	this.shape_146.setTransform(623.6,674.95);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AghBIQgNgJABgTIATADQABAJAFAEQAHAGANAAQAMAAAHgGQAIgFACgKQACgGAAgTQgNAPgSAAQgXAAgNgRQgNgRAAgWQAAgRAGgOQAGgOALgHQALgIAPAAQATAAAOAQIAAgNIARAAIAABiQAAAagFAMQgFALgMAGQgMAHgQgBQgVABgMgKgAgUg2QgJALAAAUQAAAXAJAIQAJALAMAAQANAAAJgKQAJgKAAgVQAAgVgJgLQgJgLgNAAQgMAAgJALg");
	this.shape_147.setTransform(611.025,677.15);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgHAAgDADQgGAEgCAHQgDAKAAANIAAA6g");
	this.shape_148.setTransform(602.5,674.825);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgpAzQgKgKAAgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAGgHQAFgIAMgDQALgFANAAQAPAAAJAEQAJADAFAGQADAFADAHIABASIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMAAQgSgBgKgIgAgEAHQgMACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_149.setTransform(591.75,674.95);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_150.setTransform(583.175,672.775);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_151.setTransform(568.525,674.95);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_152.setTransform(556.275,674.95);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_153.setTransform(547.275,673.025);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABAMAIAFQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgFgJgEQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_154.setTransform(532.425,674.95);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_155.setTransform(524.525,672.775);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AAbBPIAAhJQAAgNgGgHQgGgGgMAAQgHAAgIAEQgHAFgEAHQgDAHAAANIAAA/IgUAAIAAidIAUAAIAAA5QANgQAUAAQAMAAAKAFQAKAFADAJQAEAJABAPIAABJg");
	this.shape_156.setTransform(509.85,672.775);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_157.setTransform(500.825,673.025);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAJAAALAGIgHASQgHgEgHAAQgGAAgEADQgGAEgBAHQgEAKAAANIAAA6g");
	this.shape_158.setTransform(494.85,674.825);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgpAzQgKgKAAgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAGgHQAFgIAMgDQALgFANAAQAPAAAJAEQAJADAFAGQADAFACAHIACASIAAAZQAAAbABAIQABAGADAHIgTAAQgDgGgBgIQgMAJgJAEQgJAEgLAAQgUgBgJgIgAgDAHQgNACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgLAEgTADg");
	this.shape_159.setTransform(484.1,674.95);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("Ag6BPIAAidIBxAAIAAATIhcAAIAAAwIBWAAIAAASIhWAAIAAA1IBgAAIAAATg");
	this.shape_160.setTransform(471.025,672.775);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgkAsQgQgPABgcQgBgcAQgQQAOgQAXAAQAWAAAPAQQAPAQAAAbIAAAFIhVAAQABASAKALQAJAJAOABQALgBAHgFQAHgGAFgMIAUACQgFASgMAKQgNAKgUAAQgYgBgOgPgAgVgiQgIAJgCAPIA/AAQgBgOgGgIQgJgLgPAAQgNAAgJAJg");
	this.shape_161.setTransform(451.1,674.95);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AAbBPIAAhJQAAgNgGgHQgGgGgMAAQgIAAgHAEQgHAFgEAHQgDAHAAANIAAA/IgTAAIAAidIATAAIAAA5QAOgQATAAQAMAAAKAFQAKAFAEAJQADAJAAAPIAABJg");
	this.shape_162.setTransform(438.9,672.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_163.setTransform(429.875,673.025);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgLASQAHgCACgGQACgFAAgIIgKAAIAAgXIAWAAIAAAXQAAALgFAHQgEAIgIADg");
	this.shape_164.setTransform(417.5,681.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AglAsQgPgPAAgcQAAgcAPgQQAPgQAXAAQAWAAAPAQQAOAQAAAbIAAAFIhTAAQABASAJALQAKAJANABQAKgBAIgFQAHgGAFgMIAUACQgEASgOAKQgMAKgUAAQgYgBgPgPgAgUgiQgKAJAAAPIA/AAQgCgOgGgIQgJgLgPAAQgNAAgIAJg");
	this.shape_165.setTransform(408.3,674.95);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgJBPIAAidIATAAIAACdg");
	this.shape_166.setTransform(399.725,672.775);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgpAzQgLgKABgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgIALgDQAMgFANAAQAPAAAJAEQAJADAFAGQAEAFACAHIABASIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMAAQgSgBgKgIgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_167.setTransform(391.15,674.95);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgiAtQgPgQAAgdQAAgRAGgOQAHgOAMgHQANgGANgBQATAAAMAKQAMAJADARIgTAEQgDgMgGgGQgHgGgKAAQgOAAgJALQgJAKAAAWQAAAXAJALQAJAJANABQALgBAIgHQAIgHACgOIATADQgDATgNALQgNAMgTAAQgWAAgOgPg");
	this.shape_168.setTransform(379.925,674.95);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABAMAIAFQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgFgJgEQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_169.setTransform(368.525,674.95);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_170.setTransform(350.825,674.95);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_171.setTransform(341.825,673.025);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgCBKQgGgDgCgFQgDgGAAgRIAAhBIgOAAIAAgPIAOAAIAAgcIATgMIAAAoIATAAIAAAPIgTAAIAABCQAAAIABADIADADQACACAEAAIAJgBIADARIgPACQgKAAgFgEg");
	this.shape_172.setTransform(329.625,673.025);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgmAsQgOgPAAgdQAAgfARgPQAPgNAUAAQAYAAAPAQQAOAPAAAcQAAAUgGANQgHAMgMAIQgNAGgPABQgXgBgPgPgAgXggQgKALAAAVQAAAWAKALQAKALANAAQAOgBAKgKQAKgLAAgWQAAgVgKgLQgKgKgOgBQgNAAgKALg");
	this.shape_173.setTransform(320.275,674.95);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AAbA6IAAhEQAAgMgCgGQgCgGgGgDQgGgEgIAAQgLAAgJAIQgJAIAAAWIAAA9IgTAAIAAhxIARAAIAAAQQANgSAWAAQALAAAIADQAJAEAEAGQAFAGABAIIABATIAABFg");
	this.shape_174.setTransform(308.025,674.825);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABAMAIAFQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgFgJgEQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_175.setTransform(290.275,674.95);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_176.setTransform(282.375,672.775);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AA6A6IAAhHQAAgLgCgFQgCgFgFgEQgFgDgGAAQgMAAgIAIQgIAIAAASIAABBIgSAAIAAhJQAAgNgFgGQgFgHgLAAQgIAAgHAFQgHAEgDAIQgDAIAAAQIAAA6IgTAAIAAhxIARAAIAAAQQAFgIAJgFQAJgFAMAAQAMAAAIAFQAIAFADAKQANgUAWAAQARAAAJAJQAJAJAAAUIAABNg");
	this.shape_177.setTransform(264.675,674.825);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgpAzQgKgKAAgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgFgFQgIgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgIAMgDQALgFANAAQAPAAAJAEQAJADAFAGQADAFADAHIABASIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMAAQgSgBgKgIgAgEAHQgMACgFACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_178.setTransform(249.3,674.95);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AgeA6IAAhxIARAAIAAARQAHgMAGgEQAEgDAHAAQAKAAAKAGIgHASQgHgEgHAAQgHAAgDADQgFAEgDAHQgDAKAAANIAAA6g");
	this.shape_179.setTransform(240.45,674.825);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AghBIQgNgJABgTIATADQABAJAFAEQAHAGANAAQAMAAAHgGQAIgFACgKQACgGAAgTQgNAPgSAAQgXAAgNgRQgNgRAAgWQAAgRAGgOQAGgOALgHQALgIAPAAQATAAAOAQIAAgNIARAAIAABiQAAAagFAMQgFALgMAGQgMAHgQgBQgVABgMgKgAgUg2QgJALAAAUQAAAXAJAIQAJALAMAAQANAAAJgKQAJgKAAgVQAAgVgJgLQgJgLgNAAQgMAAgJALg");
	this.shape_180.setTransform(229.375,677.15);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgpAzQgLgKABgOQAAgIADgIQAEgGAGgFQAHgCAHgDIASgDQAWgCALgFIAAgEQAAgMgGgFQgHgGgOgBQgNABgHAEQgGAFgEAMIgSgDQADgMAFgHQAGgIALgDQAMgFANAAQAPAAAJAEQAJADAEAGQAFAFACAHIABASIAAAZQAAAbABAIQABAGADAHIgUAAQgCgGgBgIQgLAJgKAEQgJAEgMAAQgSgBgKgIgAgEAHQgLACgGACQgEACgDAFQgDADAAAGQAAAHAGAFQAGAGALAAQAKAAAJgGQAJgEADgJQAEgGAAgNIAAgHQgKAEgVADg");
	this.shape_181.setTransform(217.45,674.95);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_182.setTransform(208.925,672.775);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgZBIQgLgHgGgNQgHgOABgSQgBgRAGgNQAGgOALgGQALgIAPAAQAJAAAIAEQAIAEAFAIIAAg5IAUAAIAACdIgSAAIAAgPQgLARgVAAQgNAAgMgIgAgUgLQgIAKAAAVQgBAWAKALQAJALALAAQANAAAJgKQAJgKAAgWQAAgWgJgLQgJgLgOAAQgMAAgIALg");
	this.shape_183.setTransform(199.95,672.9);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AggAzQgLgKgDgSIATgDQABAMAIAFQAHAHAMAAQAOAAAGgGQAGgFAAgHQAAgHgFgEQgEgDgQgDQgUgFgJgEQgIgDgEgHQgEgIAAgIQAAgIADgGQAEgHAGgEQAEgDAIgCQAIgDAJAAQAMAAAKAEQAKAEAFAHQAFAGACAMIgTACQgBgJgGgFQgHgFgKAAQgNAAgGAFQgGAEAAAGQAAADADADQACAEAFACIAQAFQAVAFAIAEQAIACAFAHQAEAHAAAKQAAAJgFAJQgGAIgLAFQgKAFgOAAQgVgBgMgIg");
	this.shape_184.setTransform(182.575,674.95);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AgJBPIAAhxIATAAIAABxgAgJg3IAAgXIATAAIAAAXg");
	this.shape_185.setTransform(174.675,672.775);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AAbBPIAAhJQAAgNgGgHQgHgGgLAAQgHAAgIAEQgHAFgEAHQgDAHAAANIAAA/IgTAAIAAidIATAAIAAA5QAOgQATAAQAMAAAKAFQAJAFAFAJQADAJAAAPIAABJg");
	this.shape_186.setTransform(166.1,672.775);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgJBPIAAiKIg0AAIAAgTIB8AAIAAATIg1AAIAACKg");
	this.shape_187.setTransform(153.3,672.775);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AggCDQAohBAAhCQAAgZgGgZQgDgVgJgSQgFgNgRgdIARAAQAZAjAMAjQALAeAAAfQAAAlgOAjQgOAhgUAag");
	this.shape_188.setTransform(610.4,181.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_189.setTransform(601.55,186.95);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_190.setTransform(589.775,181.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_191.setTransform(578.875,178.325);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AgsA5QgSgUAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgTg");
	this.shape_192.setTransform(569.275,181.1);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_193.setTransform(558.3,180.925);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_194.setTransform(549.425,178.325);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgsA5QgSgUAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgTg");
	this.shape_195.setTransform(539.775,181.1);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFAKgCQAHgCAQgCQAcgDAOgFIAAgHQAAgPgGgHQgKgHgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgJAOgGQAOgFASAAQATAAALAFQALAEAGAHQAFAGADAKIABAXIAAAgQAAAiABAJQACAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFgBAGQABAKAHAHQAHAGAOABQAOAAALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_196.setTransform(516.7,181.1);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAHQAaAGAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_197.setTransform(494.075,181.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_198.setTransform(479.375,181.1);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("ABKBKIAAhaQAAgPgCgGQgDgHgGgEQgGgEgJAAQgPAAgKAKQgKAKAAAXIAABTIgYAAIAAhdQAAgQgGgJQgGgIgOAAQgKAAgJAGQgJAFgEALQgEAKAAAUIAABKIgYAAIAAiQIAWAAIAAAUQAHgKALgHQALgGAPAAQAQAAAKAGQAKAHAEAMQARgZAcAAQAVAAAMAMQALAMAAAZIAABig");
	this.shape_199.setTransform(460.025,180.925);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgeAAgSgUgAgegpQgMAOAAAbQAAAcAMANQANAOARABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgRAAgNANg");
	this.shape_200.setTransform(440.55,181.1);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AgsA5QgSgUAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgTg");
	this.shape_201.setTransform(426.225,181.1);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_202.setTransform(410.975,181.1);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgnBRIAAASIgXAAIAAjIIAZAAIAABHQAPgTAXAAQAOAAAMAGQAMAFAIAKQAHAJAFAOQAEANAAAPQAAAmgSAVQgTAUgaAAQgYAAgPgVgAgcgPQgLAOAAAaQAAAaAHAMQALASAUABQAPgBAMgOQAMgOAAgbQAAgbgLgOQgMgNgPAAQgQAAgMANg");
	this.shape_203.setTransform(395.825,178.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_204.setTransform(372.075,181.1);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAHQAaAGAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_205.setTransform(357.225,181.1);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgFQAJgGANAAQATAAAPAJQANAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgMAAgJgFQgKgGgGgIIAABHgAgbhDQgNAPAAAcQAAAbAMANQALAOAQAAQAQgBALgOQAMgNAAgcQAAgcgLgOQgMgOgPAAQgPAAgMAPg");
	this.shape_206.setTransform(342.95,183.7);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_207.setTransform(331.675,178.325);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_208.setTransform(325.425,178.325);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_209.setTransform(319.225,178.325);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_210.setTransform(308.375,181.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_211.setTransform(285.025,181.1);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQgBgRgHgJQgJgIgOAAQgKAAgKAGQgJAFgEAKQgFAJAAARIAABPIgYAAIAAjHIAYAAIAABIQASgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_212.setTransform(269.5,178.325);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_213.setTransform(257.975,178.65);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgFQAKgGAMAAQATAAAOAJQAOAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgLAAgKgFQgKgGgHgIIAABHgAgchDQgMAPAAAcQAAAbAMANQALAOAQAAQAQgBALgOQAMgNAAgcQAAgcgMgOQgLgOgPAAQgPAAgNAPg");
	this.shape_214.setTransform(238.75,183.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFAKgCQAIgCAOgCQAdgDAOgFIAAgHQAAgPgGgHQgKgHgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgJAOgGQAOgFASAAQATAAALAFQAMAEAFAHQAFAGADAKIABAXIAAAgQAAAiABAJQACAJAFAJIgaAAQgEgIgBgKQgNALgNAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgHADQgGACgDAGQgDAFgBAGQABAKAHAHQAIAGANABQAOAAALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_215.setTransform(222.75,181.1);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_216.setTransform(211.875,178.325);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAJgPAGgFQAHgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgEANAAAPIAABLg");
	this.shape_217.setTransform(205.3,180.925);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_218.setTransform(191.725,181.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgKBJIg3iQIAaAAIAeBVQAGAOADAQIAJgcIAhhXIAZAAIg3CQg");
	this.shape_219.setTransform(177,181.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgdAAgUgUgAgegpQgMAOAAAbQAAAcAMANQANAOARABQASgBAMgOQAMgOAAgbQAAgbgMgOQgMgNgSAAQgRAAgNANg");
	this.shape_220.setTransform(162.2,181.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAHQAaAGAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_221.setTransform(139.525,181.1);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_222.setTransform(128.875,178.65);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgDgHQgEgIgHgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAAMAFQALAEAFAIQAGAIABAKQACAHAAARIAABYg");
	this.shape_223.setTransform(117.05,180.925);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_224.setTransform(106.175,178.325);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgdAAgTgUgAgdgpQgNAOAAAbQAAAcANANQAMAOARABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgRAAgMANg");
	this.shape_225.setTransform(95.3,181.1);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgFQAJgGANAAQATAAAPAJQANAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgMAAgJgFQgKgGgGgIIAABHgAgbhDQgNAPAAAcQAAAbAMANQALAOAQAAQAQgBALgOQAMgNAAgcQAAgcgMgOQgLgOgPAAQgPAAgMAPg");
	this.shape_226.setTransform(80.15,183.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_227.setTransform(1162.275,145.025);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFAKgCQAIgCAPgCQAcgDAOgFIABgHQgBgPgGgHQgKgHgSAAQgRAAgIAFQgJAHgDAPIgYgEQACgOAIgKQAIgJAOgGQAOgFASAAQASAAAMAFQALAEAGAGQAFAHADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgEAFAAAGQAAAKAIAHQAHAGAPAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_228.setTransform(1151.4,147.8);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLANQgMANAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_229.setTransform(1137.125,147.8);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgeAAgTgUgAgdgpQgNAOAAAbQAAAcANANQAMAOARABQASgBAMgOQAMgOABgbQgBgbgMgOQgMgNgSAAQgRAAgMANg");
	this.shape_230.setTransform(1121.9,147.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgUBmIAAh9IgWAAIAAgTIAWAAIAAgQQABgOACgHQADgKAKgGQAHgGAQAAQALAAAMADIgDAVIgPgCQgLAAgFAGQgEAFAAANIAAANIAcAAIAAATIgcAAIAAB9g");
	this.shape_231.setTransform(1110.85,144.85);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgdAAgUgUgAgegpQgMAOAAAbQAAAcAMANQAMAOASABQASgBAMgOQANgOAAgbQAAgbgNgOQgMgNgSAAQgSAAgMANg");
	this.shape_232.setTransform(1090.75,147.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AAcBJIgWhXIgGgYIgcBvIgaAAIgsiQIAZAAIAXBSIAIAfIAIgeIAXhTIAYAAIAWBSIAIAcIAIgcIAYhSIAYAAIgtCQg");
	this.shape_233.setTransform(1072.85,147.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_234.setTransform(1059.025,145.35);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_235.setTransform(1039.375,147.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AAiBkIAAhcQAAgRgHgJQgIgIgPAAQgKAAgJAGQgKAFgFAKQgDAJAAARIAABPIgZAAIAAjHIAZAAIAABIQARgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_236.setTransform(1023.85,145.025);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_237.setTransform(1012.325,145.35);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgDgHQgDgIgGgEQgIgFgKAAQgPAAgLAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQAMAAALAFQALAEAGAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_238.setTransform(992.7,147.625);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_239.setTransform(977.125,147.8);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQgBgRgHgJQgJgIgOAAQgKAAgKAGQgJAFgEAKQgFAJAAARIAABPIgYAAIAAjHIAYAAIAABIQASgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_240.setTransform(961.6,145.025);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AAwBkIgqiXIgGgYIgFAYIgrCXIgbAAIg1jHIAbAAIAfCCIAIApIAJglIAniGIAfAAIAcBkQALAmAFAhIAKgrIAfiAIAbAAIg3DHg");
	this.shape_241.setTransform(940.625,145.025);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_242.setTransform(907.95,153.65);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAHAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_243.setTransform(896.875,147.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_244.setTransform(882.175,147.8);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_245.setTransform(871.275,145.025);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLANQgMANAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_246.setTransform(861.675,147.8);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_247.setTransform(850.7,147.625);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_248.setTransform(841.825,145.025);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLANQgMANAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_249.setTransform(832.175,147.8);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgfBcQgPgKgIgRQgIgQAAgXQAAgVAHgSQAIgRAOgKQAOgJASAAQANAAAKAGQAKAFAHAJIAAhIIAYAAIAADIIgXAAIAAgTQgOAWgaAAQgRAAgOgKgAgZgPQgMANAAAcQAAAcAMANQAMAOAPABQAQgBAMgNQALgNAAgbQgBgdgLgOQgMgNgQAAQgQAAgKANg");
	this.shape_250.setTransform(808.65,145.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_251.setTransform(793.575,147.8);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_252.setTransform(782.075,145.35);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAPgCQAdgDAOgFIAAgHQABgPgIgHQgJgHgSAAQgRAAgJAFQgHAHgFAPIgYgEQAEgOAHgKQAIgJAOgGQAOgFASAAQATAAALAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAGQAAAKAHAHQAIAGANAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_253.setTransform(770.2,147.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AgrBcQgPgMAAgXIAYADQABALAHAFQAJAHAQAAQARAAAJgHQAJgGADgNQACgHAAgYQgQATgXAAQgeAAgQgWQgRgVAAgeQAAgUAIgSQAHgSAOgJQAOgKAUAAQAYAAASAVIAAgRIAWAAIAAB8QAAAigHAOQgHAOgPAIQgPAJgUAAQgbAAgQgMgAgahFQgLANAAAbQgBAcALAMQAMANAQAAQARAAALgNQAMgMAAgcQAAgagMgOQgMgNgRAAQgPAAgLANg");
	this.shape_254.setTransform(754.25,150.575);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgDgIgHgEQgIgFgKAAQgPAAgLAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAAMAFQALAEAFAIQAFAIADAKQABAHAAARIAABYg");
	this.shape_255.setTransform(739.15,147.625);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgeAAgTgUgAgegpQgMAOAAAbQAAAcAMANQANAOARABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgRAAgNANg");
	this.shape_256.setTransform(723.6,147.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_257.setTransform(712.675,145.025);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_258.setTransform(701.825,147.8);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AgOAXQAIgDADgHQAEgGAAgMIgNAAIAAgcIAbAAIAAAcQAAAPgFAJQgGAKgLAFg");
	this.shape_259.setTransform(682.3,155.625);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAHAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_260.setTransform(671.375,147.8);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_261.setTransform(660.725,145.35);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgDgHQgDgIgGgEQgIgFgKAAQgPAAgLAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAAKAFQALAEAGAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_262.setTransform(648.9,147.625);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_263.setTransform(638.025,145.025);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgdAAgUgUgAgegpQgMAOAAAbQAAAcAMANQAMAOASABQASgBAMgOQANgOAAgbQAAgbgNgOQgMgNgSAAQgSAAgMANg");
	this.shape_264.setTransform(627.15,147.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAIgLAJgFQALgGANAAQASAAAOAJQAPAKAHARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgLAAgLgFQgJgGgHgIIAABHgAgchDQgMAPAAAcQAAAbALANQAMAOAQAAQAPgBAMgOQAMgNAAgcQAAgcgMgOQgLgOgPAAQgPAAgNAPg");
	this.shape_265.setTransform(612,150.4);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_266.setTransform(592.875,145.025);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAPgCQAdgDAOgFIABgHQAAgPgIgHQgJgHgSAAQgRAAgJAFQgHAHgEAPIgZgEQADgOAIgKQAHgJAPgGQAOgFASAAQASAAAMAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAGQgBAKAIAHQAIAGAOAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_267.setTransform(582,147.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLANQgMANAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_268.setTransform(567.725,147.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgeAAgSgUgAgdgpQgNAOAAAbQAAAcANANQALAOASABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgSAAgLANg");
	this.shape_269.setTransform(552.5,147.8);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgUBmIAAh9IgVAAIAAgTIAVAAIAAgQQAAgOADgHQADgKAJgGQAJgGAQAAQAKAAAMADIgDAVIgPgCQgLAAgEAGQgFAFAAANIAAANIAcAAIAAATIgcAAIAAB9g");
	this.shape_270.setTransform(541.45,144.85);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgeAAgSgUgAgdgpQgNAOAAAbQAAAcANANQALAOASABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgSAAgLANg");
	this.shape_271.setTransform(521.35,147.8);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AAdBJIgXhXIgGgYIgdBvIgZAAIgtiQIAaAAIAXBSIAJAfIAHgeIAXhTIAZAAIAVBSIAHAcIAJgcIAZhSIAXAAIgtCQg");
	this.shape_272.setTransform(503.45,147.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgDBfQgHgFgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgEg");
	this.shape_273.setTransform(489.625,145.35);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AgfBcQgPgKgIgRQgIgQAAgXQAAgVAHgSQAHgRAPgKQAPgJASAAQALAAALAGQAKAFAGAJIAAhIIAZAAIAADIIgXAAIAAgTQgOAWgaAAQgRAAgOgKgAgagPQgLANAAAcQAAAcAMANQAMAOAPABQAQgBALgNQAMgNAAgbQAAgdgMgOQgMgNgQAAQgPAAgMANg");
	this.shape_274.setTransform(469.5,145.2);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgEgHQgCgIgIgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQAOAAALAFQAKAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape_275.setTransform(454.45,147.625);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_276.setTransform(438.825,147.975);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgeAAgSgUgAgegpQgMAOAAAbQAAAcAMANQANAOARABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgRAAgNANg");
	this.shape_277.setTransform(423.35,147.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_278.setTransform(412.05,147.625);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFAKgCQAIgCAPgCQAcgDAOgFIABgHQgBgPgGgHQgKgHgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgJAOgGQAOgFASAAQASAAAMAFQALAEAGAGQAFAHADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFgBAGQAAAKAIAHQAHAGAOAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_279.setTransform(398.45,147.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgEgHQgCgIgIgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAALAFQAKAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape_280.setTransform(375.15,147.625);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AAcBJIgWhXIgGgYIgcBvIgaAAIgsiQIAZAAIAXBSIAIAfIAIgeIAXhTIAYAAIAWBSIAIAcIAIgcIAYhSIAYAAIgtCQg");
	this.shape_281.setTransform(357.25,147.8);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAPgCQAdgDAOgFIABgHQAAgPgIgHQgJgHgSAAQgRAAgJAFQgIAHgDAPIgZgEQADgOAIgKQAHgJAPgGQAOgFASAAQASAAAMAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFAAAGQgBAKAIAHQAHAGAPAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_282.setTransform(339.35,147.8);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AgmBKIAAiQIAWAAIAAAWQAIgPAIgFQAFgFAKAAQALAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgEANgBAPIAABLg");
	this.shape_283.setTransform(328.1,147.625);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AggBcQgOgKgIgRQgIgQAAgXQAAgVAIgSQAGgRAPgKQAOgJATAAQAMAAAKAGQAKAFAGAJIAAhIIAZAAIAADIIgXAAIAAgTQgNAWgbAAQgRAAgPgKgAgagPQgLANABAcQAAAcALANQAMAOAPABQAQgBALgNQALgNAAgbQABgdgMgOQgLgNgRAAQgQAAgLANg");
	this.shape_284.setTransform(314.05,145.2);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAHAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_285.setTransform(291.875,147.8);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_286.setTransform(281.825,145.025);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAQgCQAcgDAOgFIABgHQAAgPgIgHQgJgHgSAAQgRAAgJAFQgHAHgEAPIgZgEQADgOAIgKQAHgJAPgGQAOgFASAAQASAAAMAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgDAFAAAGQgBAKAIAHQAHAGAPAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_287.setTransform(270.95,147.8);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AgKBJIg4iQIAaAAIAgBVQAFAOADAQIAJgcIAghXIAZAAIg2CQg");
	this.shape_288.setTransform(256.25,147.8);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgdAAgTgUgAgdgpQgNAOAAAbQAAAcANANQALAOASABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgSAAgLANg");
	this.shape_289.setTransform(241.45,147.8);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_290.setTransform(218.075,147.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgmBKIAAiQIAWAAIAAAWQAJgPAGgFQAHgFAJAAQAMAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_291.setTransform(206.8,147.625);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAPgCQAdgDAOgFIAAgHQABgPgIgHQgJgHgSAAQgRAAgJAFQgHAHgEAPIgZgEQADgOAIgKQAHgJAPgGQAOgFASAAQASAAAMAFQAMAEAFAGQAGAHACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAGQgBAKAIAHQAIAGAOAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_292.setTransform(193.2,147.8);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAHAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_293.setTransform(170.575,147.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_294.setTransform(155.875,147.8);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAHAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_295.setTransform(141.025,147.8);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAWAAIAAASQAJgLAJgFQALgGANAAQASAAAPAJQAOAKAHARQAHASAAAVQAAAWgIARQgIASgPAJQgPAKgRAAQgLAAgLgFQgJgGgGgIIAABHgAgbhDQgNAPAAAcQAAAbAMANQALAOAQAAQAPgBAMgOQAMgNAAgcQAAgcgLgOQgMgOgPAAQgPAAgMAPg");
	this.shape_296.setTransform(126.75,150.4);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_297.setTransform(115.475,145.025);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_298.setTransform(109.225,145.025);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_299.setTransform(103.025,145.025);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AhKBkIAAjHICQAAIAAAXIh1AAIAAA+IBuAAIAAAWIhuAAIAABFIB6AAIAAAXg");
	this.shape_300.setTransform(90.975,145.025);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AAQCDQgUgagOghQgOgjAAglQAAgfALgeQAMgjAZgjIARAAQgQAdgGANQgIASgEAUQgGAaAAAZQAABCAoBBg");
	this.shape_301.setTransform(77,147.8);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("AgNAOIAAgbIAbAAIAAAbg");
	this.shape_302.setTransform(301.5,120.35);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_303.setTransform(289.725,114.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAGQAaAHAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_304.setTransform(274.875,114.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgFQAJgGANAAQATAAAPAJQANAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgMAAgJgFQgKgGgGgIIAABHgAgbhDQgNAPAAAcQAAAbAMANQALAOAQAAQAQgBALgOQAMgNAAgcQAAgcgMgOQgLgOgPAAQgPAAgMAPg");
	this.shape_305.setTransform(260.6,117.1);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_306.setTransform(249.325,111.725);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_307.setTransform(243.075,111.725);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_308.setTransform(236.875,111.725);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_309.setTransform(226.025,114.5);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_310.setTransform(202.675,114.5);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQgBgRgHgJQgJgIgOAAQgKAAgKAGQgJAFgEAKQgFAJAAARIAABPIgYAAIAAjHIAYAAIAABIQASgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_311.setTransform(187.15,111.725);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_312.setTransform(175.625,112.05);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFFFFF").s().p("AgTBmIAAh9IgXAAIAAgTIAXAAIAAgQQAAgOACgHQAEgKAIgGQAJgGAPAAQALAAANADIgEAVIgOgCQgMAAgEAGQgFAFAAANIAAANIAcAAIAAATIgcAAIAAB9g");
	this.shape_313.setTransform(160.5,111.55);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgeAAgSgUgAgdgpQgNAOAAAbQAAAcANANQALAOASABQASgBANgOQALgOABgbQgBgbgLgOQgNgNgSAAQgSAAgLANg");
	this.shape_314.setTransform(148.2,114.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_315.setTransform(128.875,112.05);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQAAgPgDgHQgEgIgHgEQgHgFgKAAQgOAAgMAKQgMAKAAAcIAABOIgYAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAAMAFQALAEAFAIQAGAIABAKQACAHAAARIAABYg");
	this.shape_316.setTransform(117.05,114.325);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_317.setTransform(106.175,111.725);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgdAAgTgUgAgdgpQgNAOAAAbQAAAcANANQAMAOARABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgRAAgMANg");
	this.shape_318.setTransform(95.3,114.5);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgFQAJgGANAAQATAAAPAJQANAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgMAAgJgFQgKgGgGgIIAABHgAgbhDQgNAPAAAcQAAAbAMANQALAOAQAAQAQgBALgOQAMgNAAgcQAAgcgMgOQgLgOgPAAQgPAAgMAPg");
	this.shape_319.setTransform(80.15,117.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_320.setTransform(1176.275,78.425);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFALgCQAGgCAPgCQAdgDAOgFIAAgHQABgPgIgHQgJgHgSAAQgRAAgJAFQgIAHgEAPIgYgEQADgOAIgKQAHgJAPgGQAOgFASAAQATAAALAFQALAEAGAHQAGAGACAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAGQAAAKAHAHQAIAGANAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_321.setTransform(1165.4,81.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_322.setTransform(1151.125,81.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgeAAgTgUgAgegpQgMAOAAAbQAAAcAMANQANAOARABQASgBAMgOQAMgOAAgbQAAgbgMgOQgMgNgSAAQgRAAgNANg");
	this.shape_323.setTransform(1135.9,81.2);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFFFFF").s().p("AgTBmIAAh9IgXAAIAAgTIAXAAIAAgQQAAgOACgIQADgJAJgGQAJgGAPAAQALAAAMADIgDAVIgOgCQgMAAgEAGQgFAFAAANIAAANIAcAAIAAATIgcAAIAAB9g");
	this.shape_324.setTransform(1124.85,78.25);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_325.setTransform(1104.725,81.2);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#FFFFFF").s().p("AAjBKIAAhXQgBgPgDgHQgCgIgIgEQgHgFgKAAQgPAAgLAKQgLAKAAAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAeAAQANAAAKAFQALAEAGAIQAFAIACAKQACAHAAARIAABYg");
	this.shape_326.setTransform(1089.2,81.025);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgJAQQgIAQgQAJQgQAJgTAAQgdAAgUgUgAgegpQgMAOAAAbQAAAcAMANQAMAOASABQASgBAMgOQANgOAAgbQAAgbgNgOQgMgNgSAAQgSAAgMANg");
	this.shape_327.setTransform(1073.65,81.2);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_328.setTransform(1054.325,78.75);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAPgCQAdgDAOgFIAAgHQABgPgIgHQgJgHgSAAQgRAAgJAFQgIAHgEAPIgYgEQADgOAIgKQAIgJAOgGQAOgFASAAQATAAALAFQALAEAGAHQAGAGACAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAGQAAAKAHAHQAIAGANAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_329.setTransform(1042.45,81.2);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgEgIgGgEQgIgFgKAAQgPAAgLAKQgMAKABAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAALAFQAMAEAFAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_330.setTransform(1019.15,81.025);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_331.setTransform(1003.525,81.375);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAHQAaAGAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_332.setTransform(988.725,81.2);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_333.setTransform(966.225,81.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQgBgRgHgJQgJgIgOAAQgKAAgKAGQgJAFgFAKQgEAJAAARIAABPIgYAAIAAjHIAYAAIAABIQASgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_334.setTransform(950.7,78.425);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_335.setTransform(939.175,78.75);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQgBgRgHgJQgJgIgOAAQgKAAgJAGQgKAFgFAKQgDAJAAARIAABPIgZAAIAAjHIAZAAIAABIQARgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_336.setTransform(919.55,78.425);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_337.setTransform(908.025,78.75);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_338.setTransform(900.875,78.425);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#FFFFFF").s().p("AAcBJIgWhXIgGgYIgcBvIgaAAIgtiQIAaAAIAXBSIAJAfIAHgeIAXhTIAZAAIAVBSIAHAcIAJgcIAZhSIAXAAIgtCQg");
	this.shape_339.setTransform(887.65,81.2);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_340.setTransform(866.625,78.425);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAJgCQAIgCAPgCQAcgDAOgFIABgHQgBgPgGgHQgKgHgSAAQgRAAgIAFQgJAHgDAPIgYgEQACgOAIgKQAHgJAPgGQAOgFASAAQASAAAMAFQALAEAGAHQAFAGADAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgEAFAAAGQAAAKAIAHQAHAGAPAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_341.setTransform(855.75,81.2);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_342.setTransform(841.475,81.2);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_343.setTransform(830.925,78.425);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_344.setTransform(824.075,78.75);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAWAAIAAASQAJgLAJgFQAKgGANAAQATAAAPAJQANAKAIARQAHASAAAVQAAAWgIARQgIASgPAJQgQAKgQAAQgMAAgKgFQgJgGgGgIIAABHgAgbhDQgNAPAAAcQAAAbAMANQALAOAQAAQAPgBAMgOQAMgNAAgcQAAgcgLgOQgMgOgPAAQgPAAgMAPg");
	this.shape_345.setTransform(812.65,83.8);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_346.setTransform(801.375,78.425);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_347.setTransform(795.125,78.425);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_348.setTransform(788.925,78.425);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_349.setTransform(778.075,81.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#FFFFFF").s().p("Ag0BjIgEgXQAIACAHAAQAIAAAFgCQAFgEADgEIAHgTIACgGIg3iQIAbAAIAfBUIAJAgQAEgPAGgQIAfhVIAYAAIg2CTQgJAYgFAIQgGANgIAFQgJAGgMAAQgHAAgIgDg");
	this.shape_350.setTransform(755.65,84.15);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_351.setTransform(745.375,78.425);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_352.setTransform(739.175,78.425);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFAKgCQAIgCAPgCQAcgDAOgFIABgHQgBgPgGgHQgKgHgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgJAOgGQAOgFASAAQASAAAMAFQALAEAGAHQAFAGADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgDgIgCgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFgBAGQAAAKAIAHQAHAGAOAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_353.setTransform(728.3,81.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_354.setTransform(712.725,81.375);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_355.setTransform(701.275,78.75);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_356.setTransform(690.675,81.2);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAJgCQAIgCAPgCQAcgDAOgFIABgHQgBgPgHgHQgJgHgSAAQgRAAgJAFQgIAHgDAPIgZgEQADgOAIgKQAHgJAPgGQAOgFASAAQASAAAMAFQAMAEAFAHQAFAGADAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgOALgMAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgGADQgHACgDAGQgEAFAAAGQAAAKAIAHQAHAGAPAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_357.setTransform(675.4,81.2);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_358.setTransform(652.075,81.2);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAJgPAGgFQAGgFAJAAQANAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_359.setTransform(640.8,81.025);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFALgCQAGgCAPgCQAdgDAOgFIAAgHQABgPgIgHQgJgHgSAAQgRAAgJAFQgIAHgEAPIgYgEQAEgOAHgKQAHgJAPgGQAOgFASAAQATAAALAFQALAEAGAHQAGAGACAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgEgIgBgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAGQAAAKAHAHQAIAGANAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_360.setTransform(627.2,81.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_361.setTransform(607.925,78.75);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_362.setTransform(596.025,81.375);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#FFFFFF").s().p("AgnBRIAAASIgXAAIAAjIIAZAAIAABHQAPgTAXAAQAOAAAMAGQAMAFAIAKQAHAJAFAOQAEANAAAPQAAAmgSAVQgTAUgaAAQgYAAgPgVgAgcgPQgLAOAAAaQAAAaAHAMQALASAUABQAPgBAMgOQAMgOAAgbQAAgbgLgOQgMgNgPAAQgQAAgMANg");
	this.shape_363.setTransform(580.925,78.6);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_364.setTransform(561.45,81.025);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAHgFAKgCQAIgCAPgCQAcgDAOgFIABgHQgBgPgGgHQgKgHgSAAQgRAAgIAFQgIAHgFAPIgXgEQADgOAHgKQAIgJAOgGQAOgFASAAQASAAAMAFQALAEAGAHQAFAGADAKIABAXIAAAfQAAAjABAJQACAJAFAJIgaAAQgDgIgCgKQgOALgMAFQgMAFgOAAQgYAAgNgMgAgFAJQgPACgGADQgHACgDAGQgDAFgBAGQAAAKAIAHQAHAGAOAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_365.setTransform(547.85,81.2);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_366.setTransform(536.975,78.425);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#FFFFFF").s().p("AggBFQgLgFgGgHQgFgIgCgLQgCgHAAgPIAAhZIAZAAIAABPQAAATABAHQADAKAHAFQAIAGALAAQAKAAAJgGQAKgGAEgJQAEgKAAgTIAAhMIAZAAIAACQIgWAAIAAgWQgRAZgcAAQgNAAgLgFg");
	this.shape_367.setTransform(526.075,81.375);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_368.setTransform(511.825,81.2);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAJgPAGgFQAGgFAJAAQANAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_369.setTransform(500.85,81.025);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_370.setTransform(491.975,78.425);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#FFFFFF").s().p("AgsA4QgSgTAAgkQAAgXAHgSQAIgSAQgIQAQgJASAAQAYAAAPAMQAPAMAEAWIgYAEQgEgPgIgIQgJgGgMAAQgSAAgLAMQgMAOAAAcQAAAdALANQALANARABQAPAAAKgJQAJgJADgSIAYACQgEAagQAOQgQAOgYAAQgdAAgSgUg");
	this.shape_371.setTransform(482.325,81.2);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_372.setTransform(463.325,78.75);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgeAAgSgUgAgdgpQgNAOAAAbQAAAcANANQALAOASABQASgBANgOQALgOABgbQgBgbgLgOQgNgNgSAAQgSAAgLANg");
	this.shape_373.setTransform(451.5,81.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgEgIgGgEQgIgFgKAAQgPAAgLAKQgMAKABAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAALAFQAMAEAFAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_374.setTransform(435.95,81.025);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_375.setTransform(412.575,81.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#FFFFFF").s().p("AgmBKIAAiQIAWAAIAAAWQAJgPAGgFQAGgFAJAAQANAAANAIIgJAXQgJgGgJAAQgIAAgGAFQgGAFgDAJQgDANAAAPIAABLg");
	this.shape_376.setTransform(401.3,81.025);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAPgCQAdgDAOgFIAAgHQABgPgIgHQgJgHgSAAQgRAAgJAFQgHAHgEAPIgZgEQAEgOAHgKQAIgJAOgGQAOgFASAAQATAAALAFQAMAEAFAHQAGAGACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgEAFABAGQAAAKAHAHQAIAGANAAQAOABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_377.setTransform(387.7,81.2);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAHQAaAGAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_378.setTransform(365.075,81.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_379.setTransform(354.425,78.75);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_380.setTransform(342.575,81.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#FFFFFF").s().p("AAiBKIAAhXQAAgPgCgHQgEgIgGgEQgIgFgKAAQgPAAgLAKQgMAKABAcIAABOIgZAAIAAiQIAWAAIAAAVQAQgYAdAAQANAAALAFQAMAEAFAIQAGAIACAKQABAHAAARIAABYg");
	this.shape_381.setTransform(327.05,81.025);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#FFFFFF").s().p("Ag1BAQgNgMAAgSQAAgKAFgJQAFgJAIgFQAIgFAKgCQAGgCAQgCQAcgDAOgFIABgHQAAgPgIgHQgJgHgSAAQgRAAgJAFQgHAHgEAPIgZgEQADgOAIgKQAHgJAPgGQAOgFASAAQASAAAMAFQAMAEAFAHQAGAGACAKIABAXIAAAfQAAAjACAJQABAJAFAJIgaAAQgDgIgCgKQgNALgNAFQgMAFgPAAQgXAAgNgMgAgFAJQgPACgHADQgGACgDAGQgDAFAAAGQgBAKAIAHQAHAGAPAAQANABALgHQALgGAFgLQAEgIAAgQIAAgJQgNAFgaAEg");
	this.shape_382.setTransform(311.45,81.2);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#FFFFFF").s().p("AgLBkIAAjHIAXAAIAADHg");
	this.shape_383.setTransform(300.575,78.425);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#FFFFFF").s().p("Ag+BmIAAjHIAXAAIAAASQAHgLALgFQAKgGANAAQASAAAOAJQAPAKAHARQAHASAAAVQAAAWgIARQgIASgPAJQgPAKgRAAQgMAAgJgFQgKgGgHgIIAABHgAgchDQgMAPAAAcQAAAbALANQAMAOAQAAQAPgBAMgOQAMgNAAgcQAAgcgMgOQgLgOgPAAQgPAAgNAPg");
	this.shape_384.setTransform(290.15,83.8);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_385.setTransform(266.375,81.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQgBgRgHgJQgJgIgOAAQgKAAgJAGQgKAFgFAKQgDAJAAARIAABPIgZAAIAAjHIAZAAIAABIQARgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_386.setTransform(250.85,78.425);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_387.setTransform(239.325,78.75);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#FFFFFF").s().p("AgUBmIAAh9IgVAAIAAgTIAVAAIAAgQQAAgOADgIQADgJAJgGQAJgGAQAAQAKAAAMADIgDAVIgPgCQgLAAgEAGQgFAFAAANIAAANIAcAAIAAATIgcAAIAAB9g");
	this.shape_388.setTransform(224.2,78.25);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#FFFFFF").s().p("AgxA4QgSgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgdAAgUgUgAgdgpQgNAOAAAbQAAAcANANQALAOASABQASgBAMgOQANgOAAgbQAAgbgNgOQgMgNgSAAQgSAAgLANg");
	this.shape_389.setTransform(211.9,81.2);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#FFFFFF").s().p("AgoBAQgPgMgEgXIAYgDQACAOAKAIQAJAHAQABQARAAAIgIQAIgGAAgKQAAgIgHgEQgFgEgUgFQgagHgLgEQgKgFgGgJQgFgJAAgKQAAgKAEgIQAFgJAIgFQAFgEAKgDQAKgDALAAQARAAANAFQAMAFAHAIQAGAJACAOIgYADQgCgLgIgHQgHgFgOAAQgRgBgHAGQgHAGAAAHQAAAFADAEQADAEAGACIAVAHQAaAGAKAFQALAEAGAIQAFAJAAAMQAAAMgHALQgHALgNAGQgOAGgRAAQgbAAgPgMg");
	this.shape_390.setTransform(189.225,81.2);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#FFFFFF").s().p("AgDBeQgHgEgDgGQgDgIAAgVIAAhTIgSAAIAAgTIASAAIAAgkIAXgPIAAAzIAZAAIAAATIgZAAIAABUQAAALACACQABADADACQADACAFAAIALgBIADAVQgKADgIAAQgNAAgHgFg");
	this.shape_391.setTransform(178.575,78.75);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#FFFFFF").s().p("AgLBkIAAiQIAXAAIAACQgAgLhHIAAgcIAXAAIAAAcg");
	this.shape_392.setTransform(171.425,78.425);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#FFFFFF").s().p("AgnBRIAAASIgXAAIAAjIIAZAAIAABHQAPgTAXAAQAOAAAMAGQAMAFAIAKQAHAJAFAOQAEANAAAPQAAAmgSAVQgTAUgaAAQgYAAgPgVgAgcgPQgLAOAAAaQAAAaAHAMQALASAUABQAPgBAMgOQAMgOAAgbQAAgbgLgOQgMgNgPAAQgQAAgMANg");
	this.shape_393.setTransform(160.925,78.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#FFFFFF").s().p("AgnBKIAAiQIAXAAIAAAWQAIgPAIgFQAGgFAIAAQAMAAANAIIgIAXQgJgGgJAAQgIAAgFAFQgHAFgCAJQgFANAAAPIAABLg");
	this.shape_394.setTransform(149.25,81.025);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#FFFFFF").s().p("AgwA4QgTgTAAglQAAgoAWgTQATgQAaAAQAeAAATATQATAUAAAjQAAAbgIAQQgJAQgQAJQgQAJgTAAQgdAAgTgUgAgdgpQgNAOAAAbQAAAcANANQALAOASABQASgBANgOQAMgOgBgbQABgbgMgOQgNgNgSAAQgSAAgLANg");
	this.shape_395.setTransform(135.7,81.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#FFFFFF").s().p("AgvA4QgTgTAAgkQAAgjATgUQATgVAdAAQAdAAASAUQATATAAAkIAAAGIhsAAQACAYAMANQAMANARAAQAOAAAJgIQAKgGAGgQIAZADQgGAWgQANQgRAMgZAAQgfAAgSgUgAgagrQgMALgBATIBQAAQgCgTgHgJQgMgNgTAAQgQAAgLALg");
	this.shape_396.setTransform(112.325,81.2);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#FFFFFF").s().p("AAjBkIAAhcQAAgRgJgJQgIgIgOAAQgKAAgKAGQgJAFgEAKQgFAJAAARIAABPIgYAAIAAjHIAYAAIAABIQASgUAZAAQAQAAAMAGQAMAGAFAMQAFALAAAUIAABcg");
	this.shape_397.setTransform(96.8,78.425);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFFFFF").s().p("AgMBkIAAiwIhDAAIAAgXICfAAIAAAXIhDAAIAACwg");
	this.shape_398.setTransform(80.6,78.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).wait(1));

	// Black Background
	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f().s("#000000").ss(5,1,1).p("Ehj/g4PMDH/AAAMAAABwfMjH/AAAg");
	this.shape_399.setTransform(640,360);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#000000").s().p("Ehj/A4QMAAAhwfMDH/AAAMAAABwfg");
	this.shape_400.setTransform(640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_400},{t:this.shape_399}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(637.5,357.5,645,365);
// library properties:
lib.properties = {
	id: '9E1E46AB2A1D0B4FA35B85D49EC0558E',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['9E1E46AB2A1D0B4FA35B85D49EC0558E'] = {
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