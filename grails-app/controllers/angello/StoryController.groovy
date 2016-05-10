package angello


import grails.rest.*
import grails.converters.*

class StoryController extends RestfulController {
    static responseFormats = ['json', 'xml']
    StoryController() {
        super(Story)
    }
}
