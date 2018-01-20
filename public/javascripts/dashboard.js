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


});