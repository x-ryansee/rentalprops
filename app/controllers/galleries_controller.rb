class GalleriesController < ApplicationController

    def show
        gallery = Gallery.find(params[:id])
        render json: gallery
    end

    def index
        render json: Gallery.all
    end

end
