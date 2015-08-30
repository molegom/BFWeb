using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BestFiendsWeb.Business
{
    public class Border
    {
        public BorderEnum BorderValue { get; set; }
        public bool IsVertical { get; set; }
        public int StartValue { get; set; }
        public int EndValue { get; set; }
    }
}