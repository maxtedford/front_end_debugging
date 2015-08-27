# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

    tasks = Task.create([
      { name: 'Lorem ipsum dolor set amet', due_date: "27/08/2015" },
      { name: 'Etiam non arcu at nisl aliquet ultricies', due_date: "27/08/2015" },
      { name: 'Nullam lobortis neque eu eros sollicitudin dignissim.', due_date: "28/08/2015" },
      { name: 'Vestibulum libero est, eleifend ut sem vel', due_date: "28/08/2015" },
      { name: 'Nam rhoncus nibh quis sollicitudin accumsan.', due_date: "29/08/2015" },

    ]);
