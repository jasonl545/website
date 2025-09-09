function showContent(tab) {
  let content = document.getElementById("content");

  if (tab === "home") {
    content.innerHTML = `
      <h1>Welcome to the Trig Resource Hub!</h1>
      <p>Your guide to not failing Trig this year *I hope*.</p>
      
      <p>For recordings, summaries, transcripts, please head over to the tabs on the top right corner.</p>
      📅 TMAH Pacing Calendar Sem 1 2025-2026</h2>
      <embed src="pdfs/TMAH Pacing Calendar Sem 1 2025-2026.pdf" 
             type="application/pdf" 
             width="90%" 
             height="600px" 
             style="border:1px solid #ccc; border-radius:10px; margin-top:20px;">
    `;
  } else if (tab === "recordings") {
    content.innerHTML = `
      <h1>Recordings</h1>
      <p>Here you will find all the lecture recordings organized by date.</p>
    `;
  } else if (tab === "summaries") {
  content.innerHTML = `
    <h1>Summaries</h1>
    <p class="summary-description">Here are the topic summaries with their corresponding PDFs:</p>
    <table class="summary-table">
      <tr>
        <th>Topic</th>
        <th>Summary PDF</th>
      </tr>
      <tr>
        <td>THU 2025-08-28: CHAPTER 6.1 ANGLES AND THEIR MEASURES</td>
        <td>
          <details>
            <summary style="cursor:pointer; font-weight:bold; color:#333;">
              View PDF
            </summary>
            <embed src="pdfs/0828TRIGSUMMARY.pdf" width="400" height="300" type="application/pdf">
          </details>
        </td>
      </tr>
    
        <tr>
        <td>TUE 2025-09-02: CHAPTER 6.2 TRIGNOMETRIC FUNCTIONS: UNIT CIRCLE APPROACH</td>
        <td>
            <details>
                <summary style="cursor:pointer; font-weight:bold; color:#333;">
                    View PDF
                </summary>
                <embed src="pdfs/0902TRIGSUMMARy.pdf" width="400" height="300" type="application/pdf">
            </details>
            </td>
        </tr>

        <tr>
        <td>THU 2025-09-04: CHAPTER 6.3 PROPERTIES OF THE TRIGONOMETRIC FUNCTIONS</td>
        <td>
            <details>
                <summary style="cursor:pointer; font-weight:bold; color:#333;">
                    NONE
                </summary>

            </details>
            </td>
        </tr>

        <tr>
        <td>MON 2025-09-08: CHAPTER 6.4 GRAPHS OF THE SINE AND COSINE FUNCTIONS</td>
        <td>
            <details>
                <summary style="cursor:pointer; font-weight:bold; color:#333;">
                    NONE
                </summary>
            </details>
            </td>
        </tr>

    









    </table>
  `;
}



    else if (tab === "transcripts") {
    content.innerHTML = `
      <h1>Transcripts</h1>
      <p>Full transcripts of class discussions and lectures will appear here.</p>
    `;
  }
}

window.onload = function() {
    showContent('home');
};
