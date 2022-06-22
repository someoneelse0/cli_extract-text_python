import PyPDF2

o=open("pdf.pdf","rb")
pf=PyPDF2.PdfFileReader(o)
#n=pf.numPages
print(pf.numPages)
print(pf.isEncrypted)
print(pf.documentInfo.get("/CreationDate"))
print(pf.documentInfo.get("/ModDate"))
print(pf.documentInfo.get("/Creator"))
#for x in range(0,10):
#    p=pf.getPage(x)
#    print(p.extractText())
