//= wrapped

angular
    .module("angello")
    .controller("StoryController", StoryController);

function StoryController() {
    var vm = this;
    vm.stories = [];
    vm.newStory = new Story();

    vm.save = function() {
        vm.newStory.$save({}, function() {
            vm.stories.push(angular.copy(vm.newStory));
            vm.newStory = new Story();
        });
    }

    vm.delete = function(story) {
        story.$delete({}, function() {
            var idx = vm.stories.indexOf(story);
            vm.stories.splice(idx, 1);
        });
    }

    vm.update = function(story) {
        story.$update();
    }
}
