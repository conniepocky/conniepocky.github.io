(ns website2020.core
    (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(println "This text is printed from src/website2020/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))


(defn hello-world []

 [:div {:class "everything"}

  [:section {:class "hero"}
    [:div {:class "hero-body"}
      [:div {:class "container"}
        [:h1 {:class "title-very-big red-text"} "CONNIE WAFFLES"]]
        [:h2 {:class "white-text subtitle-big"} "Web Developer/IOS Developer 🙂"]
        
        [:br {:class "title-very-big"}]
        [:br]
        [:br]]]
    
    [:h2 {:class "subtitle-big red-text"} "MY PROJECTS"]
    
[:div {:class "tile is-ancestor"}
 [:div {:class "tile is-vertical is-8"}
  [:div {:class "tile"}
   [:div {:class "tile is-parent is-vertical"}
    [:article {:class "tile is-child notification is-danger"}
     [:p {:class "title"} "Emoji Shortcuts"]
     [:p {:class "subtitle"} "An NodeJS app, that lets you copy and paste emojis and ASCII wherever you like!"]"\t" 
     [:p "View on " 
      [:a {:href "https://github.com/conniepocky/Emoji-Shortcuts"} "GitHub"]]]
    [:article {:class "tile is-child notification is-dark"}
     [:p {:class "title"} "K-Dash"]
     [:p {:class "subtitle"} "A website made for K-Pop fans to get lots of info on different groups!"]
     [:p "View on " 
      [:a {:href "https://conniepocky.github.io/k-dash/"} "the Website"]]]]]]]

   
    [:h2 {:class "subtitle-big red-text"} "WHERE YOU CAN FIND ME"]

    [:div {:class "tile is-ancestor"}
      [:div {:class "tile is-vertical is-8"}
        [:div {:class "tile"}
          [:div {:class "tile is-parent is-vertical"}
            [:article {:class "tile is-child notification is-primary"}
              [:p {:class "title"} "Twitch"]
              [:p {:class "subtitle"}
                  [:a {:href "https://www.twitch.tv/waffles193"} "Waffles193"]]]
            [:article {:class "tile is-child notification is-warning"}
              [:p {:class "title"} "CodePen"]
              [:p {:class "subtitle"}
                 [:a {:href "https://codepen.io/waffles19/"} "Waffles19"]]]]
          [:div {:class "tile is-parent"}
            [:article {:class "tile is-child notification is-info"}
              [:p {:class "title"} "Youtube"]
              [:p {:class "subtitle"}
                  [:a {:href "https://www.youtube.com/channel/UCmdaAi8utcD7y951MfyhSbQ/featured?view_as=subscriber"} "ProgrammingIsAmazing!"]]
              [:figure {:class "image is-4by3"}
                  [:img {:src "https://yt3.ggpht.com/a-/AAuE7mDKhEGk2Fm2euK2R2aU87bpWr88HZd-_bb-g58XfQ=s288-c-k-c0xffffffff-no-rj-mo"}]]]]]]]
    
    [:h2 {:class "subtitle-big red-text"} "ABOUT ME"]
    
    [:article {:class "message is-link"}
        [:div {:class "message-body"} "I'm a self taught, 11 year old developer 😀 I started learning to code when I was 6 with Python, and then moved on to JavaScript, Swift, Clojure and Vim 🙃 Aside from coding I enjoy playing Overwatch, Sims, Roblox and Minecraft 🎮 I also like Harry Potter, Waffles, K-Pop (mostly SHINee) and Anime 😊"]]
    

    [:footer {:class "footer"}
      [:div {:class "content has-text-centered"}
        [:p  
          [:strong {:class "white-text"} "Made by Connie 😊"]]]]
    
    ])




    
(reagent/render-component [hello-world]
                        (. js/document (getElementById "app")))

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
