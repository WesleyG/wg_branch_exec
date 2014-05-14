ExecDash::Application.routes.draw do
  resources :users
  root 'static_pages#home'
  #match '/home', to: 'static_pages#home', via: 'get'
  match '/help', to: 'static_pages#help', via: 'get'
  match '/about', to: 'static_pages#about', via: 'get'
  match '/contact', to: 'static_pages#contact', via: 'get'
  match '/login', to: 'static_pages#login', via: 'get' 
  match '/signup',  to: 'users#new',            via: 'get'
  match '/payment_def', to: "static_pages#payment_def", via: 'get' 

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".


  match '/demo', to: 'demo#dashboard', via: 'get'

  resources :demo do
    collection do
      get 'dashboard/dashboard.html' => 'demo#dashboard', as: 'dashboard'
      get 'ui_lab/buttons.html' => 'demo#buttons'
      get 'ui_lab/general.html' => 'demo#general'
      get 'ui_lab/icons.html' => 'demo#icons'
      get 'ui_lab/grid.html' => 'demo#grid'
      get 'ui_lab/tables.html' => 'demo#tables'
      get 'ui_lab/widgets.html' => 'demo#widgets'
      get 'forms/forms.html' => 'demo#forms'
      get 'charts/charts.html' => 'demo#charts'
      get 'other/wizard.html' => 'demo#wizard'
      get 'other/login.html' => 'demo#login'
      get 'other/sign_up.html' => 'demo#sign_up'
      get 'other/full_calendar.html' => 'demo#full_calendar'
      get 'other/error404.html' => 'demo#error404'
    end
  end
  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
