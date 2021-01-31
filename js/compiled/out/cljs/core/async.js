// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__22482 = arguments.length;
switch (G__22482) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22483 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22483 = (function (f,blockable,meta22484){
this.f = f;
this.blockable = blockable;
this.meta22484 = meta22484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22485,meta22484__$1){
var self__ = this;
var _22485__$1 = this;
return (new cljs.core.async.t_cljs$core$async22483(self__.f,self__.blockable,meta22484__$1));
});

cljs.core.async.t_cljs$core$async22483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22485){
var self__ = this;
var _22485__$1 = this;
return self__.meta22484;
});

cljs.core.async.t_cljs$core$async22483.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22483.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22483.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22483.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22484","meta22484",195232217,null)], null);
});

cljs.core.async.t_cljs$core$async22483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22483";

cljs.core.async.t_cljs$core$async22483.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22483");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22483.
 */
cljs.core.async.__GT_t_cljs$core$async22483 = (function cljs$core$async$__GT_t_cljs$core$async22483(f__$1,blockable__$1,meta22484){
return (new cljs.core.async.t_cljs$core$async22483(f__$1,blockable__$1,meta22484));
});

}

return (new cljs.core.async.t_cljs$core$async22483(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if((!((buff == null)))){
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
var G__22489 = arguments.length;
switch (G__22489) {
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
var G__22492 = arguments.length;
switch (G__22492) {
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
var G__22495 = arguments.length;
switch (G__22495) {
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
var val_22497 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22497);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22497,ret){
return (function (){
return fn1.call(null,val_22497);
});})(val_22497,ret))
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
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__22499 = arguments.length;
switch (G__22499) {
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
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
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
var n__4607__auto___22501 = n;
var x_22502 = (0);
while(true){
if((x_22502 < n__4607__auto___22501)){
(a[x_22502] = x_22502);

var G__22503 = (x_22502 + (1));
x_22502 = G__22503;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22504 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22504 = (function (flag,meta22505){
this.flag = flag;
this.meta22505 = meta22505;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22506,meta22505__$1){
var self__ = this;
var _22506__$1 = this;
return (new cljs.core.async.t_cljs$core$async22504(self__.flag,meta22505__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22506){
var self__ = this;
var _22506__$1 = this;
return self__.meta22505;
});})(flag))
;

cljs.core.async.t_cljs$core$async22504.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22504.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22504.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22505","meta22505",-782874657,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22504.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22504.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22504";

cljs.core.async.t_cljs$core$async22504.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22504");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22504.
 */
cljs.core.async.__GT_t_cljs$core$async22504 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22504(flag__$1,meta22505){
return (new cljs.core.async.t_cljs$core$async22504(flag__$1,meta22505));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22504(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22507 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22507 = (function (flag,cb,meta22508){
this.flag = flag;
this.cb = cb;
this.meta22508 = meta22508;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async22507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22509,meta22508__$1){
var self__ = this;
var _22509__$1 = this;
return (new cljs.core.async.t_cljs$core$async22507(self__.flag,self__.cb,meta22508__$1));
});

cljs.core.async.t_cljs$core$async22507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22509){
var self__ = this;
var _22509__$1 = this;
return self__.meta22508;
});

cljs.core.async.t_cljs$core$async22507.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async22507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22507.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22507.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22508","meta22508",634124511,null)], null);
});

cljs.core.async.t_cljs$core$async22507.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22507.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22507";

cljs.core.async.t_cljs$core$async22507.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async22507");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22507.
 */
cljs.core.async.__GT_t_cljs$core$async22507 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22507(flag__$1,cb__$1,meta22508){
return (new cljs.core.async.t_cljs$core$async22507(flag__$1,cb__$1,meta22508));
});

}

