// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__3922__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_37182 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_37182){
return (function (){
var _STAR_always_update_STAR_37183 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_37183;
}});})(_STAR_always_update_STAR_37182))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_37182;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__37185 = arguments.length;
switch (G__37185) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__37187_37191 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__37188_37192 = null;
var count__37189_37193 = (0);
var i__37190_37194 = (0);
while(true){
if((i__37190_37194 < count__37189_37193)){
var v_37195 = cljs.core._nth.call(null,chunk__37188_37192,i__37190_37194);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_37195);


var G__37196 = seq__37187_37191;
var G__37197 = chunk__37188_37192;
var G__37198 = count__37189_37193;
var G__37199 = (i__37190_37194 + (1));
seq__37187_37191 = G__37196;
chunk__37188_37192 = G__37197;
count__37189_37193 = G__37198;
i__37190_37194 = G__37199;
continue;
} else {
var temp__5457__auto___37200 = cljs.core.seq.call(null,seq__37187_37191);
if(temp__5457__auto___37200){
var seq__37187_37201__$1 = temp__5457__auto___37200;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37187_37201__$1)){
var c__4319__auto___37202 = cljs.core.chunk_first.call(null,seq__37187_37201__$1);
var G__37203 = cljs.core.chunk_rest.call(null,seq__37187_37201__$1);
var G__37204 = c__4319__auto___37202;
var G__37205 = cljs.core.count.call(null,c__4319__auto___37202);
var G__37206 = (0);
seq__37187_37191 = G__37203;
chunk__37188_37192 = G__37204;
count__37189_37193 = G__37205;
i__37190_37194 = G__37206;
continue;
} else {
var v_37207 = cljs.core.first.call(null,seq__37187_37201__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_37207);


var G__37208 = cljs.core.next.call(null,seq__37187_37201__$1);
var G__37209 = null;
var G__37210 = (0);
var G__37211 = (0);
seq__37187_37191 = G__37208;
chunk__37188_37192 = G__37209;
count__37189_37193 = G__37210;
i__37190_37194 = G__37211;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1564480785293
