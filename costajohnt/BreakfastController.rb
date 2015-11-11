require 'rails_helper'

RSpec.describe RecipesController, type: :controller do

  ...

  describe "#create" do
    context "success" do
      before do
        @breakfasts_count = Breakfast.count
        post :create, breakfast: {name: "Scrambled Eggs and coffee", deliver_to: "225 Bush St."}
      end

      it "should add new breakfast" do
        expect(Recipe.count).to eq(@recipes_count + 1)
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
        post :create, breakfast: {name: nil, deliver_to: nil}
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