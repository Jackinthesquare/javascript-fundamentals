/* arrays for a single data type around a single topic
    objects for multiple data type around a single topic

// examples
objects = { name: 'michael', score: 100 }
objects2 = { street: 'Norman', zipcode: 11222 }

arrays = [100, 200, 300]
array2 = ['micahel', 'james', 'powell']

user = {
    name: 'Michael Law',
    email: 'michael@example.com',
    private: true,
    followers: 100,
    following: 100000,
}

const followingCount = [1000, 2000, 3000, 4000]
*/

let tenant1 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    age: 30,
    pet: 'Fido'
}

let tenant2 = {
    name: 'Jane Doe',
    creditScore: 800,
    salary: 22000,
    age: 33
}

let tenant3 = {
    name: 'Jane Doe',
    creditScore: 400,
    salary: 15000,
    age: 30
}

let tenant4 = {
    name: 'John Doe',
    creditScore: 400,
    salary: 15000,
    age: 30
}



let apt1 = {
    bedrooms: 2, 
    sqft: 50, 
    bathrooms: 3, 
    windows: 0, 
    rent: 4500, 
    unit: '1A',
    tenants: []
}

let apt2 = {
    bedrooms: 1, 
    sqft: 500, 
    bathrooms: 1, 
    windows: 2, 
    rent: 1500, 
    unit: '1B',
    tenants: []
}

let apt3 = {
    bedrooms: 1, 
    sqft: 53, 
    bathrooms: 1, 
    windows: 0, 
    rent: 2400, 
    unit: '1C',
    tenants: []
}

let apt4 = {
    bedrooms: 0, 
    sqft: 10, 
    bathrooms: 0, 
    windows: 0, 
    rent: 900, 
    unit: '1D',
    tenants: []
}




let building = {
    streetAddress: '74 N 7th Street, Brooklyn Ny 11249',
    laundry: false,
    allowsPets: false,
    lease: function(apt, tenant) {
        if (apt.tenants.length === apt.bedrooms){
            return `${apt.unit} is already full`
        }
        if (this.allowsPets === false && tenant.pet){
            return `${apt.unit} is available, but you must give ${tenant.pet} up for adoption!`
        }
        let t =apt.tenants.push(tenant)
        console.log(tenant.name,'has rented out', apt.unit)
        return t
    },
    occupiedApts: function() {
        //returns only the apts which have tenants inside them
        //condition to test: apt.tenants.length
        return this.apartments.filter((el) => {
            return el.tenants.length > 0
        })
    },
    fullApts: function() {
        //returns only the apts which are completely full
        //condition to test: apt.tenants.length === apt.bedrooms
        return this.apartments.filter((el) => {
            return el.tenants.length === el.bedrooms
        })
    },
    apartments: [apt1,apt2,apt3]
}

// building.apartments.forEach()
/* [Name of the Acting object].[action it is taking](target)
example: apt1.lease(tenant1) 
lease: function(tenant) {
        if (this.tenants.length === this.bedrooms){
            return `${this.unit} is already full`
        }
        this.tenants.push(tenant)
        console.log(tenant.name,'has rented out', this.unit)
    },
now we need to move this up to prevent copying repetitive code such as in apt2,apt3,etc.

so we move it to building with one more parameter
example: building.lease(apt, tenant)
lease: function(apt, tenant) {
        if (this.tenants.length === this.bedrooms){
            return `${this.unit} is already full`
        }
        this.tenants.push(tenant)
        console.log(tenant.name,'has rented out', this.unit)
    },
*/








/*
//Write a basic JavaScript object that represents a user that has no fewer than 3 keys/properties about that user
let digiKid = {
    name: 'Matt',
    age: 12,
    partner: 'gabumon'
}

//Write a function called greet that takes no arguments and prints the string "Hello World"
const greet = () => console.log('Hello World!')

//Create an array called fruits with 5 elements
const fruits = ['banana','apple','orange','grape','pineapple']

//console.log the second element and console.log the last element of the above array
console.log(fruits[1])
console.log(fruits[fruits.length-1])

//Create an object that represents an apartment building without referring to any code
let newBuilding = {
    streetName: '11 Broadway',
    elevator: true,
    gym: false,
    commercialShops: true,
    office: [off1,off2,off3],
}
*/