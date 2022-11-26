Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'api/v1/auth/sessions',
    registrations: 'api/v1/auth/registrations'
  }
end
