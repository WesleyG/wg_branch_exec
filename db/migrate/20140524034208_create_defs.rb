class CreateDefs < ActiveRecord::Migration
  def change
    create_table :defs do |t|
      t.decimal :cyc_yr_1_pymt
      t.decimal :cyc_yr_1_pymt_mnth

      t.timestamps
    end
  end
end
