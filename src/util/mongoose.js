module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongooose) => mongooose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
