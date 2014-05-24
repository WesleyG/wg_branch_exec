class CreatePaymentDefs < ActiveRecord::Migration
  def change
    create_table :payment_defs do |t|
      t.decimal :cyc_yr_1_pymt
      t.decimal :cyc_yr_1_pymt_mnth

      t.timestamps
    end
  end
end
