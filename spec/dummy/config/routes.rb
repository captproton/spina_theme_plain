Rails.application.routes.draw do
  mount Spina::Engine => '/'
  mount SpinaThemePlain::Engine => "/spina_theme_plain"
end
