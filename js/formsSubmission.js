// FAQ Question submit form

$(function() {
    $('#FAQ_Submit_btn').click(function() {
      var formData = {
        Question: $("#FAQ_Question").val(),
        UserEmail:$("#email_input").val(),
        Project: sessionStorage.getItem('ProjectName'),
      };
      $.ajax({
        contentType:'application/json',
        type:"POST",
          url:"https://prod-07.uksouth.logic.azure.com:443/workflows/b8024d387e4a42f9ab253fdbbbac88cb/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5mAH0-RnaIC7K9REiCS9OF36NatbGqlGsWnAYNbGSGI",
          data: JSON.stringify(formData),
          success: function(data){
            $("postResult").val("Success")
            off();
            document.getElementById("faqform").reset()
          },
          error: function(){
            $("postResult").val("Failed")
            alert("Failed to submit FAQ form")
          }
    });
  })
  });

// Lessons Learnt submit form

  $(function(){
    $('#LessonsLearnt_Submit_btn').click(function() {
      var formData = {
        LessonLearntTitle: $("#LessonLearntTitle").val(),
        EventType: $("#EventType").val(),
        ActualConsequence: $("#ActualConsequence").val(),
        PotentialConsequence: $("#PotentialConsequence").val(),
        IncidentDescription: $("#IncidentDescription").val(),
        IncidentAnalysis: $("#IncidentAnalysis").val(),
        ImmediateCause: $("#ImmediateCause").val(),
        UnderlyingCause: $("#UnderlyingCause").val(),
        RootCause: $("#RootCause").val(),
        Approver: sessionStorage.getItem('PM_Email'),
        Project: sessionStorage.getItem('ProjectName'),
      };
      $.ajax({
        contentType:'application/json',
        type:"POST",
          url:"https://prod-27.uksouth.logic.azure.com:443/workflows/c099d88312c74741b000dc17f2ff53d6/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=1WgONoFRmmu5Bqevg_3i-K1rQs3anrRb84TQBXREnWU",
          data: JSON.stringify(formData),
          success: function(data){
            $("postResult").val("Success")
            off();
            document.getElementById("llform").reset()
          },
          error: function(data){
            $("postResult").val("Failed")
            console.log(data)
            alert("Failed to submit lessons learnt form")
          }
    });
  })
  });

  // Site Alerts Form

  $(function(){
    $('#alert_submit_button').click(function() {
      var formData = {
        projectID: projectID,
        alert_subject: $("#alertSubject").val(),
        main_message: $("#alertBody").val(),
        location: $("#alertLocation").val(),
      };
      $.ajax({
        contentType:'application/json',
        type:"POST",
          url:"https://prod-19.uksouth.logic.azure.com:443/workflows/d8a3681ca36b4aa6bb5ebc54bd7752f5/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=7AhhQLNeqvq88waTXSoJntPLC5-ZXIWj9ieX0TxpY0I",
          data: JSON.stringify(formData),
          success: function(data){
            $("postResult").val("Success")
            alert("Alert Sent")
          },
          error: function(){
            $("postResult").val("Failed")
            alert("Failed to submit alert")
          }
    });
  })
  });