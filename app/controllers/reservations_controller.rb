class ReservationsController < ApplicationController

    def index
        render json: Reservation.all
    end

    def create
        @reservation = Reservation.new(reservation_params)
        if @reservation.save
          redirect_to @reservation, notice: 'Reservation was successfully created.'
        else
          render :new
        end
      end
      
      private
      
      def reservation_params
        params.require(:reservation).permit(:start_date, :end_date, :first_name, :last_name, :email)
      end

      
end
