Rails.application.routes.draw do
  post "/#{ENV['TELEGRAM_BOT_TOKEN']}" => 'application#webhook'
  root 'dashboard#index'
end
