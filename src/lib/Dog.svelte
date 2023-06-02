<script lang="ts">
  	export let src: string;

 	let currentTrick: string;

	const tricks = {
		FLIP: 0,
		SPIN: 1,
		JUMP: 2,
		FLY: 3,
		GROW: 4,
		ATTACK: 5,
	};

	export const doTrick = (trick: number) => {
		console.log('doing trixxx', trick);
    currentTrick = Object.entries(tricks).find(([key, value]) => value === trick)![0].toLowerCase();
	}
</script>

<div>
	<img class="{`dog ${currentTrick}`}" alt="Random dog" src="{src}" />

	<div>
		<button on:click="{() => doTrick(tricks.FLIP)}">
			Flip
		</button>
		<button on:click="{() => doTrick(tricks.GROW)}">
			Grow
		</button>
		<button on:click="{() => doTrick(tricks.SPIN)}">
			Spin
		</button>
		<button on:click="{() => doTrick(tricks.JUMP)}">
			Jump
		</button>
		<button on:click="{() => doTrick(tricks.ATTACK)}">
			Attack!
		</button>
	</div>
</div>

<style>
.dog {
	width: 400px;
	height: 400px;
	border-radius: 32px;
	object-fit: cover;
  transform: rotate(360deg);
}


.flip {

}

.grow {
  transition-duration: 0.5s;
	width: 800px;
	height: 800px;
}

.spin {
  transition-duration: 0.5s;
  transform: rotate(-360deg);
}

.jump {
  transition-duration: 0.5s;
  transform: translateY(-500px);
}

.attack {
	transition-duration: 0.5s;
  	scale: 10;
}



@keyframes scaleImg {
    0% {
        transform: scale(0.8);
    }
    50% {
        transform: scale(1);
    }
    100% {
        transform: scale(0.8);
    }
}

img { 
   transform: scale(0.8);
   animation: scaleImg 1.5s alternate;
   animation-timing-function: linear;
   animation-iteration-count: 2;
}

</style>