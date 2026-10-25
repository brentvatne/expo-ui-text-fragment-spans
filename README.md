# expo-ui-text-fragment-spans

Minimal repro for `Text` from `@expo/ui/swift-ui` silently dropping some children on iOS
(expo/expo#52219).

`Text` keeps only string and number children and children whose element type is `Text`. Anything
else, such as a React fragment wrapping `Text` spans or an `Image`, is skipped with no warning.

## Run

```sh
npm install
npx expo start
```

Press `i` to open it in Expo Go on an iOS simulator.

## What to look for

| Line | Expected | Actual |
| --- | --- | --- |
| `<Text>{'A'}<><Text>{'-B'}</Text></><Text>{'-C'}</Text></Text>` | `A-B-C` | `A-C` |
| `<Text>{'A-'}<Image systemName="star.fill" /><Text>{'-C'}</Text></Text>` | `A-★-C` | `A--C` |

Neither case logs a warning in Metro. See `screenshot.png`.

Tested with Expo Go 58.0.7 and `@expo/ui` 58.0.23 on the iOS 27.0 simulator.
