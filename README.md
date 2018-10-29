# a-govuk-plugin-example

After following the instructions at https://github.com/yagni-digital/govuk-plugin-example this plugin will override some of those behaviours.

## Usage

1. Inside the prototype you've already been playing with `npm install --save https://github.com/yagni-digital/a-govuk-plugin-example.git`

At this stage everything's installed but because of the conflict with `z-govuk-plugin-example` and the default alphabetic sorting the `a-govuk...` variant is being overridden by the `govuk...` variant.  Now we'll update the config to specify that the order should be updated.

2. Open up the file `app/config.js` (it's found in the prototype directory you installed the two plugins into)
3. Update the `foundationExtensions:` array to:
```
  foundationExtensions: ["govuk-frontend", "govuk-plugin-example"]
```

Now `govuk-plugin-example` is included earlier than `a-govuk-plugin-example` and can be overridden.

The order of the plugins is:

1. All plugins mentioned in `foundationExtensions` in the order they're specified.
2. All other plugins in alphabetical order

## When should I specify the order?

Probably never, hopefully never.  The prototype kit provided has `govuk-frontend` defined because that's core to the protoype kit, if all other plugins are written in ways that don't conflict then the order isn't important.
