// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e43619){if((e43619 instanceof Error)){
var e = e43619;
return "Error: Unable to stringify";
} else {
throw e43619;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43622 = arguments.length;
switch (G__43622) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43620_SHARP_){
if(typeof p1__43620_SHARP_ === 'string'){
return p1__43620_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43620_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43625 = arguments.length;
var i__4500__auto___43626 = (0);
while(true){
if((i__4500__auto___43626 < len__4499__auto___43625)){
args__4502__auto__.push((arguments[i__4500__auto___43626]));

var G__43627 = (i__4500__auto___43626 + (1));
i__4500__auto___43626 = G__43627;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43624){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43624));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43629 = arguments.length;
var i__4500__auto___43630 = (0);
while(true){
if((i__4500__auto___43630 < len__4499__auto___43629)){
args__4502__auto__.push((arguments[i__4500__auto___43630]));

var G__43631 = (i__4500__auto___43630 + (1));
i__4500__auto___43630 = G__43631;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43628){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43628));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43632){
var map__43633 = p__43632;
var map__43633__$1 = ((((!((map__43633 == null)))?(((((map__43633.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43633.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43633):map__43633);
var message = cljs.core.get.call(null,map__43633__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43633__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32474__auto___43712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___43712,ch){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___43712,ch){
return (function (state_43684){
var state_val_43685 = (state_43684[(1)]);
if((state_val_43685 === (7))){
var inst_43680 = (state_43684[(2)]);
var state_43684__$1 = state_43684;
var statearr_43686_43713 = state_43684__$1;
(statearr_43686_43713[(2)] = inst_43680);

(statearr_43686_43713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (1))){
var state_43684__$1 = state_43684;
var statearr_43687_43714 = state_43684__$1;
(statearr_43687_43714[(2)] = null);

(statearr_43687_43714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (4))){
var inst_43637 = (state_43684[(7)]);
var inst_43637__$1 = (state_43684[(2)]);
var state_43684__$1 = (function (){var statearr_43688 = state_43684;
(statearr_43688[(7)] = inst_43637__$1);

return statearr_43688;
})();
if(cljs.core.truth_(inst_43637__$1)){
var statearr_43689_43715 = state_43684__$1;
(statearr_43689_43715[(1)] = (5));

} else {
var statearr_43690_43716 = state_43684__$1;
(statearr_43690_43716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (15))){
var inst_43644 = (state_43684[(8)]);
var inst_43659 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43644);
var inst_43660 = cljs.core.first.call(null,inst_43659);
var inst_43661 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43660);
var inst_43662 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43661)].join('');
var inst_43663 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43662);
var state_43684__$1 = state_43684;
var statearr_43691_43717 = state_43684__$1;
(statearr_43691_43717[(2)] = inst_43663);

(statearr_43691_43717[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (13))){
var inst_43668 = (state_43684[(2)]);
var state_43684__$1 = state_43684;
var statearr_43692_43718 = state_43684__$1;
(statearr_43692_43718[(2)] = inst_43668);

(statearr_43692_43718[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (6))){
var state_43684__$1 = state_43684;
var statearr_43693_43719 = state_43684__$1;
(statearr_43693_43719[(2)] = null);

(statearr_43693_43719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (17))){
var inst_43666 = (state_43684[(2)]);
var state_43684__$1 = state_43684;
var statearr_43694_43720 = state_43684__$1;
(statearr_43694_43720[(2)] = inst_43666);

(statearr_43694_43720[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (3))){
var inst_43682 = (state_43684[(2)]);
var state_43684__$1 = state_43684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43684__$1,inst_43682);
} else {
if((state_val_43685 === (12))){
var inst_43643 = (state_43684[(9)]);
var inst_43657 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43643,opts);
var state_43684__$1 = state_43684;
if(cljs.core.truth_(inst_43657)){
var statearr_43695_43721 = state_43684__$1;
(statearr_43695_43721[(1)] = (15));

} else {
var statearr_43696_43722 = state_43684__$1;
(statearr_43696_43722[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (2))){
var state_43684__$1 = state_43684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43684__$1,(4),ch);
} else {
if((state_val_43685 === (11))){
var inst_43644 = (state_43684[(8)]);
var inst_43649 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43650 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43644);
var inst_43651 = cljs.core.async.timeout.call(null,(1000));
var inst_43652 = [inst_43650,inst_43651];
var inst_43653 = (new cljs.core.PersistentVector(null,2,(5),inst_43649,inst_43652,null));
var state_43684__$1 = state_43684;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43684__$1,(14),inst_43653);
} else {
if((state_val_43685 === (9))){
var inst_43644 = (state_43684[(8)]);
var inst_43670 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43671 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43644);
var inst_43672 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43671);
var inst_43673 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43672)].join('');
var inst_43674 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43673);
var state_43684__$1 = (function (){var statearr_43697 = state_43684;
(statearr_43697[(10)] = inst_43670);

return statearr_43697;
})();
var statearr_43698_43723 = state_43684__$1;
(statearr_43698_43723[(2)] = inst_43674);

(statearr_43698_43723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (5))){
var inst_43637 = (state_43684[(7)]);
var inst_43639 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43640 = (new cljs.core.PersistentArrayMap(null,2,inst_43639,null));
var inst_43641 = (new cljs.core.PersistentHashSet(null,inst_43640,null));
var inst_43642 = figwheel.client.focus_msgs.call(null,inst_43641,inst_43637);
var inst_43643 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43642);
var inst_43644 = cljs.core.first.call(null,inst_43642);
var inst_43645 = figwheel.client.autoload_QMARK_.call(null);
var state_43684__$1 = (function (){var statearr_43699 = state_43684;
(statearr_43699[(8)] = inst_43644);

(statearr_43699[(9)] = inst_43643);

return statearr_43699;
})();
if(cljs.core.truth_(inst_43645)){
var statearr_43700_43724 = state_43684__$1;
(statearr_43700_43724[(1)] = (8));

} else {
var statearr_43701_43725 = state_43684__$1;
(statearr_43701_43725[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (14))){
var inst_43655 = (state_43684[(2)]);
var state_43684__$1 = state_43684;
var statearr_43702_43726 = state_43684__$1;
(statearr_43702_43726[(2)] = inst_43655);

(statearr_43702_43726[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (16))){
var state_43684__$1 = state_43684;
var statearr_43703_43727 = state_43684__$1;
(statearr_43703_43727[(2)] = null);

(statearr_43703_43727[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (10))){
var inst_43676 = (state_43684[(2)]);
var state_43684__$1 = (function (){var statearr_43704 = state_43684;
(statearr_43704[(11)] = inst_43676);

return statearr_43704;
})();
var statearr_43705_43728 = state_43684__$1;
(statearr_43705_43728[(2)] = null);

(statearr_43705_43728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43685 === (8))){
var inst_43643 = (state_43684[(9)]);
var inst_43647 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43643,opts);
var state_43684__$1 = state_43684;
if(cljs.core.truth_(inst_43647)){
var statearr_43706_43729 = state_43684__$1;
(statearr_43706_43729[(1)] = (11));

} else {
var statearr_43707_43730 = state_43684__$1;
(statearr_43707_43730[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32474__auto___43712,ch))
;
return ((function (switch__32384__auto__,c__32474__auto___43712,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32385__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32385__auto____0 = (function (){
var statearr_43708 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43708[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32385__auto__);

(statearr_43708[(1)] = (1));

return statearr_43708;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32385__auto____1 = (function (state_43684){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_43684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e43709){if((e43709 instanceof Object)){
var ex__32388__auto__ = e43709;
var statearr_43710_43731 = state_43684;
(statearr_43710_43731[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43709;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43732 = state_43684;
state_43684 = G__43732;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32385__auto__ = function(state_43684){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32385__auto____1.call(this,state_43684);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32385__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32385__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___43712,ch))
})();
var state__32476__auto__ = (function (){var statearr_43711 = f__32475__auto__.call(null);
(statearr_43711[(6)] = c__32474__auto___43712);

return statearr_43711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___43712,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43733_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43733_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43737 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43737){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43736 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43735,_STAR_print_fn_STAR_43736,sb,base_path_43737){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_43735,_STAR_print_fn_STAR_43736,sb,base_path_43737))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43736;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43735;
}}catch (e43734){if((e43734 instanceof Error)){
var e = e43734;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43737], null));
} else {
var e = e43734;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43737))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43738){
var map__43739 = p__43738;
var map__43739__$1 = ((((!((map__43739 == null)))?(((((map__43739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43739):map__43739);
var opts = map__43739__$1;
var build_id = cljs.core.get.call(null,map__43739__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43739,map__43739__$1,opts,build_id){
return (function (p__43741){
var vec__43742 = p__43741;
var seq__43743 = cljs.core.seq.call(null,vec__43742);
var first__43744 = cljs.core.first.call(null,seq__43743);
var seq__43743__$1 = cljs.core.next.call(null,seq__43743);
var map__43745 = first__43744;
var map__43745__$1 = ((((!((map__43745 == null)))?(((((map__43745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43745):map__43745);
var msg = map__43745__$1;
var msg_name = cljs.core.get.call(null,map__43745__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43743__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43742,seq__43743,first__43744,seq__43743__$1,map__43745,map__43745__$1,msg,msg_name,_,map__43739,map__43739__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43742,seq__43743,first__43744,seq__43743__$1,map__43745,map__43745__$1,msg,msg_name,_,map__43739,map__43739__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43739,map__43739__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43747){
var vec__43748 = p__43747;
var seq__43749 = cljs.core.seq.call(null,vec__43748);
var first__43750 = cljs.core.first.call(null,seq__43749);
var seq__43749__$1 = cljs.core.next.call(null,seq__43749);
var map__43751 = first__43750;
var map__43751__$1 = ((((!((map__43751 == null)))?(((((map__43751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43751):map__43751);
var msg = map__43751__$1;
var msg_name = cljs.core.get.call(null,map__43751__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43749__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43753){
var map__43754 = p__43753;
var map__43754__$1 = ((((!((map__43754 == null)))?(((((map__43754.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43754.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43754):map__43754);
var on_compile_warning = cljs.core.get.call(null,map__43754__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43754__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43754,map__43754__$1,on_compile_warning,on_compile_fail){
return (function (p__43756){
var vec__43757 = p__43756;
var seq__43758 = cljs.core.seq.call(null,vec__43757);
var first__43759 = cljs.core.first.call(null,seq__43758);
var seq__43758__$1 = cljs.core.next.call(null,seq__43758);
var map__43760 = first__43759;
var map__43760__$1 = ((((!((map__43760 == null)))?(((((map__43760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43760):map__43760);
var msg = map__43760__$1;
var msg_name = cljs.core.get.call(null,map__43760__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43758__$1;
var pred__43762 = cljs.core._EQ_;
var expr__43763 = msg_name;
if(cljs.core.truth_(pred__43762.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43763))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43762.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43763))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43754,map__43754__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__,msg_hist,msg_names,msg){
return (function (state_43852){
var state_val_43853 = (state_43852[(1)]);
if((state_val_43853 === (7))){
var inst_43772 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43772)){
var statearr_43854_43901 = state_43852__$1;
(statearr_43854_43901[(1)] = (8));

} else {
var statearr_43855_43902 = state_43852__$1;
(statearr_43855_43902[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (20))){
var inst_43846 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43856_43903 = state_43852__$1;
(statearr_43856_43903[(2)] = inst_43846);

(statearr_43856_43903[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (27))){
var inst_43842 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43857_43904 = state_43852__$1;
(statearr_43857_43904[(2)] = inst_43842);

(statearr_43857_43904[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (1))){
var inst_43765 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43765)){
var statearr_43858_43905 = state_43852__$1;
(statearr_43858_43905[(1)] = (2));

} else {
var statearr_43859_43906 = state_43852__$1;
(statearr_43859_43906[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (24))){
var inst_43844 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43860_43907 = state_43852__$1;
(statearr_43860_43907[(2)] = inst_43844);

(statearr_43860_43907[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (4))){
var inst_43850 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43852__$1,inst_43850);
} else {
if((state_val_43853 === (15))){
var inst_43848 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43861_43908 = state_43852__$1;
(statearr_43861_43908[(2)] = inst_43848);

(statearr_43861_43908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (21))){
var inst_43801 = (state_43852[(2)]);
var inst_43802 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43803 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43802);
var state_43852__$1 = (function (){var statearr_43862 = state_43852;
(statearr_43862[(7)] = inst_43801);

return statearr_43862;
})();
var statearr_43863_43909 = state_43852__$1;
(statearr_43863_43909[(2)] = inst_43803);

(statearr_43863_43909[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (31))){
var inst_43831 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43831)){
var statearr_43864_43910 = state_43852__$1;
(statearr_43864_43910[(1)] = (34));

} else {
var statearr_43865_43911 = state_43852__$1;
(statearr_43865_43911[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (32))){
var inst_43840 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43866_43912 = state_43852__$1;
(statearr_43866_43912[(2)] = inst_43840);

(statearr_43866_43912[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (33))){
var inst_43827 = (state_43852[(2)]);
var inst_43828 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43829 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43828);
var state_43852__$1 = (function (){var statearr_43867 = state_43852;
(statearr_43867[(8)] = inst_43827);

return statearr_43867;
})();
var statearr_43868_43913 = state_43852__$1;
(statearr_43868_43913[(2)] = inst_43829);

(statearr_43868_43913[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (13))){
var inst_43786 = figwheel.client.heads_up.clear.call(null);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(16),inst_43786);
} else {
if((state_val_43853 === (22))){
var inst_43807 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43808 = figwheel.client.heads_up.append_warning_message.call(null,inst_43807);
var state_43852__$1 = state_43852;
var statearr_43869_43914 = state_43852__$1;
(statearr_43869_43914[(2)] = inst_43808);

(statearr_43869_43914[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (36))){
var inst_43838 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43870_43915 = state_43852__$1;
(statearr_43870_43915[(2)] = inst_43838);

(statearr_43870_43915[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (29))){
var inst_43818 = (state_43852[(2)]);
var inst_43819 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43820 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43819);
var state_43852__$1 = (function (){var statearr_43871 = state_43852;
(statearr_43871[(9)] = inst_43818);

return statearr_43871;
})();
var statearr_43872_43916 = state_43852__$1;
(statearr_43872_43916[(2)] = inst_43820);

(statearr_43872_43916[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (6))){
var inst_43767 = (state_43852[(10)]);
var state_43852__$1 = state_43852;
var statearr_43873_43917 = state_43852__$1;
(statearr_43873_43917[(2)] = inst_43767);

(statearr_43873_43917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (28))){
var inst_43814 = (state_43852[(2)]);
var inst_43815 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43816 = figwheel.client.heads_up.display_warning.call(null,inst_43815);
var state_43852__$1 = (function (){var statearr_43874 = state_43852;
(statearr_43874[(11)] = inst_43814);

return statearr_43874;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(29),inst_43816);
} else {
if((state_val_43853 === (25))){
var inst_43812 = figwheel.client.heads_up.clear.call(null);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(28),inst_43812);
} else {
if((state_val_43853 === (34))){
var inst_43833 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(37),inst_43833);
} else {
if((state_val_43853 === (17))){
var inst_43792 = (state_43852[(2)]);
var inst_43793 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43794 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43793);
var state_43852__$1 = (function (){var statearr_43875 = state_43852;
(statearr_43875[(12)] = inst_43792);

return statearr_43875;
})();
var statearr_43876_43918 = state_43852__$1;
(statearr_43876_43918[(2)] = inst_43794);

(statearr_43876_43918[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (3))){
var inst_43784 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43784)){
var statearr_43877_43919 = state_43852__$1;
(statearr_43877_43919[(1)] = (13));

} else {
var statearr_43878_43920 = state_43852__$1;
(statearr_43878_43920[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (12))){
var inst_43780 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43879_43921 = state_43852__$1;
(statearr_43879_43921[(2)] = inst_43780);

(statearr_43879_43921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (2))){
var inst_43767 = (state_43852[(10)]);
var inst_43767__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43852__$1 = (function (){var statearr_43880 = state_43852;
(statearr_43880[(10)] = inst_43767__$1);

return statearr_43880;
})();
if(cljs.core.truth_(inst_43767__$1)){
var statearr_43881_43922 = state_43852__$1;
(statearr_43881_43922[(1)] = (5));

} else {
var statearr_43882_43923 = state_43852__$1;
(statearr_43882_43923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (23))){
var inst_43810 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43810)){
var statearr_43883_43924 = state_43852__$1;
(statearr_43883_43924[(1)] = (25));

} else {
var statearr_43884_43925 = state_43852__$1;
(statearr_43884_43925[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (35))){
var state_43852__$1 = state_43852;
var statearr_43885_43926 = state_43852__$1;
(statearr_43885_43926[(2)] = null);

(statearr_43885_43926[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (19))){
var inst_43805 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43805)){
var statearr_43886_43927 = state_43852__$1;
(statearr_43886_43927[(1)] = (22));

} else {
var statearr_43887_43928 = state_43852__$1;
(statearr_43887_43928[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (11))){
var inst_43776 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43888_43929 = state_43852__$1;
(statearr_43888_43929[(2)] = inst_43776);

(statearr_43888_43929[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (9))){
var inst_43778 = figwheel.client.heads_up.clear.call(null);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(12),inst_43778);
} else {
if((state_val_43853 === (5))){
var inst_43769 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43852__$1 = state_43852;
var statearr_43889_43930 = state_43852__$1;
(statearr_43889_43930[(2)] = inst_43769);

(statearr_43889_43930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (14))){
var inst_43796 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43796)){
var statearr_43890_43931 = state_43852__$1;
(statearr_43890_43931[(1)] = (18));

} else {
var statearr_43891_43932 = state_43852__$1;
(statearr_43891_43932[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (26))){
var inst_43822 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43852__$1 = state_43852;
if(cljs.core.truth_(inst_43822)){
var statearr_43892_43933 = state_43852__$1;
(statearr_43892_43933[(1)] = (30));

} else {
var statearr_43893_43934 = state_43852__$1;
(statearr_43893_43934[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (16))){
var inst_43788 = (state_43852[(2)]);
var inst_43789 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43790 = figwheel.client.heads_up.display_exception.call(null,inst_43789);
var state_43852__$1 = (function (){var statearr_43894 = state_43852;
(statearr_43894[(13)] = inst_43788);

return statearr_43894;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(17),inst_43790);
} else {
if((state_val_43853 === (30))){
var inst_43824 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43825 = figwheel.client.heads_up.display_warning.call(null,inst_43824);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(33),inst_43825);
} else {
if((state_val_43853 === (10))){
var inst_43782 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43895_43935 = state_43852__$1;
(statearr_43895_43935[(2)] = inst_43782);

(statearr_43895_43935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (18))){
var inst_43798 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43799 = figwheel.client.heads_up.display_exception.call(null,inst_43798);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(21),inst_43799);
} else {
if((state_val_43853 === (37))){
var inst_43835 = (state_43852[(2)]);
var state_43852__$1 = state_43852;
var statearr_43896_43936 = state_43852__$1;
(statearr_43896_43936[(2)] = inst_43835);

(statearr_43896_43936[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (8))){
var inst_43774 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43852__$1 = state_43852;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43852__$1,(11),inst_43774);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32474__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32384__auto__,c__32474__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto____0 = (function (){
var statearr_43897 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43897[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto__);

(statearr_43897[(1)] = (1));

return statearr_43897;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto____1 = (function (state_43852){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_43852);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e43898){if((e43898 instanceof Object)){
var ex__32388__auto__ = e43898;
var statearr_43899_43937 = state_43852;
(statearr_43899_43937[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43898;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43938 = state_43852;
state_43852 = G__43938;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto__ = function(state_43852){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto____1.call(this,state_43852);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__,msg_hist,msg_names,msg))
})();
var state__32476__auto__ = (function (){var statearr_43900 = f__32475__auto__.call(null);
(statearr_43900[(6)] = c__32474__auto__);

return statearr_43900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__,msg_hist,msg_names,msg))
);

return c__32474__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32474__auto___43967 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___43967,ch){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___43967,ch){
return (function (state_43953){
var state_val_43954 = (state_43953[(1)]);
if((state_val_43954 === (1))){
var state_43953__$1 = state_43953;
var statearr_43955_43968 = state_43953__$1;
(statearr_43955_43968[(2)] = null);

(statearr_43955_43968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43954 === (2))){
var state_43953__$1 = state_43953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43953__$1,(4),ch);
} else {
if((state_val_43954 === (3))){
var inst_43951 = (state_43953[(2)]);
var state_43953__$1 = state_43953;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43953__$1,inst_43951);
} else {
if((state_val_43954 === (4))){
var inst_43941 = (state_43953[(7)]);
var inst_43941__$1 = (state_43953[(2)]);
var state_43953__$1 = (function (){var statearr_43956 = state_43953;
(statearr_43956[(7)] = inst_43941__$1);

return statearr_43956;
})();
if(cljs.core.truth_(inst_43941__$1)){
var statearr_43957_43969 = state_43953__$1;
(statearr_43957_43969[(1)] = (5));

} else {
var statearr_43958_43970 = state_43953__$1;
(statearr_43958_43970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43954 === (5))){
var inst_43941 = (state_43953[(7)]);
var inst_43943 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43941);
var state_43953__$1 = state_43953;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43953__$1,(8),inst_43943);
} else {
if((state_val_43954 === (6))){
var state_43953__$1 = state_43953;
var statearr_43959_43971 = state_43953__$1;
(statearr_43959_43971[(2)] = null);

(statearr_43959_43971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43954 === (7))){
var inst_43949 = (state_43953[(2)]);
var state_43953__$1 = state_43953;
var statearr_43960_43972 = state_43953__$1;
(statearr_43960_43972[(2)] = inst_43949);

(statearr_43960_43972[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43954 === (8))){
var inst_43945 = (state_43953[(2)]);
var state_43953__$1 = (function (){var statearr_43961 = state_43953;
(statearr_43961[(8)] = inst_43945);

return statearr_43961;
})();
var statearr_43962_43973 = state_43953__$1;
(statearr_43962_43973[(2)] = null);

(statearr_43962_43973[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32474__auto___43967,ch))
;
return ((function (switch__32384__auto__,c__32474__auto___43967,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32385__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32385__auto____0 = (function (){
var statearr_43963 = [null,null,null,null,null,null,null,null,null];
(statearr_43963[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32385__auto__);

(statearr_43963[(1)] = (1));

return statearr_43963;
});
var figwheel$client$heads_up_plugin_$_state_machine__32385__auto____1 = (function (state_43953){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_43953);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e43964){if((e43964 instanceof Object)){
var ex__32388__auto__ = e43964;
var statearr_43965_43974 = state_43953;
(statearr_43965_43974[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43953);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43975 = state_43953;
state_43953 = G__43975;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32385__auto__ = function(state_43953){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32385__auto____1.call(this,state_43953);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32385__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32385__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___43967,ch))
})();
var state__32476__auto__ = (function (){var statearr_43966 = f__32475__auto__.call(null);
(statearr_43966[(6)] = c__32474__auto___43967);

return statearr_43966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___43967,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__){
return (function (state_43981){
var state_val_43982 = (state_43981[(1)]);
if((state_val_43982 === (1))){
var inst_43976 = cljs.core.async.timeout.call(null,(3000));
var state_43981__$1 = state_43981;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43981__$1,(2),inst_43976);
} else {
if((state_val_43982 === (2))){
var inst_43978 = (state_43981[(2)]);
var inst_43979 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_43981__$1 = (function (){var statearr_43983 = state_43981;
(statearr_43983[(7)] = inst_43978);

return statearr_43983;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43981__$1,inst_43979);
} else {
return null;
}
}
});})(c__32474__auto__))
;
return ((function (switch__32384__auto__,c__32474__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32385__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32385__auto____0 = (function (){
var statearr_43984 = [null,null,null,null,null,null,null,null];
(statearr_43984[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32385__auto__);

(statearr_43984[(1)] = (1));

return statearr_43984;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32385__auto____1 = (function (state_43981){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_43981);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e43985){if((e43985 instanceof Object)){
var ex__32388__auto__ = e43985;
var statearr_43986_43988 = state_43981;
(statearr_43986_43988[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43981);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43989 = state_43981;
state_43981 = G__43989;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32385__auto__ = function(state_43981){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32385__auto____1.call(this,state_43981);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32385__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32385__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__))
})();
var state__32476__auto__ = (function (){var statearr_43987 = f__32475__auto__.call(null);
(statearr_43987[(6)] = c__32474__auto__);

return statearr_43987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__))
);

return c__32474__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__,figwheel_version,temp__5457__auto__){
return (function (state_43996){
var state_val_43997 = (state_43996[(1)]);
if((state_val_43997 === (1))){
var inst_43990 = cljs.core.async.timeout.call(null,(2000));
var state_43996__$1 = state_43996;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43996__$1,(2),inst_43990);
} else {
if((state_val_43997 === (2))){
var inst_43992 = (state_43996[(2)]);
var inst_43993 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_43994 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_43993);
var state_43996__$1 = (function (){var statearr_43998 = state_43996;
(statearr_43998[(7)] = inst_43992);

return statearr_43998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43996__$1,inst_43994);
} else {
return null;
}
}
});})(c__32474__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__32384__auto__,c__32474__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto____0 = (function (){
var statearr_43999 = [null,null,null,null,null,null,null,null];
(statearr_43999[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto__);

(statearr_43999[(1)] = (1));

return statearr_43999;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto____1 = (function (state_43996){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_43996);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e44000){if((e44000 instanceof Object)){
var ex__32388__auto__ = e44000;
var statearr_44001_44003 = state_43996;
(statearr_44001_44003[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43996);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44004 = state_43996;
state_43996 = G__44004;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto__ = function(state_43996){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto____1.call(this,state_43996);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__,figwheel_version,temp__5457__auto__))
})();
var state__32476__auto__ = (function (){var statearr_44002 = f__32475__auto__.call(null);
(statearr_44002[(6)] = c__32474__auto__);

return statearr_44002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__,figwheel_version,temp__5457__auto__))
);

return c__32474__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44005){
var map__44006 = p__44005;
var map__44006__$1 = ((((!((map__44006 == null)))?(((((map__44006.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44006.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44006):map__44006);
var file = cljs.core.get.call(null,map__44006__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44006__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44006__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44008 = "";
var G__44008__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44008),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44008);
var G__44008__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44008__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44008__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44008__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44008__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44009){
var map__44010 = p__44009;
var map__44010__$1 = ((((!((map__44010 == null)))?(((((map__44010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44010):map__44010);
var ed = map__44010__$1;
var formatted_exception = cljs.core.get.call(null,map__44010__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44010__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44010__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44012_44016 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44013_44017 = null;
var count__44014_44018 = (0);
var i__44015_44019 = (0);
while(true){
if((i__44015_44019 < count__44014_44018)){
var msg_44020 = cljs.core._nth.call(null,chunk__44013_44017,i__44015_44019);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44020);


var G__44021 = seq__44012_44016;
var G__44022 = chunk__44013_44017;
var G__44023 = count__44014_44018;
var G__44024 = (i__44015_44019 + (1));
seq__44012_44016 = G__44021;
chunk__44013_44017 = G__44022;
count__44014_44018 = G__44023;
i__44015_44019 = G__44024;
continue;
} else {
var temp__5457__auto___44025 = cljs.core.seq.call(null,seq__44012_44016);
if(temp__5457__auto___44025){
var seq__44012_44026__$1 = temp__5457__auto___44025;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44012_44026__$1)){
var c__4319__auto___44027 = cljs.core.chunk_first.call(null,seq__44012_44026__$1);
var G__44028 = cljs.core.chunk_rest.call(null,seq__44012_44026__$1);
var G__44029 = c__4319__auto___44027;
var G__44030 = cljs.core.count.call(null,c__4319__auto___44027);
var G__44031 = (0);
seq__44012_44016 = G__44028;
chunk__44013_44017 = G__44029;
count__44014_44018 = G__44030;
i__44015_44019 = G__44031;
continue;
} else {
var msg_44032 = cljs.core.first.call(null,seq__44012_44026__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44032);


var G__44033 = cljs.core.next.call(null,seq__44012_44026__$1);
var G__44034 = null;
var G__44035 = (0);
var G__44036 = (0);
seq__44012_44016 = G__44033;
chunk__44013_44017 = G__44034;
count__44014_44018 = G__44035;
i__44015_44019 = G__44036;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44037){
var map__44038 = p__44037;
var map__44038__$1 = ((((!((map__44038 == null)))?(((((map__44038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44038):map__44038);
var w = map__44038__$1;
var message = cljs.core.get.call(null,map__44038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44040 = cljs.core.seq.call(null,plugins);
var chunk__44041 = null;
var count__44042 = (0);
var i__44043 = (0);
while(true){
if((i__44043 < count__44042)){
var vec__44044 = cljs.core._nth.call(null,chunk__44041,i__44043);
var k = cljs.core.nth.call(null,vec__44044,(0),null);
var plugin = cljs.core.nth.call(null,vec__44044,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44050 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44040,chunk__44041,count__44042,i__44043,pl_44050,vec__44044,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44050.call(null,msg_hist);
});})(seq__44040,chunk__44041,count__44042,i__44043,pl_44050,vec__44044,k,plugin))
);
} else {
}


var G__44051 = seq__44040;
var G__44052 = chunk__44041;
var G__44053 = count__44042;
var G__44054 = (i__44043 + (1));
seq__44040 = G__44051;
chunk__44041 = G__44052;
count__44042 = G__44053;
i__44043 = G__44054;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__44040);
if(temp__5457__auto__){
var seq__44040__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44040__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__44040__$1);
var G__44055 = cljs.core.chunk_rest.call(null,seq__44040__$1);
var G__44056 = c__4319__auto__;
var G__44057 = cljs.core.count.call(null,c__4319__auto__);
var G__44058 = (0);
seq__44040 = G__44055;
chunk__44041 = G__44056;
count__44042 = G__44057;
i__44043 = G__44058;
continue;
} else {
var vec__44047 = cljs.core.first.call(null,seq__44040__$1);
var k = cljs.core.nth.call(null,vec__44047,(0),null);
var plugin = cljs.core.nth.call(null,vec__44047,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44059 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44040,chunk__44041,count__44042,i__44043,pl_44059,vec__44047,k,plugin,seq__44040__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44059.call(null,msg_hist);
});})(seq__44040,chunk__44041,count__44042,i__44043,pl_44059,vec__44047,k,plugin,seq__44040__$1,temp__5457__auto__))
);
} else {
}


var G__44060 = cljs.core.next.call(null,seq__44040__$1);
var G__44061 = null;
var G__44062 = (0);
var G__44063 = (0);
seq__44040 = G__44060;
chunk__44041 = G__44061;
count__44042 = G__44062;
i__44043 = G__44063;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__44065 = arguments.length;
switch (G__44065) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44066_44071 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44067_44072 = null;
var count__44068_44073 = (0);
var i__44069_44074 = (0);
while(true){
if((i__44069_44074 < count__44068_44073)){
var msg_44075 = cljs.core._nth.call(null,chunk__44067_44072,i__44069_44074);
figwheel.client.socket.handle_incoming_message.call(null,msg_44075);


var G__44076 = seq__44066_44071;
var G__44077 = chunk__44067_44072;
var G__44078 = count__44068_44073;
var G__44079 = (i__44069_44074 + (1));
seq__44066_44071 = G__44076;
chunk__44067_44072 = G__44077;
count__44068_44073 = G__44078;
i__44069_44074 = G__44079;
continue;
} else {
var temp__5457__auto___44080 = cljs.core.seq.call(null,seq__44066_44071);
if(temp__5457__auto___44080){
var seq__44066_44081__$1 = temp__5457__auto___44080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44066_44081__$1)){
var c__4319__auto___44082 = cljs.core.chunk_first.call(null,seq__44066_44081__$1);
var G__44083 = cljs.core.chunk_rest.call(null,seq__44066_44081__$1);
var G__44084 = c__4319__auto___44082;
var G__44085 = cljs.core.count.call(null,c__4319__auto___44082);
var G__44086 = (0);
seq__44066_44071 = G__44083;
chunk__44067_44072 = G__44084;
count__44068_44073 = G__44085;
i__44069_44074 = G__44086;
continue;
} else {
var msg_44087 = cljs.core.first.call(null,seq__44066_44081__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44087);


var G__44088 = cljs.core.next.call(null,seq__44066_44081__$1);
var G__44089 = null;
var G__44090 = (0);
var G__44091 = (0);
seq__44066_44071 = G__44088;
chunk__44067_44072 = G__44089;
count__44068_44073 = G__44090;
i__44069_44074 = G__44091;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___44096 = arguments.length;
var i__4500__auto___44097 = (0);
while(true){
if((i__4500__auto___44097 < len__4499__auto___44096)){
args__4502__auto__.push((arguments[i__4500__auto___44097]));

var G__44098 = (i__4500__auto___44097 + (1));
i__4500__auto___44097 = G__44098;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44093){
var map__44094 = p__44093;
var map__44094__$1 = ((((!((map__44094 == null)))?(((((map__44094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44094):map__44094);
var opts = map__44094__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44092){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44092));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44099){if((e44099 instanceof Error)){
var e = e44099;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44099;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44100){
var map__44101 = p__44100;
var map__44101__$1 = ((((!((map__44101 == null)))?(((((map__44101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44101):map__44101);
var msg_name = cljs.core.get.call(null,map__44101__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1564480795547
