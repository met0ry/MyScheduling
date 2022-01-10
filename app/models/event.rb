class Event < ApplicationRecord
  validates :title, presence: true
  validates :start_dt, presence: true
  validates :end_dt, presence: true
  # TODO add inclusion to status_cd and event_type

  before_save :set_default_values

  def set_default_values
    self.event_type ||= 'Default'
    self.status_cd ||= 'INPROGRESS'
  end
end
