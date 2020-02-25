

module.exports = function(Model, options) {

const returnArgumentName = options.returnArgumentName ? options.returnArgumentName : 'items'

Model.remoteMethod('findByTitle', {
    http: {
      path: '/findByTitle',
      verb: 'get'
    },
    accepts: {arg: 'title', type: 'string'},
    returns: {arg: returnArgumentName, type: [Model], root: true}
  });

  Model.findByTitle = function(title, cb) {
    var titleFilter = {
      where: {
        title: title
      }
    };
    Model.find(titleFilter, function(err, foundItems) {
      if (err) {
        cb(err);
      }
      else {
        cb(null, foundItems);
      }
    });
  }

}