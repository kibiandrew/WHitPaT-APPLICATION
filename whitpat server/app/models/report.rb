class Report < ActiveRecord::Base
    belongs_to :user

    # def cast_role(title, description)
    #     self.create(title:title, description:description, user_id:self.id )
    #   end
end