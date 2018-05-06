app.controller('SupportChatController', function ($scope) {
   

    $(function () {

    var chat = $.connection.supportHub;

        chat.client.broadcastMessege = function (name, messege) {

        var encodedName = $('<div />').text(name).html();
        var encodedMsg = $('<div />').text(messege).html();

        // meddelande på sidan.
        $('.discussion').append('<li><strong>' + encodedName
            + '</strong>:&nbsp;&nbsp;' + encodedMsg + '</li>');
    };
    //Får användare namn och sparar den i diskutionen
    $('#displayname').val(prompt('Enter your name:', ''));

    $('#messege').focus();
    //Starta connection.

        $.connection.hub.start().done(function () {
           

            $('#sendmessege').click(function () {

            chat.server.send($('#displayname').val(), $('#messege').val());

            $('#messege').val('').focus();
        });

    });


});
});



