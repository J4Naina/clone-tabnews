function status(request, response) {
  response.status(200).json({ chave: "certinho" });
}

export default status;
