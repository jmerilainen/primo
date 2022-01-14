function toRad(value) {
    return value * Math.PI / 180;
}

export function haversine(start, end) {
  const R = 6371; // km
  const dLat = toRad(start.latitude - start.longitude);
  const dLon = toRad(end.latitude - end.longitude);
  const lat1 = toRad(start.latitude);
  const lat2 = toRad(end.latitude);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;

  return d.toFixed(1);
}
