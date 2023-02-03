class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        review = Review.find(params[:id])
        render json: review
    end


end
