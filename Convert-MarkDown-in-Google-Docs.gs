function onOpen() {
  var ui = DocumentApp.getUi();
  // Créer un nouveau menu et ajouter des éléments
  ui.createMenu('Punchify Me')
      .addItem('Markdown To Headings', 'convertMarkdownToGoogleDocs')
      .addToUi();
}

function convertMarkdownToGoogleDocs() {
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  var text = body.getText();
  var lines = text.split('\n');

  body.clear();

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    if (line.startsWith('# ')) {
      body.appendParagraph(line.substring(2)).setHeading(DocumentApp.ParagraphHeading.HEADING1);
    } else if (line.startsWith('## ')) {
      body.appendParagraph(line.substring(3)).setHeading(DocumentApp.ParagraphHeading.HEADING2);
    } else if (line.startsWith('### ')) {
      body.appendParagraph(line.substring(4)).setHeading(DocumentApp.ParagraphHeading.HEADING3);
    } else if (line.startsWith('#### ')) {
      body.appendParagraph(line.substring(5)).setHeading(DocumentApp.ParagraphHeading.HEADING4);
    } else {
      body.appendParagraph(line);
    }
  }
}
