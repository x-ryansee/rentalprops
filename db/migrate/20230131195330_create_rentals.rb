class CreateRentals < ActiveRecord::Migration[7.0]
  def change
    create_table :rentals do |t|
      t.string :name
      t.text :about
      t.text :amenities

      t.timestamps
    end
  end
end
