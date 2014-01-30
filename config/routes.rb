ExecDash::Application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'pages#root'

  resources :pages do
    collection do
      get 'dashboard/dashboard.html' => 'pages#dashboard', as: 'dashboard'
      get 'ui_lab/buttons.html' => 'pages#buttons'
      get 'ui_lab/general.html' => 'pages#general'
      get 'ui_lab/icons.html' => 'pages#icons'
      get 'ui_lab/grid.html' => 'pages#grid'
      get 'ui_lab/tables.html' => 'pages#tables'
      get 'ui_lab/widgets.html' => 'pages#widgets'
      get 'forms/forms.html' => 'pages#forms'
      get 'charts/charts.html' => 'pages#charts'
      get 'other/wizard.html' => 'pages#wizard'
      get 'other/login.html' => 'pages#login'
      get 'other/sign_up.html' => 'pages#sign_up'
      get 'other/full_calendar.html' => 'pages#full_calendar'
      get 'other/error404.html' => 'pages#error404'
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
