class EventReminder
  include Sidekiq::Worker

  sidekiq_options retry: 2

  sidekiq_retry_in do |count, exception|
    300
  end

  def perform(event_id)
    event = Event.find(event_id)

    if event.status_cd == "INPROGRESS"
      TeleNotify::TelegramUser.first.send_message("Reminder: #{event.title}")
      raise StandardError
    end
  end
end
