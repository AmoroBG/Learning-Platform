// REQUIRE MODULES - INTERNAL
const Task = require("../models/course");

//Create Course  - /course/create - POST
exports.createCourse = function (req, res) {
            const userId = getUserIdFromToken(req)
            // create task
            const course = new Course({
              name: req.body.name,
              description: req.body.description,
              creator: req.userId
            });
            course
              .save()
              .then(function () {
               
                res.status(200).json({
                  message: "Course Created successfully",
                });
              })
              .catch(function (err) {
                console.log(err)
                res.status(500).json({
                  error: err,
                });
              });
          }
      
   

//Get all Course - GET - "/courses"
exports.getCourses=function(req, res){
  Course.find().then(function(foundCourses){
    res.status(200).json({
      foundCourses
    })
  }).catch(function(err){
    res.status(500).json({
      Error:err
    })
  })
}
// Get one Course - GET - "/Course/:courseId"
exports.getCourse=function(req, res){
  Course.findById(req.params.courseId).then(function(foundCourse){
  res.status(200).json(foundCourse)
}).catch(function(err){
  res.status(500).json({
    Error:err
  })
})
}
// Delete all Courses - DELETE - "/courses"
exports.deleteCourses = function (req, res) {
  Course.remove()
    .then(function () {
      res.status(200).json({
        message: "All courses successfuly deleted",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
// Delete one Course - DELETE - "/course/:courseId"
exports.deleteCourse = function (req, res) {
  Task.findByIdAndRemove(req.params.courseId)
    .then(function () {
      res.status(200).json({
        message: "Course deleted",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
// Update all records a Course - PUT - "/course"
exports.updateCourseRecords = function (req, res) {
  Course.findOneAndUpdate(
    { _id: req.params.courseId },
    {
        name: req.body.name,
        desciption: req.body.desciption,
    },
    { new: true }
  )
    .then(function () {
      res.status(201).json({
        message: "Course records updated",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
// Update a specific record of a Course - PATCH - "/course/:courseId"
exports.updateSomeCourseRecords = function (req, res) {
  Course.findOneAndUpdate({ _id: req.params.courseId }, { $set: req.body })
    .then(function () {
      res.status(201).json({
        message: "Some Course records updated",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
};
