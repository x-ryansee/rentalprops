class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :name, :date_stayed, :score
  has_one :rental
end
