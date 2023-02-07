class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.belongs_to :rental, null: false, foreign_key: true
      t.string :title
      t.text :content
      t.string :name
      t.string :date_stayed
      t.integer :score
      t.timestamps
    end
  end
end
