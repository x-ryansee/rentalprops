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
    about: "4 Bedrooms, 3 Bathrooms, View of Lake, Close to Tahoe City, Beach and SkiingAlpine is a cozy cabin located in the heart of Lake Tahoe. With its stunning views of the mountains and lake, this property is the perfect getaway for a family or a group of friends.",
    amenities: "This recently remodeled rental home offers a peaceful and quiet location with breathtaking views of Lake Tahoe.
    Upon entering the home, you will be greeted by an open-plan living, dining, and kitchen area. The kitchen boasts custom cabinetry, leathered granite countertops, a 4-burner Wolf range, and an extra-quiet Bosch dishwasher. Adjacent to the kitchen is a back deck with a propane grill and a supply of firewood. The main level also features a master bedroom with a shower, a second bedroom with two twin beds, and another full bathroom with a tub.
    
    The upper level offers a spacious bedroom with a queen bed, a sitting area with a queen sofa bed, and a full bath with a tub. This level also includes a small bedroom with two twin beds that shares the bathroom with the large bedroom. The lower level features a mudroom/laundry room with a front-loading washer and dryer and a door to the garage. The flat driveway can accommodate two large or four small vehicles.
    
    Exterior amenities include a horseshoe pit and a propane fire pit (not available in winter). The home is located less than four miles north of the charming town of Tahoe City, near popular trailheads and recreational activities. It is also just a short drive from ski resorts and beaches.
    
    The street is quiet at the top and less than a third of a mile from a National Forest trailhead for off-road vehicles. With its fantastic location, modern amenities, and charming decor, this rental home is the perfect choice for your next Lake Tahoe vacation."
  )
  
  Rental.create!(
    name: "Napa",
    about: "4 Bedroom (2 Ensuite Kings) 3 Baths with boat dock close to both Sonoma and Napa",
    amenities: "Nestled in the Carneros region, this rental home offers the best of both worlds with its proximity to both the Napa and Sonoma valleys. Located away from the hustle and bustle of the city, this home is just 15 minutes from downtown Napa and 20 minutes from Sonoma Plaza, providing a peaceful retreat. The home is just a stone's throw away from several world-class wineries, with Etude and Calmere being just a five and six-minute drive away respectively. Enjoy breathtaking views of the Napa River, watch the water birds on the protected wetlands, and relax by the fire pit, all from the comfort of your own home.

    This home is perfect for wine enthusiasts, sailors, birdwatchers, fishermen, and outdoor enthusiasts. With four bedrooms and three bathrooms, the home can accommodate up to eight guests. The two large master suites feature new king beds and overlook the Napa River and the Eastern hills. Both masters have separate access to a large balcony and have been recently refurbished with new furniture and appliances. The queen bedroom also has views of the river and the Eastern hills, while the fourth bedroom features twin beds and has a view to the west.
    
    The home features a spacious deck with comfortable lounge seating, a propane barbecue grill, and an outdoor dining table that seats eight. The back yard has a verdant lawn and a concrete patio with a large fire pit, as well as a gangway leading to a 38' deepwater dock. Take a hike on the trail across the street at the Napa/Sonoma Wildlife Refuge and observe the local wildlife from the comfort of your home.
    
    Located in the Carneros region, the home is close to several popular attractions, including Etude Winery, Calmere Estate Winery, Poseidon Vineyards, Bouchaine Winery, and the Carneros Inn & Spa. With its close proximity to San Francisco Bay, the weather in the Carneros region is known to be more moderate, making it ideal for Chardonnay and Pinot Noir varietals. Whether you're looking for a fine dining experience or a casual lunch, there's something for everyone in the Carneros region."
  )

  # Calendar seed data
alpine = Rental.find_by(name: 'Alpine')
napa = Rental.find_by(name: 'Napa')

# Reservation seed data
Reservation.create!(
  rental: alpine,
  start_date: "2023-02-04",
  end_date: "2023-03-04",
  first_name: "John",
  last_name: "Doe",
  email: "john@example.com",
  adult_guests: 4,
  child_guests: 2,
  status: "approved"
)

Reservation.create!(
  rental: napa,
  start_date: "2023-03-05",
  end_date: "2023-03-08",
  first_name: "Jane",
  last_name: "Doe",
  email: "jane@example.com",
  adult_guests: 6,
  child_guests: 0,
  status: "approved"
)

