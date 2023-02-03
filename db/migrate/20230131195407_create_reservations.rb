class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.belongs_to :rental, null: false, foreign_key: true
      t.string :first_name
      t.string :last_name
      t.string :email
      t.date :start_date
      t.date :end_date
      t.integer :adult_guests
      t.integer :child_guests

      t.timestamps
    end
  end
end
