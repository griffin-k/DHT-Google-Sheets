function doGet(e) {
    var sheetId = ""; // Replace with your actual sheet ID
    var sheet = SpreadsheetApp.openById(sheetId).getActiveSheet();
  
    var temperature = e.parameter.temperature;
    var humidity = e.parameter.humidity;
    var soilMoisture = e.parameter.soilMoisture;
  
    sheet.getRange("A1").setValue(temperature);
    sheet.getRange("B1").setValue(humidity);
    sheet.getRange("C1").setValue(soilMoisture);
  
    return ContentService.createTextOutput("Data updated successfully");
  }
  