module.exports = function handleResponse(res, err, data, messages = {}) {
  /** Erro */
  if (err) {
    res.status(500).json({
      result: false,
      error: err,
      message: messages.error || '',
    });
  }
  /** Sucesso */
  res.json({
    result: true,
    data: data,
    message: messages.success || '',
  });
}
