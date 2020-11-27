export const addPlane = ({
  model,
  producer,
  price,
  passengers,
  speed,
  range,
} = {}) => ({
  type: "ADD_PLANE",
  plane: {
    model,
    producer,
    price,
    passengers,
    speed,
    range,
  },
});
