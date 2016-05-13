import angello.Person
import angello.Status
import angello.Story
import angello.StoryType

class BootStrap {

    def init = { servletContext ->
        def p1 = new Person(firstName: 'Fred', lastName: 'Smith').save(failOnError: true)
        def p2 = new Person(firstName: 'Sally', lastName: 'Joe').save(failOnError: true)

        def todo = new Status(name: 'To Do').save(failOnError: true)
        def inProgress = new Status(name: 'In Progress').save(failOnError: true)
        def codeReview = new Status(name: 'Code Review').save(failOnError: true)
        def qaReview = new Status(name: 'QA Review').save(failOnError: true)
        def verified = new Status(name: 'Verified').save(failOnError: true)

        def feature = new StoryType(name: 'Feature').save(failOnError: true)
        new StoryType(name: 'Enhancement').save(failOnError: true)
        new StoryType(name: 'Bug').save(failOnError: true)
        new StoryType(name: 'Spike').save(failOnError: true)

        new Story(
            title: 'My first story',
            description: 'The first one',
            assignee: p1,
            type: feature,
            status:todo,
            criteria: 'It just works',
            reporter: p2).save(failOnError: true)
    }
    def destroy = {
    }
}
