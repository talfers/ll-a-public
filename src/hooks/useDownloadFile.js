import jsPDF from 'jspdf';

export const useDownloadFile = () => {

  const downloadFile = async (fileType, elementId, fileName) => {
    const div = document.getElementById(elementId);
    let content = div.innerText
    if (fileType === 'pdf') {
        try {
            const pdf = new jsPDF("p","in","a4");
            pdf.setLineWidth(1/72)
            let textLines = pdf.setFontSize(12)
            .splitTextToSize(content, 7.25)
            let chunks = []
            const chunkSize = 56;
            for (let i = 0; i < textLines.length; i += chunkSize) {
                const chunk = textLines.slice(i, i + chunkSize);
                chunks.push(chunk)
            }
            chunks.forEach((c, i) => {
                if(i !== 0) {
                    pdf.addPage();
                }
                let verticalOffset = 0.5;
                pdf.text(0.5, verticalOffset + 12 / 72, c)
                verticalOffset += (c.length + 0.5) * 12 / 72;
            })
            pdf.save(`${fileName}.${fileType}`);
            // console.log({success: "success"})
        } catch (err) {
            alert(err.message)
            console.log(err.message);
        }
    } else if (fileType === 'docx') {
        try {
            var blob = new Blob([content], {"Content-type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document" });
            const downloadUrl = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = downloadUrl
            a.download = `${fileName}.${fileType}`
            a.click()
            a.remove()
            
        } catch (err) {
            alert(err.message)
            console.log(err.message);
        }
    } else {
        console.log({error: 'fileType not found'})
    }
    
    
  };
  return [downloadFile];
};