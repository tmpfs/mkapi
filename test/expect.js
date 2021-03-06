// rebuild the expectations, used when formatting 
// styles have changed
var parse = require('../index')
  , fs = require('fs')
  , expectations =       
    [
      {
        files: ['test/fixtures/module.js'],
        output: 'test/fixtures/expect/module.md'
      },
      {
        files: ['test/fixtures/module-description.js'],
        output: 'test/fixtures/expect/module-description.md'
      },
      {
        files: ['test/fixtures/event.js'],
        output: 'test/fixtures/expect/event.md'
      },
      {
        files: ['test/fixtures/throws.js'],
        output: 'test/fixtures/expect/throws.md'
      },
      {
        files: ['test/fixtures/no-description.js'],
        output: 'test/fixtures/expect/no-description.md'
      },
      {
        files: ['test/fixtures/static-shorthand.js'],
        output: 'test/fixtures/expect/static-shorthand.md'
      },
      {
        files: ['test/fixtures/private-property-shorthand.js'],
        output: 'test/fixtures/expect/private-property-shorthand.md',
        opts: {
          conf: {
            include: {
              private: true
            }
          }
        }
      },
      {
        files: ['test/fixtures/private-function-shorthand.js'],
        output: 'test/fixtures/expect/private-function-shorthand.md',
        opts: {
          conf: {
            include: {
              private: true
            }
          }
        }
      },
      {
        files: ['test/fixtures/protected-property-shorthand.js'],
        output: 'test/fixtures/expect/protected-property-shorthand.md'
      },
      {
        files: ['test/fixtures/protected-function-shorthand.js'],
        output: 'test/fixtures/expect/protected-function-shorthand.md'
      },
      {
        files: ['test/fixtures/public-property-shorthand.js'],
        output: 'test/fixtures/expect/public-property-shorthand.md'
      },
      {
        files: ['test/fixtures/public-function-shorthand.js'],
        output: 'test/fixtures/expect/public-function-shorthand.md'
      },
      {
        files: ['test/fixtures/readonly-property-shorthand.js'],
        output: 'test/fixtures/expect/readonly-property-shorthand.md'
      },
      {
        files: ['test/fixtures/readonly-function-shorthand.js'],
        output: 'test/fixtures/expect/readonly-function-shorthand.md'
      },
      {
        files: ['test/fixtures/static-property.js'],
        output: 'test/fixtures/expect/static-property.md'
      },
      {
        files: ['test/fixtures/property.js'],
        output: 'test/fixtures/expect/property.md'
      },
      {
        files: ['test/fixtures/property-default.js'],
        output: 'test/fixtures/expect/property-default.md'
      },
      {
        files: ['test/fixtures/property-constant.js'],
        output: 'test/fixtures/expect/property-constant.md'
      },
      {
        files: ['test/fixtures/property-no-description.js'],
        output: 'test/fixtures/expect/property-no-description.md'
      },
      {
        files: ['test/fixtures/class.js'],
        output: 'test/fixtures/expect/class.md'
      },
      {
        files: ['test/fixtures/class-inherits.js'],
        output: 'test/fixtures/expect/class-inherits.md'
      },
      {
        files: ['test/fixtures/constructor-inherits.js'],
        output: 'test/fixtures/expect/constructor-inherits.md'
      },
      {
        files: ['test/fixtures/constructor.js'],
        output: 'test/fixtures/expect/constructor.md'
      },
      {
        files: ['test/fixtures/member-name.js'],
        output: 'test/fixtures/expect/member-name.md'
      },
      {
        files: ['test/fixtures/member-current-class.js'],
        output: 'test/fixtures/expect/member-current-class.md'
      },
      {
        files: ['test/fixtures/member-current-constructor.js'],
        output: 'test/fixtures/expect/member-current-constructor.md'
      },
      {
        files: ['test/fixtures/meta.js'],
        output: 'test/fixtures/expect/meta.md'
      },
      {
        files: ['test/fixtures/deprecated.js'],
        output: 'test/fixtures/expect/deprecated.md'
      },
      {
        files: ['test/fixtures/static-function.js'],
        output: 'test/fixtures/expect/static-function.md'
      },
      {
        files: ['test/fixtures/todo.js'],
        output: 'test/fixtures/expect/todo.md'
      },
      {
        files: ['test/fixtures/see.js'],
        output: 'test/fixtures/expect/see.md'
      },
      {
        files: ['test/fixtures/name.js'],
        output: 'test/fixtures/expect/name.md'
      },
      {
        files: ['test/fixtures/name-override.js'],
        output: 'test/fixtures/expect/name-override.md'
      },
      {
        files: ['test/fixtures/name-type.js'],
        output: 'test/fixtures/expect/name-type.md'
      },
      {
        files: ['test/fixtures/returns.js'],
        output: 'test/fixtures/expect/returns.md'
      },
      {
        files: ['test/fixtures/usage.js'],
        output: 'test/fixtures/expect/usage-ast.json',
        opts: {
          ast: true
        }
      },
      {
        files: ['test/fixtures/usage.js'],
        output: 'test/fixtures/expect/usage-ast-compact.json',
        opts: {
          ast: true,
          indent: 0
        }
      },
      {
        files: ['test/fixtures/description.js'],
        output: 'test/fixtures/expect/description.md'
      },
      {
        files: ['test/fixtures/usage.js'],
        output: 'test/fixtures/expect/usage.md'
      },
      {
        files: ['test/fixtures/usage.js'],
        output: 'test/fixtures/expect/usage-no-lang.md',
        opts: {
          lang: false
        }
      },
      {
        files: ['test/fixtures/params.js'],
        output: 'test/fixtures/expect/params.md'
      },
      {
        files: ['test/fixtures/param-types.js'],
        output: 'test/fixtures/expect/param-types.md'
      },
      {
        files: ['test/fixtures/options.js'],
        output: 'test/fixtures/expect/options.md'
      },
      {
        files: ['test/fixtures/options.js'],
        output: 'test/fixtures/expect/options.md'
      },
      {
        files: ['test/fixtures/optional.js'],
        output: 'test/fixtures/expect/optional.md'
      },
      {
        files: ['test/fixtures/function.js'],
        output: 'test/fixtures/expect/function.md'
      },
      {
        files: ['test/fixtures/property.js', 'test/fixtures/function.js'],
        output: 'test/fixtures/expect/multiple.md'
      },
      {
        files: ['test/fixtures/usage.js'],
        output: 'test/fixtures/expect/usage-heading.md',
        opts: {
          title: 'API'
        }
      }
    ];

/**
 *  Iterate the expectation configuration and write results to disc.
 *
 *  @function expected
 */
function expected() {
  var info = expectations.shift();
  if(!info) {
    return; 
  }
  info.opts = info.opts || {};
  info.opts.output = fs.createWriteStream(info.output);
  //console.log(info.files)
  parse(info.files, info.opts, function(err) {
    if(err) {
      console.error(err.stack); 
      process.exit(1);
    }
    var contents = '' + fs.readFileSync(info.output);
    if(!contents) {
      console.error('wrote empty file: ' + info.output); 
      process.exit(1);
    }
    expected();
  })
}

expected();
