module Mutations
  class CreateEventMutation < BaseMutation
    description 'Creates event'

    argument :title, String, 'Event\'s title', required: true
    argument :desc, String, 'Event\'s description', required: false

    argument :event_type, String, 'Event\'s type', required: true

    argument :start_dt, GraphQL::Types::ISO8601DateTime, 'Event\'s start date', required: true
    argument :end_dt, GraphQL::Types::ISO8601DateTime, 'Event\'s end date', required: true

    field :success, String, ""
    field :errors, [String], ''

    def resolve(title:, desc: nil, event_type:, start_dt:, end_dt:)
      event = Event.new(title: title, desc: desc, event_type: event_type, start_dt: start_dt, end_dt: end_dt)  

      if event.save
        EventReminder.perform_at(start_dt - 15.minutes, event.id)
      end

      { success: event.errors.blank?, errors: event.errors }
    end
  end
end
