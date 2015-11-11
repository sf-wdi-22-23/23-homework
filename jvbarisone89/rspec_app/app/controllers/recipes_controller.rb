class RecipesController < ApplicationController

	# #   describe "#create" do
 #    context "success" do
 #      before do
 #        @recipes_count = Recipe.count
 #        post :create, recipe: {name: "Kale Salad", instructions: "Toss kale with apples and walnuts."}
 #      end

 #      it "should add new recipe" do
 #        expect(Recipe.count).to eq(@recipes_count + 1)
 #      end

 def create
 	 @recipe = Recipe.new()
 end

end
