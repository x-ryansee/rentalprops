class CreateGalleries < ActiveRecord::Migration[7.0]
  def change
    create_table :galleries do |t|
      t.belongs_to :rental, null: false, foreign_key: true
      t.string :image

      t.timestamps
    end
  end
end
