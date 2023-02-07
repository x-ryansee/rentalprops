class ContactsController < ApplicationController

    def index
        render json: Contact.all
    end

    def create
        contact = contact.create!(contact_params)
        render json: contact, status: :created
    end

    private

    def contact_params
        params.permit(:name, :email, :message)
    end

end
