// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24954_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24954_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__24955 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24956 = null;
var count__24957 = (0);
var i__24958 = (0);
while(true){
if((i__24958 < count__24957)){
var n = cljs.core._nth.call(null,chunk__24956,i__24958);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__24959 = seq__24955;
var G__24960 = chunk__24956;
var G__24961 = count__24957;
var G__24962 = (i__24958 + (1));
seq__24955 = G__24959;
chunk__24956 = G__24960;
count__24957 = G__24961;
i__24958 = G__24962;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__24955);
if(temp__5720__auto__){
var seq__24955__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24955__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__24955__$1);
var G__24963 = cljs.core.chunk_rest.call(null,seq__24955__$1);
var G__24964 = c__4550__auto__;
var G__24965 = cljs.core.count.call(null,c__4550__auto__);
var G__24966 = (0);
seq__24955 = G__24963;
chunk__24956 = G__24964;
count__24957 = G__24965;
i__24958 = G__24966;
continue;
} else {
var n = cljs.core.first.call(null,seq__24955__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__24967 = cljs.core.next.call(null,seq__24955__$1);
var G__24968 = null;
var G__24969 = (0);
var G__24970 = (0);
seq__24955 = G__24967;
chunk__24956 = G__24968;
count__24957 = G__24969;
i__24958 = G__24970;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__24971){
var vec__24972 = p__24971;
var _ = cljs.core.nth.call(null,vec__24972,(0),null);
var v = cljs.core.nth.call(null,vec__24972,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__24975){
var vec__24976 = p__24975;
var k = cljs.core.nth.call(null,vec__24976,(0),null);
var v = cljs.core.nth.call(null,vec__24976,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__24988_24996 = cljs.core.seq.call(null,deps);
var chunk__24989_24997 = null;
var count__24990_24998 = (0);
var i__24991_24999 = (0);
while(true){
if((i__24991_24999 < count__24990_24998)){
var dep_25000 = cljs.core._nth.call(null,chunk__24989_24997,i__24991_24999);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25000;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25000));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25000,(depth + (1)),state);
} else {
}


var G__25001 = seq__24988_24996;
var G__25002 = chunk__24989_24997;
var G__25003 = count__24990_24998;
var G__25004 = (i__24991_24999 + (1));
seq__24988_24996 = G__25001;
chunk__24989_24997 = G__25002;
count__24990_24998 = G__25003;
i__24991_24999 = G__25004;
continue;
} else {
var temp__5720__auto___25005 = cljs.core.seq.call(null,seq__24988_24996);
if(temp__5720__auto___25005){
var seq__24988_25006__$1 = temp__5720__auto___25005;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24988_25006__$1)){
var c__4550__auto___25007 = cljs.core.chunk_first.call(null,seq__24988_25006__$1);
var G__25008 = cljs.core.chunk_rest.call(null,seq__24988_25006__$1);
var G__25009 = c__4550__auto___25007;
var G__25010 = cljs.core.count.call(null,c__4550__auto___25007);
var G__25011 = (0);
seq__24988_24996 = G__25008;
chunk__24989_24997 = G__25009;
count__24990_24998 = G__25010;
i__24991_24999 = G__25011;
continue;
} else {
var dep_25012 = cljs.core.first.call(null,seq__24988_25006__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_25012;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_25012));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_25012,(depth + (1)),state);
} else {
}


var G__25013 = cljs.core.next.call(null,seq__24988_25006__$1);
var G__25014 = null;
var G__25015 = (0);
var G__25016 = (0);
seq__24988_24996 = G__25013;
chunk__24989_24997 = G__25014;
count__24990_24998 = G__25015;
i__24991_24999 = G__25016;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24992){
var vec__24993 = p__24992;
var seq__24994 = cljs.core.seq.call(null,vec__24993);
var first__24995 = cljs.core.first.call(null,seq__24994);
var seq__24994__$1 = cljs.core.next.call(null,seq__24994);
var x = first__24995;
var xs = seq__24994__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24993,seq__24994,first__24995,seq__24994__$1,x,xs,get_deps__$1){
return (function (p1__24979_SHARP_){
return clojure.set.difference.call(null,p1__24979_SHARP_,x);
});})(vec__24993,seq__24994,first__24995,seq__24994__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25017 = cljs.core.seq.call(null,provides);
var chunk__25018 = null;
var count__25019 = (0);
var i__25020 = (0);
while(true){
if((i__25020 < count__25019)){
var prov = cljs.core._nth.call(null,chunk__25018,i__25020);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25029_25037 = cljs.core.seq.call(null,requires);
var chunk__25030_25038 = null;
var count__25031_25039 = (0);
var i__25032_25040 = (0);
while(true){
if((i__25032_25040 < count__25031_25039)){
var req_25041 = cljs.core._nth.call(null,chunk__25030_25038,i__25032_25040);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25041,prov);


var G__25042 = seq__25029_25037;
var G__25043 = chunk__25030_25038;
var G__25044 = count__25031_25039;
var G__25045 = (i__25032_25040 + (1));
seq__25029_25037 = G__25042;
chunk__25030_25038 = G__25043;
count__25031_25039 = G__25044;
i__25032_25040 = G__25045;
continue;
} else {
var temp__5720__auto___25046 = cljs.core.seq.call(null,seq__25029_25037);
if(temp__5720__auto___25046){
var seq__25029_25047__$1 = temp__5720__auto___25046;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25029_25047__$1)){
var c__4550__auto___25048 = cljs.core.chunk_first.call(null,seq__25029_25047__$1);
var G__25049 = cljs.core.chunk_rest.call(null,seq__25029_25047__$1);
var G__25050 = c__4550__auto___25048;
var G__25051 = cljs.core.count.call(null,c__4550__auto___25048);
var G__25052 = (0);
seq__25029_25037 = G__25049;
chunk__25030_25038 = G__25050;
count__25031_25039 = G__25051;
i__25032_25040 = G__25052;
continue;
} else {
var req_25053 = cljs.core.first.call(null,seq__25029_25047__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25053,prov);


var G__25054 = cljs.core.next.call(null,seq__25029_25047__$1);
var G__25055 = null;
var G__25056 = (0);
var G__25057 = (0);
seq__25029_25037 = G__25054;
chunk__25030_25038 = G__25055;
count__25031_25039 = G__25056;
i__25032_25040 = G__25057;
continue;
}
} else {
}
}
break;
}


