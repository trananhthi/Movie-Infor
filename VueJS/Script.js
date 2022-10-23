/* import Movie from './Movies.js'
import store from './Store.js'
import intheater from '../../../db/InTheaters.json' assert { type: 'json' }; */

$(document).ready(function () {
    $('.form-check-input').click(function () {
        if ($('.form-check-input').is(':checked')) {
            $("*").addClass("text-light");
            $(".form-control, .btn").removeClass("text-light")
            $(".alert").removeClass("alert-light");
            $("body").css("background-color", "#141414");
            $(".alert").addClass("bg-dark border")
            $(".navbar").addClass("bg-dark border")
            console.log('h')
        }
        else {
            $("*").removeClass("text-light");
            $(".alert").addClass("alert-light");
            $("body").css("background-color", "#cccccc");
            $(".alert").removeClass("bg-dark border")
            $(".navbar").removeClass("bg-dark border")
            console.log('v')
        }
    });



});