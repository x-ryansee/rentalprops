class ReservationsController < ApplicationController
    def index
        render json: Reservation.all
    end

    def show
        @reservation = Reservation.find(params[:id])
        render json: @reservation
    end
    
    def create
        @rental = Rental.find_by(name: params[:rental_id])
        @reservation = Reservation.new(reservation_params)
        @reservation.rental = @rental
        if @reservation.save
          redirect_to @reservation, notice: 'Reservation was successfully created.'
        else
          render :new
        end
    end
      
    def update
        @reservation = Reservation.find(params[:id])
        if @reservation.update(reservation_params)
          render json: { status: 'success', message: 'Reservation was successfully updated.', reservation: @reservation }
        else
          render json: { status: 'error', message: @reservation.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @reservation = Reservation.find(params[:id])
        if @reservation.destroy
          render json: { status: 'success', message: 'Reservation was successfully deleted.' }
        else
          render json: { status: 'error', message: @reservation.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def reservation_params
      params.permit(:first_name, :last_name, :email, :start_date, :end_date, :adult_guests, :child_guests, :status, :id, :rental_id)
    end
end
