# SET-UP

# Add rspec-rails to Gemfile in the development and test groups. Also add ffaker and factory_girl_rails:

# Gemfile

# group :development, :test do
#   gem 'rspec-rails'
#   gem 'ffaker'
#   gem 'factory_girl_rails'
# end

# Run bundle install to add the new gems to your project:

# Create the spec folder and set up rspec-rails configuration:

# $ rails g rspec:install

# Configure specs by going into the .rspec file and removing the line that says --warnings if there is one.

# (For any existing models or controllers you'd like to test, you'll have to manually create spec files:
# $ rails g rspec:model recipe
# $ rails g rspec:controller recipes
# Note: Spec files for any models or controllers you create AFTER you install rspec-rails will automatically be generated as long as you use rails g ... to create models/controllers.)

# (To run all test specs, you can type rspec or bundle exec rspec in the terminal. To run only a specific set of tests, type rspec and the file path for the tests you want to run:
# run only model specs
# rspec spec/models
# run only specs for `RecipesController`
# rspec spec/controllers/recipes_controller_spec.rb)

# TESTS

# 1. Test New.
	#  - Set up fake user in factory_girl
	#  - It should respond with an HTTP status code of 200
	#  - It should assign a new instance of Breakfast in memory (allows us to use the form_for syntax in the view)
	#  - It should render the new view (form to create a new breakfast)

# spec/factories/user.rb

FactoryGirl.define do
  factory :user do
    first_name Faker::Name.first_name
    last_name Faker::Name.last_name
    email Faker::Internet.email
    password Faker::Lorem.words(2).join
  end
end

# spec/controllers/recipes_controller_spec.rb

require 'rails_helper'

RSpec.describe BreakfastsController, type: :controller do

  describe "#new" do
    before do
      get :new
      current_user = FactoryGirl.create(:user)
    	session[:user_id] = current_user.id
    end

    it "should respond with 200 success" do
      expect(response.status).to be(200)
    end

    it "should assign @breakfast" do
      expect(assigns(:breakfast)).to be_instance_of(Breakfast)
    end

    it "should render the :new view" do
      expect(response).to render_template(:new)
    end
  end

end


# 2. Test Create
	#  - When successful, it should add a new breaktast to the database
	#  - When successful, it should respond with an HTTP status code of 302 (found, or redirected)
	#  - When successful, it should redirect to breakfast_path (show page)
	#  - When fails, it should respond with an HTTP status code of 302 (found, or redirected)
	#  - When fails, it should redirect to new_breakfast_path
	#  - When fails, it should flash an error message
	#  - Error message in breakfasts_controller
	#  - Render error message in view

# spec/controllers/recipes_controller_spec.rb

require 'rails_helper'

RSpec.describe BreakfastController, type: :controller do

  ...

  describe "#create" do
    context "success" do
      before do
        @breakfasts_count = Breakfast.count
        post :create, breakfast: {name: "Eggs on Toast", instructions: "Cook eggs and put on toast."}
      end

      it "should add new breakfast" do
        expect(Breakfast.count).to eq(@breakfasts_count + 1)
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect_to 'breakfast_path'" do
        expect(response.location).to match(/\/breakfasts\/\d+/)
      end
    end

    context "failure" do
      before do
        post :create, breakfast: {name: nil, instructions: nil}
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect to 'new_breakfast_path'" do
        expect(response).to redirect_to(new_breakfast_path)
      end

      it "should flash an error message" do
        expect(flash[:error]).to be_present
      end
    end
  end

end

# app/controllers/recipe_controller.rb

class BreakfastsController < ApplicationController
  before_filter :authorize, except: [:index, :show]

  ...

  def create
    breakfast = current_user.breakfasts.new(breakfast_params)
    if breakfast.save
      flash[:notice] = "Successfully created breakfast."
      redirect_to breakfast_path(breakfast)
    else
      flash[:error] = breakfast.errors.full_messages.join(", ")
      redirect_to new_breakfast_path
    end
  end

  ...

end

# app/views/layouts/application.html.erb

<body>
  <% flash.each do |name, msg| %>
    <%= content_tag :div, msg, class: "alert #{name == 'error' ? 'alert-danger' : 'alert-notice'}" %>
  <% end %>
</body>




