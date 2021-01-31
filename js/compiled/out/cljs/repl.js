// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__26484){
var map__26485 = p__26484;
var map__26485__$1 = (((((!((map__26485 == null))))?(((((map__26485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26485):map__26485);
var m = map__26485__$1;
var n = cljs.core.get.call(null,map__26485__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__26485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26487_26519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26488_26520 = null;
var count__26489_26521 = (0);
var i__26490_26522 = (0);
while(true){
if((i__26490_26522 < count__26489_26521)){
var f_26523 = cljs.core._nth.call(null,chunk__26488_26520,i__26490_26522);
cljs.core.println.call(null,"  ",f_26523);


var G__26524 = seq__26487_26519;
var G__26525 = chunk__26488_26520;
var G__26526 = count__26489_26521;
var G__26527 = (i__26490_26522 + (1));
seq__26487_26519 = G__26524;
chunk__26488_26520 = G__26525;
count__26489_26521 = G__26526;
i__26490_26522 = G__26527;
continue;
} else {
var temp__5720__auto___26528 = cljs.core.seq.call(null,seq__26487_26519);
if(temp__5720__auto___26528){
var seq__26487_26529__$1 = temp__5720__auto___26528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26487_26529__$1)){
var c__4550__auto___26530 = cljs.core.chunk_first.call(null,seq__26487_26529__$1);
var G__26531 = cljs.core.chunk_rest.call(null,seq__26487_26529__$1);
var G__26532 = c__4550__auto___26530;
var G__26533 = cljs.core.count.call(null,c__4550__auto___26530);
var G__26534 = (0);
seq__26487_26519 = G__26531;
chunk__26488_26520 = G__26532;
count__26489_26521 = G__26533;
i__26490_26522 = G__26534;
continue;
} else {
var f_26535 = cljs.core.first.call(null,seq__26487_26529__$1);
cljs.core.println.call(null,"  ",f_26535);


var G__26536 = cljs.core.next.call(null,seq__26487_26529__$1);
var G__26537 = null;
var G__26538 = (0);
var G__26539 = (0);
seq__26487_26519 = G__26536;
chunk__26488_26520 = G__26537;
count__26489_26521 = G__26538;
i__26490_26522 = G__26539;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26540 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26540);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26540)))?cljs.core.second.call(null,arglists_26540):arglists_26540));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26491_26541 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26492_26542 = null;
var count__26493_26543 = (0);
var i__26494_26544 = (0);
while(true){
if((i__26494_26544 < count__26493_26543)){
var vec__26505_26545 = cljs.core._nth.call(null,chunk__26492_26542,i__26494_26544);
var name_26546 = cljs.core.nth.call(null,vec__26505_26545,(0),null);
var map__26508_26547 = cljs.core.nth.call(null,vec__26505_26545,(1),null);
var map__26508_26548__$1 = (((((!((map__26508_26547 == null))))?(((((map__26508_26547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26508_26547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26508_26547):map__26508_26547);
var doc_26549 = cljs.core.get.call(null,map__26508_26548__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26550 = cljs.core.get.call(null,map__26508_26548__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26546);

cljs.core.println.call(null," ",arglists_26550);

if(cljs.core.truth_(doc_26549)){
cljs.core.println.call(null," ",doc_26549);
} else {
}


var G__26551 = seq__26491_26541;
var G__26552 = chunk__26492_26542;
var G__26553 = count__26493_26543;
var G__26554 = (i__26494_26544 + (1));
seq__26491_26541 = G__26551;
chunk__26492_26542 = G__26552;
count__26493_26543 = G__26553;
i__26494_26544 = G__26554;
continue;
} else {
var temp__5720__auto___26555 = cljs.core.seq.call(null,seq__26491_26541);
if(temp__5720__auto___26555){
var seq__26491_26556__$1 = temp__5720__auto___26555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26491_26556__$1)){
var c__4550__auto___26557 = cljs.core.chunk_first.call(null,seq__26491_26556__$1);
var G__26558 = cljs.core.chunk_rest.call(null,seq__26491_26556__$1);
var G__26559 = c__4550__auto___26557;
var G__26560 = cljs.core.count.call(null,c__4550__auto___26557);
var G__26561 = (0);
seq__26491_26541 = G__26558;
chunk__26492_26542 = G__26559;
count__26493_26543 = G__26560;
i__26494_26544 = G__26561;
continue;
} else {
var vec__26510_26562 = cljs.core.first.call(null,seq__26491_26556__$1);
var name_26563 = cljs.core.nth.call(null,vec__26510_26562,(0),null);
var map__26513_26564 = cljs.core.nth.call(null,vec__26510_26562,(1),null);
var map__26513_26565__$1 = (((((!((map__26513_26564 == null))))?(((((map__26513_26564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26513_26564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26513_26564):map__26513_26564);
var doc_26566 = cljs.core.get.call(null,map__26513_26565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_26567 = cljs.core.get.call(null,map__26513_26565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_26563);

cljs.core.println.call(null," ",arglists_26567);

if(cljs.core.truth_(doc_26566)){
cljs.core.println.call(null," ",doc_26566);
} else {
}


var G__26568 = cljs.core.next.call(null,seq__26491_26556__$1);
var G__26569 = null;
var G__26570 = (0);
var G__26571 = (0);
seq__26491_26541 = G__26568;
chunk__26492_26542 = G__26569;
count__26493_26543 = G__26570;
i__26494_26544 = G__26571;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__26515 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__26516 = null;
var count__26517 = (0);
var i__26518 = (0);
while(true){
if((i__26518 < count__26517)){
var role = cljs.core._nth.call(null,chunk__26516,i__26518);
var temp__5720__auto___26572__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26572__$1)){
var spec_26573 = temp__5720__auto___26572__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26573));
} else {
}


var G__26574 = seq__26515;
var G__26575 = chunk__26516;
var G__26576 = count__26517;
var G__26577 = (i__26518 + (1));
seq__26515 = G__26574;
chunk__26516 = G__26575;
count__26517 = G__26576;
i__26518 = G__26577;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__26515);
if(temp__5720__auto____$1){
var seq__26515__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26515__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__26515__$1);
var G__26578 = cljs.core.chunk_rest.call(null,seq__26515__$1);
var G__26579 = c__4550__auto__;
var G__26580 = cljs.core.count.call(null,c__4550__auto__);
var G__26581 = (0);
seq__26515 = G__26578;
chunk__26516 = G__26579;
count__26517 = G__26580;
i__26518 = G__26581;
continue;
} else {
var role = cljs.core.first.call(null,seq__26515__$1);
var temp__5720__auto___26582__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___26582__$2)){
var spec_26583 = temp__5720__auto___26582__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_26583));
} else {
}


var G__26584 = cljs.core.next.call(null,seq__26515__$1);
var G__26585 = null;
var G__26586 = (0);
var G__26587 = (0);
seq__26515 = G__26584;
chunk__26516 = G__26585;
count__26517 = G__26586;
i__26518 = G__26587;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__26588 = cljs.core.conj.call(null,via,t);
var G__26589 = cljs.core.ex_cause.call(null,t);
via = G__26588;
t = G__26589;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__26592 = datafied_throwable;
var map__26592__$1 = (((((!((map__26592 == null))))?(((((map__26592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26592):map__26592);
var via = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__26592__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__26593 = cljs.core.last.call(null,via);
var map__26593__$1 = (((((!((map__26593 == null))))?(((((map__26593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26593):map__26593);
var type = cljs.core.get.call(null,map__26593__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__26593__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__26593__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__26594 = data;
var map__26594__$1 = (((((!((map__26594 == null))))?(((((map__26594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26594):map__26594);
var problems = cljs.core.get.call(null,map__26594__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__26594__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__26594__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__26595 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__26595__$1 = (((((!((map__26595 == null))))?(((((map__26595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26595):map__26595);
var top_data = map__26595__$1;
var source = cljs.core.get.call(null,map__26595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__26600 = phase;
var G__26600__$1 = (((G__26600 instanceof cljs.core.Keyword))?G__26600.fqn:null);
switch (G__26600__$1) {
case "read-source":
var map__26601 = data;
var map__26601__$1 = (((((!((map__26601 == null))))?(((((map__26601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26601):map__26601);
var line = cljs.core.get.call(null,map__26601__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26601__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__26603 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__26603__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26603,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26603);
var G__26603__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26603__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26603__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26603__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26603__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__26604 = top_data;
var G__26604__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__26604,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__26604);
var G__26604__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__26604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__26604__$1);
var G__26604__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26604__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26604__$2);
var G__26604__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26604__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26604__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26604__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26604__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__26605 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26605,(0),null);
var method = cljs.core.nth.call(null,vec__26605,(1),null);
var file = cljs.core.nth.call(null,vec__26605,(2),null);
var line = cljs.core.nth.call(null,vec__26605,(3),null);
var G__26608 = top_data;
var G__26608__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__26608,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__26608);
var G__26608__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__26608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__26608__$1);
var G__26608__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__26608__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__26608__$2);
var G__26608__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__26608__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__26608__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__26608__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__26608__$4;
}

break;
case "execution":
var vec__26609 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__26609,(0),null);
var method = cljs.core.nth.call(null,vec__26609,(1),null);
var file = cljs.core.nth.call(null,vec__26609,(2),null);
var line = cljs.core.nth.call(null,vec__26609,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__26609,source__$1,method,file,line,G__26600,G__26600__$1,map__26592,map__26592__$1,via,trace,phase,map__26593,map__26593__$1,type,message,data,map__26594,map__26594__$1,problems,fn,caller,map__26595,map__26595__$1,top_data,source){
return (function (p1__26591_SHARP_){
var or__4131__auto__ = (p1__26591_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__26591_SHARP_);
}
});})(vec__26609,source__$1,method,file,line,G__26600,G__26600__$1,map__26592,map__26592__$1,via,trace,phase,map__26593,map__26593__$1,type,message,data,map__26594,map__26594__$1,problems,fn,caller,map__26595,map__26595__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__26612 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__26612__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__26612,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__26612);
var G__26612__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__26612__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__26612__$1);
var G__26612__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__26612__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__26612__$2);
var G__26612__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__26612__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__26612__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__26612__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__26612__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26600__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__26616){
var map__26617 = p__26616;
var map__26617__$1 = (((((!((map__26617 == null))))?(((((map__26617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26617):map__26617);
var triage_data = map__26617__$1;
var phase = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__26617__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__26619 = phase;
var G__26619__$1 = (((G__26619 instanceof cljs.core.Keyword))?G__26619.fqn:null);
switch (G__26619__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26620_26629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26621_26630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26622_26631 = true;
var _STAR_print_fn_STAR__temp_val__26623_26632 = ((function (_STAR_print_newline_STAR__orig_val__26620_26629,_STAR_print_fn_STAR__orig_val__26621_26630,_STAR_print_newline_STAR__temp_val__26622_26631,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26620_26629,_STAR_print_fn_STAR__orig_val__26621_26630,_STAR_print_newline_STAR__temp_val__26622_26631,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26622_26631;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26623_26632;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26620_26629,_STAR_print_fn_STAR__orig_val__26621_26630,_STAR_print_newline_STAR__temp_val__26622_26631,_STAR_print_fn_STAR__temp_val__26623_26632,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__26620_26629,_STAR_print_fn_STAR__orig_val__26621_26630,_STAR_print_newline_STAR__temp_val__26622_26631,_STAR_print_fn_STAR__temp_val__26623_26632,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26614_SHARP_){
return cljs.core.dissoc.call(null,p1__26614_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26620_26629,_STAR_print_fn_STAR__orig_val__26621_26630,_STAR_print_newline_STAR__temp_val__26622_26631,_STAR_print_fn_STAR__temp_val__26623_26632,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26620_26629,_STAR_print_fn_STAR__orig_val__26621_26630,_STAR_print_newline_STAR__temp_val__26622_26631,_STAR_print_fn_STAR__temp_val__26623_26632,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26621_26630;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26620_26629;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26624_26633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26625_26634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26626_26635 = true;
var _STAR_print_fn_STAR__temp_val__26627_26636 = ((function (_STAR_print_newline_STAR__orig_val__26624_26633,_STAR_print_fn_STAR__orig_val__26625_26634,_STAR_print_newline_STAR__temp_val__26626_26635,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__26624_26633,_STAR_print_fn_STAR__orig_val__26625_26634,_STAR_print_newline_STAR__temp_val__26626_26635,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26626_26635;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26627_26636;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__26624_26633,_STAR_print_fn_STAR__orig_val__26625_26634,_STAR_print_newline_STAR__temp_val__26626_26635,_STAR_print_fn_STAR__temp_val__26627_26636,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__26624_26633,_STAR_print_fn_STAR__orig_val__26625_26634,_STAR_print_newline_STAR__temp_val__26626_26635,_STAR_print_fn_STAR__temp_val__26627_26636,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__26615_SHARP_){
return cljs.core.dissoc.call(null,p1__26615_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__26624_26633,_STAR_print_fn_STAR__orig_val__26625_26634,_STAR_print_newline_STAR__temp_val__26626_26635,_STAR_print_fn_STAR__temp_val__26627_26636,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__26624_26633,_STAR_print_fn_STAR__orig_val__26625_26634,_STAR_print_newline_STAR__temp_val__26626_26635,_STAR_print_fn_STAR__temp_val__26627_26636,sb__4661__auto__,G__26619,G__26619__$1,loc,class_name,simple_class,cause_type,format,map__26617,map__26617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26625_26634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26624_26633;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26619__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1611747933855
