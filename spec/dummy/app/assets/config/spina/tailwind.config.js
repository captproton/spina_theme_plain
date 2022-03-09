module.exports = {
  content: [
    '/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/gems/spina-2.8.1/app/views/**/*.*',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/gems/spina-2.8.1/app/components/**/*.*',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/gems/spina-2.8.1/app/helpers/**/*.*',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/gems/spina-2.8.1/app/assets/javascripts/**/*.js',
'/Users/carltanner/.asdf/installs/ruby/3.1.0/lib/ruby/gems/3.1.0/gems/spina-2.8.1/app/**/application.tailwind.css'
  ],  
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ]
}
