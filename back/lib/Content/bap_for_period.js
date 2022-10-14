const path = require ('path')

module.exports = {

////////////////////////////////////////////////////////////////////////////////

get_xsd_path_of_bap_for_period:

    function () {

		return path.join (__dirname, '..', 'Static/bap-for-period-1.0.1.xsd')

    },

////////////////////////////////////////////////////////////////////////////////

get_request_of_bap_for_period:

    function () {

		return this.rq.data
    	
    },

////////////////////////////////////////////////////////////////////////////////

get_response_of_bap_for_period:

    function () {

//    	const {rq: {data}} = this
    
    	return {
  "BapForPeriodResponse": {
    "FamilyName": "Петина",
    "FirstName": "Елена",
    "Patronymic": "Владимировна",
    "Snils": "02773319862",
    "BirthDate": "1966-09-12",
    "Gender": "Female",
    "ActualDate": "2015-12-31",
    "ExistData": "true",
    "BeginPeriod": "2014-01-01",
    "NumberOfMonths": "3",
    "MonthlyPayments": {
      "MonthlyPayment": [
        {
          "Year": "2014",
          "Month": "--01",
          "TotalPaymentsSum": "100.00",
          "NumberOfPayments": "1",
          "Payments": {
            "Payment": {
              "Type": "1",
              "Base": "Тест1",
              "Sum": "100.00"
            }
          }
        },
        {
          "Year": "2014",
          "Month": "--02",
          "TotalPaymentsSum": "100.00",
          "NumberOfPayments": "1",
          "Payments": {
            "Payment": {
              "Type": "1",
              "Base": "Тест1",
              "Sum": "100.00"
            }
          }
        },
        {
          "Year": "2014",
          "Month": "--03",
          "TotalPaymentsSum": "100.00",
          "NumberOfPayments": "1",
          "Payments": {
            "Payment": {
              "Type": "1",
              "Base": "Тест1",
              "Sum": "100.00"
            }
          }
        }
      ]
    }
  }
}

    },
        
}