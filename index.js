const ENGINE = {
  config: {
    paths: {
      doc: 'Paths required by Pug.js',
      format: Object,
      default: {}
    }
  },
  extensions: ['.pug'],
  handle: 'pug'
}

module.exports = () => {
  const debug = require('debug')('web:templates:pug')
  const path = require('path')
  const pug = require('pug')
  const requireDir = require('require-dir')

  const EnginePug = function (options) {
    debug('Starting Pug.js engine...')

    this.config = options.config
    this.helpers = options.helpers
    this.pagesPath = options.pagesPath
    this.templates = {}
  }

  /**
    * Returns the engine core module.
    *
    * @return {function} The engine core module.
    */
  EnginePug.prototype.getCore = function () {
    return pug
  }

  /**
    * Returns information about the engine.
    *
    * @return {object} An object containing the engine name and version.
    */
  EnginePug.prototype.getInfo = function () {
    return {
      engine: ENGINE.handle,
      version: undefined
    }
  }

  /**
    * Initialises the engine.
    *
    * @return {Promise} A Promise that resolves when the engine is fully loaded.
    */
  EnginePug.prototype.initialise = function () {
    debug('Pug initialised')

    const engineConfig = this.config.get('engines')

    if (engineConfig &&
      engineConfig.pug &&
      engineConfig.pug.paths && engineConfig.pug.paths.helpers
    ) {
      const helperPath = path.join(process.cwd(), engineConfig.pug.paths.helpers)
      this.helperFunctions = requireDir(helperPath, { recurse: true, camelcase: true })
    }
  }

  /**
    * Registers the template with markup.
    *
    * @return {Promise} A Promise that resolves with the loaded data.
    */
  EnginePug.prototype.register = function (name, data, path) {
    this.templates[name] = pug.compile(data, {
      basedir: this.pagesPath,
      filename: path
    })
  }

  /**
    * Renders a template.
    *
    * @param {string} name The name of the template.
    * @param {string} data The template content.
    * @param {object} locals The variables to add to the context.
    * @param {object} options Additional render options.
    *
    * @return {Promise} A Promise that resolves with the render result.
    */
  EnginePug.prototype.render = function (name, data, locals, options) {
    if (this.helperFunctions) {
      Object.assign(locals, this.helperFunctions)
    }

    return Promise.resolve(this.templates[name](locals))
  }

  return EnginePug
}

module.exports.metadata = ENGINE
