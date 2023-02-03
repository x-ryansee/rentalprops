class RentalsController < ApplicationController

    def show
        rental = Rental.find(params[:id])
        render json: rental
    end

    def index
        render json: Rental.all
    end

    private

    def rental_params
        params.permit(:name, :about, :amenities)
    end


    end
