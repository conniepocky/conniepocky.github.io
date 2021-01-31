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
    
    [:h2 {:class "subtitle-big red-text"} "PROGRAMMING LANGUAGES I KNOW"]
    
[:div {:class "carousel"} 
 [:div {:class "item-1"}  
  [:h2 {:id "carousel-item-text"} "Javascript"]
  [:p {:id "age-text"} "Learnt age 8"]]
 [:div {:class "item-2"}  
  [:h2 {:id "carousel-item-text"} "Python"]
  [:p {:id "age-text"} "Learnt age 6"]]
 [:div {:class "item-3"} 
  [:h2 {:id "carousel-item-text"} "Clojure"]
  [:p {:id "age-text"} "Learnt age 9"]]
 [:div {:class "item-4"} 
  [:h2 {:id "carousel-item-text"} "HTML and CSS"]
  [:p {:id "age-text"} "Learnt age 8"]]
 [:div {:class "item-5"} 
  [:h2 {:id "carousel-item-text"} "Racket"]
  [:p {:id "age-text"} "Learnt age 10"]]
 [:div {:class "item-6"}  
  [:h2 {:id "carousel-item-text"} "C"]
  [:p {:id "age-text"} "Learnt age 11"]] 
 [:div {:class "item-7"} 
  [:h2 {:id "carousel-item-text"} "Scheme"]
  [:p {:id "age-text"} "Learnt age 12"]]]
   
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
                  [:a {:href "https://codepen.io/waffles19/"} "Waffles19"]]]
            [:article {:class "title is-child notification is-dark"}
              [:p {:class "title"} "GitHub"]
              [:p {:class "subtitle"}
                  [:a {:href "https://github.com/conniepocky"} "Conniepocky"]]]]
          [:div {:class "tile is-parent"}
            [:article {:class "tile is-child notification is-info"}
              [:p {:class "title"} "Youtube"]
              [:p {:class "subtitle"}
                  [:a {:href "https://www.youtube.com/channel/UCmdaAi8utcD7y951MfyhSbQ/featured?view_as=subscriber"} "ProgrammingIsAmazing!"]]
              [:figure {:class "image is-4by3"}
                  [:img {:src "https://yt3.ggpht.com/a-/AAuE7mDKhEGk2Fm2euK2R2aU87bpWr88HZd-_bb-g58XfQ=s288-c-k-c0xffffffff-no-rj-mo"}]]]]]]]
    
    [:h2 {:class "subtitle-big red-text"} "ABOUT ME"]
    
    [:article {:class "message is-link"}
        [:div {:class "message-body"} "I'm a self taught, 12 year old developer 😀 I started learning to code when I was 6 with Python, and then moved on to JavaScript, Swift, Clojure and Vim 🙃 Aside from coding I enjoy playing Overwatch, Sims, Roblox and Minecraft 🎮 I also like Harry Potter, Waffles, K-Pop (mostly SHINee) and Anime 😊"]]
    

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
