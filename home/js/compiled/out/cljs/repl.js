// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__43331){
var map__43332 = p__43331;
var map__43332__$1 = ((((!((map__43332 == null)))?(((((map__43332.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43332.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43332):map__43332);
var m = map__43332__$1;
var n = cljs.core.get.call(null,map__43332__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__43332__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43334_43356 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43335_43357 = null;
var count__43336_43358 = (0);
var i__43337_43359 = (0);
while(true){
if((i__43337_43359 < count__43336_43358)){
var f_43360 = cljs.core._nth.call(null,chunk__43335_43357,i__43337_43359);
cljs.core.println.call(null,"  ",f_43360);


var G__43361 = seq__43334_43356;
var G__43362 = chunk__43335_43357;
var G__43363 = count__43336_43358;
var G__43364 = (i__43337_43359 + (1));
seq__43334_43356 = G__43361;
chunk__43335_43357 = G__43362;
count__43336_43358 = G__43363;
i__43337_43359 = G__43364;
continue;
} else {
var temp__5457__auto___43365 = cljs.core.seq.call(null,seq__43334_43356);
if(temp__5457__auto___43365){
var seq__43334_43366__$1 = temp__5457__auto___43365;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43334_43366__$1)){
var c__4319__auto___43367 = cljs.core.chunk_first.call(null,seq__43334_43366__$1);
var G__43368 = cljs.core.chunk_rest.call(null,seq__43334_43366__$1);
var G__43369 = c__4319__auto___43367;
var G__43370 = cljs.core.count.call(null,c__4319__auto___43367);
var G__43371 = (0);
seq__43334_43356 = G__43368;
chunk__43335_43357 = G__43369;
count__43336_43358 = G__43370;
i__43337_43359 = G__43371;
continue;
} else {
var f_43372 = cljs.core.first.call(null,seq__43334_43366__$1);
cljs.core.println.call(null,"  ",f_43372);


var G__43373 = cljs.core.next.call(null,seq__43334_43366__$1);
var G__43374 = null;
var G__43375 = (0);
var G__43376 = (0);
seq__43334_43356 = G__43373;
chunk__43335_43357 = G__43374;
count__43336_43358 = G__43375;
i__43337_43359 = G__43376;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43377 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43377);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43377)))?cljs.core.second.call(null,arglists_43377):arglists_43377));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__43338_43378 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43339_43379 = null;
var count__43340_43380 = (0);
var i__43341_43381 = (0);
while(true){
if((i__43341_43381 < count__43340_43380)){
var vec__43342_43382 = cljs.core._nth.call(null,chunk__43339_43379,i__43341_43381);
var name_43383 = cljs.core.nth.call(null,vec__43342_43382,(0),null);
var map__43345_43384 = cljs.core.nth.call(null,vec__43342_43382,(1),null);
var map__43345_43385__$1 = ((((!((map__43345_43384 == null)))?(((((map__43345_43384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43345_43384.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43345_43384):map__43345_43384);
var doc_43386 = cljs.core.get.call(null,map__43345_43385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43387 = cljs.core.get.call(null,map__43345_43385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43383);

cljs.core.println.call(null," ",arglists_43387);

if(cljs.core.truth_(doc_43386)){
cljs.core.println.call(null," ",doc_43386);
} else {
}


var G__43388 = seq__43338_43378;
var G__43389 = chunk__43339_43379;
var G__43390 = count__43340_43380;
var G__43391 = (i__43341_43381 + (1));
seq__43338_43378 = G__43388;
chunk__43339_43379 = G__43389;
count__43340_43380 = G__43390;
i__43341_43381 = G__43391;
continue;
} else {
var temp__5457__auto___43392 = cljs.core.seq.call(null,seq__43338_43378);
if(temp__5457__auto___43392){
var seq__43338_43393__$1 = temp__5457__auto___43392;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43338_43393__$1)){
var c__4319__auto___43394 = cljs.core.chunk_first.call(null,seq__43338_43393__$1);
var G__43395 = cljs.core.chunk_rest.call(null,seq__43338_43393__$1);
var G__43396 = c__4319__auto___43394;
var G__43397 = cljs.core.count.call(null,c__4319__auto___43394);
var G__43398 = (0);
seq__43338_43378 = G__43395;
chunk__43339_43379 = G__43396;
count__43340_43380 = G__43397;
i__43341_43381 = G__43398;
continue;
} else {
var vec__43347_43399 = cljs.core.first.call(null,seq__43338_43393__$1);
var name_43400 = cljs.core.nth.call(null,vec__43347_43399,(0),null);
var map__43350_43401 = cljs.core.nth.call(null,vec__43347_43399,(1),null);
var map__43350_43402__$1 = ((((!((map__43350_43401 == null)))?(((((map__43350_43401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43350_43401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43350_43401):map__43350_43401);
var doc_43403 = cljs.core.get.call(null,map__43350_43402__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_43404 = cljs.core.get.call(null,map__43350_43402__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_43400);

cljs.core.println.call(null," ",arglists_43404);

if(cljs.core.truth_(doc_43403)){
cljs.core.println.call(null," ",doc_43403);
} else {
}


var G__43405 = cljs.core.next.call(null,seq__43338_43393__$1);
var G__43406 = null;
var G__43407 = (0);
var G__43408 = (0);
seq__43338_43378 = G__43405;
chunk__43339_43379 = G__43406;
count__43340_43380 = G__43407;
i__43341_43381 = G__43408;
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
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__43352 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__43353 = null;
var count__43354 = (0);
var i__43355 = (0);
while(true){
if((i__43355 < count__43354)){
var role = cljs.core._nth.call(null,chunk__43353,i__43355);
var temp__5457__auto___43409__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43409__$1)){
var spec_43410 = temp__5457__auto___43409__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43410));
} else {
}


var G__43411 = seq__43352;
var G__43412 = chunk__43353;
var G__43413 = count__43354;
var G__43414 = (i__43355 + (1));
seq__43352 = G__43411;
chunk__43353 = G__43412;
count__43354 = G__43413;
i__43355 = G__43414;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__43352);
if(temp__5457__auto____$1){
var seq__43352__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43352__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__43352__$1);
var G__43415 = cljs.core.chunk_rest.call(null,seq__43352__$1);
var G__43416 = c__4319__auto__;
var G__43417 = cljs.core.count.call(null,c__4319__auto__);
var G__43418 = (0);
seq__43352 = G__43415;
chunk__43353 = G__43416;
count__43354 = G__43417;
i__43355 = G__43418;
continue;
} else {
var role = cljs.core.first.call(null,seq__43352__$1);
var temp__5457__auto___43419__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___43419__$2)){
var spec_43420 = temp__5457__auto___43419__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_43420));
} else {
}


var G__43421 = cljs.core.next.call(null,seq__43352__$1);
var G__43422 = null;
var G__43423 = (0);
var G__43424 = (0);
seq__43352 = G__43421;
chunk__43353 = G__43422;
count__43354 = G__43423;
i__43355 = G__43424;
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

//# sourceMappingURL=repl.js.map?rel=1564480794900
