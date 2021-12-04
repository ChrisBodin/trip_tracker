class User < ApplicationRecord
  # has_many :trips, dependent: :destroy
  validates :first_name, :last_name, :email, :phone_number, :password, presence: true
end
