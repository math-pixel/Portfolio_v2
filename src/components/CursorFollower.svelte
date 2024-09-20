<script>
  import { onMount } from 'svelte';

  let target = { x: 0, y: 0 };
  let current = { x: 0, y: 0 };
  let frame;

  function handleMousemove(event) {
    target.x = event.pageX;
    target.y = event.pageY;
  }

  function lerp(start, end, factor) {
    return start * (1 - factor) + end * factor;
  }

  function animate() {
    current.x = lerp(current.x, target.x, 0.1);
    current.y = lerp(current.y, target.y, 0.1);

    frame = requestAnimationFrame(animate);
  }

  onMount(() => {
    window.addEventListener('mousemove', handleMousemove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMousemove);
      cancelAnimationFrame(frame);
    };
  });
</script>

<div 
class="w-[800px] h-[800px] bg-[#CFE9FF] blur-3xl opacity-30 absolute top-0 left-0 rounded-full z-[-100]" 
style="transform: translate({current.x - (800 / 2)}px, {current.y - (800 / 2)}px);"
/>

  