package angello


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Status {
    String name

    static constraints = {
        name blank: false
    }
}
