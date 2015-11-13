#
# spec/controllers/recipes_controller_spec.rb
#
require 'rails_helper'

RSpec.describe BreakfastController, type: :controller do

  ...

  describe "#create" do
    context "success" do
      before do
        @breakfast_count = Breakfast.count
        post :create, breakfast: {name: "Pancakes", deliver_to: "225 Bush"}
      end

      it "should add new breakfast" do
        expect(Breakfast.count).to eq(@breakfast_count + 1)
      end

      it "should respond with 302 found" do
        expect(response.status).to be(302)
      end

      it "should redirect_to 'breakfast_path'" do
        expect(response.location).to match(/\/breakfast\/\d+/)
      end
    end

    context "failure" do
      before do
        post :create, breakfast: {name: nil, deliver_to: nil}
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