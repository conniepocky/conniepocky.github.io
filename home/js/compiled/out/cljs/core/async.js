// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__39897 = arguments.length;
switch (G__39897) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39898 = (function (f,blockable,meta39899){
this.f = f;
this.blockable = blockable;
this.meta39899 = meta39899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39900,meta39899__$1){
var self__ = this;
var _39900__$1 = this;
return (new cljs.core.async.t_cljs$core$async39898(self__.f,self__.blockable,meta39899__$1));
});

cljs.core.async.t_cljs$core$async39898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39900){
var self__ = this;
var _39900__$1 = this;
return self__.meta39899;
});

cljs.core.async.t_cljs$core$async39898.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39898.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39898.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39898.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39898.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39899","meta39899",12132207,null)], null);
});

cljs.core.async.t_cljs$core$async39898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39898";

cljs.core.async.t_cljs$core$async39898.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39898");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39898.
 */
cljs.core.async.__GT_t_cljs$core$async39898 = (function cljs$core$async$__GT_t_cljs$core$async39898(f__$1,blockable__$1,meta39899){
return (new cljs.core.async.t_cljs$core$async39898(f__$1,blockable__$1,meta39899));
});

}

return (new cljs.core.async.t_cljs$core$async39898(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__39904 = arguments.length;
switch (G__39904) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__39907 = arguments.length;
switch (G__39907) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__39910 = arguments.length;
switch (G__39910) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39912 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39912);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39912,ret){
return (function (){
return fn1.call(null,val_39912);
});})(val_39912,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__39914 = arguments.length;
switch (G__39914) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___39916 = n;
var x_39917 = (0);
while(true){
if((x_39917 < n__4376__auto___39916)){
(a[x_39917] = (0));

var G__39918 = (x_39917 + (1));
x_39917 = G__39918;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__39919 = (i + (1));
i = G__39919;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39920 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39920 = (function (flag,meta39921){
this.flag = flag;
this.meta39921 = meta39921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39922,meta39921__$1){
var self__ = this;
var _39922__$1 = this;
return (new cljs.core.async.t_cljs$core$async39920(self__.flag,meta39921__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39922){
var self__ = this;
var _39922__$1 = this;
return self__.meta39921;
});})(flag))
;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39920.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39920.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39921","meta39921",-649543493,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39920.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39920.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39920";

cljs.core.async.t_cljs$core$async39920.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39920");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39920.
 */
cljs.core.async.__GT_t_cljs$core$async39920 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39920(flag__$1,meta39921){
return (new cljs.core.async.t_cljs$core$async39920(flag__$1,meta39921));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39920(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39923 = (function (flag,cb,meta39924){
this.flag = flag;
this.cb = cb;
this.meta39924 = meta39924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39925,meta39924__$1){
var self__ = this;
var _39925__$1 = this;
return (new cljs.core.async.t_cljs$core$async39923(self__.flag,self__.cb,meta39924__$1));
});

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39925){
var self__ = this;
var _39925__$1 = this;
return self__.meta39924;
});

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39923.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39924","meta39924",-862191095,null)], null);
});

cljs.core.async.t_cljs$core$async39923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39923";

cljs.core.async.t_cljs$core$async39923.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39923");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39923.
 */
cljs.core.async.__GT_t_cljs$core$async39923 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39923(flag__$1,cb__$1,meta39924){
return (new cljs.core.async.t_cljs$core$async39923(flag__$1,cb__$1,meta39924));
});

}

