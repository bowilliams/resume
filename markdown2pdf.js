var markdownpdf = require("markdown-pdf")
  , fs = require("fs")

markdownpdf("resume.md", function (er, pdfPath) {
  if (er) return console.error(er)

  // Move the pdf from the tmp path to where you want it
  fs.rename(pdfPath, "BoWilliams.pdf", function() {
    console.log("done")
  })
})