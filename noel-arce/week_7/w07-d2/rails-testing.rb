require 'rails_helper'

RSpec.describe BreakfastController, type: :controller do

  # when success, add new order to db
  # when success, respond with HTTP status code 302 and success message
  # when success, redirect to order confirmation order page (show page)
  # when fail, respond with HTTP status code 302
  # when fail, redirect to new order page
  # when fail, flash error message

  describe "#create" do
    context "success" do
      before do
        @breakfasts_count = Breakfast.count
        post :create, breakfast: {name: "String", instructions: "String"}
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
        post :create, recipe: {name: nil, instructions: nil}
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