var G__25058 = seq__25017;
var G__25059 = chunk__25018;
var G__25060 = count__25019;
var G__25061 = (i__25020 + (1));
seq__25017 = G__25058;
chunk__25018 = G__25059;
count__25019 = G__25060;
i__25020 = G__25061;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__25017);
if(temp__5720__auto__){
var seq__25017__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25017__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__25017__$1);
var G__25062 = cljs.core.chunk_rest.call(null,seq__25017__$1);
var G__25063 = c__4550__auto__;
var G__25064 = cljs.core.count.call(null,c__4550__auto__);
var G__25065 = (0);
seq__25017 = G__25062;
chunk__25018 = G__25063;
count__25019 = G__25064;
i__25020 = G__25065;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25017__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25033_25066 = cljs.core.seq.call(null,requires);
var chunk__25034_25067 = null;
var count__25035_25068 = (0);
var i__25036_25069 = (0);
while(true){
if((i__25036_25069 < count__25035_25068)){
var req_25070 = cljs.core._nth.call(null,chunk__25034_25067,i__25036_25069);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25070,prov);


var G__25071 = seq__25033_25066;
var G__25072 = chunk__25034_25067;
var G__25073 = count__25035_25068;
var G__25074 = (i__25036_25069 + (1));
seq__25033_25066 = G__25071;
chunk__25034_25067 = G__25072;
count__25035_25068 = G__25073;
i__25036_25069 = G__25074;
continue;
} else {
var temp__5720__auto___25075__$1 = cljs.core.seq.call(null,seq__25033_25066);
if(temp__5720__auto___25075__$1){
var seq__25033_25076__$1 = temp__5720__auto___25075__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25033_25076__$1)){
var c__4550__auto___25077 = cljs.core.chunk_first.call(null,seq__25033_25076__$1);
var G__25078 = cljs.core.chunk_rest.call(null,seq__25033_25076__$1);
var G__25079 = c__4550__auto___25077;
var G__25080 = cljs.core.count.call(null,c__4550__auto___25077);
var G__25081 = (0);
seq__25033_25066 = G__25078;
chunk__25034_25067 = G__25079;
count__25035_25068 = G__25080;
i__25036_25069 = G__25081;
continue;
} else {
var req_25082 = cljs.core.first.call(null,seq__25033_25076__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25082,prov);


var G__25083 = cljs.core.next.call(null,seq__25033_25076__$1);
var G__25084 = null;
var G__25085 = (0);
var G__25086 = (0);
seq__25033_25066 = G__25083;
chunk__25034_25067 = G__25084;
count__25035_25068 = G__25085;
i__25036_25069 = G__25086;
continue;
}
} else {
}
}
break;
}


