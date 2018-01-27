var React         = require('react')
var AccountFields = require('./AccountFields')
var Confirmation  = require('./Confirmation')
var Success       = require('./Success')

var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
};

var Registration = React.createClass({
	getInitialState: function() {
		return {
			step: 1
		}
	},

	render: function() {
		switch (this.state.step) {
			case 1:
				return <AccountFields />
			case 2:
                return <Confirmation />
			case 3:
                return <Success />	
		}
	},
	saveValues: function(fields) {
  		return function() {
    	// Remember, `fieldValues` is set at the top of this file, we are simply appending
    	// to and overriding keys in `fieldValues` with the `fields` with Object.assign
    	// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
    	fieldValues = Object.assign({}, fieldValues, fields)
  	  }()
	},

	nextStep: function() {
  		this.setState({
    		step : this.state.step + 1
      })
	},

	// Same as nextStep, but decrementing
	previousStep: function() {
  	this.setState({
    step : this.state.step - 1
  	})
	},
},
)



module.exports = Registration