// ==UserScript==
// @name         CopySigs
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Fallenstar
// @match        https://pathfinder.bravecollective.com/map/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bravecollective.com
// @run-at       document-idle
// @require      https://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

const $ = window.$

function addButtonToHeader(){
    var sigButton = $('<input type="button" value="Copy Sigs"/>')
    sigButton.addClass("navbar-text")
    sigButton.appendTo($(".navbar-header.pull-left"))
    sigButton.on("click", function(e){
        copyTable(e)
    })
}
function copyTable(e) {
    e.preventDefault();
    if ($('.pf-sig-table-primary').is(':visible')) {
        console.log('Text detected!');
        var table = $('.pf-sig-table-primary')[0];

        if (navigator.clipboard) {
            var text = table.innerText.trim();
            navigator.clipboard.writeText(text).catch(function () { });
            alert("Signatures Copied To Clipboard");
        };
    } else {
        alert("Please Select a System to Copy Signatures");
    }
}

$( window ).on( "load",function() {
    'use strict';

    // Your code here...
    var i = setInterval(function() {
        if ($('.navbar-header.pull-left').is(':visible')) {
            clearInterval(i);
            console.log('Text detected!');
            addButtonToHeader();
        } else {
            console.log('Waiting...');
        }
    }, 1000);
});
