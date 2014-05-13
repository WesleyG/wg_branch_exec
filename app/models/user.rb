class User < ActiveRecord::Base
  validates :name,  presence: true # also valid -- validates(:name, presence: true)
  validates :email, presence: true
  
end