# Review seed data
Review.create!(
    rental: alpine,
    title: "Excellent Tahoe Property!",
    content: "We have rented many properties in the Tahoe area, and this lovely house was by far our favorite. The Sees, our hosts, could not have done more to make us feel welcome! They were excellent, prompt communicators from the first contact we had, to before our stay, during occupancy, and after we left the house. As property owners, they were very fair with the terms of rental. We had no issues with the cabin during our stay, but I think that's because the Sees were on top of all details before we arrived. We were quite proud to invite family and friends to join us during our stay, as attention to detail and quality of furnishings were evident throughout the house. My husband and I are cyclists, mountain bikers, and hikers, and the location was fantastic. We could access the entire north lake paved bike trail system (Tahoe City, Sunnyside, Olympic Valley, Meeks Bay) from the cabin's driveway, and never have to get on the road. We loved the extensive non-paved trail system that encompasses all of Mt. Watson (if you want), and accesses the Tahoe Rim Trail, Burton Creek State Park, Tahoe City, Northstar, Carnelian Bay, and Brockway Summit. The entry to that forested 'playground' is only a few houses away. Everything in the house worked well and was very comfortable, it was quite clean and well-furnished, the location is excellent, and the view of the lake from the front deck in the evening was the perfect, tranquil setting to the end of a great day in the mountains. The quintessential Tahoe rental! We wouldn't hesitate to rent this house again!

    ",
    name: "Lauren S.",
    date_stayed: "Nov 5, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Such a pleasant stay!",
    content: "We had a wonderful time at this property. The rooms were situated perfectly for our kids and parents - everyone was able to sleep in without being disturbed. The house was near a beautiful trail, and was so serene when sitting out on the front deck. Also, located only abt 7 mins drive to Tahoe City which was beautiful and fun to walk around! Lastly, amenities were great - toiletries, games and puzzles for the kids, and TV with Netflix etc for all of us to enjoy on the quiet evenings.

    Make sure to bring coffee filters and anything to cook with - they don't keep it stocked since there's so much wildlife in the area - but totally understandable!
    
    We would absolutely stay again and recommend it to others! Thanks !!",
    name: "Ashley B.",
    date_stayed: "Jul 16, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Family Oriented",
    content: "Using the VRBO app, booking and communication with hosts, the See's, was easy, quick and convenient. Upon arrival the house felt warm and inviting with the lights and temperature already on. The location was close to all activities and had a view of Lake Tahoe. The decor was quaint with unique touches throughout the home. The amenities where a pleasant convenience.

    We had a small concern with the overall cleanliness and immediately communicated with the hosts who provided a prompt response.
    
    We felt comfortable with plenty of space for the kids to play. Even able to work while enjoying the beautiful scenery and fast internet service.
    
    We had such a relaxing time and great experience that we are already looking at rebooking for next year.
    
    Thank you!",
    name: "Jennifer L.",
    date_stayed: "Jun 27, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Grandparents and adult kids and grandkids vacation",
    content: "I honestly don't know where to begin .

    Everything about this trip and property was fantastic .It was our first time to Lake Tahoe and we could not have picked a better location or property to rent . the house is beautifully updated and comfortable . What was really spectacular was the two master bedrooms on operate floors .The upstairs bedrooms are situated so that it is almost in another wing . This makes for nice quiet for the sleeping on main level
    
    The three beautiful full baths were also amazing .the host provided upscale travel toiletries for each bath/bedroom
    
    The kitchen was superbly equipped with everything we needed . There is very comfortable seating in the kitchen as well as a separate dining room
    
    The outdoor space is great and there is a small view of lake from the front deck . We loved being at the end of the block and used the hiking trails and bike path daily
    
    The host has left no stone unturned !!!!!!
    
    We hope tom return to Lake Tahoe and this wonderful house in our future",
    name: "mary ellen s.",
    date_stayed: "Jun 1, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Gorgeous, comfortable home in quiet setting-- wonderful for family trip",
    content: "Our family group of 7 (5 adults, 2 kids) had a wonderful time staying at this really lovely, thoughtfully outfitted home!

    The floorplan really worked for us, with plenty of space for people in our group to be alone, or for the kids to play in a different room from the adults.
    
    The kitchen and dining room were lovely and cozy, but with ample space for all of us, as was the living room space. We had a fire in the fireplace one evening, and used the sound system and TV occasionally as well. The mud room and laundry room were fantastic— so helpful to have the space for snow clothes and wet gear!
    
    We also loved the location— very quiet— and being able to see the lake form several windows and the front porch was a wonderful bonus. We explored the trail just up the street, which is fantastic for short or long walks.
    
    We really found everything we needed— everything in the house was easy to operate and user-friendly. And there was plenty of hot water for showers, and the beds were quite comfortable.
    
    The Sees have made a lovely, thematic family vacation home and we would love to come back!
    
    ",
    name: "Elaine G.",
    date_stayed: "Apr 23, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Very nice location and beautiful kitchen",
    content: "We really enjoyed staying here! We will be back again! Everything we needed and great space!",
    name: "Lisa F.",
    date_stayed: "Mar 16, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "We just completed a 7 day stay in this property. It is very clean and well appointed.",
    content: "We had a wonderful stay at this property. Very well appointed. The kitchen is very nicely equipped. We made several meals in the lovely kitchen. The house is very well maintained and extremely comfortable. My family had a great stay and was very sad to leave. Thank you Joe and Linda for sharing your home with us. It's a beautiful home in a great location. My kids spent several days skiing and this house was a perfect location. It was great to have family time by the fireplace. Nice supply of firewood. We will definitely book again.",
    name: "Syed H.",
    date_stayed: "Mar 1, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Carnelian bay home",
    content: "House is clean, comfortable and has character. Owners were very responsive and helpful. The location is great, close to beautiful Skylandia beach and skiing. We had a great time and I would definitely recommend staying here.",
    name: "sinead k.",
    date_stayed: "Feb 22, 2021",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Checked all the boxes!",
    content: "We really enjoyed our stay, and this home checked all of our boxes. The bed configurations were perfect for our needs, the Viking range was a pleasure to cook with, the kitchen was well equipped, the living room was comfortable. High end smart TV with great instructions. Location was very convenient. The owners provided excellent information about the property and surrounds pre visit. The pre-stay emails were answered completely and in a very timely fashion. Quiet neighborhood in a beautiful setting. We'll be back!",
    name: "K Q.",
    date_stayed: "Feb 24, 2020",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Wonderful Tahoe Stay",
    content: "The house is absolutely lovely and every bit as nice as the pictures!",
    name: "Ashley L.",
    date_stayed: "Jan 13, 2020",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "great home away home for family vacation",
    content: "We are family of 5 and all adults. this place has 4 bedrooms and 3 full baths, making everybody happy. The home decor is great and the kitchen is definitely great for family cooking. There are plenty of books and magazines, and choices of games. We played monopoly on first night and poker the second after having cooked dinners. We also very appreciative of the well shoved driveway and pathway to the main door. One minor thing that people might want to take note is that the garage door is tight. Our 2006 Honda Pilot barely fit in. Overall a great place we all enjoyed.",
    name: "Sing-Man Y.",
    date_stayed: "Jan 10, 2020",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "All of the comforts of home... and then some.",
    content: "First class accommodations! Central location, functional layout and quiet neighborhood. The home includes a cook's kitchen, a deck with a peak of the lake and an outdoor firepit. Although we were just one family, two bedrooms on the main floor and two bedrooms on the second floor is a perfect setup for two families traveling together. The home was spotless and appeared to be recently remodeled with high quality fixtures and finishes. No disappointments here. We look forward to a return visit.",
    name: "Robert K.",
    date_stayed: "Oct 8, 2019",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Relaxing in Tahoe",
    content: "Wonderful",
    name: "John G.",
    date_stayed: "Sep 10, 2019",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Beautiful Carnelian Bay cottage",
    content: "We had a wonderful time in the home and the See’s were great hosts! 2 master bedrooms and 2 rooms each with double beds allowed plenty of room. Recently remodeled and the pictures don’t do it justice. Great location close to the north shore, we will be back!",
    name: "Rob F.",
    date_stayed: "Aug 1, 2019",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Beautiful Home",
    content: "The house was perfect for our family. We spent most of our time enjoying the front deck (with lake view) and the fire pit. Plus, everything was super clean.",
    name: "Lauren N.",
    date_stayed: "Jul 24, 2019",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "What a VACATION rental should be!",
    content: "We have nothing but great things to say about our 4 night stay. The owners were very responsive, accommodating and detailed. The check in process was a breeze. The house itself has a warm feeling with lovely mountain and ski decor. The layout makes for the perfect combination of a spacious, but cozy feel at the same time. We especially enjoyed cooking and eating in the beautiful and lighted kitchen with even a view of the lake from the dining room window, our mornings in the porch with a stunning mountain and lake view, and our nights by the fire gazing at the shimmering lake lighted by the moon ( we were so lucky to have clear nights with an almost full moon!)

    Comfortable beds, plenty of fresh clean towels, and everything you could possibly need for an enjoyable stay. You don’t need to bring anything! They have beach towels, beach chairs, sun block, bug repellant, beach bag and even a picnic basket with everything you would need! Everything was so clean and nicely organized.
    
    Although it was our 1st time visiting Lake Tahoe, we explored a lot of the areas and thought the location was perfect! Away from the crowds and noise, up in a hill ( with tons of beautiful hiking or biking trails 2 houses away), but within 5 to 10 minutes to restaurants, supermarkets, shops, and beaches.
    
    Highly recommended!",
    name: "Josefina M.",
    date_stayed: "Jul 24, 2019",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Tahoe",
    content: "This house was perfect for our stay. We had our family (5) and two friends. The home also accommodated our boat with ideal street parking and a great location as we were close to one of the best boat ramps on Tahoe. The owners travel/Tahoe advice and tips were extremely helpful as we were new travelers to Tahoe. Thank you!",
    name: "Denby E.",
    date_stayed: "Jul 25, 2019",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Great location, Beautiful Kitchen, Clean and Charming lodge",
    content: "Wonderful Location: We were here during the heavy snow season, we could use either 89 or 267. It's always good to have more options for this time of the year. Easy access to Northstar and Squaw Valley. Sunshine and lake view in the day time, and beautiful stars at night.

    Beautiful Kitchen: We are a group who really enjoys to cook. This kitchen is not only fully-equipped with high-end appliances, it also has a nice nook area that we could all hangout while preparing the food.
    
    Cozy Living Space and Dinning area: We spent a lot of time around the fire place, chatting and listen to music after dinner. The dinning place has a large dining table, which was great for board games.
    
    Rooms and Bath room: 4BR and 3BA, the ratio makes very easy for 7 of us, combined with 1 family including 2 kids and other friends. 2 rooms with 2x twin beds made the arrangements very easy. All the rooms were clean, with enough electrical plugs and extra blankets.
    
    Other1: The trash bins are next to the driveway. A lot of places in Tahoe you need to take the trash and walk for a block to dump it. In winter time, this short distance is definitely a plus.
    
    Other2: The access instruction was sent in advance compares to many of other property, The owner's kindness and trust make us so easy to coordinate for the arrival.
    
    I surely want to come back again. I think in different seasons we can also enjoy the nice outdoor spaces.",
    name: "Chika S.",
    date_stayed: "Mar 8, 2019",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Charming Bavarian Cottage",
    content: "We spent Thanksgiving in this lovely cottage in the Carnelian Bay area. There was a view of the lake from the front deck and we were fortunate to have 2 days of snow which was gorgeous. The snow plow came through daily as well as a service that plowed the driveway. The home was immaculate and so welcoming when we arrived. The local service had the heat and lights turned on, a supply of wood ready for a warm fire, a nice bottle of wine and fresh towels laying on each bed. The newly remodeled kitchen was a dream to cook in with all the modern conveniences. The entire home was furnished so tastefully with a Tahoe touch in each room. The beds were comfortable with warm bedding and very nice linens. The bathrooms were also remodeled and supplied with wonderful amenities for guests. The home is nicely laid out and very roomy. The location is perfect being close to Tahoe City or Kings Beach, hiking trails and close to ski resorts for the ski lovers. The home is in a lovely neighborhood with plenty of natural forest surrounding the property. The owners of this home were a pleasure to work with being very responsive and accommodating. We look forward to returning during the warmer months to enjoy the outside fire pit, a game of horseshoes, the lake nearby and dinner on the front deck. We have stayed in many VRBO / Home Away properties and this is one of the very best we have experienced.",
    name: "The Smiths",
    date_stayed: "Dec 4, 2018",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "Cute and cozy!",
    content: "An adorable property! The place is great - clean, spacious and we loved the eat in table in the kitchen - great for the kids! The fire pit and chairs outside was a hit each night! Would absolutely rent again! ",
    name: "Megan H.",
    date_stayed: "Aug 10, 2018",
    score: 5
  )

  Review.create!(
    rental: alpine,
    title: "That was an amazing time for us to spend time in this house. Super clean and organized.",
    content: "We were 3 families;6 adult and 3 kids. Really perfect place for families with kids. The home owner prepared every thing(such as towels, soup, paper towels, all kitchen equipments, and so on...; the house was renewed, clean and close to lake. In overall, if I decide to go back to Tahoe for vacation, for sure I will rent this place again.",
    name: "Mina G.",
    date_stayed: "Aug 25, 2018",
    score: 5
  )

