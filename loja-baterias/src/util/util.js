function setRangeHeader(req, res, list) {
  const total = list.length;
  const range = req.headers.range;
  const [partialstart, partialend] = range.replace(/bytes=/, "").split("-");

  const start = parseInt(partialstart, 10);
  const end = partialend ? parseInt(partialend, 10) : total;
  res.setHeader("Content-Range", `resources ${start}-${end}/${total}`);

  return res;
}

module.exports = setRangeHeader;
