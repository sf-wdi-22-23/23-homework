class User < ActiveRecord::Base
	# validate first_name and last_name exist
	validates :name, presence: true

	# validate dob exists, and in correct format
	validates :dob, 
		presence: true,
		format: {
			with: /\d{2}+\/+\d{2}+\/+\d{4}/,
			message: "Please enter your dob as mm/dd/yyyy"
		}
		
end