var G__25087 = cljs.core.next.call(null,seq__25017__$1);
var G__25088 = null;
var G__25089 = (0);
var G__25090 = (0);
seq__25017 = G__25087;
chunk__25018 = G__25088;
count__25019 = G__25089;
i__25020 = G__25090;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25091_25095 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25092_25096 = null;
var count__25093_25097 = (0);
var i__25094_25098 = (0);
while(true){
if((i__25094_25098 < count__25093_25097)){
var ns_25099 = cljs.core._nth.call(null,chunk__25092_25096,i__25094_25098);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25099);


var G__25100 = seq__25091_25095;
var G__25101 = chunk__25092_25096;
var G__25102 = count__25093_25097;
var G__25103 = (i__25094_25098 + (1));
seq__25091_25095 = G__25100;
chunk__25092_25096 = G__25101;
count__25093_25097 = G__25102;
i__25094_25098 = G__25103;
continue;
} else {
var temp__5720__auto___25104 = cljs.core.seq.call(null,seq__25091_25095);
if(temp__5720__auto___25104){
var seq__25091_25105__$1 = temp__5720__auto___25104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25091_25105__$1)){
var c__4550__auto___25106 = cljs.core.chunk_first.call(null,seq__25091_25105__$1);
var G__25107 = cljs.core.chunk_rest.call(null,seq__25091_25105__$1);
var G__25108 = c__4550__auto___25106;
var G__25109 = cljs.core.count.call(null,c__4550__auto___25106);
var G__25110 = (0);
seq__25091_25095 = G__25107;
chunk__25092_25096 = G__25108;
count__25093_25097 = G__25109;
i__25094_25098 = G__25110;
continue;
} else {
var ns_25111 = cljs.core.first.call(null,seq__25091_25105__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25111);


var G__25112 = cljs.core.next.call(null,seq__25091_25105__$1);
var G__25113 = null;
var G__25114 = (0);
var G__25115 = (0);
seq__25091_25095 = G__25112;
chunk__25092_25096 = G__25113;
count__25093_25097 = G__25114;
i__25094_25098 = G__25115;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25116__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25116 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25117__i = 0, G__25117__a = new Array(arguments.length -  0);
while (G__25117__i < G__25117__a.length) {G__25117__a[G__25117__i] = arguments[G__25117__i + 0]; ++G__25117__i;}
  args = new cljs.core.IndexedSeq(G__25117__a,0,null);
} 
return G__25116__delegate.call(this,args);};
G__25116.cljs$lang$maxFixedArity = 0;
G__25116.cljs$lang$applyTo = (function (arglist__25118){
var args = cljs.core.seq(arglist__25118);
return G__25116__delegate(args);
});
G__25116.cljs$core$IFn$_invoke$arity$variadic = G__25116__delegate;
return G__25116;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__25119_SHARP_,p2__25120_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25119_SHARP_)),p2__25120_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__25121_SHARP_,p2__25122_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__25121_SHARP_),p2__25122_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__25123 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__25123.addCallback(((function (G__25123){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__25123))
);

G__25123.addErrback(((function (G__25123){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__25123))
);

return G__25123;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e25124){if((e25124 instanceof Error)){
var e = e25124;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25124;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25125){if((e25125 instanceof Error)){
var e = e25125;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25125;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25126 = cljs.core._EQ_;
var expr__25127 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25126.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25127))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__25126.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25127))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__25126.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__25127))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__25126,expr__25127){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25126,expr__25127))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25129,callback){
var map__25130 = p__25129;
var map__25130__$1 = (((((!((map__25130 == null))))?(((((map__25130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25130):map__25130);
var file_msg = map__25130__$1;
var request_url = cljs.core.get.call(null,map__25130__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__25130,map__25130__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25130,map__25130__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__){
return (function (state_25168){
var state_val_25169 = (state_25168[(1)]);
if((state_val_25169 === (7))){
var inst_25164 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25170_25196 = state_25168__$1;
(statearr_25170_25196[(2)] = inst_25164);

(statearr_25170_25196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (1))){
var state_25168__$1 = state_25168;
var statearr_25171_25197 = state_25168__$1;
(statearr_25171_25197[(2)] = null);

(statearr_25171_25197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (4))){
var inst_25134 = (state_25168[(7)]);
var inst_25134__$1 = (state_25168[(2)]);
var state_25168__$1 = (function (){var statearr_25172 = state_25168;
(statearr_25172[(7)] = inst_25134__$1);

return statearr_25172;
})();
if(cljs.core.truth_(inst_25134__$1)){
var statearr_25173_25198 = state_25168__$1;
(statearr_25173_25198[(1)] = (5));

} else {
var statearr_25174_25199 = state_25168__$1;
(statearr_25174_25199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (15))){
var inst_25147 = (state_25168[(8)]);
var inst_25149 = (state_25168[(9)]);
var inst_25151 = inst_25149.call(null,inst_25147);
var state_25168__$1 = state_25168;
var statearr_25175_25200 = state_25168__$1;
(statearr_25175_25200[(2)] = inst_25151);

(statearr_25175_25200[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (13))){
var inst_25158 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25176_25201 = state_25168__$1;
(statearr_25176_25201[(2)] = inst_25158);

(statearr_25176_25201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (6))){
var state_25168__$1 = state_25168;
var statearr_25177_25202 = state_25168__$1;
(statearr_25177_25202[(2)] = null);

(statearr_25177_25202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (17))){
var inst_25155 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
var statearr_25178_25203 = state_25168__$1;
(statearr_25178_25203[(2)] = inst_25155);

(statearr_25178_25203[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (3))){
var inst_25166 = (state_25168[(2)]);
var state_25168__$1 = state_25168;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25168__$1,inst_25166);
} else {
if((state_val_25169 === (12))){
var state_25168__$1 = state_25168;
var statearr_25179_25204 = state_25168__$1;
(statearr_25179_25204[(2)] = null);

(statearr_25179_25204[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (2))){
var state_25168__$1 = state_25168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25168__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25169 === (11))){
var inst_25139 = (state_25168[(10)]);
var inst_25145 = figwheel.client.file_reloading.blocking_load.call(null,inst_25139);
var state_25168__$1 = state_25168;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25168__$1,(14),inst_25145);
} else {
if((state_val_25169 === (9))){
var inst_25139 = (state_25168[(10)]);
var state_25168__$1 = state_25168;
if(cljs.core.truth_(inst_25139)){
var statearr_25180_25205 = state_25168__$1;
(statearr_25180_25205[(1)] = (11));

} else {
var statearr_25181_25206 = state_25168__$1;
(statearr_25181_25206[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (5))){
var inst_25140 = (state_25168[(11)]);
var inst_25134 = (state_25168[(7)]);
var inst_25139 = cljs.core.nth.call(null,inst_25134,(0),null);
var inst_25140__$1 = cljs.core.nth.call(null,inst_25134,(1),null);
var state_25168__$1 = (function (){var statearr_25182 = state_25168;
(statearr_25182[(11)] = inst_25140__$1);

(statearr_25182[(10)] = inst_25139);

return statearr_25182;
})();
if(cljs.core.truth_(inst_25140__$1)){
var statearr_25183_25207 = state_25168__$1;
(statearr_25183_25207[(1)] = (8));

} else {
var statearr_25184_25208 = state_25168__$1;
(statearr_25184_25208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (14))){
var inst_25149 = (state_25168[(9)]);
var inst_25139 = (state_25168[(10)]);
var inst_25147 = (state_25168[(2)]);
var inst_25148 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25149__$1 = cljs.core.get.call(null,inst_25148,inst_25139);
var state_25168__$1 = (function (){var statearr_25185 = state_25168;
(statearr_25185[(8)] = inst_25147);

(statearr_25185[(9)] = inst_25149__$1);

return statearr_25185;
})();
if(cljs.core.truth_(inst_25149__$1)){
var statearr_25186_25209 = state_25168__$1;
(statearr_25186_25209[(1)] = (15));

} else {
var statearr_25187_25210 = state_25168__$1;
(statearr_25187_25210[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (16))){
var inst_25147 = (state_25168[(8)]);
var inst_25153 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25147);
var state_25168__$1 = state_25168;
var statearr_25188_25211 = state_25168__$1;
(statearr_25188_25211[(2)] = inst_25153);

(statearr_25188_25211[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (10))){
var inst_25160 = (state_25168[(2)]);
var state_25168__$1 = (function (){var statearr_25189 = state_25168;
(statearr_25189[(12)] = inst_25160);

return statearr_25189;
})();
var statearr_25190_25212 = state_25168__$1;
(statearr_25190_25212[(2)] = null);

(statearr_25190_25212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25169 === (8))){
var inst_25140 = (state_25168[(11)]);
var inst_25142 = eval(inst_25140);
var state_25168__$1 = state_25168;
var statearr_25191_25213 = state_25168__$1;
(statearr_25191_25213[(2)] = inst_25142);

(statearr_25191_25213[(1)] = (10));


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
});})(c__22422__auto__))
;
return ((function (switch__22327__auto__,c__22422__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22328__auto__ = null;
var figwheel$client$file_reloading$state_machine__22328__auto____0 = (function (){
var statearr_25192 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25192[(0)] = figwheel$client$file_reloading$state_machine__22328__auto__);

(statearr_25192[(1)] = (1));

return statearr_25192;
});
var figwheel$client$file_reloading$state_machine__22328__auto____1 = (function (state_25168){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_25168);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e25193){if((e25193 instanceof Object)){
var ex__22331__auto__ = e25193;
var statearr_25194_25214 = state_25168;
(statearr_25194_25214[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25168);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25215 = state_25168;
state_25168 = G__25215;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22328__auto__ = function(state_25168){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22328__auto____1.call(this,state_25168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22328__auto____0;
figwheel$client$file_reloading$state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22328__auto____1;
return figwheel$client$file_reloading$state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__))
})();
var state__22424__auto__ = (function (){var statearr_25195 = f__22423__auto__.call(null);
(statearr_25195[(6)] = c__22422__auto__);

return statearr_25195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__))
);

return c__22422__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__25217 = arguments.length;
switch (G__25217) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25219,callback){
var map__25220 = p__25219;
var map__25220__$1 = (((((!((map__25220 == null))))?(((((map__25220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25220):map__25220);
var file_msg = map__25220__$1;
var namespace = cljs.core.get.call(null,map__25220__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25220,map__25220__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25220,map__25220__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__25222){
var map__25223 = p__25222;
var map__25223__$1 = (((((!((map__25223 == null))))?(((((map__25223.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25223.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25223):map__25223);
var file_msg = map__25223__$1;
var namespace = cljs.core.get.call(null,map__25223__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25225){
var map__25226 = p__25225;
var map__25226__$1 = (((((!((map__25226 == null))))?(((((map__25226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25226.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25226):map__25226);
var file_msg = map__25226__$1;
var namespace = cljs.core.get.call(null,map__25226__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25228,callback){
var map__25229 = p__25228;
var map__25229__$1 = (((((!((map__25229 == null))))?(((((map__25229.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25229.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25229):map__25229);
var file_msg = map__25229__$1;
var request_url = cljs.core.get.call(null,map__25229__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25229__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22422__auto___25279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto___25279,out){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto___25279,out){
return (function (state_25264){
var state_val_25265 = (state_25264[(1)]);
if((state_val_25265 === (1))){
var inst_25238 = cljs.core.seq.call(null,files);
var inst_25239 = cljs.core.first.call(null,inst_25238);
var inst_25240 = cljs.core.next.call(null,inst_25238);
var inst_25241 = files;
var state_25264__$1 = (function (){var statearr_25266 = state_25264;
(statearr_25266[(7)] = inst_25241);

(statearr_25266[(8)] = inst_25240);

(statearr_25266[(9)] = inst_25239);

return statearr_25266;
})();
var statearr_25267_25280 = state_25264__$1;
(statearr_25267_25280[(2)] = null);

(statearr_25267_25280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (2))){
var inst_25241 = (state_25264[(7)]);
var inst_25247 = (state_25264[(10)]);
var inst_25246 = cljs.core.seq.call(null,inst_25241);
var inst_25247__$1 = cljs.core.first.call(null,inst_25246);
var inst_25248 = cljs.core.next.call(null,inst_25246);
var inst_25249 = (inst_25247__$1 == null);
var inst_25250 = cljs.core.not.call(null,inst_25249);
var state_25264__$1 = (function (){var statearr_25268 = state_25264;
(statearr_25268[(10)] = inst_25247__$1);

(statearr_25268[(11)] = inst_25248);

return statearr_25268;
})();
if(inst_25250){
var statearr_25269_25281 = state_25264__$1;
(statearr_25269_25281[(1)] = (4));

} else {
var statearr_25270_25282 = state_25264__$1;
(statearr_25270_25282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (3))){
var inst_25262 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25264__$1,inst_25262);
} else {
if((state_val_25265 === (4))){
var inst_25247 = (state_25264[(10)]);
var inst_25252 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25247);
var state_25264__$1 = state_25264;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25264__$1,(7),inst_25252);
} else {
if((state_val_25265 === (5))){
var inst_25258 = cljs.core.async.close_BANG_.call(null,out);
var state_25264__$1 = state_25264;
var statearr_25271_25283 = state_25264__$1;
(statearr_25271_25283[(2)] = inst_25258);

(statearr_25271_25283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (6))){
var inst_25260 = (state_25264[(2)]);
var state_25264__$1 = state_25264;
var statearr_25272_25284 = state_25264__$1;
(statearr_25272_25284[(2)] = inst_25260);

(statearr_25272_25284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25265 === (7))){
var inst_25248 = (state_25264[(11)]);
var inst_25254 = (state_25264[(2)]);
var inst_25255 = cljs.core.async.put_BANG_.call(null,out,inst_25254);
var inst_25241 = inst_25248;
var state_25264__$1 = (function (){var statearr_25273 = state_25264;
(statearr_25273[(7)] = inst_25241);

(statearr_25273[(12)] = inst_25255);

return statearr_25273;
})();
var statearr_25274_25285 = state_25264__$1;
(statearr_25274_25285[(2)] = null);

(statearr_25274_25285[(1)] = (2));


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
});})(c__22422__auto___25279,out))
;
return ((function (switch__22327__auto__,c__22422__auto___25279,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto____0 = (function (){
var statearr_25275 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25275[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto__);

(statearr_25275[(1)] = (1));

return statearr_25275;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto____1 = (function (state_25264){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_25264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e25276){if((e25276 instanceof Object)){
var ex__22331__auto__ = e25276;
var statearr_25277_25286 = state_25264;
(statearr_25277_25286[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25287 = state_25264;
state_25264 = G__25287;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto__ = function(state_25264){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto____1.call(this,state_25264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto___25279,out))
})();
var state__22424__auto__ = (function (){var statearr_25278 = f__22423__auto__.call(null);
(statearr_25278[(6)] = c__22422__auto___25279);

return statearr_25278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto___25279,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25288,opts){
var map__25289 = p__25288;
var map__25289__$1 = (((((!((map__25289 == null))))?(((((map__25289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25289):map__25289);
var eval_body = cljs.core.get.call(null,map__25289__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25289__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25291){var e = e25291;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25292_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25292_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25293){
var vec__25294 = p__25293;
var k = cljs.core.nth.call(null,vec__25294,(0),null);
var v = cljs.core.nth.call(null,vec__25294,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25297){
var vec__25298 = p__25297;
var k = cljs.core.nth.call(null,vec__25298,(0),null);
var v = cljs.core.nth.call(null,vec__25298,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25304,p__25305){
var map__25306 = p__25304;
var map__25306__$1 = (((((!((map__25306 == null))))?(((((map__25306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25306):map__25306);
var opts = map__25306__$1;
var before_jsload = cljs.core.get.call(null,map__25306__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25306__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25306__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25307 = p__25305;
var map__25307__$1 = (((((!((map__25307 == null))))?(((((map__25307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25307):map__25307);
var msg = map__25307__$1;
var files = cljs.core.get.call(null,map__25307__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25307__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25307__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22422__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22423__auto__ = (function (){var switch__22327__auto__ = ((function (c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25461){
var state_val_25462 = (state_25461[(1)]);
if((state_val_25462 === (7))){
var inst_25324 = (state_25461[(7)]);
var inst_25322 = (state_25461[(8)]);
var inst_25321 = (state_25461[(9)]);
var inst_25323 = (state_25461[(10)]);
var inst_25329 = cljs.core._nth.call(null,inst_25322,inst_25324);
var inst_25330 = figwheel.client.file_reloading.eval_body.call(null,inst_25329,opts);
var inst_25331 = (inst_25324 + (1));
var tmp25463 = inst_25322;
var tmp25464 = inst_25321;
var tmp25465 = inst_25323;
var inst_25321__$1 = tmp25464;
var inst_25322__$1 = tmp25463;
var inst_25323__$1 = tmp25465;
var inst_25324__$1 = inst_25331;
var state_25461__$1 = (function (){var statearr_25466 = state_25461;
(statearr_25466[(7)] = inst_25324__$1);

(statearr_25466[(8)] = inst_25322__$1);

(statearr_25466[(11)] = inst_25330);

(statearr_25466[(9)] = inst_25321__$1);

(statearr_25466[(10)] = inst_25323__$1);

return statearr_25466;
})();
var statearr_25467_25550 = state_25461__$1;
(statearr_25467_25550[(2)] = null);

(statearr_25467_25550[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (20))){
var inst_25364 = (state_25461[(12)]);
var inst_25372 = figwheel.client.file_reloading.sort_files.call(null,inst_25364);
var state_25461__$1 = state_25461;
var statearr_25468_25551 = state_25461__$1;
(statearr_25468_25551[(2)] = inst_25372);

(statearr_25468_25551[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (27))){
var state_25461__$1 = state_25461;
var statearr_25469_25552 = state_25461__$1;
(statearr_25469_25552[(2)] = null);

(statearr_25469_25552[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (1))){
var inst_25313 = (state_25461[(13)]);
var inst_25310 = before_jsload.call(null,files);
var inst_25311 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25312 = (function (){return ((function (inst_25313,inst_25310,inst_25311,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25301_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25301_SHARP_);
});
;})(inst_25313,inst_25310,inst_25311,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25313__$1 = cljs.core.filter.call(null,inst_25312,files);
var inst_25314 = cljs.core.not_empty.call(null,inst_25313__$1);
var state_25461__$1 = (function (){var statearr_25470 = state_25461;
(statearr_25470[(14)] = inst_25310);

(statearr_25470[(15)] = inst_25311);

(statearr_25470[(13)] = inst_25313__$1);

return statearr_25470;
})();
if(cljs.core.truth_(inst_25314)){
var statearr_25471_25553 = state_25461__$1;
(statearr_25471_25553[(1)] = (2));

} else {
var statearr_25472_25554 = state_25461__$1;
(statearr_25472_25554[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (24))){
var state_25461__$1 = state_25461;
var statearr_25473_25555 = state_25461__$1;
(statearr_25473_25555[(2)] = null);

(statearr_25473_25555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (39))){
var inst_25414 = (state_25461[(16)]);
var state_25461__$1 = state_25461;
var statearr_25474_25556 = state_25461__$1;
(statearr_25474_25556[(2)] = inst_25414);

(statearr_25474_25556[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (46))){
var inst_25456 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25475_25557 = state_25461__$1;
(statearr_25475_25557[(2)] = inst_25456);

(statearr_25475_25557[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (4))){
var inst_25358 = (state_25461[(2)]);
var inst_25359 = cljs.core.List.EMPTY;
var inst_25360 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25359);
var inst_25361 = (function (){return ((function (inst_25358,inst_25359,inst_25360,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25302_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25302_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25302_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__25302_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_25358,inst_25359,inst_25360,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25362 = cljs.core.filter.call(null,inst_25361,files);
var inst_25363 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25364 = cljs.core.concat.call(null,inst_25362,inst_25363);
var state_25461__$1 = (function (){var statearr_25476 = state_25461;
(statearr_25476[(12)] = inst_25364);

(statearr_25476[(17)] = inst_25358);

(statearr_25476[(18)] = inst_25360);

return statearr_25476;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25477_25558 = state_25461__$1;
(statearr_25477_25558[(1)] = (16));

} else {
var statearr_25478_25559 = state_25461__$1;
(statearr_25478_25559[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (15))){
var inst_25348 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25479_25560 = state_25461__$1;
(statearr_25479_25560[(2)] = inst_25348);

(statearr_25479_25560[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (21))){
var inst_25374 = (state_25461[(19)]);
var inst_25374__$1 = (state_25461[(2)]);
var inst_25375 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25374__$1);
var state_25461__$1 = (function (){var statearr_25480 = state_25461;
(statearr_25480[(19)] = inst_25374__$1);

return statearr_25480;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25461__$1,(22),inst_25375);
} else {
if((state_val_25462 === (31))){
var inst_25459 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25461__$1,inst_25459);
} else {
if((state_val_25462 === (32))){
var inst_25414 = (state_25461[(16)]);
var inst_25419 = inst_25414.cljs$lang$protocol_mask$partition0$;
var inst_25420 = (inst_25419 & (64));
var inst_25421 = inst_25414.cljs$core$ISeq$;
var inst_25422 = (cljs.core.PROTOCOL_SENTINEL === inst_25421);
var inst_25423 = ((inst_25420) || (inst_25422));
var state_25461__$1 = state_25461;
if(cljs.core.truth_(inst_25423)){
var statearr_25481_25561 = state_25461__$1;
(statearr_25481_25561[(1)] = (35));

} else {
var statearr_25482_25562 = state_25461__$1;
(statearr_25482_25562[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (40))){
var inst_25436 = (state_25461[(20)]);
var inst_25435 = (state_25461[(2)]);
var inst_25436__$1 = cljs.core.get.call(null,inst_25435,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25437 = cljs.core.get.call(null,inst_25435,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25438 = cljs.core.not_empty.call(null,inst_25436__$1);
var state_25461__$1 = (function (){var statearr_25483 = state_25461;
(statearr_25483[(21)] = inst_25437);

(statearr_25483[(20)] = inst_25436__$1);

return statearr_25483;
})();
if(cljs.core.truth_(inst_25438)){
var statearr_25484_25563 = state_25461__$1;
(statearr_25484_25563[(1)] = (41));

} else {
var statearr_25485_25564 = state_25461__$1;
(statearr_25485_25564[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (33))){
var state_25461__$1 = state_25461;
var statearr_25486_25565 = state_25461__$1;
(statearr_25486_25565[(2)] = false);

(statearr_25486_25565[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (13))){
var inst_25334 = (state_25461[(22)]);
var inst_25338 = cljs.core.chunk_first.call(null,inst_25334);
var inst_25339 = cljs.core.chunk_rest.call(null,inst_25334);
var inst_25340 = cljs.core.count.call(null,inst_25338);
var inst_25321 = inst_25339;
var inst_25322 = inst_25338;
var inst_25323 = inst_25340;
var inst_25324 = (0);
var state_25461__$1 = (function (){var statearr_25487 = state_25461;
(statearr_25487[(7)] = inst_25324);

(statearr_25487[(8)] = inst_25322);

(statearr_25487[(9)] = inst_25321);

(statearr_25487[(10)] = inst_25323);

return statearr_25487;
})();
var statearr_25488_25566 = state_25461__$1;
(statearr_25488_25566[(2)] = null);

(statearr_25488_25566[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (22))){
var inst_25374 = (state_25461[(19)]);
var inst_25378 = (state_25461[(23)]);
var inst_25382 = (state_25461[(24)]);
var inst_25377 = (state_25461[(25)]);
var inst_25377__$1 = (state_25461[(2)]);
var inst_25378__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25377__$1);
var inst_25379 = (function (){var all_files = inst_25374;
var res_SINGLEQUOTE_ = inst_25377__$1;
var res = inst_25378__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25374,inst_25378,inst_25382,inst_25377,inst_25377__$1,inst_25378__$1,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25303_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25303_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25374,inst_25378,inst_25382,inst_25377,inst_25377__$1,inst_25378__$1,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25380 = cljs.core.filter.call(null,inst_25379,inst_25377__$1);
var inst_25381 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25382__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25381);
var inst_25383 = cljs.core.not_empty.call(null,inst_25382__$1);
var state_25461__$1 = (function (){var statearr_25489 = state_25461;
(statearr_25489[(23)] = inst_25378__$1);

(statearr_25489[(26)] = inst_25380);

(statearr_25489[(24)] = inst_25382__$1);

(statearr_25489[(25)] = inst_25377__$1);

return statearr_25489;
})();
if(cljs.core.truth_(inst_25383)){
var statearr_25490_25567 = state_25461__$1;
(statearr_25490_25567[(1)] = (23));

} else {
var statearr_25491_25568 = state_25461__$1;
(statearr_25491_25568[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (36))){
var state_25461__$1 = state_25461;
var statearr_25492_25569 = state_25461__$1;
(statearr_25492_25569[(2)] = false);

(statearr_25492_25569[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (41))){
var inst_25436 = (state_25461[(20)]);
var inst_25440 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25441 = cljs.core.map.call(null,inst_25440,inst_25436);
var inst_25442 = cljs.core.pr_str.call(null,inst_25441);
var inst_25443 = ["figwheel-no-load meta-data: ",inst_25442].join('');
var inst_25444 = figwheel.client.utils.log.call(null,inst_25443);
var state_25461__$1 = state_25461;
var statearr_25493_25570 = state_25461__$1;
(statearr_25493_25570[(2)] = inst_25444);

(statearr_25493_25570[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (43))){
var inst_25437 = (state_25461[(21)]);
var inst_25447 = (state_25461[(2)]);
var inst_25448 = cljs.core.not_empty.call(null,inst_25437);
var state_25461__$1 = (function (){var statearr_25494 = state_25461;
(statearr_25494[(27)] = inst_25447);

return statearr_25494;
})();
if(cljs.core.truth_(inst_25448)){
var statearr_25495_25571 = state_25461__$1;
(statearr_25495_25571[(1)] = (44));

} else {
var statearr_25496_25572 = state_25461__$1;
(statearr_25496_25572[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (29))){
var inst_25374 = (state_25461[(19)]);
var inst_25378 = (state_25461[(23)]);
var inst_25380 = (state_25461[(26)]);
var inst_25414 = (state_25461[(16)]);
var inst_25382 = (state_25461[(24)]);
var inst_25377 = (state_25461[(25)]);
var inst_25410 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25413 = (function (){var all_files = inst_25374;
var res_SINGLEQUOTE_ = inst_25377;
var res = inst_25378;
var files_not_loaded = inst_25380;
var dependencies_that_loaded = inst_25382;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25414,inst_25382,inst_25377,inst_25410,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25412){
var map__25497 = p__25412;
var map__25497__$1 = (((((!((map__25497 == null))))?(((((map__25497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25497):map__25497);
var namespace = cljs.core.get.call(null,map__25497__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25414,inst_25382,inst_25377,inst_25410,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25414__$1 = cljs.core.group_by.call(null,inst_25413,inst_25380);
var inst_25416 = (inst_25414__$1 == null);
var inst_25417 = cljs.core.not.call(null,inst_25416);
var state_25461__$1 = (function (){var statearr_25499 = state_25461;
(statearr_25499[(16)] = inst_25414__$1);

(statearr_25499[(28)] = inst_25410);

return statearr_25499;
})();
if(inst_25417){
var statearr_25500_25573 = state_25461__$1;
(statearr_25500_25573[(1)] = (32));

} else {
var statearr_25501_25574 = state_25461__$1;
(statearr_25501_25574[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (44))){
var inst_25437 = (state_25461[(21)]);
var inst_25450 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25437);
var inst_25451 = cljs.core.pr_str.call(null,inst_25450);
var inst_25452 = ["not required: ",inst_25451].join('');
var inst_25453 = figwheel.client.utils.log.call(null,inst_25452);
var state_25461__$1 = state_25461;
var statearr_25502_25575 = state_25461__$1;
(statearr_25502_25575[(2)] = inst_25453);

(statearr_25502_25575[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (6))){
var inst_25355 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25503_25576 = state_25461__$1;
(statearr_25503_25576[(2)] = inst_25355);

(statearr_25503_25576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (28))){
var inst_25380 = (state_25461[(26)]);
var inst_25407 = (state_25461[(2)]);
var inst_25408 = cljs.core.not_empty.call(null,inst_25380);
var state_25461__$1 = (function (){var statearr_25504 = state_25461;
(statearr_25504[(29)] = inst_25407);

return statearr_25504;
})();
if(cljs.core.truth_(inst_25408)){
var statearr_25505_25577 = state_25461__$1;
(statearr_25505_25577[(1)] = (29));

} else {
var statearr_25506_25578 = state_25461__$1;
(statearr_25506_25578[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (25))){
var inst_25378 = (state_25461[(23)]);
var inst_25394 = (state_25461[(2)]);
var inst_25395 = cljs.core.not_empty.call(null,inst_25378);
var state_25461__$1 = (function (){var statearr_25507 = state_25461;
(statearr_25507[(30)] = inst_25394);

return statearr_25507;
})();
if(cljs.core.truth_(inst_25395)){
var statearr_25508_25579 = state_25461__$1;
(statearr_25508_25579[(1)] = (26));

} else {
var statearr_25509_25580 = state_25461__$1;
(statearr_25509_25580[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (34))){
var inst_25430 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
if(cljs.core.truth_(inst_25430)){
var statearr_25510_25581 = state_25461__$1;
(statearr_25510_25581[(1)] = (38));

} else {
var statearr_25511_25582 = state_25461__$1;
(statearr_25511_25582[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (17))){
var state_25461__$1 = state_25461;
var statearr_25512_25583 = state_25461__$1;
(statearr_25512_25583[(2)] = recompile_dependents);

(statearr_25512_25583[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (3))){
var state_25461__$1 = state_25461;
var statearr_25513_25584 = state_25461__$1;
(statearr_25513_25584[(2)] = null);

(statearr_25513_25584[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (12))){
var inst_25351 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25514_25585 = state_25461__$1;
(statearr_25514_25585[(2)] = inst_25351);

(statearr_25514_25585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (2))){
var inst_25313 = (state_25461[(13)]);
var inst_25320 = cljs.core.seq.call(null,inst_25313);
var inst_25321 = inst_25320;
var inst_25322 = null;
var inst_25323 = (0);
var inst_25324 = (0);
var state_25461__$1 = (function (){var statearr_25515 = state_25461;
(statearr_25515[(7)] = inst_25324);

(statearr_25515[(8)] = inst_25322);

(statearr_25515[(9)] = inst_25321);

(statearr_25515[(10)] = inst_25323);

return statearr_25515;
})();
var statearr_25516_25586 = state_25461__$1;
(statearr_25516_25586[(2)] = null);

(statearr_25516_25586[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (23))){
var inst_25374 = (state_25461[(19)]);
var inst_25378 = (state_25461[(23)]);
var inst_25380 = (state_25461[(26)]);
var inst_25382 = (state_25461[(24)]);
var inst_25377 = (state_25461[(25)]);
var inst_25385 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25387 = (function (){var all_files = inst_25374;
var res_SINGLEQUOTE_ = inst_25377;
var res = inst_25378;
var files_not_loaded = inst_25380;
var dependencies_that_loaded = inst_25382;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25382,inst_25377,inst_25385,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25386){
var map__25517 = p__25386;
var map__25517__$1 = (((((!((map__25517 == null))))?(((((map__25517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25517):map__25517);
var request_url = cljs.core.get.call(null,map__25517__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25382,inst_25377,inst_25385,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25388 = cljs.core.reverse.call(null,inst_25382);
var inst_25389 = cljs.core.map.call(null,inst_25387,inst_25388);
var inst_25390 = cljs.core.pr_str.call(null,inst_25389);
var inst_25391 = figwheel.client.utils.log.call(null,inst_25390);
var state_25461__$1 = (function (){var statearr_25519 = state_25461;
(statearr_25519[(31)] = inst_25385);

return statearr_25519;
})();
var statearr_25520_25587 = state_25461__$1;
(statearr_25520_25587[(2)] = inst_25391);

(statearr_25520_25587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (35))){
var state_25461__$1 = state_25461;
var statearr_25521_25588 = state_25461__$1;
(statearr_25521_25588[(2)] = true);

(statearr_25521_25588[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (19))){
var inst_25364 = (state_25461[(12)]);
var inst_25370 = figwheel.client.file_reloading.expand_files.call(null,inst_25364);
var state_25461__$1 = state_25461;
var statearr_25522_25589 = state_25461__$1;
(statearr_25522_25589[(2)] = inst_25370);

(statearr_25522_25589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (11))){
var state_25461__$1 = state_25461;
var statearr_25523_25590 = state_25461__$1;
(statearr_25523_25590[(2)] = null);

(statearr_25523_25590[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (9))){
var inst_25353 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25524_25591 = state_25461__$1;
(statearr_25524_25591[(2)] = inst_25353);

(statearr_25524_25591[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (5))){
var inst_25324 = (state_25461[(7)]);
var inst_25323 = (state_25461[(10)]);
var inst_25326 = (inst_25324 < inst_25323);
var inst_25327 = inst_25326;
var state_25461__$1 = state_25461;
if(cljs.core.truth_(inst_25327)){
var statearr_25525_25592 = state_25461__$1;
(statearr_25525_25592[(1)] = (7));

} else {
var statearr_25526_25593 = state_25461__$1;
(statearr_25526_25593[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (14))){
var inst_25334 = (state_25461[(22)]);
var inst_25343 = cljs.core.first.call(null,inst_25334);
var inst_25344 = figwheel.client.file_reloading.eval_body.call(null,inst_25343,opts);
var inst_25345 = cljs.core.next.call(null,inst_25334);
var inst_25321 = inst_25345;
var inst_25322 = null;
var inst_25323 = (0);
var inst_25324 = (0);
var state_25461__$1 = (function (){var statearr_25527 = state_25461;
(statearr_25527[(7)] = inst_25324);

(statearr_25527[(8)] = inst_25322);

(statearr_25527[(32)] = inst_25344);

(statearr_25527[(9)] = inst_25321);

(statearr_25527[(10)] = inst_25323);

return statearr_25527;
})();
var statearr_25528_25594 = state_25461__$1;
(statearr_25528_25594[(2)] = null);

(statearr_25528_25594[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (45))){
var state_25461__$1 = state_25461;
var statearr_25529_25595 = state_25461__$1;
(statearr_25529_25595[(2)] = null);

(statearr_25529_25595[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (26))){
var inst_25374 = (state_25461[(19)]);
var inst_25378 = (state_25461[(23)]);
var inst_25380 = (state_25461[(26)]);
var inst_25382 = (state_25461[(24)]);
var inst_25377 = (state_25461[(25)]);
var inst_25397 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25399 = (function (){var all_files = inst_25374;
var res_SINGLEQUOTE_ = inst_25377;
var res = inst_25378;
var files_not_loaded = inst_25380;
var dependencies_that_loaded = inst_25382;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25382,inst_25377,inst_25397,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25398){
var map__25530 = p__25398;
var map__25530__$1 = (((((!((map__25530 == null))))?(((((map__25530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25530):map__25530);
var namespace = cljs.core.get.call(null,map__25530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25530__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25382,inst_25377,inst_25397,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25400 = cljs.core.map.call(null,inst_25399,inst_25378);
var inst_25401 = cljs.core.pr_str.call(null,inst_25400);
var inst_25402 = figwheel.client.utils.log.call(null,inst_25401);
var inst_25403 = (function (){var all_files = inst_25374;
var res_SINGLEQUOTE_ = inst_25377;
var res = inst_25378;
var files_not_loaded = inst_25380;
var dependencies_that_loaded = inst_25382;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25382,inst_25377,inst_25397,inst_25399,inst_25400,inst_25401,inst_25402,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25374,inst_25378,inst_25380,inst_25382,inst_25377,inst_25397,inst_25399,inst_25400,inst_25401,inst_25402,state_val_25462,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25404 = setTimeout(inst_25403,(10));
var state_25461__$1 = (function (){var statearr_25532 = state_25461;
(statearr_25532[(33)] = inst_25402);

(statearr_25532[(34)] = inst_25397);

return statearr_25532;
})();
var statearr_25533_25596 = state_25461__$1;
(statearr_25533_25596[(2)] = inst_25404);

(statearr_25533_25596[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (16))){
var state_25461__$1 = state_25461;
var statearr_25534_25597 = state_25461__$1;
(statearr_25534_25597[(2)] = reload_dependents);

(statearr_25534_25597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (38))){
var inst_25414 = (state_25461[(16)]);
var inst_25432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25414);
var state_25461__$1 = state_25461;
var statearr_25535_25598 = state_25461__$1;
(statearr_25535_25598[(2)] = inst_25432);

(statearr_25535_25598[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (30))){
var state_25461__$1 = state_25461;
var statearr_25536_25599 = state_25461__$1;
(statearr_25536_25599[(2)] = null);

(statearr_25536_25599[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (10))){
var inst_25334 = (state_25461[(22)]);
var inst_25336 = cljs.core.chunked_seq_QMARK_.call(null,inst_25334);
var state_25461__$1 = state_25461;
if(inst_25336){
var statearr_25537_25600 = state_25461__$1;
(statearr_25537_25600[(1)] = (13));

} else {
var statearr_25538_25601 = state_25461__$1;
(statearr_25538_25601[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (18))){
var inst_25368 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
if(cljs.core.truth_(inst_25368)){
var statearr_25539_25602 = state_25461__$1;
(statearr_25539_25602[(1)] = (19));

} else {
var statearr_25540_25603 = state_25461__$1;
(statearr_25540_25603[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (42))){
var state_25461__$1 = state_25461;
var statearr_25541_25604 = state_25461__$1;
(statearr_25541_25604[(2)] = null);

(statearr_25541_25604[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (37))){
var inst_25427 = (state_25461[(2)]);
var state_25461__$1 = state_25461;
var statearr_25542_25605 = state_25461__$1;
(statearr_25542_25605[(2)] = inst_25427);

(statearr_25542_25605[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25462 === (8))){
var inst_25334 = (state_25461[(22)]);
var inst_25321 = (state_25461[(9)]);
var inst_25334__$1 = cljs.core.seq.call(null,inst_25321);
var state_25461__$1 = (function (){var statearr_25543 = state_25461;
(statearr_25543[(22)] = inst_25334__$1);

return statearr_25543;
})();
if(inst_25334__$1){
var statearr_25544_25606 = state_25461__$1;
(statearr_25544_25606[(1)] = (10));

} else {
var statearr_25545_25607 = state_25461__$1;
(statearr_25545_25607[(1)] = (11));

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
}
});})(c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22327__auto__,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto____0 = (function (){
var statearr_25546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25546[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto__);

(statearr_25546[(1)] = (1));

return statearr_25546;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto____1 = (function (state_25461){
while(true){
var ret_value__22329__auto__ = (function (){try{while(true){
var result__22330__auto__ = switch__22327__auto__.call(null,state_25461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22330__auto__;
}
break;
}
}catch (e25547){if((e25547 instanceof Object)){
var ex__22331__auto__ = e25547;
var statearr_25548_25608 = state_25461;
(statearr_25548_25608[(5)] = ex__22331__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25609 = state_25461;
state_25461 = G__25609;
continue;
} else {
return ret_value__22329__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto__ = function(state_25461){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto____1.call(this,state_25461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22328__auto__;
})()
;})(switch__22327__auto__,c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22424__auto__ = (function (){var statearr_25549 = f__22423__auto__.call(null);
(statearr_25549[(6)] = c__22422__auto__);

return statearr_25549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22424__auto__);
});})(c__22422__auto__,map__25306,map__25306__$1,opts,before_jsload,on_jsload,reload_dependents,map__25307,map__25307__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22422__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25612,link){
var map__25613 = p__25612;
var map__25613__$1 = (((((!((map__25613 == null))))?(((((map__25613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25613):map__25613);
var file = cljs.core.get.call(null,map__25613__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5720__auto__,map__25613,map__25613__$1,file){
return (function (p1__25610_SHARP_,p2__25611_SHARP_){
if(cljs.core._EQ_.call(null,p1__25610_SHARP_,p2__25611_SHARP_)){
return p1__25610_SHARP_;
} else {
return false;
}
});})(link_href,temp__5720__auto__,map__25613,map__25613__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25616){
var map__25617 = p__25616;
var map__25617__$1 = (((((!((map__25617 == null))))?(((((map__25617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25617):map__25617);
var match_length = cljs.core.get.call(null,map__25617__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25617__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25615_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25615_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25619_SHARP_,p2__25620_SHARP_){
return cljs.core.assoc.call(null,p1__25619_SHARP_,cljs.core.get.call(null,p2__25620_SHARP_,key),p2__25620_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5718__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5718__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_25621 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_25621);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_25621);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25622,p__25623){
var map__25624 = p__25622;
var map__25624__$1 = (((((!((map__25624 == null))))?(((((map__25624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25624):map__25624);
var on_cssload = cljs.core.get.call(null,map__25624__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__25625 = p__25623;
var map__25625__$1 = (((((!((map__25625 == null))))?(((((map__25625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25625.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25625):map__25625);
var files_msg = map__25625__$1;
var files = cljs.core.get.call(null,map__25625__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1611747932247
