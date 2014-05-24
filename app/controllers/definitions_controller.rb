class DefinitionsController < ApplicationController

	def new
	end

	def create
	  @definition = Definition.new(params[:definition_params])
	 
	  @definition.save
	  redirect_to @definition
	end

def show
  @definition = Definition.find(params[:id])
end

	private
	  def definition_params
	    params.require(:definition).permit(:title, :text)
	  end
end
