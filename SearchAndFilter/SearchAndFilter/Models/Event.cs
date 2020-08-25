using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SearchAndFilter.Models
{
    public class Event
    {
        public int EventId { get; set; }
        public string EventName { get; set; }
        public string EventSummary { get; set; }
        public string EventKeyword { get; set; }
        public string EventSort { get; set; }
        public int CategoryId { get; set; }
    }
}
