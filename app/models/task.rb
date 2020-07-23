class Task < ApplicationRecord
  enum status: { wip: 0, done: 1 }
  validates :title, presence: :true
end
