class AddYearAmountToDefintions < ActiveRecord::Migration
  def change
  	add_column :definitions, :year_amount, :decimal
  end
end
