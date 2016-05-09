package angello


import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class StoryType {
    String name

    static constraint = {
        name blank: false
    }
}
