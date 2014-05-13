class User < ActiveRecord::Base
  validates :name,  presence: true, length: { maximum: 50 } # also valid -- validates(:name, presence: true)
  validates :email, presence: true
  
end