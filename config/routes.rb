require 'sidekiq/web'

Rails.application.routes.draw do
  mount Sidekiq::Web => '/sidekiq'

  root 'dashboard#index'

  post "/#{ENV['TELEGRAM_BOT_TOKEN']}" => 'application#webhook'
end
