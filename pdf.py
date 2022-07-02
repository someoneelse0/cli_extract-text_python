import PyPDF2

o=open("pdf.pdf","rb")
pf=PyPDF2.PdfFileReader(o)
n=pf.numPages
for x in range(0,n):
    p=pf.getPage(x)
    print(p.extractText())
