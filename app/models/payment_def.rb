class PaymentDef < ActiveRecord::Base

  def new
  	@payment_def = PaymentDef.new
  end

  def show
	@payment_def = PaymentDef.find(params[:id])
  end
end
