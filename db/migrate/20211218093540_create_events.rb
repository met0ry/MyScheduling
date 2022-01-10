class CreateEvents < ActiveRecord::Migration[6.1]
  def up
    create_table :events do |t|
      t.string :title
      t.text :desc

      t.string :event_type
      t.string :status_cd

      t.datetime :start_dt
      t.datetime :end_dt

      t.timestamps
    end
  end

  def down
    drop_table :events
  end
end
