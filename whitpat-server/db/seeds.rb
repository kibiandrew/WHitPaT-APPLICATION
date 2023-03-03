puts "🌱 Seeding ..."
# creates user table
User.create(username:"andy", email: "andy@gmail.com", password: "12345", role: "admin")
User.create(username:"maso", email: "maso@gmail.com", password: "12345", role: "user")
User.create(username:"den", email: "den25@gmail.com", password: "12345", role: "user")
User.create(username:"weri", email: "weris@gmail.com", password: "12345", role: "user")
User.create(username:"Kijana", email: "kijana2@gmail.com", password: "12345", role: "admin")


# creating Posts
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It JuJa", user_id:1)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It Kawangware", user_id:2)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It Fedha", user_id:3)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It Prestige", user_id:4)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It JuJa", user_id:5)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It JuJa", user_id:5)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It JuJa", user_id:4)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It JuJa", user_id:3)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It JuJa", user_id:2)
Post.create(title:"party at My Neighbourhood", description:"It is fun ",location:"It JuJa", user_id:1)

puts "✅ Done seeding!"
