<template>
  <div>
  <div class="container">
      <h2>Vehicle Profile</h2>

      <label for="year">
        Vehicle year
      </label>
      <select name="year-select" 
        id="year-select" 
        class="form-control">
        <option value="" 
          v-for="year in years">
            {{year}}
        </option>
      </select>
      <br>

      <label for="miles">
        Vehicle mileage
      </label>
      <br>
      <input id="miles" 
        class="form-control" 
        maxlength="20" name="miles" 
        placeholder="Enter miles (ex. 19321)" 
        size="20" type="text">
      <br>

      <label for="make">
        Vehicle make
      </label>
      <br>
      <input id="make" 
        class="form-control" 
        name="make"
        type="text"   
        placeholder="Enter make (ex. Acura)"  
        maxlength="20" size="20">
      <br>

      <label for="model">
        Vehicle model
      </label>
      <br>
      <input id="model" 
        class="form-control" 
        name="model"
        type="text"   
        placeholder="Enter model (ex. Accord)"  
        maxlength="20" size="20">
      <br>

      <label for="engineSize">
        Engine Size
      </label>
      <select name="engineSize-select" 
        id="engineSize-select" 
        class="form-control">
        <option value="" 
          v-for="engineSize in engineSizes">
            {{engineSize}}
        </option>
      </select>
      <br>

      <label for="trim">
        Vehicle trim
      </label>
      <br>
      <input id="trim" 
        class="form-control" 
        name="trim"
        type="text"   
        placeholder="Enter trim (ex. LX)"  
        maxlength="20" size="20">
      <br>

      <button class="btn btn-danger" 
        @click="clearData">
          Clear
      </button>

      <button class="btn btn-primary" 
        @click="saveData">
          Save
      </button>
      <button class="btn btn-success" 
        @click="submitData">
          Save & Continue
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VehicleComponent',
  data () {
    return {
      msg: 'Welcome to the Vehicle Component',
      years: [
        'Choose a year', 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010, 2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990, 1989, 1988, 1987, 1986, 1985, 1984, 1983, 1982, 1981, 1980, 1979, 1978, 1977, 1976, 1975, 1974, 1973, 1972, 1971, 1970, 1969, 1968, 1967, 1966, 1965, 1964, 1963, 1962, 1961, 1960, 1959, 1958, 1957, 1956, 1955, 1954, 1953, 1952, 1951, 1950, 1949, 1948, 1947, 1946, 1945, 1944, 1943, 1942, 1941, 1940, 1939, 1938, 1937, 1936, 1935, 1934, 1933, 1932, 1931, 1930, 1929, 1928, 1927, 1926, 1925, 1924, 1923, 1922, 1921, 1920
      ],
      engineSizes: [
        'Choose a engine size', '4-cylinder', 'V6', 'V8', 'V10', 'V12', 'W12', 'V16', 'W16', 'W18'
      ]
    }
  },
  methods: {
    clearData: function () {
      alert('Clearing information')
    },
    saveData: function () {
      alert('Saving information')
    },
    submitData: function () {
      alert('Submitting information')
    }
  }
}
</script>

<!-- 
Add "scoped" attribute to limit CSS to this component only -->

