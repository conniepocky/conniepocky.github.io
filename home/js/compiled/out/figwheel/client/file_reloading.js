// Compiled by ClojureScript 1.10.238 {}
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
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
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
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
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
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__41868_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__41868_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
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
var seq__41869 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__41870 = null;
var count__41871 = (0);
var i__41872 = (0);
while(true){
if((i__41872 < count__41871)){
var n = cljs.core._nth.call(null,chunk__41870,i__41872);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41873 = seq__41869;
var G__41874 = chunk__41870;
var G__41875 = count__41871;
var G__41876 = (i__41872 + (1));
seq__41869 = G__41873;
chunk__41870 = G__41874;
count__41871 = G__41875;
i__41872 = G__41876;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41869);
if(temp__5457__auto__){
var seq__41869__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41869__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41869__$1);
var G__41877 = cljs.core.chunk_rest.call(null,seq__41869__$1);
var G__41878 = c__4319__auto__;
var G__41879 = cljs.core.count.call(null,c__4319__auto__);
var G__41880 = (0);
seq__41869 = G__41877;
chunk__41870 = G__41878;
count__41871 = G__41879;
i__41872 = G__41880;
continue;
} else {
var n = cljs.core.first.call(null,seq__41869__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__41881 = cljs.core.next.call(null,seq__41869__$1);
var G__41882 = null;
var G__41883 = (0);
var G__41884 = (0);
seq__41869 = G__41881;
chunk__41870 = G__41882;
count__41871 = G__41883;
i__41872 = G__41884;
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
return cljs.core.some.call(null,(function (p__41885){
var vec__41886 = p__41885;
var _ = cljs.core.nth.call(null,vec__41886,(0),null);
var v = cljs.core.nth.call(null,vec__41886,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__41889){
var vec__41890 = p__41889;
var k = cljs.core.nth.call(null,vec__41890,(0),null);
var v = cljs.core.nth.call(null,vec__41890,(1),null);
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

var seq__41902_41910 = cljs.core.seq.call(null,deps);
var chunk__41903_41911 = null;
var count__41904_41912 = (0);
var i__41905_41913 = (0);
while(true){
if((i__41905_41913 < count__41904_41912)){
var dep_41914 = cljs.core._nth.call(null,chunk__41903_41911,i__41905_41913);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_41914;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41914));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41914,(depth + (1)),state);
} else {
}


var G__41915 = seq__41902_41910;
var G__41916 = chunk__41903_41911;
var G__41917 = count__41904_41912;
var G__41918 = (i__41905_41913 + (1));
seq__41902_41910 = G__41915;
chunk__41903_41911 = G__41916;
count__41904_41912 = G__41917;
i__41905_41913 = G__41918;
continue;
} else {
var temp__5457__auto___41919 = cljs.core.seq.call(null,seq__41902_41910);
if(temp__5457__auto___41919){
var seq__41902_41920__$1 = temp__5457__auto___41919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41902_41920__$1)){
var c__4319__auto___41921 = cljs.core.chunk_first.call(null,seq__41902_41920__$1);
var G__41922 = cljs.core.chunk_rest.call(null,seq__41902_41920__$1);
var G__41923 = c__4319__auto___41921;
var G__41924 = cljs.core.count.call(null,c__4319__auto___41921);
var G__41925 = (0);
seq__41902_41910 = G__41922;
chunk__41903_41911 = G__41923;
count__41904_41912 = G__41924;
i__41905_41913 = G__41925;
continue;
} else {
var dep_41926 = cljs.core.first.call(null,seq__41902_41920__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_41926;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_41926));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_41926,(depth + (1)),state);
} else {
}


var G__41927 = cljs.core.next.call(null,seq__41902_41920__$1);
var G__41928 = null;
var G__41929 = (0);
var G__41930 = (0);
seq__41902_41910 = G__41927;
chunk__41903_41911 = G__41928;
count__41904_41912 = G__41929;
i__41905_41913 = G__41930;
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
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__41906){
var vec__41907 = p__41906;
var seq__41908 = cljs.core.seq.call(null,vec__41907);
var first__41909 = cljs.core.first.call(null,seq__41908);
var seq__41908__$1 = cljs.core.next.call(null,seq__41908);
var x = first__41909;
var xs = seq__41908__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__41907,seq__41908,first__41909,seq__41908__$1,x,xs,get_deps__$1){
return (function (p1__41893_SHARP_){
return clojure.set.difference.call(null,p1__41893_SHARP_,x);
});})(vec__41907,seq__41908,first__41909,seq__41908__$1,x,xs,get_deps__$1))
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
var seq__41931 = cljs.core.seq.call(null,provides);
var chunk__41932 = null;
var count__41933 = (0);
var i__41934 = (0);
while(true){
if((i__41934 < count__41933)){
var prov = cljs.core._nth.call(null,chunk__41932,i__41934);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41935_41943 = cljs.core.seq.call(null,requires);
var chunk__41936_41944 = null;
var count__41937_41945 = (0);
var i__41938_41946 = (0);
while(true){
if((i__41938_41946 < count__41937_41945)){
var req_41947 = cljs.core._nth.call(null,chunk__41936_41944,i__41938_41946);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41947,prov);


var G__41948 = seq__41935_41943;
var G__41949 = chunk__41936_41944;
var G__41950 = count__41937_41945;
var G__41951 = (i__41938_41946 + (1));
seq__41935_41943 = G__41948;
chunk__41936_41944 = G__41949;
count__41937_41945 = G__41950;
i__41938_41946 = G__41951;
continue;
} else {
var temp__5457__auto___41952 = cljs.core.seq.call(null,seq__41935_41943);
if(temp__5457__auto___41952){
var seq__41935_41953__$1 = temp__5457__auto___41952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41935_41953__$1)){
var c__4319__auto___41954 = cljs.core.chunk_first.call(null,seq__41935_41953__$1);
var G__41955 = cljs.core.chunk_rest.call(null,seq__41935_41953__$1);
var G__41956 = c__4319__auto___41954;
var G__41957 = cljs.core.count.call(null,c__4319__auto___41954);
var G__41958 = (0);
seq__41935_41943 = G__41955;
chunk__41936_41944 = G__41956;
count__41937_41945 = G__41957;
i__41938_41946 = G__41958;
continue;
} else {
var req_41959 = cljs.core.first.call(null,seq__41935_41953__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41959,prov);


var G__41960 = cljs.core.next.call(null,seq__41935_41953__$1);
var G__41961 = null;
var G__41962 = (0);
var G__41963 = (0);
seq__41935_41943 = G__41960;
chunk__41936_41944 = G__41961;
count__41937_41945 = G__41962;
i__41938_41946 = G__41963;
continue;
}
} else {
}
}
break;
}


