var React         = require('react')
var AccountFields = require('./AccountFields')
var Confirmation  = require('./Confirmation')
var Success       = require('./Success')

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
		}
},
)

var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

module.exports = Registration