// Enemies our player must avoid
var Enemy = function(y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    this.x = -150;
    this.y =  y;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x += this.speed * dt;

    if (this.x >= 1000) {
        this.resetEnemy();
    }

// Check for collision between player and enemies
    if (player.x < this.x + 85 && player.x + 85 > this.x &&  player.y < this.y + 30 && 30 + player.y > this.y) {
        player.x = 300;
        player.y = 450;
        }

};

// Resets the enemy location.
Enemy.prototype.resetEnemy = function() {
    this.x = -150;
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Three enemy players with different speeds
var enemy1 = new Enemy(50, Math.floor(Math.random() * 450 + 1));
var enemy2 = new Enemy(130, Math.floor(Math.random() * 450 + 1));
var enemy3 = new Enemy(200, Math.floor(Math.random() * 450 + 1));

// Place all enemy objects in an array called allEnemies
var allEnemies = [];

allEnemies.push(enemy1, enemy2, enemy3);


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Player class
var Player = function(x, y, speed) {
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};


// Player's update function. It checks if the player does not go off the canvas

Player.prototype.update = function() {

    if (this.x < 0) {
        this.x = 0;
    }
    else if (this.x > 600) {
        this.x = 600;
    }
    else if (this.y < 0) {
        this.y = 405;
    }
    else if (this.y > 405) {
        this.y = 405;
    }
};

// put the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Resetting the player location, called when there is collision with the enemy.
Player.prototype.resetPlayer = function() {
    this.x = 300;
    this.y = 450;
};


// handleInput function changes the location of the player avatar depending on the keys pressed by the player.
Player.prototype.handleInput = function(keycode) {
    switch(keycode) {
        case "left":
            this.x -= 100;
            break;
        case "right":
            this.x += 100;
            break;
        case "up":
            this.y -= 90;
            break;
        case "down":
            this.y += 90;
            break;
    }
};


// Now instantiate your objects.

var player = new Player(300, 450, 50);
var enemy;

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);

});
