require 'sidekiq/web'

Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql"
  end
  post "/graphql", to: "graphql#execute"
  mount Sidekiq::Web => '/sidekiq'

  root 'dashboard#index'

  post "/#{ENV['TELEGRAM_BOT_TOKEN']}" => 'application#webhook'
end
