module Types
  class EventType < BaseObject
    description 'Main object on calendar(e.g. task, reminder etc.)'

    field :id, ID, null: false, description: 'ID'
    field :title, String, null: false, description: 'Title'
    field :desc, String, null: true, description: 'Description'
    field :event_type, String, null: false, description: 'Type of event'
    field :due_dt, String, null: false, description: 'Time at which event is shown'
    field :status_cd, String, null: false, description: 'Status of event(e.g. COMPLETED, INPROGRESS etc.)'
  end
end
