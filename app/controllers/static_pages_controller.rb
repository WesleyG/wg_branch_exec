class StaticPagesController < ApplicationController

  # This removes the default layout set by application_controller.rb
  layout 'custom.html.erb'

  def home
  end

  def help
  end

  def about
  end  
end
