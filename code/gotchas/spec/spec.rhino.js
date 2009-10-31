
load('/Library/Ruby/Gems/1.8/gems/visionmedia-jspec-2.11.2/lib/jspec.js')
load('lib/gotchas.js')

JSpec
.exec('spec/spec.gotchas.js')
.run({ formatter: JSpec.formatters.Terminal })
.report()
