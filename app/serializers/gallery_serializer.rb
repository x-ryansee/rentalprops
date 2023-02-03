class GallerySerializer < ActiveModel::Serializer
  attributes :id, :image
  has_one :rental
end
