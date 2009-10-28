
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.11.2/lib/jspec.js')
load('lib/js_objects.js')
load('lib/js_obj_creation.js')
load('lib/js_inheritance.js')

JSpec
.exec('spec/spec.js_objects.js')
.exec('spec/spec.js_obj_creation.js')
.exec('spec/spec.js_inheritance.js')
.run({ formatter: JSpec.formatters.Terminal })
.report()
