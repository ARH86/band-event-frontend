<template>
	<div id="events">
  		{{ info }}
	</div>
</template>


<script type="text/javascript">
	import axios from "axios";

export default ({
  template: '#events-page',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://api.seatgeek.com/2/events?client_id=')
      .then(response => (this.info = response.data.events))
  }
})

</script>