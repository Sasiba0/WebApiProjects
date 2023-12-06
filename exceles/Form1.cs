using Microsoft.Office.Interop.Excel;
using Xl = Microsoft.Office.Interop.Excel;
namespace exceles
{
    public partial class Form1 : Form
    {
        
        public Form1()
        
        {
            
            Xl.Application xlApp = new Xl.Application(); ;
            Xl.Workbook xlWB = new Xl.Workbook(); ;
            Xl.Worksheet xlSheet = new Xl.Worksheet(); ;

            try
            {
                CreateTable();
                xlApp.Visible = true;
                xlApp.UserControl = true;
            }
            catch (Exception ex)
            {

                string errMSG = string.Format("Error: {0}\nLine: {1}", ex.Message, ex.Source);
                MessageBox.Show(errMSG);

                xlWB.Close(false, Type.Missing, Type.Missing);
                xlApp.Quit();
                xlWB = null;
                xlApp = null;
            }

            void CreateTable()
            {
                string[] fejlécek = new string[] {

        "Kérdés",

        "1. válasz",

        "2. válaszl",

        "3. válasz",

        "Helyes válasz",

        "kép"};

                for (int i = 0; i < fejlécek.Length; i++)
                {
                    xlSheet.Cells[1, i + 1] = fejlécek[i];
                }
            }
            InitializeComponent();
        }

        

        
    }
}