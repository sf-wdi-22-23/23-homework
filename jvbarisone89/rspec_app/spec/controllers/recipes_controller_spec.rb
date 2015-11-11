require 'rails_helper'

RSpec.describe RecipesController, type: :controller do
  before do
    # create and log in current_user
    current_user = FactoryGirl.create(:user)
    session[:user_id] = current_user.id
  end


  describe "#create" do
    context "success" do
      before do
        @recipes_count = Recipe.count
        post :create, recipe: {name: "Kale Salad", instructions: "Toss kale with apples and walnuts."}
      end

      it "should add new recipe" do
        expect(Recipe.count).to eq(@recipes_count + 1)
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect_to 'recipe_path'" do
        expect(response.location).to match(/\/recipes\/\d+/)
      end
    end

    context "failure" do
      before do
        post :create, recipe: {name: nil, instructions: nil}
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect to 'new_recipe_path'" do
        expect(response).to redirect_to(new_recipe_path)
      end

      it "should flash an error message" do
        expect(flash[:error]).to be_present
      end
    end
  end


end
