package angello

import grails.rest.*

@Resource(readOnly = false, formats = ['json', 'xml'])
class Story {
    String title
    String description
    Person assignee
    StoryType type
    Status status
    String criteria
    Person reporter

    static constraints = {
        title blank: false
    }
}