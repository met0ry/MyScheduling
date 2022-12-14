class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  skip_before_action :verify_authenticity_token, :only => :webhook
  include TeleNotify::Controller

  # shitty workaround for now
  def webhook
    head :ok
  end
end
