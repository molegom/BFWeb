using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BestFiendsWeb.Business
{
    public class BorderCell
    {
        public BorderEnum TopBorder { get; set; }
        public BorderEnum RightBorder { get; set; }
        public BorderEnum BottomBorder { get; set; }
        public BorderEnum LeftBorder { get; set; }
    }
}