var G__41964 = seq__41931;
var G__41965 = chunk__41932;
var G__41966 = count__41933;
var G__41967 = (i__41934 + (1));
seq__41931 = G__41964;
chunk__41932 = G__41965;
count__41933 = G__41966;
i__41934 = G__41967;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__41931);
if(temp__5457__auto__){
var seq__41931__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41931__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__41931__$1);
var G__41968 = cljs.core.chunk_rest.call(null,seq__41931__$1);
var G__41969 = c__4319__auto__;
var G__41970 = cljs.core.count.call(null,c__4319__auto__);
var G__41971 = (0);
seq__41931 = G__41968;
chunk__41932 = G__41969;
count__41933 = G__41970;
i__41934 = G__41971;
continue;
} else {
var prov = cljs.core.first.call(null,seq__41931__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__41939_41972 = cljs.core.seq.call(null,requires);
var chunk__41940_41973 = null;
var count__41941_41974 = (0);
var i__41942_41975 = (0);
while(true){
if((i__41942_41975 < count__41941_41974)){
var req_41976 = cljs.core._nth.call(null,chunk__41940_41973,i__41942_41975);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41976,prov);


var G__41977 = seq__41939_41972;
var G__41978 = chunk__41940_41973;
var G__41979 = count__41941_41974;
var G__41980 = (i__41942_41975 + (1));
seq__41939_41972 = G__41977;
chunk__41940_41973 = G__41978;
count__41941_41974 = G__41979;
i__41942_41975 = G__41980;
continue;
} else {
var temp__5457__auto___41981__$1 = cljs.core.seq.call(null,seq__41939_41972);
if(temp__5457__auto___41981__$1){
var seq__41939_41982__$1 = temp__5457__auto___41981__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41939_41982__$1)){
var c__4319__auto___41983 = cljs.core.chunk_first.call(null,seq__41939_41982__$1);
var G__41984 = cljs.core.chunk_rest.call(null,seq__41939_41982__$1);
var G__41985 = c__4319__auto___41983;
var G__41986 = cljs.core.count.call(null,c__4319__auto___41983);
var G__41987 = (0);
seq__41939_41972 = G__41984;
chunk__41940_41973 = G__41985;
count__41941_41974 = G__41986;
i__41942_41975 = G__41987;
continue;
} else {
var req_41988 = cljs.core.first.call(null,seq__41939_41982__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_41988,prov);


var G__41989 = cljs.core.next.call(null,seq__41939_41982__$1);
var G__41990 = null;
var G__41991 = (0);
var G__41992 = (0);
seq__41939_41972 = G__41989;
chunk__41940_41973 = G__41990;
count__41941_41974 = G__41991;
i__41942_41975 = G__41992;
continue;
}
} else {
}
}
break;
}


