package angello


import grails.rest.*
import grails.converters.*

class StoryTypeController extends RestfulController {
    static responseFormats = ['json', 'xml']
    StoryTypeController() {
        super(StoryType)
    }
}
