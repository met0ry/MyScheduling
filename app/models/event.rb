class Event < ApplicationRecord
  validates :title, presence: true
  validates :due_dt, presence: true

  before_save :set_default_values

  def set_default_values
    self.event_type ||= 'Default'
    self.status_cd ||= 'INPROGRESS'
  end
end
