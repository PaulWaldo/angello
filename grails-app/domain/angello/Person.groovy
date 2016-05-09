package angello

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Person {
    String firstName
    String lastName
}

static constraints = {
    firstName blank: false
    lastName blank: false
}