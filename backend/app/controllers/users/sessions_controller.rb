# frozen_string_literal: true

class Users::SessionsController < Devise::SessionsController

  respond_to :json

  private

  def respond_with(resource, options = {})
    if resource.persisted?
      render json: { status: { code: 200, message: 'Signed in successfully.', data: resource } }
    else
      render json: { status: { message: 'Sign in failed.', errors: resource.errors.full_messages },
      code: :unprocessable_entity }
    end
  end
  # before_action :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  # def create
  #   super
  # end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.permit(:sign_in, keys: [:attribute])
  # end
end
