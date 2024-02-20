//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/country-answer', function(request, response) {

    var country = request.session.data['country']
    if (country == "England"){
        response.redirect("/before-you-continue")
    } else {
        response.redirect("/not-eligible")
    }
})

router.post('/issues-before-answer', function(request, response) {

    var issued = request.session.data['issued']
    if (issued == "Yes"){
        response.redirect("/non-eligible")
    } else {
        response.redirect("/current-address")
    }
})