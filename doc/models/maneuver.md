
# Maneuver

Contains the action to take for the current step (turn left, merge, straight, etc.). Values are subject to change, and new values may be introduced without prior notice.

## Enumeration

`Maneuver`

## Fields

| Name |
|  --- |
| `Turnslightleft` |
| `Turnsharpleft` |
| `Turnleft` |
| `Turnslightright` |
| `Turnsharpright` |
| `Keepright` |
| `Keepleft` |
| `Uturnleft` |
| `Uturnright` |
| `Turnright` |
| `Straight` |
| `Rampleft` |
| `Rampright` |
| `Merge` |
| `Forkleft` |
| `Forkright` |
| `Ferry` |
| `Ferrytrain` |
| `Roundaboutleft` |
| `Roundaboutright` |

## Example

```ts
import { Maneuver } from 'googlemapsplatform';

const maneuver = Maneuver.Uturnright;
```

