// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__36856__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36856 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36857__i = 0, G__36857__a = new Array(arguments.length -  0);
while (G__36857__i < G__36857__a.length) {G__36857__a[G__36857__i] = arguments[G__36857__i + 0]; ++G__36857__i;}
  args = new cljs.core.IndexedSeq(G__36857__a,0,null);
} 
return G__36856__delegate.call(this,args);};
G__36856.cljs$lang$maxFixedArity = 0;
G__36856.cljs$lang$applyTo = (function (arglist__36858){
var args = cljs.core.seq(arglist__36858);
return G__36856__delegate(args);
});
G__36856.cljs$core$IFn$_invoke$arity$variadic = G__36856__delegate;
return G__36856;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__36859__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__36859 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36860__i = 0, G__36860__a = new Array(arguments.length -  0);
while (G__36860__i < G__36860__a.length) {G__36860__a[G__36860__i] = arguments[G__36860__i + 0]; ++G__36860__i;}
  args = new cljs.core.IndexedSeq(G__36860__a,0,null);
} 
return G__36859__delegate.call(this,args);};
G__36859.cljs$lang$maxFixedArity = 0;
G__36859.cljs$lang$applyTo = (function (arglist__36861){
var args = cljs.core.seq(arglist__36861);
return G__36859__delegate(args);
});
G__36859.cljs$core$IFn$_invoke$arity$variadic = G__36859__delegate;
return G__36859;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1564480784093
