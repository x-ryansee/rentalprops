class ReservationsController < ApplicationController
    def index
        render json: Reservation.all.order("status ASC")
    end

    def show
        @reservation = Reservation.find(params[:id])
        render json: @reservation
    end
    
    def create
        @rental = Rental.find_by(params[:rental_id])
        @reservation = Reservation.new(reservation_params)
        @reservation.rental = @rental
    
        overlapping_reservations = Reservation.where("start_date <= ? AND end_date >= ?", @reservation.end_date, @reservation.start_date)
                            .where(rental: @rental)
                            .where.not(id: @reservation.id)
    
        if overlapping_reservations.empty? && @reservation.save
            redirect_to @reservation, notice: 'Reservation was successfully created.'
        else
            render json: { status: 'error', message: 'Overlapping reservation exists' }, status: :unprocessable_entity
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
  params.permit(
    :first_name,
    :last_name,
    :email,
    :adult_guests,
    :child_guests,
    :rental_id,
    start_date: [:start, :end],
    end_date: [:start, :end]
  )
end
    
      
      
end
