/* arrays for a single data type around a single topic
    objects for multiple data type aroun a single topic

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
    age: 30
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
    tenants: [tenant1,tenant2,tenant3,tenant4]
}

let apt2 = {
    bedrooms: 1, 
    sqft: 500, 
    bathrooms: 1, 
    windows: 2, 
    rent: 1500, 
    unit: '1B',
    tenants: [tenant1,tenant2,tenant3,tenant4]
}

let apt3 = {
    bedrooms: 1, 
    sqft: 53, 
    bathrooms: 1, 
    windows: 0, 
    rent: 2400, 
    unit: '1C',
    tenants: [tenant1,tenant2,tenant3,tenant4]
}

let apt4 = {
    bedrooms: 0, 
    sqft: 10, 
    bathrooms: 0, 
    windows: 0, 
    rent: 900, 
    unit: '1D',
    tenants: [tenant1,tenant2,tenant3,tenant4]
}




let building = {
    streetAddress: '74 N 7th Street, Brooklyn Ny 11249',
    laundry: false,
    allowsPets: false,
    apartments: [apt1,apt2,apt3]
}

// building.apartments.forEach()