Review.create!(
  rental: napa,
  title: "Beautiful Napa River",
  content: "Lovely 4 bdrm house with gorgeous views!!",
  name: "Arna B.",
  date_stayed: "Oct 6, 2022",
  score: 5
)

Review.create!(
    rental: napa,
    title: "Perfection in Napa",
    content: "We stayed here for the month of July and had a wonderful vacation. It's close to downtown Napa and many wineries and restaurants but it's in a quiet family neighborhood. Linda and Joe are responsive and professional hosts. We would love to return and would highly recommend this rental.
    ",
    name: "Stu & Jackie B.",
    date_stayed: "Aug 4, 2021",
    score: 5
  )

  Review.create!(
    rental: napa,
    title: "Excellent",
    content: "Everything was first class and we enjoyed our stay very much.",
    name: "Rod E.",
    date_stayed: "Jul 22, 2021",
    score: 5
  )

  Review.create!(
    rental: napa,
    title: "Restorative Month",
    content: "We spent a month here during the pandemic as our home away from home and everyone loved it. Amazing light, beautiful views, great deck and separate yard with fire pit, and a dock that we spent time sitting on to just watch the boats go by. There's also a beautiful wildlife preserve on the other side of the house that has a great walking/running path.
    ",
    name: "Sandy K.",
    date_stayed: "Mar 2, 2021",
    score: 5
  )

  Review.create!(
    rental: napa,
    title: "Serene Napa escape",
    content: "Such a beautiful, spacious home and neighborhood! Being right on the river was so peaceful, and around the front of the house is a walking trail right along the water with tons of wildlife to observe.

    Since it's not a through street, the only cars driving by are the neighbors, who are very courteous. Stores and restaurants are a short drive away, yet far enough to where you're not in the middle of everything.
    
    Looking forward to staying again sometime!",
    name: "Garrett G.",
    date_stayed: "Jan 21, 2021",
    score: 5
  )

  Review.create!(
    rental: napa,
    title: "Serenity on the water",
    content: "Linda & Joe's home is absolutely wonderful. The beauty you're surrounded by here on Edgerley Island is simply unbelievable.",
    name: "Ryan Thomas C.",
    date_stayed: "Sep 15, 2020",
    score: 5
  )
        
  Contact.create!(
    name: "Bob Smith",
    email: "bob@smith.com",
    message: "I'm interested in renting the property. Can you provide more information about the rental process and availability?"
    )
    
    Contact.create!(
    name: "Samantha Lee",
    email: "sam@lee.com",
    message: "Hi, I saw the property listing online and I'm interested in renting it. Is there an open house I can attend to view the property in person?"
    )
    
    Contact.create!(
    name: "Michael Chen",
    email: "michael@chen.com",
    message: "I'm looking to rent a new place and your property caught my eye. Can you tell me more about the neighborhood and nearby amenities?"
    )
    
    



