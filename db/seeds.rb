# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.create!(
    name: "Joe",
    email: "joe@example.com",
    password: "password123"
)

User.create!(
    name: "Linda",
    email: "linda@example.com",
    password: "password123"
)

Rental.create!(
    name: "Alpine",
    about: "Alpine is a cozy cabin located in the heart of Lake Tahoe. With its stunning views of the mountains and lake, this property is the perfect getaway for a family or a group of friends.",
    amenities: "4 bed, 3 bath"
  )
  
  Rental.create!(
    name: "Napa",
    about: "Napa is a spacious and stylish house located in the wine country of Napa Valley. With its beautiful vineyard views and comfortable amenities, this property is the ideal choice for a relaxing retreat.",
    amenities: "4 bed, 3 bath"
  )

  # Calendar seed data
alpine = Rental.find_by(name: 'Alpine')
napa = Rental.find_by(name: 'Napa')

# Reservation seed data
Reservation.create!(
  rental: alpine,
  start_date: (2023, 2, 3),
  end_date: (2023, 3, 4),
  first_name: "Jane",
  last_name: "Doe",
  email: "john@example.com",
  adult_guests: 4,
  child_guests: 2
)

Reservation.create!(
  rental: napa,
  start_date: (2023, 3, 3),
  end_date: (2023, 3, 8),
  first_name: "Jane",
  last_name: "Doe",
  email: "jane@example.com",
  adult_guests: 6,
  child_guests: 0
)

# Review seed data
Review.create!(
  rental: alpine,
  title: "Amazing views",
  content: "This cabin has the most amazing views of the lake and mountains. We loved our stay here and can't wait to come back."
)

Review.create!(
    rental: alpine,
    title: "Amazing time",
    content: "This cabin has the most amazing views of the lake and mountains. We loved our stay here and can't wait to come back."
  )

Review.create!(
  rental: napa,
  title: "Peaceful retreat",
  content: "This house was the perfect place for a relaxing getaway in the wine country. The vineyard views were stunning and the amenities were top-notch."
)

Review.create!(
    rental: napa,
    title: "Gorgeous place",
    content: "This house was the perfect place for a relaxing getaway in the wine country. The vineyard views were stunning and the amenities were top-notch."
  )


Contact.create!(
    name: "John Doe",
    email: "john@doe.com",
    message: "I'd like to rent"
)

Contact.create!(
    name: "Jane Doe",
    email: "jane@doe.com",
    message: "I'd like to rent"
)



# Gallery seed data
Gallery.create!(
  rental: alpine,
  image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/85b6b986.f10.jpg"
)

Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/e81e58e5.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/128063da.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/e29ac7c0.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/98a3ad2f.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/f8ad777e.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/9c62e32a.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/964c02fa.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/5d6b53ae.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/954f55c1.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/14637f2a.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/32657dc8.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/db43bc2e.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/fea8fd6d.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/f4fc8cdd.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/7d51250e.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/eb10695f.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/4eaa665b.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/3cc5bbfb.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/979c4dd8.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/d161d7cf.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/46a0884f.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/b04637f2.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/8904874e.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/58c2d266.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/8a0f3d89.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/db022d53.f10.jpg"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/480604d5.f10.jpg"
  )

  
Gallery.create!(
  rental: alpine,
  image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/951169ee.f10.jpg"
)

Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/9b9843aa.f10.jpg"
  )
  
  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/8c5ce6ad.f10.jpg"
  )
  
  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/634285a8.f10.jpg"
  )
  
      
Gallery.create!(
  rental: napa,
  image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/5204c12f.f10.jpg"
)

Gallery.create!(
  rental: napa,
  image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/91488ba7.f10.jpg"
)

Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/60fe9994.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/76177991.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/77462610.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/f805b224.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/c954ca9d.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/103bc588.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/ef1ef1b3.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/c8f66b14.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/291e519b.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/1552cae6.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/a59da66d.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/4ae3ecad.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/5eab11c1.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/6c3c78f6.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/28d3ba92.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/f77bf1e7.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/a878b8bc.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/261615fc.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/e349b427.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/ab633fbd.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/4c2e6e62.f10.jpg"
  )
  
  Gallery.create!(
    rental: napa,
    image: "https://media.vrbo.com/lodging/39000000/38130000/38126500/38126442/c124a7f1.f10.jpg"
  )