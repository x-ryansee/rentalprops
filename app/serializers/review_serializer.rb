class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content
  has_one :rental
end
