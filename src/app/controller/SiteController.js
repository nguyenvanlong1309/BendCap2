const Course = require('../model/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /home
    index(req, res, next) {
        Course.find({})
            // Course.find({}).lean()
            .then((courses) => {
                // = Course.find({}).lean()
                // courses = courses.map(course => course.toObject())
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })

            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
