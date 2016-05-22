import angello.Person
import angello.Role
import angello.Status
import angello.Story
import angello.StoryType
import angello.User

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

        if (Role.list().size() == 0) {
            new Role(authority: "ROLE_ANONYMOUS").save(failOnError: true);
            new Role(authority: "ROLE_ADMIN").save(failOnError: true);
            new Role(authority: "ROLE_USER").save(failOnError: true);
        }
        if (User.list().size() == 0) {
            new User(username: 'user', password: 'pass').save(failOnError: true)
        }
    }
    def destroy = {
    }
}
