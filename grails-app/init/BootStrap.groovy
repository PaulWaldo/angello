import angello.Person
import angello.Status
import angello.StoryType

class BootStrap {

    def init = { servletContext ->
        new Person(firstName: 'Fred', lastName: 'Smith').save(failOnError: true)

        new Status(name: 'To Do').save(failOnError: true)
        new Status(name: 'In Progress').save(failOnError: true)
        new Status(name: 'Code Review').save(failOnError: true)
        new Status(name: 'QA Review').save(failOnError: true)
        new Status(name: 'Verified').save(failOnError: true)

        new StoryType(name: 'Feature').save(failOnError: true)
        new StoryType(name: 'Enhancement').save(failOnError: true)
        new StoryType(name: 'Bug').save(failOnError: true)
        new StoryType(name: 'Spike').save(failOnError: true)
    }
    def destroy = {
    }
}
