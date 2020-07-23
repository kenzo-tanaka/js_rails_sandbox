class Task < ApplicationRecord
  enum status: { wip: 0, done: 1, archived: 2 }
  validates :title, presence: :true
end
