class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :record_invalid
    # before_action :authenticate_user
  
  private
    # def authenticate_user
    #   unless session[:user_id]
    #     redirect_to login_path, notice: "Please log in"
    #   end
    # end
  
    def record_invalid(invalid)
      render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
  
    def record_not_found(error)
      render json: {error: "#{error.model} not found"}, status: :not_found
    end
  
    def logged_in_user
      User.find(session[:user_id])
    end
  
  end
  