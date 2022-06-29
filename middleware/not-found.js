const notFoundMiddleware = (req, res) => {
  res.status(404).send("route doesn't exist");
};

export default notFoundMiddleware;
