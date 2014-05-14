class UsersController < ApplicationController

  # This removes the default layout set by application_controller.rb
  layout 'custom.html.erb'
  
  def show
    @user = User.find(params[:id])
  end

  def new
  end
end
