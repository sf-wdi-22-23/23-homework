class RecipeController < ApplicationController
	before_filter :authorize, except: [:index, :show]
	belongs_to :user

  	# add validations
  	validates :name, :instructions,
    presence: true,
    length: { maximum: 255 }

    def create
	    recipe = current_user.recipes.new(recipe_params)
	    if recipe.save
	      flash[:notice] = "Successfully created recipe."
	      redirect_to recipe_path(recipe)
	    else
	      flash[:error] = recipe.errors.full_messages.join(", ")
	      redirect_to new_recipe_path
	    end
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
end
