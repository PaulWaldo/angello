package angello

class UrlMappings {

    static mappings = {
        "/"(view: '/index')
        "/api/persons"(resources: 'person')
        "/api/statuses"(resources: 'status')
        "/api/stories"(resources: 'story')
        "/api/storytypes"(resources: 'storyType')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
