class HardWorker
  include Sidekiq::Worker

  def perform(*args)
    # Do something
    puts "Hello from Sidekiq"
  end
end
