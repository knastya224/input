// add.addEventListener("click", function () {
//     var node = document.getElementsByClassName("row1")[0];
//     console.log(node);
//     document.getElementsByClassName("wrap")[0].appendChild(node);
// });

// rem.addEventListener("click", function () {
//     var node = document.getElementsByClassName("row1")[0]; // Create a <li> node
//     document.getElementsByClassName("wrap")[0].removeChild(node);
// });

// clean.addEventListener("click", function () {
//     let y = document.getElementsByTagName("input");
//     for (var i = 0; i < y.length; i++) {
//         y[i].value = "";
//     }
// });

$(document).ready(function () {
    var max_fields = 10;
    var w1 = $(".container1");
    var add_button = $(".btn-success");

    var x = 1;
    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(w1).append('<div><input type="text" name="mytext"/><button class="btn btn-danger">Delete</button></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(w1).on("click", ".btn-danger", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })




    var w2 = $(".container2");
    var add_button = $(".btn-outline-success");

    var x = 1;
    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(w2).append('<div> <label for="basic-url">Your vanity URL</label> <div class="input-group mb-3"><div class="input-group-prepend"><span class="input-group-text" id="basic-addon3">https://example.com/users/</span></div><input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" /></div><button class="btn btn-danger">Delete</button></div>'); //add input box
        } else {
            alert('You Reached the limits')
        }
    });

    $(w2).on("click", ".btn-danger", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    })
});