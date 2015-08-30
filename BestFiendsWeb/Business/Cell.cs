using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BestFiendsWeb.Business
{
    public class Cell
    {
        public int X { get; set; }
        public int Y { get; set; }
        public CellEnum Body { get; set; }
        public BorderCell BodyBorders { get; set; }

        public override bool Equals(object obj)
        {
            Cell c = obj as Cell;
            if (c == null)
            {
                return false;
            }
            return this.Body == c.Body;
        }

        public override int GetHashCode()
        {
            return this.Body.GetHashCode();
        }

        public bool IsNeighbour(Cell neighbourCell)
        {
            bool IsNeighboutHoriz = Math.Abs(neighbourCell.X - this.X) <= 1;
            bool IsNeighboutVert = Math.Abs(neighbourCell.Y - this.Y) <= 1;
            return IsNeighboutVert && IsNeighboutHoriz;
        }
    }
}