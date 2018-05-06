using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;
using Journey.Models;
using Journey.API;

namespace Journey.Pdf
{
    public class pdf
    {
        private static IEnumerable<object> vehicleguide;

        public static string GetcarTripsPdfUrl(PdfModel pdfModel)
        {
            var carguidesController = new CarguidesController();
            var vehicleController = new VehiclesController();
            var carTrips = carguidesController.GetCarguidesByVehicleId(pdfModel.VehicleId);
            var vehicle = vehicleController.GetVehicles().FirstOrDefault(x => x.VehicleId == pdfModel.VehicleId);
            var url = buildpdf(carTrips, vehicle, pdfModel.FromDate, pdfModel.ToDate);
            return url;
        }
        private static string buildpdf(List<Carguide> carTrips, Vehicle vehicle, DateTime fromDate, DateTime toDate)
        {
            var destination = @"/pdfDocuments";
            var fileSuffix = string.Format("/{0}_trips.pdf", vehicle.RegNr);

            //Create destination folder if it doesn't exist
            if (!Directory.Exists(System.Web.HttpContext.Current.Server.MapPath(destination)))
                Directory.CreateDirectory(destination);

            using (Document document = new Document(PageSize.A4))
            {
                var internalPath = @"C:\Users\Administratör\Desktop\Journey_2018\Journey_2018";

                using (PdfWriter writer = PdfWriter.GetInstance(document, new FileStream(internalPath + destination + fileSuffix, FileMode.Create)))
                {
                   
                    document.Open();

                    BaseFont baseHelvetica = BaseFont.CreateFont(BaseFont.HELVETICA, BaseFont.CP1252, false);
                    Font helvetica = new Font(baseHelvetica, 20, Font.BOLD, BaseColor.BLACK);

                    var para = new Paragraph("Vehicle report for: " + vehicle.RegNr, helvetica);
                    para.Alignment = 1;
                    para.SpacingAfter = 20;
                    document.Add(para);

                    
                    foreach (var carguide in carTrips)
                    {
                      
                        PdfPTable table = new PdfPTable(2);
                        PdfPCell cell = new PdfPCell(new Phrase("Trip Id Number: " + carguide.CarguideId));
                        cell.Colspan = 2;
                        cell.BackgroundColor = BaseColor.CYAN;

                        cell.HorizontalAlignment = 1;
                        cell.Padding = 5;
                        table.AddCell(cell);

                        table.AddCell("Trip Date");
                        table.AddCell(carguide.Date.ToString());

                        table.AddCell("Start Address");
                        table.AddCell(carguide.StartDes);

                        table.AddCell("Destination Address");
                        table.AddCell(carguide.StopDes);

                        table.AddCell("Total Distance (km)");
                        table.AddCell(((carguide.KmStop) - (carguide.KmStart)).ToString());

                        table.AddCell("Errand");
                        table.AddCell(carguide.Andtek);

                        table.AddCell("Notes");
                        table.AddCell(carguide.Arende);

                        table.PaddingTop = 10;
                        table.SpacingAfter = 10;
                        document.Add(table);
                    }
                    document.Close();
                }
            }
           
            return string.Format("{0}{1}", destination, fileSuffix);
        }

        
    }
}
