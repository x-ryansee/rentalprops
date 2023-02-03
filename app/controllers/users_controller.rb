class UsersController < ApplicationController

    def create
        user = User.find_by(email: params[:email])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else
            render json: {error: "Incorrect email or password"}
        end
    end

        def show
            user = User.find(session[:user_id])
            render json: user
         end

         def index
            render json: User.all
         end

end
