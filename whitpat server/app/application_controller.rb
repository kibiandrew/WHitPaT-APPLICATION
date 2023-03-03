class ApplicationController < Sinatra::Base
    set :default_content_type, 'application/json'
    
    # Add routes
    get '/' do
      user= User.all
      user.to_json
     end
  
  
     get '/users' do
      user= User.all
      user.to_json
     end
  
     get '/reports' do
      user = Report.order("id DESC")
      #user= Report.all
      user.to_json
     end
    #  registration routes
  
     post '/userregistration' do
      users= User.create(
        username: params[:username],
        email: params[:email],
        password: params[:password],
        role: params[:role]
        )
  
        if users
          response = {
            "message" => "You are now registered successfully"
          }
        end
        response.to_json
  
     end
  
    #  login
  
     post '/userlogin' do
      user=User.find_by_email(params[:email])
  
      if !user
        response = {
          "message" => "user does not exist please register"
        }
        return response.to_json
      else
        
        if user.password == params[:password]
          response = {
            "message" => "login success",
            "user" => {
              "id" => user.id,
              "username" => user.username,
              "role" => user.role
            }
          }
  
          return response.to_json
        else
  
          response = {
            "message" => "wrong password or email"
          }
  
           response.to_json
        end
      end
    end
  
  # post reports
  
     post '/postreports' do
      postreport=Report.create(
        title: params[:title],
        description: params[:description],
        location: params[:location],
        user_id: params[:user_id]
         )
         postreport.to_json
     end
  
    #  update reports
    patch '/updatereports/:id' do
      updatereport=Report.find(params[:id])
      updatereport.update(
        title: params[:title],
        description: params[:description],
        location: params[:location]
      )
        updatereport.to_json
  
    end
  
    delete '/deletereports/:id' do
      deletereport=Report.find(params[:id])
  
      deletereport.destroy
      deletereport.to_json
    end
  
    # filter reports by title
    get '/filterreports/:title' do
      reports=Report.find_by_title(params[:title])
      reports.to_json
    end
  
  end