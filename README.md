# find-nearest-point

Finds the nearest point in a list of latitude/longitude coordinates to a given point.

## Installation

```sh
npm install find-nearest-point
```

## Usage

```ts
import near from 'find-nearest-point';

// find nearest point from Scranton
near({ latitude: 41.4118, longitude: -75.6652 }, [
  { latitude: 40.7128, longitude: -74.006 }, // New York
  { latitude: 34.0522, longitude: -118.2437 }, // Los Angeles
]);
// => { latitude: 40.7128, longitude: -74.006 }
```
