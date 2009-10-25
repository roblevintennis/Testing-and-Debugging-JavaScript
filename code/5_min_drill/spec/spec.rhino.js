
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.11.2/lib/jspec.js')
load('lib/test_js_itself.js')

JSpec
.exec('spec/spec.test_js_itself.js')
.run({ formatter: JSpec.formatters.Terminal })
.report()
