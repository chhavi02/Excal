$(document).ready(function() {
    $('#viewDuties').on('click', function(e) {
        e.preventDefault();
        var pageRef = $(this).attr('href');
        callPageViewDuties(pageRef)
    });

    function callPageViewDuties(pageRefInput) {
        $.ajax({
            url: "/admin/viewDuties",
            type: "GET",
            dataType: "html",
            /*success: function(response){
            	$("<div/>").html(json.html).appendTo("body");
            }*/
            success: function(response) {
                console.log('the view duties page was loaded');
                $('.main-area').html(response); /*.appendTo("body")*/
            },
            error: function(error) {
                console.log('the view duties page was not loaded', error);
            }
        });
    }


    $('#createCentre').on('click', function(e) {
        e.preventDefault();
        var pageRef = $(this).attr('href');
        callPageCreateCentre(pageRef)
    });

    function callPageCreateCentre(pageRefInput) {
        $.ajax({
            url: "/admin/createCentre",
            type: "GET",
            dataType: "html",
            /*success: function(response){
            	$("<div/>").html(json.html).appendTo("body");
            }*/
            success: function(response) {
                console.log('the create centre page was loaded');
                $('.main-area').html(response); /*.appendTo("body")*/
                    $('#findCentre').on('click', function(e){
                    var centre = document.getElementById("centre").value;
                    console.log(e);
                    $.ajax({
                        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + centre + "&key= AIzaSyDW7MjMNbjibsp-tLFd9g9Ol-xc9NuIge4",
                        type: "GET",
                        dataType: "json",
                        success: function(response) {
                            console.log(response);

                            var lati = response.results[0].geometry.location.lat;
                            var long = response.results[0].geometry.location.lng;

                            var location= {lat: lati, lng: long};
                            var map = new google.maps.Map(document.getElementById('map'), {
                                zoom: 20,
                                center: location
                            });
                            var marker = new google.maps.Marker({
                                position: location,
                                map: map
                            });
                            var data = {
                                    latitide: lati,
                                    longitude: long,
                                    centreName: centre
                            }
                        },          
                        error: function(error){
                            console.log('the view duties page was not loaded', error);
                        }
                    });

                });
            },
            error: function(error) {
                console.log('the view duties page was not loaded', error);
            }
        });
    }
    $('#addLocation').on('click', function(e) {
        e.preventDefault();
        var pageRef = $(this).attr('href');
        callPageAddLocation(pageRef)
    });

    function callPageAddLocation(pageRefInput) {
        $.ajax({
            url: "/admin/addLocation",
            type: "GET",
            dataType: "html",
            /*success: function(response){
            	$("<div/>").html(json.html).appendTo("body");
            }*/
            success: function(response) {
                console.log('the create centre page was loaded');
                $('.main-area').html(response); /*.appendTo("body")*/
            },
            error: function(error) {
                console.log('the view duties page was not loaded', error);
            }
        });
    }
    $('#scheduleDuty').on('click', function(e) {
        e.preventDefault();
        var pageRef = $(this).attr('href');
        callPageScheduleDuty(pageRef)
    });

    function callPageScheduleDuty(pageRefInput) {
        $.ajax({
            url: "/admin/scheduleDuty",
            type: "GET",
            dataType: "html",
            /*success: function(response){
            	$("<div/>").html(json.html).appendTo("body");
            }*/
            success: function(response) {
                console.log('the create centre page was loaded');
                $('.main-area').html(response); /*.appendTo("body")*/
            },
            error: function(error) {
                console.log('the view duties page was not loaded', error);
            }
        });
    }


/*    $('#findCentre').on('click', function(e){
    var centre = document.getElementById("centre").value;
    console.log(e);
    $.ajax({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + centre + "&key= AIzaSyDW7MjMNbjibsp-tLFd9g9Ol-xc9NuIge4",
        type: "GET",
        dataType: "json",
        success: function(response) {
            console.log(response);

            var lati = response.results[0].geometry.location.lat;
            var long = response.results[0].geometry.location.lng;

            var location= {lat: lati, lng: long};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 20,
                center: location
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
            var data = {
                    latitide: lati,
                    longitude: long,
                    centreName: centre
            }
        },          
        error: function(error){
            console.log('the view duties page was not loaded', error);
        }
    });

});*/

});