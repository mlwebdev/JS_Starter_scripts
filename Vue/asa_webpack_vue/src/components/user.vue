<template>
	<div class="container">
		<h2>User Profile</h2>
		<button class="btn btn-danger" 
        @click="u_clearData">
          Clear
      </button>

      <button class="btn btn-primary" 
        @click="u_saveData">
          Save
      </button>
      <button class="btn btn-success" 
        @click="u_submitData">
          Save & Continue
      </button>
	</div>
</template>

<script>
export default {
	name: 'UserComponent',
	data () {
	  return {
	  }
	},
  methods: {
    u_clearData: function () {
      alert('Clearing information')
    },
    u_saveData: function () {
      alert('Saving information')
    },
    u_submitData: function () {
      alert('Submitting information')
    }
  }
}
</script>