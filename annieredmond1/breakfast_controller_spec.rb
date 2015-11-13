require 'rails_helper'

RSpec.describe BreakfastsController, type: :controller do

  before do
      # create and log in current_user
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

  describe "#create" do
      context "success" do
        before do
          @breakfast_count = Breakfast.count
          post :create, breakfast: {name: "eggs benedict", instructions: "Pickup at 8:30"}
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