require 'rails_helper'

RSpec.describe BreakfastsController, type: :controller do

# When successful, it should add a new recipe to the database

# When successful, it should respond with an HTTP status code of 302 (found, or redirected)

# When successful, it should redirect to recipe_path (show page)

# When fails, it should respond with an HTTP status code of 302 (found, or redirected)

# When fails, it should redirect to new_recipe_path

# When fails, it should flash an error message


  describe "#create" do
    context "success" do
      before do
        @breakfasts_count = Breakfast.count
        post :create, breakfast: {recipe: "Kale Salad"}
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
        post :create, breakfast: {recipe: nil}
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
