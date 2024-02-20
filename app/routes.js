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
        response.redirect("/index")
    } else {
        response.redirect("/not-eligible")
    }
})

router.post('/issued-answer', function(request, response) {

    var issued = request.session.data['issued']
    if (issued == "Yes"){
        response.redirect("/not-eligible")
    } else {
        response.redirect("/current-address")
    }
})

router.post('/address-answer', function(request, response) {

    var address = request.session.data['address']
    if (address == "England"){
        response.redirect("/before-you-continue")
    } else {
        response.redirect("/cannot-apply")
    }
})

router.post('/intend-answer', function(request, response) {

    var intend = request.session.data['intend']
    if (intend == "Yes"){
        response.redirect("/before-you-continue")
    } else {
        response.redirect("/cannot-apply")
    }
})