class UsersController < ApplicationController
  
  def index
  	@user = User.create
  end

  def create
  	user = User.new(user_params)
  	# check user can save
  	if user.save
  		# create session user
			session[:user_id] = user.id
			# check user dob is 11/15
			if user.dob[0..4] == '11/15'
				# redirect to user page
				redirect_to user
			else
				# redirect to alternative page
				redirect_to '/alternative'
			end
		else
			flash[:error] = user.errors.full_messages.join(', ')
			# redirect back to new page
			redirect_to '/'
		end
  end

  def show
  	@user = User.find(params[:id])
  end

  def alternative
  end

  private

  def user_params
  	params.require(:user).permit(:name, :dob)
  end

end
