<script src="https://connect.facebook.net/en_US/fbinstant.6.3.js"></script>

fbinstant.initializeAsync()
  .then(function() {
    var contextID = fbinstant.context.getID();
    var contextType = fbinstant.context.getType();

    var playerName = fbinstant.player.getName();
});