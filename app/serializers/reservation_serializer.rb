class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :start_date, :end_date, :email, :first_name, :last_name, :adult_guests, :child_guests, :status
  has_one :rental
end
