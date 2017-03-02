const through = require('through2')
const xtpl = require('node-xtemplate')

module.exports = () => through.obj((file, encoding, callback) => {
  xtpl.render(file.path, {}, (err, content) => {
    if (err) return callback(err)
    file.contents = new Buffer(content)
    callback(null, file)
  })
})
