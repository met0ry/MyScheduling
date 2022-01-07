module Types
  class EventType < BaseObject
    description 'Main object on calendar(e.g. task, reminder etc.)'

    field :id, ID, null: false, description: 'ID'
    field :title, String, null: false, description: 'Title'
    field :desc, String, null: true, description: 'Description'

    field :event_type, String, null: false, description: 'Type of event'
    field :status_cd, String, null: false, description: 'Status of event(e.g. COMPLETED, INPROGRESS etc.)'

    field :start_dt, String, null: false, description: 'Time at which event starts'
    # field :duration, Integer, null: false, description: 'Duration of the event'

    field :end_dt, String, null: false, description: 'Time at which event ends'
  end
end
