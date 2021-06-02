var about = [
    "my mother",
    "my father ",
    "my sis"
    ];


    var  image = [
        "https://images.unsplash.com/photo-1520177812839-78269c5ed62d?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1462123487947-121d7ccfe4a5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ ",
        "https://images.unsplash.com/photo-1549069786-641f4cb652c7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ "
        ];


        var i = 0;
        function nextslide(){
        document.getElementById("album").src=image[i];
        document.getElementById("r1").innerHTML=about[i];
        i++;
        }
    