import axios from "axios";
export const addUserAction = formData => dispatch => {
    // axios
    //     .post("http://localhost:7000/user", {
    //         data: formData
    //     })
    //     .then(function (response) {
            dispatch({
                type: "ADD_USER",
                payload: formData
            });
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
};

export const getPeopleDataAction = () => dispatch => {
    // fake api call 
    dispatch({
        type: "GET_USERS",
        payload: [
            {
              "_id": "1",
              "name": "Andrew Amernante",
              "rating": 3,
              "img": "http://www.fillmurray.com/200/200",
              "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
              "Likes": [
                "Dogs",
                "Long walks on the beach",
                "Chopin",
                "Tacos"
              ],
              "Dislikes": [
                "Birds",
                "Red things",
                "Danish food",
                "Dead Batteries"
              ]
            },
            {
              "_id": "2",
              "name": "Frank Wang",
              "rating": 5,
              "img": "http://www.fillmurray.com/200/200",
              "Description": "Before errors, mails were only pressures. This is not to discredit the idea that a magic is the prose of an elizabeth. This could be, or perhaps some posit the outmost coil to be less than dedal. Some assert that those treatments are nothing more than carp.",
              "Likes": [
                "Frank",
                "Manchester United",
                "Football",
                "Programming"
              ],
              "Dislikes": [
                "Dogs",
                "Long walks on the beach",
                "Chopin",
                "Tacos"
              ]
            },
            {
              "_id": "3",
              "name": "Sissi Chen",
              "rating": 5,
              "img": "http://www.fillmurray.com/200/200",
              "Description": "Aaah! Natural light! Get it off me! Get it off me! Oh, loneliness and cheeseburgers are a dangerous mix. D'oh. Here's to alcohol, the cause of — and solution to — all life's problems.",
              "Likes": [
                "Cats",
                "the beach",
                "Chopin",
                "Blue things"
              ],
              "Dislikes": [
                "Birds"
              ]
            },
            {
              "_id": "4",
              "name": "Diego Garcia",
              "rating": 2,
              "img": "http://www.fillmurray.com/200/200",
              "Description": "Facts are meaningless. You could use facts to prove anything that's even remotely true! I prefer a vehicle that doesn't hurt Mother Earth. It's a go-cart, powered by my own sense of self-satisfaction. You don't win friends with salad.",
              "Likes": [
                "Talking Spanish",
                "Spanish food",
                "Spanish things",
                "Football"
              ],
              "Dislikes": [
                "Not talking spanish",
                "Chopin"
              ]
            },
            {
              "_id": "5",
              "name": "Fuad Rashid",
              "rating": 4,
              "img": "http://www.fillmurray.com/200/200",
              "Description": "Gluten-free cray cardigan vegan. Lumbersexual pork belly blog, fanny pack put a bird on it selvage",
              "Likes": [
                "Dogs",
                "Long walks on the beach",
                "Chopin",
                "Tacos"
              ],
              "Dislikes": [
                "Birds",
                "Red things",
                "Danish food",
                "Dead Batteries"
              ]
            }
          ]
    });
    
};

export const deleteUserAction = _ids => dispatch => {
    // axios
    //     .delete("http://localhost:7000/user/" + _id, {})
    //     .then(function (response) {
    //         if (response.data) {
                dispatch({
                    type: "DELETE_USER",
                    payload: _ids
                });
        //     }
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
};