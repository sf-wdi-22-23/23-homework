class Animal
  attr_accessor :kind
 

  def initialize(kind)
    @kind = kind
    @state = "awake"
  end

  def eat(food)
    puts "The #{kind} is eating #{food}"
  end

  def sleep
    @state = "asleep"
    puts "The #{kind} is asleep"
  end

  def awake
    @state = "awake"
    puts "The #{kind} is awake"
  end

end

class Person < Animal
  attr_accessor :kind, :age, :gender, :name
 
@@count = 0
  def initialize(age, gender, name)
    @kind = "person"
    @age = age
    @gender = gender
    @name = name
    @state = "awake"
    @@count = @@count + 1
  end

  def self.count
    @@count
  end

  def eat(food)
    if food == "person"
      response = "I am not a cannibal!!!"
    else
      response = "#{@name} is eating #{food}"
    end
    puts response
  end

  def greeting
    puts "Hi! My name is #{name}.  I'm a #{age} year old #{gender}!"
  end

end

# bird = Animal.new("Parrot")
# bird.eat("Crackers")
# bird.sleep



myself = Person.new("34", "Female", "Annie")
myself.eat("pizza")
myself.awake
myself.greeting

roy = Person.new("27", "Male", "Roy")
roy.eat("person")
roy.greeting

puts Person.count




