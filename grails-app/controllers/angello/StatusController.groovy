package angello


import grails.rest.*
import grails.converters.*

class StatusController extends RestfulController {
    static responseFormats = ['json', 'xml']
    StatusController() {
        super(Status)
    }
}
