class ContactSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :message
end
