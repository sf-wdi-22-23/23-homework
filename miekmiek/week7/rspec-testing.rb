require 'rails_helper'

RSpec.describe BreakfastController, type: :controller do

  ...

  describe "#create" do
    context "success" do
      before do
        @breakfasts_count = Breakfast.count
        post :create, breakfast: {name: "Omelet", instructions: "Egg burrito with stuff."}
      end

      it "should add new breakast" do
        expect(Breakfast.count).to eq(@breakfasts_count + 1)
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect_to 'recipe_path'" do
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