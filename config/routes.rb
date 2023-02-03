Rails.application.routes.draw do
  resources :contacts
  resources :users
  resources :galleries
  resources :reviews
  resources :reservations
  resources :calendars
  resources :rentals
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "sessions#show"
  # Defines the root path route ("/")
  # root "articles#index"
end
