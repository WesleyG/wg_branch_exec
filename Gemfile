source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.0.2'

# Use SCSS for stylesheets
gem 'sass-rails', '~> 4.0.0'

# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Use CoffeeScript for .js.coffee assets and views
gem 'coffee-rails', '~> 4.0.0'

# See https://github.com/sstephenson/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'

# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 1.2'

gem 'pg', '0.17.1'

# WGG 5/27/2014 from Darby:
# Not sure how critical the calculation is, but Ruby is a tad 
# problematic with floating point math. There is a gem called 
# money that pretty much everyone uses when dealing with money 
# calculations: https://github.com/RubyMoney/money. It stores 
# the the value as an integer in cents. so instead of 10.00 
# it would store 1000. That makes it easier to do math with. 
# It also supports currency conversation. Not sure how 
# important this number is, but if you think you’ll be 
# dealing with fractions of a dollar, I would recommend 
# using this gem
gem 'money', '6.1.1'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

gem 'compass-rails'

group :development, :test do
  gem 'rspec-rails', '2.13.1'
  gem 'better_errors'
  gem 'binding_of_caller'
  gem 'pry'
end

group :test do
  gem 'selenium-webdriver', '2.35.1'
  gem 'capybara', '2.1.0'
  gem 'factory_girl_rails', '4.2.1'
end

# Use ActiveModel has_secure_password
gem 'bcrypt-ruby', '3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

# WGG added for heroku

group :production do
  gem 'rails_12factor'
end