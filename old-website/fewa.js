// server
Meteor.method {
    "getQuery" ({ query, params }) {
        // make twit api call
        // return data
        x = T.get(query, params)
        return x 
    }

    
}


// client
Meteor.call("getQuery", "user/followers", {screenname: "paige", count: 10}, 
        function (err, data, response ) {
                Session.set("users", data)
})