var G__41993 = cljs.core.next.call(null,seq__41931__$1);
var G__41994 = null;
var G__41995 = (0);
var G__41996 = (0);
seq__41931 = G__41993;
chunk__41932 = G__41994;
count__41933 = G__41995;
i__41934 = G__41996;
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
var seq__41997_42001 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__41998_42002 = null;
var count__41999_42003 = (0);
var i__42000_42004 = (0);
while(true){
if((i__42000_42004 < count__41999_42003)){
var ns_42005 = cljs.core._nth.call(null,chunk__41998_42002,i__42000_42004);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42005);


var G__42006 = seq__41997_42001;
var G__42007 = chunk__41998_42002;
var G__42008 = count__41999_42003;
var G__42009 = (i__42000_42004 + (1));
seq__41997_42001 = G__42006;
chunk__41998_42002 = G__42007;
count__41999_42003 = G__42008;
i__42000_42004 = G__42009;
continue;
} else {
var temp__5457__auto___42010 = cljs.core.seq.call(null,seq__41997_42001);
if(temp__5457__auto___42010){
var seq__41997_42011__$1 = temp__5457__auto___42010;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41997_42011__$1)){
var c__4319__auto___42012 = cljs.core.chunk_first.call(null,seq__41997_42011__$1);
var G__42013 = cljs.core.chunk_rest.call(null,seq__41997_42011__$1);
var G__42014 = c__4319__auto___42012;
var G__42015 = cljs.core.count.call(null,c__4319__auto___42012);
var G__42016 = (0);
seq__41997_42001 = G__42013;
chunk__41998_42002 = G__42014;
count__41999_42003 = G__42015;
i__42000_42004 = G__42016;
continue;
} else {
var ns_42017 = cljs.core.first.call(null,seq__41997_42011__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42017);


var G__42018 = cljs.core.next.call(null,seq__41997_42011__$1);
var G__42019 = null;
var G__42020 = (0);
var G__42021 = (0);
seq__41997_42001 = G__42018;
chunk__41998_42002 = G__42019;
count__41999_42003 = G__42020;
i__42000_42004 = G__42021;
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
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
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
var G__42022__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42022 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42023__i = 0, G__42023__a = new Array(arguments.length -  0);
while (G__42023__i < G__42023__a.length) {G__42023__a[G__42023__i] = arguments[G__42023__i + 0]; ++G__42023__i;}
  args = new cljs.core.IndexedSeq(G__42023__a,0,null);
} 
return G__42022__delegate.call(this,args);};
G__42022.cljs$lang$maxFixedArity = 0;
G__42022.cljs$lang$applyTo = (function (arglist__42024){
var args = cljs.core.seq(arglist__42024);
return G__42022__delegate(args);
});
G__42022.cljs$core$IFn$_invoke$arity$variadic = G__42022__delegate;
return G__42022;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__42025_SHARP_,p2__42026_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42025_SHARP_)].join('')),p2__42026_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__42027_SHARP_,p2__42028_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42027_SHARP_)].join(''),p2__42028_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__42029 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__42029.addCallback(((function (G__42029){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__42029))
);

G__42029.addErrback(((function (G__42029){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__42029))
);

return G__42029;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e42030){if((e42030 instanceof Error)){
var e = e42030;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42030;

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
}catch (e42031){if((e42031 instanceof Error)){
var e = e42031;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42031;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42032 = cljs.core._EQ_;
var expr__42033 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42032.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42033))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__42032.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42033))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__42032.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__42033))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__42032,expr__42033){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42032,expr__42033))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42035,callback){
var map__42036 = p__42035;
var map__42036__$1 = ((((!((map__42036 == null)))?(((((map__42036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42036):map__42036);
var file_msg = map__42036__$1;
var request_url = cljs.core.get.call(null,map__42036__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__42036,map__42036__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42036,map__42036__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
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
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__){
return (function (state_42074){
var state_val_42075 = (state_42074[(1)]);
if((state_val_42075 === (7))){
var inst_42070 = (state_42074[(2)]);
var state_42074__$1 = state_42074;
var statearr_42076_42102 = state_42074__$1;
(statearr_42076_42102[(2)] = inst_42070);

(statearr_42076_42102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (1))){
var state_42074__$1 = state_42074;
var statearr_42077_42103 = state_42074__$1;
(statearr_42077_42103[(2)] = null);

(statearr_42077_42103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (4))){
var inst_42040 = (state_42074[(7)]);
var inst_42040__$1 = (state_42074[(2)]);
var state_42074__$1 = (function (){var statearr_42078 = state_42074;
(statearr_42078[(7)] = inst_42040__$1);

return statearr_42078;
})();
if(cljs.core.truth_(inst_42040__$1)){
var statearr_42079_42104 = state_42074__$1;
(statearr_42079_42104[(1)] = (5));

} else {
var statearr_42080_42105 = state_42074__$1;
(statearr_42080_42105[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (15))){
var inst_42055 = (state_42074[(8)]);
var inst_42053 = (state_42074[(9)]);
var inst_42057 = inst_42055.call(null,inst_42053);
var state_42074__$1 = state_42074;
var statearr_42081_42106 = state_42074__$1;
(statearr_42081_42106[(2)] = inst_42057);

(statearr_42081_42106[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (13))){
var inst_42064 = (state_42074[(2)]);
var state_42074__$1 = state_42074;
var statearr_42082_42107 = state_42074__$1;
(statearr_42082_42107[(2)] = inst_42064);

(statearr_42082_42107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (6))){
var state_42074__$1 = state_42074;
var statearr_42083_42108 = state_42074__$1;
(statearr_42083_42108[(2)] = null);

(statearr_42083_42108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (17))){
var inst_42061 = (state_42074[(2)]);
var state_42074__$1 = state_42074;
var statearr_42084_42109 = state_42074__$1;
(statearr_42084_42109[(2)] = inst_42061);

(statearr_42084_42109[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (3))){
var inst_42072 = (state_42074[(2)]);
var state_42074__$1 = state_42074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42074__$1,inst_42072);
} else {
if((state_val_42075 === (12))){
var state_42074__$1 = state_42074;
var statearr_42085_42110 = state_42074__$1;
(statearr_42085_42110[(2)] = null);

(statearr_42085_42110[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (2))){
var state_42074__$1 = state_42074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42074__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42075 === (11))){
var inst_42045 = (state_42074[(10)]);
var inst_42051 = figwheel.client.file_reloading.blocking_load.call(null,inst_42045);
var state_42074__$1 = state_42074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42074__$1,(14),inst_42051);
} else {
if((state_val_42075 === (9))){
var inst_42045 = (state_42074[(10)]);
var state_42074__$1 = state_42074;
if(cljs.core.truth_(inst_42045)){
var statearr_42086_42111 = state_42074__$1;
(statearr_42086_42111[(1)] = (11));

} else {
var statearr_42087_42112 = state_42074__$1;
(statearr_42087_42112[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (5))){
var inst_42046 = (state_42074[(11)]);
var inst_42040 = (state_42074[(7)]);
var inst_42045 = cljs.core.nth.call(null,inst_42040,(0),null);
var inst_42046__$1 = cljs.core.nth.call(null,inst_42040,(1),null);
var state_42074__$1 = (function (){var statearr_42088 = state_42074;
(statearr_42088[(10)] = inst_42045);

(statearr_42088[(11)] = inst_42046__$1);

return statearr_42088;
})();
if(cljs.core.truth_(inst_42046__$1)){
var statearr_42089_42113 = state_42074__$1;
(statearr_42089_42113[(1)] = (8));

} else {
var statearr_42090_42114 = state_42074__$1;
(statearr_42090_42114[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (14))){
var inst_42045 = (state_42074[(10)]);
var inst_42055 = (state_42074[(8)]);
var inst_42053 = (state_42074[(2)]);
var inst_42054 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42055__$1 = cljs.core.get.call(null,inst_42054,inst_42045);
var state_42074__$1 = (function (){var statearr_42091 = state_42074;
(statearr_42091[(8)] = inst_42055__$1);

(statearr_42091[(9)] = inst_42053);

return statearr_42091;
})();
if(cljs.core.truth_(inst_42055__$1)){
var statearr_42092_42115 = state_42074__$1;
(statearr_42092_42115[(1)] = (15));

} else {
var statearr_42093_42116 = state_42074__$1;
(statearr_42093_42116[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (16))){
var inst_42053 = (state_42074[(9)]);
var inst_42059 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42053);
var state_42074__$1 = state_42074;
var statearr_42094_42117 = state_42074__$1;
(statearr_42094_42117[(2)] = inst_42059);

(statearr_42094_42117[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (10))){
var inst_42066 = (state_42074[(2)]);
var state_42074__$1 = (function (){var statearr_42095 = state_42074;
(statearr_42095[(12)] = inst_42066);

return statearr_42095;
})();
var statearr_42096_42118 = state_42074__$1;
(statearr_42096_42118[(2)] = null);

(statearr_42096_42118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42075 === (8))){
var inst_42046 = (state_42074[(11)]);
var inst_42048 = eval(inst_42046);
var state_42074__$1 = state_42074;
var statearr_42097_42119 = state_42074__$1;
(statearr_42097_42119[(2)] = inst_42048);

(statearr_42097_42119[(1)] = (10));


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
});})(c__32474__auto__))
;
return ((function (switch__32384__auto__,c__32474__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32385__auto__ = null;
var figwheel$client$file_reloading$state_machine__32385__auto____0 = (function (){
var statearr_42098 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42098[(0)] = figwheel$client$file_reloading$state_machine__32385__auto__);

(statearr_42098[(1)] = (1));

return statearr_42098;
});
var figwheel$client$file_reloading$state_machine__32385__auto____1 = (function (state_42074){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_42074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e42099){if((e42099 instanceof Object)){
var ex__32388__auto__ = e42099;
var statearr_42100_42120 = state_42074;
(statearr_42100_42120[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42121 = state_42074;
state_42074 = G__42121;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32385__auto__ = function(state_42074){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32385__auto____1.call(this,state_42074);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32385__auto____0;
figwheel$client$file_reloading$state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32385__auto____1;
return figwheel$client$file_reloading$state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__))
})();
var state__32476__auto__ = (function (){var statearr_42101 = f__32475__auto__.call(null);
(statearr_42101[(6)] = c__32474__auto__);

return statearr_42101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__))
);

return c__32474__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__42123 = arguments.length;
switch (G__42123) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42125,callback){
var map__42126 = p__42125;
var map__42126__$1 = ((((!((map__42126 == null)))?(((((map__42126.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42126.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42126):map__42126);
var file_msg = map__42126__$1;
var namespace = cljs.core.get.call(null,map__42126__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42126,map__42126__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42126,map__42126__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__42128){
var map__42129 = p__42128;
var map__42129__$1 = ((((!((map__42129 == null)))?(((((map__42129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42129):map__42129);
var file_msg = map__42129__$1;
var namespace = cljs.core.get.call(null,map__42129__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42131){
var map__42132 = p__42131;
var map__42132__$1 = ((((!((map__42132 == null)))?(((((map__42132.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42132.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42132):map__42132);
var file_msg = map__42132__$1;
var namespace = cljs.core.get.call(null,map__42132__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42134,callback){
var map__42135 = p__42134;
var map__42135__$1 = ((((!((map__42135 == null)))?(((((map__42135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42135):map__42135);
var file_msg = map__42135__$1;
var request_url = cljs.core.get.call(null,map__42135__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42135__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32474__auto___42185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto___42185,out){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto___42185,out){
return (function (state_42170){
var state_val_42171 = (state_42170[(1)]);
if((state_val_42171 === (1))){
var inst_42144 = cljs.core.seq.call(null,files);
var inst_42145 = cljs.core.first.call(null,inst_42144);
var inst_42146 = cljs.core.next.call(null,inst_42144);
var inst_42147 = files;
var state_42170__$1 = (function (){var statearr_42172 = state_42170;
(statearr_42172[(7)] = inst_42146);

(statearr_42172[(8)] = inst_42147);

(statearr_42172[(9)] = inst_42145);

return statearr_42172;
})();
var statearr_42173_42186 = state_42170__$1;
(statearr_42173_42186[(2)] = null);

(statearr_42173_42186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (2))){
var inst_42147 = (state_42170[(8)]);
var inst_42153 = (state_42170[(10)]);
var inst_42152 = cljs.core.seq.call(null,inst_42147);
var inst_42153__$1 = cljs.core.first.call(null,inst_42152);
var inst_42154 = cljs.core.next.call(null,inst_42152);
var inst_42155 = (inst_42153__$1 == null);
var inst_42156 = cljs.core.not.call(null,inst_42155);
var state_42170__$1 = (function (){var statearr_42174 = state_42170;
(statearr_42174[(10)] = inst_42153__$1);

(statearr_42174[(11)] = inst_42154);

return statearr_42174;
})();
if(inst_42156){
var statearr_42175_42187 = state_42170__$1;
(statearr_42175_42187[(1)] = (4));

} else {
var statearr_42176_42188 = state_42170__$1;
(statearr_42176_42188[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (3))){
var inst_42168 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42170__$1,inst_42168);
} else {
if((state_val_42171 === (4))){
var inst_42153 = (state_42170[(10)]);
var inst_42158 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42153);
var state_42170__$1 = state_42170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42170__$1,(7),inst_42158);
} else {
if((state_val_42171 === (5))){
var inst_42164 = cljs.core.async.close_BANG_.call(null,out);
var state_42170__$1 = state_42170;
var statearr_42177_42189 = state_42170__$1;
(statearr_42177_42189[(2)] = inst_42164);

(statearr_42177_42189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (6))){
var inst_42166 = (state_42170[(2)]);
var state_42170__$1 = state_42170;
var statearr_42178_42190 = state_42170__$1;
(statearr_42178_42190[(2)] = inst_42166);

(statearr_42178_42190[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42171 === (7))){
var inst_42154 = (state_42170[(11)]);
var inst_42160 = (state_42170[(2)]);
var inst_42161 = cljs.core.async.put_BANG_.call(null,out,inst_42160);
var inst_42147 = inst_42154;
var state_42170__$1 = (function (){var statearr_42179 = state_42170;
(statearr_42179[(8)] = inst_42147);

(statearr_42179[(12)] = inst_42161);

return statearr_42179;
})();
var statearr_42180_42191 = state_42170__$1;
(statearr_42180_42191[(2)] = null);

(statearr_42180_42191[(1)] = (2));


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
});})(c__32474__auto___42185,out))
;
return ((function (switch__32384__auto__,c__32474__auto___42185,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto____0 = (function (){
var statearr_42181 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42181[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto__);

(statearr_42181[(1)] = (1));

return statearr_42181;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto____1 = (function (state_42170){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_42170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e42182){if((e42182 instanceof Object)){
var ex__32388__auto__ = e42182;
var statearr_42183_42192 = state_42170;
(statearr_42183_42192[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42193 = state_42170;
state_42170 = G__42193;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto__ = function(state_42170){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto____1.call(this,state_42170);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto___42185,out))
})();
var state__32476__auto__ = (function (){var statearr_42184 = f__32475__auto__.call(null);
(statearr_42184[(6)] = c__32474__auto___42185);

return statearr_42184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto___42185,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42194,opts){
var map__42195 = p__42194;
var map__42195__$1 = ((((!((map__42195 == null)))?(((((map__42195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42195):map__42195);
var eval_body = cljs.core.get.call(null,map__42195__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42195__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42197){var e = e42197;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42198_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42198_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
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
return cljs.core.map.call(null,(function (p__42199){
var vec__42200 = p__42199;
var k = cljs.core.nth.call(null,vec__42200,(0),null);
var v = cljs.core.nth.call(null,vec__42200,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42203){
var vec__42204 = p__42203;
var k = cljs.core.nth.call(null,vec__42204,(0),null);
var v = cljs.core.nth.call(null,vec__42204,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42210,p__42211){
var map__42212 = p__42210;
var map__42212__$1 = ((((!((map__42212 == null)))?(((((map__42212.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42212.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42212):map__42212);
var opts = map__42212__$1;
var before_jsload = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__42212__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__42213 = p__42211;
var map__42213__$1 = ((((!((map__42213 == null)))?(((((map__42213.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42213.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42213):map__42213);
var msg = map__42213__$1;
var files = cljs.core.get.call(null,map__42213__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__42213__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__42213__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32474__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32475__auto__ = (function (){var switch__32384__auto__ = ((function (c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_42367){
var state_val_42368 = (state_42367[(1)]);
if((state_val_42368 === (7))){
var inst_42227 = (state_42367[(7)]);
var inst_42228 = (state_42367[(8)]);
var inst_42229 = (state_42367[(9)]);
var inst_42230 = (state_42367[(10)]);
var inst_42235 = cljs.core._nth.call(null,inst_42228,inst_42230);
var inst_42236 = figwheel.client.file_reloading.eval_body.call(null,inst_42235,opts);
var inst_42237 = (inst_42230 + (1));
var tmp42369 = inst_42227;
var tmp42370 = inst_42228;
var tmp42371 = inst_42229;
var inst_42227__$1 = tmp42369;
var inst_42228__$1 = tmp42370;
var inst_42229__$1 = tmp42371;
var inst_42230__$1 = inst_42237;
var state_42367__$1 = (function (){var statearr_42372 = state_42367;
(statearr_42372[(7)] = inst_42227__$1);

(statearr_42372[(8)] = inst_42228__$1);

(statearr_42372[(11)] = inst_42236);

(statearr_42372[(9)] = inst_42229__$1);

(statearr_42372[(10)] = inst_42230__$1);

return statearr_42372;
})();
var statearr_42373_42456 = state_42367__$1;
(statearr_42373_42456[(2)] = null);

(statearr_42373_42456[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (20))){
var inst_42270 = (state_42367[(12)]);
var inst_42278 = figwheel.client.file_reloading.sort_files.call(null,inst_42270);
var state_42367__$1 = state_42367;
var statearr_42374_42457 = state_42367__$1;
(statearr_42374_42457[(2)] = inst_42278);

(statearr_42374_42457[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (27))){
var state_42367__$1 = state_42367;
var statearr_42375_42458 = state_42367__$1;
(statearr_42375_42458[(2)] = null);

(statearr_42375_42458[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (1))){
var inst_42219 = (state_42367[(13)]);
var inst_42216 = before_jsload.call(null,files);
var inst_42217 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_42218 = (function (){return ((function (inst_42219,inst_42216,inst_42217,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42207_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42207_SHARP_);
});
;})(inst_42219,inst_42216,inst_42217,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42219__$1 = cljs.core.filter.call(null,inst_42218,files);
var inst_42220 = cljs.core.not_empty.call(null,inst_42219__$1);
var state_42367__$1 = (function (){var statearr_42376 = state_42367;
(statearr_42376[(14)] = inst_42216);

(statearr_42376[(15)] = inst_42217);

(statearr_42376[(13)] = inst_42219__$1);

return statearr_42376;
})();
if(cljs.core.truth_(inst_42220)){
var statearr_42377_42459 = state_42367__$1;
(statearr_42377_42459[(1)] = (2));

} else {
var statearr_42378_42460 = state_42367__$1;
(statearr_42378_42460[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (24))){
var state_42367__$1 = state_42367;
var statearr_42379_42461 = state_42367__$1;
(statearr_42379_42461[(2)] = null);

(statearr_42379_42461[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (39))){
var inst_42320 = (state_42367[(16)]);
var state_42367__$1 = state_42367;
var statearr_42380_42462 = state_42367__$1;
(statearr_42380_42462[(2)] = inst_42320);

(statearr_42380_42462[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (46))){
var inst_42362 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
var statearr_42381_42463 = state_42367__$1;
(statearr_42381_42463[(2)] = inst_42362);

(statearr_42381_42463[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (4))){
var inst_42264 = (state_42367[(2)]);
var inst_42265 = cljs.core.List.EMPTY;
var inst_42266 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_42265);
var inst_42267 = (function (){return ((function (inst_42264,inst_42265,inst_42266,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42208_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42208_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42208_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__42208_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_42264,inst_42265,inst_42266,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42268 = cljs.core.filter.call(null,inst_42267,files);
var inst_42269 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_42270 = cljs.core.concat.call(null,inst_42268,inst_42269);
var state_42367__$1 = (function (){var statearr_42382 = state_42367;
(statearr_42382[(17)] = inst_42266);

(statearr_42382[(18)] = inst_42264);

(statearr_42382[(12)] = inst_42270);

return statearr_42382;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_42383_42464 = state_42367__$1;
(statearr_42383_42464[(1)] = (16));

} else {
var statearr_42384_42465 = state_42367__$1;
(statearr_42384_42465[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (15))){
var inst_42254 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
var statearr_42385_42466 = state_42367__$1;
(statearr_42385_42466[(2)] = inst_42254);

(statearr_42385_42466[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (21))){
var inst_42280 = (state_42367[(19)]);
var inst_42280__$1 = (state_42367[(2)]);
var inst_42281 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42280__$1);
var state_42367__$1 = (function (){var statearr_42386 = state_42367;
(statearr_42386[(19)] = inst_42280__$1);

return statearr_42386;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42367__$1,(22),inst_42281);
} else {
if((state_val_42368 === (31))){
var inst_42365 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42367__$1,inst_42365);
} else {
if((state_val_42368 === (32))){
var inst_42320 = (state_42367[(16)]);
var inst_42325 = inst_42320.cljs$lang$protocol_mask$partition0$;
var inst_42326 = (inst_42325 & (64));
var inst_42327 = inst_42320.cljs$core$ISeq$;
var inst_42328 = (cljs.core.PROTOCOL_SENTINEL === inst_42327);
var inst_42329 = ((inst_42326) || (inst_42328));
var state_42367__$1 = state_42367;
if(cljs.core.truth_(inst_42329)){
var statearr_42387_42467 = state_42367__$1;
(statearr_42387_42467[(1)] = (35));

} else {
var statearr_42388_42468 = state_42367__$1;
(statearr_42388_42468[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (40))){
var inst_42342 = (state_42367[(20)]);
var inst_42341 = (state_42367[(2)]);
var inst_42342__$1 = cljs.core.get.call(null,inst_42341,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42343 = cljs.core.get.call(null,inst_42341,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42344 = cljs.core.not_empty.call(null,inst_42342__$1);
var state_42367__$1 = (function (){var statearr_42389 = state_42367;
(statearr_42389[(20)] = inst_42342__$1);

(statearr_42389[(21)] = inst_42343);

return statearr_42389;
})();
if(cljs.core.truth_(inst_42344)){
var statearr_42390_42469 = state_42367__$1;
(statearr_42390_42469[(1)] = (41));

} else {
var statearr_42391_42470 = state_42367__$1;
(statearr_42391_42470[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (33))){
var state_42367__$1 = state_42367;
var statearr_42392_42471 = state_42367__$1;
(statearr_42392_42471[(2)] = false);

(statearr_42392_42471[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (13))){
var inst_42240 = (state_42367[(22)]);
var inst_42244 = cljs.core.chunk_first.call(null,inst_42240);
var inst_42245 = cljs.core.chunk_rest.call(null,inst_42240);
var inst_42246 = cljs.core.count.call(null,inst_42244);
var inst_42227 = inst_42245;
var inst_42228 = inst_42244;
var inst_42229 = inst_42246;
var inst_42230 = (0);
var state_42367__$1 = (function (){var statearr_42393 = state_42367;
(statearr_42393[(7)] = inst_42227);

(statearr_42393[(8)] = inst_42228);

(statearr_42393[(9)] = inst_42229);

(statearr_42393[(10)] = inst_42230);

return statearr_42393;
})();
var statearr_42394_42472 = state_42367__$1;
(statearr_42394_42472[(2)] = null);

(statearr_42394_42472[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (22))){
var inst_42288 = (state_42367[(23)]);
var inst_42280 = (state_42367[(19)]);
var inst_42283 = (state_42367[(24)]);
var inst_42284 = (state_42367[(25)]);
var inst_42283__$1 = (state_42367[(2)]);
var inst_42284__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42283__$1);
var inst_42285 = (function (){var all_files = inst_42280;
var res_SINGLEQUOTE_ = inst_42283__$1;
var res = inst_42284__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_42288,inst_42280,inst_42283,inst_42284,inst_42283__$1,inst_42284__$1,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42209_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42209_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_42288,inst_42280,inst_42283,inst_42284,inst_42283__$1,inst_42284__$1,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42286 = cljs.core.filter.call(null,inst_42285,inst_42283__$1);
var inst_42287 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_42288__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42287);
var inst_42289 = cljs.core.not_empty.call(null,inst_42288__$1);
var state_42367__$1 = (function (){var statearr_42395 = state_42367;
(statearr_42395[(23)] = inst_42288__$1);

(statearr_42395[(26)] = inst_42286);

(statearr_42395[(24)] = inst_42283__$1);

(statearr_42395[(25)] = inst_42284__$1);

return statearr_42395;
})();
if(cljs.core.truth_(inst_42289)){
var statearr_42396_42473 = state_42367__$1;
(statearr_42396_42473[(1)] = (23));

} else {
var statearr_42397_42474 = state_42367__$1;
(statearr_42397_42474[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (36))){
var state_42367__$1 = state_42367;
var statearr_42398_42475 = state_42367__$1;
(statearr_42398_42475[(2)] = false);

(statearr_42398_42475[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (41))){
var inst_42342 = (state_42367[(20)]);
var inst_42346 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_42347 = cljs.core.map.call(null,inst_42346,inst_42342);
var inst_42348 = cljs.core.pr_str.call(null,inst_42347);
var inst_42349 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42348)].join('');
var inst_42350 = figwheel.client.utils.log.call(null,inst_42349);
var state_42367__$1 = state_42367;
var statearr_42399_42476 = state_42367__$1;
(statearr_42399_42476[(2)] = inst_42350);

(statearr_42399_42476[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (43))){
var inst_42343 = (state_42367[(21)]);
var inst_42353 = (state_42367[(2)]);
var inst_42354 = cljs.core.not_empty.call(null,inst_42343);
var state_42367__$1 = (function (){var statearr_42400 = state_42367;
(statearr_42400[(27)] = inst_42353);

return statearr_42400;
})();
if(cljs.core.truth_(inst_42354)){
var statearr_42401_42477 = state_42367__$1;
(statearr_42401_42477[(1)] = (44));

} else {
var statearr_42402_42478 = state_42367__$1;
(statearr_42402_42478[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (29))){
var inst_42320 = (state_42367[(16)]);
var inst_42288 = (state_42367[(23)]);
var inst_42286 = (state_42367[(26)]);
var inst_42280 = (state_42367[(19)]);
var inst_42283 = (state_42367[(24)]);
var inst_42284 = (state_42367[(25)]);
var inst_42316 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42319 = (function (){var all_files = inst_42280;
var res_SINGLEQUOTE_ = inst_42283;
var res = inst_42284;
var files_not_loaded = inst_42286;
var dependencies_that_loaded = inst_42288;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42320,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42316,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42318){
var map__42403 = p__42318;
var map__42403__$1 = ((((!((map__42403 == null)))?(((((map__42403.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42403.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42403):map__42403);
var namespace = cljs.core.get.call(null,map__42403__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42320,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42316,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42320__$1 = cljs.core.group_by.call(null,inst_42319,inst_42286);
var inst_42322 = (inst_42320__$1 == null);
var inst_42323 = cljs.core.not.call(null,inst_42322);
var state_42367__$1 = (function (){var statearr_42405 = state_42367;
(statearr_42405[(16)] = inst_42320__$1);

(statearr_42405[(28)] = inst_42316);

return statearr_42405;
})();
if(inst_42323){
var statearr_42406_42479 = state_42367__$1;
(statearr_42406_42479[(1)] = (32));

} else {
var statearr_42407_42480 = state_42367__$1;
(statearr_42407_42480[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (44))){
var inst_42343 = (state_42367[(21)]);
var inst_42356 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42343);
var inst_42357 = cljs.core.pr_str.call(null,inst_42356);
var inst_42358 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42357)].join('');
var inst_42359 = figwheel.client.utils.log.call(null,inst_42358);
var state_42367__$1 = state_42367;
var statearr_42408_42481 = state_42367__$1;
(statearr_42408_42481[(2)] = inst_42359);

(statearr_42408_42481[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (6))){
var inst_42261 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
var statearr_42409_42482 = state_42367__$1;
(statearr_42409_42482[(2)] = inst_42261);

(statearr_42409_42482[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (28))){
var inst_42286 = (state_42367[(26)]);
var inst_42313 = (state_42367[(2)]);
var inst_42314 = cljs.core.not_empty.call(null,inst_42286);
var state_42367__$1 = (function (){var statearr_42410 = state_42367;
(statearr_42410[(29)] = inst_42313);

return statearr_42410;
})();
if(cljs.core.truth_(inst_42314)){
var statearr_42411_42483 = state_42367__$1;
(statearr_42411_42483[(1)] = (29));

} else {
var statearr_42412_42484 = state_42367__$1;
(statearr_42412_42484[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (25))){
var inst_42284 = (state_42367[(25)]);
var inst_42300 = (state_42367[(2)]);
var inst_42301 = cljs.core.not_empty.call(null,inst_42284);
var state_42367__$1 = (function (){var statearr_42413 = state_42367;
(statearr_42413[(30)] = inst_42300);

return statearr_42413;
})();
if(cljs.core.truth_(inst_42301)){
var statearr_42414_42485 = state_42367__$1;
(statearr_42414_42485[(1)] = (26));

} else {
var statearr_42415_42486 = state_42367__$1;
(statearr_42415_42486[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (34))){
var inst_42336 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
if(cljs.core.truth_(inst_42336)){
var statearr_42416_42487 = state_42367__$1;
(statearr_42416_42487[(1)] = (38));

} else {
var statearr_42417_42488 = state_42367__$1;
(statearr_42417_42488[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (17))){
var state_42367__$1 = state_42367;
var statearr_42418_42489 = state_42367__$1;
(statearr_42418_42489[(2)] = recompile_dependents);

(statearr_42418_42489[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (3))){
var state_42367__$1 = state_42367;
var statearr_42419_42490 = state_42367__$1;
(statearr_42419_42490[(2)] = null);

(statearr_42419_42490[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (12))){
var inst_42257 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
var statearr_42420_42491 = state_42367__$1;
(statearr_42420_42491[(2)] = inst_42257);

(statearr_42420_42491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (2))){
var inst_42219 = (state_42367[(13)]);
var inst_42226 = cljs.core.seq.call(null,inst_42219);
var inst_42227 = inst_42226;
var inst_42228 = null;
var inst_42229 = (0);
var inst_42230 = (0);
var state_42367__$1 = (function (){var statearr_42421 = state_42367;
(statearr_42421[(7)] = inst_42227);

(statearr_42421[(8)] = inst_42228);

(statearr_42421[(9)] = inst_42229);

(statearr_42421[(10)] = inst_42230);

return statearr_42421;
})();
var statearr_42422_42492 = state_42367__$1;
(statearr_42422_42492[(2)] = null);

(statearr_42422_42492[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (23))){
var inst_42288 = (state_42367[(23)]);
var inst_42286 = (state_42367[(26)]);
var inst_42280 = (state_42367[(19)]);
var inst_42283 = (state_42367[(24)]);
var inst_42284 = (state_42367[(25)]);
var inst_42291 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_42293 = (function (){var all_files = inst_42280;
var res_SINGLEQUOTE_ = inst_42283;
var res = inst_42284;
var files_not_loaded = inst_42286;
var dependencies_that_loaded = inst_42288;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42291,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42292){
var map__42423 = p__42292;
var map__42423__$1 = ((((!((map__42423 == null)))?(((((map__42423.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42423.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42423):map__42423);
var request_url = cljs.core.get.call(null,map__42423__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42291,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42294 = cljs.core.reverse.call(null,inst_42288);
var inst_42295 = cljs.core.map.call(null,inst_42293,inst_42294);
var inst_42296 = cljs.core.pr_str.call(null,inst_42295);
var inst_42297 = figwheel.client.utils.log.call(null,inst_42296);
var state_42367__$1 = (function (){var statearr_42425 = state_42367;
(statearr_42425[(31)] = inst_42291);

return statearr_42425;
})();
var statearr_42426_42493 = state_42367__$1;
(statearr_42426_42493[(2)] = inst_42297);

(statearr_42426_42493[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (35))){
var state_42367__$1 = state_42367;
var statearr_42427_42494 = state_42367__$1;
(statearr_42427_42494[(2)] = true);

(statearr_42427_42494[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (19))){
var inst_42270 = (state_42367[(12)]);
var inst_42276 = figwheel.client.file_reloading.expand_files.call(null,inst_42270);
var state_42367__$1 = state_42367;
var statearr_42428_42495 = state_42367__$1;
(statearr_42428_42495[(2)] = inst_42276);

(statearr_42428_42495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (11))){
var state_42367__$1 = state_42367;
var statearr_42429_42496 = state_42367__$1;
(statearr_42429_42496[(2)] = null);

(statearr_42429_42496[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (9))){
var inst_42259 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
var statearr_42430_42497 = state_42367__$1;
(statearr_42430_42497[(2)] = inst_42259);

(statearr_42430_42497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (5))){
var inst_42229 = (state_42367[(9)]);
var inst_42230 = (state_42367[(10)]);
var inst_42232 = (inst_42230 < inst_42229);
var inst_42233 = inst_42232;
var state_42367__$1 = state_42367;
if(cljs.core.truth_(inst_42233)){
var statearr_42431_42498 = state_42367__$1;
(statearr_42431_42498[(1)] = (7));

} else {
var statearr_42432_42499 = state_42367__$1;
(statearr_42432_42499[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (14))){
var inst_42240 = (state_42367[(22)]);
var inst_42249 = cljs.core.first.call(null,inst_42240);
var inst_42250 = figwheel.client.file_reloading.eval_body.call(null,inst_42249,opts);
var inst_42251 = cljs.core.next.call(null,inst_42240);
var inst_42227 = inst_42251;
var inst_42228 = null;
var inst_42229 = (0);
var inst_42230 = (0);
var state_42367__$1 = (function (){var statearr_42433 = state_42367;
(statearr_42433[(7)] = inst_42227);

(statearr_42433[(8)] = inst_42228);

(statearr_42433[(32)] = inst_42250);

(statearr_42433[(9)] = inst_42229);

(statearr_42433[(10)] = inst_42230);

return statearr_42433;
})();
var statearr_42434_42500 = state_42367__$1;
(statearr_42434_42500[(2)] = null);

(statearr_42434_42500[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (45))){
var state_42367__$1 = state_42367;
var statearr_42435_42501 = state_42367__$1;
(statearr_42435_42501[(2)] = null);

(statearr_42435_42501[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (26))){
var inst_42288 = (state_42367[(23)]);
var inst_42286 = (state_42367[(26)]);
var inst_42280 = (state_42367[(19)]);
var inst_42283 = (state_42367[(24)]);
var inst_42284 = (state_42367[(25)]);
var inst_42303 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42305 = (function (){var all_files = inst_42280;
var res_SINGLEQUOTE_ = inst_42283;
var res = inst_42284;
var files_not_loaded = inst_42286;
var dependencies_that_loaded = inst_42288;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42303,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__42304){
var map__42436 = p__42304;
var map__42436__$1 = ((((!((map__42436 == null)))?(((((map__42436.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42436.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42436):map__42436);
var namespace = cljs.core.get.call(null,map__42436__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42436__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42303,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42306 = cljs.core.map.call(null,inst_42305,inst_42284);
var inst_42307 = cljs.core.pr_str.call(null,inst_42306);
var inst_42308 = figwheel.client.utils.log.call(null,inst_42307);
var inst_42309 = (function (){var all_files = inst_42280;
var res_SINGLEQUOTE_ = inst_42283;
var res = inst_42284;
var files_not_loaded = inst_42286;
var dependencies_that_loaded = inst_42288;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42303,inst_42305,inst_42306,inst_42307,inst_42308,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_42288,inst_42286,inst_42280,inst_42283,inst_42284,inst_42303,inst_42305,inst_42306,inst_42307,inst_42308,state_val_42368,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_42310 = setTimeout(inst_42309,(10));
var state_42367__$1 = (function (){var statearr_42438 = state_42367;
(statearr_42438[(33)] = inst_42308);

(statearr_42438[(34)] = inst_42303);

return statearr_42438;
})();
var statearr_42439_42502 = state_42367__$1;
(statearr_42439_42502[(2)] = inst_42310);

(statearr_42439_42502[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (16))){
var state_42367__$1 = state_42367;
var statearr_42440_42503 = state_42367__$1;
(statearr_42440_42503[(2)] = reload_dependents);

(statearr_42440_42503[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (38))){
var inst_42320 = (state_42367[(16)]);
var inst_42338 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42320);
var state_42367__$1 = state_42367;
var statearr_42441_42504 = state_42367__$1;
(statearr_42441_42504[(2)] = inst_42338);

(statearr_42441_42504[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (30))){
var state_42367__$1 = state_42367;
var statearr_42442_42505 = state_42367__$1;
(statearr_42442_42505[(2)] = null);

(statearr_42442_42505[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (10))){
var inst_42240 = (state_42367[(22)]);
var inst_42242 = cljs.core.chunked_seq_QMARK_.call(null,inst_42240);
var state_42367__$1 = state_42367;
if(inst_42242){
var statearr_42443_42506 = state_42367__$1;
(statearr_42443_42506[(1)] = (13));

} else {
var statearr_42444_42507 = state_42367__$1;
(statearr_42444_42507[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (18))){
var inst_42274 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
if(cljs.core.truth_(inst_42274)){
var statearr_42445_42508 = state_42367__$1;
(statearr_42445_42508[(1)] = (19));

} else {
var statearr_42446_42509 = state_42367__$1;
(statearr_42446_42509[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (42))){
var state_42367__$1 = state_42367;
var statearr_42447_42510 = state_42367__$1;
(statearr_42447_42510[(2)] = null);

(statearr_42447_42510[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (37))){
var inst_42333 = (state_42367[(2)]);
var state_42367__$1 = state_42367;
var statearr_42448_42511 = state_42367__$1;
(statearr_42448_42511[(2)] = inst_42333);

(statearr_42448_42511[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42368 === (8))){
var inst_42227 = (state_42367[(7)]);
var inst_42240 = (state_42367[(22)]);
var inst_42240__$1 = cljs.core.seq.call(null,inst_42227);
var state_42367__$1 = (function (){var statearr_42449 = state_42367;
(statearr_42449[(22)] = inst_42240__$1);

return statearr_42449;
})();
if(inst_42240__$1){
var statearr_42450_42512 = state_42367__$1;
(statearr_42450_42512[(1)] = (10));

} else {
var statearr_42451_42513 = state_42367__$1;
(statearr_42451_42513[(1)] = (11));

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
});})(c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32384__auto__,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto____0 = (function (){
var statearr_42452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42452[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto__);

(statearr_42452[(1)] = (1));

return statearr_42452;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto____1 = (function (state_42367){
while(true){
var ret_value__32386__auto__ = (function (){try{while(true){
var result__32387__auto__ = switch__32384__auto__.call(null,state_42367);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32387__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32387__auto__;
}
break;
}
}catch (e42453){if((e42453 instanceof Object)){
var ex__32388__auto__ = e42453;
var statearr_42454_42514 = state_42367;
(statearr_42454_42514[(5)] = ex__32388__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42367);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42453;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32386__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42515 = state_42367;
state_42367 = G__42515;
continue;
} else {
return ret_value__32386__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto__ = function(state_42367){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto____1.call(this,state_42367);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32385__auto__;
})()
;})(switch__32384__auto__,c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32476__auto__ = (function (){var statearr_42455 = f__32475__auto__.call(null);
(statearr_42455[(6)] = c__32474__auto__);

return statearr_42455;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32476__auto__);
});})(c__32474__auto__,map__42212,map__42212__$1,opts,before_jsload,on_jsload,reload_dependents,map__42213,map__42213__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32474__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42518,link){
var map__42519 = p__42518;
var map__42519__$1 = ((((!((map__42519 == null)))?(((((map__42519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42519):map__42519);
var file = cljs.core.get.call(null,map__42519__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__42519,map__42519__$1,file){
return (function (p1__42516_SHARP_,p2__42517_SHARP_){
if(cljs.core._EQ_.call(null,p1__42516_SHARP_,p2__42517_SHARP_)){
return p1__42516_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__42519,map__42519__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42522){
var map__42523 = p__42522;
var map__42523__$1 = ((((!((map__42523 == null)))?(((((map__42523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42523):map__42523);
var match_length = cljs.core.get.call(null,map__42523__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42523__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42521_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42521_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__42525_SHARP_,p2__42526_SHARP_){
return cljs.core.assoc.call(null,p1__42525_SHARP_,cljs.core.get.call(null,p2__42526_SHARP_,key),p2__42526_SHARP_);
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
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_42527 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_42527);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_42527);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42528,p__42529){
var map__42530 = p__42528;
var map__42530__$1 = ((((!((map__42530 == null)))?(((((map__42530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42530):map__42530);
var on_cssload = cljs.core.get.call(null,map__42530__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__42531 = p__42529;
var map__42531__$1 = ((((!((map__42531 == null)))?(((((map__42531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42531):map__42531);
var files_msg = map__42531__$1;
var files = cljs.core.get.call(null,map__42531__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1564480793156