return (new cljs.core.async.t_cljs$core$async22507(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__22510_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22510_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22511_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22511_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22512 = (i + (1));
i = G__22512;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___22518 = arguments.length;
var i__4731__auto___22519 = (0);
while(true){
if((i__4731__auto___22519 < len__4730__auto___22518)){
args__4736__auto__.push((arguments[i__4731__auto___22519]));

var G__22520 = (i__4731__auto___22519 + (1));
i__4731__auto___22519 = G__22520;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22515){
var map__22516 = p__22515;
var map__22516__$1 = (((((!((map__22516 == null))))?(((((map__22516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22516):map__22516);
var opts = map__22516__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22513){
var G__22514 = cljs.core.first.call(null,seq22513);
var seq22513__$1 = cljs.core.next.call(null,seq22513);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22514,seq22513__$1);
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
var G__22522 = arguments.length;
switch (G__22522) {
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
var c__22422__auto___22568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___22568){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___22568){
return (function (state_22546){
var state_val_22547 = (state_22546[(1)]);
if((state_val_22547 === (7))){
var inst_22542 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22548_22569 = state_22546__$1;
(statearr_22548_22569[(2)] = inst_22542);

(statearr_22548_22569[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (1))){
var state_22546__$1 = state_22546;
var statearr_22549_22570 = state_22546__$1;
(statearr_22549_22570[(2)] = null);

(statearr_22549_22570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (4))){
var inst_22525 = (state_22546[(7)]);
var inst_22525__$1 = (state_22546[(2)]);
var inst_22526 = (inst_22525__$1 == null);
var state_22546__$1 = (function (){var statearr_22550 = state_22546;
(statearr_22550[(7)] = inst_22525__$1);

return statearr_22550;
})();
if(cljs.core.truth_(inst_22526)){
var statearr_22551_22571 = state_22546__$1;
(statearr_22551_22571[(1)] = (5));

} else {
var statearr_22552_22572 = state_22546__$1;
(statearr_22552_22572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (13))){
var state_22546__$1 = state_22546;
var statearr_22553_22573 = state_22546__$1;
(statearr_22553_22573[(2)] = null);

(statearr_22553_22573[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (6))){
var inst_22525 = (state_22546[(7)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22546__$1,(11),to,inst_22525);
} else {
if((state_val_22547 === (3))){
var inst_22544 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22546__$1,inst_22544);
} else {
if((state_val_22547 === (12))){
var state_22546__$1 = state_22546;
var statearr_22554_22574 = state_22546__$1;
(statearr_22554_22574[(2)] = null);

(statearr_22554_22574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (2))){
var state_22546__$1 = state_22546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22546__$1,(4),from);
} else {
if((state_val_22547 === (11))){
var inst_22535 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
if(cljs.core.truth_(inst_22535)){
var statearr_22555_22575 = state_22546__$1;
(statearr_22555_22575[(1)] = (12));

} else {
var statearr_22556_22576 = state_22546__$1;
(statearr_22556_22576[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (9))){
var state_22546__$1 = state_22546;
var statearr_22557_22577 = state_22546__$1;
(statearr_22557_22577[(2)] = null);

(statearr_22557_22577[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (5))){
var state_22546__$1 = state_22546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22558_22578 = state_22546__$1;
(statearr_22558_22578[(1)] = (8));

} else {
var statearr_22559_22579 = state_22546__$1;
(statearr_22559_22579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (14))){
var inst_22540 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22560_22580 = state_22546__$1;
(statearr_22560_22580[(2)] = inst_22540);

(statearr_22560_22580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (10))){
var inst_22532 = (state_22546[(2)]);
var state_22546__$1 = state_22546;
var statearr_22561_22581 = state_22546__$1;
(statearr_22561_22581[(2)] = inst_22532);

(statearr_22561_22581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22547 === (8))){
var inst_22529 = cljs.core.async.close_BANG_.call(null,to);
var state_22546__$1 = state_22546;
var statearr_22562_22582 = state_22546__$1;
(statearr_22562_22582[(2)] = inst_22529);

(statearr_22562_22582[(1)] = (10));


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
});})(c__22422__auto___22568))
;
return ((function (switch__22327__auto__,c__22422__auto___22568){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_22563 = [null,null,null,null,null,null,null,null];
(statearr_22563[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_22563[(1)] = (1));

return statearr_22563;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_22546){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22564){if((e22564 instanceof Object)){
var ex__22331__auto__ = e22564;
var statearr_22565_22583 = state_22546;
(statearr_22565_22583[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22584 = state_22546;
state_22546 = G__22584;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_22546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_22546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___22568))
})();
var state__22424__auto__ = (function (){var statearr_22566 = f__22423__auto__.call(null);
(statearr_22566[(6)] = c__22422__auto___22568);

return statearr_22566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___22568))
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
var process = ((function (jobs,results){
return (function (p__22585){
var vec__22586 = p__22585;
var v = cljs.core.nth.call(null,vec__22586,(0),null);
var p = cljs.core.nth.call(null,vec__22586,(1),null);
var job = vec__22586;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__22422__auto___22757 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___22757,res,vec__22586,v,p,job,jobs,results){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___22757,res,vec__22586,v,p,job,jobs,results){
return (function (state_22593){
var state_val_22594 = (state_22593[(1)]);
if((state_val_22594 === (1))){
var state_22593__$1 = state_22593;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22593__$1,(2),res,v);
} else {
if((state_val_22594 === (2))){
var inst_22590 = (state_22593[(2)]);
var inst_22591 = cljs.core.async.close_BANG_.call(null,res);
var state_22593__$1 = (function (){var statearr_22595 = state_22593;
(statearr_22595[(7)] = inst_22590);

return statearr_22595;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22593__$1,inst_22591);
} else {
return null;
}
}
});})(c__22422__auto___22757,res,vec__22586,v,p,job,jobs,results))
;
return ((function (switch__22327__auto__,c__22422__auto___22757,res,vec__22586,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0 = (function (){
var statearr_22596 = [null,null,null,null,null,null,null,null];
(statearr_22596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__);

(statearr_22596[(1)] = (1));

return statearr_22596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1 = (function (state_22593){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22597){if((e22597 instanceof Object)){
var ex__22331__auto__ = e22597;
var statearr_22598_22758 = state_22593;
(statearr_22598_22758[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22759 = state_22593;
state_22593 = G__22759;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = function(state_22593){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1.call(this,state_22593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___22757,res,vec__22586,v,p,job,jobs,results))
})();
var state__22424__auto__ = (function (){var statearr_22599 = f__22423__auto__.call(null);
(statearr_22599[(6)] = c__22422__auto___22757);

return statearr_22599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___22757,res,vec__22586,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22600){
var vec__22601 = p__22600;
var v = cljs.core.nth.call(null,vec__22601,(0),null);
var p = cljs.core.nth.call(null,vec__22601,(1),null);
var job = vec__22601;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___22760 = n;
var __22761 = (0);
while(true){
if((__22761 < n__4607__auto___22760)){
var G__22604_22762 = type;
var G__22604_22763__$1 = (((G__22604_22762 instanceof cljs.core.Keyword))?G__22604_22762.fqn:null);
switch (G__22604_22763__$1) {
case "compute":
var c__22422__auto___22765 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22761,c__22422__auto___22765,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (__22761,c__22422__auto___22765,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async){
return (function (state_22617){
var state_val_22618 = (state_22617[(1)]);
if((state_val_22618 === (1))){
var state_22617__$1 = state_22617;
var statearr_22619_22766 = state_22617__$1;
(statearr_22619_22766[(2)] = null);

(statearr_22619_22766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (2))){
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22617__$1,(4),jobs);
} else {
if((state_val_22618 === (3))){
var inst_22615 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22617__$1,inst_22615);
} else {
if((state_val_22618 === (4))){
var inst_22607 = (state_22617[(2)]);
var inst_22608 = process.call(null,inst_22607);
var state_22617__$1 = state_22617;
if(cljs.core.truth_(inst_22608)){
var statearr_22620_22767 = state_22617__$1;
(statearr_22620_22767[(1)] = (5));

} else {
var statearr_22621_22768 = state_22617__$1;
(statearr_22621_22768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (5))){
var state_22617__$1 = state_22617;
var statearr_22622_22769 = state_22617__$1;
(statearr_22622_22769[(2)] = null);

(statearr_22622_22769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (6))){
var state_22617__$1 = state_22617;
var statearr_22623_22770 = state_22617__$1;
(statearr_22623_22770[(2)] = null);

(statearr_22623_22770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22618 === (7))){
var inst_22613 = (state_22617[(2)]);
var state_22617__$1 = state_22617;
var statearr_22624_22771 = state_22617__$1;
(statearr_22624_22771[(2)] = inst_22613);

(statearr_22624_22771[(1)] = (3));


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
});})(__22761,c__22422__auto___22765,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async))
;
return ((function (__22761,switch__22327__auto__,c__22422__auto___22765,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0 = (function (){
var statearr_22625 = [null,null,null,null,null,null,null];
(statearr_22625[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__);

(statearr_22625[(1)] = (1));

return statearr_22625;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1 = (function (state_22617){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22626){if((e22626 instanceof Object)){
var ex__22331__auto__ = e22626;
var statearr_22627_22772 = state_22617;
(statearr_22627_22772[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22773 = state_22617;
state_22617 = G__22773;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = function(state_22617){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1.call(this,state_22617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__;
})()
;})(__22761,switch__22327__auto__,c__22422__auto___22765,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async))
})();
var state__22424__auto__ = (function (){var statearr_22628 = f__22423__auto__.call(null);
(statearr_22628[(6)] = c__22422__auto___22765);

return statearr_22628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(__22761,c__22422__auto___22765,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async))
);


break;
case "async":
var c__22422__auto___22774 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22761,c__22422__auto___22774,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (__22761,c__22422__auto___22774,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async){
return (function (state_22641){
var state_val_22642 = (state_22641[(1)]);
if((state_val_22642 === (1))){
var state_22641__$1 = state_22641;
var statearr_22643_22775 = state_22641__$1;
(statearr_22643_22775[(2)] = null);

(statearr_22643_22775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (2))){
var state_22641__$1 = state_22641;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22641__$1,(4),jobs);
} else {
if((state_val_22642 === (3))){
var inst_22639 = (state_22641[(2)]);
var state_22641__$1 = state_22641;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22641__$1,inst_22639);
} else {
if((state_val_22642 === (4))){
var inst_22631 = (state_22641[(2)]);
var inst_22632 = async.call(null,inst_22631);
var state_22641__$1 = state_22641;
if(cljs.core.truth_(inst_22632)){
var statearr_22644_22776 = state_22641__$1;
(statearr_22644_22776[(1)] = (5));

} else {
var statearr_22645_22777 = state_22641__$1;
(statearr_22645_22777[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (5))){
var state_22641__$1 = state_22641;
var statearr_22646_22778 = state_22641__$1;
(statearr_22646_22778[(2)] = null);

(statearr_22646_22778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (6))){
var state_22641__$1 = state_22641;
var statearr_22647_22779 = state_22641__$1;
(statearr_22647_22779[(2)] = null);

(statearr_22647_22779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22642 === (7))){
var inst_22637 = (state_22641[(2)]);
var state_22641__$1 = state_22641;
var statearr_22648_22780 = state_22641__$1;
(statearr_22648_22780[(2)] = inst_22637);

(statearr_22648_22780[(1)] = (3));


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
});})(__22761,c__22422__auto___22774,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async))
;
return ((function (__22761,switch__22327__auto__,c__22422__auto___22774,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0 = (function (){
var statearr_22649 = [null,null,null,null,null,null,null];
(statearr_22649[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__);

(statearr_22649[(1)] = (1));

return statearr_22649;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1 = (function (state_22641){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22650){if((e22650 instanceof Object)){
var ex__22331__auto__ = e22650;
var statearr_22651_22781 = state_22641;
(statearr_22651_22781[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22782 = state_22641;
state_22641 = G__22782;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = function(state_22641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1.call(this,state_22641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__;
})()
;})(__22761,switch__22327__auto__,c__22422__auto___22774,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async))
})();
var state__22424__auto__ = (function (){var statearr_22652 = f__22423__auto__.call(null);
(statearr_22652[(6)] = c__22422__auto___22774);

return statearr_22652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(__22761,c__22422__auto___22774,G__22604_22762,G__22604_22763__$1,n__4607__auto___22760,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22604_22763__$1)].join('')));

}

var G__22783 = (__22761 + (1));
__22761 = G__22783;
continue;
} else {
}
break;
}

var c__22422__auto___22784 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___22784,jobs,results,process,async){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___22784,jobs,results,process,async){
return (function (state_22674){
var state_val_22675 = (state_22674[(1)]);
if((state_val_22675 === (7))){
var inst_22670 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
var statearr_22676_22785 = state_22674__$1;
(statearr_22676_22785[(2)] = inst_22670);

(statearr_22676_22785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (1))){
var state_22674__$1 = state_22674;
var statearr_22677_22786 = state_22674__$1;
(statearr_22677_22786[(2)] = null);

(statearr_22677_22786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (4))){
var inst_22655 = (state_22674[(7)]);
var inst_22655__$1 = (state_22674[(2)]);
var inst_22656 = (inst_22655__$1 == null);
var state_22674__$1 = (function (){var statearr_22678 = state_22674;
(statearr_22678[(7)] = inst_22655__$1);

return statearr_22678;
})();
if(cljs.core.truth_(inst_22656)){
var statearr_22679_22787 = state_22674__$1;
(statearr_22679_22787[(1)] = (5));

} else {
var statearr_22680_22788 = state_22674__$1;
(statearr_22680_22788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (6))){
var inst_22655 = (state_22674[(7)]);
var inst_22660 = (state_22674[(8)]);
var inst_22660__$1 = cljs.core.async.chan.call(null,(1));
var inst_22661 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22662 = [inst_22655,inst_22660__$1];
var inst_22663 = (new cljs.core.PersistentVector(null,2,(5),inst_22661,inst_22662,null));
var state_22674__$1 = (function (){var statearr_22681 = state_22674;
(statearr_22681[(8)] = inst_22660__$1);

return statearr_22681;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(8),jobs,inst_22663);
} else {
if((state_val_22675 === (3))){
var inst_22672 = (state_22674[(2)]);
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22674__$1,inst_22672);
} else {
if((state_val_22675 === (2))){
var state_22674__$1 = state_22674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22674__$1,(4),from);
} else {
if((state_val_22675 === (9))){
var inst_22667 = (state_22674[(2)]);
var state_22674__$1 = (function (){var statearr_22682 = state_22674;
(statearr_22682[(9)] = inst_22667);

return statearr_22682;
})();
var statearr_22683_22789 = state_22674__$1;
(statearr_22683_22789[(2)] = null);

(statearr_22683_22789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (5))){
var inst_22658 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22674__$1 = state_22674;
var statearr_22684_22790 = state_22674__$1;
(statearr_22684_22790[(2)] = inst_22658);

(statearr_22684_22790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22675 === (8))){
var inst_22660 = (state_22674[(8)]);
var inst_22665 = (state_22674[(2)]);
var state_22674__$1 = (function (){var statearr_22685 = state_22674;
(statearr_22685[(10)] = inst_22665);

return statearr_22685;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22674__$1,(9),results,inst_22660);
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
});})(c__22422__auto___22784,jobs,results,process,async))
;
return ((function (switch__22327__auto__,c__22422__auto___22784,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0 = (function (){
var statearr_22686 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22686[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__);

(statearr_22686[(1)] = (1));

return statearr_22686;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1 = (function (state_22674){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22687){if((e22687 instanceof Object)){
var ex__22331__auto__ = e22687;
var statearr_22688_22791 = state_22674;
(statearr_22688_22791[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22792 = state_22674;
state_22674 = G__22792;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = function(state_22674){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1.call(this,state_22674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___22784,jobs,results,process,async))
})();
var state__22424__auto__ = (function (){var statearr_22689 = f__22423__auto__.call(null);
(statearr_22689[(6)] = c__22422__auto___22784);

return statearr_22689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___22784,jobs,results,process,async))
);


var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__,jobs,results,process,async){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__,jobs,results,process,async){
return (function (state_22727){
var state_val_22728 = (state_22727[(1)]);
if((state_val_22728 === (7))){
var inst_22723 = (state_22727[(2)]);
var state_22727__$1 = state_22727;
var statearr_22729_22793 = state_22727__$1;
(statearr_22729_22793[(2)] = inst_22723);

(statearr_22729_22793[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (20))){
var state_22727__$1 = state_22727;
var statearr_22730_22794 = state_22727__$1;
(statearr_22730_22794[(2)] = null);

(statearr_22730_22794[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (1))){
var state_22727__$1 = state_22727;
var statearr_22731_22795 = state_22727__$1;
(statearr_22731_22795[(2)] = null);

(statearr_22731_22795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (4))){
var inst_22692 = (state_22727[(7)]);
var inst_22692__$1 = (state_22727[(2)]);
var inst_22693 = (inst_22692__$1 == null);
var state_22727__$1 = (function (){var statearr_22732 = state_22727;
(statearr_22732[(7)] = inst_22692__$1);

return statearr_22732;
})();
if(cljs.core.truth_(inst_22693)){
var statearr_22733_22796 = state_22727__$1;
(statearr_22733_22796[(1)] = (5));

} else {
var statearr_22734_22797 = state_22727__$1;
(statearr_22734_22797[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (15))){
var inst_22705 = (state_22727[(8)]);
var state_22727__$1 = state_22727;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22727__$1,(18),to,inst_22705);
} else {
if((state_val_22728 === (21))){
var inst_22718 = (state_22727[(2)]);
var state_22727__$1 = state_22727;
var statearr_22735_22798 = state_22727__$1;
(statearr_22735_22798[(2)] = inst_22718);

(statearr_22735_22798[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (13))){
var inst_22720 = (state_22727[(2)]);
var state_22727__$1 = (function (){var statearr_22736 = state_22727;
(statearr_22736[(9)] = inst_22720);

return statearr_22736;
})();
var statearr_22737_22799 = state_22727__$1;
(statearr_22737_22799[(2)] = null);

(statearr_22737_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (6))){
var inst_22692 = (state_22727[(7)]);
var state_22727__$1 = state_22727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22727__$1,(11),inst_22692);
} else {
if((state_val_22728 === (17))){
var inst_22713 = (state_22727[(2)]);
var state_22727__$1 = state_22727;
if(cljs.core.truth_(inst_22713)){
var statearr_22738_22800 = state_22727__$1;
(statearr_22738_22800[(1)] = (19));

} else {
var statearr_22739_22801 = state_22727__$1;
(statearr_22739_22801[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (3))){
var inst_22725 = (state_22727[(2)]);
var state_22727__$1 = state_22727;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22727__$1,inst_22725);
} else {
if((state_val_22728 === (12))){
var inst_22702 = (state_22727[(10)]);
var state_22727__$1 = state_22727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22727__$1,(14),inst_22702);
} else {
if((state_val_22728 === (2))){
var state_22727__$1 = state_22727;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22727__$1,(4),results);
} else {
if((state_val_22728 === (19))){
var state_22727__$1 = state_22727;
var statearr_22740_22802 = state_22727__$1;
(statearr_22740_22802[(2)] = null);

(statearr_22740_22802[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (11))){
var inst_22702 = (state_22727[(2)]);
var state_22727__$1 = (function (){var statearr_22741 = state_22727;
(statearr_22741[(10)] = inst_22702);

return statearr_22741;
})();
var statearr_22742_22803 = state_22727__$1;
(statearr_22742_22803[(2)] = null);

(statearr_22742_22803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (9))){
var state_22727__$1 = state_22727;
var statearr_22743_22804 = state_22727__$1;
(statearr_22743_22804[(2)] = null);

(statearr_22743_22804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (5))){
var state_22727__$1 = state_22727;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22744_22805 = state_22727__$1;
(statearr_22744_22805[(1)] = (8));

} else {
var statearr_22745_22806 = state_22727__$1;
(statearr_22745_22806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (14))){
var inst_22707 = (state_22727[(11)]);
var inst_22705 = (state_22727[(8)]);
var inst_22705__$1 = (state_22727[(2)]);
var inst_22706 = (inst_22705__$1 == null);
var inst_22707__$1 = cljs.core.not.call(null,inst_22706);
var state_22727__$1 = (function (){var statearr_22746 = state_22727;
(statearr_22746[(11)] = inst_22707__$1);

(statearr_22746[(8)] = inst_22705__$1);

return statearr_22746;
})();
if(inst_22707__$1){
var statearr_22747_22807 = state_22727__$1;
(statearr_22747_22807[(1)] = (15));

} else {
var statearr_22748_22808 = state_22727__$1;
(statearr_22748_22808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (16))){
var inst_22707 = (state_22727[(11)]);
var state_22727__$1 = state_22727;
var statearr_22749_22809 = state_22727__$1;
(statearr_22749_22809[(2)] = inst_22707);

(statearr_22749_22809[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (10))){
var inst_22699 = (state_22727[(2)]);
var state_22727__$1 = state_22727;
var statearr_22750_22810 = state_22727__$1;
(statearr_22750_22810[(2)] = inst_22699);

(statearr_22750_22810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (18))){
var inst_22710 = (state_22727[(2)]);
var state_22727__$1 = state_22727;
var statearr_22751_22811 = state_22727__$1;
(statearr_22751_22811[(2)] = inst_22710);

(statearr_22751_22811[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22728 === (8))){
var inst_22696 = cljs.core.async.close_BANG_.call(null,to);
var state_22727__$1 = state_22727;
var statearr_22752_22812 = state_22727__$1;
(statearr_22752_22812[(2)] = inst_22696);

(statearr_22752_22812[(1)] = (10));


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
});})(c__22422__auto__,jobs,results,process,async))
;
return ((function (switch__22327__auto__,c__22422__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0 = (function (){
var statearr_22753 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22753[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__);

(statearr_22753[(1)] = (1));

return statearr_22753;
});
var cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1 = (function (state_22727){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22727);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22754){if((e22754 instanceof Object)){
var ex__22331__auto__ = e22754;
var statearr_22755_22813 = state_22727;
(statearr_22755_22813[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22754;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22814 = state_22727;
state_22727 = G__22814;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__ = function(state_22727){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1.call(this,state_22727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__22328__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__,jobs,results,process,async))
})();
var state__22424__auto__ = (function (){var statearr_22756 = f__22423__auto__.call(null);
(statearr_22756[(6)] = c__22422__auto__);

return statearr_22756;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__,jobs,results,process,async))
);

return c__22422__auto__;
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
var G__22816 = arguments.length;
switch (G__22816) {
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
var G__22819 = arguments.length;
switch (G__22819) {
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
var G__22822 = arguments.length;
switch (G__22822) {
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
var c__22422__auto___22871 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___22871,tc,fc){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___22871,tc,fc){
return (function (state_22848){
var state_val_22849 = (state_22848[(1)]);
if((state_val_22849 === (7))){
var inst_22844 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22850_22872 = state_22848__$1;
(statearr_22850_22872[(2)] = inst_22844);

(statearr_22850_22872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (1))){
var state_22848__$1 = state_22848;
var statearr_22851_22873 = state_22848__$1;
(statearr_22851_22873[(2)] = null);

(statearr_22851_22873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (4))){
var inst_22825 = (state_22848[(7)]);
var inst_22825__$1 = (state_22848[(2)]);
var inst_22826 = (inst_22825__$1 == null);
var state_22848__$1 = (function (){var statearr_22852 = state_22848;
(statearr_22852[(7)] = inst_22825__$1);

return statearr_22852;
})();
if(cljs.core.truth_(inst_22826)){
var statearr_22853_22874 = state_22848__$1;
(statearr_22853_22874[(1)] = (5));

} else {
var statearr_22854_22875 = state_22848__$1;
(statearr_22854_22875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (13))){
var state_22848__$1 = state_22848;
var statearr_22855_22876 = state_22848__$1;
(statearr_22855_22876[(2)] = null);

(statearr_22855_22876[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (6))){
var inst_22825 = (state_22848[(7)]);
var inst_22831 = p.call(null,inst_22825);
var state_22848__$1 = state_22848;
if(cljs.core.truth_(inst_22831)){
var statearr_22856_22877 = state_22848__$1;
(statearr_22856_22877[(1)] = (9));

} else {
var statearr_22857_22878 = state_22848__$1;
(statearr_22857_22878[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (3))){
var inst_22846 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22848__$1,inst_22846);
} else {
if((state_val_22849 === (12))){
var state_22848__$1 = state_22848;
var statearr_22858_22879 = state_22848__$1;
(statearr_22858_22879[(2)] = null);

(statearr_22858_22879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (2))){
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22848__$1,(4),ch);
} else {
if((state_val_22849 === (11))){
var inst_22825 = (state_22848[(7)]);
var inst_22835 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22848__$1,(8),inst_22835,inst_22825);
} else {
if((state_val_22849 === (9))){
var state_22848__$1 = state_22848;
var statearr_22859_22880 = state_22848__$1;
(statearr_22859_22880[(2)] = tc);

(statearr_22859_22880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (5))){
var inst_22828 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22829 = cljs.core.async.close_BANG_.call(null,fc);
var state_22848__$1 = (function (){var statearr_22860 = state_22848;
(statearr_22860[(8)] = inst_22828);

return statearr_22860;
})();
var statearr_22861_22881 = state_22848__$1;
(statearr_22861_22881[(2)] = inst_22829);

(statearr_22861_22881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (14))){
var inst_22842 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
var statearr_22862_22882 = state_22848__$1;
(statearr_22862_22882[(2)] = inst_22842);

(statearr_22862_22882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (10))){
var state_22848__$1 = state_22848;
var statearr_22863_22883 = state_22848__$1;
(statearr_22863_22883[(2)] = fc);

(statearr_22863_22883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22849 === (8))){
var inst_22837 = (state_22848[(2)]);
var state_22848__$1 = state_22848;
if(cljs.core.truth_(inst_22837)){
var statearr_22864_22884 = state_22848__$1;
(statearr_22864_22884[(1)] = (12));

} else {
var statearr_22865_22885 = state_22848__$1;
(statearr_22865_22885[(1)] = (13));

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
});})(c__22422__auto___22871,tc,fc))
;
return ((function (switch__22327__auto__,c__22422__auto___22871,tc,fc){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_22866 = [null,null,null,null,null,null,null,null,null];
(statearr_22866[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_22866[(1)] = (1));

return statearr_22866;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_22848){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22867){if((e22867 instanceof Object)){
var ex__22331__auto__ = e22867;
var statearr_22868_22886 = state_22848;
(statearr_22868_22886[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22887 = state_22848;
state_22848 = G__22887;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_22848){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_22848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___22871,tc,fc))
})();
var state__22424__auto__ = (function (){var statearr_22869 = f__22423__auto__.call(null);
(statearr_22869[(6)] = c__22422__auto___22871);

return statearr_22869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___22871,tc,fc))
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
var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__){
return (function (state_22908){
var state_val_22909 = (state_22908[(1)]);
if((state_val_22909 === (7))){
var inst_22904 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22910_22928 = state_22908__$1;
(statearr_22910_22928[(2)] = inst_22904);

(statearr_22910_22928[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (1))){
var inst_22888 = init;
var state_22908__$1 = (function (){var statearr_22911 = state_22908;
(statearr_22911[(7)] = inst_22888);

return statearr_22911;
})();
var statearr_22912_22929 = state_22908__$1;
(statearr_22912_22929[(2)] = null);

(statearr_22912_22929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (4))){
var inst_22891 = (state_22908[(8)]);
var inst_22891__$1 = (state_22908[(2)]);
var inst_22892 = (inst_22891__$1 == null);
var state_22908__$1 = (function (){var statearr_22913 = state_22908;
(statearr_22913[(8)] = inst_22891__$1);

return statearr_22913;
})();
if(cljs.core.truth_(inst_22892)){
var statearr_22914_22930 = state_22908__$1;
(statearr_22914_22930[(1)] = (5));

} else {
var statearr_22915_22931 = state_22908__$1;
(statearr_22915_22931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (6))){
var inst_22891 = (state_22908[(8)]);
var inst_22895 = (state_22908[(9)]);
var inst_22888 = (state_22908[(7)]);
var inst_22895__$1 = f.call(null,inst_22888,inst_22891);
var inst_22896 = cljs.core.reduced_QMARK_.call(null,inst_22895__$1);
var state_22908__$1 = (function (){var statearr_22916 = state_22908;
(statearr_22916[(9)] = inst_22895__$1);

return statearr_22916;
})();
if(inst_22896){
var statearr_22917_22932 = state_22908__$1;
(statearr_22917_22932[(1)] = (8));

} else {
var statearr_22918_22933 = state_22908__$1;
(statearr_22918_22933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (3))){
var inst_22906 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22908__$1,inst_22906);
} else {
if((state_val_22909 === (2))){
var state_22908__$1 = state_22908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22908__$1,(4),ch);
} else {
if((state_val_22909 === (9))){
var inst_22895 = (state_22908[(9)]);
var inst_22888 = inst_22895;
var state_22908__$1 = (function (){var statearr_22919 = state_22908;
(statearr_22919[(7)] = inst_22888);

return statearr_22919;
})();
var statearr_22920_22934 = state_22908__$1;
(statearr_22920_22934[(2)] = null);

(statearr_22920_22934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (5))){
var inst_22888 = (state_22908[(7)]);
var state_22908__$1 = state_22908;
var statearr_22921_22935 = state_22908__$1;
(statearr_22921_22935[(2)] = inst_22888);

(statearr_22921_22935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (10))){
var inst_22902 = (state_22908[(2)]);
var state_22908__$1 = state_22908;
var statearr_22922_22936 = state_22908__$1;
(statearr_22922_22936[(2)] = inst_22902);

(statearr_22922_22936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22909 === (8))){
var inst_22895 = (state_22908[(9)]);
var inst_22898 = cljs.core.deref.call(null,inst_22895);
var state_22908__$1 = state_22908;
var statearr_22923_22937 = state_22908__$1;
(statearr_22923_22937[(2)] = inst_22898);

(statearr_22923_22937[(1)] = (10));


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
});})(c__22422__auto__))
;
return ((function (switch__22327__auto__,c__22422__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__22328__auto__ = null;
var cljs$core$async$reduce_$_state_machine__22328__auto____0 = (function (){
var statearr_22924 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22924[(0)] = cljs$core$async$reduce_$_state_machine__22328__auto__);

(statearr_22924[(1)] = (1));

return statearr_22924;
});
var cljs$core$async$reduce_$_state_machine__22328__auto____1 = (function (state_22908){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22925){if((e22925 instanceof Object)){
var ex__22331__auto__ = e22925;
var statearr_22926_22938 = state_22908;
(statearr_22926_22938[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22939 = state_22908;
state_22908 = G__22939;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__22328__auto__ = function(state_22908){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__22328__auto____1.call(this,state_22908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__22328__auto____0;
cljs$core$async$reduce_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__22328__auto____1;
return cljs$core$async$reduce_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__))
})();
var state__22424__auto__ = (function (){var statearr_22927 = f__22423__auto__.call(null);
(statearr_22927[(6)] = c__22422__auto__);

return statearr_22927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__))
);

return c__22422__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__,f__$1){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__,f__$1){
return (function (state_22945){
var state_val_22946 = (state_22945[(1)]);
if((state_val_22946 === (1))){
var inst_22940 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22945__$1 = state_22945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22945__$1,(2),inst_22940);
} else {
if((state_val_22946 === (2))){
var inst_22942 = (state_22945[(2)]);
var inst_22943 = f__$1.call(null,inst_22942);
var state_22945__$1 = state_22945;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22945__$1,inst_22943);
} else {
return null;
}
}
});})(c__22422__auto__,f__$1))
;
return ((function (switch__22327__auto__,c__22422__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__22328__auto__ = null;
var cljs$core$async$transduce_$_state_machine__22328__auto____0 = (function (){
var statearr_22947 = [null,null,null,null,null,null,null];
(statearr_22947[(0)] = cljs$core$async$transduce_$_state_machine__22328__auto__);

(statearr_22947[(1)] = (1));

return statearr_22947;
});
var cljs$core$async$transduce_$_state_machine__22328__auto____1 = (function (state_22945){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22948){if((e22948 instanceof Object)){
var ex__22331__auto__ = e22948;
var statearr_22949_22951 = state_22945;
(statearr_22949_22951[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22952 = state_22945;
state_22945 = G__22952;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__22328__auto__ = function(state_22945){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__22328__auto____1.call(this,state_22945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__22328__auto____0;
cljs$core$async$transduce_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__22328__auto____1;
return cljs$core$async$transduce_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__,f__$1))
})();
var state__22424__auto__ = (function (){var statearr_22950 = f__22423__auto__.call(null);
(statearr_22950[(6)] = c__22422__auto__);

return statearr_22950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__,f__$1))
);

return c__22422__auto__;
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
var G__22954 = arguments.length;
switch (G__22954) {
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
var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__){
return (function (state_22979){
var state_val_22980 = (state_22979[(1)]);
if((state_val_22980 === (7))){
var inst_22961 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
var statearr_22981_23002 = state_22979__$1;
(statearr_22981_23002[(2)] = inst_22961);

(statearr_22981_23002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (1))){
var inst_22955 = cljs.core.seq.call(null,coll);
var inst_22956 = inst_22955;
var state_22979__$1 = (function (){var statearr_22982 = state_22979;
(statearr_22982[(7)] = inst_22956);

return statearr_22982;
})();
var statearr_22983_23003 = state_22979__$1;
(statearr_22983_23003[(2)] = null);

(statearr_22983_23003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (4))){
var inst_22956 = (state_22979[(7)]);
var inst_22959 = cljs.core.first.call(null,inst_22956);
var state_22979__$1 = state_22979;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22979__$1,(7),ch,inst_22959);
} else {
if((state_val_22980 === (13))){
var inst_22973 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
var statearr_22984_23004 = state_22979__$1;
(statearr_22984_23004[(2)] = inst_22973);

(statearr_22984_23004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (6))){
var inst_22964 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
if(cljs.core.truth_(inst_22964)){
var statearr_22985_23005 = state_22979__$1;
(statearr_22985_23005[(1)] = (8));

} else {
var statearr_22986_23006 = state_22979__$1;
(statearr_22986_23006[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (3))){
var inst_22977 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22979__$1,inst_22977);
} else {
if((state_val_22980 === (12))){
var state_22979__$1 = state_22979;
var statearr_22987_23007 = state_22979__$1;
(statearr_22987_23007[(2)] = null);

(statearr_22987_23007[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (2))){
var inst_22956 = (state_22979[(7)]);
var state_22979__$1 = state_22979;
if(cljs.core.truth_(inst_22956)){
var statearr_22988_23008 = state_22979__$1;
(statearr_22988_23008[(1)] = (4));

} else {
var statearr_22989_23009 = state_22979__$1;
(statearr_22989_23009[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (11))){
var inst_22970 = cljs.core.async.close_BANG_.call(null,ch);
var state_22979__$1 = state_22979;
var statearr_22990_23010 = state_22979__$1;
(statearr_22990_23010[(2)] = inst_22970);

(statearr_22990_23010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (9))){
var state_22979__$1 = state_22979;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22991_23011 = state_22979__$1;
(statearr_22991_23011[(1)] = (11));

} else {
var statearr_22992_23012 = state_22979__$1;
(statearr_22992_23012[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (5))){
var inst_22956 = (state_22979[(7)]);
var state_22979__$1 = state_22979;
var statearr_22993_23013 = state_22979__$1;
(statearr_22993_23013[(2)] = inst_22956);

(statearr_22993_23013[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (10))){
var inst_22975 = (state_22979[(2)]);
var state_22979__$1 = state_22979;
var statearr_22994_23014 = state_22979__$1;
(statearr_22994_23014[(2)] = inst_22975);

(statearr_22994_23014[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22980 === (8))){
var inst_22956 = (state_22979[(7)]);
var inst_22966 = cljs.core.next.call(null,inst_22956);
var inst_22956__$1 = inst_22966;
var state_22979__$1 = (function (){var statearr_22995 = state_22979;
(statearr_22995[(7)] = inst_22956__$1);

return statearr_22995;
})();
var statearr_22996_23015 = state_22979__$1;
(statearr_22996_23015[(2)] = null);

(statearr_22996_23015[(1)] = (2));


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
});})(c__22422__auto__))
;
return ((function (switch__22327__auto__,c__22422__auto__){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_22997 = [null,null,null,null,null,null,null,null];
(statearr_22997[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_22997[(1)] = (1));

return statearr_22997;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_22979){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_22979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e22998){if((e22998 instanceof Object)){
var ex__22331__auto__ = e22998;
var statearr_22999_23016 = state_22979;
(statearr_22999_23016[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22998;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23017 = state_22979;
state_22979 = G__23017;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_22979){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_22979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__))
})();
var state__22424__auto__ = (function (){var statearr_23000 = f__22423__auto__.call(null);
(statearr_23000[(6)] = c__22422__auto__);

return statearr_23000;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__))
);

return c__22422__auto__;
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
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23018 = (function (ch,cs,meta23019){
this.ch = ch;
this.cs = cs;
this.meta23019 = meta23019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23020,meta23019__$1){
var self__ = this;
var _23020__$1 = this;
return (new cljs.core.async.t_cljs$core$async23018(self__.ch,self__.cs,meta23019__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23020){
var self__ = this;
var _23020__$1 = this;
return self__.meta23019;
});})(cs))
;

cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23018.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23018.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23019","meta23019",-883803029,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23018";

cljs.core.async.t_cljs$core$async23018.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23018");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23018.
 */
cljs.core.async.__GT_t_cljs$core$async23018 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23018(ch__$1,cs__$1,meta23019){
return (new cljs.core.async.t_cljs$core$async23018(ch__$1,cs__$1,meta23019));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23018(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__22422__auto___23240 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___23240,cs,m,dchan,dctr,done){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___23240,cs,m,dchan,dctr,done){
return (function (state_23155){
var state_val_23156 = (state_23155[(1)]);
if((state_val_23156 === (7))){
var inst_23151 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23157_23241 = state_23155__$1;
(statearr_23157_23241[(2)] = inst_23151);

(statearr_23157_23241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (20))){
var inst_23054 = (state_23155[(7)]);
var inst_23066 = cljs.core.first.call(null,inst_23054);
var inst_23067 = cljs.core.nth.call(null,inst_23066,(0),null);
var inst_23068 = cljs.core.nth.call(null,inst_23066,(1),null);
var state_23155__$1 = (function (){var statearr_23158 = state_23155;
(statearr_23158[(8)] = inst_23067);

return statearr_23158;
})();
if(cljs.core.truth_(inst_23068)){
var statearr_23159_23242 = state_23155__$1;
(statearr_23159_23242[(1)] = (22));

} else {
var statearr_23160_23243 = state_23155__$1;
(statearr_23160_23243[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (27))){
var inst_23096 = (state_23155[(9)]);
var inst_23023 = (state_23155[(10)]);
var inst_23098 = (state_23155[(11)]);
var inst_23103 = (state_23155[(12)]);
var inst_23103__$1 = cljs.core._nth.call(null,inst_23096,inst_23098);
var inst_23104 = cljs.core.async.put_BANG_.call(null,inst_23103__$1,inst_23023,done);
var state_23155__$1 = (function (){var statearr_23161 = state_23155;
(statearr_23161[(12)] = inst_23103__$1);

return statearr_23161;
})();
if(cljs.core.truth_(inst_23104)){
var statearr_23162_23244 = state_23155__$1;
(statearr_23162_23244[(1)] = (30));

} else {
var statearr_23163_23245 = state_23155__$1;
(statearr_23163_23245[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (1))){
var state_23155__$1 = state_23155;
var statearr_23164_23246 = state_23155__$1;
(statearr_23164_23246[(2)] = null);

(statearr_23164_23246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (24))){
var inst_23054 = (state_23155[(7)]);
var inst_23073 = (state_23155[(2)]);
var inst_23074 = cljs.core.next.call(null,inst_23054);
var inst_23032 = inst_23074;
var inst_23033 = null;
var inst_23034 = (0);
var inst_23035 = (0);
var state_23155__$1 = (function (){var statearr_23165 = state_23155;
(statearr_23165[(13)] = inst_23033);

(statearr_23165[(14)] = inst_23032);

(statearr_23165[(15)] = inst_23034);

(statearr_23165[(16)] = inst_23035);

(statearr_23165[(17)] = inst_23073);

return statearr_23165;
})();
var statearr_23166_23247 = state_23155__$1;
(statearr_23166_23247[(2)] = null);

(statearr_23166_23247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (39))){
var state_23155__$1 = state_23155;
var statearr_23170_23248 = state_23155__$1;
(statearr_23170_23248[(2)] = null);

(statearr_23170_23248[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (4))){
var inst_23023 = (state_23155[(10)]);
var inst_23023__$1 = (state_23155[(2)]);
var inst_23024 = (inst_23023__$1 == null);
var state_23155__$1 = (function (){var statearr_23171 = state_23155;
(statearr_23171[(10)] = inst_23023__$1);

return statearr_23171;
})();
if(cljs.core.truth_(inst_23024)){
var statearr_23172_23249 = state_23155__$1;
(statearr_23172_23249[(1)] = (5));

} else {
var statearr_23173_23250 = state_23155__$1;
(statearr_23173_23250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (15))){
var inst_23033 = (state_23155[(13)]);
var inst_23032 = (state_23155[(14)]);
var inst_23034 = (state_23155[(15)]);
var inst_23035 = (state_23155[(16)]);
var inst_23050 = (state_23155[(2)]);
var inst_23051 = (inst_23035 + (1));
var tmp23167 = inst_23033;
var tmp23168 = inst_23032;
var tmp23169 = inst_23034;
var inst_23032__$1 = tmp23168;
var inst_23033__$1 = tmp23167;
var inst_23034__$1 = tmp23169;
var inst_23035__$1 = inst_23051;
var state_23155__$1 = (function (){var statearr_23174 = state_23155;
(statearr_23174[(18)] = inst_23050);

(statearr_23174[(13)] = inst_23033__$1);

(statearr_23174[(14)] = inst_23032__$1);

(statearr_23174[(15)] = inst_23034__$1);

(statearr_23174[(16)] = inst_23035__$1);

return statearr_23174;
})();
var statearr_23175_23251 = state_23155__$1;
(statearr_23175_23251[(2)] = null);

(statearr_23175_23251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (21))){
var inst_23077 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23179_23252 = state_23155__$1;
(statearr_23179_23252[(2)] = inst_23077);

(statearr_23179_23252[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (31))){
var inst_23103 = (state_23155[(12)]);
var inst_23107 = done.call(null,null);
var inst_23108 = cljs.core.async.untap_STAR_.call(null,m,inst_23103);
var state_23155__$1 = (function (){var statearr_23180 = state_23155;
(statearr_23180[(19)] = inst_23107);

return statearr_23180;
})();
var statearr_23181_23253 = state_23155__$1;
(statearr_23181_23253[(2)] = inst_23108);

(statearr_23181_23253[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (32))){
var inst_23096 = (state_23155[(9)]);
var inst_23095 = (state_23155[(20)]);
var inst_23097 = (state_23155[(21)]);
var inst_23098 = (state_23155[(11)]);
var inst_23110 = (state_23155[(2)]);
var inst_23111 = (inst_23098 + (1));
var tmp23176 = inst_23096;
var tmp23177 = inst_23095;
var tmp23178 = inst_23097;
var inst_23095__$1 = tmp23177;
var inst_23096__$1 = tmp23176;
var inst_23097__$1 = tmp23178;
var inst_23098__$1 = inst_23111;
var state_23155__$1 = (function (){var statearr_23182 = state_23155;
(statearr_23182[(22)] = inst_23110);

(statearr_23182[(9)] = inst_23096__$1);

(statearr_23182[(20)] = inst_23095__$1);

(statearr_23182[(21)] = inst_23097__$1);

(statearr_23182[(11)] = inst_23098__$1);

return statearr_23182;
})();
var statearr_23183_23254 = state_23155__$1;
(statearr_23183_23254[(2)] = null);

(statearr_23183_23254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (40))){
var inst_23123 = (state_23155[(23)]);
var inst_23127 = done.call(null,null);
var inst_23128 = cljs.core.async.untap_STAR_.call(null,m,inst_23123);
var state_23155__$1 = (function (){var statearr_23184 = state_23155;
(statearr_23184[(24)] = inst_23127);

return statearr_23184;
})();
var statearr_23185_23255 = state_23155__$1;
(statearr_23185_23255[(2)] = inst_23128);

(statearr_23185_23255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (33))){
var inst_23114 = (state_23155[(25)]);
var inst_23116 = cljs.core.chunked_seq_QMARK_.call(null,inst_23114);
var state_23155__$1 = state_23155;
if(inst_23116){
var statearr_23186_23256 = state_23155__$1;
(statearr_23186_23256[(1)] = (36));

} else {
var statearr_23187_23257 = state_23155__$1;
(statearr_23187_23257[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (13))){
var inst_23044 = (state_23155[(26)]);
var inst_23047 = cljs.core.async.close_BANG_.call(null,inst_23044);
var state_23155__$1 = state_23155;
var statearr_23188_23258 = state_23155__$1;
(statearr_23188_23258[(2)] = inst_23047);

(statearr_23188_23258[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (22))){
var inst_23067 = (state_23155[(8)]);
var inst_23070 = cljs.core.async.close_BANG_.call(null,inst_23067);
var state_23155__$1 = state_23155;
var statearr_23189_23259 = state_23155__$1;
(statearr_23189_23259[(2)] = inst_23070);

(statearr_23189_23259[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (36))){
var inst_23114 = (state_23155[(25)]);
var inst_23118 = cljs.core.chunk_first.call(null,inst_23114);
var inst_23119 = cljs.core.chunk_rest.call(null,inst_23114);
var inst_23120 = cljs.core.count.call(null,inst_23118);
var inst_23095 = inst_23119;
var inst_23096 = inst_23118;
var inst_23097 = inst_23120;
var inst_23098 = (0);
var state_23155__$1 = (function (){var statearr_23190 = state_23155;
(statearr_23190[(9)] = inst_23096);

(statearr_23190[(20)] = inst_23095);

(statearr_23190[(21)] = inst_23097);

(statearr_23190[(11)] = inst_23098);

return statearr_23190;
})();
var statearr_23191_23260 = state_23155__$1;
(statearr_23191_23260[(2)] = null);

(statearr_23191_23260[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (41))){
var inst_23114 = (state_23155[(25)]);
var inst_23130 = (state_23155[(2)]);
var inst_23131 = cljs.core.next.call(null,inst_23114);
var inst_23095 = inst_23131;
var inst_23096 = null;
var inst_23097 = (0);
var inst_23098 = (0);
var state_23155__$1 = (function (){var statearr_23192 = state_23155;
(statearr_23192[(9)] = inst_23096);

(statearr_23192[(27)] = inst_23130);

(statearr_23192[(20)] = inst_23095);

(statearr_23192[(21)] = inst_23097);

(statearr_23192[(11)] = inst_23098);

return statearr_23192;
})();
var statearr_23193_23261 = state_23155__$1;
(statearr_23193_23261[(2)] = null);

(statearr_23193_23261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (43))){
var state_23155__$1 = state_23155;
var statearr_23194_23262 = state_23155__$1;
(statearr_23194_23262[(2)] = null);

(statearr_23194_23262[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (29))){
var inst_23139 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23195_23263 = state_23155__$1;
(statearr_23195_23263[(2)] = inst_23139);

(statearr_23195_23263[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (44))){
var inst_23148 = (state_23155[(2)]);
var state_23155__$1 = (function (){var statearr_23196 = state_23155;
(statearr_23196[(28)] = inst_23148);

return statearr_23196;
})();
var statearr_23197_23264 = state_23155__$1;
(statearr_23197_23264[(2)] = null);

(statearr_23197_23264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (6))){
var inst_23087 = (state_23155[(29)]);
var inst_23086 = cljs.core.deref.call(null,cs);
var inst_23087__$1 = cljs.core.keys.call(null,inst_23086);
var inst_23088 = cljs.core.count.call(null,inst_23087__$1);
var inst_23089 = cljs.core.reset_BANG_.call(null,dctr,inst_23088);
var inst_23094 = cljs.core.seq.call(null,inst_23087__$1);
var inst_23095 = inst_23094;
var inst_23096 = null;
var inst_23097 = (0);
var inst_23098 = (0);
var state_23155__$1 = (function (){var statearr_23198 = state_23155;
(statearr_23198[(29)] = inst_23087__$1);

(statearr_23198[(30)] = inst_23089);

(statearr_23198[(9)] = inst_23096);

(statearr_23198[(20)] = inst_23095);

(statearr_23198[(21)] = inst_23097);

(statearr_23198[(11)] = inst_23098);

return statearr_23198;
})();
var statearr_23199_23265 = state_23155__$1;
(statearr_23199_23265[(2)] = null);

(statearr_23199_23265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (28))){
var inst_23095 = (state_23155[(20)]);
var inst_23114 = (state_23155[(25)]);
var inst_23114__$1 = cljs.core.seq.call(null,inst_23095);
var state_23155__$1 = (function (){var statearr_23200 = state_23155;
(statearr_23200[(25)] = inst_23114__$1);

return statearr_23200;
})();
if(inst_23114__$1){
var statearr_23201_23266 = state_23155__$1;
(statearr_23201_23266[(1)] = (33));

} else {
var statearr_23202_23267 = state_23155__$1;
(statearr_23202_23267[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (25))){
var inst_23097 = (state_23155[(21)]);
var inst_23098 = (state_23155[(11)]);
var inst_23100 = (inst_23098 < inst_23097);
var inst_23101 = inst_23100;
var state_23155__$1 = state_23155;
if(cljs.core.truth_(inst_23101)){
var statearr_23203_23268 = state_23155__$1;
(statearr_23203_23268[(1)] = (27));

} else {
var statearr_23204_23269 = state_23155__$1;
(statearr_23204_23269[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (34))){
var state_23155__$1 = state_23155;
var statearr_23205_23270 = state_23155__$1;
(statearr_23205_23270[(2)] = null);

(statearr_23205_23270[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (17))){
var state_23155__$1 = state_23155;
var statearr_23206_23271 = state_23155__$1;
(statearr_23206_23271[(2)] = null);

(statearr_23206_23271[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (3))){
var inst_23153 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23155__$1,inst_23153);
} else {
if((state_val_23156 === (12))){
var inst_23082 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23207_23272 = state_23155__$1;
(statearr_23207_23272[(2)] = inst_23082);

(statearr_23207_23272[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (2))){
var state_23155__$1 = state_23155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23155__$1,(4),ch);
} else {
if((state_val_23156 === (23))){
var state_23155__$1 = state_23155;
var statearr_23208_23273 = state_23155__$1;
(statearr_23208_23273[(2)] = null);

(statearr_23208_23273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (35))){
var inst_23137 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23209_23274 = state_23155__$1;
(statearr_23209_23274[(2)] = inst_23137);

(statearr_23209_23274[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (19))){
var inst_23054 = (state_23155[(7)]);
var inst_23058 = cljs.core.chunk_first.call(null,inst_23054);
var inst_23059 = cljs.core.chunk_rest.call(null,inst_23054);
var inst_23060 = cljs.core.count.call(null,inst_23058);
var inst_23032 = inst_23059;
var inst_23033 = inst_23058;
var inst_23034 = inst_23060;
var inst_23035 = (0);
var state_23155__$1 = (function (){var statearr_23210 = state_23155;
(statearr_23210[(13)] = inst_23033);

(statearr_23210[(14)] = inst_23032);

(statearr_23210[(15)] = inst_23034);

(statearr_23210[(16)] = inst_23035);

return statearr_23210;
})();
var statearr_23211_23275 = state_23155__$1;
(statearr_23211_23275[(2)] = null);

(statearr_23211_23275[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (11))){
var inst_23054 = (state_23155[(7)]);
var inst_23032 = (state_23155[(14)]);
var inst_23054__$1 = cljs.core.seq.call(null,inst_23032);
var state_23155__$1 = (function (){var statearr_23212 = state_23155;
(statearr_23212[(7)] = inst_23054__$1);

return statearr_23212;
})();
if(inst_23054__$1){
var statearr_23213_23276 = state_23155__$1;
(statearr_23213_23276[(1)] = (16));

} else {
var statearr_23214_23277 = state_23155__$1;
(statearr_23214_23277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (9))){
var inst_23084 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23215_23278 = state_23155__$1;
(statearr_23215_23278[(2)] = inst_23084);

(statearr_23215_23278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (5))){
var inst_23030 = cljs.core.deref.call(null,cs);
var inst_23031 = cljs.core.seq.call(null,inst_23030);
var inst_23032 = inst_23031;
var inst_23033 = null;
var inst_23034 = (0);
var inst_23035 = (0);
var state_23155__$1 = (function (){var statearr_23216 = state_23155;
(statearr_23216[(13)] = inst_23033);

(statearr_23216[(14)] = inst_23032);

(statearr_23216[(15)] = inst_23034);

(statearr_23216[(16)] = inst_23035);

return statearr_23216;
})();
var statearr_23217_23279 = state_23155__$1;
(statearr_23217_23279[(2)] = null);

(statearr_23217_23279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (14))){
var state_23155__$1 = state_23155;
var statearr_23218_23280 = state_23155__$1;
(statearr_23218_23280[(2)] = null);

(statearr_23218_23280[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (45))){
var inst_23145 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23219_23281 = state_23155__$1;
(statearr_23219_23281[(2)] = inst_23145);

(statearr_23219_23281[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (26))){
var inst_23087 = (state_23155[(29)]);
var inst_23141 = (state_23155[(2)]);
var inst_23142 = cljs.core.seq.call(null,inst_23087);
var state_23155__$1 = (function (){var statearr_23220 = state_23155;
(statearr_23220[(31)] = inst_23141);

return statearr_23220;
})();
if(inst_23142){
var statearr_23221_23282 = state_23155__$1;
(statearr_23221_23282[(1)] = (42));

} else {
var statearr_23222_23283 = state_23155__$1;
(statearr_23222_23283[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (16))){
var inst_23054 = (state_23155[(7)]);
var inst_23056 = cljs.core.chunked_seq_QMARK_.call(null,inst_23054);
var state_23155__$1 = state_23155;
if(inst_23056){
var statearr_23223_23284 = state_23155__$1;
(statearr_23223_23284[(1)] = (19));

} else {
var statearr_23224_23285 = state_23155__$1;
(statearr_23224_23285[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (38))){
var inst_23134 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23225_23286 = state_23155__$1;
(statearr_23225_23286[(2)] = inst_23134);

(statearr_23225_23286[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (30))){
var state_23155__$1 = state_23155;
var statearr_23226_23287 = state_23155__$1;
(statearr_23226_23287[(2)] = null);

(statearr_23226_23287[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (10))){
var inst_23033 = (state_23155[(13)]);
var inst_23035 = (state_23155[(16)]);
var inst_23043 = cljs.core._nth.call(null,inst_23033,inst_23035);
var inst_23044 = cljs.core.nth.call(null,inst_23043,(0),null);
var inst_23045 = cljs.core.nth.call(null,inst_23043,(1),null);
var state_23155__$1 = (function (){var statearr_23227 = state_23155;
(statearr_23227[(26)] = inst_23044);

return statearr_23227;
})();
if(cljs.core.truth_(inst_23045)){
var statearr_23228_23288 = state_23155__$1;
(statearr_23228_23288[(1)] = (13));

} else {
var statearr_23229_23289 = state_23155__$1;
(statearr_23229_23289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (18))){
var inst_23080 = (state_23155[(2)]);
var state_23155__$1 = state_23155;
var statearr_23230_23290 = state_23155__$1;
(statearr_23230_23290[(2)] = inst_23080);

(statearr_23230_23290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (42))){
var state_23155__$1 = state_23155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23155__$1,(45),dchan);
} else {
if((state_val_23156 === (37))){
var inst_23023 = (state_23155[(10)]);
var inst_23123 = (state_23155[(23)]);
var inst_23114 = (state_23155[(25)]);
var inst_23123__$1 = cljs.core.first.call(null,inst_23114);
var inst_23124 = cljs.core.async.put_BANG_.call(null,inst_23123__$1,inst_23023,done);
var state_23155__$1 = (function (){var statearr_23231 = state_23155;
(statearr_23231[(23)] = inst_23123__$1);

return statearr_23231;
})();
if(cljs.core.truth_(inst_23124)){
var statearr_23232_23291 = state_23155__$1;
(statearr_23232_23291[(1)] = (39));

} else {
var statearr_23233_23292 = state_23155__$1;
(statearr_23233_23292[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23156 === (8))){
var inst_23034 = (state_23155[(15)]);
var inst_23035 = (state_23155[(16)]);
var inst_23037 = (inst_23035 < inst_23034);
var inst_23038 = inst_23037;
var state_23155__$1 = state_23155;
if(cljs.core.truth_(inst_23038)){
var statearr_23234_23293 = state_23155__$1;
(statearr_23234_23293[(1)] = (10));

} else {
var statearr_23235_23294 = state_23155__$1;
(statearr_23235_23294[(1)] = (11));

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
});})(c__22422__auto___23240,cs,m,dchan,dctr,done))
;
return ((function (switch__22327__auto__,c__22422__auto___23240,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__22328__auto__ = null;
var cljs$core$async$mult_$_state_machine__22328__auto____0 = (function (){
var statearr_23236 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23236[(0)] = cljs$core$async$mult_$_state_machine__22328__auto__);

(statearr_23236[(1)] = (1));

return statearr_23236;
});
var cljs$core$async$mult_$_state_machine__22328__auto____1 = (function (state_23155){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_23155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e23237){if((e23237 instanceof Object)){
var ex__22331__auto__ = e23237;
var statearr_23238_23295 = state_23155;
(statearr_23238_23295[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23296 = state_23155;
state_23155 = G__23296;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__22328__auto__ = function(state_23155){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__22328__auto____1.call(this,state_23155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__22328__auto____0;
cljs$core$async$mult_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__22328__auto____1;
return cljs$core$async$mult_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___23240,cs,m,dchan,dctr,done))
})();
var state__22424__auto__ = (function (){var statearr_23239 = f__22423__auto__.call(null);
(statearr_23239[(6)] = c__22422__auto___23240);

return statearr_23239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___23240,cs,m,dchan,dctr,done))
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
var G__23298 = arguments.length;
switch (G__23298) {
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
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___23310 = arguments.length;
var i__4731__auto___23311 = (0);
while(true){
if((i__4731__auto___23311 < len__4730__auto___23310)){
args__4736__auto__.push((arguments[i__4731__auto___23311]));

var G__23312 = (i__4731__auto___23311 + (1));
i__4731__auto___23311 = G__23312;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23304){
var map__23305 = p__23304;
var map__23305__$1 = (((((!((map__23305 == null))))?(((((map__23305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23305.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23305):map__23305);
var opts = map__23305__$1;
var statearr_23307_23313 = state;
(statearr_23307_23313[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__23305,map__23305__$1,opts){
return (function (val){
var statearr_23308_23314 = state;
(statearr_23308_23314[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23305,map__23305__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_23309_23315 = state;
(statearr_23309_23315[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23300){
var G__23301 = cljs.core.first.call(null,seq23300);
var seq23300__$1 = cljs.core.next.call(null,seq23300);
var G__23302 = cljs.core.first.call(null,seq23300__$1);
var seq23300__$2 = cljs.core.next.call(null,seq23300__$1);
var G__23303 = cljs.core.first.call(null,seq23300__$2);
var seq23300__$3 = cljs.core.next.call(null,seq23300__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__23301,G__23302,G__23303,seq23300__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23316 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23317){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23317 = meta23317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23318,meta23317__$1){
var self__ = this;
var _23318__$1 = this;
return (new cljs.core.async.t_cljs$core$async23316(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23317__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23318){
var self__ = this;
var _23318__$1 = this;
return self__.meta23317;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23317","meta23317",-2131538305,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23316.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23316";

cljs.core.async.t_cljs$core$async23316.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23316");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23316.
 */
cljs.core.async.__GT_t_cljs$core$async23316 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23317){
return (new cljs.core.async.t_cljs$core$async23316(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23317));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23316(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22422__auto___23480 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___23480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___23480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23420){
var state_val_23421 = (state_23420[(1)]);
if((state_val_23421 === (7))){
var inst_23335 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23422_23481 = state_23420__$1;
(statearr_23422_23481[(2)] = inst_23335);

(statearr_23422_23481[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (20))){
var inst_23347 = (state_23420[(7)]);
var state_23420__$1 = state_23420;
var statearr_23423_23482 = state_23420__$1;
(statearr_23423_23482[(2)] = inst_23347);

(statearr_23423_23482[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (27))){
var state_23420__$1 = state_23420;
var statearr_23424_23483 = state_23420__$1;
(statearr_23424_23483[(2)] = null);

(statearr_23424_23483[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (1))){
var inst_23322 = (state_23420[(8)]);
var inst_23322__$1 = calc_state.call(null);
var inst_23324 = (inst_23322__$1 == null);
var inst_23325 = cljs.core.not.call(null,inst_23324);
var state_23420__$1 = (function (){var statearr_23425 = state_23420;
(statearr_23425[(8)] = inst_23322__$1);

return statearr_23425;
})();
if(inst_23325){
var statearr_23426_23484 = state_23420__$1;
(statearr_23426_23484[(1)] = (2));

} else {
var statearr_23427_23485 = state_23420__$1;
(statearr_23427_23485[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (24))){
var inst_23371 = (state_23420[(9)]);
var inst_23394 = (state_23420[(10)]);
var inst_23380 = (state_23420[(11)]);
var inst_23394__$1 = inst_23371.call(null,inst_23380);
var state_23420__$1 = (function (){var statearr_23428 = state_23420;
(statearr_23428[(10)] = inst_23394__$1);

return statearr_23428;
})();
if(cljs.core.truth_(inst_23394__$1)){
var statearr_23429_23486 = state_23420__$1;
(statearr_23429_23486[(1)] = (29));

} else {
var statearr_23430_23487 = state_23420__$1;
(statearr_23430_23487[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (4))){
var inst_23338 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23338)){
var statearr_23431_23488 = state_23420__$1;
(statearr_23431_23488[(1)] = (8));

} else {
var statearr_23432_23489 = state_23420__$1;
(statearr_23432_23489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (15))){
var inst_23365 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23365)){
var statearr_23433_23490 = state_23420__$1;
(statearr_23433_23490[(1)] = (19));

} else {
var statearr_23434_23491 = state_23420__$1;
(statearr_23434_23491[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (21))){
var inst_23370 = (state_23420[(12)]);
var inst_23370__$1 = (state_23420[(2)]);
var inst_23371 = cljs.core.get.call(null,inst_23370__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23372 = cljs.core.get.call(null,inst_23370__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23373 = cljs.core.get.call(null,inst_23370__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23420__$1 = (function (){var statearr_23435 = state_23420;
(statearr_23435[(9)] = inst_23371);

(statearr_23435[(13)] = inst_23372);

(statearr_23435[(12)] = inst_23370__$1);

return statearr_23435;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23420__$1,(22),inst_23373);
} else {
if((state_val_23421 === (31))){
var inst_23402 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23402)){
var statearr_23436_23492 = state_23420__$1;
(statearr_23436_23492[(1)] = (32));

} else {
var statearr_23437_23493 = state_23420__$1;
(statearr_23437_23493[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (32))){
var inst_23379 = (state_23420[(14)]);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23420__$1,(35),out,inst_23379);
} else {
if((state_val_23421 === (33))){
var inst_23370 = (state_23420[(12)]);
var inst_23347 = inst_23370;
var state_23420__$1 = (function (){var statearr_23438 = state_23420;
(statearr_23438[(7)] = inst_23347);

return statearr_23438;
})();
var statearr_23439_23494 = state_23420__$1;
(statearr_23439_23494[(2)] = null);

(statearr_23439_23494[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (13))){
var inst_23347 = (state_23420[(7)]);
var inst_23354 = inst_23347.cljs$lang$protocol_mask$partition0$;
var inst_23355 = (inst_23354 & (64));
var inst_23356 = inst_23347.cljs$core$ISeq$;
var inst_23357 = (cljs.core.PROTOCOL_SENTINEL === inst_23356);
var inst_23358 = ((inst_23355) || (inst_23357));
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23358)){
var statearr_23440_23495 = state_23420__$1;
(statearr_23440_23495[(1)] = (16));

} else {
var statearr_23441_23496 = state_23420__$1;
(statearr_23441_23496[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (22))){
var inst_23379 = (state_23420[(14)]);
var inst_23380 = (state_23420[(11)]);
var inst_23378 = (state_23420[(2)]);
var inst_23379__$1 = cljs.core.nth.call(null,inst_23378,(0),null);
var inst_23380__$1 = cljs.core.nth.call(null,inst_23378,(1),null);
var inst_23381 = (inst_23379__$1 == null);
var inst_23382 = cljs.core._EQ_.call(null,inst_23380__$1,change);
var inst_23383 = ((inst_23381) || (inst_23382));
var state_23420__$1 = (function (){var statearr_23442 = state_23420;
(statearr_23442[(14)] = inst_23379__$1);

(statearr_23442[(11)] = inst_23380__$1);

return statearr_23442;
})();
if(cljs.core.truth_(inst_23383)){
var statearr_23443_23497 = state_23420__$1;
(statearr_23443_23497[(1)] = (23));

} else {
var statearr_23444_23498 = state_23420__$1;
(statearr_23444_23498[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (36))){
var inst_23370 = (state_23420[(12)]);
var inst_23347 = inst_23370;
var state_23420__$1 = (function (){var statearr_23445 = state_23420;
(statearr_23445[(7)] = inst_23347);

return statearr_23445;
})();
var statearr_23446_23499 = state_23420__$1;
(statearr_23446_23499[(2)] = null);

(statearr_23446_23499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (29))){
var inst_23394 = (state_23420[(10)]);
var state_23420__$1 = state_23420;
var statearr_23447_23500 = state_23420__$1;
(statearr_23447_23500[(2)] = inst_23394);

(statearr_23447_23500[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (6))){
var state_23420__$1 = state_23420;
var statearr_23448_23501 = state_23420__$1;
(statearr_23448_23501[(2)] = false);

(statearr_23448_23501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (28))){
var inst_23390 = (state_23420[(2)]);
var inst_23391 = calc_state.call(null);
var inst_23347 = inst_23391;
var state_23420__$1 = (function (){var statearr_23449 = state_23420;
(statearr_23449[(7)] = inst_23347);

(statearr_23449[(15)] = inst_23390);

return statearr_23449;
})();
var statearr_23450_23502 = state_23420__$1;
(statearr_23450_23502[(2)] = null);

(statearr_23450_23502[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (25))){
var inst_23416 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23451_23503 = state_23420__$1;
(statearr_23451_23503[(2)] = inst_23416);

(statearr_23451_23503[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (34))){
var inst_23414 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23452_23504 = state_23420__$1;
(statearr_23452_23504[(2)] = inst_23414);

(statearr_23452_23504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (17))){
var state_23420__$1 = state_23420;
var statearr_23453_23505 = state_23420__$1;
(statearr_23453_23505[(2)] = false);

(statearr_23453_23505[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (3))){
var state_23420__$1 = state_23420;
var statearr_23454_23506 = state_23420__$1;
(statearr_23454_23506[(2)] = false);

(statearr_23454_23506[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (12))){
var inst_23418 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23420__$1,inst_23418);
} else {
if((state_val_23421 === (2))){
var inst_23322 = (state_23420[(8)]);
var inst_23327 = inst_23322.cljs$lang$protocol_mask$partition0$;
var inst_23328 = (inst_23327 & (64));
var inst_23329 = inst_23322.cljs$core$ISeq$;
var inst_23330 = (cljs.core.PROTOCOL_SENTINEL === inst_23329);
var inst_23331 = ((inst_23328) || (inst_23330));
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23331)){
var statearr_23455_23507 = state_23420__$1;
(statearr_23455_23507[(1)] = (5));

} else {
var statearr_23456_23508 = state_23420__$1;
(statearr_23456_23508[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (23))){
var inst_23379 = (state_23420[(14)]);
var inst_23385 = (inst_23379 == null);
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23385)){
var statearr_23457_23509 = state_23420__$1;
(statearr_23457_23509[(1)] = (26));

} else {
var statearr_23458_23510 = state_23420__$1;
(statearr_23458_23510[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (35))){
var inst_23405 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
if(cljs.core.truth_(inst_23405)){
var statearr_23459_23511 = state_23420__$1;
(statearr_23459_23511[(1)] = (36));

} else {
var statearr_23460_23512 = state_23420__$1;
(statearr_23460_23512[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (19))){
var inst_23347 = (state_23420[(7)]);
var inst_23367 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23347);
var state_23420__$1 = state_23420;
var statearr_23461_23513 = state_23420__$1;
(statearr_23461_23513[(2)] = inst_23367);

(statearr_23461_23513[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (11))){
var inst_23347 = (state_23420[(7)]);
var inst_23351 = (inst_23347 == null);
var inst_23352 = cljs.core.not.call(null,inst_23351);
var state_23420__$1 = state_23420;
if(inst_23352){
var statearr_23462_23514 = state_23420__$1;
(statearr_23462_23514[(1)] = (13));

} else {
var statearr_23463_23515 = state_23420__$1;
(statearr_23463_23515[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (9))){
var inst_23322 = (state_23420[(8)]);
var state_23420__$1 = state_23420;
var statearr_23464_23516 = state_23420__$1;
(statearr_23464_23516[(2)] = inst_23322);

(statearr_23464_23516[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (5))){
var state_23420__$1 = state_23420;
var statearr_23465_23517 = state_23420__$1;
(statearr_23465_23517[(2)] = true);

(statearr_23465_23517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (14))){
var state_23420__$1 = state_23420;
var statearr_23466_23518 = state_23420__$1;
(statearr_23466_23518[(2)] = false);

(statearr_23466_23518[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (26))){
var inst_23380 = (state_23420[(11)]);
var inst_23387 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23380);
var state_23420__$1 = state_23420;
var statearr_23467_23519 = state_23420__$1;
(statearr_23467_23519[(2)] = inst_23387);

(statearr_23467_23519[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (16))){
var state_23420__$1 = state_23420;
var statearr_23468_23520 = state_23420__$1;
(statearr_23468_23520[(2)] = true);

(statearr_23468_23520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (38))){
var inst_23410 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23469_23521 = state_23420__$1;
(statearr_23469_23521[(2)] = inst_23410);

(statearr_23469_23521[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (30))){
var inst_23371 = (state_23420[(9)]);
var inst_23380 = (state_23420[(11)]);
var inst_23372 = (state_23420[(13)]);
var inst_23397 = cljs.core.empty_QMARK_.call(null,inst_23371);
var inst_23398 = inst_23372.call(null,inst_23380);
var inst_23399 = cljs.core.not.call(null,inst_23398);
var inst_23400 = ((inst_23397) && (inst_23399));
var state_23420__$1 = state_23420;
var statearr_23470_23522 = state_23420__$1;
(statearr_23470_23522[(2)] = inst_23400);

(statearr_23470_23522[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (10))){
var inst_23322 = (state_23420[(8)]);
var inst_23343 = (state_23420[(2)]);
var inst_23344 = cljs.core.get.call(null,inst_23343,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23345 = cljs.core.get.call(null,inst_23343,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23346 = cljs.core.get.call(null,inst_23343,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23347 = inst_23322;
var state_23420__$1 = (function (){var statearr_23471 = state_23420;
(statearr_23471[(16)] = inst_23345);

(statearr_23471[(17)] = inst_23344);

(statearr_23471[(7)] = inst_23347);

(statearr_23471[(18)] = inst_23346);

return statearr_23471;
})();
var statearr_23472_23523 = state_23420__$1;
(statearr_23472_23523[(2)] = null);

(statearr_23472_23523[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (18))){
var inst_23362 = (state_23420[(2)]);
var state_23420__$1 = state_23420;
var statearr_23473_23524 = state_23420__$1;
(statearr_23473_23524[(2)] = inst_23362);

(statearr_23473_23524[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (37))){
var state_23420__$1 = state_23420;
var statearr_23474_23525 = state_23420__$1;
(statearr_23474_23525[(2)] = null);

(statearr_23474_23525[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23421 === (8))){
var inst_23322 = (state_23420[(8)]);
var inst_23340 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23322);
var state_23420__$1 = state_23420;
var statearr_23475_23526 = state_23420__$1;
(statearr_23475_23526[(2)] = inst_23340);

(statearr_23475_23526[(1)] = (10));


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
});})(c__22422__auto___23480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__22327__auto__,c__22422__auto___23480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__22328__auto__ = null;
var cljs$core$async$mix_$_state_machine__22328__auto____0 = (function (){
var statearr_23476 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23476[(0)] = cljs$core$async$mix_$_state_machine__22328__auto__);

(statearr_23476[(1)] = (1));

return statearr_23476;
});
var cljs$core$async$mix_$_state_machine__22328__auto____1 = (function (state_23420){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_23420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e23477){if((e23477 instanceof Object)){
var ex__22331__auto__ = e23477;
var statearr_23478_23527 = state_23420;
(statearr_23478_23527[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23477;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23528 = state_23420;
state_23420 = G__23528;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__22328__auto__ = function(state_23420){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__22328__auto____1.call(this,state_23420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__22328__auto____0;
cljs$core$async$mix_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__22328__auto____1;
return cljs$core$async$mix_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___23480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__22424__auto__ = (function (){var statearr_23479 = f__22423__auto__.call(null);
(statearr_23479[(6)] = c__22422__auto___23480);

return statearr_23479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___23480,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__23530 = arguments.length;
switch (G__23530) {
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
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
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
var G__23534 = arguments.length;
switch (G__23534) {
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
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__23532_SHARP_){
if(cljs.core.truth_(p1__23532_SHARP_.call(null,topic))){
return p1__23532_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23532_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23535 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23536){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23536 = meta23536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23537,meta23536__$1){
var self__ = this;
var _23537__$1 = this;
return (new cljs.core.async.t_cljs$core$async23535(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23536__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23537){
var self__ = this;
var _23537__$1 = this;
return self__.meta23536;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23536","meta23536",814220496,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23535.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23535";

cljs.core.async.t_cljs$core$async23535.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23535");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23535.
 */
cljs.core.async.__GT_t_cljs$core$async23535 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23536){
return (new cljs.core.async.t_cljs$core$async23535(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23536));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23535(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__22422__auto___23655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___23655,mults,ensure_mult,p){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___23655,mults,ensure_mult,p){
return (function (state_23609){
var state_val_23610 = (state_23609[(1)]);
if((state_val_23610 === (7))){
var inst_23605 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
var statearr_23611_23656 = state_23609__$1;
(statearr_23611_23656[(2)] = inst_23605);

(statearr_23611_23656[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (20))){
var state_23609__$1 = state_23609;
var statearr_23612_23657 = state_23609__$1;
(statearr_23612_23657[(2)] = null);

(statearr_23612_23657[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (1))){
var state_23609__$1 = state_23609;
var statearr_23613_23658 = state_23609__$1;
(statearr_23613_23658[(2)] = null);

(statearr_23613_23658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (24))){
var inst_23588 = (state_23609[(7)]);
var inst_23597 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23588);
var state_23609__$1 = state_23609;
var statearr_23614_23659 = state_23609__$1;
(statearr_23614_23659[(2)] = inst_23597);

(statearr_23614_23659[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (4))){
var inst_23540 = (state_23609[(8)]);
var inst_23540__$1 = (state_23609[(2)]);
var inst_23541 = (inst_23540__$1 == null);
var state_23609__$1 = (function (){var statearr_23615 = state_23609;
(statearr_23615[(8)] = inst_23540__$1);

return statearr_23615;
})();
if(cljs.core.truth_(inst_23541)){
var statearr_23616_23660 = state_23609__$1;
(statearr_23616_23660[(1)] = (5));

} else {
var statearr_23617_23661 = state_23609__$1;
(statearr_23617_23661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (15))){
var inst_23582 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
var statearr_23618_23662 = state_23609__$1;
(statearr_23618_23662[(2)] = inst_23582);

(statearr_23618_23662[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (21))){
var inst_23602 = (state_23609[(2)]);
var state_23609__$1 = (function (){var statearr_23619 = state_23609;
(statearr_23619[(9)] = inst_23602);

return statearr_23619;
})();
var statearr_23620_23663 = state_23609__$1;
(statearr_23620_23663[(2)] = null);

(statearr_23620_23663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (13))){
var inst_23564 = (state_23609[(10)]);
var inst_23566 = cljs.core.chunked_seq_QMARK_.call(null,inst_23564);
var state_23609__$1 = state_23609;
if(inst_23566){
var statearr_23621_23664 = state_23609__$1;
(statearr_23621_23664[(1)] = (16));

} else {
var statearr_23622_23665 = state_23609__$1;
(statearr_23622_23665[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (22))){
var inst_23594 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
if(cljs.core.truth_(inst_23594)){
var statearr_23623_23666 = state_23609__$1;
(statearr_23623_23666[(1)] = (23));

} else {
var statearr_23624_23667 = state_23609__$1;
(statearr_23624_23667[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (6))){
var inst_23590 = (state_23609[(11)]);
var inst_23588 = (state_23609[(7)]);
var inst_23540 = (state_23609[(8)]);
var inst_23588__$1 = topic_fn.call(null,inst_23540);
var inst_23589 = cljs.core.deref.call(null,mults);
var inst_23590__$1 = cljs.core.get.call(null,inst_23589,inst_23588__$1);
var state_23609__$1 = (function (){var statearr_23625 = state_23609;
(statearr_23625[(11)] = inst_23590__$1);

(statearr_23625[(7)] = inst_23588__$1);

return statearr_23625;
})();
if(cljs.core.truth_(inst_23590__$1)){
var statearr_23626_23668 = state_23609__$1;
(statearr_23626_23668[(1)] = (19));

} else {
var statearr_23627_23669 = state_23609__$1;
(statearr_23627_23669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (25))){
var inst_23599 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
var statearr_23628_23670 = state_23609__$1;
(statearr_23628_23670[(2)] = inst_23599);

(statearr_23628_23670[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (17))){
var inst_23564 = (state_23609[(10)]);
var inst_23573 = cljs.core.first.call(null,inst_23564);
var inst_23574 = cljs.core.async.muxch_STAR_.call(null,inst_23573);
var inst_23575 = cljs.core.async.close_BANG_.call(null,inst_23574);
var inst_23576 = cljs.core.next.call(null,inst_23564);
var inst_23550 = inst_23576;
var inst_23551 = null;
var inst_23552 = (0);
var inst_23553 = (0);
var state_23609__$1 = (function (){var statearr_23629 = state_23609;
(statearr_23629[(12)] = inst_23553);

(statearr_23629[(13)] = inst_23551);

(statearr_23629[(14)] = inst_23575);

(statearr_23629[(15)] = inst_23550);

(statearr_23629[(16)] = inst_23552);

return statearr_23629;
})();
var statearr_23630_23671 = state_23609__$1;
(statearr_23630_23671[(2)] = null);

(statearr_23630_23671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (3))){
var inst_23607 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23609__$1,inst_23607);
} else {
if((state_val_23610 === (12))){
var inst_23584 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
var statearr_23631_23672 = state_23609__$1;
(statearr_23631_23672[(2)] = inst_23584);

(statearr_23631_23672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (2))){
var state_23609__$1 = state_23609;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23609__$1,(4),ch);
} else {
if((state_val_23610 === (23))){
var state_23609__$1 = state_23609;
var statearr_23632_23673 = state_23609__$1;
(statearr_23632_23673[(2)] = null);

(statearr_23632_23673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (19))){
var inst_23590 = (state_23609[(11)]);
var inst_23540 = (state_23609[(8)]);
var inst_23592 = cljs.core.async.muxch_STAR_.call(null,inst_23590);
var state_23609__$1 = state_23609;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23609__$1,(22),inst_23592,inst_23540);
} else {
if((state_val_23610 === (11))){
var inst_23564 = (state_23609[(10)]);
var inst_23550 = (state_23609[(15)]);
var inst_23564__$1 = cljs.core.seq.call(null,inst_23550);
var state_23609__$1 = (function (){var statearr_23633 = state_23609;
(statearr_23633[(10)] = inst_23564__$1);

return statearr_23633;
})();
if(inst_23564__$1){
var statearr_23634_23674 = state_23609__$1;
(statearr_23634_23674[(1)] = (13));

} else {
var statearr_23635_23675 = state_23609__$1;
(statearr_23635_23675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (9))){
var inst_23586 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
var statearr_23636_23676 = state_23609__$1;
(statearr_23636_23676[(2)] = inst_23586);

(statearr_23636_23676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (5))){
var inst_23547 = cljs.core.deref.call(null,mults);
var inst_23548 = cljs.core.vals.call(null,inst_23547);
var inst_23549 = cljs.core.seq.call(null,inst_23548);
var inst_23550 = inst_23549;
var inst_23551 = null;
var inst_23552 = (0);
var inst_23553 = (0);
var state_23609__$1 = (function (){var statearr_23637 = state_23609;
(statearr_23637[(12)] = inst_23553);

(statearr_23637[(13)] = inst_23551);

(statearr_23637[(15)] = inst_23550);

(statearr_23637[(16)] = inst_23552);

return statearr_23637;
})();
var statearr_23638_23677 = state_23609__$1;
(statearr_23638_23677[(2)] = null);

(statearr_23638_23677[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (14))){
var state_23609__$1 = state_23609;
var statearr_23642_23678 = state_23609__$1;
(statearr_23642_23678[(2)] = null);

(statearr_23642_23678[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (16))){
var inst_23564 = (state_23609[(10)]);
var inst_23568 = cljs.core.chunk_first.call(null,inst_23564);
var inst_23569 = cljs.core.chunk_rest.call(null,inst_23564);
var inst_23570 = cljs.core.count.call(null,inst_23568);
var inst_23550 = inst_23569;
var inst_23551 = inst_23568;
var inst_23552 = inst_23570;
var inst_23553 = (0);
var state_23609__$1 = (function (){var statearr_23643 = state_23609;
(statearr_23643[(12)] = inst_23553);

(statearr_23643[(13)] = inst_23551);

(statearr_23643[(15)] = inst_23550);

(statearr_23643[(16)] = inst_23552);

return statearr_23643;
})();
var statearr_23644_23679 = state_23609__$1;
(statearr_23644_23679[(2)] = null);

(statearr_23644_23679[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (10))){
var inst_23553 = (state_23609[(12)]);
var inst_23551 = (state_23609[(13)]);
var inst_23550 = (state_23609[(15)]);
var inst_23552 = (state_23609[(16)]);
var inst_23558 = cljs.core._nth.call(null,inst_23551,inst_23553);
var inst_23559 = cljs.core.async.muxch_STAR_.call(null,inst_23558);
var inst_23560 = cljs.core.async.close_BANG_.call(null,inst_23559);
var inst_23561 = (inst_23553 + (1));
var tmp23639 = inst_23551;
var tmp23640 = inst_23550;
var tmp23641 = inst_23552;
var inst_23550__$1 = tmp23640;
var inst_23551__$1 = tmp23639;
var inst_23552__$1 = tmp23641;
var inst_23553__$1 = inst_23561;
var state_23609__$1 = (function (){var statearr_23645 = state_23609;
(statearr_23645[(17)] = inst_23560);

(statearr_23645[(12)] = inst_23553__$1);

(statearr_23645[(13)] = inst_23551__$1);

(statearr_23645[(15)] = inst_23550__$1);

(statearr_23645[(16)] = inst_23552__$1);

return statearr_23645;
})();
var statearr_23646_23680 = state_23609__$1;
(statearr_23646_23680[(2)] = null);

(statearr_23646_23680[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (18))){
var inst_23579 = (state_23609[(2)]);
var state_23609__$1 = state_23609;
var statearr_23647_23681 = state_23609__$1;
(statearr_23647_23681[(2)] = inst_23579);

(statearr_23647_23681[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23610 === (8))){
var inst_23553 = (state_23609[(12)]);
var inst_23552 = (state_23609[(16)]);
var inst_23555 = (inst_23553 < inst_23552);
var inst_23556 = inst_23555;
var state_23609__$1 = state_23609;
if(cljs.core.truth_(inst_23556)){
var statearr_23648_23682 = state_23609__$1;
(statearr_23648_23682[(1)] = (10));

} else {
var statearr_23649_23683 = state_23609__$1;
(statearr_23649_23683[(1)] = (11));

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
});})(c__22422__auto___23655,mults,ensure_mult,p))
;
return ((function (switch__22327__auto__,c__22422__auto___23655,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_23650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23650[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_23650[(1)] = (1));

return statearr_23650;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_23609){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_23609);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e23651){if((e23651 instanceof Object)){
var ex__22331__auto__ = e23651;
var statearr_23652_23684 = state_23609;
(statearr_23652_23684[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23609);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23685 = state_23609;
state_23609 = G__23685;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_23609){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_23609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___23655,mults,ensure_mult,p))
})();
var state__22424__auto__ = (function (){var statearr_23653 = f__22423__auto__.call(null);
(statearr_23653[(6)] = c__22422__auto___23655);

return statearr_23653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___23655,mults,ensure_mult,p))
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
var G__23687 = arguments.length;
switch (G__23687) {
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
var G__23690 = arguments.length;
switch (G__23690) {
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
var G__23693 = arguments.length;
switch (G__23693) {
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
var c__22422__auto___23760 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___23760,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___23760,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23732){
var state_val_23733 = (state_23732[(1)]);
if((state_val_23733 === (7))){
var state_23732__$1 = state_23732;
var statearr_23734_23761 = state_23732__$1;
(statearr_23734_23761[(2)] = null);

(statearr_23734_23761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (1))){
var state_23732__$1 = state_23732;
var statearr_23735_23762 = state_23732__$1;
(statearr_23735_23762[(2)] = null);

(statearr_23735_23762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (4))){
var inst_23696 = (state_23732[(7)]);
var inst_23698 = (inst_23696 < cnt);
var state_23732__$1 = state_23732;
if(cljs.core.truth_(inst_23698)){
var statearr_23736_23763 = state_23732__$1;
(statearr_23736_23763[(1)] = (6));

} else {
var statearr_23737_23764 = state_23732__$1;
(statearr_23737_23764[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (15))){
var inst_23728 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
var statearr_23738_23765 = state_23732__$1;
(statearr_23738_23765[(2)] = inst_23728);

(statearr_23738_23765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (13))){
var inst_23721 = cljs.core.async.close_BANG_.call(null,out);
var state_23732__$1 = state_23732;
var statearr_23739_23766 = state_23732__$1;
(statearr_23739_23766[(2)] = inst_23721);

(statearr_23739_23766[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (6))){
var state_23732__$1 = state_23732;
var statearr_23740_23767 = state_23732__$1;
(statearr_23740_23767[(2)] = null);

(statearr_23740_23767[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (3))){
var inst_23730 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23732__$1,inst_23730);
} else {
if((state_val_23733 === (12))){
var inst_23718 = (state_23732[(8)]);
var inst_23718__$1 = (state_23732[(2)]);
var inst_23719 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23718__$1);
var state_23732__$1 = (function (){var statearr_23741 = state_23732;
(statearr_23741[(8)] = inst_23718__$1);

return statearr_23741;
})();
if(cljs.core.truth_(inst_23719)){
var statearr_23742_23768 = state_23732__$1;
(statearr_23742_23768[(1)] = (13));

} else {
var statearr_23743_23769 = state_23732__$1;
(statearr_23743_23769[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (2))){
var inst_23695 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23696 = (0);
var state_23732__$1 = (function (){var statearr_23744 = state_23732;
(statearr_23744[(7)] = inst_23696);

(statearr_23744[(9)] = inst_23695);

return statearr_23744;
})();
var statearr_23745_23770 = state_23732__$1;
(statearr_23745_23770[(2)] = null);

(statearr_23745_23770[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (11))){
var inst_23696 = (state_23732[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23732,(10),Object,null,(9));
var inst_23705 = chs__$1.call(null,inst_23696);
var inst_23706 = done.call(null,inst_23696);
var inst_23707 = cljs.core.async.take_BANG_.call(null,inst_23705,inst_23706);
var state_23732__$1 = state_23732;
var statearr_23746_23771 = state_23732__$1;
(statearr_23746_23771[(2)] = inst_23707);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (9))){
var inst_23696 = (state_23732[(7)]);
var inst_23709 = (state_23732[(2)]);
var inst_23710 = (inst_23696 + (1));
var inst_23696__$1 = inst_23710;
var state_23732__$1 = (function (){var statearr_23747 = state_23732;
(statearr_23747[(10)] = inst_23709);

(statearr_23747[(7)] = inst_23696__$1);

return statearr_23747;
})();
var statearr_23748_23772 = state_23732__$1;
(statearr_23748_23772[(2)] = null);

(statearr_23748_23772[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (5))){
var inst_23716 = (state_23732[(2)]);
var state_23732__$1 = (function (){var statearr_23749 = state_23732;
(statearr_23749[(11)] = inst_23716);

return statearr_23749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23732__$1,(12),dchan);
} else {
if((state_val_23733 === (14))){
var inst_23718 = (state_23732[(8)]);
var inst_23723 = cljs.core.apply.call(null,f,inst_23718);
var state_23732__$1 = state_23732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23732__$1,(16),out,inst_23723);
} else {
if((state_val_23733 === (16))){
var inst_23725 = (state_23732[(2)]);
var state_23732__$1 = (function (){var statearr_23750 = state_23732;
(statearr_23750[(12)] = inst_23725);

return statearr_23750;
})();
var statearr_23751_23773 = state_23732__$1;
(statearr_23751_23773[(2)] = null);

(statearr_23751_23773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (10))){
var inst_23700 = (state_23732[(2)]);
var inst_23701 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23732__$1 = (function (){var statearr_23752 = state_23732;
(statearr_23752[(13)] = inst_23700);

return statearr_23752;
})();
var statearr_23753_23774 = state_23732__$1;
(statearr_23753_23774[(2)] = inst_23701);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23732__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23733 === (8))){
var inst_23714 = (state_23732[(2)]);
var state_23732__$1 = state_23732;
var statearr_23754_23775 = state_23732__$1;
(statearr_23754_23775[(2)] = inst_23714);

(statearr_23754_23775[(1)] = (5));


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
});})(c__22422__auto___23760,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__22327__auto__,c__22422__auto___23760,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_23755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23755[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_23755[(1)] = (1));

return statearr_23755;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_23732){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_23732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e23756){if((e23756 instanceof Object)){
var ex__22331__auto__ = e23756;
var statearr_23757_23776 = state_23732;
(statearr_23757_23776[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23777 = state_23732;
state_23732 = G__23777;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_23732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_23732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___23760,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__22424__auto__ = (function (){var statearr_23758 = f__22423__auto__.call(null);
(statearr_23758[(6)] = c__22422__auto___23760);

return statearr_23758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___23760,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__23780 = arguments.length;
switch (G__23780) {
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
var c__22422__auto___23834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___23834,out){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___23834,out){
return (function (state_23812){
var state_val_23813 = (state_23812[(1)]);
if((state_val_23813 === (7))){
var inst_23791 = (state_23812[(7)]);
var inst_23792 = (state_23812[(8)]);
var inst_23791__$1 = (state_23812[(2)]);
var inst_23792__$1 = cljs.core.nth.call(null,inst_23791__$1,(0),null);
var inst_23793 = cljs.core.nth.call(null,inst_23791__$1,(1),null);
var inst_23794 = (inst_23792__$1 == null);
var state_23812__$1 = (function (){var statearr_23814 = state_23812;
(statearr_23814[(7)] = inst_23791__$1);

(statearr_23814[(9)] = inst_23793);

(statearr_23814[(8)] = inst_23792__$1);

return statearr_23814;
})();
if(cljs.core.truth_(inst_23794)){
var statearr_23815_23835 = state_23812__$1;
(statearr_23815_23835[(1)] = (8));

} else {
var statearr_23816_23836 = state_23812__$1;
(statearr_23816_23836[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (1))){
var inst_23781 = cljs.core.vec.call(null,chs);
var inst_23782 = inst_23781;
var state_23812__$1 = (function (){var statearr_23817 = state_23812;
(statearr_23817[(10)] = inst_23782);

return statearr_23817;
})();
var statearr_23818_23837 = state_23812__$1;
(statearr_23818_23837[(2)] = null);

(statearr_23818_23837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (4))){
var inst_23782 = (state_23812[(10)]);
var state_23812__$1 = state_23812;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23812__$1,(7),inst_23782);
} else {
if((state_val_23813 === (6))){
var inst_23808 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23819_23838 = state_23812__$1;
(statearr_23819_23838[(2)] = inst_23808);

(statearr_23819_23838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (3))){
var inst_23810 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23812__$1,inst_23810);
} else {
if((state_val_23813 === (2))){
var inst_23782 = (state_23812[(10)]);
var inst_23784 = cljs.core.count.call(null,inst_23782);
var inst_23785 = (inst_23784 > (0));
var state_23812__$1 = state_23812;
if(cljs.core.truth_(inst_23785)){
var statearr_23821_23839 = state_23812__$1;
(statearr_23821_23839[(1)] = (4));

} else {
var statearr_23822_23840 = state_23812__$1;
(statearr_23822_23840[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (11))){
var inst_23782 = (state_23812[(10)]);
var inst_23801 = (state_23812[(2)]);
var tmp23820 = inst_23782;
var inst_23782__$1 = tmp23820;
var state_23812__$1 = (function (){var statearr_23823 = state_23812;
(statearr_23823[(11)] = inst_23801);

(statearr_23823[(10)] = inst_23782__$1);

return statearr_23823;
})();
var statearr_23824_23841 = state_23812__$1;
(statearr_23824_23841[(2)] = null);

(statearr_23824_23841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (9))){
var inst_23792 = (state_23812[(8)]);
var state_23812__$1 = state_23812;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23812__$1,(11),out,inst_23792);
} else {
if((state_val_23813 === (5))){
var inst_23806 = cljs.core.async.close_BANG_.call(null,out);
var state_23812__$1 = state_23812;
var statearr_23825_23842 = state_23812__$1;
(statearr_23825_23842[(2)] = inst_23806);

(statearr_23825_23842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (10))){
var inst_23804 = (state_23812[(2)]);
var state_23812__$1 = state_23812;
var statearr_23826_23843 = state_23812__$1;
(statearr_23826_23843[(2)] = inst_23804);

(statearr_23826_23843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23813 === (8))){
var inst_23791 = (state_23812[(7)]);
var inst_23782 = (state_23812[(10)]);
var inst_23793 = (state_23812[(9)]);
var inst_23792 = (state_23812[(8)]);
var inst_23796 = (function (){var cs = inst_23782;
var vec__23787 = inst_23791;
var v = inst_23792;
var c = inst_23793;
return ((function (cs,vec__23787,v,c,inst_23791,inst_23782,inst_23793,inst_23792,state_val_23813,c__22422__auto___23834,out){
return (function (p1__23778_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23778_SHARP_);
});
;})(cs,vec__23787,v,c,inst_23791,inst_23782,inst_23793,inst_23792,state_val_23813,c__22422__auto___23834,out))
})();
var inst_23797 = cljs.core.filterv.call(null,inst_23796,inst_23782);
var inst_23782__$1 = inst_23797;
var state_23812__$1 = (function (){var statearr_23827 = state_23812;
(statearr_23827[(10)] = inst_23782__$1);

return statearr_23827;
})();
var statearr_23828_23844 = state_23812__$1;
(statearr_23828_23844[(2)] = null);

(statearr_23828_23844[(1)] = (2));


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
});})(c__22422__auto___23834,out))
;
return ((function (switch__22327__auto__,c__22422__auto___23834,out){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_23829 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23829[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_23829[(1)] = (1));

return statearr_23829;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_23812){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_23812);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e23830){if((e23830 instanceof Object)){
var ex__22331__auto__ = e23830;
var statearr_23831_23845 = state_23812;
(statearr_23831_23845[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23812);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23846 = state_23812;
state_23812 = G__23846;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_23812){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_23812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___23834,out))
})();
var state__22424__auto__ = (function (){var statearr_23832 = f__22423__auto__.call(null);
(statearr_23832[(6)] = c__22422__auto___23834);

return statearr_23832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___23834,out))
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
var G__23848 = arguments.length;
switch (G__23848) {
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
var c__22422__auto___23893 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___23893,out){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___23893,out){
return (function (state_23872){
var state_val_23873 = (state_23872[(1)]);
if((state_val_23873 === (7))){
var inst_23854 = (state_23872[(7)]);
var inst_23854__$1 = (state_23872[(2)]);
var inst_23855 = (inst_23854__$1 == null);
var inst_23856 = cljs.core.not.call(null,inst_23855);
var state_23872__$1 = (function (){var statearr_23874 = state_23872;
(statearr_23874[(7)] = inst_23854__$1);

return statearr_23874;
})();
if(inst_23856){
var statearr_23875_23894 = state_23872__$1;
(statearr_23875_23894[(1)] = (8));

} else {
var statearr_23876_23895 = state_23872__$1;
(statearr_23876_23895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (1))){
var inst_23849 = (0);
var state_23872__$1 = (function (){var statearr_23877 = state_23872;
(statearr_23877[(8)] = inst_23849);

return statearr_23877;
})();
var statearr_23878_23896 = state_23872__$1;
(statearr_23878_23896[(2)] = null);

(statearr_23878_23896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (4))){
var state_23872__$1 = state_23872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23872__$1,(7),ch);
} else {
if((state_val_23873 === (6))){
var inst_23867 = (state_23872[(2)]);
var state_23872__$1 = state_23872;
var statearr_23879_23897 = state_23872__$1;
(statearr_23879_23897[(2)] = inst_23867);

(statearr_23879_23897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (3))){
var inst_23869 = (state_23872[(2)]);
var inst_23870 = cljs.core.async.close_BANG_.call(null,out);
var state_23872__$1 = (function (){var statearr_23880 = state_23872;
(statearr_23880[(9)] = inst_23869);

return statearr_23880;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23872__$1,inst_23870);
} else {
if((state_val_23873 === (2))){
var inst_23849 = (state_23872[(8)]);
var inst_23851 = (inst_23849 < n);
var state_23872__$1 = state_23872;
if(cljs.core.truth_(inst_23851)){
var statearr_23881_23898 = state_23872__$1;
(statearr_23881_23898[(1)] = (4));

} else {
var statearr_23882_23899 = state_23872__$1;
(statearr_23882_23899[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (11))){
var inst_23849 = (state_23872[(8)]);
var inst_23859 = (state_23872[(2)]);
var inst_23860 = (inst_23849 + (1));
var inst_23849__$1 = inst_23860;
var state_23872__$1 = (function (){var statearr_23883 = state_23872;
(statearr_23883[(8)] = inst_23849__$1);

(statearr_23883[(10)] = inst_23859);

return statearr_23883;
})();
var statearr_23884_23900 = state_23872__$1;
(statearr_23884_23900[(2)] = null);

(statearr_23884_23900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (9))){
var state_23872__$1 = state_23872;
var statearr_23885_23901 = state_23872__$1;
(statearr_23885_23901[(2)] = null);

(statearr_23885_23901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (5))){
var state_23872__$1 = state_23872;
var statearr_23886_23902 = state_23872__$1;
(statearr_23886_23902[(2)] = null);

(statearr_23886_23902[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (10))){
var inst_23864 = (state_23872[(2)]);
var state_23872__$1 = state_23872;
var statearr_23887_23903 = state_23872__$1;
(statearr_23887_23903[(2)] = inst_23864);

(statearr_23887_23903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23873 === (8))){
var inst_23854 = (state_23872[(7)]);
var state_23872__$1 = state_23872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23872__$1,(11),out,inst_23854);
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
});})(c__22422__auto___23893,out))
;
return ((function (switch__22327__auto__,c__22422__auto___23893,out){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_23888 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23888[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_23888[(1)] = (1));

return statearr_23888;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_23872){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_23872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e23889){if((e23889 instanceof Object)){
var ex__22331__auto__ = e23889;
var statearr_23890_23904 = state_23872;
(statearr_23890_23904[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23905 = state_23872;
state_23872 = G__23905;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_23872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_23872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___23893,out))
})();
var state__22424__auto__ = (function (){var statearr_23891 = f__22423__auto__.call(null);
(statearr_23891[(6)] = c__22422__auto___23893);

return statearr_23891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___23893,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23907 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23907 = (function (f,ch,meta23908){
this.f = f;
this.ch = ch;
this.meta23908 = meta23908;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23909,meta23908__$1){
var self__ = this;
var _23909__$1 = this;
return (new cljs.core.async.t_cljs$core$async23907(self__.f,self__.ch,meta23908__$1));
});

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23909){
var self__ = this;
var _23909__$1 = this;
return self__.meta23908;
});

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23910 = (function (f,ch,meta23908,_,fn1,meta23911){
this.f = f;
this.ch = ch;
this.meta23908 = meta23908;
this._ = _;
this.fn1 = fn1;
this.meta23911 = meta23911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23912,meta23911__$1){
var self__ = this;
var _23912__$1 = this;
return (new cljs.core.async.t_cljs$core$async23910(self__.f,self__.ch,self__.meta23908,self__._,self__.fn1,meta23911__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23912){
var self__ = this;
var _23912__$1 = this;
return self__.meta23911;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23906_SHARP_){
return f1.call(null,(((p1__23906_SHARP_ == null))?null:self__.f.call(null,p1__23906_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23910.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23908","meta23908",549648322,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23907","cljs.core.async/t_cljs$core$async23907",1971926104,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23911","meta23911",1287777610,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23910.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23910";

cljs.core.async.t_cljs$core$async23910.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23910");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23910.
 */
cljs.core.async.__GT_t_cljs$core$async23910 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23910(f__$1,ch__$1,meta23908__$1,___$2,fn1__$1,meta23911){
return (new cljs.core.async.t_cljs$core$async23910(f__$1,ch__$1,meta23908__$1,___$2,fn1__$1,meta23911));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23910(self__.f,self__.ch,self__.meta23908,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23907.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23907.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23908","meta23908",549648322,null)], null);
});

cljs.core.async.t_cljs$core$async23907.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23907.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23907";

cljs.core.async.t_cljs$core$async23907.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23907");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23907.
 */
cljs.core.async.__GT_t_cljs$core$async23907 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23907(f__$1,ch__$1,meta23908){
return (new cljs.core.async.t_cljs$core$async23907(f__$1,ch__$1,meta23908));
});

}

return (new cljs.core.async.t_cljs$core$async23907(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23913 = (function (f,ch,meta23914){
this.f = f;
this.ch = ch;
this.meta23914 = meta23914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23915,meta23914__$1){
var self__ = this;
var _23915__$1 = this;
return (new cljs.core.async.t_cljs$core$async23913(self__.f,self__.ch,meta23914__$1));
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23915){
var self__ = this;
var _23915__$1 = this;
return self__.meta23914;
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23913.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23914","meta23914",963823751,null)], null);
});

cljs.core.async.t_cljs$core$async23913.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23913";

cljs.core.async.t_cljs$core$async23913.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23913");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23913.
 */
cljs.core.async.__GT_t_cljs$core$async23913 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23913(f__$1,ch__$1,meta23914){
return (new cljs.core.async.t_cljs$core$async23913(f__$1,ch__$1,meta23914));
});

}

return (new cljs.core.async.t_cljs$core$async23913(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23916 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23916 = (function (p,ch,meta23917){
this.p = p;
this.ch = ch;
this.meta23917 = meta23917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23918,meta23917__$1){
var self__ = this;
var _23918__$1 = this;
return (new cljs.core.async.t_cljs$core$async23916(self__.p,self__.ch,meta23917__$1));
});

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23918){
var self__ = this;
var _23918__$1 = this;
return self__.meta23917;
});

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async23916.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23917","meta23917",1283872821,null)], null);
});

cljs.core.async.t_cljs$core$async23916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23916";

cljs.core.async.t_cljs$core$async23916.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async23916");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23916.
 */
cljs.core.async.__GT_t_cljs$core$async23916 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23916(p__$1,ch__$1,meta23917){
return (new cljs.core.async.t_cljs$core$async23916(p__$1,ch__$1,meta23917));
});

}

return (new cljs.core.async.t_cljs$core$async23916(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__23920 = arguments.length;
switch (G__23920) {
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
var c__22422__auto___23960 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___23960,out){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___23960,out){
return (function (state_23941){
var state_val_23942 = (state_23941[(1)]);
if((state_val_23942 === (7))){
var inst_23937 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23943_23961 = state_23941__$1;
(statearr_23943_23961[(2)] = inst_23937);

(statearr_23943_23961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (1))){
var state_23941__$1 = state_23941;
var statearr_23944_23962 = state_23941__$1;
(statearr_23944_23962[(2)] = null);

(statearr_23944_23962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (4))){
var inst_23923 = (state_23941[(7)]);
var inst_23923__$1 = (state_23941[(2)]);
var inst_23924 = (inst_23923__$1 == null);
var state_23941__$1 = (function (){var statearr_23945 = state_23941;
(statearr_23945[(7)] = inst_23923__$1);

return statearr_23945;
})();
if(cljs.core.truth_(inst_23924)){
var statearr_23946_23963 = state_23941__$1;
(statearr_23946_23963[(1)] = (5));

} else {
var statearr_23947_23964 = state_23941__$1;
(statearr_23947_23964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (6))){
var inst_23923 = (state_23941[(7)]);
var inst_23928 = p.call(null,inst_23923);
var state_23941__$1 = state_23941;
if(cljs.core.truth_(inst_23928)){
var statearr_23948_23965 = state_23941__$1;
(statearr_23948_23965[(1)] = (8));

} else {
var statearr_23949_23966 = state_23941__$1;
(statearr_23949_23966[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (3))){
var inst_23939 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23941__$1,inst_23939);
} else {
if((state_val_23942 === (2))){
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23941__$1,(4),ch);
} else {
if((state_val_23942 === (11))){
var inst_23931 = (state_23941[(2)]);
var state_23941__$1 = state_23941;
var statearr_23950_23967 = state_23941__$1;
(statearr_23950_23967[(2)] = inst_23931);

(statearr_23950_23967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (9))){
var state_23941__$1 = state_23941;
var statearr_23951_23968 = state_23941__$1;
(statearr_23951_23968[(2)] = null);

(statearr_23951_23968[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (5))){
var inst_23926 = cljs.core.async.close_BANG_.call(null,out);
var state_23941__$1 = state_23941;
var statearr_23952_23969 = state_23941__$1;
(statearr_23952_23969[(2)] = inst_23926);

(statearr_23952_23969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (10))){
var inst_23934 = (state_23941[(2)]);
var state_23941__$1 = (function (){var statearr_23953 = state_23941;
(statearr_23953[(8)] = inst_23934);

return statearr_23953;
})();
var statearr_23954_23970 = state_23941__$1;
(statearr_23954_23970[(2)] = null);

(statearr_23954_23970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23942 === (8))){
var inst_23923 = (state_23941[(7)]);
var state_23941__$1 = state_23941;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23941__$1,(11),out,inst_23923);
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
});})(c__22422__auto___23960,out))
;
return ((function (switch__22327__auto__,c__22422__auto___23960,out){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_23955 = [null,null,null,null,null,null,null,null,null];
(statearr_23955[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_23955[(1)] = (1));

return statearr_23955;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_23941){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_23941);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e23956){if((e23956 instanceof Object)){
var ex__22331__auto__ = e23956;
var statearr_23957_23971 = state_23941;
(statearr_23957_23971[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23941);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23956;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23972 = state_23941;
state_23941 = G__23972;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_23941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_23941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___23960,out))
})();
var state__22424__auto__ = (function (){var statearr_23958 = f__22423__auto__.call(null);
(statearr_23958[(6)] = c__22422__auto___23960);

return statearr_23958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___23960,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23974 = arguments.length;
switch (G__23974) {
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
var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__){
return (function (state_24037){
var state_val_24038 = (state_24037[(1)]);
if((state_val_24038 === (7))){
var inst_24033 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24039_24077 = state_24037__$1;
(statearr_24039_24077[(2)] = inst_24033);

(statearr_24039_24077[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (20))){
var inst_24003 = (state_24037[(7)]);
var inst_24014 = (state_24037[(2)]);
var inst_24015 = cljs.core.next.call(null,inst_24003);
var inst_23989 = inst_24015;
var inst_23990 = null;
var inst_23991 = (0);
var inst_23992 = (0);
var state_24037__$1 = (function (){var statearr_24040 = state_24037;
(statearr_24040[(8)] = inst_24014);

(statearr_24040[(9)] = inst_23990);

(statearr_24040[(10)] = inst_23991);

(statearr_24040[(11)] = inst_23992);

(statearr_24040[(12)] = inst_23989);

return statearr_24040;
})();
var statearr_24041_24078 = state_24037__$1;
(statearr_24041_24078[(2)] = null);

(statearr_24041_24078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (1))){
var state_24037__$1 = state_24037;
var statearr_24042_24079 = state_24037__$1;
(statearr_24042_24079[(2)] = null);

(statearr_24042_24079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (4))){
var inst_23978 = (state_24037[(13)]);
var inst_23978__$1 = (state_24037[(2)]);
var inst_23979 = (inst_23978__$1 == null);
var state_24037__$1 = (function (){var statearr_24043 = state_24037;
(statearr_24043[(13)] = inst_23978__$1);

return statearr_24043;
})();
if(cljs.core.truth_(inst_23979)){
var statearr_24044_24080 = state_24037__$1;
(statearr_24044_24080[(1)] = (5));

} else {
var statearr_24045_24081 = state_24037__$1;
(statearr_24045_24081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (15))){
var state_24037__$1 = state_24037;
var statearr_24049_24082 = state_24037__$1;
(statearr_24049_24082[(2)] = null);

(statearr_24049_24082[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (21))){
var state_24037__$1 = state_24037;
var statearr_24050_24083 = state_24037__$1;
(statearr_24050_24083[(2)] = null);

(statearr_24050_24083[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (13))){
var inst_23990 = (state_24037[(9)]);
var inst_23991 = (state_24037[(10)]);
var inst_23992 = (state_24037[(11)]);
var inst_23989 = (state_24037[(12)]);
var inst_23999 = (state_24037[(2)]);
var inst_24000 = (inst_23992 + (1));
var tmp24046 = inst_23990;
var tmp24047 = inst_23991;
var tmp24048 = inst_23989;
var inst_23989__$1 = tmp24048;
var inst_23990__$1 = tmp24046;
var inst_23991__$1 = tmp24047;
var inst_23992__$1 = inst_24000;
var state_24037__$1 = (function (){var statearr_24051 = state_24037;
(statearr_24051[(9)] = inst_23990__$1);

(statearr_24051[(10)] = inst_23991__$1);

(statearr_24051[(11)] = inst_23992__$1);

(statearr_24051[(12)] = inst_23989__$1);

(statearr_24051[(14)] = inst_23999);

return statearr_24051;
})();
var statearr_24052_24084 = state_24037__$1;
(statearr_24052_24084[(2)] = null);

(statearr_24052_24084[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (22))){
var state_24037__$1 = state_24037;
var statearr_24053_24085 = state_24037__$1;
(statearr_24053_24085[(2)] = null);

(statearr_24053_24085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (6))){
var inst_23978 = (state_24037[(13)]);
var inst_23987 = f.call(null,inst_23978);
var inst_23988 = cljs.core.seq.call(null,inst_23987);
var inst_23989 = inst_23988;
var inst_23990 = null;
var inst_23991 = (0);
var inst_23992 = (0);
var state_24037__$1 = (function (){var statearr_24054 = state_24037;
(statearr_24054[(9)] = inst_23990);

(statearr_24054[(10)] = inst_23991);

(statearr_24054[(11)] = inst_23992);

(statearr_24054[(12)] = inst_23989);

return statearr_24054;
})();
var statearr_24055_24086 = state_24037__$1;
(statearr_24055_24086[(2)] = null);

(statearr_24055_24086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (17))){
var inst_24003 = (state_24037[(7)]);
var inst_24007 = cljs.core.chunk_first.call(null,inst_24003);
var inst_24008 = cljs.core.chunk_rest.call(null,inst_24003);
var inst_24009 = cljs.core.count.call(null,inst_24007);
var inst_23989 = inst_24008;
var inst_23990 = inst_24007;
var inst_23991 = inst_24009;
var inst_23992 = (0);
var state_24037__$1 = (function (){var statearr_24056 = state_24037;
(statearr_24056[(9)] = inst_23990);

(statearr_24056[(10)] = inst_23991);

(statearr_24056[(11)] = inst_23992);

(statearr_24056[(12)] = inst_23989);

return statearr_24056;
})();
var statearr_24057_24087 = state_24037__$1;
(statearr_24057_24087[(2)] = null);

(statearr_24057_24087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (3))){
var inst_24035 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24037__$1,inst_24035);
} else {
if((state_val_24038 === (12))){
var inst_24023 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24058_24088 = state_24037__$1;
(statearr_24058_24088[(2)] = inst_24023);

(statearr_24058_24088[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (2))){
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24037__$1,(4),in$);
} else {
if((state_val_24038 === (23))){
var inst_24031 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24059_24089 = state_24037__$1;
(statearr_24059_24089[(2)] = inst_24031);

(statearr_24059_24089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (19))){
var inst_24018 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24060_24090 = state_24037__$1;
(statearr_24060_24090[(2)] = inst_24018);

(statearr_24060_24090[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (11))){
var inst_24003 = (state_24037[(7)]);
var inst_23989 = (state_24037[(12)]);
var inst_24003__$1 = cljs.core.seq.call(null,inst_23989);
var state_24037__$1 = (function (){var statearr_24061 = state_24037;
(statearr_24061[(7)] = inst_24003__$1);

return statearr_24061;
})();
if(inst_24003__$1){
var statearr_24062_24091 = state_24037__$1;
(statearr_24062_24091[(1)] = (14));

} else {
var statearr_24063_24092 = state_24037__$1;
(statearr_24063_24092[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (9))){
var inst_24025 = (state_24037[(2)]);
var inst_24026 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24037__$1 = (function (){var statearr_24064 = state_24037;
(statearr_24064[(15)] = inst_24025);

return statearr_24064;
})();
if(cljs.core.truth_(inst_24026)){
var statearr_24065_24093 = state_24037__$1;
(statearr_24065_24093[(1)] = (21));

} else {
var statearr_24066_24094 = state_24037__$1;
(statearr_24066_24094[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (5))){
var inst_23981 = cljs.core.async.close_BANG_.call(null,out);
var state_24037__$1 = state_24037;
var statearr_24067_24095 = state_24037__$1;
(statearr_24067_24095[(2)] = inst_23981);

(statearr_24067_24095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (14))){
var inst_24003 = (state_24037[(7)]);
var inst_24005 = cljs.core.chunked_seq_QMARK_.call(null,inst_24003);
var state_24037__$1 = state_24037;
if(inst_24005){
var statearr_24068_24096 = state_24037__$1;
(statearr_24068_24096[(1)] = (17));

} else {
var statearr_24069_24097 = state_24037__$1;
(statearr_24069_24097[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (16))){
var inst_24021 = (state_24037[(2)]);
var state_24037__$1 = state_24037;
var statearr_24070_24098 = state_24037__$1;
(statearr_24070_24098[(2)] = inst_24021);

(statearr_24070_24098[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24038 === (10))){
var inst_23990 = (state_24037[(9)]);
var inst_23992 = (state_24037[(11)]);
var inst_23997 = cljs.core._nth.call(null,inst_23990,inst_23992);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24037__$1,(13),out,inst_23997);
} else {
if((state_val_24038 === (18))){
var inst_24003 = (state_24037[(7)]);
var inst_24012 = cljs.core.first.call(null,inst_24003);
var state_24037__$1 = state_24037;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24037__$1,(20),out,inst_24012);
} else {
if((state_val_24038 === (8))){
var inst_23991 = (state_24037[(10)]);
var inst_23992 = (state_24037[(11)]);
var inst_23994 = (inst_23992 < inst_23991);
var inst_23995 = inst_23994;
var state_24037__$1 = state_24037;
if(cljs.core.truth_(inst_23995)){
var statearr_24071_24099 = state_24037__$1;
(statearr_24071_24099[(1)] = (10));

} else {
var statearr_24072_24100 = state_24037__$1;
(statearr_24072_24100[(1)] = (11));

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
});})(c__22422__auto__))
;
return ((function (switch__22327__auto__,c__22422__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__22328__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__22328__auto____0 = (function (){
var statearr_24073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24073[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__22328__auto__);

(statearr_24073[(1)] = (1));

return statearr_24073;
});
var cljs$core$async$mapcat_STAR__$_state_machine__22328__auto____1 = (function (state_24037){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_24037);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e24074){if((e24074 instanceof Object)){
var ex__22331__auto__ = e24074;
var statearr_24075_24101 = state_24037;
(statearr_24075_24101[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24037);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24102 = state_24037;
state_24037 = G__24102;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__22328__auto__ = function(state_24037){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__22328__auto____1.call(this,state_24037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__22328__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__22328__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__))
})();
var state__22424__auto__ = (function (){var statearr_24076 = f__22423__auto__.call(null);
(statearr_24076[(6)] = c__22422__auto__);

return statearr_24076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__))
);

return c__22422__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__24104 = arguments.length;
switch (G__24104) {
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
var G__24107 = arguments.length;
switch (G__24107) {
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
var G__24110 = arguments.length;
switch (G__24110) {
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
var c__22422__auto___24157 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___24157,out){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___24157,out){
return (function (state_24134){
var state_val_24135 = (state_24134[(1)]);
if((state_val_24135 === (7))){
var inst_24129 = (state_24134[(2)]);
var state_24134__$1 = state_24134;
var statearr_24136_24158 = state_24134__$1;
(statearr_24136_24158[(2)] = inst_24129);

(statearr_24136_24158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24135 === (1))){
var inst_24111 = null;
var state_24134__$1 = (function (){var statearr_24137 = state_24134;
(statearr_24137[(7)] = inst_24111);

return statearr_24137;
})();
var statearr_24138_24159 = state_24134__$1;
(statearr_24138_24159[(2)] = null);

(statearr_24138_24159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24135 === (4))){
var inst_24114 = (state_24134[(8)]);
var inst_24114__$1 = (state_24134[(2)]);
var inst_24115 = (inst_24114__$1 == null);
var inst_24116 = cljs.core.not.call(null,inst_24115);
var state_24134__$1 = (function (){var statearr_24139 = state_24134;
(statearr_24139[(8)] = inst_24114__$1);

return statearr_24139;
})();
if(inst_24116){
var statearr_24140_24160 = state_24134__$1;
(statearr_24140_24160[(1)] = (5));

} else {
var statearr_24141_24161 = state_24134__$1;
(statearr_24141_24161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24135 === (6))){
var state_24134__$1 = state_24134;
var statearr_24142_24162 = state_24134__$1;
(statearr_24142_24162[(2)] = null);

(statearr_24142_24162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24135 === (3))){
var inst_24131 = (state_24134[(2)]);
var inst_24132 = cljs.core.async.close_BANG_.call(null,out);
var state_24134__$1 = (function (){var statearr_24143 = state_24134;
(statearr_24143[(9)] = inst_24131);

return statearr_24143;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24134__$1,inst_24132);
} else {
if((state_val_24135 === (2))){
var state_24134__$1 = state_24134;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24134__$1,(4),ch);
} else {
if((state_val_24135 === (11))){
var inst_24114 = (state_24134[(8)]);
var inst_24123 = (state_24134[(2)]);
var inst_24111 = inst_24114;
var state_24134__$1 = (function (){var statearr_24144 = state_24134;
(statearr_24144[(10)] = inst_24123);

(statearr_24144[(7)] = inst_24111);

return statearr_24144;
})();
var statearr_24145_24163 = state_24134__$1;
(statearr_24145_24163[(2)] = null);

(statearr_24145_24163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24135 === (9))){
var inst_24114 = (state_24134[(8)]);
var state_24134__$1 = state_24134;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24134__$1,(11),out,inst_24114);
} else {
if((state_val_24135 === (5))){
var inst_24114 = (state_24134[(8)]);
var inst_24111 = (state_24134[(7)]);
var inst_24118 = cljs.core._EQ_.call(null,inst_24114,inst_24111);
var state_24134__$1 = state_24134;
if(inst_24118){
var statearr_24147_24164 = state_24134__$1;
(statearr_24147_24164[(1)] = (8));

} else {
var statearr_24148_24165 = state_24134__$1;
(statearr_24148_24165[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24135 === (10))){
var inst_24126 = (state_24134[(2)]);
var state_24134__$1 = state_24134;
var statearr_24149_24166 = state_24134__$1;
(statearr_24149_24166[(2)] = inst_24126);

(statearr_24149_24166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24135 === (8))){
var inst_24111 = (state_24134[(7)]);
var tmp24146 = inst_24111;
var inst_24111__$1 = tmp24146;
var state_24134__$1 = (function (){var statearr_24150 = state_24134;
(statearr_24150[(7)] = inst_24111__$1);

return statearr_24150;
})();
var statearr_24151_24167 = state_24134__$1;
(statearr_24151_24167[(2)] = null);

(statearr_24151_24167[(1)] = (2));


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
});})(c__22422__auto___24157,out))
;
return ((function (switch__22327__auto__,c__22422__auto___24157,out){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_24152 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24152[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_24152[(1)] = (1));

return statearr_24152;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_24134){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_24134);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e24153){if((e24153 instanceof Object)){
var ex__22331__auto__ = e24153;
var statearr_24154_24168 = state_24134;
(statearr_24154_24168[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24134);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24153;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24169 = state_24134;
state_24134 = G__24169;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_24134){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_24134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___24157,out))
})();
var state__22424__auto__ = (function (){var statearr_24155 = f__22423__auto__.call(null);
(statearr_24155[(6)] = c__22422__auto___24157);

return statearr_24155;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___24157,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__24171 = arguments.length;
switch (G__24171) {
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
var c__22422__auto___24237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___24237,out){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___24237,out){
return (function (state_24209){
var state_val_24210 = (state_24209[(1)]);
if((state_val_24210 === (7))){
var inst_24205 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24211_24238 = state_24209__$1;
(statearr_24211_24238[(2)] = inst_24205);

(statearr_24211_24238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (1))){
var inst_24172 = (new Array(n));
var inst_24173 = inst_24172;
var inst_24174 = (0);
var state_24209__$1 = (function (){var statearr_24212 = state_24209;
(statearr_24212[(7)] = inst_24174);

(statearr_24212[(8)] = inst_24173);

return statearr_24212;
})();
var statearr_24213_24239 = state_24209__$1;
(statearr_24213_24239[(2)] = null);

(statearr_24213_24239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (4))){
var inst_24177 = (state_24209[(9)]);
var inst_24177__$1 = (state_24209[(2)]);
var inst_24178 = (inst_24177__$1 == null);
var inst_24179 = cljs.core.not.call(null,inst_24178);
var state_24209__$1 = (function (){var statearr_24214 = state_24209;
(statearr_24214[(9)] = inst_24177__$1);

return statearr_24214;
})();
if(inst_24179){
var statearr_24215_24240 = state_24209__$1;
(statearr_24215_24240[(1)] = (5));

} else {
var statearr_24216_24241 = state_24209__$1;
(statearr_24216_24241[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (15))){
var inst_24199 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24217_24242 = state_24209__$1;
(statearr_24217_24242[(2)] = inst_24199);

(statearr_24217_24242[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (13))){
var state_24209__$1 = state_24209;
var statearr_24218_24243 = state_24209__$1;
(statearr_24218_24243[(2)] = null);

(statearr_24218_24243[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (6))){
var inst_24174 = (state_24209[(7)]);
var inst_24195 = (inst_24174 > (0));
var state_24209__$1 = state_24209;
if(cljs.core.truth_(inst_24195)){
var statearr_24219_24244 = state_24209__$1;
(statearr_24219_24244[(1)] = (12));

} else {
var statearr_24220_24245 = state_24209__$1;
(statearr_24220_24245[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (3))){
var inst_24207 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24209__$1,inst_24207);
} else {
if((state_val_24210 === (12))){
var inst_24173 = (state_24209[(8)]);
var inst_24197 = cljs.core.vec.call(null,inst_24173);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24209__$1,(15),out,inst_24197);
} else {
if((state_val_24210 === (2))){
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24209__$1,(4),ch);
} else {
if((state_val_24210 === (11))){
var inst_24189 = (state_24209[(2)]);
var inst_24190 = (new Array(n));
var inst_24173 = inst_24190;
var inst_24174 = (0);
var state_24209__$1 = (function (){var statearr_24221 = state_24209;
(statearr_24221[(7)] = inst_24174);

(statearr_24221[(8)] = inst_24173);

(statearr_24221[(10)] = inst_24189);

return statearr_24221;
})();
var statearr_24222_24246 = state_24209__$1;
(statearr_24222_24246[(2)] = null);

(statearr_24222_24246[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (9))){
var inst_24173 = (state_24209[(8)]);
var inst_24187 = cljs.core.vec.call(null,inst_24173);
var state_24209__$1 = state_24209;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24209__$1,(11),out,inst_24187);
} else {
if((state_val_24210 === (5))){
var inst_24177 = (state_24209[(9)]);
var inst_24174 = (state_24209[(7)]);
var inst_24173 = (state_24209[(8)]);
var inst_24182 = (state_24209[(11)]);
var inst_24181 = (inst_24173[inst_24174] = inst_24177);
var inst_24182__$1 = (inst_24174 + (1));
var inst_24183 = (inst_24182__$1 < n);
var state_24209__$1 = (function (){var statearr_24223 = state_24209;
(statearr_24223[(11)] = inst_24182__$1);

(statearr_24223[(12)] = inst_24181);

return statearr_24223;
})();
if(cljs.core.truth_(inst_24183)){
var statearr_24224_24247 = state_24209__$1;
(statearr_24224_24247[(1)] = (8));

} else {
var statearr_24225_24248 = state_24209__$1;
(statearr_24225_24248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (14))){
var inst_24202 = (state_24209[(2)]);
var inst_24203 = cljs.core.async.close_BANG_.call(null,out);
var state_24209__$1 = (function (){var statearr_24227 = state_24209;
(statearr_24227[(13)] = inst_24202);

return statearr_24227;
})();
var statearr_24228_24249 = state_24209__$1;
(statearr_24228_24249[(2)] = inst_24203);

(statearr_24228_24249[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (10))){
var inst_24193 = (state_24209[(2)]);
var state_24209__$1 = state_24209;
var statearr_24229_24250 = state_24209__$1;
(statearr_24229_24250[(2)] = inst_24193);

(statearr_24229_24250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24210 === (8))){
var inst_24173 = (state_24209[(8)]);
var inst_24182 = (state_24209[(11)]);
var tmp24226 = inst_24173;
var inst_24173__$1 = tmp24226;
var inst_24174 = inst_24182;
var state_24209__$1 = (function (){var statearr_24230 = state_24209;
(statearr_24230[(7)] = inst_24174);

(statearr_24230[(8)] = inst_24173__$1);

return statearr_24230;
})();
var statearr_24231_24251 = state_24209__$1;
(statearr_24231_24251[(2)] = null);

(statearr_24231_24251[(1)] = (2));


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
});})(c__22422__auto___24237,out))
;
return ((function (switch__22327__auto__,c__22422__auto___24237,out){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_24232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24232[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_24232[(1)] = (1));

return statearr_24232;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_24209){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_24209);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e24233){if((e24233 instanceof Object)){
var ex__22331__auto__ = e24233;
var statearr_24234_24252 = state_24209;
(statearr_24234_24252[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24209);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24233;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24253 = state_24209;
state_24209 = G__24253;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_24209){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_24209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___24237,out))
})();
var state__22424__auto__ = (function (){var statearr_24235 = f__22423__auto__.call(null);
(statearr_24235[(6)] = c__22422__auto___24237);

return statearr_24235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___24237,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__24255 = arguments.length;
switch (G__24255) {
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
var c__22422__auto___24325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___24325,out){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___24325,out){
return (function (state_24297){
var state_val_24298 = (state_24297[(1)]);
if((state_val_24298 === (7))){
var inst_24293 = (state_24297[(2)]);
var state_24297__$1 = state_24297;
var statearr_24299_24326 = state_24297__$1;
(statearr_24299_24326[(2)] = inst_24293);

(statearr_24299_24326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (1))){
var inst_24256 = [];
var inst_24257 = inst_24256;
var inst_24258 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24297__$1 = (function (){var statearr_24300 = state_24297;
(statearr_24300[(7)] = inst_24258);

(statearr_24300[(8)] = inst_24257);

return statearr_24300;
})();
var statearr_24301_24327 = state_24297__$1;
(statearr_24301_24327[(2)] = null);

(statearr_24301_24327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (4))){
var inst_24261 = (state_24297[(9)]);
var inst_24261__$1 = (state_24297[(2)]);
var inst_24262 = (inst_24261__$1 == null);
var inst_24263 = cljs.core.not.call(null,inst_24262);
var state_24297__$1 = (function (){var statearr_24302 = state_24297;
(statearr_24302[(9)] = inst_24261__$1);

return statearr_24302;
})();
if(inst_24263){
var statearr_24303_24328 = state_24297__$1;
(statearr_24303_24328[(1)] = (5));

} else {
var statearr_24304_24329 = state_24297__$1;
(statearr_24304_24329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (15))){
var inst_24287 = (state_24297[(2)]);
var state_24297__$1 = state_24297;
var statearr_24305_24330 = state_24297__$1;
(statearr_24305_24330[(2)] = inst_24287);

(statearr_24305_24330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (13))){
var state_24297__$1 = state_24297;
var statearr_24306_24331 = state_24297__$1;
(statearr_24306_24331[(2)] = null);

(statearr_24306_24331[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (6))){
var inst_24257 = (state_24297[(8)]);
var inst_24282 = inst_24257.length;
var inst_24283 = (inst_24282 > (0));
var state_24297__$1 = state_24297;
if(cljs.core.truth_(inst_24283)){
var statearr_24307_24332 = state_24297__$1;
(statearr_24307_24332[(1)] = (12));

} else {
var statearr_24308_24333 = state_24297__$1;
(statearr_24308_24333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (3))){
var inst_24295 = (state_24297[(2)]);
var state_24297__$1 = state_24297;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24297__$1,inst_24295);
} else {
if((state_val_24298 === (12))){
var inst_24257 = (state_24297[(8)]);
var inst_24285 = cljs.core.vec.call(null,inst_24257);
var state_24297__$1 = state_24297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24297__$1,(15),out,inst_24285);
} else {
if((state_val_24298 === (2))){
var state_24297__$1 = state_24297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24297__$1,(4),ch);
} else {
if((state_val_24298 === (11))){
var inst_24261 = (state_24297[(9)]);
var inst_24265 = (state_24297[(10)]);
var inst_24275 = (state_24297[(2)]);
var inst_24276 = [];
var inst_24277 = inst_24276.push(inst_24261);
var inst_24257 = inst_24276;
var inst_24258 = inst_24265;
var state_24297__$1 = (function (){var statearr_24309 = state_24297;
(statearr_24309[(11)] = inst_24275);

(statearr_24309[(7)] = inst_24258);

(statearr_24309[(8)] = inst_24257);

(statearr_24309[(12)] = inst_24277);

return statearr_24309;
})();
var statearr_24310_24334 = state_24297__$1;
(statearr_24310_24334[(2)] = null);

(statearr_24310_24334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (9))){
var inst_24257 = (state_24297[(8)]);
var inst_24273 = cljs.core.vec.call(null,inst_24257);
var state_24297__$1 = state_24297;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24297__$1,(11),out,inst_24273);
} else {
if((state_val_24298 === (5))){
var inst_24261 = (state_24297[(9)]);
var inst_24265 = (state_24297[(10)]);
var inst_24258 = (state_24297[(7)]);
var inst_24265__$1 = f.call(null,inst_24261);
var inst_24266 = cljs.core._EQ_.call(null,inst_24265__$1,inst_24258);
var inst_24267 = cljs.core.keyword_identical_QMARK_.call(null,inst_24258,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24268 = ((inst_24266) || (inst_24267));
var state_24297__$1 = (function (){var statearr_24311 = state_24297;
(statearr_24311[(10)] = inst_24265__$1);

return statearr_24311;
})();
if(cljs.core.truth_(inst_24268)){
var statearr_24312_24335 = state_24297__$1;
(statearr_24312_24335[(1)] = (8));

} else {
var statearr_24313_24336 = state_24297__$1;
(statearr_24313_24336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (14))){
var inst_24290 = (state_24297[(2)]);
var inst_24291 = cljs.core.async.close_BANG_.call(null,out);
var state_24297__$1 = (function (){var statearr_24315 = state_24297;
(statearr_24315[(13)] = inst_24290);

return statearr_24315;
})();
var statearr_24316_24337 = state_24297__$1;
(statearr_24316_24337[(2)] = inst_24291);

(statearr_24316_24337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (10))){
var inst_24280 = (state_24297[(2)]);
var state_24297__$1 = state_24297;
var statearr_24317_24338 = state_24297__$1;
(statearr_24317_24338[(2)] = inst_24280);

(statearr_24317_24338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24298 === (8))){
var inst_24261 = (state_24297[(9)]);
var inst_24265 = (state_24297[(10)]);
var inst_24257 = (state_24297[(8)]);
var inst_24270 = inst_24257.push(inst_24261);
var tmp24314 = inst_24257;
var inst_24257__$1 = tmp24314;
var inst_24258 = inst_24265;
var state_24297__$1 = (function (){var statearr_24318 = state_24297;
(statearr_24318[(7)] = inst_24258);

(statearr_24318[(8)] = inst_24257__$1);

(statearr_24318[(14)] = inst_24270);

return statearr_24318;
})();
var statearr_24319_24339 = state_24297__$1;
(statearr_24319_24339[(2)] = null);

(statearr_24319_24339[(1)] = (2));


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
});})(c__22422__auto___24325,out))
;
return ((function (switch__22327__auto__,c__22422__auto___24325,out){
return (function() {
var cljs$core$async$state_machine__22328__auto__ = null;
var cljs$core$async$state_machine__22328__auto____0 = (function (){
var statearr_24320 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24320[(0)] = cljs$core$async$state_machine__22328__auto__);

(statearr_24320[(1)] = (1));

return statearr_24320;
});
var cljs$core$async$state_machine__22328__auto____1 = (function (state_24297){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_24297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e24321){if((e24321 instanceof Object)){
var ex__22331__auto__ = e24321;
var statearr_24322_24340 = state_24297;
(statearr_24322_24340[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24341 = state_24297;
state_24297 = G__24341;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
cljs$core$async$state_machine__22328__auto__ = function(state_24297){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__22328__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__22328__auto____1.call(this,state_24297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__22328__auto____0;
cljs$core$async$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__22328__auto____1;
return cljs$core$async$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___24325,out))
})();
var state__22424__auto__ = (function (){var statearr_24323 = f__22423__auto__.call(null);
(statearr_24323[(6)] = c__22422__auto___24325);

return statearr_24323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___24325,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1611747930237
