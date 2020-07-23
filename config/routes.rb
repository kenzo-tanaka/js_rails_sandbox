Rails.application.routes.draw do
  root 'tasks#index'
  resources :tasks do
    member do
      patch :done
      patch :archived
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