# Gallery seed data
Gallery.create!(
  rental: alpine,
  image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/85b6b986.f10.jpg",
  description: "Remodeled kitchen"
)

Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/e81e58e5.f10.jpg",
  description: "Home exterior and fire pit"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/128063da.f10.jpg",
    description: "Living room"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/e29ac7c0.f10.jpg",
    description: "Lakeview dining"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/98a3ad2f.f10.jpg",
    description: "Lakeview deck"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/f8ad777e.f10.jpg",
    description: "Adirondack chairs"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/9c62e32a.f10.jpg",
    description: "Living Room"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/964c02fa.f10.jpg",
    description: "Dining Area"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/5d6b53ae.f10.jpg",
    description: "Dining Area"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/954f55c1.f10.jpg",
    description: "Living room view from the kitchen"
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/14637f2a.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/32657dc8.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/db43bc2e.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/fea8fd6d.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/f4fc8cdd.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/7d51250e.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/eb10695f.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/4eaa665b.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/3cc5bbfb.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/979c4dd8.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/d161d7cf.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/46a0884f.f10.jpg",
    description: ""
  )

  Gallery.create!(
    rental: alpine,
    image: "https://media.vrbo.com/lodging/34000000/33980000/33979800/33979741/b04637f2.f10.jpg",
    description: ""
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