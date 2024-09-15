<script>
	// Soo, I'm gonna keep this svelte file for the lol but ok
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
</script>

<LottiePlayer
  src='/lotties/arrow.json'
  autoplay={true}
  loop={true}
  controls={false}
  renderer='svg'
  background='transparent'
  height={300}
  width={300}
    />
  <!-- controlsLayout={[
		"previousFrame",
		"playpause",
		"stop",
		"nextFrame",
		"progress",
		"frame",
		"loop",
		"spacer",
		"background",
		"snapshot",
		"zoom",
		"info"
	]}  -->