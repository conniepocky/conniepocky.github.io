// Compiled by ClojureScript 1.10.520 {}
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
figwheel.client._figwheel_version_ = "0.5.19";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e26831){if((e26831 instanceof Error)){
var e = e26831;
return "Error: Unable to stringify";
} else {
throw e26831;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__26834 = arguments.length;
switch (G__26834) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__26832_SHARP_){
if(typeof p1__26832_SHARP_ === 'string'){
return p1__26832_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__26832_SHARP_);
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
var args__4736__auto__ = [];
var len__4730__auto___26837 = arguments.length;
var i__4731__auto___26838 = (0);
while(true){
if((i__4731__auto___26838 < len__4730__auto___26837)){
args__4736__auto__.push((arguments[i__4731__auto___26838]));

var G__26839 = (i__4731__auto___26838 + (1));
i__4731__auto___26838 = G__26839;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq26836){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26836));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___26841 = arguments.length;
var i__4731__auto___26842 = (0);
while(true){
if((i__4731__auto___26842 < len__4730__auto___26841)){
args__4736__auto__.push((arguments[i__4731__auto___26842]));

var G__26843 = (i__4731__auto___26842 + (1));
i__4731__auto___26842 = G__26843;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq26840){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26840));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26844){
var map__26845 = p__26844;
var map__26845__$1 = (((((!((map__26845 == null))))?(((((map__26845.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26845.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26845):map__26845);
var message = cljs.core.get.call(null,map__26845__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26845__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
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
var c__22422__auto___26924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___26924,ch){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___26924,ch){
return (function (state_26896){
var state_val_26897 = (state_26896[(1)]);
if((state_val_26897 === (7))){
var inst_26892 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26898_26925 = state_26896__$1;
(statearr_26898_26925[(2)] = inst_26892);

(statearr_26898_26925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (1))){
var state_26896__$1 = state_26896;
var statearr_26899_26926 = state_26896__$1;
(statearr_26899_26926[(2)] = null);

(statearr_26899_26926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (4))){
var inst_26849 = (state_26896[(7)]);
var inst_26849__$1 = (state_26896[(2)]);
var state_26896__$1 = (function (){var statearr_26900 = state_26896;
(statearr_26900[(7)] = inst_26849__$1);

return statearr_26900;
})();
if(cljs.core.truth_(inst_26849__$1)){
var statearr_26901_26927 = state_26896__$1;
(statearr_26901_26927[(1)] = (5));

} else {
var statearr_26902_26928 = state_26896__$1;
(statearr_26902_26928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (15))){
var inst_26856 = (state_26896[(8)]);
var inst_26871 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26856);
var inst_26872 = cljs.core.first.call(null,inst_26871);
var inst_26873 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26872);
var inst_26874 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26873)].join('');
var inst_26875 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26874);
var state_26896__$1 = state_26896;
var statearr_26903_26929 = state_26896__$1;
(statearr_26903_26929[(2)] = inst_26875);

(statearr_26903_26929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (13))){
var inst_26880 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26904_26930 = state_26896__$1;
(statearr_26904_26930[(2)] = inst_26880);

(statearr_26904_26930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (6))){
var state_26896__$1 = state_26896;
var statearr_26905_26931 = state_26896__$1;
(statearr_26905_26931[(2)] = null);

(statearr_26905_26931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (17))){
var inst_26878 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26906_26932 = state_26896__$1;
(statearr_26906_26932[(2)] = inst_26878);

(statearr_26906_26932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (3))){
var inst_26894 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26896__$1,inst_26894);
} else {
if((state_val_26897 === (12))){
var inst_26855 = (state_26896[(9)]);
var inst_26869 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26855,opts);
var state_26896__$1 = state_26896;
if(inst_26869){
var statearr_26907_26933 = state_26896__$1;
(statearr_26907_26933[(1)] = (15));

} else {
var statearr_26908_26934 = state_26896__$1;
(statearr_26908_26934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (2))){
var state_26896__$1 = state_26896;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26896__$1,(4),ch);
} else {
if((state_val_26897 === (11))){
var inst_26856 = (state_26896[(8)]);
var inst_26861 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26862 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26856);
var inst_26863 = cljs.core.async.timeout.call(null,(1000));
var inst_26864 = [inst_26862,inst_26863];
var inst_26865 = (new cljs.core.PersistentVector(null,2,(5),inst_26861,inst_26864,null));
var state_26896__$1 = state_26896;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26896__$1,(14),inst_26865);
} else {
if((state_val_26897 === (9))){
var inst_26856 = (state_26896[(8)]);
var inst_26882 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26883 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26856);
var inst_26884 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26883);
var inst_26885 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_26884)].join('');
var inst_26886 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26885);
var state_26896__$1 = (function (){var statearr_26909 = state_26896;
(statearr_26909[(10)] = inst_26882);

return statearr_26909;
})();
var statearr_26910_26935 = state_26896__$1;
(statearr_26910_26935[(2)] = inst_26886);

(statearr_26910_26935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (5))){
var inst_26849 = (state_26896[(7)]);
var inst_26851 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26852 = (new cljs.core.PersistentArrayMap(null,2,inst_26851,null));
var inst_26853 = (new cljs.core.PersistentHashSet(null,inst_26852,null));
var inst_26854 = figwheel.client.focus_msgs.call(null,inst_26853,inst_26849);
var inst_26855 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26854);
var inst_26856 = cljs.core.first.call(null,inst_26854);
var inst_26857 = figwheel.client.autoload_QMARK_.call(null);
var state_26896__$1 = (function (){var statearr_26911 = state_26896;
(statearr_26911[(9)] = inst_26855);

(statearr_26911[(8)] = inst_26856);

return statearr_26911;
})();
if(cljs.core.truth_(inst_26857)){
var statearr_26912_26936 = state_26896__$1;
(statearr_26912_26936[(1)] = (8));

} else {
var statearr_26913_26937 = state_26896__$1;
(statearr_26913_26937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (14))){
var inst_26867 = (state_26896[(2)]);
var state_26896__$1 = state_26896;
var statearr_26914_26938 = state_26896__$1;
(statearr_26914_26938[(2)] = inst_26867);

(statearr_26914_26938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (16))){
var state_26896__$1 = state_26896;
var statearr_26915_26939 = state_26896__$1;
(statearr_26915_26939[(2)] = null);

(statearr_26915_26939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (10))){
var inst_26888 = (state_26896[(2)]);
var state_26896__$1 = (function (){var statearr_26916 = state_26896;
(statearr_26916[(11)] = inst_26888);

return statearr_26916;
})();
var statearr_26917_26940 = state_26896__$1;
(statearr_26917_26940[(2)] = null);

(statearr_26917_26940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26897 === (8))){
var inst_26855 = (state_26896[(9)]);
var inst_26859 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26855,opts);
var state_26896__$1 = state_26896;
if(cljs.core.truth_(inst_26859)){
var statearr_26918_26941 = state_26896__$1;
(statearr_26918_26941[(1)] = (11));

} else {
var statearr_26919_26942 = state_26896__$1;
(statearr_26919_26942[(1)] = (12));

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
});})(c__22422__auto___26924,ch))
;
return ((function (switch__22327__auto__,c__22422__auto___26924,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__22328__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__22328__auto____0 = (function (){
var statearr_26920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26920[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__22328__auto__);

(statearr_26920[(1)] = (1));

return statearr_26920;
});
var figwheel$client$file_reloader_plugin_$_state_machine__22328__auto____1 = (function (state_26896){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_26896);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e26921){if((e26921 instanceof Object)){
var ex__22331__auto__ = e26921;
var statearr_26922_26943 = state_26896;
(statearr_26922_26943[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26896);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26944 = state_26896;
state_26896 = G__26944;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__22328__auto__ = function(state_26896){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__22328__auto____1.call(this,state_26896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__22328__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__22328__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___26924,ch))
})();
var state__22424__auto__ = (function (){var statearr_26923 = f__22423__auto__.call(null);
(statearr_26923[(6)] = c__22422__auto___26924);

return statearr_26923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___26924,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26945_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26945_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
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
var base_path_26951 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26951){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__26947 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__26948 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__26949 = true;
var _STAR_print_fn_STAR__temp_val__26950 = ((function (_STAR_print_newline_STAR__orig_val__26947,_STAR_print_fn_STAR__orig_val__26948,_STAR_print_newline_STAR__temp_val__26949,sb,base_path_26951){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__26947,_STAR_print_fn_STAR__orig_val__26948,_STAR_print_newline_STAR__temp_val__26949,sb,base_path_26951))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__26949;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__26950;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__26948;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__26947;
}}catch (e26946){if((e26946 instanceof Error)){
var e = e26946;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26951], null));
} else {
var e = e26946;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26951))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26952){
var map__26953 = p__26952;
var map__26953__$1 = (((((!((map__26953 == null))))?(((((map__26953.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26953.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26953):map__26953);
var opts = map__26953__$1;
var build_id = cljs.core.get.call(null,map__26953__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26953,map__26953__$1,opts,build_id){
return (function (p__26955){
var vec__26956 = p__26955;
var seq__26957 = cljs.core.seq.call(null,vec__26956);
var first__26958 = cljs.core.first.call(null,seq__26957);
var seq__26957__$1 = cljs.core.next.call(null,seq__26957);
var map__26959 = first__26958;
var map__26959__$1 = (((((!((map__26959 == null))))?(((((map__26959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26959.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26959):map__26959);
var msg = map__26959__$1;
var msg_name = cljs.core.get.call(null,map__26959__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26957__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26956,seq__26957,first__26958,seq__26957__$1,map__26959,map__26959__$1,msg,msg_name,_,map__26953,map__26953__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26956,seq__26957,first__26958,seq__26957__$1,map__26959,map__26959__$1,msg,msg_name,_,map__26953,map__26953__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26953,map__26953__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26961){
var vec__26962 = p__26961;
var seq__26963 = cljs.core.seq.call(null,vec__26962);
var first__26964 = cljs.core.first.call(null,seq__26963);
var seq__26963__$1 = cljs.core.next.call(null,seq__26963);
var map__26965 = first__26964;
var map__26965__$1 = (((((!((map__26965 == null))))?(((((map__26965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26965):map__26965);
var msg = map__26965__$1;
var msg_name = cljs.core.get.call(null,map__26965__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26963__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26967){
var map__26968 = p__26967;
var map__26968__$1 = (((((!((map__26968 == null))))?(((((map__26968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26968):map__26968);
var on_compile_warning = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26968__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26968,map__26968__$1,on_compile_warning,on_compile_fail){
return (function (p__26970){
var vec__26971 = p__26970;
var seq__26972 = cljs.core.seq.call(null,vec__26971);
var first__26973 = cljs.core.first.call(null,seq__26972);
var seq__26972__$1 = cljs.core.next.call(null,seq__26972);
var map__26974 = first__26973;
var map__26974__$1 = (((((!((map__26974 == null))))?(((((map__26974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26974):map__26974);
var msg = map__26974__$1;
var msg_name = cljs.core.get.call(null,map__26974__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__26972__$1;
var pred__26976 = cljs.core._EQ_;
var expr__26977 = msg_name;
if(cljs.core.truth_(pred__26976.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26977))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26976.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26977))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26968,map__26968__$1,on_compile_warning,on_compile_fail))
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
var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__,msg_hist,msg_names,msg){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__,msg_hist,msg_names,msg){
return (function (state_27066){
var state_val_27067 = (state_27066[(1)]);
if((state_val_27067 === (7))){
var inst_26986 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
if(cljs.core.truth_(inst_26986)){
var statearr_27068_27115 = state_27066__$1;
(statearr_27068_27115[(1)] = (8));

} else {
var statearr_27069_27116 = state_27066__$1;
(statearr_27069_27116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (20))){
var inst_27060 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27070_27117 = state_27066__$1;
(statearr_27070_27117[(2)] = inst_27060);

(statearr_27070_27117[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (27))){
var inst_27056 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27071_27118 = state_27066__$1;
(statearr_27071_27118[(2)] = inst_27056);

(statearr_27071_27118[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (1))){
var inst_26979 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27066__$1 = state_27066;
if(cljs.core.truth_(inst_26979)){
var statearr_27072_27119 = state_27066__$1;
(statearr_27072_27119[(1)] = (2));

} else {
var statearr_27073_27120 = state_27066__$1;
(statearr_27073_27120[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (24))){
var inst_27058 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27074_27121 = state_27066__$1;
(statearr_27074_27121[(2)] = inst_27058);

(statearr_27074_27121[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (4))){
var inst_27064 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27066__$1,inst_27064);
} else {
if((state_val_27067 === (15))){
var inst_27062 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27075_27122 = state_27066__$1;
(statearr_27075_27122[(2)] = inst_27062);

(statearr_27075_27122[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (21))){
var inst_27015 = (state_27066[(2)]);
var inst_27016 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27017 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27016);
var state_27066__$1 = (function (){var statearr_27076 = state_27066;
(statearr_27076[(7)] = inst_27015);

return statearr_27076;
})();
var statearr_27077_27123 = state_27066__$1;
(statearr_27077_27123[(2)] = inst_27017);

(statearr_27077_27123[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (31))){
var inst_27045 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27066__$1 = state_27066;
if(inst_27045){
var statearr_27078_27124 = state_27066__$1;
(statearr_27078_27124[(1)] = (34));

} else {
var statearr_27079_27125 = state_27066__$1;
(statearr_27079_27125[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (32))){
var inst_27054 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27080_27126 = state_27066__$1;
(statearr_27080_27126[(2)] = inst_27054);

(statearr_27080_27126[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (33))){
var inst_27041 = (state_27066[(2)]);
var inst_27042 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27043 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27042);
var state_27066__$1 = (function (){var statearr_27081 = state_27066;
(statearr_27081[(8)] = inst_27041);

return statearr_27081;
})();
var statearr_27082_27127 = state_27066__$1;
(statearr_27082_27127[(2)] = inst_27043);

(statearr_27082_27127[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (13))){
var inst_27000 = figwheel.client.heads_up.clear.call(null);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(16),inst_27000);
} else {
if((state_val_27067 === (22))){
var inst_27021 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27022 = figwheel.client.heads_up.append_warning_message.call(null,inst_27021);
var state_27066__$1 = state_27066;
var statearr_27083_27128 = state_27066__$1;
(statearr_27083_27128[(2)] = inst_27022);

(statearr_27083_27128[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (36))){
var inst_27052 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27084_27129 = state_27066__$1;
(statearr_27084_27129[(2)] = inst_27052);

(statearr_27084_27129[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (29))){
var inst_27032 = (state_27066[(2)]);
var inst_27033 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27034 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27033);
var state_27066__$1 = (function (){var statearr_27085 = state_27066;
(statearr_27085[(9)] = inst_27032);

return statearr_27085;
})();
var statearr_27086_27130 = state_27066__$1;
(statearr_27086_27130[(2)] = inst_27034);

(statearr_27086_27130[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (6))){
var inst_26981 = (state_27066[(10)]);
var state_27066__$1 = state_27066;
var statearr_27087_27131 = state_27066__$1;
(statearr_27087_27131[(2)] = inst_26981);

(statearr_27087_27131[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (28))){
var inst_27028 = (state_27066[(2)]);
var inst_27029 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27030 = figwheel.client.heads_up.display_warning.call(null,inst_27029);
var state_27066__$1 = (function (){var statearr_27088 = state_27066;
(statearr_27088[(11)] = inst_27028);

return statearr_27088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(29),inst_27030);
} else {
if((state_val_27067 === (25))){
var inst_27026 = figwheel.client.heads_up.clear.call(null);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(28),inst_27026);
} else {
if((state_val_27067 === (34))){
var inst_27047 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(37),inst_27047);
} else {
if((state_val_27067 === (17))){
var inst_27006 = (state_27066[(2)]);
var inst_27007 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27008 = figwheel.client.auto_jump_to_error.call(null,opts,inst_27007);
var state_27066__$1 = (function (){var statearr_27089 = state_27066;
(statearr_27089[(12)] = inst_27006);

return statearr_27089;
})();
var statearr_27090_27132 = state_27066__$1;
(statearr_27090_27132[(2)] = inst_27008);

(statearr_27090_27132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (3))){
var inst_26998 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27066__$1 = state_27066;
if(inst_26998){
var statearr_27091_27133 = state_27066__$1;
(statearr_27091_27133[(1)] = (13));

} else {
var statearr_27092_27134 = state_27066__$1;
(statearr_27092_27134[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (12))){
var inst_26994 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27093_27135 = state_27066__$1;
(statearr_27093_27135[(2)] = inst_26994);

(statearr_27093_27135[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (2))){
var inst_26981 = (state_27066[(10)]);
var inst_26981__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27066__$1 = (function (){var statearr_27094 = state_27066;
(statearr_27094[(10)] = inst_26981__$1);

return statearr_27094;
})();
if(cljs.core.truth_(inst_26981__$1)){
var statearr_27095_27136 = state_27066__$1;
(statearr_27095_27136[(1)] = (5));

} else {
var statearr_27096_27137 = state_27066__$1;
(statearr_27096_27137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (23))){
var inst_27024 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27066__$1 = state_27066;
if(inst_27024){
var statearr_27097_27138 = state_27066__$1;
(statearr_27097_27138[(1)] = (25));

} else {
var statearr_27098_27139 = state_27066__$1;
(statearr_27098_27139[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (35))){
var state_27066__$1 = state_27066;
var statearr_27099_27140 = state_27066__$1;
(statearr_27099_27140[(2)] = null);

(statearr_27099_27140[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (19))){
var inst_27019 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27066__$1 = state_27066;
if(inst_27019){
var statearr_27100_27141 = state_27066__$1;
(statearr_27100_27141[(1)] = (22));

} else {
var statearr_27101_27142 = state_27066__$1;
(statearr_27101_27142[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (11))){
var inst_26990 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27102_27143 = state_27066__$1;
(statearr_27102_27143[(2)] = inst_26990);

(statearr_27102_27143[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (9))){
var inst_26992 = figwheel.client.heads_up.clear.call(null);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(12),inst_26992);
} else {
if((state_val_27067 === (5))){
var inst_26983 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27066__$1 = state_27066;
var statearr_27103_27144 = state_27066__$1;
(statearr_27103_27144[(2)] = inst_26983);

(statearr_27103_27144[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (14))){
var inst_27010 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27066__$1 = state_27066;
if(inst_27010){
var statearr_27104_27145 = state_27066__$1;
(statearr_27104_27145[(1)] = (18));

} else {
var statearr_27105_27146 = state_27066__$1;
(statearr_27105_27146[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (26))){
var inst_27036 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27066__$1 = state_27066;
if(inst_27036){
var statearr_27106_27147 = state_27066__$1;
(statearr_27106_27147[(1)] = (30));

} else {
var statearr_27107_27148 = state_27066__$1;
(statearr_27107_27148[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (16))){
var inst_27002 = (state_27066[(2)]);
var inst_27003 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27004 = figwheel.client.heads_up.display_exception.call(null,inst_27003);
var state_27066__$1 = (function (){var statearr_27108 = state_27066;
(statearr_27108[(13)] = inst_27002);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(17),inst_27004);
} else {
if((state_val_27067 === (30))){
var inst_27038 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27039 = figwheel.client.heads_up.display_warning.call(null,inst_27038);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(33),inst_27039);
} else {
if((state_val_27067 === (10))){
var inst_26996 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27109_27149 = state_27066__$1;
(statearr_27109_27149[(2)] = inst_26996);

(statearr_27109_27149[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (18))){
var inst_27012 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27013 = figwheel.client.heads_up.display_exception.call(null,inst_27012);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(21),inst_27013);
} else {
if((state_val_27067 === (37))){
var inst_27049 = (state_27066[(2)]);
var state_27066__$1 = state_27066;
var statearr_27110_27150 = state_27066__$1;
(statearr_27110_27150[(2)] = inst_27049);

(statearr_27110_27150[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27067 === (8))){
var inst_26988 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27066__$1 = state_27066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27066__$1,(11),inst_26988);
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
});})(c__22422__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__22327__auto__,c__22422__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto____0 = (function (){
var statearr_27111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27111[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto__);

(statearr_27111[(1)] = (1));

return statearr_27111;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto____1 = (function (state_27066){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_27066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e27112){if((e27112 instanceof Object)){
var ex__22331__auto__ = e27112;
var statearr_27113_27151 = state_27066;
(statearr_27113_27151[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27152 = state_27066;
state_27066 = G__27152;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto__ = function(state_27066){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto____1.call(this,state_27066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__,msg_hist,msg_names,msg))
})();
var state__22424__auto__ = (function (){var statearr_27114 = f__22423__auto__.call(null);
(statearr_27114[(6)] = c__22422__auto__);

return statearr_27114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__,msg_hist,msg_names,msg))
);

return c__22422__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__22422__auto___27181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___27181,ch){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___27181,ch){
return (function (state_27167){
var state_val_27168 = (state_27167[(1)]);
if((state_val_27168 === (1))){
var state_27167__$1 = state_27167;
var statearr_27169_27182 = state_27167__$1;
(statearr_27169_27182[(2)] = null);

(statearr_27169_27182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (2))){
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27167__$1,(4),ch);
} else {
if((state_val_27168 === (3))){
var inst_27165 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27167__$1,inst_27165);
} else {
if((state_val_27168 === (4))){
var inst_27155 = (state_27167[(7)]);
var inst_27155__$1 = (state_27167[(2)]);
var state_27167__$1 = (function (){var statearr_27170 = state_27167;
(statearr_27170[(7)] = inst_27155__$1);

return statearr_27170;
})();
if(cljs.core.truth_(inst_27155__$1)){
var statearr_27171_27183 = state_27167__$1;
(statearr_27171_27183[(1)] = (5));

} else {
var statearr_27172_27184 = state_27167__$1;
(statearr_27172_27184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (5))){
var inst_27155 = (state_27167[(7)]);
var inst_27157 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27155);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27167__$1,(8),inst_27157);
} else {
if((state_val_27168 === (6))){
var state_27167__$1 = state_27167;
var statearr_27173_27185 = state_27167__$1;
(statearr_27173_27185[(2)] = null);

(statearr_27173_27185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (7))){
var inst_27163 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27174_27186 = state_27167__$1;
(statearr_27174_27186[(2)] = inst_27163);

(statearr_27174_27186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (8))){
var inst_27159 = (state_27167[(2)]);
var state_27167__$1 = (function (){var statearr_27175 = state_27167;
(statearr_27175[(8)] = inst_27159);

return statearr_27175;
})();
var statearr_27176_27187 = state_27167__$1;
(statearr_27176_27187[(2)] = null);

(statearr_27176_27187[(1)] = (2));


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
});})(c__22422__auto___27181,ch))
;
return ((function (switch__22327__auto__,c__22422__auto___27181,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__22328__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__22328__auto____0 = (function (){
var statearr_27177 = [null,null,null,null,null,null,null,null,null];
(statearr_27177[(0)] = figwheel$client$heads_up_plugin_$_state_machine__22328__auto__);

(statearr_27177[(1)] = (1));

return statearr_27177;
});
var figwheel$client$heads_up_plugin_$_state_machine__22328__auto____1 = (function (state_27167){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_27167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e27178){if((e27178 instanceof Object)){
var ex__22331__auto__ = e27178;
var statearr_27179_27188 = state_27167;
(statearr_27179_27188[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27189 = state_27167;
state_27167 = G__27189;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__22328__auto__ = function(state_27167){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__22328__auto____1.call(this,state_27167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__22328__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__22328__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___27181,ch))
})();
var state__22424__auto__ = (function (){var statearr_27180 = f__22423__auto__.call(null);
(statearr_27180[(6)] = c__22422__auto___27181);

return statearr_27180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___27181,ch))
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
var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__){
return (function (state_27195){
var state_val_27196 = (state_27195[(1)]);
if((state_val_27196 === (1))){
var inst_27190 = cljs.core.async.timeout.call(null,(3000));
var state_27195__$1 = state_27195;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27195__$1,(2),inst_27190);
} else {
if((state_val_27196 === (2))){
var inst_27192 = (state_27195[(2)]);
var inst_27193 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27195__$1 = (function (){var statearr_27197 = state_27195;
(statearr_27197[(7)] = inst_27192);

return statearr_27197;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27195__$1,inst_27193);
} else {
return null;
}
}
});})(c__22422__auto__))
;
return ((function (switch__22327__auto__,c__22422__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__22328__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__22328__auto____0 = (function (){
var statearr_27198 = [null,null,null,null,null,null,null,null];
(statearr_27198[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__22328__auto__);

(statearr_27198[(1)] = (1));

return statearr_27198;
});
var figwheel$client$enforce_project_plugin_$_state_machine__22328__auto____1 = (function (state_27195){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_27195);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e27199){if((e27199 instanceof Object)){
var ex__22331__auto__ = e27199;
var statearr_27200_27202 = state_27195;
(statearr_27200_27202[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27195);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27199;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27203 = state_27195;
state_27195 = G__27203;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__22328__auto__ = function(state_27195){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__22328__auto____1.call(this,state_27195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__22328__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__22328__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__))
})();
var state__22424__auto__ = (function (){var statearr_27201 = f__22423__auto__.call(null);
(statearr_27201[(6)] = c__22422__auto__);

return statearr_27201;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__))
);

return c__22422__auto__;
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
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__,figwheel_version,temp__5720__auto__){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__,figwheel_version,temp__5720__auto__){
return (function (state_27210){
var state_val_27211 = (state_27210[(1)]);
if((state_val_27211 === (1))){
var inst_27204 = cljs.core.async.timeout.call(null,(2000));
var state_27210__$1 = state_27210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27210__$1,(2),inst_27204);
} else {
if((state_val_27211 === (2))){
var inst_27206 = (state_27210[(2)]);
var inst_27207 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_27208 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_27207);
var state_27210__$1 = (function (){var statearr_27212 = state_27210;
(statearr_27212[(7)] = inst_27206);

return statearr_27212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27210__$1,inst_27208);
} else {
return null;
}
}
});})(c__22422__auto__,figwheel_version,temp__5720__auto__))
;
return ((function (switch__22327__auto__,c__22422__auto__,figwheel_version,temp__5720__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto____0 = (function (){
var statearr_27213 = [null,null,null,null,null,null,null,null];
(statearr_27213[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto__);

(statearr_27213[(1)] = (1));

return statearr_27213;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto____1 = (function (state_27210){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_27210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e27214){if((e27214 instanceof Object)){
var ex__22331__auto__ = e27214;
var statearr_27215_27217 = state_27210;
(statearr_27215_27217[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27218 = state_27210;
state_27210 = G__27218;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto__ = function(state_27210){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto____1.call(this,state_27210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__,figwheel_version,temp__5720__auto__))
})();
var state__22424__auto__ = (function (){var statearr_27216 = f__22423__auto__.call(null);
(statearr_27216[(6)] = c__22422__auto__);

return statearr_27216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__,figwheel_version,temp__5720__auto__))
);

return c__22422__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__27219){
var map__27220 = p__27219;
var map__27220__$1 = (((((!((map__27220 == null))))?(((((map__27220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27220):map__27220);
var file = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27222 = "";
var G__27222__$1 = (cljs.core.truth_(file)?[G__27222,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27222);
var G__27222__$2 = (cljs.core.truth_(line)?[G__27222__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27222__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__27222__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27222__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27223){
var map__27224 = p__27223;
var map__27224__$1 = (((((!((map__27224 == null))))?(((((map__27224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27224):map__27224);
var ed = map__27224__$1;
var exception_data = cljs.core.get.call(null,map__27224__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27224__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_27227 = (function (){var G__27226 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27226)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__27226;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_27227);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27228){
var map__27229 = p__27228;
var map__27229__$1 = (((((!((map__27229 == null))))?(((((map__27229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27229):map__27229);
var w = map__27229__$1;
var message = cljs.core.get.call(null,map__27229__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
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
var seq__27231 = cljs.core.seq.call(null,plugins);
var chunk__27232 = null;
var count__27233 = (0);
var i__27234 = (0);
while(true){
if((i__27234 < count__27233)){
var vec__27241 = cljs.core._nth.call(null,chunk__27232,i__27234);
var k = cljs.core.nth.call(null,vec__27241,(0),null);
var plugin = cljs.core.nth.call(null,vec__27241,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27247 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27231,chunk__27232,count__27233,i__27234,pl_27247,vec__27241,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27247.call(null,msg_hist);
});})(seq__27231,chunk__27232,count__27233,i__27234,pl_27247,vec__27241,k,plugin))
);
} else {
}


var G__27248 = seq__27231;
var G__27249 = chunk__27232;
var G__27250 = count__27233;
var G__27251 = (i__27234 + (1));
seq__27231 = G__27248;
chunk__27232 = G__27249;
count__27233 = G__27250;
i__27234 = G__27251;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__27231);
if(temp__5720__auto__){
var seq__27231__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27231__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__27231__$1);
var G__27252 = cljs.core.chunk_rest.call(null,seq__27231__$1);
var G__27253 = c__4550__auto__;
var G__27254 = cljs.core.count.call(null,c__4550__auto__);
var G__27255 = (0);
seq__27231 = G__27252;
chunk__27232 = G__27253;
count__27233 = G__27254;
i__27234 = G__27255;
continue;
} else {
var vec__27244 = cljs.core.first.call(null,seq__27231__$1);
var k = cljs.core.nth.call(null,vec__27244,(0),null);
var plugin = cljs.core.nth.call(null,vec__27244,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27256 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27231,chunk__27232,count__27233,i__27234,pl_27256,vec__27244,k,plugin,seq__27231__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27256.call(null,msg_hist);
});})(seq__27231,chunk__27232,count__27233,i__27234,pl_27256,vec__27244,k,plugin,seq__27231__$1,temp__5720__auto__))
);
} else {
}


var G__27257 = cljs.core.next.call(null,seq__27231__$1);
var G__27258 = null;
var G__27259 = (0);
var G__27260 = (0);
seq__27231 = G__27257;
chunk__27232 = G__27258;
count__27233 = G__27259;
i__27234 = G__27260;
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
var G__27262 = arguments.length;
switch (G__27262) {
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
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
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

var seq__27263_27268 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__27264_27269 = null;
var count__27265_27270 = (0);
var i__27266_27271 = (0);
while(true){
if((i__27266_27271 < count__27265_27270)){
var msg_27272 = cljs.core._nth.call(null,chunk__27264_27269,i__27266_27271);
figwheel.client.socket.handle_incoming_message.call(null,msg_27272);


var G__27273 = seq__27263_27268;
var G__27274 = chunk__27264_27269;
var G__27275 = count__27265_27270;
var G__27276 = (i__27266_27271 + (1));
seq__27263_27268 = G__27273;
chunk__27264_27269 = G__27274;
count__27265_27270 = G__27275;
i__27266_27271 = G__27276;
continue;
} else {
var temp__5720__auto___27277 = cljs.core.seq.call(null,seq__27263_27268);
if(temp__5720__auto___27277){
var seq__27263_27278__$1 = temp__5720__auto___27277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27263_27278__$1)){
var c__4550__auto___27279 = cljs.core.chunk_first.call(null,seq__27263_27278__$1);
var G__27280 = cljs.core.chunk_rest.call(null,seq__27263_27278__$1);
var G__27281 = c__4550__auto___27279;
var G__27282 = cljs.core.count.call(null,c__4550__auto___27279);
var G__27283 = (0);
seq__27263_27268 = G__27280;
chunk__27264_27269 = G__27281;
count__27265_27270 = G__27282;
i__27266_27271 = G__27283;
continue;
} else {
var msg_27284 = cljs.core.first.call(null,seq__27263_27278__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_27284);


var G__27285 = cljs.core.next.call(null,seq__27263_27278__$1);
var G__27286 = null;
var G__27287 = (0);
var G__27288 = (0);
seq__27263_27268 = G__27285;
chunk__27264_27269 = G__27286;
count__27265_27270 = G__27287;
i__27266_27271 = G__27288;
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
var args__4736__auto__ = [];
var len__4730__auto___27293 = arguments.length;
var i__4731__auto___27294 = (0);
while(true){
if((i__4731__auto___27294 < len__4730__auto___27293)){
args__4736__auto__.push((arguments[i__4731__auto___27294]));

var G__27295 = (i__4731__auto___27294 + (1));
i__4731__auto___27294 = G__27295;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27290){
var map__27291 = p__27290;
var map__27291__$1 = (((((!((map__27291 == null))))?(((((map__27291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27291):map__27291);
var opts = map__27291__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27289){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27289));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e27296){if((e27296 instanceof Error)){
var e = e27296;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e27296;

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
return (function (p__27297){
var map__27298 = p__27297;
var map__27298__$1 = (((((!((map__27298 == null))))?(((((map__27298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27298):map__27298);
var msg_name = cljs.core.get.call(null,map__27298__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1611747934389
