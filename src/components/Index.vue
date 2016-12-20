<li v-for="styleUrl in iPhone6S.style" @click="changeStyle($key,styleUrl)" :class="{active:iPhone6S.activeStyleUrl==styleUrl}">
	<span v-text="$key"></span>
</li>