return (new cljs.core.async.t_cljs$core$async39923(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39926_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39926_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39927_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39927_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39928 = (i + (1));
i = G__39928;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39934 = arguments.length;
var i__4500__auto___39935 = (0);
while(true){
if((i__4500__auto___39935 < len__4499__auto___39934)){
args__4502__auto__.push((arguments[i__4500__auto___39935]));

var G__39936 = (i__4500__auto___39935 + (1));
i__4500__auto___39935 = G__39936;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39931){
var map__39932 = p__39931;
var map__39932__$1 = ((((!((map__39932 == null)))?(((((map__39932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39932):map__39932);
var opts = map__39932__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39929){
var G__39930 = cljs.core.first.call(null,seq39929);
var seq39929__$1 = cljs.core.next.call(null,seq39929);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39930,seq39929__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__39938 = arguments.length;
switch (G__39938) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32474__auto___39984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___39984){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___39984){
return (function (state_39962){
var state_val_39963 = (state_39962[(1)]);
if((state_val_39963 === (7))){
var inst_39958 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_39964_39985 = state_39962__$1;
(statearr_39964_39985[(2)] = inst_39958);

(statearr_39964_39985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (1))){
var state_39962__$1 = state_39962;
var statearr_39965_39986 = state_39962__$1;
(statearr_39965_39986[(2)] = null);

(statearr_39965_39986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (4))){
var inst_39941 = (state_39962[(7)]);
var inst_39941__$1 = (state_39962[(2)]);
var inst_39942 = (inst_39941__$1 == null);
var state_39962__$1 = (function (){var statearr_39966 = state_39962;
(statearr_39966[(7)] = inst_39941__$1);

return statearr_39966;
})();
if(cljs.core.truth_(inst_39942)){
var statearr_39967_39987 = state_39962__$1;
(statearr_39967_39987[(1)] = (5));

} else {
var statearr_39968_39988 = state_39962__$1;
(statearr_39968_39988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (13))){
var state_39962__$1 = state_39962;
var statearr_39969_39989 = state_39962__$1;
(statearr_39969_39989[(2)] = null);

(statearr_39969_39989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (6))){
var inst_39941 = (state_39962[(7)]);
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39962__$1,(11),to,inst_39941);
} else {
if((state_val_39963 === (3))){
var inst_39960 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39962__$1,inst_39960);
} else {
if((state_val_39963 === (12))){
var state_39962__$1 = state_39962;
var statearr_39970_39990 = state_39962__$1;
(statearr_39970_39990[(2)] = null);

(statearr_39970_39990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (2))){
var state_39962__$1 = state_39962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39962__$1,(4),from);
} else {
if((state_val_39963 === (11))){
var inst_39951 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
if(cljs.core.truth_(inst_39951)){
var statearr_39971_39991 = state_39962__$1;
(statearr_39971_39991[(1)] = (12));

} else {
var statearr_39972_39992 = state_39962__$1;
(statearr_39972_39992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (9))){
var state_39962__$1 = state_39962;
var statearr_39973_39993 = state_39962__$1;
(statearr_39973_39993[(2)] = null);

(statearr_39973_39993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (5))){
var state_39962__$1 = state_39962;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39974_39994 = state_39962__$1;
(statearr_39974_39994[(1)] = (8));

} else {
var statearr_39975_39995 = state_39962__$1;
(statearr_39975_39995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (14))){
var inst_39956 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_39976_39996 = state_39962__$1;
(statearr_39976_39996[(2)] = inst_39956);

(statearr_39976_39996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (10))){
var inst_39948 = (state_39962[(2)]);
var state_39962__$1 = state_39962;
var statearr_39977_39997 = state_39962__$1;
(statearr_39977_39997[(2)] = inst_39948);

(statearr_39977_39997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39963 === (8))){
var inst_39945 = cljs.core.async.close_BANG_.call(null,to);
var state_39962__$1 = state_39962;
var statearr_39978_39998 = state_39962__$1;
(statearr_39978_39998[(2)] = inst_39945);

(statearr_39978_39998[(1)] = (10));


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
});})(c__32474__auto___39984))
;
return ((function (switch__32384__auto__,c__32474__auto___39984){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_39979 = [null,null,null,null,null,null,null,null];
(statearr_39979[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_39979[(1)] = (1));

return statearr_39979;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_39962){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_39962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e39980){if((e39980 instanceof Object)){
var ex__32388__auto__ = e39980;
var statearr_39981_39999 = state_39962;
(statearr_39981_39999[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40000 = state_39962;
state_39962 = G__40000;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_39962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_39962);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___39984))
})();
var state__32476__auto__ = (function (){var statearr_39982 = f__32475__auto__.call(null);
(statearr_39982[(6)] = c__32474__auto___39984);

return statearr_39982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___39984))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__40001){
var vec__40002 = p__40001;
var v = cljs.core.nth.call(null,vec__40002,(0),null);
var p = cljs.core.nth.call(null,vec__40002,(1),null);
var job = vec__40002;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32474__auto___40173 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___40173,res,vec__40002,v,p,job,jobs,results){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___40173,res,vec__40002,v,p,job,jobs,results){
return (function (state_40009){
var state_val_40010 = (state_40009[(1)]);
if((state_val_40010 === (1))){
var state_40009__$1 = state_40009;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40009__$1,(2),res,v);
} else {
if((state_val_40010 === (2))){
var inst_40006 = (state_40009[(2)]);
var inst_40007 = cljs.core.async.close_BANG_.call(null,res);
var state_40009__$1 = (function (){var statearr_40011 = state_40009;
(statearr_40011[(7)] = inst_40006);

return statearr_40011;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40009__$1,inst_40007);
} else {
return null;
}
}
});})(c__32474__auto___40173,res,vec__40002,v,p,job,jobs,results))
;
return ((function (switch__32384__auto__,c__32474__auto___40173,res,vec__40002,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0 = (function (){
var statearr_40012 = [null,null,null,null,null,null,null,null];
(statearr_40012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__);

(statearr_40012[(1)] = (1));

return statearr_40012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1 = (function (state_40009){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40013){if((e40013 instanceof Object)){
var ex__32388__auto__ = e40013;
var statearr_40014_40174 = state_40009;
(statearr_40014_40174[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40175 = state_40009;
state_40009 = G__40175;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = function(state_40009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1.call(this,state_40009);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___40173,res,vec__40002,v,p,job,jobs,results))
})();
var state__32476__auto__ = (function (){var statearr_40015 = f__32475__auto__.call(null);
(statearr_40015[(6)] = c__32474__auto___40173);

return statearr_40015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___40173,res,vec__40002,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__40016){
var vec__40017 = p__40016;
var v = cljs.core.nth.call(null,vec__40017,(0),null);
var p = cljs.core.nth.call(null,vec__40017,(1),null);
var job = vec__40017;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4376__auto___40176 = n;
var __40177 = (0);
while(true){
if((__40177 < n__4376__auto___40176)){
var G__40020_40178 = type;
var G__40020_40179__$1 = (((G__40020_40178 instanceof cljs.core.Keyword))?G__40020_40178.fqn:null);
switch (G__40020_40179__$1) {
case "compute":
var c__32474__auto___40181 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40177,c__32474__auto___40181,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (__40177,c__32474__auto___40181,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async){
return (function (state_40033){
var state_val_40034 = (state_40033[(1)]);
if((state_val_40034 === (1))){
var state_40033__$1 = state_40033;
var statearr_40035_40182 = state_40033__$1;
(statearr_40035_40182[(2)] = null);

(statearr_40035_40182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40034 === (2))){
var state_40033__$1 = state_40033;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40033__$1,(4),jobs);
} else {
if((state_val_40034 === (3))){
var inst_40031 = (state_40033[(2)]);
var state_40033__$1 = state_40033;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40033__$1,inst_40031);
} else {
if((state_val_40034 === (4))){
var inst_40023 = (state_40033[(2)]);
var inst_40024 = process__$1.call(null,inst_40023);
var state_40033__$1 = state_40033;
if(cljs.core.truth_(inst_40024)){
var statearr_40036_40183 = state_40033__$1;
(statearr_40036_40183[(1)] = (5));

} else {
var statearr_40037_40184 = state_40033__$1;
(statearr_40037_40184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40034 === (5))){
var state_40033__$1 = state_40033;
var statearr_40038_40185 = state_40033__$1;
(statearr_40038_40185[(2)] = null);

(statearr_40038_40185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40034 === (6))){
var state_40033__$1 = state_40033;
var statearr_40039_40186 = state_40033__$1;
(statearr_40039_40186[(2)] = null);

(statearr_40039_40186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40034 === (7))){
var inst_40029 = (state_40033[(2)]);
var state_40033__$1 = state_40033;
var statearr_40040_40187 = state_40033__$1;
(statearr_40040_40187[(2)] = inst_40029);

(statearr_40040_40187[(1)] = (3));


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
});})(__40177,c__32474__auto___40181,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async))
;
return ((function (__40177,switch__32384__auto__,c__32474__auto___40181,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0 = (function (){
var statearr_40041 = [null,null,null,null,null,null,null];
(statearr_40041[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__);

(statearr_40041[(1)] = (1));

return statearr_40041;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1 = (function (state_40033){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40033);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40042){if((e40042 instanceof Object)){
var ex__32388__auto__ = e40042;
var statearr_40043_40188 = state_40033;
(statearr_40043_40188[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40033);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40042;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40189 = state_40033;
state_40033 = G__40189;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = function(state_40033){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1.call(this,state_40033);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__;
})()
;})(__40177,switch__32384__auto__,c__32474__auto___40181,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async))
})();
var state__32476__auto__ = (function (){var statearr_40044 = f__32475__auto__.call(null);
(statearr_40044[(6)] = c__32474__auto___40181);

return statearr_40044;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(__40177,c__32474__auto___40181,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async))
);


break;
case "async":
var c__32474__auto___40190 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40177,c__32474__auto___40190,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (__40177,c__32474__auto___40190,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async){
return (function (state_40057){
var state_val_40058 = (state_40057[(1)]);
if((state_val_40058 === (1))){
var state_40057__$1 = state_40057;
var statearr_40059_40191 = state_40057__$1;
(statearr_40059_40191[(2)] = null);

(statearr_40059_40191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (2))){
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40057__$1,(4),jobs);
} else {
if((state_val_40058 === (3))){
var inst_40055 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40057__$1,inst_40055);
} else {
if((state_val_40058 === (4))){
var inst_40047 = (state_40057[(2)]);
var inst_40048 = async.call(null,inst_40047);
var state_40057__$1 = state_40057;
if(cljs.core.truth_(inst_40048)){
var statearr_40060_40192 = state_40057__$1;
(statearr_40060_40192[(1)] = (5));

} else {
var statearr_40061_40193 = state_40057__$1;
(statearr_40061_40193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (5))){
var state_40057__$1 = state_40057;
var statearr_40062_40194 = state_40057__$1;
(statearr_40062_40194[(2)] = null);

(statearr_40062_40194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (6))){
var state_40057__$1 = state_40057;
var statearr_40063_40195 = state_40057__$1;
(statearr_40063_40195[(2)] = null);

(statearr_40063_40195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40058 === (7))){
var inst_40053 = (state_40057[(2)]);
var state_40057__$1 = state_40057;
var statearr_40064_40196 = state_40057__$1;
(statearr_40064_40196[(2)] = inst_40053);

(statearr_40064_40196[(1)] = (3));


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
});})(__40177,c__32474__auto___40190,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async))
;
return ((function (__40177,switch__32384__auto__,c__32474__auto___40190,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0 = (function (){
var statearr_40065 = [null,null,null,null,null,null,null];
(statearr_40065[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__);

(statearr_40065[(1)] = (1));

return statearr_40065;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1 = (function (state_40057){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40057);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40066){if((e40066 instanceof Object)){
var ex__32388__auto__ = e40066;
var statearr_40067_40197 = state_40057;
(statearr_40067_40197[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40057);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40066;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40198 = state_40057;
state_40057 = G__40198;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = function(state_40057){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1.call(this,state_40057);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__;
})()
;})(__40177,switch__32384__auto__,c__32474__auto___40190,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async))
})();
var state__32476__auto__ = (function (){var statearr_40068 = f__32475__auto__.call(null);
(statearr_40068[(6)] = c__32474__auto___40190);

return statearr_40068;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(__40177,c__32474__auto___40190,G__40020_40178,G__40020_40179__$1,n__4376__auto___40176,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40020_40179__$1)].join('')));

}

var G__40199 = (__40177 + (1));
__40177 = G__40199;
continue;
} else {
}
break;
}

var c__32474__auto___40200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___40200,jobs,results,process__$1,async){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___40200,jobs,results,process__$1,async){
return (function (state_40090){
var state_val_40091 = (state_40090[(1)]);
if((state_val_40091 === (1))){
var state_40090__$1 = state_40090;
var statearr_40092_40201 = state_40090__$1;
(statearr_40092_40201[(2)] = null);

(statearr_40092_40201[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (2))){
var state_40090__$1 = state_40090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40090__$1,(4),from);
} else {
if((state_val_40091 === (3))){
var inst_40088 = (state_40090[(2)]);
var state_40090__$1 = state_40090;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40090__$1,inst_40088);
} else {
if((state_val_40091 === (4))){
var inst_40071 = (state_40090[(7)]);
var inst_40071__$1 = (state_40090[(2)]);
var inst_40072 = (inst_40071__$1 == null);
var state_40090__$1 = (function (){var statearr_40093 = state_40090;
(statearr_40093[(7)] = inst_40071__$1);

return statearr_40093;
})();
if(cljs.core.truth_(inst_40072)){
var statearr_40094_40202 = state_40090__$1;
(statearr_40094_40202[(1)] = (5));

} else {
var statearr_40095_40203 = state_40090__$1;
(statearr_40095_40203[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (5))){
var inst_40074 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40090__$1 = state_40090;
var statearr_40096_40204 = state_40090__$1;
(statearr_40096_40204[(2)] = inst_40074);

(statearr_40096_40204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (6))){
var inst_40076 = (state_40090[(8)]);
var inst_40071 = (state_40090[(7)]);
var inst_40076__$1 = cljs.core.async.chan.call(null,(1));
var inst_40077 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40078 = [inst_40071,inst_40076__$1];
var inst_40079 = (new cljs.core.PersistentVector(null,2,(5),inst_40077,inst_40078,null));
var state_40090__$1 = (function (){var statearr_40097 = state_40090;
(statearr_40097[(8)] = inst_40076__$1);

return statearr_40097;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40090__$1,(8),jobs,inst_40079);
} else {
if((state_val_40091 === (7))){
var inst_40086 = (state_40090[(2)]);
var state_40090__$1 = state_40090;
var statearr_40098_40205 = state_40090__$1;
(statearr_40098_40205[(2)] = inst_40086);

(statearr_40098_40205[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40091 === (8))){
var inst_40076 = (state_40090[(8)]);
var inst_40081 = (state_40090[(2)]);
var state_40090__$1 = (function (){var statearr_40099 = state_40090;
(statearr_40099[(9)] = inst_40081);

return statearr_40099;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40090__$1,(9),results,inst_40076);
} else {
if((state_val_40091 === (9))){
var inst_40083 = (state_40090[(2)]);
var state_40090__$1 = (function (){var statearr_40100 = state_40090;
(statearr_40100[(10)] = inst_40083);

return statearr_40100;
})();
var statearr_40101_40206 = state_40090__$1;
(statearr_40101_40206[(2)] = null);

(statearr_40101_40206[(1)] = (2));


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
});})(c__32474__auto___40200,jobs,results,process__$1,async))
;
return ((function (switch__32384__auto__,c__32474__auto___40200,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0 = (function (){
var statearr_40102 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__);

(statearr_40102[(1)] = (1));

return statearr_40102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1 = (function (state_40090){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40103){if((e40103 instanceof Object)){
var ex__32388__auto__ = e40103;
var statearr_40104_40207 = state_40090;
(statearr_40104_40207[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40103;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40208 = state_40090;
state_40090 = G__40208;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = function(state_40090){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1.call(this,state_40090);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___40200,jobs,results,process__$1,async))
})();
var state__32476__auto__ = (function (){var statearr_40105 = f__32475__auto__.call(null);
(statearr_40105[(6)] = c__32474__auto___40200);

return statearr_40105;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___40200,jobs,results,process__$1,async))
);


var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__,jobs,results,process__$1,async){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__,jobs,results,process__$1,async){
return (function (state_40143){
var state_val_40144 = (state_40143[(1)]);
if((state_val_40144 === (7))){
var inst_40139 = (state_40143[(2)]);
var state_40143__$1 = state_40143;
var statearr_40145_40209 = state_40143__$1;
(statearr_40145_40209[(2)] = inst_40139);

(statearr_40145_40209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (20))){
var state_40143__$1 = state_40143;
var statearr_40146_40210 = state_40143__$1;
(statearr_40146_40210[(2)] = null);

(statearr_40146_40210[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (1))){
var state_40143__$1 = state_40143;
var statearr_40147_40211 = state_40143__$1;
(statearr_40147_40211[(2)] = null);

(statearr_40147_40211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (4))){
var inst_40108 = (state_40143[(7)]);
var inst_40108__$1 = (state_40143[(2)]);
var inst_40109 = (inst_40108__$1 == null);
var state_40143__$1 = (function (){var statearr_40148 = state_40143;
(statearr_40148[(7)] = inst_40108__$1);

return statearr_40148;
})();
if(cljs.core.truth_(inst_40109)){
var statearr_40149_40212 = state_40143__$1;
(statearr_40149_40212[(1)] = (5));

} else {
var statearr_40150_40213 = state_40143__$1;
(statearr_40150_40213[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (15))){
var inst_40121 = (state_40143[(8)]);
var state_40143__$1 = state_40143;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40143__$1,(18),to,inst_40121);
} else {
if((state_val_40144 === (21))){
var inst_40134 = (state_40143[(2)]);
var state_40143__$1 = state_40143;
var statearr_40151_40214 = state_40143__$1;
(statearr_40151_40214[(2)] = inst_40134);

(statearr_40151_40214[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (13))){
var inst_40136 = (state_40143[(2)]);
var state_40143__$1 = (function (){var statearr_40152 = state_40143;
(statearr_40152[(9)] = inst_40136);

return statearr_40152;
})();
var statearr_40153_40215 = state_40143__$1;
(statearr_40153_40215[(2)] = null);

(statearr_40153_40215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (6))){
var inst_40108 = (state_40143[(7)]);
var state_40143__$1 = state_40143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40143__$1,(11),inst_40108);
} else {
if((state_val_40144 === (17))){
var inst_40129 = (state_40143[(2)]);
var state_40143__$1 = state_40143;
if(cljs.core.truth_(inst_40129)){
var statearr_40154_40216 = state_40143__$1;
(statearr_40154_40216[(1)] = (19));

} else {
var statearr_40155_40217 = state_40143__$1;
(statearr_40155_40217[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (3))){
var inst_40141 = (state_40143[(2)]);
var state_40143__$1 = state_40143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40143__$1,inst_40141);
} else {
if((state_val_40144 === (12))){
var inst_40118 = (state_40143[(10)]);
var state_40143__$1 = state_40143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40143__$1,(14),inst_40118);
} else {
if((state_val_40144 === (2))){
var state_40143__$1 = state_40143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40143__$1,(4),results);
} else {
if((state_val_40144 === (19))){
var state_40143__$1 = state_40143;
var statearr_40156_40218 = state_40143__$1;
(statearr_40156_40218[(2)] = null);

(statearr_40156_40218[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (11))){
var inst_40118 = (state_40143[(2)]);
var state_40143__$1 = (function (){var statearr_40157 = state_40143;
(statearr_40157[(10)] = inst_40118);

return statearr_40157;
})();
var statearr_40158_40219 = state_40143__$1;
(statearr_40158_40219[(2)] = null);

(statearr_40158_40219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (9))){
var state_40143__$1 = state_40143;
var statearr_40159_40220 = state_40143__$1;
(statearr_40159_40220[(2)] = null);

(statearr_40159_40220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (5))){
var state_40143__$1 = state_40143;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40160_40221 = state_40143__$1;
(statearr_40160_40221[(1)] = (8));

} else {
var statearr_40161_40222 = state_40143__$1;
(statearr_40161_40222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (14))){
var inst_40121 = (state_40143[(8)]);
var inst_40123 = (state_40143[(11)]);
var inst_40121__$1 = (state_40143[(2)]);
var inst_40122 = (inst_40121__$1 == null);
var inst_40123__$1 = cljs.core.not.call(null,inst_40122);
var state_40143__$1 = (function (){var statearr_40162 = state_40143;
(statearr_40162[(8)] = inst_40121__$1);

(statearr_40162[(11)] = inst_40123__$1);

return statearr_40162;
})();
if(inst_40123__$1){
var statearr_40163_40223 = state_40143__$1;
(statearr_40163_40223[(1)] = (15));

} else {
var statearr_40164_40224 = state_40143__$1;
(statearr_40164_40224[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (16))){
var inst_40123 = (state_40143[(11)]);
var state_40143__$1 = state_40143;
var statearr_40165_40225 = state_40143__$1;
(statearr_40165_40225[(2)] = inst_40123);

(statearr_40165_40225[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (10))){
var inst_40115 = (state_40143[(2)]);
var state_40143__$1 = state_40143;
var statearr_40166_40226 = state_40143__$1;
(statearr_40166_40226[(2)] = inst_40115);

(statearr_40166_40226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (18))){
var inst_40126 = (state_40143[(2)]);
var state_40143__$1 = state_40143;
var statearr_40167_40227 = state_40143__$1;
(statearr_40167_40227[(2)] = inst_40126);

(statearr_40167_40227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40144 === (8))){
var inst_40112 = cljs.core.async.close_BANG_.call(null,to);
var state_40143__$1 = state_40143;
var statearr_40168_40228 = state_40143__$1;
(statearr_40168_40228[(2)] = inst_40112);

(statearr_40168_40228[(1)] = (10));


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
}
}
}
}
});})(c__32474__auto__,jobs,results,process__$1,async))
;
return ((function (switch__32384__auto__,c__32474__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0 = (function (){
var statearr_40169 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40169[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__);

(statearr_40169[(1)] = (1));

return statearr_40169;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1 = (function (state_40143){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40170){if((e40170 instanceof Object)){
var ex__32388__auto__ = e40170;
var statearr_40171_40229 = state_40143;
(statearr_40171_40229[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40230 = state_40143;
state_40143 = G__40230;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__ = function(state_40143){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1.call(this,state_40143);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32385__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__,jobs,results,process__$1,async))
})();
var state__32476__auto__ = (function (){var statearr_40172 = f__32475__auto__.call(null);
(statearr_40172[(6)] = c__32474__auto__);

return statearr_40172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__,jobs,results,process__$1,async))
);

return c__32474__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40232 = arguments.length;
switch (G__40232) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40235 = arguments.length;
switch (G__40235) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40238 = arguments.length;
switch (G__40238) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32474__auto___40287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___40287,tc,fc){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___40287,tc,fc){
return (function (state_40264){
var state_val_40265 = (state_40264[(1)]);
if((state_val_40265 === (7))){
var inst_40260 = (state_40264[(2)]);
var state_40264__$1 = state_40264;
var statearr_40266_40288 = state_40264__$1;
(statearr_40266_40288[(2)] = inst_40260);

(statearr_40266_40288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (1))){
var state_40264__$1 = state_40264;
var statearr_40267_40289 = state_40264__$1;
(statearr_40267_40289[(2)] = null);

(statearr_40267_40289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (4))){
var inst_40241 = (state_40264[(7)]);
var inst_40241__$1 = (state_40264[(2)]);
var inst_40242 = (inst_40241__$1 == null);
var state_40264__$1 = (function (){var statearr_40268 = state_40264;
(statearr_40268[(7)] = inst_40241__$1);

return statearr_40268;
})();
if(cljs.core.truth_(inst_40242)){
var statearr_40269_40290 = state_40264__$1;
(statearr_40269_40290[(1)] = (5));

} else {
var statearr_40270_40291 = state_40264__$1;
(statearr_40270_40291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (13))){
var state_40264__$1 = state_40264;
var statearr_40271_40292 = state_40264__$1;
(statearr_40271_40292[(2)] = null);

(statearr_40271_40292[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (6))){
var inst_40241 = (state_40264[(7)]);
var inst_40247 = p.call(null,inst_40241);
var state_40264__$1 = state_40264;
if(cljs.core.truth_(inst_40247)){
var statearr_40272_40293 = state_40264__$1;
(statearr_40272_40293[(1)] = (9));

} else {
var statearr_40273_40294 = state_40264__$1;
(statearr_40273_40294[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (3))){
var inst_40262 = (state_40264[(2)]);
var state_40264__$1 = state_40264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40264__$1,inst_40262);
} else {
if((state_val_40265 === (12))){
var state_40264__$1 = state_40264;
var statearr_40274_40295 = state_40264__$1;
(statearr_40274_40295[(2)] = null);

(statearr_40274_40295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (2))){
var state_40264__$1 = state_40264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40264__$1,(4),ch);
} else {
if((state_val_40265 === (11))){
var inst_40241 = (state_40264[(7)]);
var inst_40251 = (state_40264[(2)]);
var state_40264__$1 = state_40264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40264__$1,(8),inst_40251,inst_40241);
} else {
if((state_val_40265 === (9))){
var state_40264__$1 = state_40264;
var statearr_40275_40296 = state_40264__$1;
(statearr_40275_40296[(2)] = tc);

(statearr_40275_40296[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (5))){
var inst_40244 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40245 = cljs.core.async.close_BANG_.call(null,fc);
var state_40264__$1 = (function (){var statearr_40276 = state_40264;
(statearr_40276[(8)] = inst_40244);

return statearr_40276;
})();
var statearr_40277_40297 = state_40264__$1;
(statearr_40277_40297[(2)] = inst_40245);

(statearr_40277_40297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (14))){
var inst_40258 = (state_40264[(2)]);
var state_40264__$1 = state_40264;
var statearr_40278_40298 = state_40264__$1;
(statearr_40278_40298[(2)] = inst_40258);

(statearr_40278_40298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (10))){
var state_40264__$1 = state_40264;
var statearr_40279_40299 = state_40264__$1;
(statearr_40279_40299[(2)] = fc);

(statearr_40279_40299[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40265 === (8))){
var inst_40253 = (state_40264[(2)]);
var state_40264__$1 = state_40264;
if(cljs.core.truth_(inst_40253)){
var statearr_40280_40300 = state_40264__$1;
(statearr_40280_40300[(1)] = (12));

} else {
var statearr_40281_40301 = state_40264__$1;
(statearr_40281_40301[(1)] = (13));

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
});})(c__32474__auto___40287,tc,fc))
;
return ((function (switch__32384__auto__,c__32474__auto___40287,tc,fc){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_40282 = [null,null,null,null,null,null,null,null,null];
(statearr_40282[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_40282[(1)] = (1));

return statearr_40282;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_40264){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40283){if((e40283 instanceof Object)){
var ex__32388__auto__ = e40283;
var statearr_40284_40302 = state_40264;
(statearr_40284_40302[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40303 = state_40264;
state_40264 = G__40303;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_40264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_40264);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___40287,tc,fc))
})();
var state__32476__auto__ = (function (){var statearr_40285 = f__32475__auto__.call(null);
(statearr_40285[(6)] = c__32474__auto___40287);

return statearr_40285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___40287,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__){
return (function (state_40324){
var state_val_40325 = (state_40324[(1)]);
if((state_val_40325 === (7))){
var inst_40320 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40326_40344 = state_40324__$1;
(statearr_40326_40344[(2)] = inst_40320);

(statearr_40326_40344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (1))){
var inst_40304 = init;
var state_40324__$1 = (function (){var statearr_40327 = state_40324;
(statearr_40327[(7)] = inst_40304);

return statearr_40327;
})();
var statearr_40328_40345 = state_40324__$1;
(statearr_40328_40345[(2)] = null);

(statearr_40328_40345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (4))){
var inst_40307 = (state_40324[(8)]);
var inst_40307__$1 = (state_40324[(2)]);
var inst_40308 = (inst_40307__$1 == null);
var state_40324__$1 = (function (){var statearr_40329 = state_40324;
(statearr_40329[(8)] = inst_40307__$1);

return statearr_40329;
})();
if(cljs.core.truth_(inst_40308)){
var statearr_40330_40346 = state_40324__$1;
(statearr_40330_40346[(1)] = (5));

} else {
var statearr_40331_40347 = state_40324__$1;
(statearr_40331_40347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (6))){
var inst_40311 = (state_40324[(9)]);
var inst_40304 = (state_40324[(7)]);
var inst_40307 = (state_40324[(8)]);
var inst_40311__$1 = f.call(null,inst_40304,inst_40307);
var inst_40312 = cljs.core.reduced_QMARK_.call(null,inst_40311__$1);
var state_40324__$1 = (function (){var statearr_40332 = state_40324;
(statearr_40332[(9)] = inst_40311__$1);

return statearr_40332;
})();
if(inst_40312){
var statearr_40333_40348 = state_40324__$1;
(statearr_40333_40348[(1)] = (8));

} else {
var statearr_40334_40349 = state_40324__$1;
(statearr_40334_40349[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (3))){
var inst_40322 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40324__$1,inst_40322);
} else {
if((state_val_40325 === (2))){
var state_40324__$1 = state_40324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40324__$1,(4),ch);
} else {
if((state_val_40325 === (9))){
var inst_40311 = (state_40324[(9)]);
var inst_40304 = inst_40311;
var state_40324__$1 = (function (){var statearr_40335 = state_40324;
(statearr_40335[(7)] = inst_40304);

return statearr_40335;
})();
var statearr_40336_40350 = state_40324__$1;
(statearr_40336_40350[(2)] = null);

(statearr_40336_40350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (5))){
var inst_40304 = (state_40324[(7)]);
var state_40324__$1 = state_40324;
var statearr_40337_40351 = state_40324__$1;
(statearr_40337_40351[(2)] = inst_40304);

(statearr_40337_40351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (10))){
var inst_40318 = (state_40324[(2)]);
var state_40324__$1 = state_40324;
var statearr_40338_40352 = state_40324__$1;
(statearr_40338_40352[(2)] = inst_40318);

(statearr_40338_40352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40325 === (8))){
var inst_40311 = (state_40324[(9)]);
var inst_40314 = cljs.core.deref.call(null,inst_40311);
var state_40324__$1 = state_40324;
var statearr_40339_40353 = state_40324__$1;
(statearr_40339_40353[(2)] = inst_40314);

(statearr_40339_40353[(1)] = (10));


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
});})(c__32474__auto__))
;
return ((function (switch__32384__auto__,c__32474__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32385__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32385__auto____0 = (function (){
var statearr_40340 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40340[(0)] = cljs$core$async$reduce_$_state_machine__32385__auto__);

(statearr_40340[(1)] = (1));

return statearr_40340;
});
var cljs$core$async$reduce_$_state_machine__32385__auto____1 = (function (state_40324){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40341){if((e40341 instanceof Object)){
var ex__32388__auto__ = e40341;
var statearr_40342_40354 = state_40324;
(statearr_40342_40354[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40341;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40355 = state_40324;
state_40324 = G__40355;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32385__auto__ = function(state_40324){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32385__auto____1.call(this,state_40324);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32385__auto____0;
cljs$core$async$reduce_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32385__auto____1;
return cljs$core$async$reduce_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__))
})();
var state__32476__auto__ = (function (){var statearr_40343 = f__32475__auto__.call(null);
(statearr_40343[(6)] = c__32474__auto__);

return statearr_40343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__))
);

return c__32474__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__,f__$1){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__,f__$1){
return (function (state_40361){
var state_val_40362 = (state_40361[(1)]);
if((state_val_40362 === (1))){
var inst_40356 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_40361__$1 = state_40361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40361__$1,(2),inst_40356);
} else {
if((state_val_40362 === (2))){
var inst_40358 = (state_40361[(2)]);
var inst_40359 = f__$1.call(null,inst_40358);
var state_40361__$1 = state_40361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40361__$1,inst_40359);
} else {
return null;
}
}
});})(c__32474__auto__,f__$1))
;
return ((function (switch__32384__auto__,c__32474__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32385__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32385__auto____0 = (function (){
var statearr_40363 = [null,null,null,null,null,null,null];
(statearr_40363[(0)] = cljs$core$async$transduce_$_state_machine__32385__auto__);

(statearr_40363[(1)] = (1));

return statearr_40363;
});
var cljs$core$async$transduce_$_state_machine__32385__auto____1 = (function (state_40361){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40364){if((e40364 instanceof Object)){
var ex__32388__auto__ = e40364;
var statearr_40365_40367 = state_40361;
(statearr_40365_40367[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40364;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40368 = state_40361;
state_40361 = G__40368;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32385__auto__ = function(state_40361){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32385__auto____1.call(this,state_40361);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32385__auto____0;
cljs$core$async$transduce_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32385__auto____1;
return cljs$core$async$transduce_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__,f__$1))
})();
var state__32476__auto__ = (function (){var statearr_40366 = f__32475__auto__.call(null);
(statearr_40366[(6)] = c__32474__auto__);

return statearr_40366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__,f__$1))
);

return c__32474__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__40370 = arguments.length;
switch (G__40370) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__){
return (function (state_40395){
var state_val_40396 = (state_40395[(1)]);
if((state_val_40396 === (7))){
var inst_40377 = (state_40395[(2)]);
var state_40395__$1 = state_40395;
var statearr_40397_40418 = state_40395__$1;
(statearr_40397_40418[(2)] = inst_40377);

(statearr_40397_40418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (1))){
var inst_40371 = cljs.core.seq.call(null,coll);
var inst_40372 = inst_40371;
var state_40395__$1 = (function (){var statearr_40398 = state_40395;
(statearr_40398[(7)] = inst_40372);

return statearr_40398;
})();
var statearr_40399_40419 = state_40395__$1;
(statearr_40399_40419[(2)] = null);

(statearr_40399_40419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (4))){
var inst_40372 = (state_40395[(7)]);
var inst_40375 = cljs.core.first.call(null,inst_40372);
var state_40395__$1 = state_40395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40395__$1,(7),ch,inst_40375);
} else {
if((state_val_40396 === (13))){
var inst_40389 = (state_40395[(2)]);
var state_40395__$1 = state_40395;
var statearr_40400_40420 = state_40395__$1;
(statearr_40400_40420[(2)] = inst_40389);

(statearr_40400_40420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (6))){
var inst_40380 = (state_40395[(2)]);
var state_40395__$1 = state_40395;
if(cljs.core.truth_(inst_40380)){
var statearr_40401_40421 = state_40395__$1;
(statearr_40401_40421[(1)] = (8));

} else {
var statearr_40402_40422 = state_40395__$1;
(statearr_40402_40422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (3))){
var inst_40393 = (state_40395[(2)]);
var state_40395__$1 = state_40395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40395__$1,inst_40393);
} else {
if((state_val_40396 === (12))){
var state_40395__$1 = state_40395;
var statearr_40403_40423 = state_40395__$1;
(statearr_40403_40423[(2)] = null);

(statearr_40403_40423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (2))){
var inst_40372 = (state_40395[(7)]);
var state_40395__$1 = state_40395;
if(cljs.core.truth_(inst_40372)){
var statearr_40404_40424 = state_40395__$1;
(statearr_40404_40424[(1)] = (4));

} else {
var statearr_40405_40425 = state_40395__$1;
(statearr_40405_40425[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (11))){
var inst_40386 = cljs.core.async.close_BANG_.call(null,ch);
var state_40395__$1 = state_40395;
var statearr_40406_40426 = state_40395__$1;
(statearr_40406_40426[(2)] = inst_40386);

(statearr_40406_40426[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (9))){
var state_40395__$1 = state_40395;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40407_40427 = state_40395__$1;
(statearr_40407_40427[(1)] = (11));

} else {
var statearr_40408_40428 = state_40395__$1;
(statearr_40408_40428[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (5))){
var inst_40372 = (state_40395[(7)]);
var state_40395__$1 = state_40395;
var statearr_40409_40429 = state_40395__$1;
(statearr_40409_40429[(2)] = inst_40372);

(statearr_40409_40429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (10))){
var inst_40391 = (state_40395[(2)]);
var state_40395__$1 = state_40395;
var statearr_40410_40430 = state_40395__$1;
(statearr_40410_40430[(2)] = inst_40391);

(statearr_40410_40430[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40396 === (8))){
var inst_40372 = (state_40395[(7)]);
var inst_40382 = cljs.core.next.call(null,inst_40372);
var inst_40372__$1 = inst_40382;
var state_40395__$1 = (function (){var statearr_40411 = state_40395;
(statearr_40411[(7)] = inst_40372__$1);

return statearr_40411;
})();
var statearr_40412_40431 = state_40395__$1;
(statearr_40412_40431[(2)] = null);

(statearr_40412_40431[(1)] = (2));


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
});})(c__32474__auto__))
;
return ((function (switch__32384__auto__,c__32474__auto__){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_40413 = [null,null,null,null,null,null,null,null];
(statearr_40413[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_40413[(1)] = (1));

return statearr_40413;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_40395){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40414){if((e40414 instanceof Object)){
var ex__32388__auto__ = e40414;
var statearr_40415_40432 = state_40395;
(statearr_40415_40432[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40433 = state_40395;
state_40395 = G__40433;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_40395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_40395);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__))
})();
var state__32476__auto__ = (function (){var statearr_40416 = f__32475__auto__.call(null);
(statearr_40416[(6)] = c__32474__auto__);

return statearr_40416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__))
);

return c__32474__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40434 = (function (ch,cs,meta40435){
this.ch = ch;
this.cs = cs;
this.meta40435 = meta40435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40436,meta40435__$1){
var self__ = this;
var _40436__$1 = this;
return (new cljs.core.async.t_cljs$core$async40434(self__.ch,self__.cs,meta40435__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40436){
var self__ = this;
var _40436__$1 = this;
return self__.meta40435;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40435","meta40435",445903017,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40434";

cljs.core.async.t_cljs$core$async40434.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40434");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40434.
 */
cljs.core.async.__GT_t_cljs$core$async40434 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40434(ch__$1,cs__$1,meta40435){
return (new cljs.core.async.t_cljs$core$async40434(ch__$1,cs__$1,meta40435));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40434(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32474__auto___40656 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___40656,cs,m,dchan,dctr,done){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___40656,cs,m,dchan,dctr,done){
return (function (state_40571){
var state_val_40572 = (state_40571[(1)]);
if((state_val_40572 === (7))){
var inst_40567 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40573_40657 = state_40571__$1;
(statearr_40573_40657[(2)] = inst_40567);

(statearr_40573_40657[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (20))){
var inst_40470 = (state_40571[(7)]);
var inst_40482 = cljs.core.first.call(null,inst_40470);
var inst_40483 = cljs.core.nth.call(null,inst_40482,(0),null);
var inst_40484 = cljs.core.nth.call(null,inst_40482,(1),null);
var state_40571__$1 = (function (){var statearr_40574 = state_40571;
(statearr_40574[(8)] = inst_40483);

return statearr_40574;
})();
if(cljs.core.truth_(inst_40484)){
var statearr_40575_40658 = state_40571__$1;
(statearr_40575_40658[(1)] = (22));

} else {
var statearr_40576_40659 = state_40571__$1;
(statearr_40576_40659[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (27))){
var inst_40439 = (state_40571[(9)]);
var inst_40514 = (state_40571[(10)]);
var inst_40519 = (state_40571[(11)]);
var inst_40512 = (state_40571[(12)]);
var inst_40519__$1 = cljs.core._nth.call(null,inst_40512,inst_40514);
var inst_40520 = cljs.core.async.put_BANG_.call(null,inst_40519__$1,inst_40439,done);
var state_40571__$1 = (function (){var statearr_40577 = state_40571;
(statearr_40577[(11)] = inst_40519__$1);

return statearr_40577;
})();
if(cljs.core.truth_(inst_40520)){
var statearr_40578_40660 = state_40571__$1;
(statearr_40578_40660[(1)] = (30));

} else {
var statearr_40579_40661 = state_40571__$1;
(statearr_40579_40661[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (1))){
var state_40571__$1 = state_40571;
var statearr_40580_40662 = state_40571__$1;
(statearr_40580_40662[(2)] = null);

(statearr_40580_40662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (24))){
var inst_40470 = (state_40571[(7)]);
var inst_40489 = (state_40571[(2)]);
var inst_40490 = cljs.core.next.call(null,inst_40470);
var inst_40448 = inst_40490;
var inst_40449 = null;
var inst_40450 = (0);
var inst_40451 = (0);
var state_40571__$1 = (function (){var statearr_40581 = state_40571;
(statearr_40581[(13)] = inst_40448);

(statearr_40581[(14)] = inst_40449);

(statearr_40581[(15)] = inst_40451);

(statearr_40581[(16)] = inst_40489);

(statearr_40581[(17)] = inst_40450);

return statearr_40581;
})();
var statearr_40582_40663 = state_40571__$1;
(statearr_40582_40663[(2)] = null);

(statearr_40582_40663[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (39))){
var state_40571__$1 = state_40571;
var statearr_40586_40664 = state_40571__$1;
(statearr_40586_40664[(2)] = null);

(statearr_40586_40664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (4))){
var inst_40439 = (state_40571[(9)]);
var inst_40439__$1 = (state_40571[(2)]);
var inst_40440 = (inst_40439__$1 == null);
var state_40571__$1 = (function (){var statearr_40587 = state_40571;
(statearr_40587[(9)] = inst_40439__$1);

return statearr_40587;
})();
if(cljs.core.truth_(inst_40440)){
var statearr_40588_40665 = state_40571__$1;
(statearr_40588_40665[(1)] = (5));

} else {
var statearr_40589_40666 = state_40571__$1;
(statearr_40589_40666[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (15))){
var inst_40448 = (state_40571[(13)]);
var inst_40449 = (state_40571[(14)]);
var inst_40451 = (state_40571[(15)]);
var inst_40450 = (state_40571[(17)]);
var inst_40466 = (state_40571[(2)]);
var inst_40467 = (inst_40451 + (1));
var tmp40583 = inst_40448;
var tmp40584 = inst_40449;
var tmp40585 = inst_40450;
var inst_40448__$1 = tmp40583;
var inst_40449__$1 = tmp40584;
var inst_40450__$1 = tmp40585;
var inst_40451__$1 = inst_40467;
var state_40571__$1 = (function (){var statearr_40590 = state_40571;
(statearr_40590[(13)] = inst_40448__$1);

(statearr_40590[(14)] = inst_40449__$1);

(statearr_40590[(15)] = inst_40451__$1);

(statearr_40590[(18)] = inst_40466);

(statearr_40590[(17)] = inst_40450__$1);

return statearr_40590;
})();
var statearr_40591_40667 = state_40571__$1;
(statearr_40591_40667[(2)] = null);

(statearr_40591_40667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (21))){
var inst_40493 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40595_40668 = state_40571__$1;
(statearr_40595_40668[(2)] = inst_40493);

(statearr_40595_40668[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (31))){
var inst_40519 = (state_40571[(11)]);
var inst_40523 = done.call(null,null);
var inst_40524 = cljs.core.async.untap_STAR_.call(null,m,inst_40519);
var state_40571__$1 = (function (){var statearr_40596 = state_40571;
(statearr_40596[(19)] = inst_40523);

return statearr_40596;
})();
var statearr_40597_40669 = state_40571__$1;
(statearr_40597_40669[(2)] = inst_40524);

(statearr_40597_40669[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (32))){
var inst_40511 = (state_40571[(20)]);
var inst_40514 = (state_40571[(10)]);
var inst_40513 = (state_40571[(21)]);
var inst_40512 = (state_40571[(12)]);
var inst_40526 = (state_40571[(2)]);
var inst_40527 = (inst_40514 + (1));
var tmp40592 = inst_40511;
var tmp40593 = inst_40513;
var tmp40594 = inst_40512;
var inst_40511__$1 = tmp40592;
var inst_40512__$1 = tmp40594;
var inst_40513__$1 = tmp40593;
var inst_40514__$1 = inst_40527;
var state_40571__$1 = (function (){var statearr_40598 = state_40571;
(statearr_40598[(20)] = inst_40511__$1);

(statearr_40598[(10)] = inst_40514__$1);

(statearr_40598[(22)] = inst_40526);

(statearr_40598[(21)] = inst_40513__$1);

(statearr_40598[(12)] = inst_40512__$1);

return statearr_40598;
})();
var statearr_40599_40670 = state_40571__$1;
(statearr_40599_40670[(2)] = null);

(statearr_40599_40670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (40))){
var inst_40539 = (state_40571[(23)]);
var inst_40543 = done.call(null,null);
var inst_40544 = cljs.core.async.untap_STAR_.call(null,m,inst_40539);
var state_40571__$1 = (function (){var statearr_40600 = state_40571;
(statearr_40600[(24)] = inst_40543);

return statearr_40600;
})();
var statearr_40601_40671 = state_40571__$1;
(statearr_40601_40671[(2)] = inst_40544);

(statearr_40601_40671[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (33))){
var inst_40530 = (state_40571[(25)]);
var inst_40532 = cljs.core.chunked_seq_QMARK_.call(null,inst_40530);
var state_40571__$1 = state_40571;
if(inst_40532){
var statearr_40602_40672 = state_40571__$1;
(statearr_40602_40672[(1)] = (36));

} else {
var statearr_40603_40673 = state_40571__$1;
(statearr_40603_40673[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (13))){
var inst_40460 = (state_40571[(26)]);
var inst_40463 = cljs.core.async.close_BANG_.call(null,inst_40460);
var state_40571__$1 = state_40571;
var statearr_40604_40674 = state_40571__$1;
(statearr_40604_40674[(2)] = inst_40463);

(statearr_40604_40674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (22))){
var inst_40483 = (state_40571[(8)]);
var inst_40486 = cljs.core.async.close_BANG_.call(null,inst_40483);
var state_40571__$1 = state_40571;
var statearr_40605_40675 = state_40571__$1;
(statearr_40605_40675[(2)] = inst_40486);

(statearr_40605_40675[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (36))){
var inst_40530 = (state_40571[(25)]);
var inst_40534 = cljs.core.chunk_first.call(null,inst_40530);
var inst_40535 = cljs.core.chunk_rest.call(null,inst_40530);
var inst_40536 = cljs.core.count.call(null,inst_40534);
var inst_40511 = inst_40535;
var inst_40512 = inst_40534;
var inst_40513 = inst_40536;
var inst_40514 = (0);
var state_40571__$1 = (function (){var statearr_40606 = state_40571;
(statearr_40606[(20)] = inst_40511);

(statearr_40606[(10)] = inst_40514);

(statearr_40606[(21)] = inst_40513);

(statearr_40606[(12)] = inst_40512);

return statearr_40606;
})();
var statearr_40607_40676 = state_40571__$1;
(statearr_40607_40676[(2)] = null);

(statearr_40607_40676[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (41))){
var inst_40530 = (state_40571[(25)]);
var inst_40546 = (state_40571[(2)]);
var inst_40547 = cljs.core.next.call(null,inst_40530);
var inst_40511 = inst_40547;
var inst_40512 = null;
var inst_40513 = (0);
var inst_40514 = (0);
var state_40571__$1 = (function (){var statearr_40608 = state_40571;
(statearr_40608[(20)] = inst_40511);

(statearr_40608[(10)] = inst_40514);

(statearr_40608[(27)] = inst_40546);

(statearr_40608[(21)] = inst_40513);

(statearr_40608[(12)] = inst_40512);

return statearr_40608;
})();
var statearr_40609_40677 = state_40571__$1;
(statearr_40609_40677[(2)] = null);

(statearr_40609_40677[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (43))){
var state_40571__$1 = state_40571;
var statearr_40610_40678 = state_40571__$1;
(statearr_40610_40678[(2)] = null);

(statearr_40610_40678[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (29))){
var inst_40555 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40611_40679 = state_40571__$1;
(statearr_40611_40679[(2)] = inst_40555);

(statearr_40611_40679[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (44))){
var inst_40564 = (state_40571[(2)]);
var state_40571__$1 = (function (){var statearr_40612 = state_40571;
(statearr_40612[(28)] = inst_40564);

return statearr_40612;
})();
var statearr_40613_40680 = state_40571__$1;
(statearr_40613_40680[(2)] = null);

(statearr_40613_40680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (6))){
var inst_40503 = (state_40571[(29)]);
var inst_40502 = cljs.core.deref.call(null,cs);
var inst_40503__$1 = cljs.core.keys.call(null,inst_40502);
var inst_40504 = cljs.core.count.call(null,inst_40503__$1);
var inst_40505 = cljs.core.reset_BANG_.call(null,dctr,inst_40504);
var inst_40510 = cljs.core.seq.call(null,inst_40503__$1);
var inst_40511 = inst_40510;
var inst_40512 = null;
var inst_40513 = (0);
var inst_40514 = (0);
var state_40571__$1 = (function (){var statearr_40614 = state_40571;
(statearr_40614[(30)] = inst_40505);

(statearr_40614[(20)] = inst_40511);

(statearr_40614[(10)] = inst_40514);

(statearr_40614[(29)] = inst_40503__$1);

(statearr_40614[(21)] = inst_40513);

(statearr_40614[(12)] = inst_40512);

return statearr_40614;
})();
var statearr_40615_40681 = state_40571__$1;
(statearr_40615_40681[(2)] = null);

(statearr_40615_40681[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (28))){
var inst_40511 = (state_40571[(20)]);
var inst_40530 = (state_40571[(25)]);
var inst_40530__$1 = cljs.core.seq.call(null,inst_40511);
var state_40571__$1 = (function (){var statearr_40616 = state_40571;
(statearr_40616[(25)] = inst_40530__$1);

return statearr_40616;
})();
if(inst_40530__$1){
var statearr_40617_40682 = state_40571__$1;
(statearr_40617_40682[(1)] = (33));

} else {
var statearr_40618_40683 = state_40571__$1;
(statearr_40618_40683[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (25))){
var inst_40514 = (state_40571[(10)]);
var inst_40513 = (state_40571[(21)]);
var inst_40516 = (inst_40514 < inst_40513);
var inst_40517 = inst_40516;
var state_40571__$1 = state_40571;
if(cljs.core.truth_(inst_40517)){
var statearr_40619_40684 = state_40571__$1;
(statearr_40619_40684[(1)] = (27));

} else {
var statearr_40620_40685 = state_40571__$1;
(statearr_40620_40685[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (34))){
var state_40571__$1 = state_40571;
var statearr_40621_40686 = state_40571__$1;
(statearr_40621_40686[(2)] = null);

(statearr_40621_40686[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (17))){
var state_40571__$1 = state_40571;
var statearr_40622_40687 = state_40571__$1;
(statearr_40622_40687[(2)] = null);

(statearr_40622_40687[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (3))){
var inst_40569 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40571__$1,inst_40569);
} else {
if((state_val_40572 === (12))){
var inst_40498 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40623_40688 = state_40571__$1;
(statearr_40623_40688[(2)] = inst_40498);

(statearr_40623_40688[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (2))){
var state_40571__$1 = state_40571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40571__$1,(4),ch);
} else {
if((state_val_40572 === (23))){
var state_40571__$1 = state_40571;
var statearr_40624_40689 = state_40571__$1;
(statearr_40624_40689[(2)] = null);

(statearr_40624_40689[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (35))){
var inst_40553 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40625_40690 = state_40571__$1;
(statearr_40625_40690[(2)] = inst_40553);

(statearr_40625_40690[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (19))){
var inst_40470 = (state_40571[(7)]);
var inst_40474 = cljs.core.chunk_first.call(null,inst_40470);
var inst_40475 = cljs.core.chunk_rest.call(null,inst_40470);
var inst_40476 = cljs.core.count.call(null,inst_40474);
var inst_40448 = inst_40475;
var inst_40449 = inst_40474;
var inst_40450 = inst_40476;
var inst_40451 = (0);
var state_40571__$1 = (function (){var statearr_40626 = state_40571;
(statearr_40626[(13)] = inst_40448);

(statearr_40626[(14)] = inst_40449);

(statearr_40626[(15)] = inst_40451);

(statearr_40626[(17)] = inst_40450);

return statearr_40626;
})();
var statearr_40627_40691 = state_40571__$1;
(statearr_40627_40691[(2)] = null);

(statearr_40627_40691[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (11))){
var inst_40448 = (state_40571[(13)]);
var inst_40470 = (state_40571[(7)]);
var inst_40470__$1 = cljs.core.seq.call(null,inst_40448);
var state_40571__$1 = (function (){var statearr_40628 = state_40571;
(statearr_40628[(7)] = inst_40470__$1);

return statearr_40628;
})();
if(inst_40470__$1){
var statearr_40629_40692 = state_40571__$1;
(statearr_40629_40692[(1)] = (16));

} else {
var statearr_40630_40693 = state_40571__$1;
(statearr_40630_40693[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (9))){
var inst_40500 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40631_40694 = state_40571__$1;
(statearr_40631_40694[(2)] = inst_40500);

(statearr_40631_40694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (5))){
var inst_40446 = cljs.core.deref.call(null,cs);
var inst_40447 = cljs.core.seq.call(null,inst_40446);
var inst_40448 = inst_40447;
var inst_40449 = null;
var inst_40450 = (0);
var inst_40451 = (0);
var state_40571__$1 = (function (){var statearr_40632 = state_40571;
(statearr_40632[(13)] = inst_40448);

(statearr_40632[(14)] = inst_40449);

(statearr_40632[(15)] = inst_40451);

(statearr_40632[(17)] = inst_40450);

return statearr_40632;
})();
var statearr_40633_40695 = state_40571__$1;
(statearr_40633_40695[(2)] = null);

(statearr_40633_40695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (14))){
var state_40571__$1 = state_40571;
var statearr_40634_40696 = state_40571__$1;
(statearr_40634_40696[(2)] = null);

(statearr_40634_40696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (45))){
var inst_40561 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40635_40697 = state_40571__$1;
(statearr_40635_40697[(2)] = inst_40561);

(statearr_40635_40697[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (26))){
var inst_40503 = (state_40571[(29)]);
var inst_40557 = (state_40571[(2)]);
var inst_40558 = cljs.core.seq.call(null,inst_40503);
var state_40571__$1 = (function (){var statearr_40636 = state_40571;
(statearr_40636[(31)] = inst_40557);

return statearr_40636;
})();
if(inst_40558){
var statearr_40637_40698 = state_40571__$1;
(statearr_40637_40698[(1)] = (42));

} else {
var statearr_40638_40699 = state_40571__$1;
(statearr_40638_40699[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (16))){
var inst_40470 = (state_40571[(7)]);
var inst_40472 = cljs.core.chunked_seq_QMARK_.call(null,inst_40470);
var state_40571__$1 = state_40571;
if(inst_40472){
var statearr_40639_40700 = state_40571__$1;
(statearr_40639_40700[(1)] = (19));

} else {
var statearr_40640_40701 = state_40571__$1;
(statearr_40640_40701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (38))){
var inst_40550 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40641_40702 = state_40571__$1;
(statearr_40641_40702[(2)] = inst_40550);

(statearr_40641_40702[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (30))){
var state_40571__$1 = state_40571;
var statearr_40642_40703 = state_40571__$1;
(statearr_40642_40703[(2)] = null);

(statearr_40642_40703[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (10))){
var inst_40449 = (state_40571[(14)]);
var inst_40451 = (state_40571[(15)]);
var inst_40459 = cljs.core._nth.call(null,inst_40449,inst_40451);
var inst_40460 = cljs.core.nth.call(null,inst_40459,(0),null);
var inst_40461 = cljs.core.nth.call(null,inst_40459,(1),null);
var state_40571__$1 = (function (){var statearr_40643 = state_40571;
(statearr_40643[(26)] = inst_40460);

return statearr_40643;
})();
if(cljs.core.truth_(inst_40461)){
var statearr_40644_40704 = state_40571__$1;
(statearr_40644_40704[(1)] = (13));

} else {
var statearr_40645_40705 = state_40571__$1;
(statearr_40645_40705[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (18))){
var inst_40496 = (state_40571[(2)]);
var state_40571__$1 = state_40571;
var statearr_40646_40706 = state_40571__$1;
(statearr_40646_40706[(2)] = inst_40496);

(statearr_40646_40706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (42))){
var state_40571__$1 = state_40571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40571__$1,(45),dchan);
} else {
if((state_val_40572 === (37))){
var inst_40439 = (state_40571[(9)]);
var inst_40530 = (state_40571[(25)]);
var inst_40539 = (state_40571[(23)]);
var inst_40539__$1 = cljs.core.first.call(null,inst_40530);
var inst_40540 = cljs.core.async.put_BANG_.call(null,inst_40539__$1,inst_40439,done);
var state_40571__$1 = (function (){var statearr_40647 = state_40571;
(statearr_40647[(23)] = inst_40539__$1);

return statearr_40647;
})();
if(cljs.core.truth_(inst_40540)){
var statearr_40648_40707 = state_40571__$1;
(statearr_40648_40707[(1)] = (39));

} else {
var statearr_40649_40708 = state_40571__$1;
(statearr_40649_40708[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40572 === (8))){
var inst_40451 = (state_40571[(15)]);
var inst_40450 = (state_40571[(17)]);
var inst_40453 = (inst_40451 < inst_40450);
var inst_40454 = inst_40453;
var state_40571__$1 = state_40571;
if(cljs.core.truth_(inst_40454)){
var statearr_40650_40709 = state_40571__$1;
(statearr_40650_40709[(1)] = (10));

} else {
var statearr_40651_40710 = state_40571__$1;
(statearr_40651_40710[(1)] = (11));

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
});})(c__32474__auto___40656,cs,m,dchan,dctr,done))
;
return ((function (switch__32384__auto__,c__32474__auto___40656,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32385__auto__ = null;
var cljs$core$async$mult_$_state_machine__32385__auto____0 = (function (){
var statearr_40652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40652[(0)] = cljs$core$async$mult_$_state_machine__32385__auto__);

(statearr_40652[(1)] = (1));

return statearr_40652;
});
var cljs$core$async$mult_$_state_machine__32385__auto____1 = (function (state_40571){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40653){if((e40653 instanceof Object)){
var ex__32388__auto__ = e40653;
var statearr_40654_40711 = state_40571;
(statearr_40654_40711[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40653;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40712 = state_40571;
state_40571 = G__40712;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32385__auto__ = function(state_40571){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32385__auto____1.call(this,state_40571);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32385__auto____0;
cljs$core$async$mult_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32385__auto____1;
return cljs$core$async$mult_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___40656,cs,m,dchan,dctr,done))
})();
var state__32476__auto__ = (function (){var statearr_40655 = f__32475__auto__.call(null);
(statearr_40655[(6)] = c__32474__auto___40656);

return statearr_40655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___40656,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__40714 = arguments.length;
switch (G__40714) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___40726 = arguments.length;
var i__4500__auto___40727 = (0);
while(true){
if((i__4500__auto___40727 < len__4499__auto___40726)){
args__4502__auto__.push((arguments[i__4500__auto___40727]));

var G__40728 = (i__4500__auto___40727 + (1));
i__4500__auto___40727 = G__40728;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__40720){
var map__40721 = p__40720;
var map__40721__$1 = ((((!((map__40721 == null)))?(((((map__40721.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40721.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40721):map__40721);
var opts = map__40721__$1;
var statearr_40723_40729 = state;
(statearr_40723_40729[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__40721,map__40721__$1,opts){
return (function (val){
var statearr_40724_40730 = state;
(statearr_40724_40730[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__40721,map__40721__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_40725_40731 = state;
(statearr_40725_40731[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq40716){
var G__40717 = cljs.core.first.call(null,seq40716);
var seq40716__$1 = cljs.core.next.call(null,seq40716);
var G__40718 = cljs.core.first.call(null,seq40716__$1);
var seq40716__$2 = cljs.core.next.call(null,seq40716__$1);
var G__40719 = cljs.core.first.call(null,seq40716__$2);
var seq40716__$3 = cljs.core.next.call(null,seq40716__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40717,G__40718,G__40719,seq40716__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async40732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40732 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta40733){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta40733 = meta40733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40734,meta40733__$1){
var self__ = this;
var _40734__$1 = this;
return (new cljs.core.async.t_cljs$core$async40732(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta40733__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_40734){
var self__ = this;
var _40734__$1 = this;
return self__.meta40733;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta40733","meta40733",733590993,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async40732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40732";

cljs.core.async.t_cljs$core$async40732.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40732");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40732.
 */
cljs.core.async.__GT_t_cljs$core$async40732 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async40732(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40733){
return (new cljs.core.async.t_cljs$core$async40732(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta40733));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async40732(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32474__auto___40896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___40896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___40896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_40836){
var state_val_40837 = (state_40836[(1)]);
if((state_val_40837 === (7))){
var inst_40751 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40838_40897 = state_40836__$1;
(statearr_40838_40897[(2)] = inst_40751);

(statearr_40838_40897[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (20))){
var inst_40763 = (state_40836[(7)]);
var state_40836__$1 = state_40836;
var statearr_40839_40898 = state_40836__$1;
(statearr_40839_40898[(2)] = inst_40763);

(statearr_40839_40898[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (27))){
var state_40836__$1 = state_40836;
var statearr_40840_40899 = state_40836__$1;
(statearr_40840_40899[(2)] = null);

(statearr_40840_40899[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (1))){
var inst_40738 = (state_40836[(8)]);
var inst_40738__$1 = calc_state.call(null);
var inst_40740 = (inst_40738__$1 == null);
var inst_40741 = cljs.core.not.call(null,inst_40740);
var state_40836__$1 = (function (){var statearr_40841 = state_40836;
(statearr_40841[(8)] = inst_40738__$1);

return statearr_40841;
})();
if(inst_40741){
var statearr_40842_40900 = state_40836__$1;
(statearr_40842_40900[(1)] = (2));

} else {
var statearr_40843_40901 = state_40836__$1;
(statearr_40843_40901[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (24))){
var inst_40810 = (state_40836[(9)]);
var inst_40787 = (state_40836[(10)]);
var inst_40796 = (state_40836[(11)]);
var inst_40810__$1 = inst_40787.call(null,inst_40796);
var state_40836__$1 = (function (){var statearr_40844 = state_40836;
(statearr_40844[(9)] = inst_40810__$1);

return statearr_40844;
})();
if(cljs.core.truth_(inst_40810__$1)){
var statearr_40845_40902 = state_40836__$1;
(statearr_40845_40902[(1)] = (29));

} else {
var statearr_40846_40903 = state_40836__$1;
(statearr_40846_40903[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (4))){
var inst_40754 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40754)){
var statearr_40847_40904 = state_40836__$1;
(statearr_40847_40904[(1)] = (8));

} else {
var statearr_40848_40905 = state_40836__$1;
(statearr_40848_40905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (15))){
var inst_40781 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40781)){
var statearr_40849_40906 = state_40836__$1;
(statearr_40849_40906[(1)] = (19));

} else {
var statearr_40850_40907 = state_40836__$1;
(statearr_40850_40907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (21))){
var inst_40786 = (state_40836[(12)]);
var inst_40786__$1 = (state_40836[(2)]);
var inst_40787 = cljs.core.get.call(null,inst_40786__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40788 = cljs.core.get.call(null,inst_40786__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40789 = cljs.core.get.call(null,inst_40786__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_40836__$1 = (function (){var statearr_40851 = state_40836;
(statearr_40851[(13)] = inst_40788);

(statearr_40851[(12)] = inst_40786__$1);

(statearr_40851[(10)] = inst_40787);

return statearr_40851;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_40836__$1,(22),inst_40789);
} else {
if((state_val_40837 === (31))){
var inst_40818 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40818)){
var statearr_40852_40908 = state_40836__$1;
(statearr_40852_40908[(1)] = (32));

} else {
var statearr_40853_40909 = state_40836__$1;
(statearr_40853_40909[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (32))){
var inst_40795 = (state_40836[(14)]);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40836__$1,(35),out,inst_40795);
} else {
if((state_val_40837 === (33))){
var inst_40786 = (state_40836[(12)]);
var inst_40763 = inst_40786;
var state_40836__$1 = (function (){var statearr_40854 = state_40836;
(statearr_40854[(7)] = inst_40763);

return statearr_40854;
})();
var statearr_40855_40910 = state_40836__$1;
(statearr_40855_40910[(2)] = null);

(statearr_40855_40910[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (13))){
var inst_40763 = (state_40836[(7)]);
var inst_40770 = inst_40763.cljs$lang$protocol_mask$partition0$;
var inst_40771 = (inst_40770 & (64));
var inst_40772 = inst_40763.cljs$core$ISeq$;
var inst_40773 = (cljs.core.PROTOCOL_SENTINEL === inst_40772);
var inst_40774 = ((inst_40771) || (inst_40773));
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40774)){
var statearr_40856_40911 = state_40836__$1;
(statearr_40856_40911[(1)] = (16));

} else {
var statearr_40857_40912 = state_40836__$1;
(statearr_40857_40912[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (22))){
var inst_40795 = (state_40836[(14)]);
var inst_40796 = (state_40836[(11)]);
var inst_40794 = (state_40836[(2)]);
var inst_40795__$1 = cljs.core.nth.call(null,inst_40794,(0),null);
var inst_40796__$1 = cljs.core.nth.call(null,inst_40794,(1),null);
var inst_40797 = (inst_40795__$1 == null);
var inst_40798 = cljs.core._EQ_.call(null,inst_40796__$1,change);
var inst_40799 = ((inst_40797) || (inst_40798));
var state_40836__$1 = (function (){var statearr_40858 = state_40836;
(statearr_40858[(14)] = inst_40795__$1);

(statearr_40858[(11)] = inst_40796__$1);

return statearr_40858;
})();
if(cljs.core.truth_(inst_40799)){
var statearr_40859_40913 = state_40836__$1;
(statearr_40859_40913[(1)] = (23));

} else {
var statearr_40860_40914 = state_40836__$1;
(statearr_40860_40914[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (36))){
var inst_40786 = (state_40836[(12)]);
var inst_40763 = inst_40786;
var state_40836__$1 = (function (){var statearr_40861 = state_40836;
(statearr_40861[(7)] = inst_40763);

return statearr_40861;
})();
var statearr_40862_40915 = state_40836__$1;
(statearr_40862_40915[(2)] = null);

(statearr_40862_40915[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (29))){
var inst_40810 = (state_40836[(9)]);
var state_40836__$1 = state_40836;
var statearr_40863_40916 = state_40836__$1;
(statearr_40863_40916[(2)] = inst_40810);

(statearr_40863_40916[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (6))){
var state_40836__$1 = state_40836;
var statearr_40864_40917 = state_40836__$1;
(statearr_40864_40917[(2)] = false);

(statearr_40864_40917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (28))){
var inst_40806 = (state_40836[(2)]);
var inst_40807 = calc_state.call(null);
var inst_40763 = inst_40807;
var state_40836__$1 = (function (){var statearr_40865 = state_40836;
(statearr_40865[(7)] = inst_40763);

(statearr_40865[(15)] = inst_40806);

return statearr_40865;
})();
var statearr_40866_40918 = state_40836__$1;
(statearr_40866_40918[(2)] = null);

(statearr_40866_40918[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (25))){
var inst_40832 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40867_40919 = state_40836__$1;
(statearr_40867_40919[(2)] = inst_40832);

(statearr_40867_40919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (34))){
var inst_40830 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40868_40920 = state_40836__$1;
(statearr_40868_40920[(2)] = inst_40830);

(statearr_40868_40920[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (17))){
var state_40836__$1 = state_40836;
var statearr_40869_40921 = state_40836__$1;
(statearr_40869_40921[(2)] = false);

(statearr_40869_40921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (3))){
var state_40836__$1 = state_40836;
var statearr_40870_40922 = state_40836__$1;
(statearr_40870_40922[(2)] = false);

(statearr_40870_40922[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (12))){
var inst_40834 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40836__$1,inst_40834);
} else {
if((state_val_40837 === (2))){
var inst_40738 = (state_40836[(8)]);
var inst_40743 = inst_40738.cljs$lang$protocol_mask$partition0$;
var inst_40744 = (inst_40743 & (64));
var inst_40745 = inst_40738.cljs$core$ISeq$;
var inst_40746 = (cljs.core.PROTOCOL_SENTINEL === inst_40745);
var inst_40747 = ((inst_40744) || (inst_40746));
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40747)){
var statearr_40871_40923 = state_40836__$1;
(statearr_40871_40923[(1)] = (5));

} else {
var statearr_40872_40924 = state_40836__$1;
(statearr_40872_40924[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (23))){
var inst_40795 = (state_40836[(14)]);
var inst_40801 = (inst_40795 == null);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40801)){
var statearr_40873_40925 = state_40836__$1;
(statearr_40873_40925[(1)] = (26));

} else {
var statearr_40874_40926 = state_40836__$1;
(statearr_40874_40926[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (35))){
var inst_40821 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
if(cljs.core.truth_(inst_40821)){
var statearr_40875_40927 = state_40836__$1;
(statearr_40875_40927[(1)] = (36));

} else {
var statearr_40876_40928 = state_40836__$1;
(statearr_40876_40928[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (19))){
var inst_40763 = (state_40836[(7)]);
var inst_40783 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40763);
var state_40836__$1 = state_40836;
var statearr_40877_40929 = state_40836__$1;
(statearr_40877_40929[(2)] = inst_40783);

(statearr_40877_40929[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (11))){
var inst_40763 = (state_40836[(7)]);
var inst_40767 = (inst_40763 == null);
var inst_40768 = cljs.core.not.call(null,inst_40767);
var state_40836__$1 = state_40836;
if(inst_40768){
var statearr_40878_40930 = state_40836__$1;
(statearr_40878_40930[(1)] = (13));

} else {
var statearr_40879_40931 = state_40836__$1;
(statearr_40879_40931[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (9))){
var inst_40738 = (state_40836[(8)]);
var state_40836__$1 = state_40836;
var statearr_40880_40932 = state_40836__$1;
(statearr_40880_40932[(2)] = inst_40738);

(statearr_40880_40932[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (5))){
var state_40836__$1 = state_40836;
var statearr_40881_40933 = state_40836__$1;
(statearr_40881_40933[(2)] = true);

(statearr_40881_40933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (14))){
var state_40836__$1 = state_40836;
var statearr_40882_40934 = state_40836__$1;
(statearr_40882_40934[(2)] = false);

(statearr_40882_40934[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (26))){
var inst_40796 = (state_40836[(11)]);
var inst_40803 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_40796);
var state_40836__$1 = state_40836;
var statearr_40883_40935 = state_40836__$1;
(statearr_40883_40935[(2)] = inst_40803);

(statearr_40883_40935[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (16))){
var state_40836__$1 = state_40836;
var statearr_40884_40936 = state_40836__$1;
(statearr_40884_40936[(2)] = true);

(statearr_40884_40936[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (38))){
var inst_40826 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40885_40937 = state_40836__$1;
(statearr_40885_40937[(2)] = inst_40826);

(statearr_40885_40937[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (30))){
var inst_40788 = (state_40836[(13)]);
var inst_40787 = (state_40836[(10)]);
var inst_40796 = (state_40836[(11)]);
var inst_40813 = cljs.core.empty_QMARK_.call(null,inst_40787);
var inst_40814 = inst_40788.call(null,inst_40796);
var inst_40815 = cljs.core.not.call(null,inst_40814);
var inst_40816 = ((inst_40813) && (inst_40815));
var state_40836__$1 = state_40836;
var statearr_40886_40938 = state_40836__$1;
(statearr_40886_40938[(2)] = inst_40816);

(statearr_40886_40938[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (10))){
var inst_40738 = (state_40836[(8)]);
var inst_40759 = (state_40836[(2)]);
var inst_40760 = cljs.core.get.call(null,inst_40759,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_40761 = cljs.core.get.call(null,inst_40759,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_40762 = cljs.core.get.call(null,inst_40759,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_40763 = inst_40738;
var state_40836__$1 = (function (){var statearr_40887 = state_40836;
(statearr_40887[(7)] = inst_40763);

(statearr_40887[(16)] = inst_40760);

(statearr_40887[(17)] = inst_40762);

(statearr_40887[(18)] = inst_40761);

return statearr_40887;
})();
var statearr_40888_40939 = state_40836__$1;
(statearr_40888_40939[(2)] = null);

(statearr_40888_40939[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (18))){
var inst_40778 = (state_40836[(2)]);
var state_40836__$1 = state_40836;
var statearr_40889_40940 = state_40836__$1;
(statearr_40889_40940[(2)] = inst_40778);

(statearr_40889_40940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (37))){
var state_40836__$1 = state_40836;
var statearr_40890_40941 = state_40836__$1;
(statearr_40890_40941[(2)] = null);

(statearr_40890_40941[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40837 === (8))){
var inst_40738 = (state_40836[(8)]);
var inst_40756 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40738);
var state_40836__$1 = state_40836;
var statearr_40891_40942 = state_40836__$1;
(statearr_40891_40942[(2)] = inst_40756);

(statearr_40891_40942[(1)] = (10));


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
});})(c__32474__auto___40896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32384__auto__,c__32474__auto___40896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32385__auto__ = null;
var cljs$core$async$mix_$_state_machine__32385__auto____0 = (function (){
var statearr_40892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40892[(0)] = cljs$core$async$mix_$_state_machine__32385__auto__);

(statearr_40892[(1)] = (1));

return statearr_40892;
});
var cljs$core$async$mix_$_state_machine__32385__auto____1 = (function (state_40836){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_40836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e40893){if((e40893 instanceof Object)){
var ex__32388__auto__ = e40893;
var statearr_40894_40943 = state_40836;
(statearr_40894_40943[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40893;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40944 = state_40836;
state_40836 = G__40944;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32385__auto__ = function(state_40836){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32385__auto____1.call(this,state_40836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32385__auto____0;
cljs$core$async$mix_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32385__auto____1;
return cljs$core$async$mix_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___40896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32476__auto__ = (function (){var statearr_40895 = f__32475__auto__.call(null);
(statearr_40895[(6)] = c__32474__auto___40896);

return statearr_40895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___40896,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__40946 = arguments.length;
switch (G__40946) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__40950 = arguments.length;
switch (G__40950) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__40948_SHARP_){
if(cljs.core.truth_(p1__40948_SHARP_.call(null,topic))){
return p1__40948_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__40948_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async40951 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40951 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta40952){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta40952 = meta40952;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_40953,meta40952__$1){
var self__ = this;
var _40953__$1 = this;
return (new cljs.core.async.t_cljs$core$async40951(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta40952__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_40953){
var self__ = this;
var _40953__$1 = this;
return self__.meta40952;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta40952","meta40952",-1412554575,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async40951.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40951.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40951";

cljs.core.async.t_cljs$core$async40951.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40951");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40951.
 */
cljs.core.async.__GT_t_cljs$core$async40951 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async40951(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40952){
return (new cljs.core.async.t_cljs$core$async40951(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta40952));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async40951(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32474__auto___41071 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41071,mults,ensure_mult,p){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41071,mults,ensure_mult,p){
return (function (state_41025){
var state_val_41026 = (state_41025[(1)]);
if((state_val_41026 === (7))){
var inst_41021 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41027_41072 = state_41025__$1;
(statearr_41027_41072[(2)] = inst_41021);

(statearr_41027_41072[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (20))){
var state_41025__$1 = state_41025;
var statearr_41028_41073 = state_41025__$1;
(statearr_41028_41073[(2)] = null);

(statearr_41028_41073[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (1))){
var state_41025__$1 = state_41025;
var statearr_41029_41074 = state_41025__$1;
(statearr_41029_41074[(2)] = null);

(statearr_41029_41074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (24))){
var inst_41004 = (state_41025[(7)]);
var inst_41013 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41004);
var state_41025__$1 = state_41025;
var statearr_41030_41075 = state_41025__$1;
(statearr_41030_41075[(2)] = inst_41013);

(statearr_41030_41075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (4))){
var inst_40956 = (state_41025[(8)]);
var inst_40956__$1 = (state_41025[(2)]);
var inst_40957 = (inst_40956__$1 == null);
var state_41025__$1 = (function (){var statearr_41031 = state_41025;
(statearr_41031[(8)] = inst_40956__$1);

return statearr_41031;
})();
if(cljs.core.truth_(inst_40957)){
var statearr_41032_41076 = state_41025__$1;
(statearr_41032_41076[(1)] = (5));

} else {
var statearr_41033_41077 = state_41025__$1;
(statearr_41033_41077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (15))){
var inst_40998 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41034_41078 = state_41025__$1;
(statearr_41034_41078[(2)] = inst_40998);

(statearr_41034_41078[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (21))){
var inst_41018 = (state_41025[(2)]);
var state_41025__$1 = (function (){var statearr_41035 = state_41025;
(statearr_41035[(9)] = inst_41018);

return statearr_41035;
})();
var statearr_41036_41079 = state_41025__$1;
(statearr_41036_41079[(2)] = null);

(statearr_41036_41079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (13))){
var inst_40980 = (state_41025[(10)]);
var inst_40982 = cljs.core.chunked_seq_QMARK_.call(null,inst_40980);
var state_41025__$1 = state_41025;
if(inst_40982){
var statearr_41037_41080 = state_41025__$1;
(statearr_41037_41080[(1)] = (16));

} else {
var statearr_41038_41081 = state_41025__$1;
(statearr_41038_41081[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (22))){
var inst_41010 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
if(cljs.core.truth_(inst_41010)){
var statearr_41039_41082 = state_41025__$1;
(statearr_41039_41082[(1)] = (23));

} else {
var statearr_41040_41083 = state_41025__$1;
(statearr_41040_41083[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (6))){
var inst_41004 = (state_41025[(7)]);
var inst_41006 = (state_41025[(11)]);
var inst_40956 = (state_41025[(8)]);
var inst_41004__$1 = topic_fn.call(null,inst_40956);
var inst_41005 = cljs.core.deref.call(null,mults);
var inst_41006__$1 = cljs.core.get.call(null,inst_41005,inst_41004__$1);
var state_41025__$1 = (function (){var statearr_41041 = state_41025;
(statearr_41041[(7)] = inst_41004__$1);

(statearr_41041[(11)] = inst_41006__$1);

return statearr_41041;
})();
if(cljs.core.truth_(inst_41006__$1)){
var statearr_41042_41084 = state_41025__$1;
(statearr_41042_41084[(1)] = (19));

} else {
var statearr_41043_41085 = state_41025__$1;
(statearr_41043_41085[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (25))){
var inst_41015 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41044_41086 = state_41025__$1;
(statearr_41044_41086[(2)] = inst_41015);

(statearr_41044_41086[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (17))){
var inst_40980 = (state_41025[(10)]);
var inst_40989 = cljs.core.first.call(null,inst_40980);
var inst_40990 = cljs.core.async.muxch_STAR_.call(null,inst_40989);
var inst_40991 = cljs.core.async.close_BANG_.call(null,inst_40990);
var inst_40992 = cljs.core.next.call(null,inst_40980);
var inst_40966 = inst_40992;
var inst_40967 = null;
var inst_40968 = (0);
var inst_40969 = (0);
var state_41025__$1 = (function (){var statearr_41045 = state_41025;
(statearr_41045[(12)] = inst_40991);

(statearr_41045[(13)] = inst_40969);

(statearr_41045[(14)] = inst_40967);

(statearr_41045[(15)] = inst_40968);

(statearr_41045[(16)] = inst_40966);

return statearr_41045;
})();
var statearr_41046_41087 = state_41025__$1;
(statearr_41046_41087[(2)] = null);

(statearr_41046_41087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (3))){
var inst_41023 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41025__$1,inst_41023);
} else {
if((state_val_41026 === (12))){
var inst_41000 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41047_41088 = state_41025__$1;
(statearr_41047_41088[(2)] = inst_41000);

(statearr_41047_41088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (2))){
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41025__$1,(4),ch);
} else {
if((state_val_41026 === (23))){
var state_41025__$1 = state_41025;
var statearr_41048_41089 = state_41025__$1;
(statearr_41048_41089[(2)] = null);

(statearr_41048_41089[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (19))){
var inst_41006 = (state_41025[(11)]);
var inst_40956 = (state_41025[(8)]);
var inst_41008 = cljs.core.async.muxch_STAR_.call(null,inst_41006);
var state_41025__$1 = state_41025;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41025__$1,(22),inst_41008,inst_40956);
} else {
if((state_val_41026 === (11))){
var inst_40980 = (state_41025[(10)]);
var inst_40966 = (state_41025[(16)]);
var inst_40980__$1 = cljs.core.seq.call(null,inst_40966);
var state_41025__$1 = (function (){var statearr_41049 = state_41025;
(statearr_41049[(10)] = inst_40980__$1);

return statearr_41049;
})();
if(inst_40980__$1){
var statearr_41050_41090 = state_41025__$1;
(statearr_41050_41090[(1)] = (13));

} else {
var statearr_41051_41091 = state_41025__$1;
(statearr_41051_41091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (9))){
var inst_41002 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41052_41092 = state_41025__$1;
(statearr_41052_41092[(2)] = inst_41002);

(statearr_41052_41092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (5))){
var inst_40963 = cljs.core.deref.call(null,mults);
var inst_40964 = cljs.core.vals.call(null,inst_40963);
var inst_40965 = cljs.core.seq.call(null,inst_40964);
var inst_40966 = inst_40965;
var inst_40967 = null;
var inst_40968 = (0);
var inst_40969 = (0);
var state_41025__$1 = (function (){var statearr_41053 = state_41025;
(statearr_41053[(13)] = inst_40969);

(statearr_41053[(14)] = inst_40967);

(statearr_41053[(15)] = inst_40968);

(statearr_41053[(16)] = inst_40966);

return statearr_41053;
})();
var statearr_41054_41093 = state_41025__$1;
(statearr_41054_41093[(2)] = null);

(statearr_41054_41093[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (14))){
var state_41025__$1 = state_41025;
var statearr_41058_41094 = state_41025__$1;
(statearr_41058_41094[(2)] = null);

(statearr_41058_41094[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (16))){
var inst_40980 = (state_41025[(10)]);
var inst_40984 = cljs.core.chunk_first.call(null,inst_40980);
var inst_40985 = cljs.core.chunk_rest.call(null,inst_40980);
var inst_40986 = cljs.core.count.call(null,inst_40984);
var inst_40966 = inst_40985;
var inst_40967 = inst_40984;
var inst_40968 = inst_40986;
var inst_40969 = (0);
var state_41025__$1 = (function (){var statearr_41059 = state_41025;
(statearr_41059[(13)] = inst_40969);

(statearr_41059[(14)] = inst_40967);

(statearr_41059[(15)] = inst_40968);

(statearr_41059[(16)] = inst_40966);

return statearr_41059;
})();
var statearr_41060_41095 = state_41025__$1;
(statearr_41060_41095[(2)] = null);

(statearr_41060_41095[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (10))){
var inst_40969 = (state_41025[(13)]);
var inst_40967 = (state_41025[(14)]);
var inst_40968 = (state_41025[(15)]);
var inst_40966 = (state_41025[(16)]);
var inst_40974 = cljs.core._nth.call(null,inst_40967,inst_40969);
var inst_40975 = cljs.core.async.muxch_STAR_.call(null,inst_40974);
var inst_40976 = cljs.core.async.close_BANG_.call(null,inst_40975);
var inst_40977 = (inst_40969 + (1));
var tmp41055 = inst_40967;
var tmp41056 = inst_40968;
var tmp41057 = inst_40966;
var inst_40966__$1 = tmp41057;
var inst_40967__$1 = tmp41055;
var inst_40968__$1 = tmp41056;
var inst_40969__$1 = inst_40977;
var state_41025__$1 = (function (){var statearr_41061 = state_41025;
(statearr_41061[(17)] = inst_40976);

(statearr_41061[(13)] = inst_40969__$1);

(statearr_41061[(14)] = inst_40967__$1);

(statearr_41061[(15)] = inst_40968__$1);

(statearr_41061[(16)] = inst_40966__$1);

return statearr_41061;
})();
var statearr_41062_41096 = state_41025__$1;
(statearr_41062_41096[(2)] = null);

(statearr_41062_41096[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (18))){
var inst_40995 = (state_41025[(2)]);
var state_41025__$1 = state_41025;
var statearr_41063_41097 = state_41025__$1;
(statearr_41063_41097[(2)] = inst_40995);

(statearr_41063_41097[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41026 === (8))){
var inst_40969 = (state_41025[(13)]);
var inst_40968 = (state_41025[(15)]);
var inst_40971 = (inst_40969 < inst_40968);
var inst_40972 = inst_40971;
var state_41025__$1 = state_41025;
if(cljs.core.truth_(inst_40972)){
var statearr_41064_41098 = state_41025__$1;
(statearr_41064_41098[(1)] = (10));

} else {
var statearr_41065_41099 = state_41025__$1;
(statearr_41065_41099[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__32474__auto___41071,mults,ensure_mult,p))
;
return ((function (switch__32384__auto__,c__32474__auto___41071,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41066[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41066[(1)] = (1));

return statearr_41066;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41025){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41067){if((e41067 instanceof Object)){
var ex__32388__auto__ = e41067;
var statearr_41068_41100 = state_41025;
(statearr_41068_41100[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41101 = state_41025;
state_41025 = G__41101;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41025);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41071,mults,ensure_mult,p))
})();
var state__32476__auto__ = (function (){var statearr_41069 = f__32475__auto__.call(null);
(statearr_41069[(6)] = c__32474__auto___41071);

return statearr_41069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41071,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__41103 = arguments.length;
switch (G__41103) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__41106 = arguments.length;
switch (G__41106) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__41109 = arguments.length;
switch (G__41109) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32474__auto___41176 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41148){
var state_val_41149 = (state_41148[(1)]);
if((state_val_41149 === (7))){
var state_41148__$1 = state_41148;
var statearr_41150_41177 = state_41148__$1;
(statearr_41150_41177[(2)] = null);

(statearr_41150_41177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (1))){
var state_41148__$1 = state_41148;
var statearr_41151_41178 = state_41148__$1;
(statearr_41151_41178[(2)] = null);

(statearr_41151_41178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (4))){
var inst_41112 = (state_41148[(7)]);
var inst_41114 = (inst_41112 < cnt);
var state_41148__$1 = state_41148;
if(cljs.core.truth_(inst_41114)){
var statearr_41152_41179 = state_41148__$1;
(statearr_41152_41179[(1)] = (6));

} else {
var statearr_41153_41180 = state_41148__$1;
(statearr_41153_41180[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (15))){
var inst_41144 = (state_41148[(2)]);
var state_41148__$1 = state_41148;
var statearr_41154_41181 = state_41148__$1;
(statearr_41154_41181[(2)] = inst_41144);

(statearr_41154_41181[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (13))){
var inst_41137 = cljs.core.async.close_BANG_.call(null,out);
var state_41148__$1 = state_41148;
var statearr_41155_41182 = state_41148__$1;
(statearr_41155_41182[(2)] = inst_41137);

(statearr_41155_41182[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (6))){
var state_41148__$1 = state_41148;
var statearr_41156_41183 = state_41148__$1;
(statearr_41156_41183[(2)] = null);

(statearr_41156_41183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (3))){
var inst_41146 = (state_41148[(2)]);
var state_41148__$1 = state_41148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41148__$1,inst_41146);
} else {
if((state_val_41149 === (12))){
var inst_41134 = (state_41148[(8)]);
var inst_41134__$1 = (state_41148[(2)]);
var inst_41135 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41134__$1);
var state_41148__$1 = (function (){var statearr_41157 = state_41148;
(statearr_41157[(8)] = inst_41134__$1);

return statearr_41157;
})();
if(cljs.core.truth_(inst_41135)){
var statearr_41158_41184 = state_41148__$1;
(statearr_41158_41184[(1)] = (13));

} else {
var statearr_41159_41185 = state_41148__$1;
(statearr_41159_41185[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (2))){
var inst_41111 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41112 = (0);
var state_41148__$1 = (function (){var statearr_41160 = state_41148;
(statearr_41160[(9)] = inst_41111);

(statearr_41160[(7)] = inst_41112);

return statearr_41160;
})();
var statearr_41161_41186 = state_41148__$1;
(statearr_41161_41186[(2)] = null);

(statearr_41161_41186[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (11))){
var inst_41112 = (state_41148[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41148,(10),Object,null,(9));
var inst_41121 = chs__$1.call(null,inst_41112);
var inst_41122 = done.call(null,inst_41112);
var inst_41123 = cljs.core.async.take_BANG_.call(null,inst_41121,inst_41122);
var state_41148__$1 = state_41148;
var statearr_41162_41187 = state_41148__$1;
(statearr_41162_41187[(2)] = inst_41123);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (9))){
var inst_41112 = (state_41148[(7)]);
var inst_41125 = (state_41148[(2)]);
var inst_41126 = (inst_41112 + (1));
var inst_41112__$1 = inst_41126;
var state_41148__$1 = (function (){var statearr_41163 = state_41148;
(statearr_41163[(7)] = inst_41112__$1);

(statearr_41163[(10)] = inst_41125);

return statearr_41163;
})();
var statearr_41164_41188 = state_41148__$1;
(statearr_41164_41188[(2)] = null);

(statearr_41164_41188[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (5))){
var inst_41132 = (state_41148[(2)]);
var state_41148__$1 = (function (){var statearr_41165 = state_41148;
(statearr_41165[(11)] = inst_41132);

return statearr_41165;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41148__$1,(12),dchan);
} else {
if((state_val_41149 === (14))){
var inst_41134 = (state_41148[(8)]);
var inst_41139 = cljs.core.apply.call(null,f,inst_41134);
var state_41148__$1 = state_41148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41148__$1,(16),out,inst_41139);
} else {
if((state_val_41149 === (16))){
var inst_41141 = (state_41148[(2)]);
var state_41148__$1 = (function (){var statearr_41166 = state_41148;
(statearr_41166[(12)] = inst_41141);

return statearr_41166;
})();
var statearr_41167_41189 = state_41148__$1;
(statearr_41167_41189[(2)] = null);

(statearr_41167_41189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (10))){
var inst_41116 = (state_41148[(2)]);
var inst_41117 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41148__$1 = (function (){var statearr_41168 = state_41148;
(statearr_41168[(13)] = inst_41116);

return statearr_41168;
})();
var statearr_41169_41190 = state_41148__$1;
(statearr_41169_41190[(2)] = inst_41117);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41148__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41149 === (8))){
var inst_41130 = (state_41148[(2)]);
var state_41148__$1 = state_41148;
var statearr_41170_41191 = state_41148__$1;
(statearr_41170_41191[(2)] = inst_41130);

(statearr_41170_41191[(1)] = (5));


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
});})(c__32474__auto___41176,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32384__auto__,c__32474__auto___41176,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41171 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41171[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41171[(1)] = (1));

return statearr_41171;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41148){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41172){if((e41172 instanceof Object)){
var ex__32388__auto__ = e41172;
var statearr_41173_41192 = state_41148;
(statearr_41173_41192[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41193 = state_41148;
state_41148 = G__41193;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41148);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41176,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32476__auto__ = (function (){var statearr_41174 = f__32475__auto__.call(null);
(statearr_41174[(6)] = c__32474__auto___41176);

return statearr_41174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41176,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__41196 = arguments.length;
switch (G__41196) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32474__auto___41250 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41250,out){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41250,out){
return (function (state_41228){
var state_val_41229 = (state_41228[(1)]);
if((state_val_41229 === (7))){
var inst_41208 = (state_41228[(7)]);
var inst_41207 = (state_41228[(8)]);
var inst_41207__$1 = (state_41228[(2)]);
var inst_41208__$1 = cljs.core.nth.call(null,inst_41207__$1,(0),null);
var inst_41209 = cljs.core.nth.call(null,inst_41207__$1,(1),null);
var inst_41210 = (inst_41208__$1 == null);
var state_41228__$1 = (function (){var statearr_41230 = state_41228;
(statearr_41230[(7)] = inst_41208__$1);

(statearr_41230[(8)] = inst_41207__$1);

(statearr_41230[(9)] = inst_41209);

return statearr_41230;
})();
if(cljs.core.truth_(inst_41210)){
var statearr_41231_41251 = state_41228__$1;
(statearr_41231_41251[(1)] = (8));

} else {
var statearr_41232_41252 = state_41228__$1;
(statearr_41232_41252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41229 === (1))){
var inst_41197 = cljs.core.vec.call(null,chs);
var inst_41198 = inst_41197;
var state_41228__$1 = (function (){var statearr_41233 = state_41228;
(statearr_41233[(10)] = inst_41198);

return statearr_41233;
})();
var statearr_41234_41253 = state_41228__$1;
(statearr_41234_41253[(2)] = null);

(statearr_41234_41253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41229 === (4))){
var inst_41198 = (state_41228[(10)]);
var state_41228__$1 = state_41228;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41228__$1,(7),inst_41198);
} else {
if((state_val_41229 === (6))){
var inst_41224 = (state_41228[(2)]);
var state_41228__$1 = state_41228;
var statearr_41235_41254 = state_41228__$1;
(statearr_41235_41254[(2)] = inst_41224);

(statearr_41235_41254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41229 === (3))){
var inst_41226 = (state_41228[(2)]);
var state_41228__$1 = state_41228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41228__$1,inst_41226);
} else {
if((state_val_41229 === (2))){
var inst_41198 = (state_41228[(10)]);
var inst_41200 = cljs.core.count.call(null,inst_41198);
var inst_41201 = (inst_41200 > (0));
var state_41228__$1 = state_41228;
if(cljs.core.truth_(inst_41201)){
var statearr_41237_41255 = state_41228__$1;
(statearr_41237_41255[(1)] = (4));

} else {
var statearr_41238_41256 = state_41228__$1;
(statearr_41238_41256[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41229 === (11))){
var inst_41198 = (state_41228[(10)]);
var inst_41217 = (state_41228[(2)]);
var tmp41236 = inst_41198;
var inst_41198__$1 = tmp41236;
var state_41228__$1 = (function (){var statearr_41239 = state_41228;
(statearr_41239[(10)] = inst_41198__$1);

(statearr_41239[(11)] = inst_41217);

return statearr_41239;
})();
var statearr_41240_41257 = state_41228__$1;
(statearr_41240_41257[(2)] = null);

(statearr_41240_41257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41229 === (9))){
var inst_41208 = (state_41228[(7)]);
var state_41228__$1 = state_41228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41228__$1,(11),out,inst_41208);
} else {
if((state_val_41229 === (5))){
var inst_41222 = cljs.core.async.close_BANG_.call(null,out);
var state_41228__$1 = state_41228;
var statearr_41241_41258 = state_41228__$1;
(statearr_41241_41258[(2)] = inst_41222);

(statearr_41241_41258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41229 === (10))){
var inst_41220 = (state_41228[(2)]);
var state_41228__$1 = state_41228;
var statearr_41242_41259 = state_41228__$1;
(statearr_41242_41259[(2)] = inst_41220);

(statearr_41242_41259[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41229 === (8))){
var inst_41208 = (state_41228[(7)]);
var inst_41207 = (state_41228[(8)]);
var inst_41209 = (state_41228[(9)]);
var inst_41198 = (state_41228[(10)]);
var inst_41212 = (function (){var cs = inst_41198;
var vec__41203 = inst_41207;
var v = inst_41208;
var c = inst_41209;
return ((function (cs,vec__41203,v,c,inst_41208,inst_41207,inst_41209,inst_41198,state_val_41229,c__32474__auto___41250,out){
return (function (p1__41194_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41194_SHARP_);
});
;})(cs,vec__41203,v,c,inst_41208,inst_41207,inst_41209,inst_41198,state_val_41229,c__32474__auto___41250,out))
})();
var inst_41213 = cljs.core.filterv.call(null,inst_41212,inst_41198);
var inst_41198__$1 = inst_41213;
var state_41228__$1 = (function (){var statearr_41243 = state_41228;
(statearr_41243[(10)] = inst_41198__$1);

return statearr_41243;
})();
var statearr_41244_41260 = state_41228__$1;
(statearr_41244_41260[(2)] = null);

(statearr_41244_41260[(1)] = (2));


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
});})(c__32474__auto___41250,out))
;
return ((function (switch__32384__auto__,c__32474__auto___41250,out){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41245 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41245[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41245[(1)] = (1));

return statearr_41245;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41228){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41246){if((e41246 instanceof Object)){
var ex__32388__auto__ = e41246;
var statearr_41247_41261 = state_41228;
(statearr_41247_41261[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41262 = state_41228;
state_41228 = G__41262;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41228);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41250,out))
})();
var state__32476__auto__ = (function (){var statearr_41248 = f__32475__auto__.call(null);
(statearr_41248[(6)] = c__32474__auto___41250);

return statearr_41248;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41250,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__41264 = arguments.length;
switch (G__41264) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32474__auto___41309 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41309,out){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41309,out){
return (function (state_41288){
var state_val_41289 = (state_41288[(1)]);
if((state_val_41289 === (7))){
var inst_41270 = (state_41288[(7)]);
var inst_41270__$1 = (state_41288[(2)]);
var inst_41271 = (inst_41270__$1 == null);
var inst_41272 = cljs.core.not.call(null,inst_41271);
var state_41288__$1 = (function (){var statearr_41290 = state_41288;
(statearr_41290[(7)] = inst_41270__$1);

return statearr_41290;
})();
if(inst_41272){
var statearr_41291_41310 = state_41288__$1;
(statearr_41291_41310[(1)] = (8));

} else {
var statearr_41292_41311 = state_41288__$1;
(statearr_41292_41311[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (1))){
var inst_41265 = (0);
var state_41288__$1 = (function (){var statearr_41293 = state_41288;
(statearr_41293[(8)] = inst_41265);

return statearr_41293;
})();
var statearr_41294_41312 = state_41288__$1;
(statearr_41294_41312[(2)] = null);

(statearr_41294_41312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (4))){
var state_41288__$1 = state_41288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41288__$1,(7),ch);
} else {
if((state_val_41289 === (6))){
var inst_41283 = (state_41288[(2)]);
var state_41288__$1 = state_41288;
var statearr_41295_41313 = state_41288__$1;
(statearr_41295_41313[(2)] = inst_41283);

(statearr_41295_41313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (3))){
var inst_41285 = (state_41288[(2)]);
var inst_41286 = cljs.core.async.close_BANG_.call(null,out);
var state_41288__$1 = (function (){var statearr_41296 = state_41288;
(statearr_41296[(9)] = inst_41285);

return statearr_41296;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41288__$1,inst_41286);
} else {
if((state_val_41289 === (2))){
var inst_41265 = (state_41288[(8)]);
var inst_41267 = (inst_41265 < n);
var state_41288__$1 = state_41288;
if(cljs.core.truth_(inst_41267)){
var statearr_41297_41314 = state_41288__$1;
(statearr_41297_41314[(1)] = (4));

} else {
var statearr_41298_41315 = state_41288__$1;
(statearr_41298_41315[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (11))){
var inst_41265 = (state_41288[(8)]);
var inst_41275 = (state_41288[(2)]);
var inst_41276 = (inst_41265 + (1));
var inst_41265__$1 = inst_41276;
var state_41288__$1 = (function (){var statearr_41299 = state_41288;
(statearr_41299[(8)] = inst_41265__$1);

(statearr_41299[(10)] = inst_41275);

return statearr_41299;
})();
var statearr_41300_41316 = state_41288__$1;
(statearr_41300_41316[(2)] = null);

(statearr_41300_41316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (9))){
var state_41288__$1 = state_41288;
var statearr_41301_41317 = state_41288__$1;
(statearr_41301_41317[(2)] = null);

(statearr_41301_41317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (5))){
var state_41288__$1 = state_41288;
var statearr_41302_41318 = state_41288__$1;
(statearr_41302_41318[(2)] = null);

(statearr_41302_41318[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (10))){
var inst_41280 = (state_41288[(2)]);
var state_41288__$1 = state_41288;
var statearr_41303_41319 = state_41288__$1;
(statearr_41303_41319[(2)] = inst_41280);

(statearr_41303_41319[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41289 === (8))){
var inst_41270 = (state_41288[(7)]);
var state_41288__$1 = state_41288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41288__$1,(11),out,inst_41270);
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
});})(c__32474__auto___41309,out))
;
return ((function (switch__32384__auto__,c__32474__auto___41309,out){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41304 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41304[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41304[(1)] = (1));

return statearr_41304;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41288){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41305){if((e41305 instanceof Object)){
var ex__32388__auto__ = e41305;
var statearr_41306_41320 = state_41288;
(statearr_41306_41320[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41321 = state_41288;
state_41288 = G__41321;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41288);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41309,out))
})();
var state__32476__auto__ = (function (){var statearr_41307 = f__32475__auto__.call(null);
(statearr_41307[(6)] = c__32474__auto___41309);

return statearr_41307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41309,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41323 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41323 = (function (f,ch,meta41324){
this.f = f;
this.ch = ch;
this.meta41324 = meta41324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41325,meta41324__$1){
var self__ = this;
var _41325__$1 = this;
return (new cljs.core.async.t_cljs$core$async41323(self__.f,self__.ch,meta41324__$1));
});

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41325){
var self__ = this;
var _41325__$1 = this;
return self__.meta41324;
});

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41326 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41326 = (function (f,ch,meta41324,_,fn1,meta41327){
this.f = f;
this.ch = ch;
this.meta41324 = meta41324;
this._ = _;
this.fn1 = fn1;
this.meta41327 = meta41327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41328,meta41327__$1){
var self__ = this;
var _41328__$1 = this;
return (new cljs.core.async.t_cljs$core$async41326(self__.f,self__.ch,self__.meta41324,self__._,self__.fn1,meta41327__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41328){
var self__ = this;
var _41328__$1 = this;
return self__.meta41327;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41326.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41326.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41326.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41326.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41322_SHARP_){
return f1.call(null,(((p1__41322_SHARP_ == null))?null:self__.f.call(null,p1__41322_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41326.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41324","meta41324",-1869956709,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41323","cljs.core.async/t_cljs$core$async41323",-1873346564,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41327","meta41327",-1045473678,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41326.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41326.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41326";

cljs.core.async.t_cljs$core$async41326.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41326");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41326.
 */
cljs.core.async.__GT_t_cljs$core$async41326 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41326(f__$1,ch__$1,meta41324__$1,___$2,fn1__$1,meta41327){
return (new cljs.core.async.t_cljs$core$async41326(f__$1,ch__$1,meta41324__$1,___$2,fn1__$1,meta41327));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41326(self__.f,self__.ch,self__.meta41324,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41323.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41324","meta41324",-1869956709,null)], null);
});

cljs.core.async.t_cljs$core$async41323.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41323";

cljs.core.async.t_cljs$core$async41323.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41323");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41323.
 */
cljs.core.async.__GT_t_cljs$core$async41323 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41323(f__$1,ch__$1,meta41324){
return (new cljs.core.async.t_cljs$core$async41323(f__$1,ch__$1,meta41324));
});

}

return (new cljs.core.async.t_cljs$core$async41323(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41329 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41329 = (function (f,ch,meta41330){
this.f = f;
this.ch = ch;
this.meta41330 = meta41330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41331,meta41330__$1){
var self__ = this;
var _41331__$1 = this;
return (new cljs.core.async.t_cljs$core$async41329(self__.f,self__.ch,meta41330__$1));
});

cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41331){
var self__ = this;
var _41331__$1 = this;
return self__.meta41330;
});

cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41329.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41330","meta41330",-1051185993,null)], null);
});

cljs.core.async.t_cljs$core$async41329.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41329";

cljs.core.async.t_cljs$core$async41329.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41329");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41329.
 */
cljs.core.async.__GT_t_cljs$core$async41329 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41329(f__$1,ch__$1,meta41330){
return (new cljs.core.async.t_cljs$core$async41329(f__$1,ch__$1,meta41330));
});

}

return (new cljs.core.async.t_cljs$core$async41329(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41332 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41332 = (function (p,ch,meta41333){
this.p = p;
this.ch = ch;
this.meta41333 = meta41333;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41334,meta41333__$1){
var self__ = this;
var _41334__$1 = this;
return (new cljs.core.async.t_cljs$core$async41332(self__.p,self__.ch,meta41333__$1));
});

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41334){
var self__ = this;
var _41334__$1 = this;
return self__.meta41333;
});

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async41332.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41332.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41333","meta41333",-1224524458,null)], null);
});

cljs.core.async.t_cljs$core$async41332.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41332.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41332";

cljs.core.async.t_cljs$core$async41332.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async41332");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41332.
 */
cljs.core.async.__GT_t_cljs$core$async41332 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41332(p__$1,ch__$1,meta41333){
return (new cljs.core.async.t_cljs$core$async41332(p__$1,ch__$1,meta41333));
});

}

return (new cljs.core.async.t_cljs$core$async41332(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__41336 = arguments.length;
switch (G__41336) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32474__auto___41376 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41376,out){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41376,out){
return (function (state_41357){
var state_val_41358 = (state_41357[(1)]);
if((state_val_41358 === (7))){
var inst_41353 = (state_41357[(2)]);
var state_41357__$1 = state_41357;
var statearr_41359_41377 = state_41357__$1;
(statearr_41359_41377[(2)] = inst_41353);

(statearr_41359_41377[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (1))){
var state_41357__$1 = state_41357;
var statearr_41360_41378 = state_41357__$1;
(statearr_41360_41378[(2)] = null);

(statearr_41360_41378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (4))){
var inst_41339 = (state_41357[(7)]);
var inst_41339__$1 = (state_41357[(2)]);
var inst_41340 = (inst_41339__$1 == null);
var state_41357__$1 = (function (){var statearr_41361 = state_41357;
(statearr_41361[(7)] = inst_41339__$1);

return statearr_41361;
})();
if(cljs.core.truth_(inst_41340)){
var statearr_41362_41379 = state_41357__$1;
(statearr_41362_41379[(1)] = (5));

} else {
var statearr_41363_41380 = state_41357__$1;
(statearr_41363_41380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (6))){
var inst_41339 = (state_41357[(7)]);
var inst_41344 = p.call(null,inst_41339);
var state_41357__$1 = state_41357;
if(cljs.core.truth_(inst_41344)){
var statearr_41364_41381 = state_41357__$1;
(statearr_41364_41381[(1)] = (8));

} else {
var statearr_41365_41382 = state_41357__$1;
(statearr_41365_41382[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (3))){
var inst_41355 = (state_41357[(2)]);
var state_41357__$1 = state_41357;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41357__$1,inst_41355);
} else {
if((state_val_41358 === (2))){
var state_41357__$1 = state_41357;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41357__$1,(4),ch);
} else {
if((state_val_41358 === (11))){
var inst_41347 = (state_41357[(2)]);
var state_41357__$1 = state_41357;
var statearr_41366_41383 = state_41357__$1;
(statearr_41366_41383[(2)] = inst_41347);

(statearr_41366_41383[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (9))){
var state_41357__$1 = state_41357;
var statearr_41367_41384 = state_41357__$1;
(statearr_41367_41384[(2)] = null);

(statearr_41367_41384[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (5))){
var inst_41342 = cljs.core.async.close_BANG_.call(null,out);
var state_41357__$1 = state_41357;
var statearr_41368_41385 = state_41357__$1;
(statearr_41368_41385[(2)] = inst_41342);

(statearr_41368_41385[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (10))){
var inst_41350 = (state_41357[(2)]);
var state_41357__$1 = (function (){var statearr_41369 = state_41357;
(statearr_41369[(8)] = inst_41350);

return statearr_41369;
})();
var statearr_41370_41386 = state_41357__$1;
(statearr_41370_41386[(2)] = null);

(statearr_41370_41386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41358 === (8))){
var inst_41339 = (state_41357[(7)]);
var state_41357__$1 = state_41357;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41357__$1,(11),out,inst_41339);
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
});})(c__32474__auto___41376,out))
;
return ((function (switch__32384__auto__,c__32474__auto___41376,out){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41371 = [null,null,null,null,null,null,null,null,null];
(statearr_41371[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41371[(1)] = (1));

return statearr_41371;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41357){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41357);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41372){if((e41372 instanceof Object)){
var ex__32388__auto__ = e41372;
var statearr_41373_41387 = state_41357;
(statearr_41373_41387[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41388 = state_41357;
state_41357 = G__41388;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41357);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41376,out))
})();
var state__32476__auto__ = (function (){var statearr_41374 = f__32475__auto__.call(null);
(statearr_41374[(6)] = c__32474__auto___41376);

return statearr_41374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41376,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__41390 = arguments.length;
switch (G__41390) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__){
return (function (state_41453){
var state_val_41454 = (state_41453[(1)]);
if((state_val_41454 === (7))){
var inst_41449 = (state_41453[(2)]);
var state_41453__$1 = state_41453;
var statearr_41455_41493 = state_41453__$1;
(statearr_41455_41493[(2)] = inst_41449);

(statearr_41455_41493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (20))){
var inst_41419 = (state_41453[(7)]);
var inst_41430 = (state_41453[(2)]);
var inst_41431 = cljs.core.next.call(null,inst_41419);
var inst_41405 = inst_41431;
var inst_41406 = null;
var inst_41407 = (0);
var inst_41408 = (0);
var state_41453__$1 = (function (){var statearr_41456 = state_41453;
(statearr_41456[(8)] = inst_41407);

(statearr_41456[(9)] = inst_41405);

(statearr_41456[(10)] = inst_41408);

(statearr_41456[(11)] = inst_41430);

(statearr_41456[(12)] = inst_41406);

return statearr_41456;
})();
var statearr_41457_41494 = state_41453__$1;
(statearr_41457_41494[(2)] = null);

(statearr_41457_41494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (1))){
var state_41453__$1 = state_41453;
var statearr_41458_41495 = state_41453__$1;
(statearr_41458_41495[(2)] = null);

(statearr_41458_41495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (4))){
var inst_41394 = (state_41453[(13)]);
var inst_41394__$1 = (state_41453[(2)]);
var inst_41395 = (inst_41394__$1 == null);
var state_41453__$1 = (function (){var statearr_41459 = state_41453;
(statearr_41459[(13)] = inst_41394__$1);

return statearr_41459;
})();
if(cljs.core.truth_(inst_41395)){
var statearr_41460_41496 = state_41453__$1;
(statearr_41460_41496[(1)] = (5));

} else {
var statearr_41461_41497 = state_41453__$1;
(statearr_41461_41497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (15))){
var state_41453__$1 = state_41453;
var statearr_41465_41498 = state_41453__$1;
(statearr_41465_41498[(2)] = null);

(statearr_41465_41498[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (21))){
var state_41453__$1 = state_41453;
var statearr_41466_41499 = state_41453__$1;
(statearr_41466_41499[(2)] = null);

(statearr_41466_41499[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (13))){
var inst_41407 = (state_41453[(8)]);
var inst_41405 = (state_41453[(9)]);
var inst_41408 = (state_41453[(10)]);
var inst_41406 = (state_41453[(12)]);
var inst_41415 = (state_41453[(2)]);
var inst_41416 = (inst_41408 + (1));
var tmp41462 = inst_41407;
var tmp41463 = inst_41405;
var tmp41464 = inst_41406;
var inst_41405__$1 = tmp41463;
var inst_41406__$1 = tmp41464;
var inst_41407__$1 = tmp41462;
var inst_41408__$1 = inst_41416;
var state_41453__$1 = (function (){var statearr_41467 = state_41453;
(statearr_41467[(8)] = inst_41407__$1);

(statearr_41467[(9)] = inst_41405__$1);

(statearr_41467[(10)] = inst_41408__$1);

(statearr_41467[(14)] = inst_41415);

(statearr_41467[(12)] = inst_41406__$1);

return statearr_41467;
})();
var statearr_41468_41500 = state_41453__$1;
(statearr_41468_41500[(2)] = null);

(statearr_41468_41500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (22))){
var state_41453__$1 = state_41453;
var statearr_41469_41501 = state_41453__$1;
(statearr_41469_41501[(2)] = null);

(statearr_41469_41501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (6))){
var inst_41394 = (state_41453[(13)]);
var inst_41403 = f.call(null,inst_41394);
var inst_41404 = cljs.core.seq.call(null,inst_41403);
var inst_41405 = inst_41404;
var inst_41406 = null;
var inst_41407 = (0);
var inst_41408 = (0);
var state_41453__$1 = (function (){var statearr_41470 = state_41453;
(statearr_41470[(8)] = inst_41407);

(statearr_41470[(9)] = inst_41405);

(statearr_41470[(10)] = inst_41408);

(statearr_41470[(12)] = inst_41406);

return statearr_41470;
})();
var statearr_41471_41502 = state_41453__$1;
(statearr_41471_41502[(2)] = null);

(statearr_41471_41502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (17))){
var inst_41419 = (state_41453[(7)]);
var inst_41423 = cljs.core.chunk_first.call(null,inst_41419);
var inst_41424 = cljs.core.chunk_rest.call(null,inst_41419);
var inst_41425 = cljs.core.count.call(null,inst_41423);
var inst_41405 = inst_41424;
var inst_41406 = inst_41423;
var inst_41407 = inst_41425;
var inst_41408 = (0);
var state_41453__$1 = (function (){var statearr_41472 = state_41453;
(statearr_41472[(8)] = inst_41407);

(statearr_41472[(9)] = inst_41405);

(statearr_41472[(10)] = inst_41408);

(statearr_41472[(12)] = inst_41406);

return statearr_41472;
})();
var statearr_41473_41503 = state_41453__$1;
(statearr_41473_41503[(2)] = null);

(statearr_41473_41503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (3))){
var inst_41451 = (state_41453[(2)]);
var state_41453__$1 = state_41453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41453__$1,inst_41451);
} else {
if((state_val_41454 === (12))){
var inst_41439 = (state_41453[(2)]);
var state_41453__$1 = state_41453;
var statearr_41474_41504 = state_41453__$1;
(statearr_41474_41504[(2)] = inst_41439);

(statearr_41474_41504[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (2))){
var state_41453__$1 = state_41453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41453__$1,(4),in$);
} else {
if((state_val_41454 === (23))){
var inst_41447 = (state_41453[(2)]);
var state_41453__$1 = state_41453;
var statearr_41475_41505 = state_41453__$1;
(statearr_41475_41505[(2)] = inst_41447);

(statearr_41475_41505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (19))){
var inst_41434 = (state_41453[(2)]);
var state_41453__$1 = state_41453;
var statearr_41476_41506 = state_41453__$1;
(statearr_41476_41506[(2)] = inst_41434);

(statearr_41476_41506[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (11))){
var inst_41405 = (state_41453[(9)]);
var inst_41419 = (state_41453[(7)]);
var inst_41419__$1 = cljs.core.seq.call(null,inst_41405);
var state_41453__$1 = (function (){var statearr_41477 = state_41453;
(statearr_41477[(7)] = inst_41419__$1);

return statearr_41477;
})();
if(inst_41419__$1){
var statearr_41478_41507 = state_41453__$1;
(statearr_41478_41507[(1)] = (14));

} else {
var statearr_41479_41508 = state_41453__$1;
(statearr_41479_41508[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (9))){
var inst_41441 = (state_41453[(2)]);
var inst_41442 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_41453__$1 = (function (){var statearr_41480 = state_41453;
(statearr_41480[(15)] = inst_41441);

return statearr_41480;
})();
if(cljs.core.truth_(inst_41442)){
var statearr_41481_41509 = state_41453__$1;
(statearr_41481_41509[(1)] = (21));

} else {
var statearr_41482_41510 = state_41453__$1;
(statearr_41482_41510[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (5))){
var inst_41397 = cljs.core.async.close_BANG_.call(null,out);
var state_41453__$1 = state_41453;
var statearr_41483_41511 = state_41453__$1;
(statearr_41483_41511[(2)] = inst_41397);

(statearr_41483_41511[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (14))){
var inst_41419 = (state_41453[(7)]);
var inst_41421 = cljs.core.chunked_seq_QMARK_.call(null,inst_41419);
var state_41453__$1 = state_41453;
if(inst_41421){
var statearr_41484_41512 = state_41453__$1;
(statearr_41484_41512[(1)] = (17));

} else {
var statearr_41485_41513 = state_41453__$1;
(statearr_41485_41513[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (16))){
var inst_41437 = (state_41453[(2)]);
var state_41453__$1 = state_41453;
var statearr_41486_41514 = state_41453__$1;
(statearr_41486_41514[(2)] = inst_41437);

(statearr_41486_41514[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41454 === (10))){
var inst_41408 = (state_41453[(10)]);
var inst_41406 = (state_41453[(12)]);
var inst_41413 = cljs.core._nth.call(null,inst_41406,inst_41408);
var state_41453__$1 = state_41453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41453__$1,(13),out,inst_41413);
} else {
if((state_val_41454 === (18))){
var inst_41419 = (state_41453[(7)]);
var inst_41428 = cljs.core.first.call(null,inst_41419);
var state_41453__$1 = state_41453;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41453__$1,(20),out,inst_41428);
} else {
if((state_val_41454 === (8))){
var inst_41407 = (state_41453[(8)]);
var inst_41408 = (state_41453[(10)]);
var inst_41410 = (inst_41408 < inst_41407);
var inst_41411 = inst_41410;
var state_41453__$1 = state_41453;
if(cljs.core.truth_(inst_41411)){
var statearr_41487_41515 = state_41453__$1;
(statearr_41487_41515[(1)] = (10));

} else {
var statearr_41488_41516 = state_41453__$1;
(statearr_41488_41516[(1)] = (11));

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
}
}
}
}
}
}
});})(c__32474__auto__))
;
return ((function (switch__32384__auto__,c__32474__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32385__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32385__auto____0 = (function (){
var statearr_41489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41489[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32385__auto__);

(statearr_41489[(1)] = (1));

return statearr_41489;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32385__auto____1 = (function (state_41453){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41490){if((e41490 instanceof Object)){
var ex__32388__auto__ = e41490;
var statearr_41491_41517 = state_41453;
(statearr_41491_41517[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41518 = state_41453;
state_41453 = G__41518;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32385__auto__ = function(state_41453){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32385__auto____1.call(this,state_41453);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32385__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32385__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__))
})();
var state__32476__auto__ = (function (){var statearr_41492 = f__32475__auto__.call(null);
(statearr_41492[(6)] = c__32474__auto__);

return statearr_41492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__))
);

return c__32474__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__41520 = arguments.length;
switch (G__41520) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__41523 = arguments.length;
switch (G__41523) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__41526 = arguments.length;
switch (G__41526) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32474__auto___41573 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41573,out){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41573,out){
return (function (state_41550){
var state_val_41551 = (state_41550[(1)]);
if((state_val_41551 === (7))){
var inst_41545 = (state_41550[(2)]);
var state_41550__$1 = state_41550;
var statearr_41552_41574 = state_41550__$1;
(statearr_41552_41574[(2)] = inst_41545);

(statearr_41552_41574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (1))){
var inst_41527 = null;
var state_41550__$1 = (function (){var statearr_41553 = state_41550;
(statearr_41553[(7)] = inst_41527);

return statearr_41553;
})();
var statearr_41554_41575 = state_41550__$1;
(statearr_41554_41575[(2)] = null);

(statearr_41554_41575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (4))){
var inst_41530 = (state_41550[(8)]);
var inst_41530__$1 = (state_41550[(2)]);
var inst_41531 = (inst_41530__$1 == null);
var inst_41532 = cljs.core.not.call(null,inst_41531);
var state_41550__$1 = (function (){var statearr_41555 = state_41550;
(statearr_41555[(8)] = inst_41530__$1);

return statearr_41555;
})();
if(inst_41532){
var statearr_41556_41576 = state_41550__$1;
(statearr_41556_41576[(1)] = (5));

} else {
var statearr_41557_41577 = state_41550__$1;
(statearr_41557_41577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (6))){
var state_41550__$1 = state_41550;
var statearr_41558_41578 = state_41550__$1;
(statearr_41558_41578[(2)] = null);

(statearr_41558_41578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (3))){
var inst_41547 = (state_41550[(2)]);
var inst_41548 = cljs.core.async.close_BANG_.call(null,out);
var state_41550__$1 = (function (){var statearr_41559 = state_41550;
(statearr_41559[(9)] = inst_41547);

return statearr_41559;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41550__$1,inst_41548);
} else {
if((state_val_41551 === (2))){
var state_41550__$1 = state_41550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41550__$1,(4),ch);
} else {
if((state_val_41551 === (11))){
var inst_41530 = (state_41550[(8)]);
var inst_41539 = (state_41550[(2)]);
var inst_41527 = inst_41530;
var state_41550__$1 = (function (){var statearr_41560 = state_41550;
(statearr_41560[(7)] = inst_41527);

(statearr_41560[(10)] = inst_41539);

return statearr_41560;
})();
var statearr_41561_41579 = state_41550__$1;
(statearr_41561_41579[(2)] = null);

(statearr_41561_41579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (9))){
var inst_41530 = (state_41550[(8)]);
var state_41550__$1 = state_41550;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41550__$1,(11),out,inst_41530);
} else {
if((state_val_41551 === (5))){
var inst_41530 = (state_41550[(8)]);
var inst_41527 = (state_41550[(7)]);
var inst_41534 = cljs.core._EQ_.call(null,inst_41530,inst_41527);
var state_41550__$1 = state_41550;
if(inst_41534){
var statearr_41563_41580 = state_41550__$1;
(statearr_41563_41580[(1)] = (8));

} else {
var statearr_41564_41581 = state_41550__$1;
(statearr_41564_41581[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (10))){
var inst_41542 = (state_41550[(2)]);
var state_41550__$1 = state_41550;
var statearr_41565_41582 = state_41550__$1;
(statearr_41565_41582[(2)] = inst_41542);

(statearr_41565_41582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41551 === (8))){
var inst_41527 = (state_41550[(7)]);
var tmp41562 = inst_41527;
var inst_41527__$1 = tmp41562;
var state_41550__$1 = (function (){var statearr_41566 = state_41550;
(statearr_41566[(7)] = inst_41527__$1);

return statearr_41566;
})();
var statearr_41567_41583 = state_41550__$1;
(statearr_41567_41583[(2)] = null);

(statearr_41567_41583[(1)] = (2));


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
});})(c__32474__auto___41573,out))
;
return ((function (switch__32384__auto__,c__32474__auto___41573,out){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41568 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41568[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41568[(1)] = (1));

return statearr_41568;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41550){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41569){if((e41569 instanceof Object)){
var ex__32388__auto__ = e41569;
var statearr_41570_41584 = state_41550;
(statearr_41570_41584[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41569;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41585 = state_41550;
state_41550 = G__41585;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41550){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41550);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41573,out))
})();
var state__32476__auto__ = (function (){var statearr_41571 = f__32475__auto__.call(null);
(statearr_41571[(6)] = c__32474__auto___41573);

return statearr_41571;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41573,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__41587 = arguments.length;
switch (G__41587) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32474__auto___41653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41653,out){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41653,out){
return (function (state_41625){
var state_val_41626 = (state_41625[(1)]);
if((state_val_41626 === (7))){
var inst_41621 = (state_41625[(2)]);
var state_41625__$1 = state_41625;
var statearr_41627_41654 = state_41625__$1;
(statearr_41627_41654[(2)] = inst_41621);

(statearr_41627_41654[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (1))){
var inst_41588 = (new Array(n));
var inst_41589 = inst_41588;
var inst_41590 = (0);
var state_41625__$1 = (function (){var statearr_41628 = state_41625;
(statearr_41628[(7)] = inst_41590);

(statearr_41628[(8)] = inst_41589);

return statearr_41628;
})();
var statearr_41629_41655 = state_41625__$1;
(statearr_41629_41655[(2)] = null);

(statearr_41629_41655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (4))){
var inst_41593 = (state_41625[(9)]);
var inst_41593__$1 = (state_41625[(2)]);
var inst_41594 = (inst_41593__$1 == null);
var inst_41595 = cljs.core.not.call(null,inst_41594);
var state_41625__$1 = (function (){var statearr_41630 = state_41625;
(statearr_41630[(9)] = inst_41593__$1);

return statearr_41630;
})();
if(inst_41595){
var statearr_41631_41656 = state_41625__$1;
(statearr_41631_41656[(1)] = (5));

} else {
var statearr_41632_41657 = state_41625__$1;
(statearr_41632_41657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (15))){
var inst_41615 = (state_41625[(2)]);
var state_41625__$1 = state_41625;
var statearr_41633_41658 = state_41625__$1;
(statearr_41633_41658[(2)] = inst_41615);

(statearr_41633_41658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (13))){
var state_41625__$1 = state_41625;
var statearr_41634_41659 = state_41625__$1;
(statearr_41634_41659[(2)] = null);

(statearr_41634_41659[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (6))){
var inst_41590 = (state_41625[(7)]);
var inst_41611 = (inst_41590 > (0));
var state_41625__$1 = state_41625;
if(cljs.core.truth_(inst_41611)){
var statearr_41635_41660 = state_41625__$1;
(statearr_41635_41660[(1)] = (12));

} else {
var statearr_41636_41661 = state_41625__$1;
(statearr_41636_41661[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (3))){
var inst_41623 = (state_41625[(2)]);
var state_41625__$1 = state_41625;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41625__$1,inst_41623);
} else {
if((state_val_41626 === (12))){
var inst_41589 = (state_41625[(8)]);
var inst_41613 = cljs.core.vec.call(null,inst_41589);
var state_41625__$1 = state_41625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41625__$1,(15),out,inst_41613);
} else {
if((state_val_41626 === (2))){
var state_41625__$1 = state_41625;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41625__$1,(4),ch);
} else {
if((state_val_41626 === (11))){
var inst_41605 = (state_41625[(2)]);
var inst_41606 = (new Array(n));
var inst_41589 = inst_41606;
var inst_41590 = (0);
var state_41625__$1 = (function (){var statearr_41637 = state_41625;
(statearr_41637[(7)] = inst_41590);

(statearr_41637[(8)] = inst_41589);

(statearr_41637[(10)] = inst_41605);

return statearr_41637;
})();
var statearr_41638_41662 = state_41625__$1;
(statearr_41638_41662[(2)] = null);

(statearr_41638_41662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (9))){
var inst_41589 = (state_41625[(8)]);
var inst_41603 = cljs.core.vec.call(null,inst_41589);
var state_41625__$1 = state_41625;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41625__$1,(11),out,inst_41603);
} else {
if((state_val_41626 === (5))){
var inst_41590 = (state_41625[(7)]);
var inst_41589 = (state_41625[(8)]);
var inst_41598 = (state_41625[(11)]);
var inst_41593 = (state_41625[(9)]);
var inst_41597 = (inst_41589[inst_41590] = inst_41593);
var inst_41598__$1 = (inst_41590 + (1));
var inst_41599 = (inst_41598__$1 < n);
var state_41625__$1 = (function (){var statearr_41639 = state_41625;
(statearr_41639[(11)] = inst_41598__$1);

(statearr_41639[(12)] = inst_41597);

return statearr_41639;
})();
if(cljs.core.truth_(inst_41599)){
var statearr_41640_41663 = state_41625__$1;
(statearr_41640_41663[(1)] = (8));

} else {
var statearr_41641_41664 = state_41625__$1;
(statearr_41641_41664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (14))){
var inst_41618 = (state_41625[(2)]);
var inst_41619 = cljs.core.async.close_BANG_.call(null,out);
var state_41625__$1 = (function (){var statearr_41643 = state_41625;
(statearr_41643[(13)] = inst_41618);

return statearr_41643;
})();
var statearr_41644_41665 = state_41625__$1;
(statearr_41644_41665[(2)] = inst_41619);

(statearr_41644_41665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (10))){
var inst_41609 = (state_41625[(2)]);
var state_41625__$1 = state_41625;
var statearr_41645_41666 = state_41625__$1;
(statearr_41645_41666[(2)] = inst_41609);

(statearr_41645_41666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41626 === (8))){
var inst_41589 = (state_41625[(8)]);
var inst_41598 = (state_41625[(11)]);
var tmp41642 = inst_41589;
var inst_41589__$1 = tmp41642;
var inst_41590 = inst_41598;
var state_41625__$1 = (function (){var statearr_41646 = state_41625;
(statearr_41646[(7)] = inst_41590);

(statearr_41646[(8)] = inst_41589__$1);

return statearr_41646;
})();
var statearr_41647_41667 = state_41625__$1;
(statearr_41647_41667[(2)] = null);

(statearr_41647_41667[(1)] = (2));


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
});})(c__32474__auto___41653,out))
;
return ((function (switch__32384__auto__,c__32474__auto___41653,out){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41648[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41648[(1)] = (1));

return statearr_41648;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41625){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41625);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41649){if((e41649 instanceof Object)){
var ex__32388__auto__ = e41649;
var statearr_41650_41668 = state_41625;
(statearr_41650_41668[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41649;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41669 = state_41625;
state_41625 = G__41669;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41625);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41653,out))
})();
var state__32476__auto__ = (function (){var statearr_41651 = f__32475__auto__.call(null);
(statearr_41651[(6)] = c__32474__auto___41653);

return statearr_41651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41653,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__41671 = arguments.length;
switch (G__41671) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32474__auto___41741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___41741,out){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___41741,out){
return (function (state_41713){
var state_val_41714 = (state_41713[(1)]);
if((state_val_41714 === (7))){
var inst_41709 = (state_41713[(2)]);
var state_41713__$1 = state_41713;
var statearr_41715_41742 = state_41713__$1;
(statearr_41715_41742[(2)] = inst_41709);

(statearr_41715_41742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (1))){
var inst_41672 = [];
var inst_41673 = inst_41672;
var inst_41674 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_41713__$1 = (function (){var statearr_41716 = state_41713;
(statearr_41716[(7)] = inst_41674);

(statearr_41716[(8)] = inst_41673);

return statearr_41716;
})();
var statearr_41717_41743 = state_41713__$1;
(statearr_41717_41743[(2)] = null);

(statearr_41717_41743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (4))){
var inst_41677 = (state_41713[(9)]);
var inst_41677__$1 = (state_41713[(2)]);
var inst_41678 = (inst_41677__$1 == null);
var inst_41679 = cljs.core.not.call(null,inst_41678);
var state_41713__$1 = (function (){var statearr_41718 = state_41713;
(statearr_41718[(9)] = inst_41677__$1);

return statearr_41718;
})();
if(inst_41679){
var statearr_41719_41744 = state_41713__$1;
(statearr_41719_41744[(1)] = (5));

} else {
var statearr_41720_41745 = state_41713__$1;
(statearr_41720_41745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (15))){
var inst_41703 = (state_41713[(2)]);
var state_41713__$1 = state_41713;
var statearr_41721_41746 = state_41713__$1;
(statearr_41721_41746[(2)] = inst_41703);

(statearr_41721_41746[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (13))){
var state_41713__$1 = state_41713;
var statearr_41722_41747 = state_41713__$1;
(statearr_41722_41747[(2)] = null);

(statearr_41722_41747[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (6))){
var inst_41673 = (state_41713[(8)]);
var inst_41698 = inst_41673.length;
var inst_41699 = (inst_41698 > (0));
var state_41713__$1 = state_41713;
if(cljs.core.truth_(inst_41699)){
var statearr_41723_41748 = state_41713__$1;
(statearr_41723_41748[(1)] = (12));

} else {
var statearr_41724_41749 = state_41713__$1;
(statearr_41724_41749[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (3))){
var inst_41711 = (state_41713[(2)]);
var state_41713__$1 = state_41713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41713__$1,inst_41711);
} else {
if((state_val_41714 === (12))){
var inst_41673 = (state_41713[(8)]);
var inst_41701 = cljs.core.vec.call(null,inst_41673);
var state_41713__$1 = state_41713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41713__$1,(15),out,inst_41701);
} else {
if((state_val_41714 === (2))){
var state_41713__$1 = state_41713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41713__$1,(4),ch);
} else {
if((state_val_41714 === (11))){
var inst_41677 = (state_41713[(9)]);
var inst_41681 = (state_41713[(10)]);
var inst_41691 = (state_41713[(2)]);
var inst_41692 = [];
var inst_41693 = inst_41692.push(inst_41677);
var inst_41673 = inst_41692;
var inst_41674 = inst_41681;
var state_41713__$1 = (function (){var statearr_41725 = state_41713;
(statearr_41725[(11)] = inst_41691);

(statearr_41725[(12)] = inst_41693);

(statearr_41725[(7)] = inst_41674);

(statearr_41725[(8)] = inst_41673);

return statearr_41725;
})();
var statearr_41726_41750 = state_41713__$1;
(statearr_41726_41750[(2)] = null);

(statearr_41726_41750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (9))){
var inst_41673 = (state_41713[(8)]);
var inst_41689 = cljs.core.vec.call(null,inst_41673);
var state_41713__$1 = state_41713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41713__$1,(11),out,inst_41689);
} else {
if((state_val_41714 === (5))){
var inst_41677 = (state_41713[(9)]);
var inst_41674 = (state_41713[(7)]);
var inst_41681 = (state_41713[(10)]);
var inst_41681__$1 = f.call(null,inst_41677);
var inst_41682 = cljs.core._EQ_.call(null,inst_41681__$1,inst_41674);
var inst_41683 = cljs.core.keyword_identical_QMARK_.call(null,inst_41674,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_41684 = ((inst_41682) || (inst_41683));
var state_41713__$1 = (function (){var statearr_41727 = state_41713;
(statearr_41727[(10)] = inst_41681__$1);

return statearr_41727;
})();
if(cljs.core.truth_(inst_41684)){
var statearr_41728_41751 = state_41713__$1;
(statearr_41728_41751[(1)] = (8));

} else {
var statearr_41729_41752 = state_41713__$1;
(statearr_41729_41752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (14))){
var inst_41706 = (state_41713[(2)]);
var inst_41707 = cljs.core.async.close_BANG_.call(null,out);
var state_41713__$1 = (function (){var statearr_41731 = state_41713;
(statearr_41731[(13)] = inst_41706);

return statearr_41731;
})();
var statearr_41732_41753 = state_41713__$1;
(statearr_41732_41753[(2)] = inst_41707);

(statearr_41732_41753[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (10))){
var inst_41696 = (state_41713[(2)]);
var state_41713__$1 = state_41713;
var statearr_41733_41754 = state_41713__$1;
(statearr_41733_41754[(2)] = inst_41696);

(statearr_41733_41754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41714 === (8))){
var inst_41677 = (state_41713[(9)]);
var inst_41673 = (state_41713[(8)]);
var inst_41681 = (state_41713[(10)]);
var inst_41686 = inst_41673.push(inst_41677);
var tmp41730 = inst_41673;
var inst_41673__$1 = tmp41730;
var inst_41674 = inst_41681;
var state_41713__$1 = (function (){var statearr_41734 = state_41713;
(statearr_41734[(7)] = inst_41674);

(statearr_41734[(8)] = inst_41673__$1);

(statearr_41734[(14)] = inst_41686);

return statearr_41734;
})();
var statearr_41735_41755 = state_41713__$1;
(statearr_41735_41755[(2)] = null);

(statearr_41735_41755[(1)] = (2));


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
});})(c__32474__auto___41741,out))
;
return ((function (switch__32384__auto__,c__32474__auto___41741,out){
return (function() {
var cljs$core$async$state_machine__32385__auto__ = null;
var cljs$core$async$state_machine__32385__auto____0 = (function (){
var statearr_41736 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41736[(0)] = cljs$core$async$state_machine__32385__auto__);

(statearr_41736[(1)] = (1));

return statearr_41736;
});
var cljs$core$async$state_machine__32385__auto____1 = (function (state_41713){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_41713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e41737){if((e41737 instanceof Object)){
var ex__32388__auto__ = e41737;
var statearr_41738_41756 = state_41713;
(statearr_41738_41756[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41757 = state_41713;
state_41713 = G__41757;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
cljs$core$async$state_machine__32385__auto__ = function(state_41713){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32385__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32385__auto____1.call(this,state_41713);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32385__auto____0;
cljs$core$async$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32385__auto____1;
return cljs$core$async$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___41741,out))
})();
var state__32476__auto__ = (function (){var statearr_41739 = f__32475__auto__.call(null);
(statearr_41739[(6)] = c__32474__auto___41741);

return statearr_41739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___41741,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1564480792349
