import test from "node:test";
import assert from "node:assert";
import near from ".";

test("finds nearest point from README example", () => {
  const target = { latitude: 41.4118, longitude: -75.6652 }; // Scranton
  const points = [
    { latitude: 40.7128, longitude: -74.006 }, // New York
    { latitude: 34.0522, longitude: -118.2437 }, // Los Angeles
  ];

  const result = near(target, points);
  assert.deepStrictEqual(result, { latitude: 40.7128, longitude: -74.006 });
});

test("returns single point for single-element array", () => {
  const target = { latitude: 41.4118, longitude: -75.6652 };
  const points = [{ latitude: 40.7128, longitude: -74.006 }];
  const result = near(target, points);
  assert.deepStrictEqual(result, { latitude: 40.7128, longitude: -74.006 });
});

test("returns exact match when target is in array", () => {
  const target = { latitude: 41.4118, longitude: -75.6652 };
  const points = [
    { latitude: 40.7128, longitude: -74.006 },
    { latitude: 41.4118, longitude: -75.6652 }, // exact match
    { latitude: 34.0522, longitude: -118.2437 },
  ];
  const result = near(target, points);
  assert.deepStrictEqual(result, { latitude: 41.4118, longitude: -75.6652 });
});
