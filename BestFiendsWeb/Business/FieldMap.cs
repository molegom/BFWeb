using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Web;

namespace BestFiendsWeb.Business
{
    public class FieldMap
    {
        public int Width { get; set; }   //X
        public int Height { get; set; }  //Y
        public List<Cell> Cells { get; set; }
        public List<BorderEnum> Borders { get; set; }

        public bool Select(List<Cell> checkCells)
        {
            if (checkCells.Count < 3)
            {
                return false;
            }
            List<Cell> selectedCells = new List<Cell>();
            Cell currentCell = checkCells.FirstOrDefault();

            for (int i = 1; i < checkCells.Count-1; i++)
            {
                if (!currentCell.IsNeighbour(checkCells[i]))
                {
                    return false;
                }
                if (selectedCells.Contains(currentCell))
                {
                    return false;
                }
                selectedCells.Add(currentCell);
                currentCell = checkCells[i];
            }
            return true;
        }
    }
}