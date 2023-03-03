puts "🌱 Seeding ..."
# creates user table
User.create(username:"Dennis", email: "denniskiprop25@gmail.com", password: "12345", role: "admin")
User.create(username:"maso", email: "denn25@gmail.com", password: "12345", role: "user")
User.create(username:"den", email: "den25@gmail.com", password: "12345", role: "user")
User.create(username:"weri", email: "denniskiprop5@gmail.com", password: "12345", role: "user")
User.create(username:"Kijana", email: "denniskiprop2@gmail.com", password: "12345", role: "admin")


# creating Reports
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It JuJa", user_id:1)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It Kawangware", user_id:2)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It Fedha", user_id:3)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It Prestige", user_id:4)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It JuJa", user_id:5)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It JuJa", user_id:5)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It JuJa", user_id:4)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It JuJa", user_id:3)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It JuJa", user_id:2)
Report.create(title:"Fire at My Neighbourhood", description:"It happened accidendally",location:"It JuJa", user_id:1)

puts "✅ Done seeding!"
