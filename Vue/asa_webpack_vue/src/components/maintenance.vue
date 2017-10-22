<template>	
	<div class="container">
		<h2>Maintenance Services</h2>
		<label for="">Services</label>
		<br>
		<select name="" id="" class="form-control">
			<option value="" v-for="service in services">{{service}}</option>
		</select>
		<br>
		<button class="btn btn-danger" 
        @click="m_clearData">
          Clear
      </button>

      <button class="btn btn-primary" 
        @click="m_saveData">
          Save
      </button>
      <button class="btn btn-success" 
        @click="m_submitData">
          Save & Continue
      </button>
	</div>
</template>

<script>
	export default {
		name: 'MaintenanceComponent',
		data () {
		  return {
		  	services: [
					'--Select Service--',
					'Oil change', 'Tune up', 'Air filter change', 'Fuel filter change', 
					'Transmission flush', 'Radiator flush', 'Tire rotation'
				]
		  }
		},
	  methods: {
	    m_clearData: function () {
	      alert('Clearing information')
	    },
	    m_saveData: function () {
	      alert('Saving information')
	    },
	    m_submitData: function () {
	      alert('Submitting information')
	    }
	  }
	}
</script>