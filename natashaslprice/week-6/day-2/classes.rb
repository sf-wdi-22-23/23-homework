class Animal 
	attr_accessor :kind, :state

	def initialize(kind)
		@kind = kind
	end

	def eat(food)
		puts "the animal is eating #{food}"
	end

	def sleep
		@state = "asleep"
	end

	def wake
		@state = "awake"
	end

end

cat = Animal.new("cat")

cat.wake

puts cat.state

puts cat.eat("chips")


# A Person class, with the following characteristics:

# Inherits from Animal
# Automatically sets @type to "person"
# Adds 3 new instance vars:
# age
# gender
# name
# Also, people aren't cannibals! Make sure your Person class overrides the existing eat method (in Animal) so that a Person cannot eat a "person"

class Person < Animal
	attr_accessor :kind, :state, :age, :gender, :name

	def initialize(age, gender, name)
		@kind = "person"
		@age = age
		@gender = gender
		@name = name
	end

	def eat(food)
		if food =="person"
			puts "I am not a cannibal!"
		else 
			puts "Yum, I am eating #{food}"
		end
	end

	def greet
		puts "Hi, I am a #{@kind} called #{@name} and I am #{@age} years old."
	end

end

tash = Person.new(26, "female", "Tash")
puts tash.greet


