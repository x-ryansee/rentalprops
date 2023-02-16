class Reservation < ApplicationRecord
  belongs_to :rental

  validates :start_date, presence: true
  validates :end_date, presence: true

  before_validation :set_default_status

  private

  def set_default_status
    self.status ||= 'Pending'
  end
end

