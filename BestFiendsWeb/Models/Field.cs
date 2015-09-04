using System;
using System.Collections.Generic;

namespace BestFiendsWeb.Models
{
    public class Field
    {
        public int SizeX { get; set; }
        public int SizeY { get; set; }

        public List<string> colors = new List<string>(); 

        private Random rnd = new Random();
        private Dictionary<int,string> colorPallette = new Dictionary<int, string>();
        public Field(int sizeX, int sizeY)
        {           
            SizeX = sizeX;
            SizeY = sizeY;

            colorPallette.Add(0, "#FFFFFF");
            colorPallette.Add(1, "#0000FF");
            colorPallette.Add(2, "#00FF00");
            colorPallette.Add(3, "#00FFFF");
            colorPallette.Add(4, "#FF0000");
            colorPallette.Add(5, "#FF00FF");
            colorPallette.Add(6, "#FFFF00");

            for (int i = 0; i <= sizeX*sizeY; i++)
            {
                int currentColor = rnd.Next(5);
                colors.Add(colorPallette[currentColor]);
            }
        }
    }
}