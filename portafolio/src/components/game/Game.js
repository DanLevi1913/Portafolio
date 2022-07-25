import React from 'react';
import kaboom from 'kaboom';

export const Game = () => {
	// Extend our game with multiple scenes

	// Start game
	const k = kaboom();
	// Extend our game with multiple scenes

	// Load assets

	k.loadSprite('bean', '/coin.png');
	k.loadSprite(
		'spike',
		'https://static.wikia.nocookie.net/brawlstars/images/8/8e/Spike_Skin-Default.png/revision/latest?cb=20210111165356&path-prefix=es'
	);
	k.loadSprite(
		'grass',
		'https://www.craftycreations.net/wp-content/uploads/2019/08/Grass-Block-600x600.png'
	);
	k.loadSprite('coin', 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Gold_coin_icon.png');
	k.loadSprite(
		'ghosty',
		'https://i.pinimg.com/originals/67/08/39/6708398b2d2acb9d33cd5ae7a6270347.png'
	);
	k.loadSprite(
		'portal',
		'http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/dd28c3e5604d33a.png'
	);

	const SPEED = 480;

	// Design 2 levels
	const LEVELS = [
		['@  ^ $$ >', '========='],
		['@   $   >', '=   =   ='],
	];

	// Define a scene called "game". The callback will be run when we go() to the scene
	// Scenes can accept argument from go()
	k.scene('game', ({ levelIdx, score }) => {
		k.gravity(2400);

		// Use the level passed, or first level
		const level = k.addLevel(LEVELS[levelIdx || 0], {
			width: 64,
			height: 64,
			pos: k.vec2(100, 200),
			'@': () => [k.sprite('bean'), k.area(), k.body(), origin('bot'), 'player'],
			'=': () => [k.sprite('grass'), k.area(), k.solid(), k.scale(0.1), k.origin('bot')],
			$: () => [k.sprite('coin'), k.area(), k.origin('bot'), 'coin'],
			'^': () => [k.sprite('spike'), k.scale(0.2), k.area(), k.origin('bot'), 'danger'],
			'>': () => [k.sprite('portal'), k.area(), k.scale(0.1), k.origin('bot'), 'portal'],
		});

		// Get the player object from tag
		const player = k.get('player')[0];

		// Movements
		k.onKeyPress('space', () => {
			if (player.isGrounded()) {
				player.jump();
			}
		});

		k.onKeyDown('left', () => {
			player.move(-SPEED, 0);
		});

		k.onKeyDown('right', () => {
			player.move(SPEED, 0);
		});

		player.onCollide('danger', () => {
			player.pos = level.getPos(0, 0);
			// Go to "lose" scene when we hit a "danger"
			k.go('lose');
		});

		player.onCollide('coin', (coin) => {
			k.destroy(coin);

			score++;
			scoreLabel.text = score;
		});

		// Fall death
		player.onUpdate(() => {
			if (player.pos.y >= 480) {
				k.go('lose');
			}
		});

		// Enter the next level on portal
		player.onCollide('portal', () => {
			if (levelIdx < LEVELS.length - 1) {
				// If there's a next level, go() to the same scene but load the next level
				k.go('game', {
					levelIdx: levelIdx + 1,
					score: score,
				});
			} else {
				// Otherwise we have reached the end of game, go to "win" scene!
				k.go('win', { score: score });
			}
		});

		// Score counter text
		const scoreLabel = k.add([k.text(score), k.pos(12)]);
	});

	k.scene('lose', () => {
		k.add([k.text('You Lose'), k.pos(12)]);

		// Press any key to go back
		k.onKeyPress(start);
	});

	k.scene('win', ({ score }) => {
		k.add([
			k.text(`You grabbed ${score} coins!!!`, {
				width: k.width(),
			}),
			k.pos(12),
		]);

		k.onKeyPress(start);
	});

	function start() {
		// Start with the "game" scene, with initial parameters
		k.go('game', {
			levelIdx: 0,
			score: 0,
		});
	}

	start();

	return (
		<div>
			<h1>game</h1>
		</div>
	);
};
