<script>
    import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';
</script>

<LottiePlayer
  src='/lotties/arrow.json'
  autoplay={true}
  loop={true}
  controls={false}
  renderer='svg'
  background='transparent'
  height={500}
  width={500}
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