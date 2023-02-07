class Reservation < ApplicationRecord
  belongs_to :rental

  validate :dates_not_blocked

  private

  def dates_not_blocked
    blocked = Reservation.where(
      'start_date <= ? AND end_date >= ?',
      end_date, start_date
    ).exists?

    if blocked
      errors.add(:base, 'Dates are not available')
    end
  end
end
