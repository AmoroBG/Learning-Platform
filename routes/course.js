// REQUIRE PACKAGES - EXTERNAL
const express = require("express");
const router = express.Router();
// REQUIRE MODULES - INTERNAL
const course = require("../controllers/course");

router.post("/create", course.createCourse);
router.get("/", course.getCourses)
router.delete("/", course.deleteCourses)
router.get("/:courseId", course.getCourse)
router.delete("/:courseId", course.deleteCourse)
router.put("/:courseId", course.updateCourseRecords)
router.patch("/:courseId", course.updateSomeCourseRecords)


module.exports = router;
