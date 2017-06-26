# Node Drills - Part 2

This is for additional practice for:
1. making requests to a server and
2. handling incoming requests to your web server.

Install dependecies: `npm install`

In `server.js` you will notice that you already have the server set up for you. yIt is your job to build endpoints to handle specific requests. Take a look at the `users.json` file to see the data that you will be interacting with.

### Endpoints

Use Postman to make requests to your server.

### Handling requests with queries:

1. Get all users that drive an Audi. The make of the car should be sent in the request url as a query.
   * GET
   * '/api/users'
   * `?make=Audi`

2. Get all users whose name starts with an 'A'.
   * GET
   * '/api/users'
   * `?letter=A`

3. Get all users who drive a car newer than given year.
   * GET
   * '/api/users/vehicleYear
   * `?year=1998`

4. Update users email address to `null` with given last name.
   * PUT
   * `/api/user/emailUpdate
   * `?lastName=Garstan`   

5. Update car make with given user id and car make.
   * PUT
   * '/api/user/udpateVehicle'
   * `?userId=8&make=Ford`

6. Delete user objects by car model.
   * DELETE
   * '/api/removeUser'
   * `?model=TSX`

### Handling requests with params:

1. Get user by id. The user id should be sent in the request url as a param:
   * GET
   * '/api/user/:id'

2. Get users by car model.
   * GET
   * '/api/vehicles/:model
3. Get users whose first name starts with the given letter.
   * GET
   * '/api/userByName/:letter
4. Update users name to 'Ned' by given id.
   * PUT
   * '/api/updateName/:id
5. Delete user by id.
   * DELETE
   * '/api/user/:id
6. Delete user by email address.
   * DELETE
   * '/api/removeByEmail/:email     

### Handling requests with a body:

1. Update a user's information. The id of the user to update is included in the body.
   * PUT
   * '/api/user/'
   * Body of request:
   ```
       {
        "id": 2,
        "first_name": "Warrick",
        "last_name": "Banner",
        "email": "wbanner@cnn.com",
        "make": "Ford",
        "model": "Fiesta",
        "year": 2010
    }
    ```
2. Add a new user to the users array.
   * POST
   * '/api/users'
   * Body of request:
   ```
    {
        "id": 101,
        "first_name": "Madelina",
        "last_name": "Atkins",
        "email": "matkinsn@barnesandnoble.com",
        "make": "Audi",
        "model": "riolet",
        "year": 1998
    }
   ```

3. Update a users first name by the user's id (sent as param).
   * PUT
   * '/api/user/updateName/:id'
   * Body of request:
   ```
   {
       "first_name": "Bruce"
   }
   ```  

4. Add a new user object to the users array. The new user's id will be sent as a query. The rest of the info will be sent in the body.
   * POST
   * '/api/newUser
   * `?id=110`
   * Body of request: 
   ```
   {
        "first_name": "Mac",
        "last_name": "Aroni",
        "email": "maroni@bloglines.com",
        "make": "Chevy",
        "model": "Colorado",
        "year": 2017
    }
   ```